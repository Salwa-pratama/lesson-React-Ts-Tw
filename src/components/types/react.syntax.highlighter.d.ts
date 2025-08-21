declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    children?: string;
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    lineProps?: any;
  }

  export class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}

  export default SyntaxHighlighter;
}

declare module "react-syntax-highlighter/dist/esm/styles/prism" {
  export const dracula: any;
  export const materialDark: any;
  export const okaidia: any;
  // dll bisa ditambah sesuai style yang dipakai
}

declare module "react-syntax-highlighter/dist/esm/prism";
declare module "react-syntax-highlighter/dist/esm/hljs";
