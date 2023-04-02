import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { GlobalStyle } from "../global/styles";

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default App;
