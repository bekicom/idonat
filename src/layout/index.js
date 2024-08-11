import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { RootRoutes } from "../routes";
import { Footer, Header, Sidebar } from "../components";
import { MyBooleanContext } from "../context";
import useScrollToTop from "../hooks/scrollToTop";

function Layout() {
  const width = window.innerWidth <= 1100;
  const { isToggled, toggle } = useContext(MyBooleanContext);
  const scrollToTop = useScrollToTop();
  return (
    <div className="App">
      <div className="container">
        {scrollToTop} <Sidebar />
        <main onClick={!isToggled && width && toggle}>
          <Header />
          <section>
            <Routes>
              {RootRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Layout;
