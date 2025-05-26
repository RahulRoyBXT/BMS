// Theater data for the BookMyShow application
export interface Screen {
  id: string;
  name: string;
  seatingCapacity: number;
  features: string[]; // Dolby Atmos, Recliner, etc.
  seatingLayout: {
    rows: number;
    columns: number;
    premiumRows?: number[]; // Row numbers that are premium
    vipRows?: number[]; // Row numbers that are VIP
  };
}

export interface Theater {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  screens: Screen[];
  amenities: string[]; // Food court, Parking, etc.
  images?: string[];
  rating?: number;
}

export const theatersData: Theater[] = [
  {
    id: "theater1",
    name: "PVR Cinemas - Luxe",
    location: {
      address: "Phoenix Marketcity, Whitefield Main Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560048",
      coordinates: {
        latitude: 12.9983,
        longitude: 77.6953
      }
    },
    screens: [
      {
        id: "screen1_t1",
        name: "Audi 1 - IMAX",
        seatingCapacity: 280,
        features: ["IMAX", "Dolby Atmos", "4K Projection"],
        seatingLayout: {
          rows: 14,
          columns: 20,
          premiumRows: [8, 9, 10],
          vipRows: [11, 12, 13]
        }
      },
      {
        id: "screen2_t1",
        name: "Audi 2 - Gold",
        seatingCapacity: 120,
        features: ["Recliner Seats", "Dolby Atmos", "Gold Service"],
        seatingLayout: {
          rows: 10,
          columns: 12,
          premiumRows: [5, 6],
          vipRows: [7, 8, 9]
        }
      },
      {
        id: "screen3_t1",
        name: "Audi 3 - Standard",
        seatingCapacity: 200,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 10,
          columns: 20
        }
      }
    ],
    amenities: ["Parking", "Food Court", "Gaming Zone", "WiFi"],
    images: [
      "https://example.com/pvr_luxe_1.jpg",
      "https://example.com/pvr_luxe_2.jpg"
    ],
    rating: 4.7
  },
  {
    id: "theater2",
    name: "INOX - Megaplex",
    location: {
      address: "Central Mall, Film City Road, Goregaon East",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400063",
      coordinates: {
        latitude: 19.1646,
        longitude: 72.8493
      }
    },
    screens: [
      {
        id: "screen1_t2",
        name: "Insignia",
        seatingCapacity: 70,
        features: ["Recliner Seats", "Dolby Atmos", "Food Service", "4K Projection"],
        seatingLayout: {
          rows: 7,
          columns: 10,
          vipRows: [0, 1, 2, 3, 4, 5, 6] // All rows are VIP
        }
      },
      {
        id: "screen2_t2",
        name: "IMAX",
        seatingCapacity: 350,
        features: ["IMAX", "Dolby Atmos", "4K Laser Projection"],
        seatingLayout: {
          rows: 15,
          columns: 25,
          premiumRows: [8, 9, 10, 11],
          vipRows: [12, 13, 14]
        }
      },
      {
        id: "screen3_t2",
        name: "ScreenX",
        seatingCapacity: 240,
        features: ["270-degree Projection", "Dolby Atmos"],
        seatingLayout: {
          rows: 12,
          columns: 20,
          premiumRows: [7, 8, 9]
        }
      },
      {
        id: "screen4_t2",
        name: "MX4D",
        seatingCapacity: 160,
        features: ["Motion Seats", "Environmental Effects", "3D Capability"],
        seatingLayout: {
          rows: 10,
          columns: 16,
          premiumRows: [5, 6, 7, 8, 9] // All MX4D seats are premium
        }
      }
    ],
    amenities: ["Valet Parking", "Gourmet Food", "Lounge", "WiFi", "Cafe"],
    images: [
      "https://example.com/inox_megaplex_1.jpg",
      "https://example.com/inox_megaplex_2.jpg"
    ],
    rating: 4.8
  },
  {
    id: "theater3",
    name: "Cinepolis - Nexus Mall",
    location: {
      address: "Nexus Mall, Koramangala",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560095",
      coordinates: {
        latitude: 12.9351,
        longitude: 77.6243
      }
    },
    screens: [
      {
        id: "screen1_t3",
        name: "VIP Auditorium",
        seatingCapacity: 90,
        features: ["Recliner Seats", "Food Service", "Dolby Atmos"],
        seatingLayout: {
          rows: 9,
          columns: 10,
          vipRows: [0, 1, 2, 3, 4, 5, 6, 7, 8] // All rows are VIP
        }
      },
      {
        id: "screen2_t3",
        name: "4DX",
        seatingCapacity: 130,
        features: ["Motion Seats", "Environmental Effects", "3D Capability"],
        seatingLayout: {
          rows: 10,
          columns: 13,
          premiumRows: [6, 7, 8, 9] // Premium rows in 4DX
        }
      },
      {
        id: "screen3_t3",
        name: "ONYX LED Cinema",
        seatingCapacity: 180,
        features: ["Samsung LED Screen", "Dolby Atmos", "Premium Seating"],
        seatingLayout: {
          rows: 12,
          columns: 15,
          premiumRows: [6, 7, 8, 9],
          vipRows: [10, 11]
        }
      },
      {
        id: "screen4_t3",
        name: "Regular Audi 1",
        seatingCapacity: 220,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 11,
          columns: 20
        }
      },
      {
        id: "screen5_t3",
        name: "Regular Audi 2",
        seatingCapacity: 220,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 11,
          columns: 20
        }
      }
    ],
    amenities: ["Parking", "Food Court", "Coffee Shop", "Child Care", "WiFi"],
    images: [
      "https://example.com/cinepolis_nexus_1.jpg",
      "https://example.com/cinepolis_nexus_2.jpg"
    ],
    rating: 4.6
  },
  {
    id: "theater4",
    name: "PVR - Select Citywalk",
    location: {
      address: "Select Citywalk Mall, Saket District Centre",
      city: "Delhi",
      state: "Delhi",
      pincode: "110017",
      coordinates: {
        latitude: 28.5292,
        longitude: 77.2203
      }
    },
    screens: [
      {
        id: "screen1_t4",
        name: "Gold Class",
        seatingCapacity: 40,
        features: ["Recliner Seats", "Food Service", "Blanket Service", "Personal Butler"],
        seatingLayout: {
          rows: 5,
          columns: 8,
          vipRows: [0, 1, 2, 3, 4] // All Gold Class is VIP
        }
      },
      {
        id: "screen2_t4",
        name: "P[XL]",
        seatingCapacity: 300,
        features: ["Extra Large Screen", "Dolby Atmos", "4K Projection"],
        seatingLayout: {
          rows: 15,
          columns: 20,
          premiumRows: [10, 11, 12],
          vipRows: [13, 14]
        }
      },
      {
        id: "screen3_t4",
        name: "Playhouse",
        seatingCapacity: 100,
        features: ["Kid-Friendly Seating", "Colorful Interior", "Shallow Steps"],
        seatingLayout: {
          rows: 10,
          columns: 10
        }
      },
      {
        id: "screen4_t4",
        name: "Standard Audi 1",
        seatingCapacity: 180,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 12,
          columns: 15
        }
      }
    ],
    amenities: ["Valet Parking", "Fine Dining", "WiFi", "Lounge"],
    images: [
      "https://example.com/pvr_citywalk_1.jpg",
      "https://example.com/pvr_citywalk_2.jpg"
    ],
    rating: 4.5
  },
  {
    id: "theater5",
    name: "Carnival Cinemas - DSR Mall",
    location: {
      address: "DSR Mall, Marathahalli",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560037",
      coordinates: {
        latitude: 12.9582,
        longitude: 77.7002
      }
    },
    screens: [
      {
        id: "screen1_t5",
        name: "Big Screen",
        seatingCapacity: 250,
        features: ["Large Screen", "Dolby Digital"],
        seatingLayout: {
          rows: 12,
          columns: 21,
          premiumRows: [8, 9, 10, 11]
        }
      },
      {
        id: "screen2_t5",
        name: "Elite",
        seatingCapacity: 60,
        features: ["Recliner Seats", "Food Service"],
        seatingLayout: {
          rows: 6,
          columns: 10,
          vipRows: [0, 1, 2, 3, 4, 5] // All Elite is VIP
        }
      },
      {
        id: "screen3_t5",
        name: "Standard 1",
        seatingCapacity: 180,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 12,
          columns: 15
        }
      },
      {
        id: "screen4_t5",
        name: "Standard 2",
        seatingCapacity: 180,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 12,
          columns: 15
        }
      }
    ],
    amenities: ["Parking", "Food Court", "Game Zone"],
    images: [
      "https://example.com/carnival_dsr_1.jpg",
      "https://example.com/carnival_dsr_2.jpg"
    ],
    rating: 4.2
  },
  {
    id: "theater6",
    name: "SPI Palazzo - The Forum Vijaya",
    location: {
      address: "The Forum Vijaya Mall, Vadapalani",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600026",
      coordinates: {
        latitude: 13.0510,
        longitude: 80.2247
      }
    },
    screens: [
      {
        id: "screen1_t6",
        name: "Palazzo Premiere",
        seatingCapacity: 50,
        features: ["Recliner Seats", "Gourmet Food", "Personal Butler"],
        seatingLayout: {
          rows: 5,
          columns: 10,
          vipRows: [0, 1, 2, 3, 4] // All Palazzo Premiere is VIP
        }
      },
      {
        id: "screen2_t6",
        name: "Luxe",
        seatingCapacity: 150,
        features: ["Premium Seating", "Dolby Atmos"],
        seatingLayout: {
          rows: 10,
          columns: 15,
          premiumRows: [6, 7, 8, 9]
        }
      },
      {
        id: "screen3_t6",
        name: "Standard 1",
        seatingCapacity: 200,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 10,
          columns: 20
        }
      },
      {
        id: "screen4_t6",
        name: "Standard 2",
        seatingCapacity: 200,
        features: ["Dolby Digital"],
        seatingLayout: {
          rows: 10,
          columns: 20
        }
      }
    ],
    amenities: ["Parking", "Food Court", "WiFi", "Lounge"],
    images: [
      "https://example.com/spi_palazzo_1.jpg",
      "https://example.com/spi_palazzo_2.jpg"
    ],
    rating: 4.5
  }
];
