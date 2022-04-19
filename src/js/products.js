/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger BigMac Bacon",
    description:
      "Two 100% Canadian beef patties, special sauce, crisp lettuce, processed cheddar cheese, pickles, onions and BACON on a toasted sesame seed bun.",
    price: 299,
    discontinued: false,
    categories: ["c1", "c5"]
  },
  {
    id: "P2",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger Chicken McMuffin",
    description:
      "A breaded seasoned chicken patty, made with chicken raised on Canadian farms with mayonnaise style sauce, a slice of tasty processed cheddar cheese sitting on a toasted English muffin. It is the best option for a breakfast",
    price: 1000,
    discontinued: false,
    categories: ["c1", "c6"]
  },
  {
    id: "P3",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger Beef and Chicken Fajita",
    description:
      "Combination of beef and chicken burger, with chipotle powder, cilantro, hot sauce and grill seasoning. it is suitable for all burger big fans",
    price: 5379,
    discontinued: false,
    categories: ["c1", "c5", "c6"]
  },
  {
    id: "P4",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger with Grilled Chicken",
    description:
      "Made with Canadian grain-fed chicken breast, with two full strips of bacon, crisp lettuce, tomato. Grilled or crispy. It’s like seriously good chicken.",
    price: 699,
    discontinued: false,
    categories: ["c1", "c6"]
  },
  {
    id: "P5",
    imageUrl: "./img/the-matter-of-food-loeyDIdEW_w-unsplash.jpg",
    title: "Sandwich Grilled Chicken",
    description:
      "All wrapped up in a soft whole wheat flour tortilla. Available in grilled or crispy. Good choice for dinner",
    price: 799,
    discontinued: false,
    categories: ["c2", "c6"]
  },
  {
    id: "P6",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger double Cheese with Beef",
    description:
      "We make it like we always have: two slices of processed cheddar cheese with two 100% Canadian beef patties, pickles, onions, ketchup and mustard on a freshly toasted bun.",
    price: 899,
    discontinued: false,
    categories: ["c1", "c5"]
  },
  {
    id: "P7",
    imageUrl: "./img/pixzolo-photography-8YBHgP0WrEo-unsplash.jpg",
    title: "Mini Fry",
    description:
      "Cut from whole potatoes grown on Canadian farms, our fries are cooked to golden perfection in a vegetable oil blend.",
    price: 199,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P8",
    imageUrl: "./img/pixzolo-photography-8YBHgP0WrEo-unsplash.jpg",
    title: "Poutine",
    description:
      "Rich and tasty gravy? Melty, mouth-watering cheese curds? On our World Famous Fries? Good choice",
    price: 375,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P9",
    imageUrl: "./img/pixzolo-photography-8YBHgP0WrEo-unsplash.jpg",
    title: "Carrot Muffin",
    description: "A perfect companion to coffee; a quick-and-easy mid-morning or afternoon treat.",
    price: 355,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "P10",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger BigMac",
    description:
      "Nothing compares to two 100% Canadian beef patties, special sauce, crisp lettuce, processed cheddar cheese, pickles and onions on a toasted sesame seed bun.",
    price: 488,
    discontinued: true,
    categories: ["c1", "c5"]
  },
  {
    id: "P11",
    imageUrl: "./img/shivansh-sethi-dKT6Q7q2UKs-unsplash.jpg",
    title: "Oreo McFlurry",
    description:
      "Deliciousness starts with creamy vanilla soft serve swirled together with crunchy Oreo cookies.",
    price: 199,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P12",
    imageUrl: "./img/shivansh-sethi-dKT6Q7q2UKs-unsplash.jpg",
    title: "Hot Caramel Sundae",
    description:
      "Smooth and creamy vanilla soft serve, topped with your choice of yummy caramel sauce. Yummmy!",
    price: 250,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P13",
    imageUrl: "./img/shivansh-sethi-dKT6Q7q2UKs-unsplash.jpg",
    title: "Strawberry yogurt Tube",
    description: "Sweet combined with a little sour. Best choice for kids",
    price: 250,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P14",
    imageUrl: "./img/the-matter-of-food-loeyDIdEW_w-unsplash.jpg",
    title: "Sandwich Beef",
    description:
      "All wrapped up in a soft whole wheat flour tortilla. Available in beef. Good choice for dinner",
    price: 799,
    discontinued: false,
    categories: ["c2", "c5"]
  },
  {
    id: "P15",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger Ghost Pepper McChicken",
    description:
      "Perfectly breaded seasoned chicken, crisp shredded lettuce, topped with our creamy Ghost Pepper sauce on a freshly toasted sesame bun.",
    price: 799,
    discontinued: false,
    categories: ["c1", "c6"]
  },
  {
    id: "P16",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "10 Chicken McNuggets",
    description:
      "No artificial flavours, colours or preservatives. Made with 100% seasoned chicken breast, the Chicken McNuggets you crave are still simply delicious.",
    price: 500,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P17",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Original Steak",
    description: "With beef and egg as well as sald. It is a good choice for all ages",
    price: 500,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P18",
    imageUrl: "./img/the-matter-of-food-loeyDIdEW_w-unsplash.jpg",
    title: "Sandwich Bacon with Crispy Chicken",
    description:
      "Made with 100% Canadian raised seasoned chicken breast topped with shredded lettuce, sliced tomato, hickory-smoked bacon and mayo-style sauce. Good choice for dinner",
    price: 1299,
    discontinued: false,
    categories: ["c2", "c5", "c6"]
  },
  {
    id: "P19",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger Quarter Pounder",
    description:
      "Sink your teeth into crisp bacon, juicy tomato and fresh lettuce to reach the beefy, cheesy core of the Quarter Pounder. Did we mention the bacon? There’s bacon.",
    price: 329,
    discontinued: true,
    categories: ["c1", "c5"]
  },
  {
    id: "P20",
    imageUrl: "./img/shivansh-sethi-dKT6Q7q2UKs-unsplash.jpg",
    title: "Hot Fudge Sundae",
    description:
      "Sweet and a little spicy cafe soft serve, topped with decadent hot fudge sauce. Mmmm!",
    price: 329,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P21",
    imageUrl: "./img/pixzolo-photography-8YBHgP0WrEo-unsplash.jpg",
    title: "Cookie",
    description:
      "Part brownie. Part cookie. All delicious. Enjoy a decadent brownie cookie that’s soft on the inside",
    price: 99,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P22",
    imageUrl: "./img/the-matter-of-food-loeyDIdEW_w-unsplash.jpg",
    title: "Wrap with Spicy Chicken",
    description:
      "Made with 100% Canadian raised seasoned chicken breast topped with bacon pieces, shredded lettuce and creamy Caesar dressing. Good choice for dinner",
    price: 50000,
    discontinued: false,
    categories: ["c2", "c6"]
  },
  {
    id: "P23",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger Nick Fury",
    description:
      "Must try hamburger, special combination as well as secret recipe, special sauce, crisp lettuce, processed cheddar cheese, pickles, onions and BACON on a toasted sesame seed bun.",
    price: 600,
    discontinued: false,
    categories: ["c1", "c5"]
  },
  {
    id: "P24",
    imageUrl: "./img/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
    title: "Hamburger Mike Tyson",
    description:
      "A gigantic Canadian beef patty, special sauce, crisp lettuce, processed cheddar cheese, pickles, onions and KOBE on a toasted sesame seed bun.",
    price: 500000,
    discontinued: false,
    categories: ["c1", "c5"]
  }
];
