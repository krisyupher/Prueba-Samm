function crearCL(nombre) {
    var codTercero = document.getElementById("sel_ter_terceros").value;
    if (codTercero == '') {
        alert("Debe seleccionar un Cliente para crear el CheckList");
    } else {
         codTercero = 'PLA-' + codTercero  
         var algunJson = {
            "id" : 0,
            "active" : 1,
            "nombre": nombre,
            "codigo": codTercero,
            "activo" : 1
        };
        var url = globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx';
        var pl = new SOAPClientParameters();
        pl.add("p_str_tipoPeticion", "chl");
        pl.add("p_str_json", JSON.stringify(algunJson));
        SOAPClient.invoke(url, "f_str_manipularPlantilla", pl, true, resPlantillaCBchecklist);
        ocultar('divNuevaLista');
    }
}

function duplicarCL(nombre) {
    let params = new URLSearchParams(location.search);
    var id_Checklist = params.get('id')
    var codTercero = document.getElementById("sel_ter_tercerosDup").value;
    if (codTercero == '' || nombre == '') {
        alert("Debe seleccionar un Cliente para crear el CheckList o dar un nombre");
    } else {
         codTercero = 'PLA-' + codTercero  
         var algunJson = {
            "id" : id_Checklist,
            "nombre" : nombre,
            "codigo": codTercero
        };
        var url = globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx';
        var pl = new SOAPClientParameters();
        pl.add("p_str_tipoPeticion", "dpr");
        pl.add("p_str_json", JSON.stringify(algunJson));
        SOAPClient.invoke(url, "f_str_manipularPlantilla", pl, true, resPlantillaCBchecklistDup);
        ocultar('divNuevaLista');
    }
}

function crearAT(nombre, tipo, lista, seccion) {
if (nombre !='') {
    var algunJson = {
        "id": "0",
        "active": 1,
        "nombre": nombre,
        "esVariable": 0,
        "valormin": "0",
        "valormax": "0",
        "obligatorio": 0,
        "tipo": tipo,
        "orden": 0,
        "id_pruebaChecklist": lista,
        "id_seccionAtributo": seccion,
        "opcionAtributo": []
    };
        //soapChecklist(JSON.stringify(algunJson),'atb');
    var url = globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx';
    var pl = new SOAPClientParameters();
    pl.add("p_str_tipoPeticion", "atb");
    pl.add("p_str_json", JSON.stringify(algunJson));
    SOAPClient.invoke(url, "f_str_manipularPlantilla", pl, true, resPlantillaCBatributo);
    }
}
function crearSE(nombre,codigo) {
    var algunJson = {
        "id": "0",
        "active": 1,
        "nombre": nombre,
        "codigo": codigo,
        "orden": 0
        };
    //soapChecklist(JSON.stringify(algunJson), 'scn'); pedal1
    var url=globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx';
    var pl = new SOAPClientParameters();
    pl.add("p_str_tipoPeticion", "scn");
    pl.add("p_str_json", JSON.stringify(algunJson));
    SOAPClient.invoke(url, "f_str_manipularPlantilla", pl, true, resPlantillaCBseccion);
}
function resPlantillaCBchecklist(res) {
    if (res.includes("ok|")) {
        var idChecklist = res.substr(3, res.length - 3);
        document.location.href= globalSite + "/forms/samm/checkdest.aspx?id=" + idChecklist
    }
}
function resPlantillaCBchecklistDup(res) {
        var idChecklist = res;
        document.location.href= globalSite + "/forms/samm/checkdest.aspx?id=" + idChecklist
}
function resPlantillaCBseccion(res) {
    if (res.includes("ok|")) {
        var idSeccion = res.substr(3, res.length - 3);
        crearAT("Atributo 1", 1, globalLista, idSeccion);
    }
}
function resPlantillaCBatributo(resAt) {
    if (resAt.includes("ok|")) {
       var idAtributo = resAt.substr(3, resAt.length - 3);
        actualiza();
    }
    else{
        alert(resAt);
    }
}

