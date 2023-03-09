import React from "react";
import "./Botao.css";

function Botao(props) {
  return (
    <button
      className="BotaoClass"
      id={props.id}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Botao;
