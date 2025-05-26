// Showtimes data for the BookMyShow application
import { moviesData } from './moviesData';
import { theatersData } from './theatersData';

export interface ShowTime {
  id: string;
  movieId: string;
  theaterId: string;
  screenId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // 24-hour format (HH:MM)
  endTime: string; // 24-hour format (HH:MM)
  language: string;
  format: string; // 2D, 3D, IMAX, etc.
  isAlmostFull?: boolean;
  isFastFilling?: boolean;
}

// Helper function to format time based on movie runtime
const calculateEndTime = (startTime: string, runtimeMinutes: number): string => {
  const [hours, minutes] = startTime.split(':').map(Number);
  const endDate = new Date(2025, 0, 1, hours, minutes);
  endDate.setMinutes(endDate.getMinutes() + runtimeMinutes);
  
  return `${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}`;
};

// Helper function to generate show times for the next 7 days
const generateShowTimesForWeek = () => {
  const showTimes: ShowTime[] = [];
  let showTimeId = 1;

  // Get today's date and the next 7 days
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  });

  // Standard show time slots with slight variations per theater
  const baseTimeSlots = [
    ["09:00", "12:15", "15:30", "18:45", "22:00"],
    ["09:30", "12:45", "16:00", "19:15", "22:30"],
    ["10:00", "13:15", "16:30", "19:45", "23:00"]
  ];

  // For each movie
  for (const movie of moviesData) {
    // For each theater
    theatersData.forEach((theater, theaterIndex) => {
      // Select base time slots with some variation based on theater
      const selectedBaseTimeSlots = baseTimeSlots[theaterIndex % baseTimeSlots.length];
      
      // For each screen in the theater (not all screens show all movies)
      theater.screens.forEach((screen, screenIndex) => {
        // Check if this screen should show this movie (basic logic - alternate screens for variety)
        const shouldShowMovie = (screenIndex + movie.id.charCodeAt(movie.id.length-1)) % 2 === 0;
        
        if (!shouldShowMovie) return;
        
        // Check if the screen features support movie format
        const supportedFormats = movie.format.filter(format => {
          if (format === "IMAX" || format === "IMAX 3D") {
            return screen.features.some(f => f.includes("IMAX"));
          }
          if (format === "4DX") {
            return screen.features.some(f => f.includes("Motion") || f.includes("4D"));
          }
          return true; // All screens support 2D, 3D
        });
        
        if (supportedFormats.length === 0) return;
        
        // For each date
        for (const date of dates) {
          // Select which time slots to use for this screen-date combination
          const timeSlots = selectedBaseTimeSlots.filter((_, i) => {
            // Skip early morning for some screens/dates
            if (i === 0 && Math.random() > 0.7) return false;
            // Skip late night for some screens/dates
            if (i === selectedBaseTimeSlots.length - 1 && Math.random() > 0.7) return false;
            return true;
          });

          // For each selected time slot
          for (const startTime of timeSlots) {
            // Select a random language and format from the movie's supported options
            const language = movie.language[Math.floor(Math.random() * movie.language.length)];
            const format = supportedFormats[Math.floor(Math.random() * supportedFormats.length)];
            
            // Calculate end time based on movie runtime
            const endTime = calculateEndTime(startTime, movie.runtime);
            
            // Randomly set isAlmostFull and isFastFilling flags
            const isAlmostFull = Math.random() > 0.7;
            const isFastFilling = !isAlmostFull && Math.random() > 0.7;
            
            // Create the show time
            showTimes.push({
              id: `show${showTimeId++}`,
              movieId: movie.id,
              theaterId: theater.id,
              screenId: screen.id,
              date,
              startTime,
              endTime,
              language,
              format,
              isAlmostFull,
              isFastFilling
            });
          }
        }
      });
    });
  }

  return showTimes;
};

export const showTimesData: ShowTime[] = generateShowTimesForWeek();

// Function to filter showtimes by movie and date
export const getShowTimesByMovie = (movieId: string, date?: string): ShowTime[] => {
  return showTimesData.filter(showTime => 
    showTime.movieId === movieId && 
    (!date || showTime.date === date)
  );
};

// Function to filter showtimes by theater and date
export const getShowTimesByTheater = (theaterId: string, date?: string): ShowTime[] => {
  return showTimesData.filter(showTime => 
    showTime.theaterId === theaterId && 
    (!date || showTime.date === date)
  );
};

// Function to get all showtimes for a specific date
export const getShowTimesByDate = (date: string): ShowTime[] => {
  return showTimesData.filter(showTime => showTime.date === date);
};

// Function to get showtimes by movie and theater
export const getShowTimesByMovieAndTheater = (movieId: string, theaterId: string, date?: string): ShowTime[] => {
  return showTimesData.filter(showTime => 
    showTime.movieId === movieId && 
    showTime.theaterId === theaterId &&
    (!date || showTime.date === date)
  );
};
