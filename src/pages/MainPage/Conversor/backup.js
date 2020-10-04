<div className="row">

    <div className="col-lg-6">
        <div className="card card-info">
            <div className="card-header">
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
                <h5 className="m-0">Informações da Nota fiscal</h5>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group">
                            <div className="checkBox">
                                {
                                    this.state.infos.slice(0, 3).map((info, index) => {
                                        return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="checkBox">
                                {
                                    this.state.infos.slice(3, 6).map((info, index) => {
                                        return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* Backup Selcionar tudo input
													<div className="form-group">
														<div className="custom-control custom-switch">
															<input type="checkbox" className="custom-control-input" id="customSwitch1" />
															<label className="custom-control-label" htmlFor="customSwitch1" onclick="myFunction()">Selecione todas as informações</label>
														</div>
													</div>
													*/}
                </div>
            </div>

        </div>

    </div>

    <div className="col-lg-6">
        <div className="card card-info">
            <div className="card-header">
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
                <h5 className="m-0">Informações do Remetente</h5>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group">
                            {

                                this.state.infos.slice(6, 9).map((info, index) => {
                                    return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            {

                                this.state.infos.slice(9, 12).map((info, index) => {
                                    return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>

        </div>

    </div>

    <div className="col-lg-6">
        <div className="card card-info">
            <div className="card-header">
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
                <h5 className="m-0">Informações do Destinatário</h5>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group">
                            {

                                this.state.infos.slice(12, 15).map((info, index) => {
                                    return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            {

                                this.state.infos.slice(15, 18).map((info, index) => {
                                    return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>

    <div className="col-lg-6">
        <div className="card card-info">
            <div className="card-header">
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" >
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
                <h5 className="m-0">Informações do Produto</h5>

            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        {/* checkbox */}
                        <div className="form-group">
                            {

                                this.state.infos.slice(18, 21).map((info, index) => {
                                    return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            {

                                this.state.infos.slice(21, 24).map((info, index) => {
                                    return (<CheckBox key={index} handleCheckChieldElement={this.handleCheckChieldElement} {...info} />);
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>

        </div>

    </div>

    {/* /.row */}
</div>
