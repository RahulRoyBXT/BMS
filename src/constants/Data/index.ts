// Index file to export all data from the constants folder
export * from './moviesData';
export * from './theatersData';
export * from './showTimesData';
export * from './pricingData';
export * from './bookingData';

// Additional constants for the application

// Supported languages for the UI
export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'kn', name: 'Kannada' },
  { code: 'bn', name: 'Bengali' },
  { code: 'mr', name: 'Marathi' }
];

// App configuration
export const appConfig = {
  appName: 'BookMyShow',
  currencySymbol: '₹',
  defaultLanguage: 'en',
  bookingFeePercentage: 10, // 10% booking fee
  gstPercentage: 18, // 18% GST
  supportEmail: 'support@bookmyshowapp.com',
  contactPhone: '+91 1234567890',
  socialMedia: {
    facebook: 'https://facebook.com/bookmyshowapp',
    twitter: 'https://twitter.com/bookmyshowapp',
    instagram: 'https://instagram.com/bookmyshowapp'
  },
  paymentMethods: [
    'Credit Card',
    'Debit Card',
    'Net Banking',
    'UPI',
    'Wallet',
    'PayTM',
    'PhonePe',
    'GooglePay'
  ],
  maxTicketsPerBooking: 10,
  minTicketsPerBooking: 1
};

// Movie genres for filtering
export const movieGenres = [
  { id: 'action', name: 'Action' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'comedy', name: 'Comedy' },
  { id: 'drama', name: 'Drama' },
  { id: 'fantasy', name: 'Fantasy' },
  { id: 'horror', name: 'Horror' },
  { id: 'mystery', name: 'Mystery' },
  { id: 'romance', name: 'Romance' },
  { id: 'sci-fi', name: 'Sci-Fi' },
  { id: 'thriller', name: 'Thriller' },
  { id: 'western', name: 'Western' },
  { id: 'animation', name: 'Animation' },
  { id: 'documentary', name: 'Documentary' },
  { id: 'biography', name: 'Biography' }
];

// Movie certifications
export const movieCertifications = [
  { code: 'U', description: 'Unrestricted Public Exhibition' },
  { code: 'UA', description: 'Parental Guidance for children below age 12' },
  { code: 'A', description: 'Restricted to adults (18 years and above)' },
  { code: 'S', description: 'Restricted to a specialized audience such as doctors' }
];

// Movie formats
export const movieFormats = [
  { id: '2d', name: '2D' },
  { id: '3d', name: '3D' },
  { id: 'imax', name: 'IMAX' },
  { id: 'imax3d', name: 'IMAX 3D' },
  { id: '4dx', name: '4DX' },
  { id: 'screenx', name: 'ScreenX' },
  { id: 'dolby', name: 'Dolby Cinema' }
];

// Days of the week for show filtering
export const daysOfWeek = [
  { id: 'monday', name: 'Monday' },
  { id: 'tuesday', name: 'Tuesday' },
  { id: 'wednesday', name: 'Wednesday' },
  { id: 'thursday', name: 'Thursday' },
  { id: 'friday', name: 'Friday' },
  { id: 'saturday', name: 'Saturday' },
  { id: 'sunday', name: 'Sunday' }
];

// Holiday dates for special pricing
export const holidays2025 = [
  { date: '2025-01-01', name: 'New Year\'s Day' },
  { date: '2025-01-26', name: 'Republic Day' },
  { date: '2025-03-17', name: 'Holi' },
  { date: '2025-04-14', name: 'Dr. Ambedkar Jayanti' },
  { date: '2025-04-18', name: 'Good Friday' },
  { date: '2025-05-01', name: 'Labour Day' },
  { date: '2025-08-15', name: 'Independence Day' },
  { date: '2025-10-02', name: 'Gandhi Jayanti' },
  { date: '2025-10-23', name: 'Dussehra' },
  { date: '2025-11-12', name: 'Diwali' },
  { date: '2025-12-25', name: 'Christmas' }
];

// Theater amenities for filtering
export const theaterAmenities = [
  { id: 'parking', name: 'Parking' },
  { id: 'food', name: 'Food Court' },
  { id: 'wheelchair', name: 'Wheelchair Accessible' },
  { id: 'wifi', name: 'WiFi' },
  { id: 'gaming', name: 'Gaming Zone' },
  { id: 'childcare', name: 'Child Care' },
  { id: 'valet', name: 'Valet Parking' }
];

// Screen features for filtering
export const screenFeatures = [
  { id: 'dolby-atmos', name: 'Dolby Atmos' },
  { id: 'dolby-digital', name: 'Dolby Digital' },
  { id: 'imax', name: 'IMAX' },
  { id: '4k', name: '4K Projection' },
  { id: 'recliner', name: 'Recliner Seats' },
  { id: '4dx', name: '4DX Motion Seats' },
  { id: 'screenx', name: '270° ScreenX' },
  { id: 'onyx', name: 'LED Screen' },
  { id: 'laser', name: 'Laser Projection' }
];

