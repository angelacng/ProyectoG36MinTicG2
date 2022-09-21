function leerBarcos() {
    //método GET
    $.ajax({
        url: 'https://g2553f0dea28492-x4jypzb8clgavixl.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat',
        type: 'GET',
        dataType: 'JSON',
        success: function (respuesta) {
            let cs = respuesta.items;
            $("#tablaBarcos").empty();
            generarTabla(cs);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
    });
}
function generarTabla(items) {
    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td> " + items[i].id + "</td>";
        myTable += "<td> " + items[i].brand + "</td>";
        myTable += "<td> " + items[i].model + "</td>";
        myTable += "<td> " + items[i].category_id + "</td>";
        myTable += "<td> " + items[i].name + "</td>";
        myTable += "<td> <button onclick='eliminarBarco(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr> ";
    }
    myTable += "</table>"
    $("#tablaBarcos").append(myTable);
}

function guardarBarco() {
    //método POST
    let idBarco = $("#idBarco").val();
    let marca = $("#marcaBarco").val();
    let modeloBarco = $("#modeloBarco").val();
    let id_categoria = $("#id_categoria").val();
    let nombre = $("#nombreBarco").val()
    let data = {
        id: idBarco,
        brand: marca,
        model: modeloBarco,
        category_id: id_categoria,
        name: nombre,
    };
    let dataToSend = JSON.stringify(data)
    console.log(dataToSend);
    $.ajax({
        url: 'https://g2553f0dea28492-x4jypzb8clgavixl.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat',
        type: 'POST',
        data: dataToSend,
        //dataType : 'json',
        contentType: 'application/json',
        success: function () {
            $("#idBarco").val("");
            $("#marcaBarco").val("");
            $("#modeloBarco").val("");
            $("#id_categoria").val("");
            $("#nombreBarco").val("");
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function () {
            leerBarcos();
        }
    });
}

function actualizarBarco() {
    //método PUT
    let idBarco = $("#idBarco").val();
    let marca = $("#marcaBarco").val();
    let modeloBarco = $("#modeloBarco").val();
    let id_categoria = $("#id_categoria").val();
    let nombre = $("#nombreBarco").val()
    let data = {
        id: idBarco,
        brand: marca,
        model: modeloBarco,
        category_id: id_categoria,
        name: nombre,
    };
    let dataToSend = JSON.stringify(data)
    console.log(dataToSend);
    $.ajax({
        url: 'https://g2553f0dea28492-x4jypzb8clgavixl.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat',
        type: 'PUT',
        data: dataToSend,
        //dataType : 'json',
        contentType: 'application/json',
        success: function () {
            $("#idBarco").val("");
            $("#marcaBarco").val("");
            $("#modeloBarco").val("");
            $("#id_categoria").val("");
            $("#nombreBarco").val("");
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function () {
            leerBarcos();
        }
    });
}

function eliminarBarco(idBarco) {
    //método DELETE
    let data = {
        id: idBarco,
    };
    let dataToSend = JSON.stringify(data)
    console.log(dataToSend);
    $.ajax({
        url: 'https://g2553f0dea28492-x4jypzb8clgavixl.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat',
        type: 'DELETE',
        data: dataToSend,
        //dataType : 'json',
        contentType: 'application/json',
        success: function () {
            $("#idBarco").val("");
            $("#marcaBarco").val("");
            $("#modeloBarco").val("");
            $("#id_categoria").val("");
            $("#nombreBarco").val("");
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function () {
            leerBarcos();
        }
    });
}

function leerBarcoId() {
    //método GET con id
    let idBarco = $("#idBarco").val();
    $.ajax({
        url: 'https://g2553f0dea28492-x4jypzb8clgavixl.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/boat/boat/'+idBarco,
        type: 'GET',
        dataType: 'JSON',
        success: function (respuesta) {
            let cs = respuesta.items;
            $("#tablaBarcos").empty();
            generarTabla(cs);
        },
        error: function (xhr, status) {
            alert('El barco no se encuentra registrado');
        },
    });
}
