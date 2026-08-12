function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/${id}?w=${w}&q=80&fm=jpg&fit=crop&auto=format`;
}

export const FEATURED_PRODUCTS = [
  {
    title: "Country Sourdough",
    category: "Bread",
    src: unsplash("photo-1509440159596-0249088772ff"),
    description:
      "36-hour cold ferment, hand-shaped, and baked in a stone-deck oven until the crust cracks when you tap it. Our everyday loaf and the one most people can't stop buying.",
  },
  {
    title: "Almond Croissant",
    category: "Viennoiserie",
    src: unsplash("photo-1621236378699-8597faf6a176"),
    description:
      "Butter-laminated dough, twice-baked, filled with almond cream and finished with toasted almonds and a dusting of powdered sugar.",
  },
  {
    title: "Brown Butter Cake",
    category: "Cake",
    src: unsplash("photo-1517433670267-08bbd4be890f"),
    description:
      "A dense, nutty crumb from browned butter, layered with a light honey-cream frosting. Baked fresh in small batches, never a mix.",
  },
  {
    title: "Morning Pastry Case",
    category: "Pastry",
    src: unsplash("photo-1608198093002-ad4e005484ec"),
    description:
      "Rotating daily selection — cinnamon rolls, danishes, and hand pies made from the same laminated dough as our croissants.",
  },
] as const;

export const MENU_CATEGORIES = [
  {
    id: "breads",
    name: "Breads",
    items: [
      {
        name: "Country Sourdough",
        price: "$9",
        description: "36-hour ferment, stone-baked, crackling crust.",
      },
      {
        name: "Whole Wheat Miche",
        price: "$10",
        description: "Stone-milled wheat, dense crumb, slightly sweet.",
      },
      {
        name: "Seeded Rye",
        price: "$9",
        description: "Caraway, flax, and sunflower seed throughout.",
      },
      {
        name: "Baguette",
        price: "$5",
        description: "Crisp shell, open airy crumb, baked twice daily.",
      },
    ],
  },
  {
    id: "pastries",
    name: "Pastries",
    items: [
      {
        name: "Butter Croissant",
        price: "$5",
        description: "72-hour laminated dough, 27 layers of butter.",
      },
      {
        name: "Almond Croissant",
        price: "$6.50",
        description: "Filled with almond cream, toasted almonds on top.",
      },
      {
        name: "Pain au Chocolat",
        price: "$5.50",
        description: "Dark chocolate batons folded into laminated dough.",
      },
      {
        name: "Morning Bun",
        price: "$5.50",
        description: "Cinnamon-sugar croissant dough, coiled and caramelized.",
      },
    ],
  },
  {
    id: "cakes",
    name: "Cakes & Sweets",
    items: [
      {
        name: "Brown Butter Cake",
        price: "$7 / slice",
        description: "Honey-cream frosting, nutty brown butter crumb.",
      },
      {
        name: "Spiced Carrot Cake",
        price: "$7 / slice",
        description: "Toasted walnuts, cream cheese frosting.",
      },
      {
        name: "Chocolate Olive Oil Cake",
        price: "$7 / slice",
        description: "Dense, moist, finished with sea salt.",
      },
      {
        name: "Custard Tart",
        price: "$6.50",
        description: "Shortcrust base, vanilla bean custard, torched top.",
      },
    ],
  },
  {
    id: "drinks",
    name: "Coffee & Drinks",
    items: [
      {
        name: "Drip Coffee",
        price: "$3.50",
        description: "Single-origin, roasted locally, brewed fresh.",
      },
      {
        name: "Cappuccino",
        price: "$4.50",
        description: "Double shot, steamed whole milk.",
      },
      {
        name: "Chai Latte",
        price: "$4.75",
        description: "House-steeped spiced chai, steamed milk.",
      },
      {
        name: "Fresh Orange Juice",
        price: "$4",
        description: "Cold-pressed daily.",
      },
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The sourdough alone is worth the trip across town. I've had bread in six countries and this crust still stops me mid-bite.",
    name: "Amara Whitfield",
    designation: "Regular since 2022",
    src: unsplash("photo-1494790108377-be9c29b29330", 500),
  },
  {
    quote:
      "We ordered the brown butter cake for our anniversary and it disappeared in one sitting. Nothing tastes like a boxed mix here — you can tell.",
    name: "Daniel Osei",
    designation: "Neighborhood resident",
    src: unsplash("photo-1500648767791-00dcc994a43e", 500),
  },
  {
    quote:
      "I stop in every Saturday morning before the almond croissants sell out. They usually don't make it home.",
    name: "Priya Nkemelu",
    designation: "Saturday regular",
    src: unsplash("photo-1438761681033-6461ffad8d80", 500),
  },
] as const;

export const HOURS = [
  ["Monday – Friday", "7:00am – 6:00pm"],
  ["Saturday", "8:00am – 5:00pm"],
  ["Sunday", "8:00am – 2:00pm"],
] as const;
