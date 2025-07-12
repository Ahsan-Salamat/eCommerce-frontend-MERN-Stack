import React from "react";
import Navbar from "./compponents/Navbar/Navbar.jsx"
import Hero from "./compponents/HeroSec/HeroSec.jsx"
import CategorySec from "./compponents/categorySec/CategorySec.jsx"
import TrustBadges from "./compponents/trustBadge/trustbadge.jsx"
import FirstBanner from "./compponents/banner/banner.jsx"
import SecondBanner from "./compponents/banner/Secondbanner.jsx"
import FeaturedProducts from "./compponents/featureProduct/featureProduct.jsx"
import Footer from "./compponents/footer/Footer.jsx"
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CategorySec/>
    <TrustBadges/>
    <FirstBanner/>
    <FeaturedProducts/>
    <SecondBanner/>
    <Footer/>
    </>
  );
}

export default App;
