import Footer from "./Footer";
import Header from "./Header";

function IndexLayout({ children }) {
  return (
    <>
      <Footer />
      {children}
      <Header />
    </>
  );
}

export default IndexLayout;
