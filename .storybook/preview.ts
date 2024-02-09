import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Section",
          ["Hero", "Promo", "ProductSection", "ArticleSection"],
          "Components",
          ["Card", "ArticleCard"],
          "Foundation",
        ],
      },
    },
  },
};

export default preview;
