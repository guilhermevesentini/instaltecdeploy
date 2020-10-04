import React, { Component } from "react";
import queryString from 'query-string'
import api from '../../services/Api'

class NovaSenha extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: "",
      newPassword: "",
      newPasswordConfirm: ""
    }
  }

  changePassword = async () => {
    const { token } = queryString.parse(this.props.location.search);
    try {
      const result = await api.post(
        '/account/v1/verifyTokenPasswordChange/' + token,
        { password: this.state.newPassword }
      );

      console.log(result);

      this.setState({
        data: result.data
      });

    } catch (error) {
      console.log(error.response.data);
      this.setState({
        error: error.response.dat
      });
    }
  }

  handlePasswordChange = e => {
    e.preventDefault();
    if (this.state.newPassword !== this.state.newPasswordConfirm) {
      this.setState({
        error: "As senhas não são iguais. Por favor tentar novamente"
      });
    } else if (this.state.newPassword.length < 8) {
      this.setState({
        error: "A senha deve ter ao menos 8 caracteres"
      });
    } else {
      this.changePassword();
    }
  };

  render() {
    return (
            <div>
        <body className="hold-transition login-page">
          <div className="login-box">
            <div className="login-logo">
            </div>
            {/* /.login-logo */}
            <div className="card">
              <div className="card-body login-card-body">
              <div className="login-logo" style={{marginBottom:"20px"}}><img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" class="img-circle " /> <a>Instalttec</a></div>
                            
                <p className="login-box-msg">Você está a um passo de recuperar sua senha, Digite sua nova senha.</p>
                <form onSubmit={this.handlePasswordChange} >
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Digite sua Senha" onChange={e => this.setState({ newPassword: e.target.value })}/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Digite Novamente" onChange={e => this.setState({ newPasswordConfirm: e.target.value })}/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-block">Resetar</button>
                    </div>
                    {/* /.col */}
                  </div>
                </form>
                <p className="mt-3 mb-1">
                  <a href="/Login">Login</a>
                </p>
              </div>
              {/* /.login-card-body */}
            </div>

          </div>
        </body>
      </div>

);
}
}

export default NovaSenha;