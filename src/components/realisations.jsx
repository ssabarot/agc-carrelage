import { ResponsiveCarousel } from "./responsive-carousel";
import React from "react";

export const Realisations = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Réalisations</h2>
          <p>Découvrez ici quelques exemples de mes réalisations passées.</p>
        </div>
        <div className="row">
          {props.data ? <ResponsiveCarousel data={props.data} /> : "Loading..."}
        </div>
      </div>
    </div>
  );
};