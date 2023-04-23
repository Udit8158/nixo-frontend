import Footer from "@/components/utility/Footer";
import Navbar from "@/components/utility/Navbar/Navbar";
import Wrapper from "@/components/utility/Wrapper";
import "@/styles/globals.css";
import store from "@/store/store";
import { Provider } from "react-redux";


export default function App({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Provider>
      <Footer />
    </>
  );
}
