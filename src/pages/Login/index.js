import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import api from "../../services/Api";
import { login } from "../../services/auth";
import { css } from "@emotion/core";
import { FadeLoader } from "react-spinners";
import qs from 'qs';


//teste pipeline teste gui //



const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  align-items: center;
  position: relative; 
  
`;

class Login extends Component {

    state = {
        email: "",
        password: "",
        error: "",
        isLoading: false
    };

    handleSignIn = async e => {

        e.preventDefault()

        this.setState({ isLoading: true })
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: <div classNames=" alert alert-light text-center"><p> "Preencha e-mail e senha para continuar!"</p> </div> });
            this.setState({
                error:
                <div className="alert alert-light text-center"><p>
                Houve um problema com o login, verifique suas credenciais.</p>
              </div>,
                isLoading: false
            });
        } else {
            try {

                const response = await api.request({
                    url: "/account/oauth/token",
                    method: 'post',
                    auth: {
                      username: "client",
                      password: "123"
                    },
                    data: qs.stringify({
                      "grant_type": "password",
                      "username": this.state.email,
                      "password": this.state.password  
                    })
                  });

                login(response.data.access_token);
                this.props.history.push("/Dashboard");
            } catch (err) {
                this.setState({
                    error:
                    <div className="alert alert-light"><p>
                    Houve um problema com o login, verifique suas credenciais.</p>
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
                    <div className="login-box">
                        <div className="login-logo">
                        </div>
                        {/* /.login-logo teste */}
                        <div className="card">
                            <div className="card-body login-card-body">
                                <div className="login-logo" style={{ marginBottom: "20px" }}><img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" class="img-circle " /> <a>Instalttec</a></div>

                                <form action="Dashboard" onSubmit={this.handleSignIn} >
                                    {this.state.error && <p>{this.state.error}</p>}
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
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
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input type="checkbox" id="remember" />
                                                <label htmlFor="remember">
                                                    Lembrar senha
                                                </label>
                                            </div>
                                        </div>
                                        {/* /.col */}
                                        <div className="col-4">{!this.state.isLoading ?
                                            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
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
                                {/* /.social-auth-links 
                                <div className="social-auth-links text-center mb-3">
                                    <p>- OU -</p>
                                    <a href="/#" className="btn btn-block btn-primary">
                                        <i className="fab fa-facebook mr-2" /> Login com o Facebook
                                    </a>
                                    <a href="/#" className="btn btn-block btn-danger">
                                        <i className="fab fa-google-plus mr-2" /> Login com o Google+
                                    </a>
                                </div>
                                */}
                                {/* /.social-auth-links */}
                                <p className="mb-1">
                                    <a href="RecuperarSenha">Esqueci minha senha</a>
                                </p>
                                
                            </div>
                            {/* /.login-card-body */}
                        </div>
                    </div>
                </body>
                {/* /.login-box */}
            </div>





        );
    }
}

export default withRouter(Login);