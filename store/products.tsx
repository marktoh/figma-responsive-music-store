import GibsonLesPaul from "../public/assets/new-products/gibson-lespaul.png";
import EpiphoneSG from "../public/assets/new-products/epiphone-sg.png";
import FenderStrat from "../public/assets/new-products/fender-strat.png";
import FenderJaguar from "../public/assets/new-products/fender-jaguar.png";

import GreenCable from "../public/assets/popular-finds/green-cable.png";
import YellowCable from "../public/assets/popular-finds/yellow-cable.png";
import Polytune from "../public/assets/popular-finds/polytune.png";
import ErnieBall from "../public/assets/popular-finds/ernieball.png";

const images = {
  new: [GibsonLesPaul, EpiphoneSG, FenderStrat, FenderJaguar],
  popular: [GreenCable, YellowCable, Polytune, ErnieBall],
};

const baseData = {
  title: "Brand Name",
  description: "Product description here",
  price: "2,995",
  chips: [
    {
      count: 0,
      type: "colors",
    },
  ],
};

const newProducts = images.new.map((image) => ({ ...baseData, image }));
const popularProducts = images.popular.map((image) => ({ ...baseData, image }));
export { newProducts, popularProducts };
