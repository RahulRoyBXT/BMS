// Pricing data for the BookMyShow application
import { theatersData } from './theatersData';

export interface SeatCategory {
  id: string;
  name: string;
  description?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  basePrice: number;
  applicableDays: string[]; // "weekday", "weekend", "holiday"
  description?: string;
}

export interface ScreenPricing {
  screenId: string;
  seatCategories: {
    categoryId: string;
    pricingTiers: {
      tierId: string;
      surcharge: number; // Additional amount on top of base price
    }[];
  }[];
}

export interface TheaterPricing {
  theaterId: string;
  screenPricing: ScreenPricing[];
}

export interface Format3DSurcharge {
  format: string;
  surcharge: number;
}

export const seatCategories: SeatCategory[] = [
  {
    id: "cat1",
    name: "Standard",
    description: "Regular comfortable seating"
  },
  {
    id: "cat2",
    name: "Premium",
    description: "Enhanced seating with better view and more legroom"
  },
  {
    id: "cat3",
    name: "VIP",
    description: "Recliner seats with personal space and service"
  },
  {
    id: "cat4",
    name: "Couples",
    description: "Special seating for couples with privacy"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: "tier1",
    name: "Morning",
    basePrice: 120,
    applicableDays: ["weekday", "weekend", "holiday"],
    description: "Shows before 12:00 PM"
  },
  {
    id: "tier2",
    name: "Matinee",
    basePrice: 160,
    applicableDays: ["weekday"],
    description: "Weekday shows between 12:00 PM and 5:00 PM"
  },
  {
    id: "tier3",
    name: "Evening",
    basePrice: 200,
    applicableDays: ["weekday"],
    description: "Weekday shows after 5:00 PM"
  },
  {
    id: "tier4",
    name: "Weekend Regular",
    basePrice: 240,
    applicableDays: ["weekend"],
    description: "Weekend shows between 12:00 PM and 5:00 PM"
  },
  {
    id: "tier5",
    name: "Weekend Prime",
    basePrice: 280,
    applicableDays: ["weekend"],
    description: "Weekend shows after 5:00 PM"
  },
  {
    id: "tier6",
    name: "Holiday",
    basePrice: 300,
    applicableDays: ["holiday"],
    description: "Shows on national holidays"
  },
  {
    id: "tier7",
    name: "Weekend Morning",
    basePrice: 160,
    applicableDays: ["weekend"],
    description: "Weekend shows before 12:00 PM"
  },
  {
    id: "tier8",
    name: "Late Night",
    basePrice: 220,
    applicableDays: ["weekday", "weekend", "holiday"],
    description: "Shows starting after 10:30 PM"
  }
];

export const formatSurcharges: Format3DSurcharge[] = [
  {
    format: "3D",
    surcharge: 50
  },
  {
    format: "IMAX",
    surcharge: 100
  },
  {
    format: "IMAX 3D",
    surcharge: 150
  },
  {
    format: "4DX",
    surcharge: 250
  },
  {
    format: "ScreenX",
    surcharge: 120
  }
];

// Generate pricing data for all theaters dynamically
export const theaterPricing: TheaterPricing[] = theatersData.map(theater => {
  return {
    theaterId: theater.id,
    screenPricing: theater.screens.map(screen => {
      // Determine base surcharges based on screen features
      const hasImax = screen.features.some(feature => feature.includes("IMAX"));
      const hasDolbyAtmos = screen.features.some(feature => feature.includes("Dolby Atmos"));
      const hasRecliner = screen.features.some(feature => feature.includes("Recliner"));
      
      const premiumSurcharge = hasImax ? 80 : hasDolbyAtmos ? 50 : 30;
      const vipBaseSurcharge = hasRecliner ? 300 : 200;
      
      // Return screen pricing with appropriate surcharges for each category
      return {
        screenId: screen.id,
        seatCategories: [
          {
            categoryId: "cat1",
            pricingTiers: pricingTiers.map(tier => ({
              tierId: tier.id,
              surcharge: 0 // Standard seats have no surcharge
            }))
          },
          {
            categoryId: "cat2",
            pricingTiers: pricingTiers.map(tier => ({
              tierId: tier.id,
              surcharge: premiumSurcharge // Premium seats have a surcharge
            }))
          },
          {
            categoryId: "cat3",
            pricingTiers: pricingTiers.map(tier => ({
              tierId: tier.id,
              surcharge: vipBaseSurcharge // VIP seats have a larger surcharge
            }))
          },
          // Couples seats only available in special screens
          ...(theater.id === "theater2" || theater.id === "theater4" ? [{
            categoryId: "cat4",
            pricingTiers: pricingTiers.map(tier => ({
              tierId: tier.id,
              surcharge: vipBaseSurcharge + 100 // Couples seats have extra surcharge
            }))
          }] : [])
        ]
      };
    })
  };
});

// Calculate the final ticket price based on various factors
export const calculateTicketPrice = (
  basePrice: number,
  surcharge: number,
  formatSurcharge: number,
  isWeekend: boolean,
  isHoliday: boolean
): number => {
  let finalPrice = basePrice + surcharge + formatSurcharge;
  
  // Apply weekend/holiday surge
  if (isHoliday) {
    finalPrice *= 1.2; // 20% extra on holidays
  } else if (isWeekend) {
    finalPrice *= 1.1; // 10% extra on weekends
  }
  
  // Round to nearest 10
  return Math.ceil(finalPrice / 10) * 10;
};

// Example ticket price calculation for different scenarios
export const sampleTicketPrices = {
  standard: {
    weekdayMorning: calculateTicketPrice(120, 0, 0, false, false), // 120
    weekdayEvening: calculateTicketPrice(200, 0, 0, false, false), // 200
    weekendEvening: calculateTicketPrice(280, 0, 0, true, false), // 310
    holidayEvening: calculateTicketPrice(300, 0, 0, false, true)  // 360
  },
  premium: {
    weekdayMorning: calculateTicketPrice(120, 50, 0, false, false), // 170
    weekdayEvening: calculateTicketPrice(200, 50, 0, false, false), // 250
    weekendEvening: calculateTicketPrice(280, 50, 0, true, false), // 360
    holidayEvening: calculateTicketPrice(300, 50, 0, false, true)  // 420
  },
  vip: {
    weekdayMorning: calculateTicketPrice(120, 300, 0, false, false), // 420
    weekdayEvening: calculateTicketPrice(200, 300, 0, false, false), // 500
    weekendEvening: calculateTicketPrice(280, 300, 0, true, false), // 640
    holidayEvening: calculateTicketPrice(300, 300, 0, false, true)  // 720
  },
  imax3d: {
    weekdayMorning: calculateTicketPrice(120, 0, 150, false, false), // 270
    weekdayEvening: calculateTicketPrice(200, 0, 150, false, false), // 350
    weekendEvening: calculateTicketPrice(280, 0, 150, true, false), // 480
    holidayEvening: calculateTicketPrice(300, 0, 150, false, true)  // 540
  },
  vipImax3d: {
    weekdayMorning: calculateTicketPrice(120, 300, 150, false, false), // 570
    weekdayEvening: calculateTicketPrice(200, 300, 150, false, false), // 650
    weekendEvening: calculateTicketPrice(280, 300, 150, true, false), // 800
    holidayEvening: calculateTicketPrice(300, 300, 150, false, true)  // 900
  }
};
