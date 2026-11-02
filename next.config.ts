import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Allow markdown and MDX files to act as pages and be imported
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    // Plugins are passed by name so they work with Turbopack
    rehypePlugins: [
      ["rehype-pretty-code", { theme: "github-dark", keepBackground: true }],
    ],
  },
});

export default withMDX(nextConfig);
