import React, { Component } from "react";
import ParaHomepage from "../../componentes/paraHomepage/paraHompage.jsx";
import {
  UsuarioInput,
  SenhaInput,
  ConfirmarSenhaInput,
} from "../../componentes/Input/Input.jsx";
import Botao from "../../componentes/Botao/Botao.jsx";
import server from "../../componentes/global_var.jsx";
import "./EsqueceuSenha.css";

class EsqueceuSenha extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      usuario: "",
      senha: "",
      confirmarSenha: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state["senha"] !== this.state["confirmarSenha"]) {
      alert("As senhas não são iguais");
      return;
    }
    const data = JSON.stringify({
      usuario: this.state["usuario"],
      senha: this.state["senha"],
    });
    server
      .post("atualizar_senha/", data, { withCredentials: true })
      .then((res) => {
        if (res["data"] === "Senha atualizada") {
          alert(res["data"]);
          window.location.href = "/";
        } else {
          alert(res["data"]);
        }
      });
  }
  render() {
    return (
      <div className="EsqueceuSenhaDiv">
        <ParaHomepage />
        <form onSubmit={this.handleSubmit}>
          <h1>Nova Senha</h1>
          <UsuarioInput
            onChange={(e) => {
              this.setState({ usuario: e.target.value });
            }}
          />
          <SenhaInput
            onChange={(e) => {
              this.setState({ senha: e.target.value });
            }}
          />
          <ConfirmarSenhaInput
            onChange={(e) => {
              this.setState({ confirmarSenha: e.target.value });
            }}
          />
          <Botao
            id={"AtualizarSenha"}
            type={"submit"}
            text={"Atualizar Senha"}
          />
        </form>
      </div>
    );
  }
}

export default EsqueceuSenha;
