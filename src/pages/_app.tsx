import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { GlobalStyle } from "../global/styles";
import ProductsContextProvider from "../contexts/product.context";
import UserContextProvider from "../contexts/user.context";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <ProductsContextProvider>
          <main className={inter.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ToastContainer theme="dark" />
          </main>
        </ProductsContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
