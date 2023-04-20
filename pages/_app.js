import Footer from "@/components/utility/Footer";
import Navbar from "@/components/utility/Navbar/Navbar";
import Wrapper from "@/components/utility/Wrapper";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </>
  );
}
