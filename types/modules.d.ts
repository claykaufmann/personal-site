declare module "react-markdown" {
  import type { ComponentType, ReactNode } from "react";

  interface ReactMarkdownProps {
    children: string;
    rehypePlugins?: Array<unknown>;
    remarkPlugins?: Array<unknown>;
    components?: Record<string, ComponentType<unknown>>;
    className?: string;
  }

  const ReactMarkdown: ComponentType<ReactMarkdownProps>;
  export default ReactMarkdown;
}

declare module "rehype-raw" {
  const rehypeRaw: unknown;
  export default rehypeRaw;
}
