import { logo } from "../assets";

export const Navlinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    path: "/products",
  },
  {
    id: 3,
    title: "About us",
    path: "/about-us",
  },
  {
    id: 4,
    title: "Where to buy",
    path: "/where-to-buy",
  },
  {
    id: 5,
    title: "Contacts",
    path: "/contacts",
  },
];

export const Categories = [
  {
    id: 1,
    title: "spoon lure",
    image: logo,
  },
  {
    id: 2,
    title: "tail spinners",
    image: logo,
  },
  {
    id: 3,
    title: "soft bait",
    image: logo,
  },
  {
    id: 4,
    title: "kits",
    image: logo,
  },
  {
    id: 5,
    title: "sinkers",
    image: logo,
  },
  {
    id: 6,
    title: "jig heads",
    image: logo,
  },
  {
    id: 7,
    title: "ice fishing jigs",
    image: logo,
  },
  {
    id: 8,
    title: "winter lures",
    image: logo,
  },
];

export const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "trickster 20",
    description: "Description of the product",
    category: "spoon lure",
    attributes: {
      sku: "trickster 20",
      model: "thor 17",
      color: [
        {
          name: "ssr",
          image: logo,
          quantity: 10,
        },
        {
          name: "ssd",
          image: logo,
          quantity: 0,
        },
        {
          name: "ssf",
          image: logo,
          quantity: 5,
        },
      ],
      weight: "20g",
      length: "70mm",
      price: "2.5",
    },
  },
  {
    id: 2,
    title: "THOR 17",
    description: "Description of the product",
    category: "spoon lure",
    attributes: {
      sku: "trickster 20",
      model: "thor 17",
      color: [
        {
          name: "ssr",
          image: logo,
          quantity: 10,
        },
        {
          name: "ssd",
          image: logo,
          quantity: 0,
        },
        {
          name: "ssf",
          image: logo,
          quantity: 5,
        },
      ],
      weight: "20g",
      big: "70mm",
      price: "2.5",
    },
  },
  {
    id: 3,
    title: "ZANDER KIT NR.1",
    description: "Description of the product",
    category: "kits",
    attributes: {
      sku: "Zander kit",
      model: "Zander kit Nr.1",
      color: [
        {
          name: "n1",
          image: logo,
          quantity: 10,
        },
        {
          name: "nr1",
          image: logo,
          quantity: 0,
        },
      ],
      Width: "4 inch",
      lenght: "4 inch",
      price: "2.5",
    },
  },
];
