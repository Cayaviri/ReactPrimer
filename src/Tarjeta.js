import React, { Component } from 'react';

class Tarjeta extends Component {
    render() {
      return (
        <div class="container">
        <div class="card text-center col-6 mt-5">
          <div class="card-header">
            Bienvenido
          </div>
          <div class="card-body">
              <h5 class="card-title">Mi primer <strong>APP</strong> web</h5>
              <p class="card-text">Mi primer componente renderizado con REACT</p>
              <a href="#" class="btn btn-primary">Ver mas</a>
          </div>
          <div class="card-footer text-muted">
              derechos reservados @2022
          </div>
        </div>
        </div>
      )
    }
}

export default Tarjeta;