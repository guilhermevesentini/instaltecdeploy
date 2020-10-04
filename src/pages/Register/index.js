import React, { Component } from 'react';
import api from "../../services/Api";
import { login } from "../../services/auth";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  align-items: center;
  position: relative; 
  
`;

export default class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: "",        
        isLoading: false
      };

      handleSignUp = async e => {

        this.setState({ isLoading: true })
        e.preventDefault();
        const { nome, email, password } = this.state;
        if (!nome | !email | !password) {
            this.setState({ error: <div classNames=" alert alert-light text-center"> "Preencha o formulário para continuar!" </div> });
            this.setState({
                error:
                <div className="alert alert-light text-center">
                Houve um problema com seu registro, verifique suas credenciais.
              </div>,
                isLoading: false
            });
        } else {
            try {
                const response = await api.post("/account/Register", { nome: nome, email: email, senha: password });
                login(response.headers.authorization);
                console.log(response);
                this.props.history.push("/registerDone");
            } catch (err) {
                this.setState({
                    error:
                    <div className="alert alert-light">
                    Houve um problema com seu registro, verifique suas credenciais.
                  </div>,
                    isLoading: false
                });
            }
        }
    };


    render() {
        return (
            <div>
                <body className="hold-transition login-page">
                <div className="register-box">                   
                    <div className="card">
                        <div className="card-body register-card-body">
                        <div className="login-logo" style={{marginBottom:"20px"}}><img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" class="img-circle" /> <a>Instalttec</a></div>                            
                            <form onSubmit={this.handleSignUp}>
                            {this.state.error && <p>{this.state.error}</p>}
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Nome Completo" onChange={e => this.setState({ nome: e.target.value })} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email"  onChange={e => this.setState({ email: e.target.value })} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Senha" onChange={e => this.setState({ password: e.target.value })} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Digite sua senha novamente" onChange={e => this.setState({ password: e.target.value })} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                            <label htmlFor="agreeTerms">
                                                Aceito os <a href="/">termos</a>
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">{!this.state.isLoading ?
                                        <button type="submit" className="btn btn-primary btn-block">Registrar</button>
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
                            {/* /.col 
                            <div className="social-auth-links text-center">
                                <p>- Ou -</p>
                                <a href="/" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" />
                                    Login com o Facebook
                                </a>
                                <a href="/" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" />
                                    Login com o Google+
                                </a>
                            </div>
                            */}
                            <a href="/" className="text-center">Já sou membro</a>
                        </div>
                        {/* /.form-box */}
                    </div>{/* /.card */}
                    {/* /.register-box */}
                    
                </div>
                </body>
                </div>


        )
    }
}
