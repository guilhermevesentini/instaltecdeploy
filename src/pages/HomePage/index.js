import React, { Component } from 'react';
import "./css/agency.css";
import { Route, Link } from "react-router-dom";
//

export default class Home extends Component {
    render() {
        return (
            <div>

                <nav className="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <a className="py-2" href="/">
                            <div ClassName="login-logo" style={{ marginBottom: "0px", fontSize: 25 }}><img src="dist/img/instalttec(50x)(2).jpg" alt="Instalttec logo" className="img-circle" style={{ width: 30 }} /> <a>Instalttec</a></div>
                        </a>
                        <a className="py-2 d-none d-md-inline-block" href="#"></a>
                        <a className="py-2 d-none d-md-inline-block" href="#"></a>
                        <a className="py-2 d-none d-md-inline-block" href="#"></a>
                        <a className="py-2 d-none d-md-inline-block" href="#"></a>
                        <a className="py-2 d-none d-md-inline-block" href="#"></a>
                        <a className="py-2 d-none d-md-inline-block" href="#"></a>
                        <a className="py-3 d-none d-md-inline-block" ><Link to= "/Login"> Login <i className="fas fa-user" /></Link></a>

                    </div>
                </nav>

                <div className="content-hero bg-light">
                    <div className=" hero-block text-left mx-auto">

                        <div className="product-device text-center my-0"></div>

                        <div className="text-content my-5">
                            <h1 className="font-weight-normal">Instalttec</h1>
                            <p className="lead font-weight-normal">Uma ferramenta que vai revolucionar sua forma de trabalhar</p>
                            <p className="lead font-weight-normal">Ganhe tempo e praticidade ao analisar suas notas fiscais XML's</p>
                            <a className="btn btn-outline-info" href="#services">Saiba Mais</a>
                        </div>

                    </div>

                </div>

                {/* vantagens */}
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Vantagens</h2>
                                <h3 className="section-subheading text-muted">Com a nossa ferramenta você está na frente.</h3>
                            </div>
                        </div>
                        <div className="row text-center mt-4">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Acessibilidade</h4>
                                <p className="text-muted">Na instalttec você consegue acessar a nossa ferramenta online, desta forma em qualquer lugar poderá ter acesso sem a necessidade de fazer download de programas.</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Conversor</h4>
                                <p className="text-muted">O conversor é responsável por transformar um arquivo XML para um arquivo Excel de forma automática, assim facilitando a visualização para que facilite o seu trabalho.</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-users-cog fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Suporte</h4>
                                <p className="text-muted">Nos sabemos da importância do seu trabalho e suas datas limites, portanto estaremos de prontidão para os auxiliar. Estamos também em desenvolvimente e adoramos o seu feedback e sugestões.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* content  */}
                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="bg-gradient-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Arquivos XML</h2>
                            <p className="lead">Selecione seu arquivo XML.</p>
                        </div>
                        <div className="bg-light shadow-sm mx-auto" style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }} ><img src="dist/img/conversor.png" alt="banner" style={{ width: '100%', height: 300, borderRadius: '0' }} /></div>

                    </div>
                    <div className="bg-gradient-success mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Arquivos EXCEL</h2>
                            <p className="lead">E convertido terá suas informações em Excel.</p>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }} ><img src="dist/img/conversor.png" alt="banner" style={{ width: '100%', height: 300, borderRadius: '0' }} /></div>
                    </div>
                </div>

                <div className="mb-4 ">
                    <div className="pb-5 text-whitefeaturette text-center">
                        <div className="">
                            <h2 className="featurette-heading">Não perca mais tempo, <span className="text-muted">Junte-se a nós.</span></h2>
                            <p className="lead">O nosso objetivo é que ganhe mais tempo ao conferir suas notas fiscais de forma organizada.</p>
                        </div>
                        {/*<img src=""alt="banner"/>*/}
                    </div>
                </div>


                {/* Footer */}
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <span className="copyright">Copyright © Instalttec 2020 v1.0</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="/#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a href="/#">Politica de privacidade</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/#">Termos e Condições</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>


        )
    }
}
