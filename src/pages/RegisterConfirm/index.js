import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from 'query-string'
import api from '../../services/Api'

class RegisterConfirm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isVerified: false
        }
    }

    async componentDidMount() {
        const { token } = queryString.parse(this.props.location.search);
        try {
            const result = await api.get('/account/v1/verifyTokenRegistration/' + token);
            this.setState({
                data: result.data,
            });
        } catch (error) {
            console.log(error.response);// exclui .data desta linha 
            this.setState({
                data: error.response, // exclui .data desta linha
            });
        }


    }

    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div>
            <div class="hold-transition login-page">
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                    <div className="login-logo" style={{marginBottom:"20px"}}><img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" class="img-circle " /> <a>Instalttec</a></div>
                            
                        <p className="login-box-msg">
                            Seu email foi confirmado com sucesso!
                            <p>

                            <br></br>

                            Agora clique nesse link <a href="NovaSenha">Recuperar senha</a> para que possa solicitar a sua nova senha.

                            <br></br>

                            
                            </p>
                            
                            <p>Voltar a página de <a href="/Login">Login</a>.</p>
                        </p>
                        
                            
                        
                    </div>
                </div>
            </div>
            </div>
            </div>  
        )
    }
}

export default withRouter(RegisterConfirm);