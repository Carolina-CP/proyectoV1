import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormularioCategorias = () => {

    return (
        <div class="row g-2 m-3">
            <h4 className="text-muted">Buscador</h4>
        <div class="col-md">
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInputGrid" />
            <label for="floatingInputGrid">Por palabras claves</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
              <option selected>Selecciona</option>
              <option value="1">Diseño</option>
              <option value="2">Psicología</option>
              <option value="3">Coaching</option>
            </select>
            <label for="floatingSelectGrid">Por categorias</label>
          </div>
        </div>
      </div>
    )
}

export default FormularioCategorias