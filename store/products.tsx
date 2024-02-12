import GibsonLesPaul from "../public/assets/new-products/gibson-lespaul.png";
import EpiphoneSG from "../public/assets/new-products/epiphone-sg.png";
import FenderStrat from "../public/assets/new-products/fender-strat.png";
import FenderJazzmaster from "../public/assets/new-products/fender-jazzmaster.png";

import GreenCable from "../public/assets/popular-finds/green-cable.png";
import YellowCable from "../public/assets/popular-finds/yellow-cable.png";
import Polytune from "../public/assets/popular-finds/polytune.png";
import ErnieBall from "../public/assets/popular-finds/ernieball.png";

const products = [
  {
    image: GibsonLesPaul,
    title: "Gibson Les Paul",
    description: "'56 Goldtop Reissue",
    price: "4,999.99",
    chips: [
      {
        count: 2,
        type: "colors",
      },
    ],
  },
  {
    image: EpiphoneSG,
    title: "Epiphone SG",
    description: "Legendary 1960s Classic",
    price: "449.99",
    chips: [
      {
        count: 3,
        type: "colors",
      },
    ],
  },
  {
    image: FenderStrat,
    title: "Fender Strat",
    description: "Dual-tone Sunburst",
    price: "799.99",
    chips: [
      {
        count: 2,
        type: "colors",
      },
    ],
  },
  {
    image: FenderJazzmaster,
    title: "Jazzmaster",
    description: "Solid Orange",
    price: "829.99",
    chips: [
      {
        count: 3,
        type: "colors",
      },
    ],
  },
];

const popularProducts = [
  {
    image: GreenCable,
    title: "Fender Cable",
    description: "Original Series",
    price: "27.99",
    chips: [
      {
        count: 3,
        type: "colors",
      },
    ],
  },
  {
    image: YellowCable,
    title: "Fender Cable",
    description: "Deluxe Series",
    price: "37.99",
    chips: [
      {
        count: 3,
        type: "colors",
      },
    ],
  },
  {
    image: Polytune,
    title: "TC Polytune 3",
    description: "Modern Tuner",
    price: "79.99",
    chips: [
      {
        count: 2,
        type: "colors",
      },
    ],
  },
  {
    image: ErnieBall,
    title: "Ernie Ball Skinny",
    description: "Nickel Wound",
    price: "11.99",
    chips: [
      {
        count: 3,
        type: "colors",
      },
    ],
  },
];

const newProducts = products;
export { newProducts, popularProducts };
