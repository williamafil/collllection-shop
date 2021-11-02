import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import CartOverlay from "../Cart/CartOverlay";
import InfoOverlay from "../Header/InfoOverlay";
import MobileNavOverlay from "../Header/MobileNavOverlay";
import SearchOverlay from "../Header/SearchOverlay";
import ShopMenuOverlay from "../Header/ShopMenuOverlay";
import OverlayWrapper from "./OverlayWrapper";

const OverlayElement = () => {
  const overlayComponent = useSelector((state) => state.ui.overlayComponent);

  return (
    <OverlayWrapper>
      {overlayComponent === "cart" && <CartOverlay />}
      {overlayComponent === "info" && <InfoOverlay />}
      {overlayComponent === "mobileNav" && <MobileNavOverlay />}
      {overlayComponent === "search" && <SearchOverlay />}
      {overlayComponent === "shopNav" && <ShopMenuOverlay />}
    </OverlayWrapper>
  );
};

const Overlay = () => {
  const portalElement = document.getElementById("overlay");

  return <>{createPortal(<OverlayElement />, portalElement)}</>;
};

export default Overlay;
