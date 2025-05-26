// Ticket booking and seat availability data
import type { ShowTime } from './showTimesData';
import { theatersData } from './theatersData';
// import { seatCategories } from './pricingData';

export interface Seat {
  id: string;
  row: string; // A, B, C, etc.
  number: number;
  categoryId: string; // References seatCategories
  status: 'available' | 'reserved' | 'booked' | 'blocked';
}

export interface SeatMap {
  showTimeId: string;
  seats: Seat[];
  lastUpdated: string; // ISO date string
}

export interface Booking {
  id: string;
  userId: string;
  showTimeId: string;
  seats: string[]; // Array of seat IDs
  totalAmount: number;
  bookingDate: string; // ISO date string
  paymentMethod: string;
  status: 'confirmed' | 'cancelled' | 'pending';
  qrCode?: string;
  transactionId?: string;
}

// Helper to generate a seat ID
const generateSeatId = (showTimeId: string, row: string, number: number): string => {
  return `${showTimeId}_${row}${number}`;
};

// Helper to determine seat category based on row
const determineSeatCategory = (rowIndex: number, screenLayoutInfo: any): string => {
  const { premiumRows, vipRows } = screenLayoutInfo;
  
  if (vipRows && vipRows.includes(rowIndex)) {
    return "cat3"; // VIP
  } else if (premiumRows && premiumRows.includes(rowIndex)) {
    return "cat2"; // Premium
  }
  return "cat1"; // Standard
};

// Helper function to randomly determine seat status with weighted probabilities
const generateSeatStatus = (showDate: string): 'available' | 'reserved' | 'booked' | 'blocked' => {
  const now = new Date();
  const showDateTime = new Date(showDate);
  const daysUntilShow = Math.floor((showDateTime.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  // Adjust booking probability based on days until show
  let bookedProbability = 0;
  if (daysUntilShow <= 1) {
    bookedProbability = 0.65; // 65% of seats booked for very soon shows
  } else if (daysUntilShow <= 3) {
    bookedProbability = 0.45; // 45% of seats booked for shows within 3 days
  } else if (daysUntilShow <= 5) {
    bookedProbability = 0.25; // 25% of seats booked for shows within 5 days
  } else {
    bookedProbability = 0.1; // 10% of seats booked for shows more than 5 days away
  }
  
  const random = Math.random();
  if (random < bookedProbability) {
    return 'booked';
  } else if (random < bookedProbability + 0.05) {
    return 'reserved'; // 5% of seats are reserved
  } else if (random < bookedProbability + 0.06) {
    return 'blocked'; // 1% of seats are blocked (for maintenance, etc)
  } else {
    return 'available';
  }
};

// Generate seat maps for all showtimes (this is a dummy function that would generate a lot of data)
export const generateSeatMapsForShowTimes = (showTimes: ShowTime[]): SeatMap[] => {
  const seatMaps: SeatMap[] = [];
  
  for (const showTime of showTimes) {
    // Find the theater and screen for this showtime
    const theater = theatersData.find(t => t.id === showTime.theaterId);
    if (!theater) continue;
    
    const screen = theater.screens.find(s => s.id === showTime.screenId);
    if (!screen) continue;
    
    const { rows, columns, premiumRows, vipRows } = screen.seatingLayout;
    const seats: Seat[] = [];
    
    // Generate seat data for each row and column
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      const rowLetter = String.fromCharCode(65 + rowIndex); // A, B, C, ...
      
      for (let colIndex = 0; colIndex < columns; colIndex++) {
        // Skip some seats to create aisle space and realistic layout
        if ((colIndex === 3 || colIndex === columns - 4) && rowIndex < rows - 2) {
          continue;
        }
        
        // Add seat
        const seatNumber = colIndex + 1;
        seats.push({
          id: generateSeatId(showTime.id, rowLetter, seatNumber),
          row: rowLetter,
          number: seatNumber,
          categoryId: determineSeatCategory(rowIndex, { premiumRows, vipRows }),
          status: generateSeatStatus(showTime.date)
        });
      }
    }
    
    // Add the seat map for this showtime
    seatMaps.push({
      showTimeId: showTime.id,
      seats,
      lastUpdated: new Date().toISOString()
    });
  }
  
  return seatMaps;
};

// This is a dummy function - in a real app, this would be API-driven
export const getSeatMapForShowTime = (showTimeId: string, seatMaps: SeatMap[]): SeatMap | null => {
  return seatMaps.find(map => map.showTimeId === showTimeId) || null;
};

// Sample bookings data (would be generated based on actual user bookings)
export const generateSampleBookings = (count: number): Booking[] => {
  const bookings: Booking[] = [];
  const paymentMethods = ["Credit Card", "Debit Card", "Net Banking", "UPI", "Wallet"];
  const statuses: ('confirmed' | 'cancelled' | 'pending')[] = ["confirmed", "cancelled", "pending"];
  
  for (let i = 1; i <= count; i++) {
    const bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() - Math.floor(Math.random() * 30)); // Random date within last 30 days
    
    bookings.push({
      id: `booking${i}`,
      userId: `user${Math.floor(Math.random() * 100) + 1}`,
      showTimeId: `show${Math.floor(Math.random() * 100) + 1}`,
      seats: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, // 1-4 seats per booking
        () => `seat${Math.floor(Math.random() * 200) + 1}`),
      totalAmount: Math.floor(Math.random() * 3000) + 200, // Random amount between 200-3200
      bookingDate: bookingDate.toISOString(),
      paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      qrCode: `https://example.com/qr/booking${i}`,
      transactionId: `T${Math.floor(1000000000 + Math.random() * 9000000000)}`
    });
  }
  
  return bookings;
};

