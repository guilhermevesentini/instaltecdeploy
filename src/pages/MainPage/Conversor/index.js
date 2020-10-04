import React, { Component } from 'react';
import CheckBox from './checkbox';
import ConversorXmlService from '../../../services/conversorxmlService.js';
import Navbar from './../Main/Navbar';
import Menu from '../Main/SideMenu';
import Footer from '../Main/Footer';




class Conversor extends Component {

	constructor(props) {
		super(props)

		this.conversorXmlService = new ConversorXmlService();

		this.state = {
			infos: [
				// Informações nota fiscal //
				{ id: 1, value: "Nome da Empresa", isChecked: false },
				{ id: 2, value: "Serie", isChecked: false },
				{ id: 3, value: "Data de emissão", isChecked: false },
				{ id: 4, value: "Endereço", isChecked: false },
				{ id: 5, value: "Numero da NF", isChecked: false },
				{ id: 6, value: "Razão social", isChecked: false },

				// Informações Remetente //
				{ id: 7, value: "Nome da empresa", isChecked: false },
				{ id: 8, value: "Série", isChecked: false },
				{ id: 9, value: "Data de emissão", isChecked: false },
				{ id: 10, value: "Endereço", isChecked: false },
				{ id: 11, value: "Numero NF", isChecked: false },
				{ id: 12, value: "Razão social", isChecked: false },

				// Informações Destinatário //
				{ id: 13, value: "Nome da empresa", isChecked: false },
				{ id: 14, value: "Série", isChecked: false },
				{ id: 15, value: "Data de emissão", isChecked: false },
				{ id: 16, value: "Endereço", isChecked: false },
				{ id: 17, value: "Numero NF", isChecked: false },
				{ id: 18, value: "Razão social", isChecked: false },

				// Informações Produto //
				{ id: 19, value: "Nome do Produto", isChecked: false },
				{ id: 20, value: "NCM", isChecked: false },
				{ id: 21, value: "Pis", isChecked: false },
				{ id: 22, value: "Cofins", isChecked: false },
				{ id: 23, value: "Quantidade", isChecked: false },
				{ id: 24, value: "Preço", isChecked: false }

			],
			files: []
		}
	}


	handleAllChecked = (event) => {
		let infos = this.state.infos;
		infos.forEach(info => info.isChecked = event.target.checked);
		this.setState({ infos: infos });
	}

	//TODO Usado para dar check em todos os botoes
	handleCheckChieldElement = (event) => {
		let infos = this.state.infos;
		infos.forEach(info => {
			if (info.id.toString() === event.target.id) {
				info.isChecked = event.target.checked
			}

		})
		this.setState({ infos: infos });
	}

	fileHandler = (event) => {
		event.preventDefault();

		this.setState({
			files: event.target.files
		}, () => { console.log(this.state.files) });
	};

	sendFileHandler = async (event) => {
		await this.conversorXmlService.sendFileHandler(this.state, event);
	}

	render() {
		return (
			<div>
				<Navbar /><Menu />
				<div>
					<div className="content-wrapper">
						{/* Content Header (Page header) */}
						<div className="content-header">
							<div className="container-fluid">
								<div className="row mb-2">
									<div className="col-sm-6">
										<h1 className="m-0 text-dark">Conversor XML</h1>
									</div>{/* /.col */}
									<div className="col-sm-6">
										<ol className="breadcrumb float-sm-right">
											<li className="breadcrumb-item"><a href="Dashboard">Home</a></li>
											<li className="breadcrumb-item active">Conversor</li>
										</ol>
									</div>{/* /.col */}

								</div>
								{/* /.row */}

							</div>
							{/* /.container-fluid */}
						</div>
						{/* /.content-header */}
						{/* Main content */}
						<div className="content">
							<div className="container-fluid">

								<div className="card card-light">
									<div className="card-header">
										<h5 className="m-0">Notas</h5>
									</div>
									<div className="card-body">
										<div className="col-sm-12">
											<h5>Olá bem vindo a página de conversor.</h5>
											<p>Abaixo encontrará uma caixa <i>"Converta aqui seu arquivo XML"</i>, importante saber que nesse momento disponibilizamos a conversão completa dos arquivos,
												que significa na conversão será enviado <b>todas</b> as informações do seu arquivo XML convetido. como por exemplo: <i>Informações da Nota fiscal</i>, <i>Informações do remetente</i> e assim por diante.</p>
											<p>Estamos trabalhando para implementar mais abaixo opções para personalizar a sua conversão, ou seja: Se quiser ter por exemplo somente as <i>informações fiscais</i>, <i>da empresa</i>, <i>produto</i> ou <i>informações mais específicas</i>
											poderá selecionar no box os dados que deseja converter e somente as informações selecionadas vão ser enviada para o seu arquivo em excel.</p>
											<p>Qualquer dúvida ou sugestão,<a href="Suporte"> entre em contato conosco</a> para melhorarmos os nossos serviços.</p>
										</div>
									</div>

								</div>

								<div className="card card-success">
									<div className="card-header">
										<h5 className="m-0">Converta aqui seu arquivo Xml</h5>
									</div>
									<div className="card-body">
										<div className="col-sm-6">
											<form onSubmit={this.sendFileHandler} encType="multipart/form-data">
												<div className="form-group">
													<label hmtlfor="exampleFormControlFile1"><h5 className="card-title">Selecione os arquivos XML a serem convertidos para EXCEL</h5></label>
													<input type="file" multiple className="form-control-file" name="file" id="exampleFormControlFile1" onChange={this.fileHandler} />
												</div>


												<button type="submit" className="btn btn-success">Enviar</button>
											</form>
										</div>
									</div>

								</div>
								{/* /Aqui vai o código para selecionar opções da nota */}
								{/* /.container-fluid */}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>


		);
	}
}

export default Conversor;
