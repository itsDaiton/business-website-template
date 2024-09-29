import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Materials,
  Business,
  Equipment,
  Clients,
  CTA,
  Footer,
  Landing,
  Navbar,
  Testimonials,
  PrivacyPolicy,
  CookiePolicy,
  Terms,
  Products,
} from "./components";
import styles from "./styles/style";

// Wrapper component
const Wrapper = ({ children }) => {
  return (
    <div className={`bg-dark ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        {/* Header (Navbar) */}
        <Wrapper>
          <Navbar />
        </Wrapper>

        {/* Main Content */}
        <div className={`bg-primary`}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Full page for Landing */}
                  <div className={`w-full h-screen`}>
                    <Landing />
                  </div>
                  {/* Wrapper for other components */}
                  <Wrapper>
                    {/* <Stats /> */}
                    <Business />
                    <Materials />
                    <Equipment />
                    <Testimonials />
                    <Clients />
                    <CTA />
                  </Wrapper>
                </>
              }
            />
            <Route
              path="/terms"
              element={
                <Wrapper>
                  <Terms />
                </Wrapper>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <Wrapper>
                  <PrivacyPolicy />
                </Wrapper>
              }
            />
            <Route
              path="/cookie-policy"
              element={
                <Wrapper>
                  <CookiePolicy />
                </Wrapper>
              }
            />
            <Route
              path="/products"
              element={
                <Wrapper>
                  <Products />
                </Wrapper>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Wrapper>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
};

export default App;
