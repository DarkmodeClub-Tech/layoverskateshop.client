import type { AppProps } from "next/app";
import { Lexend, Inter } from "next/font/google";
import Header from "../components/Header";
import { GlobalStyle } from "../global/styles";

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}

export default App;
