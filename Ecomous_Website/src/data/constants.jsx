import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


// Hero section main slider content
export const HeroSliderData = [
  {
    path: "/images/hero-section-image-01.jpg",
    altText: "A model wearing a glamorous outfit in a sophisticated setting",
    tittle: "Glamorous Glam",
    description: "From casual to formal, we've got you covered",
  },
  {
    path: "/images/hero-section-image-02.jpg",
    altText:
      "A person showcasing a simple yet stylish outfit in a minimalist environment",
    tittle: "Simple Style",
    description: "It’s creativity evolving with culture.",
  },
  {
    path: "/images/hero-section-image-03.jpg",
    altText:
      "A timeless and elegant outfit displayed on a model in a classic setting",
    tittle: "Timeless Appeal",
    description: "Fashion is self-expression through style.",
  },
];

// Hero section marquee content on home page
export const HeroMarqueeData = [
  "Spring Clearance Event: Save Up to 70%",
  "Don't miss out—grab your favorite styles at up to 50% off!",
  "Huge savings on top fashion – get up to 60% off!",
];

// Categories section content on home page
export const HomeCategoriesData = [
  {
    link: "./images/home-categories-01.jpg",
    altText: "Various clothing items on display",
    category: "Clothing",
  },
  {
    link: "./images/home-categories-02.jpg",
    altText: "Stylish sunglasses collection",
    category: "Sunglasses",
  },
  {
    link: "./images/home-categories-03.jpg",
    altText: "Assorted designer bags",
    category: "Bags",
  },
  {
    link: "./images/home-categories-04.jpg",
    altText: "Trendy fashion outfits",
    category: "Fashion",
  },
  {
    link: "./images/home-categories-05.jpg",
    altText: "Fashionable accessories display",
    category: "Accessories",
  },
];

