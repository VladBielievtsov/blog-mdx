import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={" bg-[#1e1e2e] min-h-screen text-white"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
