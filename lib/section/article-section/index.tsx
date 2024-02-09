import { FC } from "react";
import { BaseSection } from "../../templates/base-section";
import { ArticleType, ArticleCard } from "../../components/article-card";

interface ArticleSectionProps {
  title: string;
  articles: ArticleType[];
}
const ArticleSection: FC<ArticleSectionProps> = ({ title, articles }) => {
  return (
    <BaseSection title={title}>
      {articles?.map((articles, idx) => (
        <ArticleCard
          key={idx}
          {...articles}
          style={idx % 2 === 0 ? "one" : "two"}
        />
      ))}
    </BaseSection>
  );
};

export { ArticleSection };
