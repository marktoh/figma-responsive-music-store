import { hero } from "./hero";
import { promo } from "./promo";
import { newProducts, popularProducts } from "./products";
import { articles } from "./articles";
import { footer } from "./footer";

export default {
  hero,
  promo,
  products: {
    new: newProducts,
    popular: popularProducts,
  },
  articles,
  footer,
};
