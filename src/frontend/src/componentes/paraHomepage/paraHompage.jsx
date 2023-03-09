import React from "react";
import home_img from "../../Images/home_edited.png";

function ParaHomepage(props) {
  const style = {
    position: "absolute",
    width: "5vw",
  };
  return (
    <a href="/" className="ParaHomepage">
      <img src={home_img} style={style} alt="para homepage" />
    </a>
  );
}
export default ParaHomepage;
