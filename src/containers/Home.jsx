import React from "react";
import Header from "../components/Header";
import Mantenimiento from "../components/Mantenimiento";
import Clientes from "../components/Clientes";
import Familias from "../components/Familias";
import Zona from "../components/Zona";

import "../styles/materialize.css";
import "../styles/materialize.min.css";
import "../styles/PlantillaCSS.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="row">
        <Header />
        <Mantenimiento>
          <Clientes />
          <Familias />
          <Zona />
        </Mantenimiento>
      </div>
    </React.Fragment>
  );
};

export default Home;
