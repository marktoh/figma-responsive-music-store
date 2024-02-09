import { Hero } from "@/lib/section/hero";
import { Promo } from "@/lib/section/promo";
import { ProductSection } from "@/lib/section/product-section";
import { ArticleSection } from "@/lib/section/article-section";
import { Footer } from "@/lib/components/footer";

import store from "../store/index";

export default function Home() {
  const { hero, promo, products, articles } = store;
  return (
    <main className="flex flex-col">
      <Hero image={hero?.image} title={hero?.title} />
      <Promo {...promo} />
      <ProductSection title="New Products" products={products?.new} />
      <ProductSection title="Popular Finds" products={products?.popular} />
      <ProductSection title="Popular Finds" products={products?.popular} />
      <ArticleSection title="New Products" articles={articles} />
      <Footer />
    </main>
  );
}
