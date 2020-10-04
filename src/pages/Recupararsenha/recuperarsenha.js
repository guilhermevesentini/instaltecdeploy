import React, { Component } from "react";
import api from "../../services/Api";

import { login } from "../../services/auth";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  align-items: center;
  position: relative; 
  
`;

class RecuperarSenha extends Component {

  state = {
    email: "",
    emailError: "",
    error: "",
    isLoading: false
};

handleSubmit = async e => {

    this.setState({ isLoading: true })
    e.preventDefault();
    const { email } = this.state;
    if (!email ) {
        this.setState({ error: <div classNames=" alert alert-light text-center"> "Preencha e-mail e senha para continuar!" </div> });
        this.setState({
            error:
            <div className="alert alert-light text-center">
            Houve um problema com o login, tente novamente.
          </div>,
            isLoading: false
        });
    } else {
        try {
            const response = await api.post("/account/recuperarSenha", { email: email });
            login(response.headers.authorization);
            console.log(response);
            this.props.history.alert(
              <div className="alert alert-success text-center">
              Email enviado com sucesso!<br></br> 
              Você receberá um link no seu email para recuperar sua senha.
              </div>
          );
        } catch (err) {
            this.setState({
                error:
                <div className="alert alert-light">
                Houve um problema com o login, tente novamente.
              </div>,
                isLoading: false
            });
        }
    }
};
  

  render() {
    return (
      <div>
        <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
            <div className="login-logo" style={{marginBottom:"20px"}}><img src="./dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" className="img-circle " /> <a>Instalttec</a></div>
                            
              <p className="login-box-msg">Esqueceu sua senha? Aqui facilmente consegue recuperar.</p>
              <form onSubmit={this.handleSubmit}>
              {this.state.error && <p>{this.state.error}</p>}
                <div className="input-group mb-3" onChange={e => this.setState({ email: e.target.value })} >
                  <input 
                    type="email"
                    name="email"
                    className="form-control" 
                    placeholder="Email" 
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">{!this.state.isLoading ?
                   <button type="submit" className="btn btn-primary btn-block">Solicite Nova Senha</button>
                   : <div className="sweet-loading">
                      <FadeLoader
                          css={override}
                          size={20}
                          color={"#123abc"}
                          loading={this.state.isLoading}
                      />
                    </div>}
                  {/* /.col */}
                  </div>
                </div>
              </form>
              <p className="mt-3 mb-1">
                <a type="submit" >Não recebeu o link? Solicite novamente.</a>
              </p>
              <p className="mt-3 mb-1">
                <a href="/Login">Página de Login</a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        </div>
      </div>

    );
  }
}

export default RecuperarSenha;