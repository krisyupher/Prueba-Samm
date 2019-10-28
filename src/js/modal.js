function crearSeccionS(){
    crearSE(document.getElementById("txtSeccionSucursal").value,'SUC');
    cerrarModal('modalSuc');
}
function crearSeccionO() {
    crearSE(document.getElementById("txtSeccionOficina").value, 'EQU');
    cerrarModal('modalOfi');
}
function crearSeccionC() {
    crearSE(document.getElementById("txtSeccionComponente").value, 'CPT');
    cerrarModal('modalCpt');
}
function cerrarModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}