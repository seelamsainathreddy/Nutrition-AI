import { Nav } from "./components";
import { Outlet } from "react-router-dom";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <>
    <header>
      <Nav />
    </header>

    <main>
      <Outlet />
     </main>

    <Footer />
   
    </>
  );
};

export default App;
