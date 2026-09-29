// Menu for Flavors of Cabimas.
// To change a price, name or description, edit it here — the website updates automatically.
// Items marked `featured: true` show up in the "Favorites" row at the top of the menu.

window.RESTAURANT = {
  name: "Flavors of Cabimas",
  tagline: "Sabor venezolano, straight from Cabimas",
  address: "1651 S State Road 7, North Lauderdale, FL 33068",
  phone: "+17869205210",
  phoneDisplay: "(786) 920-5210",
  hours: "Open daily · 11:00 AM – 11:00 PM",
  rating: "5.0",
  reviews: 35,
  links: {
    doordash: "https://www.doordash.com/store/flavors-of-cabimas-north-lauderdale-42280443/",
    maps: "https://www.google.com/maps/search/?api=1&query=Flavors+of+Cabimas+1651+S+State+Road+7+North+Lauderdale+FL",
    instagram: "https://www.instagram.com/flavorsofcabimas/",
    tiktok: "https://www.tiktok.com/@flavorsofcabimas",
  },
};

window.MENU = [
  {
    id: "arepas",
    name: "Arepas",
    blurb: "Crispy corn arepas, split open and stuffed to the edges.",
    items: [
      { name: "Arepa Cabimera", price: 19.18, featured: true, desc: "Our signature. The big fried arepa from Cabimas, loaded with everything." },
      { name: "Arepa Rellena de Picanha", price: 16.78, desc: "Stuffed with grilled picanha steak." },
      { name: "Arepa Rellena de Chicharrón", price: 14.98, featured: true, desc: "Stuffed with crispy pork chicharrón." },
      { name: "Arepa Rellena de Mechada", price: 14.38, desc: "Stuffed with slow-cooked shredded beef." },
      { name: "Arepa Rellena de Chorizo", price: 14.38, desc: "Stuffed with grilled chorizo." },
      { name: "Arepa Rellena de Pollo", price: 13.18, desc: "Stuffed with seasoned shredded chicken." },
      { name: "Arepa Rellena de Caraotas", price: 10.78, desc: "Stuffed with Venezuelan black beans." },
    ],
  },
  {
    id: "cachapas",
    name: "Cachapas",
    blurb: "Sweet corn pancakes folded over melty queso de mano.",
    items: [
      { name: "Cachapa de Queso", price: 15.58, featured: true, desc: "The classic, with queso de mano." },
      { name: "Cachapa de Mechada", price: 21.58, featured: true, desc: "With shredded beef and cheese." },
      { name: "Cachapa de Chicharrón", price: 21.58, desc: "With crispy chicharrón and cheese." },
      { name: "Cachapa de Picanha", price: 21.58, desc: "With grilled picanha steak and cheese." },
    ],
  },
  {
    id: "burgers",
    name: "Hamburguesas",
    blurb: "200 g of artisan beef, stacked high and served with fries.",
    items: [
      { name: "Los Médanos", price: 21.58, featured: true, desc: "200 g artisan beef, sweet plantain, bacon, potato chips and fried cheese." },
      { name: "Ambrosio", price: 21.58, desc: "200 g artisan beef, pineapple, potato chips, bacon and mozzarella." },
      { name: "El Lucero", price: 21.58, desc: "200 g artisan beef, Doritos, pico de gallo, bacon and cheddar." },
      { name: "Buena Vista", price: 21.58, desc: "200 g artisan beef, pickles, bacon and cheddar." },
      { name: "Smash", price: 19.18, desc: "200 g artisan beef, caramelized onions, bacon and cheddar." },
      { name: "Clásica", price: 16.78, featured: true, desc: "200 g artisan beef, house-made sauce, potato chips and cheddar." },
    ],
  },
  {
    id: "bowls",
    name: "Bowls",
    blurb: "A full plate in a bowl.",
    items: [
      { name: "Colombian Bowl", price: 20.38, featured: true, desc: "Rice, beans, chorizo, sweet plantain, avocado and a fried egg." },
      { name: "Venezuelan Bowl", price: 19.18, desc: "Rice, caraotas, beef and all the Venezuelan fixings." },
      { name: "Mexican Bowl", price: 17.98, desc: "Mexican-style bowl." },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    blurb: "Served with fries.",
    items: [
      { name: "Steak Sandwich", price: 21.58, desc: "Lettuce, tomato, onions, house-made sauce, potato chips and fries." },
      { name: "Crispy Chicken", price: 17.98, desc: "Lettuce, tomato, onions, house-made sauce, potato chips and fries." },
      { name: "Chicken Sandwich", price: 16.78, desc: "Lettuce, tomato, onions, house-made sauce, potato chips and fries." },
    ],
  },
  {
    id: "burritos",
    name: "Burritos",
    blurb: "Big, warm and wrapped tight.",
    items: [
      { name: "Steak Burrito", price: 20.38 },
      { name: "Chicken Burrito", price: 17.98 },
    ],
  },
  {
    id: "extras",
    name: "Extras & Sides",
    blurb: "Make it bigger.",
    items: [
      { name: "Extra Picanha", price: 8.38 },
      { name: "Extra Carne / Beef", price: 7.18 },
      { name: "Extra Pollo / Chicken", price: 7.18 },
      { name: "Extra Queso de Mano", price: 5.98 },
      { name: "Fries", price: 4.78 },
      { name: "Extra Tocineta / Bacon", price: 3.58 },
      { name: "Extra Queso Frito / Fried Cheese", price: 3.58 },
      { name: "Extra Arepa", price: 2.38 },
      { name: "Extra Arroz / Rice", price: 2.38 },
    ],
  },
];
