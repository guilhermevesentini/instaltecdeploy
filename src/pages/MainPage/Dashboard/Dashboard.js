import React, { Component } from 'react';
import Navbar from './../Main/Navbar';
import Menu from '../Main/SideMenu';
import Footer from '../Main/Footer';



class Dashboard extends Component {
    render() {
        return (
            <div><Navbar /><Menu />
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Dashboard</h1>
                                </div>{/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="Dashboard">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>{/* /.col */}
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <h3>145</h3>
                                            <p>Conversões</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-document" />
                                        </div>
                                        <a className="small-box-footer">Mais Info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-success">
                                        <div className="inner">
                                            <h3>75<sup style={{ fontSize: 20 }}>%</sup></h3>
                                            <p>Produção</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-stats-bars" />
                                        </div>
                                        <a className="small-box-footer">Mais info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-warning">
                                        <div className="inner">
                                            <h3>26</h3>
                                            <p>Novos Usuários</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-person-add" />
                                        </div>
                                        <a className="small-box-footer">Mais info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                                {/* ./col */}
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-danger">
                                        <div className="inner">
                                            <h3>190</h3>
                                            <p>Acessos</p>
                                        </div>
                                        <div className="icon">
                                            <i className="ion ion-pie-graph" />
                                        </div>
                                        <a className="small-box-footer">Mais info <i className="fas fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* Main row */}
                            <div className="row">
                                <section className="col-lg-12 mainContainer">                                    
                                    <div className="card bg-gradient-light">
                                        <div className="card-header border-0">
                                            <h1 className="card-title-lg">
                                                Bem vindo a Instalttec
                                            </h1>
                                        </div>
                                        <div className="m-4">
                                            <h2>Sobre o nosso serviço</h2>

                                            <p>Estamos em fase Beta testando nossa ferramenta nesse momento, esperamos que tenha uma ótima experiência e otimização do seu tempo que é de grande valia para nós. Foi pensando no seu dia a dia que estamos trabalhando para transformar a dificuldade de leitura de um arquivo XML para a facilidade de leitura de um arquivo de formato EXCEL, que pode ser facilmente analisada, editada e melhor organizada dentro de uma planilha em excel.</p>
                                            <p>No dia de hoje estamos disponibilizando somente a ferramenta de conversão dos seus arquivos XML para Excel. Porem estamos empenhados em trazer novidades e novas ferramentas para o nosso sistema, aguardamos que os usuários beta entrem em contato conosco para nos dar feedback sobre o que podemos melhorar em nosso web aplicativo para que seja de maior utilidade aos nossos clientes. </p>
                                        </div>
                                        <div className="m-4">
                                            <h2>Vamos ao tutorial</h2>
                                        </div>
                                        <div className="text-left m-4 tutorial" style={{ width: "100%" }}>
                                            <div className="">
                                                <p>O conversor é fácil de utilizar, uma vez que tenha os seus arquivos XML <i>danfe Nf-e</i> vá em nossa página conversor, localizado ao seu lado esquerdo da tela na página Dashboard encontrará o atalho <b>Conversor</b>.</p>
                                                <img class="shadow" src="dist/img/Dashboard.png" alt="Tela Dashboard" style={{ width: "75%" }} />
                                            </div>
                                            <div className="text-left mt-5" style={{ width: "100%" }}>
                                                <p>Uma vez na página <i>Conversor</i> abaixo encontrará uma caixa verde onde vai selecionar os seus arquivos.</p>
                                                <img class="shadow" src="dist/img/conversor2.png" alt="Tela Conversor" style={{ width: "75%" }} />
                                            </div>
                                            <div className=" text-left mt-5" style={{ width: "100%" }}>
                                                <p>Nessa parte é onde converteremos os seus aquivos, selecione todos os arquivos que deseja e clique em enviar.</p>
                                                <img class="shadow" src="dist/img/boxconversor.png" alt="Tela box conversor" style={{ width: "80%" }} />
                                            </div>
                                            <div className="mt-5">
                                                <p>Selecione todos os arquivos XML.</p>
                                                <img class="shadow" src="dist/img/selecionararquivos2.png" alt="Tela selecionar arquivos" style={{ width: "60%", height: "60%" }} />
                                            </div>
                                            <div className="mt-5">
                                                <p>Note que nesse campo notificará a quantidade de arquivos que selecionou.</p>
                                                <p>Clique em enviar e aguarde o download do arquivo em excel.</p>
                                                <img class="shadow" src="dist/img/arquivosselecionados.png" alt="Tela arquivos selecionados" style={{ width: "80%", height: "70%" }} />
                                            </div>
                                            <div className="mt-5">
                                                <p>Vá até sua pasta de downloads e abra o arquivo.</p>
                                                <img class="shadow" src="dist/img/downloads.png" alt="Tela download" style={{ width: "60%", height: "60%" }} />
                                            </div>
                                            <div className="mt-5">
                                                <p>E por fim os seus arquivos XML vão estar convertidos e organizados em uma planilha de EXCEL.</p>
                                                <img class="shadow" src="dist/img/excel.png" alt="Tela excel" style={{ width: "80%", height: "80%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

                    <aside className="control-sidebar control-sidebar-dark">

                        <div className="p-3">
                            <h5>Title</h5>
                            <p>Sidebar content</p>
                        </div>
                    </aside>
                </div>
                <Footer />
            </div>
        )
    }
};

export default Dashboard;