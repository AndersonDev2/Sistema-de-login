import React from "react";
import profile_img from "../../Images/profile_edited.png";
import letter_img from "../../Images/letter_edited.png";
import lock_img from "../../Images/lock_edited.png";
import "./Input.css";

function Input(props) {
  return (
    <label className="InputClass" id={props.id}>
      <img src={props.img} alt={props.img_alt} />
      <span></span>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      ></input>
    </label>
  );
}

function UsuarioInput(props) {
  const ChamarPropsOnChange = (e) => {
    if (typeof props.onChange !== "undefined") {
      props.onChange(e);
    }
  };
  const onChange = (e) => {
    const caracteres_especiais = "!@#$%¨&*()_+`{}<>:?¹²³£¢¬-=´[]ªº,.;/°";
    const value = e.target.value;
    for (let i = 0; i < value.length; i++) {
      for (let i1 = 0; i1 < caracteres_especiais.length; i1++) {
        if (value[i] === caracteres_especiais[i1]) {
          e.target.setCustomValidity(
            `caracteres especiais não são permitidos (${caracteres_especiais})`
          );
          ChamarPropsOnChange(e);
          return;
        }
      }
    }
    e.target.setCustomValidity("");
    ChamarPropsOnChange(e);
  };

  return (
    <Input
      id={"Usuario"}
      type={"text"}
      placeholder={"Nome de usuário"}
      img={profile_img}
      img_alt={"Usuário"}
      onChange={onChange}
    />
  );
}
function EmailInput(props) {
  const ChamarPropsOnChange = (e) => {
    if (typeof props.onChange !== "undefined") {
      props.onChange(e);
    }
  };
  return (
    <Input
      id={"Email"}
      type={"email"}
      placeholder={"Email"}
      img={letter_img}
      img_alt={"Email"}
      onChange={ChamarPropsOnChange}
    />
  );
}
function SenhaInput(props) {
  const ChamarPropsOnChange = (e) => {
    if (typeof props.onChange !== "undefined") {
      props.onChange(e);
    }
  };
  const onChange = (e) => {
    const value = e.target.value;
    if (value.length < 8) {
      e.target.setCustomValidity("A senha deve ter pelo menos 8 caracteres");
      ChamarPropsOnChange(e);
      return;
    }
    e.target.setCustomValidity("");
    ChamarPropsOnChange(e);
  };
  return (
    <Input
      id={"Senha"}
      type={"password"}
      placeholder={"Senha"}
      img={lock_img}
      img_alt={"Senha"}
      onChange={onChange}
    />
  );
}
function ConfirmarSenhaInput(props) {
  const ChamarPropsOnChange = (e) => {
    if (typeof props.onChange !== "undefined") {
      props.onChange(e);
    }
  };
  return (
    <Input
      id={"ConfirmarSenha"}
      type={"password"}
      placeholder={"Confirmar senha"}
      img={lock_img}
      img_alt={"Confirmar senha"}
      onChange={ChamarPropsOnChange}
    />
  );
}
export { UsuarioInput, EmailInput, SenhaInput, ConfirmarSenhaInput };
