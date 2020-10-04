import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="hold-transition sidebar-mini layout-fixed">
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="Dashboard" className="brand-link">
            <img src="dist/img/instattec(128x)(1).jpg" alt="instalttec logo" className="brand-image img-circle elevation-3"
            style={{opacity: "8"}} />
              <span className="brand-text font-weight-light">INSTALTTEC</span>
          </a>
          {/* Sidebar ?? */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
              
              </div>
              <div className="info">
                <a href="Dashboard" className="d-block">Página Admin</a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                
                <li className="nav-item">
                  <a href="Conversor" className="nav-link">
                    <i className="nav-icon fas fa-file" />
                    <p>
                     Conversor
              
                    </p>
                  </a>
                </li>                
                <li className="nav-item">
                  <a href="Suporte" className="nav-link">
                    <i className="nav-icon fas fa-user" />
                    <p>
                     Suporte
              
                    </p>
                  </a>
                </li>               
                
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        </div>
      </div>
    )
  }
}