// Cities with theaters
export const popularCities = [
  { id: 'mumbai', name: 'Mumbai' },
  { id: 'delhi', name: 'Delhi' },
  { id: 'bangalore', name: 'Bangalore' },
  { id: 'chennai', name: 'Chennai' },
  { id: 'hyderabad', name: 'Hyderabad' },
  { id: 'kolkata', name: 'Kolkata' },
  { id: 'pune', name: 'Pune' },
  { id: 'ahmedabad', name: 'Ahmedabad' },
  { id: 'kochi', name: 'Kochi' }
];

// Offers and promotions
export const offers = [
  {
    id: 'offer1',
    title: '20% off on ICICI Bank Cards',
    code: 'ICICI20',
    description: 'Get 20% off up to ₹150 on movie tickets with ICICI Bank Credit/Debit Cards',
    validUntil: '2025-06-30',
    termsAndConditions: 'Offer valid once per user per month. Maximum discount of ₹150.',
    bankPartner: 'ICICI Bank'
  },
  {
    id: 'offer2',
    title: 'Buy 1 Get 1 Free on Wednesdays',
    code: 'WEDNESDAY',
    description: 'Buy one ticket and get one free on all Wednesday shows',
    validUntil: '2025-12-31',
    termsAndConditions: 'Valid only on Wednesdays. Not applicable on premium seats and 3D/IMAX shows.',
    bankPartner: null
  },
  {
    id: 'offer3',
    title: 'Flat ₹75 off with PayTM',
    code: 'PAYTM75',
    description: 'Get flat ₹75 off when you pay using PayTM',
    validUntil: '2025-05-31',
    termsAndConditions: 'Minimum transaction of ₹300. Valid once per user.',
    bankPartner: 'PayTM'
  },
  {
    id: 'offer4',
    title: '10% Cashback with Amazon Pay',
    code: 'AMAZONPAY',
    description: 'Get 10% cashback up to ₹100 when you pay with Amazon Pay',
    validUntil: '2025-07-15',
    termsAndConditions: 'Cashback will be credited within 3 working days.',
    bankPartner: 'Amazon Pay'
  },
  {
    id: 'offer5',
    title: 'First-time User Offer',
    code: 'FIRST50',
    description: 'New users get flat ₹50 off on their first booking',
    validUntil: '2025-12-31',
    termsAndConditions: 'Valid only for first-time users of the app.',
    bankPartner: null
  }
];

// User reviews for movies (sample data)
export const userReviews = [
  {
    id: 'review1',
    movieId: 'movie1',
    userId: 'user123',
    userName: 'MovieBuff42',
    rating: 4.5,
    title: 'A Perfect Conclusion to the Saga',
    content: 'Avengers: Secret Wars brings the perfect conclusion to the storyline. Amazing visual effects and emotional moments!',
    date: '2025-05-02',
    likes: 253,
    dislikes: 12
  },
  {
    id: 'review2',
    movieId: 'movie1',
    userId: 'user456',
    userName: 'MarvelFan99',
    rating: 5.0,
    title: 'Best MCU Movie Ever!',
    content: 'This is definitely the best movie in the entire MCU. The way they tied all the storylines together was brilliant!',
    date: '2025-05-01',
    likes: 427,
    dislikes: 18
  },
  {
    id: 'review3',
    movieId: 'movie2',
    userId: 'user789',
    userName: 'BollywoodLover',
    rating: 4.0,
    title: 'SRK Does it Again!',
    content: 'Shah Rukh Khan delivers another entertaining performance. The comedy sequences are hilarious!',
    date: '2025-05-16',
    likes: 189,
    dislikes: 32
  },
  {
    id: 'review4',
    movieId: 'movie3',
    userId: 'user321',
    userName: 'CinematicDreamer',
    rating: 4.8,
    title: 'A Mind-Bending Masterpiece',
    content: 'Nolan outdoes himself once again. The visuals and concepts are even more mind-bending than the original!',
    date: '2025-04-29',
    likes: 312,
    dislikes: 9
  }
];

// FAQs for booking process
export const bookingFAQs = [
  {
    question: 'How do I cancel my ticket booking?',
    answer: 'You can cancel your booking by going to "My Bookings" section and selecting the booking you want to cancel. Please note that cancellation charges may apply depending on how close to the show time you are cancelling.'
  },
  {
    question: 'Can I pick my seats when booking online?',
    answer: 'Yes, our platform allows you to select your preferred seats from the available options for your chosen show time.'
  },
  {
    question: 'How do I redeem an offer code?',
    answer: 'During the checkout process, you will see an option to enter your offer code. Enter the code and click on "Apply" to get the discount.'
  },
  {
    question: 'Can I book tickets for someone else?',
    answer: 'Yes, you can book tickets for anyone. The tickets will be sent to your registered email and phone number, which you can forward to the intended person.'
  },
  {
    question: 'What\'s the refund policy?',
    answer: 'Refund policies vary by theater and show. Generally, cancellations made more than 24 hours before the show time receive a full refund minus convenience fees. Cancellations within 24 hours may be subject to partial or no refund.'
  }
];