// Best seller products content on home page
export const BestSellerProductData = [
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-10.jpg",
        altText: "Sleeveless Blouse in Orange",
      },
      {
        color: "Tan",
        link: "/images/product-image-02.jpg",
        altText: "Ribbed Tank Top in Black",
      },
      {
        color: "White",
        link: "/images/product-image-07.jpg",
        altText: "Ribbed Tank Top in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-02.jpg",
      altText: "Ribbed Tank Top",
    },
    sizes: ["S", "M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 2,
    tittle: "Sleeveless Blouse",
    price: "18.50",
    Qty: 1,
    colorWithImage: [
      {
        color: "SaddleBrown",
        link: "/images/product-image-05.jpg",
        altText: "Sleeveless Blouse in Orange",
      },
      {
        color: "Violet",
        link: "/images/product-image-06.jpg",
        altText: "Sleeveless Blouse in Black",
      },
      {
        color: "LightGreen",
        link: "/images/product-image-04.jpg",
        altText: "Sleeveless Blouse in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-04.jpg",
      altText: "Sleeveless Blouse",
    },
    sizes: ["M", "L", "XL", "XXL"],
    wishlist: true,
  },
  {
    id: 3,
    tittle: "V-Neck T-Shirt",
    price: "12.99",
    Qty: 1,
    colorWithImage: [
      {
        color: "White",
        link: "/images/product-image-13.jpg",
        altText: "V-Neck T-Shirt in Orange",
      },
    ],
    hoverImage: {
      link: "/images/product-image-12.jpg",
      altText: "V-Neck T-Shirt",
    },
    wishlist: true,
  },
  {
    id: 4,
    tittle: "Printed Crop Top",
    price: "20.45",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-42.jpg",
        altText: "Printed Crop Top in White",
      },
      {
        color: "White",
        link: "/images/product-image-14.jpg",
        altText: "Printed Crop Top in Orange",
      },
      {
        color: "Violet",
        link: "/images/product-image-11.jpg",
        altText: "Printed Crop Top in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-43.jpg",
      altText: "Printed Crop Top",
    },
    sizes: ["S", "M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 5,
    tittle: "Striped Long Sleeve",
    price: "22.99",
    Qty: 1,
    colorWithImage: [
      {
        color: "FireBrick",
        link: "/images/product-image-09.jpg",
        altText: "Striped Long Sleeve in Orange",
      },
      {
        color: "White",
        link: "/images/product-image-03.jpg",
        altText: "Striped Long Sleeve in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-08.jpg",
      altText: "Striped Long Sleeve",
    },
    sizes: ["M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 6,
    tittle: "Oversized Hoodie",
    price: "34.75",
    Qty: 1,
    colorWithImage: [
      {
        color: "PaleGreen",
        link: "/images/product-image-15.jpg",
        altText: "Oversized Hoodie in Orange",
      },
      {
        color: "Black",
        link: "/images/product-image-32.jpg",
        altText: "Oversized Hoodie in Black",
      },
      {
        color: "PaleTurquoise",
        link: "/images/product-image-17.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "MediumBlue",
        link: "/images/product-image-18.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "White",
        link: "/images/product-image-19.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "Gainsboro",
        link: "/images/product-image-20.jpg",
        altText: "Oversized Hoodie in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-16.jpg",
      altText: "Oversized Hoodie",
    },
    wishlist: true,
  },
  {
    id: 7,
    tittle: "Basic Crewneck Tee",
    price: "14.90",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-21.jpg",
        altText: "Basic Crewneck Tee in Orange",
      },
      {
        color: "SlateGray",
        link: "/images/product-image-22.jpg",
        altText: "Basic Crewneck Tee in Black",
      },
      {
        color: "Wheat",
        link: "/images/product-image-24.jpg",
        altText: "Basic Crewneck Tee in White",
      },
      {
        color: "LightSkyBlue",
        link: "/images/product-image-25.jpg",
        altText: "Basic Crewneck Tee in White",
      },
      {
        color: "White",
        link: "/images/product-image-26.jpg",
        altText: "Basic Crewneck Tee in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-23.jpg",
      altText: "Basic Crewneck Tee",
    },
    sizes: ["S", "M", "L"],
    wishlist: true,
  },
  {
    id: 8,
    tittle: "Knitted Cardigan",
    price: "29.80",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-28.jpg",
        altText: "Knitted Cardigan in Black",
      },
      {
        color: "White",
        link: "/images/product-image-30.jpg",
        altText: "Knitted Cardigan in Orange",
      },
      {
        color: "DodgerBlue",
        link: "/images/product-image-29.jpg",
        altText: "Knitted Cardigan in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-27.jpg",
      altText: "Knitted Cardigan",
    },
    sizes: ["M", "L", "XL", "XXL"],
  },
];

// The look section content on home page
export const TheLookSectionData = [
  {
    link: "./images/look-image-1.jpg",
    altText: "A lady wearing stylish hat and neckless",
  },
  {
    link: "./images/look-image-2.jpg",
    altText: "stylish hat",
  },
];

// Testimonial section content on home page
export const TestimonialsHomeData = [
  {
    rating: 5,
    title: "Best Online Fashion Site",
    description:
      "I always find something stylish and affordable on this web fashion site.",
    author: "Robert Smith",
    location: "Customer from USA",
    productImage: {
      link: "./images/product-image-18.jpg",
      altText: "Jersey thong body",
    },
    productName: "Jersey thong body",
    price: "105.95",
  },
  {
    rating: 4,
    title: "Great Collection",
    description:
      "The variety of products is amazing, and the quality is top-notch.",
    author: "Emily Johnson",
    location: "Customer from Canada",
    productImage: {
      link: "./images/product-image-10.jpg",
      altText: "Floral maxi dress",
    },
    productName: "Floral maxi dress",
    price: "89.99",
  },
  {
    rating: 5,
    title: "Fast Shipping and Great Quality",
    description:
      "I received my order quickly, and the clothes are of excellent quality!",
    author: "Michael Brown",
    location: "Customer from UK",
    productImage: {
      link: "./images/product-image-26.jpg",
      altText: "Leather biker jacket",
    },
    productName: "Leather biker jacket",
    price: "220.50",
  },
  {
    rating: 4,
    title: "Trendy and Affordable",
    description: "The designs are always on-trend and reasonably priced.",
    author: "Sophia Davis",
    location: "Customer from Australia",
    productImage: {
      link: "./images/product-image-07.jpg",
      altText: "Ruffle sleeve blouse",
    },
    productName: "Ruffle sleeve blouse",
    price: "45.75",
  },
  {
    rating: 5,
    title: "Love the Sales!",
    description:
      "I always wait for their sales, such great deals for fashionable clothes.",
    author: "James Wilson",
    location: "Customer from New Zealand",
    productImage: {
      link: "./images/product-image-25.jpg",
      altText: "Tailored trench coat",
    },
    productName: "Tailored trench coat",
    price: "130.00",
  },
  {
    rating: 4,
    title: "Impressive Customer Service",
    description:
      "The support team is super helpful, and the products never disappoint.",
    author: "Olivia Martinez",
    location: "Customer from Spain",
    productImage: {
      link: "./images/product-image-05.jpg",
      altText: "Lace midi skirt",
    },
    productName: "Lace midi skirt",
    price: "75.99",
  },
];

// Shop Gram section content on home page
export const ShopGramSectionData = [
  {
    link: "/images/shop-gram-image-01.jpg",
    alt: "Shop Gram image 1",
  },
  {
    link: "/images/shop-gram-image-02.jpg",
    alt: "Shop Gram image 2",
  },
  {
    link: "/images/shop-gram-image-03.jpg",
    alt: "Shop Gram image 3",
  },
  {
    link: "/images/shop-gram-image-04.jpg",
    alt: "Shop Gram image 4",
  },
  {
    link: "/images/shop-gram-image-05.jpg",
    alt: "Shop Gram image 5",
  },
];

// NavBar Main Options content on home page
export const NavMainOptionsData = [
  {
    name: "Home",
    linkText: "home",
  },
  {
    name: "Shop",
    linkText: "shop",
  },
  {
    name: "Product",
    linkText: "product",
  },
];

// New Arrival product content on shop page
export const NewArrivalProductData = [
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-10.jpg",
        altText: "Sleeveless Blouse in Orange",
      },
      {
        color: "Tan",
        link: "/images/product-image-02.jpg",
        altText: "Ribbed Tank Top in Black",
      },
      {
        color: "White",
        link: "/images/product-image-07.jpg",
        altText: "Ribbed Tank Top in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-02.jpg",
      altText: "Ribbed Tank Top",
    },
    sizes: ["S", "M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 2,
    tittle: "Sleeveless Blouse",
    price: "18.50",
    Qty: 1,
    colorWithImage: [
      {
        color: "SaddleBrown",
        link: "/images/product-image-05.jpg",
        altText: "Sleeveless Blouse in Orange",
      },
      {
        color: "Violet",
        link: "/images/product-image-06.jpg",
        altText: "Sleeveless Blouse in Black",
      },
      {
        color: "LightGreen",
        link: "/images/product-image-04.jpg",
        altText: "Sleeveless Blouse in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-04.jpg",
      altText: "Sleeveless Blouse",
    },
    sizes: ["M", "L", "XL", "XXL"],
    wishlist: true,
  },
  {
    id: 3,
    tittle: "V-Neck T-Shirt",
    price: "12.99",
    Qty: 1,
    colorWithImage: [
      {
        color: "White",
        link: "/images/product-image-13.jpg",
        altText: "V-Neck T-Shirt in Orange",
      },
    ],
    hoverImage: {
      link: "/images/product-image-12.jpg",
      altText: "V-Neck T-Shirt",
    },
    wishlist: true,
  },
  {
    id: 4,
    tittle: "Printed Crop Top",
    price: "20.45",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-42.jpg",
        altText: "Printed Crop Top in White",
      },
      {
        color: "White",
        link: "/images/product-image-14.jpg",
        altText: "Printed Crop Top in Orange",
      },
      {
        color: "Violet",
        link: "/images/product-image-11.jpg",
        altText: "Printed Crop Top in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-43.jpg",
      altText: "Printed Crop Top",
    },
    sizes: ["S", "M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 5,
    tittle: "Striped Long Sleeve",
    price: "22.99",
    Qty: 1,
    colorWithImage: [
      {
        color: "FireBrick",
        link: "/images/product-image-09.jpg",
        altText: "Striped Long Sleeve in Orange",
      },
      {
        color: "White",
        link: "/images/product-image-03.jpg",
        altText: "Striped Long Sleeve in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-08.jpg",
      altText: "Striped Long Sleeve",
    },
    sizes: ["M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 6,
    tittle: "Oversized Hoodie",
    price: "34.75",
    Qty: 1,
    colorWithImage: [
      {
        color: "PaleGreen",
        link: "/images/product-image-15.jpg",
        altText: "Oversized Hoodie in Orange",
      },
      {
        color: "Black",
        link: "/images/product-image-32.jpg",
        altText: "Oversized Hoodie in Black",
      },
      {
        color: "PaleTurquoise",
        link: "/images/product-image-17.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "MediumBlue",
        link: "/images/product-image-18.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "White",
        link: "/images/product-image-19.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "Gainsboro",
        link: "/images/product-image-20.jpg",
        altText: "Oversized Hoodie in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-16.jpg",
      altText: "Oversized Hoodie",
    },
    wishlist: true,
  },
  {
    id: 7,
    tittle: "Basic Crewneck Tee",
    price: "14.90",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-21.jpg",
        altText: "Basic Crewneck Tee in Orange",
      },
      {
        color: "SlateGray",
        link: "/images/product-image-22.jpg",
        altText: "Basic Crewneck Tee in Black",
      },
      {
        color: "Wheat",
        link: "/images/product-image-24.jpg",
        altText: "Basic Crewneck Tee in White",
      },
      {
        color: "LightSkyBlue",
        link: "/images/product-image-25.jpg",
        altText: "Basic Crewneck Tee in White",
      },
      {
        color: "White",
        link: "/images/product-image-26.jpg",
        altText: "Basic Crewneck Tee in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-23.jpg",
      altText: "Basic Crewneck Tee",
    },
    sizes: ["S", "M", "L"],
    wishlist: true,
  },
  {
    id: 8,
    tittle: "Knitted Cardigan",
    price: "29.80",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-28.jpg",
        altText: "Knitted Cardigan in Black",
      },
      {
        color: "White",
        link: "/images/product-image-30.jpg",
        altText: "Knitted Cardigan in Orange",
      },
      {
        color: "DodgerBlue",
        link: "/images/product-image-29.jpg",
        altText: "Knitted Cardigan in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-27.jpg",
      altText: "Knitted Cardigan",
    },
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 9,
    tittle: "Patterned scarf",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "DarkGoldenrod",
        link: "/images/product-image-33.jpg",
        altText: "Patterned Scarf in Brown",
      },
      {
        color: "Black",
        link: "/images/product-image-34.jpg",
        altText: "Patterned Scarf in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-33.jpg",
      altText: "Patterned Scarf in Brown",
    },
    sizes: ["M", "L", "XL"],
  },
  {
    id: 10,
    tittle: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-34.jpg",
        altText: "Turtleneck Sweater in Black",
      },
      {
        color: "White",
        link: "/images/product-image-35.jpg",
        altText: "Turtleneck Sweater in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-36.jpg",
      altText: "Turtleneck Sweater in White",
    },
    sizes: ["S", "M", "L"],
  },
  {
    id: 11,
    tittle: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "SlateGray",
        link: "/images/product-image-38.jpg",
        altText: "Turtleneck Sweater in Gray",
      },
      {
        color: "Violet",
        link: "/images/product-image-40.jpg",
        altText: "Turtleneck Sweater in Light Pink",
      },
      {
        color: "Thistle",
        link: "/images/product-image-41.jpg",
        altText: "Turtleneck Sweater in Pink",
      },
    ],
    hoverImage: {
      link: "/images/product-image-39.jpg",
      altText: "Turtleneck Sweater in Gray",
    },
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    tittle: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-42.jpg",
        altText: "Turtleneck Sweater in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-43.jpg",
      altText: "Turtleneck Sweater in Black",
    },
    sizes: ["S", "M", "L", "XL"],
  },
];

