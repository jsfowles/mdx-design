import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Component {...pageProps} />
      <footer className="h-16 w-full" />
    </main>
  );
}

export default MyApp;
