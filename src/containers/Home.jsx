import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SuperHero from '../components/SuperHero'

import '../styles/materialize.css';
import '../styles/materialize.min.css';
import '../styles/PlantillaCSS.css';

const Home = () =>{
  return (
    <React.Fragment>
      <div class="row">
        <Header />
        <Hero />
        <SuperHero />
      </div>
    </React.Fragment>
  );
}

export default Home