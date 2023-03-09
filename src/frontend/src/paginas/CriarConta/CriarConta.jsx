import React, { Component } from "react";
import {
  UsuarioInput,
  EmailInput,
  SenhaInput,
  ConfirmarSenhaInput,
} from "../../componentes/Input/Input.jsx";
import ParaHomepage from "../../componentes/paraHomepage/paraHompage.jsx";
import Botao from "../../componentes/Botao/Botao.jsx";
import server from "../../componentes/global_var.jsx";
import "./CriarConta.css";

class CriarConta extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      usuario: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    };
  }
  componentDidMount() {
    server.get("validar_jwt/", { withCredentials: true }).then((res) => {
      if (res["data"] !== "JWT inválido") {
        window.location.href = "/minha-conta";
      }
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state["senha"] !== this.state["confirmarSenha"]) {
      alert("As senhas não são iguais");
      return;
    }
    const data = JSON.stringify({
      usuario: this.state["usuario"],
      email: this.state["email"],
      senha: this.state["senha"],
    });
    server.post("criar_conta/", data, { withCredentials: true }).then((res) => {
      if (res["data"] === "Conta Criada") {
        window.location.href = "/minha-conta";
      } else {
        alert(res["data"]);
      }
    });
  }
  render() {
    return (
      <div className="CriarContaDiv">
        <ParaHomepage />
        <form onSubmit={this.handleSubmit}>
          <h1>Criar Conta</h1>
          <UsuarioInput
            onChange={(e) => {
              this.setState({ usuario: e.target.value });
            }}
          />
          <EmailInput
            onChange={(e) => {
              this.setState({ email: e.target.value });
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
          <Botao id={"CriarConta"} type={"submit"} text={"Criar conta"} />
        </form>
      </div>
    );
  }
}

export default CriarConta;