// Product page showcase slider-1 data
export const ProductShowCaseSliderOne = [
  {
    id: 1,
    tittle: "Ribbed Tank Top",
    price: "16.35",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-10.jpg",
        altText: "Sleeveless Blouse in Orange",
      },
      {
        color: "Tan",
        link: "/images/product-image-02.jpg",
        altText: "Ribbed Tank Top in Black",
      },
      {
        color: "White",
        link: "/images/product-image-07.jpg",
        altText: "Ribbed Tank Top in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-02.jpg",
      altText: "Ribbed Tank Top",
    },
    sizes: ["S", "M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 2,
    tittle: "Sleeveless Blouse",
    price: "18.50",
    Qty: 1,
    colorWithImage: [
      {
        color: "SaddleBrown",
        link: "/images/product-image-05.jpg",
        altText: "Sleeveless Blouse in Orange",
      },
      {
        color: "Violet",
        link: "/images/product-image-06.jpg",
        altText: "Sleeveless Blouse in Black",
      },
      {
        color: "LightGreen",
        link: "/images/product-image-04.jpg",
        altText: "Sleeveless Blouse in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-04.jpg",
      altText: "Sleeveless Blouse",
    },
    sizes: ["M", "L", "XL", "XXL"],
    wishlist: true,
  },
  {
    id: 3,
    tittle: "V-Neck T-Shirt",
    price: "12.99",
    Qty: 1,
    colorWithImage: [
      {
        color: "White",
        link: "/images/product-image-13.jpg",
        altText: "V-Neck T-Shirt in Orange",
      },
    ],
    hoverImage: {
      link: "/images/product-image-12.jpg",
      altText: "V-Neck T-Shirt",
    },
    wishlist: true,
  },
  {
    id: 4,
    tittle: "Printed Crop Top",
    price: "20.45",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-42.jpg",
        altText: "Printed Crop Top in White",
      },
      {
        color: "White",
        link: "/images/product-image-14.jpg",
        altText: "Printed Crop Top in Orange",
      },
      {
        color: "Violet",
        link: "/images/product-image-11.jpg",
        altText: "Printed Crop Top in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-43.jpg",
      altText: "Printed Crop Top",
    },
    sizes: ["S", "M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 5,
    tittle: "Striped Long Sleeve",
    price: "22.99",
    Qty: 1,
    colorWithImage: [
      {
        color: "FireBrick",
        link: "/images/product-image-09.jpg",
        altText: "Striped Long Sleeve in Orange",
      },
      {
        color: "White",
        link: "/images/product-image-03.jpg",
        altText: "Striped Long Sleeve in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-08.jpg",
      altText: "Striped Long Sleeve",
    },
    sizes: ["M", "L", "XL"],
    wishlist: true,
  },
  {
    id: 6,
    tittle: "Oversized Hoodie",
    price: "34.75",
    Qty: 1,
    colorWithImage: [
      {
        color: "PaleGreen",
        link: "/images/product-image-15.jpg",
        altText: "Oversized Hoodie in Orange",
      },
      {
        color: "Black",
        link: "/images/product-image-32.jpg",
        altText: "Oversized Hoodie in Black",
      },
      {
        color: "PaleTurquoise",
        link: "/images/product-image-17.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "MediumBlue",
        link: "/images/product-image-18.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "White",
        link: "/images/product-image-19.jpg",
        altText: "Oversized Hoodie in White",
      },
      {
        color: "Gainsboro",
        link: "/images/product-image-20.jpg",
        altText: "Oversized Hoodie in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-16.jpg",
      altText: "Oversized Hoodie",
    },
    wishlist: true,
  },
];
// Product page showcase slider-2 data
export const ProductShowCaseSliderTwo = [
  {
    id: 7,
    tittle: "Basic Crewneck Tee",
    price: "14.90",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-21.jpg",
        altText: "Basic Crewneck Tee in Orange",
      },
      {
        color: "SlateGray",
        link: "/images/product-image-22.jpg",
        altText: "Basic Crewneck Tee in Black",
      },
      {
        color: "Wheat",
        link: "/images/product-image-24.jpg",
        altText: "Basic Crewneck Tee in White",
      },
      {
        color: "LightSkyBlue",
        link: "/images/product-image-25.jpg",
        altText: "Basic Crewneck Tee in White",
      },
      {
        color: "White",
        link: "/images/product-image-26.jpg",
        altText: "Basic Crewneck Tee in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-23.jpg",
      altText: "Basic Crewneck Tee",
    },
    sizes: ["S", "M", "L"],
    wishlist: true,
  },
  {
    id: 8,
    tittle: "Knitted Cardigan",
    price: "29.80",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-28.jpg",
        altText: "Knitted Cardigan in Black",
      },
      {
        color: "White",
        link: "/images/product-image-30.jpg",
        altText: "Knitted Cardigan in Orange",
      },
      {
        color: "DodgerBlue",
        link: "/images/product-image-29.jpg",
        altText: "Knitted Cardigan in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-27.jpg",
      altText: "Knitted Cardigan",
    },
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 9,
    tittle: "Patterned scarf",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "DarkGoldenrod",
        link: "/images/product-image-33.jpg",
        altText: "Patterned Scarf in Brown",
      },
      {
        color: "Black",
        link: "/images/product-image-34.jpg",
        altText: "Patterned Scarf in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-33.jpg",
      altText: "Patterned Scarf in Brown",
    },
    sizes: ["M", "L", "XL"],
  },
  {
    id: 10,
    tittle: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-34.jpg",
        altText: "Turtleneck Sweater in Black",
      },
      {
        color: "White",
        link: "/images/product-image-35.jpg",
        altText: "Turtleneck Sweater in White",
      },
    ],
    hoverImage: {
      link: "/images/product-image-36.jpg",
      altText: "Turtleneck Sweater in White",
    },
    sizes: ["S", "M", "L"],
  },
  {
    id: 11,
    tittle: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "SlateGray",
        link: "/images/product-image-38.jpg",
        altText: "Turtleneck Sweater in Gray",
      },
      {
        color: "Violet",
        link: "/images/product-image-40.jpg",
        altText: "Turtleneck Sweater in Light Pink",
      },
      {
        color: "Thistle",
        link: "/images/product-image-41.jpg",
        altText: "Turtleneck Sweater in Pink",
      },
    ],
    hoverImage: {
      link: "/images/product-image-39.jpg",
      altText: "Turtleneck Sweater in Gray",
    },
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    tittle: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "14.95",
    Qty: 1,
    colorWithImage: [
      {
        color: "Black",
        link: "/images/product-image-42.jpg",
        altText: "Turtleneck Sweater in Black",
      },
    ],
    hoverImage: {
      link: "/images/product-image-43.jpg",
      altText: "Turtleneck Sweater in Black",
    },
    sizes: ["S", "M", "L", "XL"],
  },
];

