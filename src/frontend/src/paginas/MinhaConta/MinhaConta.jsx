import React, { Component } from "react";
import Botao from "../../componentes/Botao/Botao.jsx";
import server from "../../componentes/global_var.jsx";
import "./MinhaConta.css";

class MinhaConta extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutBotao = this.handleLogoutBotao.bind(this);
    this.state = {
      usuario: "",
    };
  }
  componentDidMount() {
    server.get("validar_jwt/", { withCredentials: true }).then((res) => {
      if (res["data"] === "JWT inválido") {
        window.location.href = "/";
      } else {
        this.setState({ usuario: res["data"] });
      }
    });
  }
  handleLogoutBotao(e) {
    server.get("sair/", { withCredentials: true }).then((res) => {
      window.location.href = "/";
    });
  }
  render() {
    return (
      <div className="MinhaContaDiv">
        <h1>Bem vindo {this.state["usuario"]}</h1>
        <Botao
          id={"LogoutBotao"}
          type={"button"}
          text={"Log out"}
          onClick={this.handleLogoutBotao}
        />
      </div>
    );
  }
}

export default MinhaConta;