function soapChecklist(pJson,pTipo) {
    var xmlhttp = new XMLHttpRequest();
    var respuesta;
    if (globalSite == null) {
        xmlhttp.open('POST', 'http://app2.softwaresamm.com/valida/servicios/samcore/Equipo/plantillaCheckList.asmx', true);
    }
    else {
        xmlhttp.open('POST', globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx', true);
    }
    // build SOAP request
    var sr =
                '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:samm="http://samm.com/">'+
   '<soap:Header/>'+
   '<soap:Body>'+
      '<samm:f_str_manipularPlantilla>' +
         '<samm:p_str_tipoPeticion>'+pTipo+'</samm:p_str_tipoPeticion>'+
         '<samm:p_str_json>'+ pJson +'</samm:p_str_json>'+
      '</samm:f_str_manipularPlantilla>' +
   '</soap:Body>'+
'</soap:Envelope>';

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                //alert(xmlhttp.responseText);
                respuesta = xmlhttp.responseText;
                var node = document.evaluate(respuesta, document,
             function(prefix) {
                 return namespaceMapping[prefix];
             },
             XPathResult.FIRST_ORDERED_NODE_TYPE,
             null).singleNodeValue;
                //alert(respuesta);
            }
            else { alert('error1:' + xmlhttp.responseText); }
        }
    }
    
    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
    // send request
    // ...
    // This XPath query should get us the <GetResponse> element from the SOAP XML Response 
    var query = "//ns1:GetResponse[1]";

    // This object defines the namespaces used in the query 
    var namespaceMapping = {
        ns1: "http://samm.com/",  // SOAP namespace 
        diffgr: "urn:schemas-microsoft-com" // the service-specific namespace 
    };

    // Extract the <GetResponse> element from the response document
    var node = document.evaluate('//ns1:GetResponse[1]', document,
             function(prefix) {
                 return namespaceMapping[prefix];
             },
             XPathResult.FIRST_ORDERED_NODE_TYPE,
             null).singleNodeValue;
             
    //alert(node + ' - ' + respuesta)
    };

    function actualiza() {
        //__doPostBack('ctl00$cph_general$LinkButton1', '');
        window.setTimeout(null,5000); //esperar dos segundos qe haga la petición
        location.reload();
        //M.AutoInit();
    }
    
    function quitarAtributo(id){
     var algunJson = {
        "id": id,
        "active": 0,
        "nombre": "",
        "esVariable": 0,
        "valormin": "0",
        "valormax": "0",
        "obligatorio": 0,
        "tipo": 0,
        "orden": 0,
        "id_pruebaChecklist": 0,
        "id_seccionAtributo": 0,
        "opcionAtributo": []
    };
        //soapChecklist(JSON.stringify(algunJson),'atb');
    var url = globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx';
    var pl = new SOAPClientParameters();
    pl.add("p_str_tipoPeticion", "atb");
    pl.add("p_str_json", JSON.stringify(algunJson));
    SOAPClient.invoke(url, "f_str_manipularPlantilla", pl, true, resPlantillaCBatributo);
    }
    
    function editarAtributo(id,nombre,tipo,obliga,idSeccion,activ,orden){
    if ((activ == null)||activ=='undefined') activ=1;
     var algunJson = {
        "id": id,
        "active": activ,
        "nombre": nombre,
        "esVariable": 0,
        "valormin": "0",
        "valormax": "0",
        "obligatorio": obliga,
        "tipo": tipo,
        "orden": orden,
        "id_pruebaChecklist": globalLista,
        "id_seccionAtributo": idSeccion,
        "opcionAtributo": []
    };
        //soapChecklist(JSON.stringify(algunJson),'atb');
    var url = globalSite + '/servicios/samcore/Equipo/plantillaCheckList.asmx';
    var pl = new SOAPClientParameters();
    pl.add("p_str_tipoPeticion", "atb");
    pl.add("p_str_json", JSON.stringify(algunJson));
    SOAPClient.invoke(url, "f_str_manipularPlantilla", pl, true, resPlantillaCBatributo);
    }