// Generate a sample of 50 bookings
export const sampleBookings: Booking[] = generateSampleBookings(50);

// Function that would be called to get seat availability for a showtime
export const getSeatAvailability = (showTimeId: string): SeatMap | null => {
  // In a real application, this would fetch from an API or database
  // Here we're just returning a dummy seat map with randomized availability
  const theater = theatersData[Math.floor(Math.random() * theatersData.length)];
  const screen = theater.screens[Math.floor(Math.random() * theater.screens.length)];
  
  const { rows, columns, premiumRows, vipRows } = screen.seatingLayout;
  const seats: Seat[] = [];
  
  // Generate randomized seat data
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const rowLetter = String.fromCharCode(65 + rowIndex);
    
    for (let colIndex = 0; colIndex < columns; colIndex++) {
      // Skip some seats to create aisle space
      if ((colIndex === 3 || colIndex === columns - 4) && rowIndex < rows - 2) {
        continue;
      }
      
      const seatNumber = colIndex + 1;
      seats.push({
        id: generateSeatId(showTimeId, rowLetter, seatNumber),
        row: rowLetter,
        number: seatNumber,
        categoryId: determineSeatCategory(rowIndex, { premiumRows, vipRows }),
        status: generateSeatStatus(new Date().toISOString().split('T')[0])
      });
    }
  }
  
  return {
    showTimeId: showTimeId,
    seats: seats,
    lastUpdated: new Date().toISOString()
  };
};

export const bookingFees = {
  base: 20,
  convenience: 30,
  gst: 0.18 // 18% GST
};

export const calculateBookingFees = (baseAmount: number): {
  baseAmount: number;
  convenienceFee: number;
  gstAmount: number;
  totalAmount: number;
} => {
  const convenienceFee = bookingFees.base + bookingFees.convenience;
  const gstAmount = (baseAmount + convenienceFee) * bookingFees.gst;
  const totalAmount = baseAmount + convenienceFee + gstAmount;
  
  return {
    baseAmount,
    convenienceFee,
    gstAmount,
    totalAmount: Math.round(totalAmount)
  };
};
