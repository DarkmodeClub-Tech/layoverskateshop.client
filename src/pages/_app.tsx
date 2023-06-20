import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { GlobalStyle } from "../global/styles";
import ProductsContextProvider from "../contexts/product.context";

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ProductsContextProvider>
        <main className={inter.className}>
          <Header />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </ProductsContextProvider>
    </>
  );
}

export default App;