// Header images data on main Header
export const HeaderNavImages = [
  {
    image: "/images/home-dropdown-image-01.jpg",
    name: "Home Fashion 01",
    altText: "hero section layout 01",
  },
  {
    image: "/images/home-dropdown-image-02.jpg",
    name: "Home Fashion 02",
    altText: "hero section layout 02",
  },
  {
    image: "/images/home-dropdown-image-03.jpg",
    name: "Home Fashion 03",
    altText: "hero section layout 03",
  },
  {
    image: "/images/home-dropdown-image-04.jpg",
    name: "Home Fashion 04",
    altText: "hero section layout 04",
  },
  {
    image: "/images/home-dropdown-image-05.jpg",
    name: "Home Fashion 05",
    altText: "hero section layout 05",
  },
  {
    image: "/images/home-dropdown-image-06.jpg",
    name: "Home Fashion 06",
    altText: "hero section layout 06",
  },
  {
    image: "/images/home-dropdown-image-07.jpg",
    name: "Home Fashion 07",
    altText: "hero section layout 07",
  },
  {
    image: "/images/home-dropdown-image-08.jpg",
    name: "Home Fashion 08",
    altText: "hero section layout 08",
  },
  {
    image: "/images/home-dropdown-image-08.jpg",
    name: "Home Fashion 09",
    altText: "hero section layout 09",
  },
  {
    image: "/images/home-dropdown-image-10.jpg",
    name: "Home Fashion 10",
    altText: "hero section layout 10",
  },
  {
    image: "/images/home-dropdown-image-11.jpg",
    name: "Home Fashion 11",
    altText: "hero section layout 11",
  },
  {
    image: "/images/home-dropdown-image-12.jpg",
    name: "Home Fashion 12",
    altText: "hero section layout12",
  },
];

