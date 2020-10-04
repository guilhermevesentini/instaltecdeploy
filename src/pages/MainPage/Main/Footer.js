import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="main-footer">
                    <strong>Copyright © 2020 <a href="http://Instaltec.io">Instalttec Sistemas</a>.</strong>
                     All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0 Beta
                    </div>
                </div>

            </div>
        )
    }
}
