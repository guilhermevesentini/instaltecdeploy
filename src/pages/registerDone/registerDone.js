import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class registerDone extends Component {
    


    render() {
        return (
            <div>
            <div className="hold-transition login-page">
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                    <div className="login-logo" style={{marginBottom:"20px"}}><img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" class="img-circle " /> <a>Instalttec</a></div>
                            
                        <p className="login-box-msg">
                            Seu registro foi realizado com sucesso!                            

                            <br></br>

                            Agora clique nesse link <a href="/">Login</a> para retornar a página de login.

                            <br></br>
                            
                        </p>
                        
                            
                        
                    </div>
                </div>
            </div>
            </div>
            </div>  
        )
    }
}

export default withRouter(registerDone);