// Header pages dropdown data in main Header
export const HeaderPagesDropDownData = [
  {
    text: "About us",
    arrow: false,
    NavLink: "/about",
  },
  {
    text: "Brands",
    arrow: true,
    NavLink: "/",
  },
  {
    text: "Contact",
    arrow: true,
    NavLink: "/contact",
  },
  {
    text: "FAQ",
    arrow: true,
    NavLink: "/faq",
  },
  {
    text: "Store",
    arrow: true,
    NavLink: "/shop",
  },
  {
    text: "Timeline",
    arrow: false,
    NavLink: "/about",
  },
  {
    text: "View Cart",
    arrow: false,
    NavLink: "/cart",
  },
  {
    text: "Check Out",
    arrow: false,
    NavLink: "/checkout",
  },
  {
    text: "Payment",
    arrow: true,
    NavLink: "/home",
  },
  {
    text: "My Account",
    arrow: true,
    NavLink: "/account",
  },
  {
    text: "Invoice",
    arrow: false,
    NavLink: "",
  },
];

// Header Shop dropdown data in main Header
export const HeaderShopDropDownData = [
  {
    tittle: "Shop layouts",
    linkData: [
      {
        linkText: "Default",
        link: "/shop",
      },
      {
        linkText: "Left sidebar",
        link: "/shop",
      },
      {
        linkText: "Right sidebar",
        link: "/shop",
      },
      {
        linkText: "Full width",
        link: "/shop",
      },
      {
        linkText: "Sub collection",
        link: "/shop",
      },
      {
        linkText: "Collection list",
        link: "/shop",
      },
    ],
  },
  {
    tittle: "Features",
    linkData: [
      {
        linkText: "Default",
        link: "/shop",
      },
      {
        linkText: "Pagination links",
        link: "/shop",
      },
      {
        linkText: "Pagination load more",
        link: "/shop",
      },
      {
        linkText: "Pagination infinite scrolling",
        link: "/shop",
      },
      {
        linkText: "Filter Sidebar",
        link: "/shop",
      },
      {
        linkText: "Filter hidden",
        link: "/shop",
      },
    ],
  },
  {
    tittle: "PRODUCT STYLES",
    linkData: [
      {
        linkText: "Default",
        link: "/shop",
      },
      {
        linkText: "Product style list",
        link: "/shop",
      },
      {
        linkText: "Product style 01",
        link: "/shop",
      },
      {
        linkText: "Product style 02",
        link: "/shop",
      },
      {
        linkText: "Product style 03",
        link: "/shop",
      },
      {
        linkText: "Product style 04",
        link: "/shop",
      },
      {
        linkText: "Product style 05",
        link: "/shop",
      },
      {
        linkText: "Product style 06",
        link: "/shop",
      },
      {
        linkText: "Product style 07",
        link: "/shop",
      },
    ],
  },
];

