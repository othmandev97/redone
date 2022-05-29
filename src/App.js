import Header from "./components/Header";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import { Newsletter } from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <News />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
