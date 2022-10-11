import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_article_left">
          <FiberManualRecord />
        </div>
        <div className="widgets_article_right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Paulo is back", "22k Readers")}
      {newsArticle("God did it again", "65k Readers")}
      {newsArticle("Healing in Kenya", "31k Readers")}
      {newsArticle("Night of Bliss", "22k Readers")}
      {newsArticle("Pastor Chris", "Top Trending")}
      {newsArticle("Apostle Mike", "Top Trending")}
      {newsArticle("Min. Theophilus", "Top Trending")}
    </div>
  );
}

export default Widgets;
