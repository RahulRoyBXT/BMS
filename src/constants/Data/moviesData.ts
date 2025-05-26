// Movie data for the BookMyShow application
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  bannerUrl: string;
  releaseDate: string;
  runtime: number; // in minutes
  genre: string[];
  language: string[];
  certification: string; // U, UA, A, etc.
  format: string[]; // 2D, 3D, IMAX, etc.
  director: string;
  cast: string[];
  synopsis: string;
  trailerUrl?: string;
  userRating?: number;
  criticRating?: number;
}

export const moviesData: Movie[] = [
  {
    id: "movie1",
    title: "Avengers: Secret Wars",
    posterUrl: "https://example.com/avengers_poster.jpg",
    bannerUrl: "https://example.com/avengers_banner.jpg",
    releaseDate: "2025-05-01",
    runtime: 156,
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: ["English", "Hindi", "Tamil", "Telugu"],
    certification: "UA",
    format: ["2D", "3D", "4DX", "IMAX 3D"],
    director: "Anthony Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo"],
    synopsis: "The Avengers reunite to face their most powerful enemy yet in this epic conclusion to phase 5.",
    trailerUrl: "https://youtube.com/watch?v=avengers-secret-wars",
    userRating: 4.8,
    criticRating: 4.5
  },
  {
    id: "movie2",
    title: "Chennai Express 2",
    posterUrl: "https://example.com/chennai_express_2_poster.jpg",
    bannerUrl: "https://example.com/chennai_express_2_banner.jpg",
    releaseDate: "2025-05-15",
    runtime: 145,
    genre: ["Comedy", "Romance", "Action"],
    language: ["Hindi", "Tamil", "Telugu"],
    certification: "U",
    format: ["2D", "IMAX"],
    director: "Rohit Shetty",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "Sathyaraj", "Niketan Dheer"],
    synopsis: "The sequel to the blockbuster hit continues the journey of Rahul and Meenamma with more comedy and action.",
    userRating: 4.3,
    criticRating: 3.8
  },
  {
    id: "movie3",
    title: "Inception: Rebirth",
    posterUrl: "https://example.com/inception_rebirth_poster.jpg",
    bannerUrl: "https://example.com/inception_rebirth_banner.jpg",
    releaseDate: "2025-04-28",
    runtime: 162,
    genre: ["Sci-Fi", "Action", "Thriller"],
    language: ["English", "Hindi"],
    certification: "A",
    format: ["2D", "IMAX"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Tom Hardy", "Elliot Page", "Cillian Murphy"],
    synopsis: "Dom Cobb returns for one final job that could change the very nature of reality and dreams.",
    trailerUrl: "https://youtube.com/watch?v=inception-rebirth",
    userRating: 4.9,
    criticRating: 4.7
  },
  {
    id: "movie4",
    title: "Bahubali: The Legacy",
    posterUrl: "https://example.com/bahubali_legacy_poster.jpg",
    bannerUrl: "https://example.com/bahubali_legacy_banner.jpg",
    releaseDate: "2025-05-10",
    runtime: 175,
    genre: ["Action", "Drama", "Fantasy"],
    language: ["Telugu", "Tamil", "Hindi", "Malayalam"],
    certification: "UA",
    format: ["2D", "3D", "IMAX 3D"],
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Anushka Shetty", "Rana Daggubati", "Tamannaah"],
    synopsis: "The legacy of Mahishmati continues as a new heir faces ancient enemies and discovers the truth about their lineage.",
    userRating: 4.7,
    criticRating: 4.4
  },
  {
    id: "movie5",
    title: "Meri Pyaari Bindu 2",
    posterUrl: "https://example.com/meri_pyaari_bindu_2_poster.jpg",
    bannerUrl: "https://example.com/meri_pyaari_bindu_2_banner.jpg",
    releaseDate: "2025-05-20",
    runtime: 128,
    genre: ["Romance", "Drama", "Comedy"],
    language: ["Hindi"],
    certification: "U",
    format: ["2D"],
    director: "Akshay Roy",
    cast: ["Ayushmann Khurrana", "Parineeti Chopra"],
    synopsis: "Years after their separation, Abhimanyu and Bindu reconnect, reigniting old feelings and new complications.",
    userRating: 3.9,
    criticRating: 3.6
  },
  {
    id: "movie6",
    title: "KGF: Chapter 3",
    posterUrl: "https://example.com/kgf_3_poster.jpg",
    bannerUrl: "https://example.com/kgf_3_banner.jpg",
    releaseDate: "2025-04-14",
    runtime: 170,
    genre: ["Action", "Crime", "Drama"],
    language: ["Kannada", "Hindi", "Tamil", "Telugu", "Malayalam"],
    certification: "A",
    format: ["2D", "IMAX"],
    director: "Prashanth Neel",
    cast: ["Yash", "Srinidhi Shetty", "Sanjay Dutt", "Raveena Tandon"],
    synopsis: "The final chapter in the KGF saga reveals the ultimate fate of Rocky and the empire he built.",
    trailerUrl: "https://youtube.com/watch?v=kgf-chapter-3",
    userRating: 4.9,
    criticRating: 4.6
  },
  {
    id: "movie6",
    title: "Jurassic World: New Age",
    posterUrl: "https://example.com/jurassic_world_new_age_poster.jpg",
    bannerUrl: "https://example.com/jurassic_world_new_age_banner.jpg",
    releaseDate: "2025-05-08",
    runtime: 138,
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: ["English", "Hindi", "Tamil", "Telugu"],
    certification: "UA",
    format: ["2D", "3D", "IMAX 3D"],
    director: "Colin Trevorrow",
    cast: ["Chris Pratt", "Bryce Dallas Howard", "Sam Neill", "Laura Dern"],
    synopsis: "Dinosaurs now live alongside humans in a fragile balance that will reshape the future of the planet.",
    trailerUrl: "https://youtube.com/watch?v=jurassic-world-new-age",
    userRating: 4.2,
    criticRating: 3.9
  },
  {
    id: "movie7",
    title: "The Ghazi Attack 2",
    posterUrl: "https://example.com/ghazi_attack_2_poster.jpg",
    bannerUrl: "https://example.com/ghazi_attack_2_banner.jpg",
    releaseDate: "2025-05-17",
    runtime: 135,
    genre: ["Action", "Thriller", "War"],
    language: ["Hindi", "Telugu", "Tamil"],
    certification: "UA",
    format: ["2D"],
    director: "Sankalp Reddy",
    cast: ["Rana Daggubati", "Kay Kay Menon", "Atul Kulkarni"],
    synopsis: "The untold story of another classified underwater mission by the Indian Navy that changed the course of history.",
    userRating: 4.5,
    criticRating: 4.2
  },
  {
    id: "movie8",
    title: "Andhadhun 2: The Final Act",
    posterUrl: "https://example.com/andhadhun_2_poster.jpg",
    bannerUrl: "https://example.com/andhadhun_2_banner.jpg",
    releaseDate: "2025-05-12",
    runtime: 142,
    genre: ["Crime", "Thriller", "Black Comedy"],
    language: ["Hindi"],
    certification: "UA",
    format: ["2D"],
    director: "Sriram Raghavan",
    cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte"],
    synopsis: "The blind pianist returns with more twists in this sequel to the critically acclaimed thriller.",
    userRating: 4.7,
    criticRating: 4.6
  },
  {
    id: "movie9",
    title: "Pushpa 2: The Rule",
    posterUrl: "https://example.com/pushpa_2_poster.jpg",
    bannerUrl: "https://example.com/pushpa_2_banner.jpg",
    releaseDate: "2025-04-25",
    runtime: 165,
    genre: ["Action", "Crime", "Drama"],
    language: ["Telugu", "Hindi", "Tamil", "Malayalam", "Kannada"],
    certification: "A",
    format: ["2D", "IMAX"],
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    synopsis: "Pushpa Raj returns to continue his reign in the red sandalwood smuggling syndicate while facing new enemies.",
    trailerUrl: "https://youtube.com/watch?v=pushpa-2-the-rule",
    userRating: 4.8,
    criticRating: 4.4
  },
  {
    id: "movie10",
    title: "Mission Impossible: Final Horizon",
    posterUrl: "https://example.com/mission_impossible_final_poster.jpg",
    bannerUrl: "https://example.com/mission_impossible_final_banner.jpg",
    releaseDate: "2025-05-22",
    runtime: 158,
    genre: ["Action", "Adventure", "Thriller"],
    language: ["English", "Hindi"],
    certification: "UA",
    format: ["2D", "IMAX"],
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Rebecca Ferguson", "Simon Pegg", "Ving Rhames"],
    synopsis: "Ethan Hunt faces his most personal mission yet as he confronts ghosts from his past in this final installment.",
    trailerUrl: "https://youtube.com/watch?v=mission-impossible-final",
    userRating: 4.9,
    criticRating: 4.8
  }
];
