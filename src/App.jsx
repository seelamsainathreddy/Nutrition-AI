import { Nav } from "./components";
import { Outlet } from "react-router-dom";
import {
  Footer
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
