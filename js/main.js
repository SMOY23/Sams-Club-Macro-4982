let price = '';

function printDate() {

    let tarjeta = document.getElementById('tarjeta').value;
    let fechaActual = document.getElementById('fechaActual').value;
    let fechaVencimiento = document.getElementById('fechaVencimiento').value;
    let fecha1 = new Date(fechaActual);
    let fecha2 = new Date(fechaVencimiento);



    let milisegundoDia = 24 * 60 * 60 * 1000;

    let milisegundoTrans = Math.abs(fecha1.getTime() - fecha2.getTime());
    let diasTranscurridos = Math.round(milisegundoTrans / milisegundoDia);

    console.log(fechaActual);
    console.log(fechaVencimiento);
    //console.log(milisegundoTrans);
    //console.log(diasTranscurridos);

    if (fechaActual == '' && fechaVencimiento == '') {
        alert('Por favor selecione una fecha valida')
    } else {
        if (tarjeta == '1') {
            price = ((650 * diasTranscurridos) / 365).toFixed(2);
            getPrice();

        } else {
            price = ((1100 * diasTranscurridos) / 365).toFixed(2);
            getPrice();

        }


    }
}

function getPrice() {
    const container = document.getElementById('pagototal');
    var html = '';

    html = `
<h2>TOTAL A PAGAR</h2>
<p>$${price}</p>
`;

    container.innerHTML = html;

}