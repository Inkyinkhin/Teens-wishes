const products = [
  {
    id: "RRT001",
    name: "Rabbit Ribbon Top",
    category: "tops",
    price: 20500,
    mainImage: "images/tops/RRT/collection.JPG",
    variants: [
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/tops/RRT/ivory.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/tops/RRT/avocado.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/RRT/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/tops/RRT/blue.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Brown",
        colorValue: "#79483E",
        image: "images/tops/RRT/brown.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Red",
        colorValue: "#d31818",
        image: "images/tops/RRT/red.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Shrimp",
        colorValue: "#eb8e8e",
        image: "images/tops/RRT/shrimp.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    }
    ],
    description: "A cute top like a bunny girl.",
    fabric: "Inlay Cotton",
    care: [
      "Hand wash or gentle machine wash",
      "Use mild detergent",
      "Do not bleach",
      "Line dry in shade",
      "Iron on low heat"
    ],
    status: "new-arrival"
  },

  {
    id: "CCT001",
    name: "Cute Collar Top",
    category: "tops",
    price: 20500,
    mainImage: "images/tops/CCT/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/tops/CCT/avocado.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/tops/CCT/ivory.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/CCT/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Red",
        colorValue: "#d31818",
        image: "images/tops/CCT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/CCT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#C79A25",
        image: "images/tops/CCT/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }
    ],
    description: "A top which give a sweet vibe.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

   {
    id: "WRT001",
    name: "Waist Ribbon Top",
    category: "tops",
    price: 20500,
    mainImage: "images/tops/WRT/collection.JPG",
    variants: [
    {
        color: "Navy",
        colorValue: "#29384F",
        image: "images/tops/WRT/navy.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0D3",
        image: "images/tops/WRT/ivory.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/WRT/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Red",
        colorValue: "#d13818",
        image: "images/tops/WRT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/WRT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#C79A25",
        image: "images/tops/WRT/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }
    ],
    description: "Daily office wear top for cute girls.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "LST001",
    name: "Long Sleeve Top",
    category: "tops",
    price: 23500,
    mainImage: "images/tops/LST/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/tops/LST/avocado.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/tops/LST/ivory.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/LST/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Red",
        colorValue: "#d31818",
        image: "images/tops/LST/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/LST/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#C79A25",
        image: "images/tops/LST/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Cream",
        colorValue: "#F2EEE1",
        image: "images/tops/LST/cream.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
     {
        color: "Pink",
        colorValue: "#f8acab",
        image: "images/tops/LST/pink.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    }
    ],
    description: "Perfect choice for Rainy season.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "BST001",
    name: "Butterfly Sleeve Top",
    category: "tops",
    price: 24500,
    mainImage: "images/tops/BST/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/tops/BST/avocado.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Navy",
        colorValue: "#29384F",
        image: "images/tops/BST/navy.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Orange",
        colorValue: "#C87532",
        image: "images/tops/BST/orange.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Pink",
        colorValue: "#f8acab",
        image: "images/tops/BST/pink.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Red",
        colorValue: "#d31818",
        image: "images/tops/BST/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/BST/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#C79A25",
        image: "images/tops/BST/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }
    ],
    description: "Feeling like a princess in a Barbie Butter-Fly movie.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "new-arrival"
  },

  {
    id: "LWT001",
    name: "Layer Wave Top",
    category: "tops",
    price: 20500,
    mainImage: "images/tops/LWT/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/LWT/black.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/tops/LWT/blue.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/tops/LWT/ivory.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Orange",
        colorValue: "#e97d43",
        image: "images/tops/LWT/orange.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Purple",
        colorValue: "#b881c2",
        image: "images/tops/LWT/purple.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Red",
        colorValue: "#d31818",
        image: "images/tops/LWT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/LWT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#edc767",
        image: "images/tops/LWT/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }],
    description: "A top loved by Pretty Girls",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "HGT001",
    name: "High School Girl Top",
    category: "tops",
    price: 22500,
    mainImage: "images/tops/HGT/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/tops/HGT/avocado.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/tops/HGT/blue.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Orange",
        colorValue: "#e96835",
        image: "images/tops/HGT/orange.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Pink",
        colorValue: "#f8a2db",
        image: "images/tops/HGT/pink.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Red",
        colorValue: "#d31818",
        image: "images/tops/HGT/red.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#e9c559",
        image: "images/tops/HGT/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }
    ],
    description: "Oh..to be feel like young again",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "SST001",
    name: "Short Sleeve Top",
    category: "tops",
    price: 20500,
    mainImage: "images/tops/SST/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/SST/black.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/tops/SST/blue.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Ivory",
        colorValue: "#f3F0DE",
        image: "images/tops/SST/ivory.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Olive",
        colorValue: "#7f8555",
        image: "images/tops/SST/olive.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Pink",
        colorValue: "#eeb3f5",
        image: "images/tops/SST/pink.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Red",
        colorValue: "#9f2f22",
        image: "images/tops/LWT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/LWT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    }],
    description: "Simple for everyday",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "CPT001",
    name: "Chinese Pattern Top",
    category: "tops",
    price: 24000,
    mainImage: "images/tops/CPT/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/tops/CPT/avocado.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/tops/CPT/blue.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Orange",
        colorValue: "#de865d",
        image: "images/tops/CPT/orange.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Purple",
        colorValue: "#b881c2",
        image: "images/tops/CPT/purple.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Red",
        colorValue: "#d8301e",
        image: "images/tops/CPT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/CPT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    }],
    description: "Chinese Vibe",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "FT001",
    name: "Fairy Top",
    category: "tops",
    price: 21500,
    mainImage: "images/tops/FT/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/FT/black.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Brown",
        colorValue: "#79483E",
        image: "images/tops/FT/brown.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Red",
        colorValue: "#d8301e",
        image: "images/tops/FT/red.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Shrimp",
        colorValue: "#eb8e8e",
        image: "images/tops/FT/shrimp.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "White",
        colorValue: "#F7F7f4",
        image: "images/tops/FT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    }],
    description: "Beautiful like a Fairy",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "new-arrival"
  },

  {
    id: "WNLT001",
    name: "Wide Neck Long Sleeve Top",
    category: "tops",
    price: 27500,
    mainImage: "images/tops/WNLT/collection.JPG",
    variants: [
    {
        color: "Baby pink",
        colorValue: "#ffddf3",
        image: "images/tops/WNLT/bbpink.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Black",
        colorValue: "#0e0808",
        image: "images/tops/WNLT/black.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Brown",
        colorValue: "#79483E",
        image: "images/tops/WNLT/brown.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Pink",
        colorValue: "#f687cc",
        image: "images/tops/WNLT/pink.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Shrimp",
        colorValue: "#eb8e8e",
        image: "images/tops/WNLT/shrimp.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Red",
        colorValue: "#cc1e1e",
        image: "images/tops/WNLT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#fffbfb",
        image: "images/tops/WNLT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#fcf8bc",
        image: "images/tops/WNLT/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }],
    description: "Everyday comfort choice",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "new-arrival"
  },

  {
    id: "NSLT001",
    name: "No Sleeve Layer Top",
    category: "tops",
    price: 20500,
    mainImage: "images/tops/NSLT/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/NSLT/black.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/tops/NSLT/blue.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Brown",
        colorValue: "#79483E",
        image: "images/tops/NSLT/brown.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Pink",
        colorValue: "#f8adc9",
        image: "images/tops/NSLT/pink.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Red",
        colorValue: "#d22929",
        image: "images/tops/NSLT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#fffbfb",
        image: "images/tops/NSLT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    }],
    description: "The best suit for Summer Outfit",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "ORT001",
    name: "Original Ribbon Top",
    category: "tops",
    price: 21500,
    mainImage: "images/tops/ORT/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/tops/ORT/black.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/tops/ORT/ivory.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 5 }]
    },
    {
        color: "Navy",
        colorValue: "#29384F",
        image: "images/tops/ORT/navy.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Purple",
        colorValue: "#8b5ea4",
        image: "images/tops/ORT/purple.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Red",
        colorValue: "#c52d2d",
        image: "images/tops/ORT/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/tops/ORT/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    },
    {
        color: "Yellow",
        colorValue: "#f9e29e",
        image: "images/tops/ORT/yellow.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }],
    description: "The very first design regonized by Pretty girls",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "LWP001",
    name: "Long Wide Pants",
    category: "bottoms",
    price: 23500,
    mainImage: "images/bottoms/LWP/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/bottoms/LWP/black.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/bottoms/LWP/ivory.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Navy",
        colorValue: "#29384F",
        image: "images/bottoms/LWP/navy.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Red",
        colorValue: "#de2c2c",
        image: "images/bottoms/LWP/red.JPG",
        sizes: [
            { size: "M", stock: 3 },
            { size: "L", stock: 3 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/bottoms/LWP/white.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 0 }]
    }],
    description: "Walk with confidence",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

   {
    id: "SFP001",
    name: "Short Free Pants",
    category: "bottoms",
    price: 18500,
    mainImage: "images/bottoms/SFP/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/bottoms/SFP/avocado.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Ivory",
        colorValue: "#F3F0DE",
        image: "images/bottoms/SFP/ivory.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Yellow",
        colorValue: "#f2dc94",
        image: "images/bottoms/SFP/yellow.JPG",
        sizes: [
            { size: "M", stock: 1 },
            { size: "L", stock: 1 }]
    }],
    description: "Summer Pants",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },
  {
    id: "ISP001",
    name: "Ice Style Pants",
    category: "bottoms",
    price: 19500,
    mainImage: "images/bottoms/ISP/collection.JPG",
    variants: [
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/bottoms/ISP/white.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    }],
    description: "Summer Pants",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },


  {
    id: "LLWS001",
    name: "Long Layer Wave Skirt",
    category: "bottoms",
    price: 23500,
    mainImage: "images/bottoms/LLWS/collection.JPG",
    variants: [
    {
        color: "White",
        colorValue: "#F7F7f4",
        image: "images/bottoms/LLWS/white.JPG",
        sizes: [
            { size: "M", stock: 2 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/bottoms/LLWS/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    }],
    description: "Running to feel like a princess",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "SLD001",
    name: "Summer Long Dress",
    category: "dresses",
    price: 26500,
    mainImage: "images/dresses/SLD/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/dresses/SLD/avocado.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/dresses/SLD/blue.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Brown",
        colorValue: "#79483E",
        image: "images/dresses/SLD/brown.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Pink",
        colorValue: "#fda9e1",
        image: "images/dresses/SLD/pink.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Red",
        colorValue: "#c71717",
        image: "images/dresses/SLD/red.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 0 }]
    }],
    description: "Fresh air across the sea",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "FLD001",
    name: "FLuffy Long Dress",
    category: "dresses",
    price: 27000,
    mainImage: "images/dresses/FLD/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/dresses/FLD/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Pink",
        colorValue: "#fda9e1",
        image: "images/dresses/FLD/pink.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Red",
        colorValue: "#d41818",
        image: "images/dresses/FLD/red.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Yellow",
        colorValue: "#fdeeab",
        image: "images/dresses/FLD/yellow.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    }],
    description: "Fluffy like a doll.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "CS001",
    name: "Cute Pant Set",
    category: "sets",
    price: 27000,
    mainImage: "images/sets/CS/collection.JPG",
    variants: [
    {
        color: "Blue",
        colorValue: "#8FAED6",
        image: "images/sets/CS/blue.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Brown",
        colorValue: "#79483E",
        image: "images/sets/CS/brown.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Pink",
        colorValue: "#fda9e1",
        image: "images/sets/CS/pink.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Cream",
        colorValue: "#F2EEE1",
        image: "images/sets/CS/wheat.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },

    {
        color: "Yellow",
        colorValue: "#f6e3a5",
        image: "images/sets/CS/yellow.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    }],
    description: "Every day comfort and cute.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "new-arrival"
  },

  {
    id: "PS001",
    name: "Plain Set",
    category: "sets",
    price: 27000,
    mainImage: "images/sets/PS/collection.JPG",
    variants: [
    {
        color: "Black",
        colorValue: "#171717",
        image: "images/sets/PS/black.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Pink",
        colorValue: "#fda9e1",
        image: "images/sets/PS/pink.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Red",
        colorValue: "#df1717",
        image: "images/sets/PS/red.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 1 }]
    },
    {
        color: "Cream",
        colorValue: "#F2EEE1",
        image: "images/sets/PS/wheat.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },

    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/sets/PS/white.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    }],
    description: "Wake up like a soft girl.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "exist"
  },

  {
    id: "OS001",
    name: "Office cute Set",
    category: "sets",
    price: 27000,
    mainImage: "images/sets/OS/collection.JPG",
    variants: [
    {
        color: "Avocado",
        colorValue: "#A8B99A",
        image: "images/sets/OS/avocado.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
    },
    {
        color: "Navy",
        colorValue: "#29384F",
        image: "images/sets/OS/navy.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 2 }]
    },
    {
        color: "Orange",
        colorValue: "#f57a49",
        image: "images/sets/OS/orange.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 1 }]
    },
    {
        color: "White",
        colorValue: "#F7F7F4",
        image: "images/sets/OS/white.JPG",
        sizes: [
            { size: "M", stock: 0 },
            { size: "L", stock: 3 }]
     }],
    description: "Walk like a confidence lady.",
    fabric: "Inlay Cotton",
    care: [
      "Gentle machine wash",
      "Wash with similar colors",
      "Do not bleach",
      "Hang dry",
      "Iron on low heat"
    ],
    status: "new-arrival"
  }




  

];