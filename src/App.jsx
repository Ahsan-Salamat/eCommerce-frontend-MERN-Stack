import React from "react";
import Navbar from "./compponents/Navbar/Navbar.jsx"
import Hero from "./compponents/HeroSec/HeroSec.jsx"
import CategorySec from "./compponents/categorySec/CategorySec.jsx"
import TrustBadges from "./compponents/trustBadge/trustbadge.jsx"
import FirstBanner from "./compponents/banner/banner.jsx"
import FeaturedProducts from "./compponents/featureProduct/featureProduct.jsx"
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CategorySec/>
    <TrustBadges/>
    <FirstBanner/>
    <FeaturedProducts/>
    </>
  );
}

export default App;
