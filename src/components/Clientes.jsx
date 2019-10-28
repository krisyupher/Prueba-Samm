import React from "react";

import "../styles/materialize.css";
import "../styles/materialize.min.css";
import "../styles/PlantillaCSS.css";

const Clientes = ({children}) => {
  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%"
  };
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const API =
    "http://app2.softwaresamm.com/valida/servicios/samcore/mantenimiento/jPlan.aspx?t=cli";

  async function main() {
    try {
      const respuesta = await fetch(proxyUrl + API);
      const data = await respuesta.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function Peticion() {
    const datos = await main();
    console.log(datos)  
    return datos;
  }
  
  Peticion();
  
  return (
      <React.Fragment>
      <select name="Clientes" style={groupStyles}>
        {/*{datos.map((val)=>(<option value={val.id}>{val.tercero}</option>)) }*/}
      </select>
    </React.Fragment>
  );
};

export default Clientes;
