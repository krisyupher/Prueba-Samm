import React from 'react';

const SuperHero = () => {
  return (
    <React.Fragment>
      <div class="s12 m12 l12 col colorSamm">
        <div class="row buscador">
          <div class="s6 m8 l10 push-l1 col">
            <div class="row">
              <div class="card">
                <div class="l10 card-content container-formulario">
                  <h6>
                    Buscador de Equipos
                  </h6>
                  <div class="chip">
                    Davivienda <i class="close material-icons">close</i>
                  </div>
                  <div class="chip">
                    Bogota <i class="close material-icons">close</i>
                  </div>
                  <hr />
                  <div class="input-field col s12">
                    <select>
                      <option value="" disabled selected>Seleccione</option>
                      <option value="1">Davivienda</option>
                      <option value="2">Seguros Bolivar</option>
                      <option value="3">Colpatria</option>
                    </select>
                    <label>Cliente</label>
                  </div>

                  <div class="input-field col s12">
                    <select multiple>
                      <option value="" disabled>Seleccione</option>
                      <option value="1">Oficinas</option>
                      <option value="2">Electromecánicos</option>
                      <option value="3">Equipos Informáticos</option>
                      <option value="3">Sistemas de Seguridad</option>
                    </select>
                    <label>Familia</label>
                  </div>

                  <div class="input-field col s12">
                    <select>
                      <optgroup label="Antioquia">
                        <option value="1">Antioquia</option>
                        <option value="2">Chocó</option>
                      </optgroup>
                      <optgroup label="Bogotá">
                        <option value="3">Bogotá</option>
                        <option value="4">Cundinamarca</option>
                      </optgroup>
                      <optgroup label="Caribe">
                        <option value="3">Atlántico</option>
                        <option value="4">Bolívar</option>
                        <option value="4">Cesar</option>
                        <option value="4">Córdoba</option>
                        <option value="4">Guajira</option>
                        <option value="4">Magadalena</option>
                        <option value="4">Sucrre</option>
                      </optgroup>
                    </select>
                    <label>Zona</label>
                  </div>
                  <div class="row">
                    <div class="col s12">
                      <div class="row">
                        <div class="input-field col s12">
                          <i class="material-icons prefix">search</i>
                          <input
                            type="text"
                            id="autocomplete-input"
                            class="autocomplete"
                          />
                          <label for="autocomplete-input">Proveedor</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a id="Agregar1" class="btn-small blue">Buscar</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row equipos">
          <div class="s6 m8 l10 push-l1 col">
            <div class="row">
              <div class="card white">
                <div class="card-content container-formulario">
                  <table class="striped">
                    <thead>
                      <tr>
                        <th>Equipo</th>
                        <th>Rutina</th>
                        <th>Frecuencia</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Libertadores Pereira</td>
                        <td>Extintores</td>
                        <td>
                          <div class="input-field col s12">
                            <select>
                              <optgroup label="Semanal">
                                <option value="1">4 visitas al mes</option>
                                <option value="2">3 visitas al mes</option>
                                <option value="2">2 visitas al mes</option>
                              </optgroup>
                              <optgroup label="Mensual">
                                <option value="3">12 visitas al año</option>
                                <option value="4">6 visitas al año</option>
                                <option value="4">4 visitas al año</option>
                                <option value="4">3 visitas al año</option>
                                <option value="4">2 visitas al año</option>
                                <option value="4">1 visita al año</option>
                              </optgroup>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Libertadores Manizales</td>
                        <td>Extintores</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Libertadores Cali</td>
                        <td>Extintores</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <a id="A1" class="btn-small blue">Crear Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SuperHero 