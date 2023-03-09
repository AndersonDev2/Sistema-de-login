import React, { Component } from "react";
import { UsuarioInput, SenhaInput } from "../../componentes/Input/Input.jsx";
import Botao from "../../componentes/Botao/Botao.jsx";
import server from "../../componentes/global_var.jsx";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      usuario: "",
      senha: "",
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
    const data = JSON.stringify({
      usuario: this.state["usuario"],
      senha: this.state["senha"],
    });
    server.post("entrar/", data, { withCredentials: true }).then((res) => {
      if (res["data"] === "Acesso válido") {
        window.location.href = "/minha-conta";
      } else {
        alert(res["data"]);
      }
    });
  }
  render() {
    return (
      <div className="LoginDiv">
        <form onSubmit={this.handleSubmit}>
          <h1>Log in</h1>
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
          <Botao id={"EntrarBotao"} type={"submit"} text={"Entrar"} />
          <Botao
            id={"CriarContaBotao"}
            type={"button"}
            text={"Criar conta"}
            onClick={(e) => {
              window.location.href = "/criar-conta";
            }}
          />
          <a className="EsqueceuSenha" href="/esqueceu-senha">
            Esqueceu a senha?
          </a>
        </form>
      </div>
    );
  }
}

export default Login;