// Header Shop Categories Card data in main header
export const HeaderCategoriesData = [
  {
    image: "/images/home-categories-04.jpg",
    alText: "Mens Wears Gray T-shirt",
    category: "Men",
  },
  {
    image: "/images/home-categories-07.jpg",
    alText: "Woman Wears Pink Dress",
    category: "Women",
  },
];

// Header Product dropdown data in main Header
export const HeaderProductDropDownData = [
  {
    tittle: "PRODUCT LAYOUT",
    linkData: [
      {
        linkText: "Product Default",
        link: "/product",
      },
      {
        linkText: "Product grid 1",
        link: "/product",
      },
      {
        linkText: "Product grid 2",
        link: "/product",
      },
      {
        linkText: "Product stacked",
        link: "/product",
      },
      {
        linkText: "Product right thumbnails",
        link: "/product",
      },
      {
        linkText: "Product bottom thumbnails",
        link: "/product",
      },
      {
        linkText: "Product drawer sidebar",
        link: "/product",
      },
      {
        linkText: "Product description accordion",
        link: "/product",
      },
      {
        linkText: "Product description list",
        link: "/product",
      },
      {
        linkText: "Product description vertical",
        link: "/product",
      },
    ],
  },
  {
    tittle: "PRODUCT DETAILS",
    linkData: [
      {
        linkText: "Product inner zoom",
        link: "/product",
      },
      {
        linkText: "Pagination zoom magnifier",
        link: "/product",
      },
      {
        linkText: "Pagination no zoom",
        link: "/product",
      },
      {
        linkText: "Product photo-swipe popup",
        link: "/product",
      },
      {
        linkText: "Product external zoom and photo-swipe popup",
        link: "/product",
      },
      {
        linkText: "Product video",
        link: "/product",
      },
      {
        linkText: "Product 3D, AR models",
        link: "/product",
      },
      {
        linkText: "Product option & customize",
        link: "/product",
      },
      {
        linkText: "Advanced product types",
        link: "/product",
      },
      {
        linkText: " Recipient information form for gift card products",
        link: "/product",
      },
    ],
  },
  {
    tittle: "PRODUCT SWATCHES",
    linkData: [
      {
        linkText: "Product color swatch",
        link: "/product",
      },
      {
        linkText: "Product rectangle",
        link: "/product",
      },
      {
        linkText: "Product rectangle color",
        link: "/product",
      },
      {
        linkText: "Product swatch image",
        link: "/product",
      },
      {
        linkText: "Product swatch dropdown",
        link: "/product",
      },
      {
        linkText: "Product swatch dropdown color",
        link: "/product",
      },
    ],
  },
  {
    tittle: "PRODUCT FEATURES",
    linkData: [
      {
        linkText: "Frequently bought together",
        link: "/product",
      },
      {
        linkText: "Product pre-orders",
        link: "/product",
      },
      {
        linkText: "Product upsell features",
        link: "/product",
      },
      {
        linkText: "Back in stock notification",
        link: "/product",
      },
      {
        linkText: "Product pickup",
        link: "/product",
      },
      {
        linkText: "Variant images grouped",
        link: "/product",
      },
      {
        linkText: "Complimentary products",
        link: "/product",
      },
      {
        linkText: "Quick order list",
        link: "/product",
      },
    ],
  },
];

