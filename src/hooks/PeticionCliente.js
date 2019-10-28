var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const API = "http://app2.softwaresamm.com/valida/servicios/samcore/mantenimiento/jPlan.aspx?t=cli";

async function main() {
  try {
    let respuesta = await fetch(proxyUrl+API)
    let data = await respuesta.json()
    return data
  } catch (error) {
    alert(error);
  }
}

const algo = main()
console.log(algo)
  