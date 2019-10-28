//inicializa elementos M
document.addEventListener("DOMContentLoaded", function() {
  //var elems = document.querySelectorAll('.dropdown-trigger');
  var dropdowns = document.querySelectorAll(".dropdown-trigger");
  for (var i = 0; i < dropdowns.length; i++) {
    M.Dropdown.init(dropdowns[i]);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  //var elems = document.querySelectorAll('.dropdown-trigger');
  var modals = document.querySelectorAll(".modal-trigger");
  for (var i = 0; i < modals.length; i++) {
    M.Modal.init(modals[i]);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".Toggle");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "right",
    hoverEnabled: false
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".Toolbar");
  var instances = M.FloatingActionButton.init(elems, {
    toolbarEnabled: true
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".autocomplete");
  var options = {
    data: [
      { id: 1, text: "Apple", img: "http://placehold.it/250x250" },
      { id: 2, text: "Microsoft", img: "http://placehold.it/250x250" },
      { id: 3, text: "Google", img: "http://placehold.it/250x250" }
    ],
    limit: 4,
    onAutocomplete: null,
    minLength: 1,
    sortFunction: function(a, b, inputString) {
      return a.indexOf(inputString) - b.indexOf(inputString);
    }
  };
  var instances = M.Autocomplete.init(elems, options);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems);
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { edge: "right" });
});

//ASIGNAR NOMBRE AL FORMULARIO O SECCION
function nombrePlantilla() {
  var nombreUsuario = document.getElementsByName("nombreP")[0].value;
  var nuevoSaludo = document.createElement("H4");
  var contenidoSaludo = document.createTextNode("Plantilla " + nombreUsuario);
  nuevoSaludo.appendChild(contenidoSaludo);
  document.getElementsByClassName("title")[0].appendChild(nuevoSaludo);
}
function nombreSeccionSucursal() {
  var nombreUsuario = document.getElementsByName("nombre1")[0].value;
  var nuevoSaludo = document.createElement("H4");
  var contenidoSaludo = document.createTextNode(
    "Nombre Sucursal: " + nombreUsuario
  );
  nuevoSaludo.appendChild(contenidoSaludo);
  document
    .getElementsByClassName("container-formularioS")[0]
    .appendChild(nuevoSaludo);
}
function nombreSeccionComponente() {
  var nombreUsuario = document.getElementsByName("nombre2")[0].value;
  var nuevoSaludo = document.createElement("H4");
  var contenidoSaludo = document.createTextNode("Componente: " + nombreUsuario);
  nuevoSaludo.appendChild(contenidoSaludo);
  document
    .getElementsByClassName("container-formulario")[0]
    .appendChild(nuevoSaludo);
}
function nombreSeccionEquipo() {
  var nombreUsuario = document.getElementsByName("nombre3")[0].value;
  var nuevoSaludo = document.createElement("H4");
  var contenidoSaludo = document.createTextNode("Sección: " + nombreUsuario);
  nuevoSaludo.appendChild(contenidoSaludo);
  document
    .getElementsByClassName("container-formulario")[0]
    .appendChild(nuevoSaludo);
}
function crearInputText() {
  var nombreDato = document.getElementsByName("txtcorto")[0].value;
  document.getElementsByClassName("preguntas")[0].innerHTML +=
    "<div class='input-field col s10'><input type='text' id='autocomplete-input' class='autocomplete'/><label for='autocomplete-input'>" +
    nombreDato +
    "</label></div><div class='s1 m1 l1 push-l1 col'><a class='btn-small btn-floating blue'><i title='Mover' class='material-icons'>more_vert</i></a><a class='btn-small btn-floating blue'><i title='Eliminar' class='material-icons'>delete</i></a></div>";
}
function crearListaSelec() {
  var nombreDato = document.getElementsByName("ListaSelec")[0].value;
  var nombreOpcion1 = document.getElementsByName("option1")[0].value;
  var nombreOpcion2 = document.getElementsByName("option2")[0].value;
  document.getElementsByClassName("preguntas")[0].innerHTML +=
    "<div class='row'><div class='input-field col s10 l10>'<label>" +
    nombreDato +
    "</label><select class='browser-default'><option value='' disabled selected>Elija una opción</option><option value='1'>" +
    nombreOpcion1 +
    "</option><option value='2'>" +
    nombreOpcion2 +
    "</option></select></div><div class='s1 m1 l1 push-l1 col'><a class='btn-small btn-floating blue'><i title='Mover' class='material-icons'>more_vert</i></a><a class='btn-small btn-floating blue'><i title='Eliminar' class='material-icons'>delete</i></a></div></div>";
}

/*var Eventos = {
  init: function() {
    document.querySelector(".boton-check1 i").onclick = this.eventoSucursal;
    document.querySelector(".boton-check2 i").onclick = this.eventoComponente;
    document.querySelector(".boton-check3 i").onclick = this.eventoEquipo;
    document.querySelector(".boton-checkA i").onclick = this.eventoCampoTexto;
    document.querySelector(
      ".boton-checkP i"
    ).onclick = this.eventoNombrePlantilla;
    document.querySelector(".boton-checkE i").onclick = this.eventoListaSelec;
  },

  eventoNombrePlantilla: function() {
    nombrePlantilla();
    document.getElementById("modalP").style.display = "none";
  },
  eventoSucursal: function() {
    nombreSeccionSucursal();
    document.getElementById("modalSuc").style.display = "none";
  },

  eventoComponente: function() {
    nombreSeccionComponente();
    document.getElementById("modal2").style.display = "none";
  },

  eventoEquipo: function() {
    nombreSeccionEquipo();
    document.getElementById("modal3").style.display = "none";
  },
  eventoCampoTexto: function() {
    crearInputText();
    document.getElementById("modalA").style.display = "none";
  },
  eventoListaSelec: function() {
    crearListaSelec();
    document.getElementById("modalE").style.display = "none";
  }
};

Eventos.init();
*/
function mostrar(control) {
  var estado = document.getElementById(control).style.display;
  if (estado == "block" || estado == "")
    document.getElementById(control).style.display = "none";
  else document.getElementById(control).style.display = "block";
}
function ocultar(control) {
  document.getElementById(control).style.display = "none";
}