// Header blog icon dropdown data in main Header
export const HeaderBlogDropDownData = [
  {
    text: "Grid Layout",
    NavLink: "/blog",
  },
  {
    text: "Left Slidebar",
    NavLink: "/blog",
  },
  {
    text: "Right Slidebar",
    NavLink: "/blog",
  },
  {
    text: "Blog List",
    NavLink: "/blog",
  },
  {
    text: "Singal Post",
    NavLink: "/blog",
  },
];

// Blog page blog data
export const BlogPageData = [
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
  {
    blog_image: "/images/look-image-1.jpg",
    type: "Accessories",
    tittle: "The next generation of leather alternatives",
  },
];

// Product page zoom slider images data
export const ZoomSectionSlideImages = [
  {
    image: "/images/zoom-feature-1.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-2.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-3.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-4.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-5.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-6.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-7.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-8.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-9.jpg",
    altText: "product image",
  },
  {
    image: "/images/zoom-feature-10.jpg",
    altText: "product image",
  },
];

// Top bar social media icons data
export const TopBarSocialMediaIcons = [
  <FaFacebookF />,
  <BsTwitterX />,
  <FaInstagram />,
  <FaTiktok />,
  <FaPinterest />,
];

// currency selector options data
export const CurrencySelectorOptions = [
  {
    image: "/svg/currency-svg-3.svg",
    altText: "random text",
    language: "EUR € | France",
  },
  {
    image: "/svg/currency-svg-2.svg",
    altText: "random text",
    language: "EUR € | Germany",
  },
  {
    image: "/svg/currency-svg-1.svg",
    altText: "random text",
    language: "USD $ | United States",
  },
  {
    image: "/svg/currency-svg-4.svg",
    altText: "random text",
    language: "VND ₫ | Vietnam",
  },
];

// currency selector options data
export const LanguageSelectorOptions = [
  "English","العربية","简体中文","اردو"
];
