import { FC } from "react";
import { BaseSection } from "../../templates/base-section";
import { ProductType, Card } from "../../components/card";

interface ProductSectionProps {
  title: string;
  products: ProductType[];
}
const ProductSection: FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <BaseSection title={title}>
      {products?.map((product, idx) => <Card key={idx} {...product} />)}
    </BaseSection>
  );
};

export { ProductSection };
