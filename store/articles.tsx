import GuitarPedals from "../public/assets/articles/guitar-pedals.jpg";
import GibsonLesPaul from "../public/assets/articles/gibson-lespaul.jpg";
import AcousticGuitar from "../public/assets/articles/acoustic-guitar.jpg";
import GuitarPlayer from "../public/assets/articles/guitar-player.jpg";

const images = [GuitarPedals, GibsonLesPaul, AcousticGuitar, GuitarPlayer];

const baseData = {
  title: "Article Title",
  description: "Article Subhead",
};

const articles = images.map((image) => ({ ...baseData, image }));

export { articles };
