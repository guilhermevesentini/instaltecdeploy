import React, { Component } from 'react';
import Navbar from './../Main/Navbar';
import Menu from '../Main/SideMenu';
import Footer from '../Main/Footer';


export default class Suporte extends Component {
    render() {
        return (
            <div><Navbar /><Menu />
                <div>
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Suporte</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="Dashboard">Home</a></li>
                                            <li className="breadcrumb-item active">Suporte</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </div>
                        {/* Main content */}
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        {/* general form elements disabled */}
                                        <div className="card card-info">
                                            <div className="card-header">
                                                <h3 className="card-title">Entre em contato</h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="card">
                                                            <div class="card-header">
                                                                <div>
                                                                    <h5 className="mt-3">Deixe aqui o seu feedback</h5>
                                                                    <div className="card-body">
                                                                        <p className="card-title"></p>
                                                                        <p className="card-text">
                                                                            <p>Com seu feedback vamos ser capazes de desenvolver esse programa de forma mais eficiente.</p>
                                                                            <p>Pedimos que reportem todos os problemas de forma que possamos identificar melhor suas necessidades e idéias.</p>
                                                                            <p>Estamos em versão Beta no momento, disponibilizando a ferramenta para testes.</p>
                                                                            <p>Agradecemos o Contato e compreensão.</p>
                                                                            <a>
                                                                                <img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" className="brand-image img-circle elevation-3" />
                                                                                <span className="text-lg brand-text font-weight-light pl-2">INSTALTTEC</span>
                                                                            </a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {/* text input */}
                                                        <div className="form-group">
                                                            <label>Nome</label>
                                                            <input type="text" className="form-control" placeholder="Digite seu Nome..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="email" className="form-control" placeholder="Digite seu email..." />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Mensagem</label>
                                                            <textarea className="form-control" rows={5} placeholder="Digite sua mensagem..." defaultValue={""} />
                                                        </div>
                                                        <a href="/#" type="submit" className="btn btn-primary">Enviar</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </div>
                        {/* /.content */}
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
};
