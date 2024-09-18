import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Materials,
  Business,
  Equipment,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
  PrivacyPolicy,
  CookiePolicy,
  Terms
} from "./components";
import styles from "./styles/style";

const App = () => {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        {/* Header (Navbar) */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Stats />
                    <Business />
                    <Materials />
                    <Equipment />
                    <Testimonials />
                    <Clients />
                    <CTA />
                  </>
                }
              />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
