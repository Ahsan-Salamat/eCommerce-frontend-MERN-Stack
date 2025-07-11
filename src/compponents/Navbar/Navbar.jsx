import React, { useState } from "react";
import { ShoppingCart, User, Search, AlignCenter } from "lucide-react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

function Navbar() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const burgerMenu = () => {
    setBurgerMenuOpen((prev) => !prev);
    setSearchActive(false); // 👈 always close search when burger menu toggled
  };

  const searchToggle = () => {
    setSearchActive((prev) => !prev);
    setBurgerMenuOpen(false); // 👈 always close menu when search toggled
  };

  return (
    <>
      <nav>
        {/* Desktop Version */}
        <div className="container hidden md:flex mx-auto px-4 py-3 items-center justify-between gap-4">
          <div className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl">
            SnapBuy
          </div>
          <div className="flex-1 max-w-xl mx-4 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg placeholder-zinc text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc hover:text-primary w-5 h-5" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:text-primary text-zinc">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-1 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </button>
            <button className="p-2 hover:text-primary text-zinc">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <div className="text-primary font-semibold tracking-widest text-2xl">
            SnapBuy
          </div>
          <button
            onClick={burgerMenu}
            className="text-zinc hover:text-primary p-2"
          >
            <AlignCenter className="w-6 h-6" />
          </button>
        </div>

        {/* Search Input (when active) */}
        {searchActive && (
          <ClickAwayListener onClickAway={() => setSearchActive(false)}>
            <div className="w-full relative max-w-sm mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg placeholder-zinc text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc hover:text-primary w-5 h-5" />
            </div>
          </ClickAwayListener>
        )}

        {/* Mobile Menu */}
        {burgerMenuOpen && (
          <ClickAwayListener onClickAway={() => setBurgerMenuOpen(false)}>
            <div className="container mx-auto px-4 py-4 md:hidden bg-zinc-100 bg-opacity-20">
              <div className="flex flex-col items-center gap-4">
                {/* Search Toggle Icon */}
                <button
                  onClick={searchToggle}
                  className="text-zinc hover:text-primary p-2 flex items-center gap-2"
                >
                  <Search className="w-6 h-6" />

                  <span className="text-xl">Search</span>
                </button>

                {/* Icons */}
                <div className="flex flex-col items-center justify-center gap-6">
                  <button className="relative p-2 text-zinc hover:text-primary flex items-center gap-2">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute top-1 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                      1
                    </span>
                    <span className="text-xl">Cart</span>
                  </button>
                  <button className="p-2 text-zinc hover:text-primary flex items-center gap-2">
                    <User className="w-6 h-6" />
                    <span className="text-xl">Account</span>
                  </button>
                </div>
              </div>
            </div>
          </ClickAwayListener>
        )}
      </nav>
    </>
  );
}

export default Navbar;
