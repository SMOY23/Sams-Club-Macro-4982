let price = '';
let codigos = [{
        id: 1,
        name: 'BIC MAXI',
        code: '158565'
    },
    {
        id: 2,
        name: 'BIC MINI',
        code: '213991'
    },
    {
        id: 3,
        name: ' MALBORO BLANCO 20`s',
        code: '1884'
    },
    {
        id: 4,
        name: 'MALBORO ROJO 20`s',
        code: '1882'
    },
    {
        id: 5,
        name: 'MALBORO BLANCO 100`s',
        code: '921050'
    },
    {
        id: 6,
        name: 'MALBORO ROJO 100`s',
        code: '719277'
    },
    {
        id: 7,
        name: 'MALBORO ROJO 14`s',
        code: '29371'
    },
    {
        id: 8,
        name: 'BENSON H MENTHOL',
        code: '253093'
    },
    {
        id: 9,
        name: 'BENSON H DORADO',
        code: '253086'
    },
    {
        id: 10,
        name: 'CERILLOS MAYA',
        code: '310749'
    },
    {
        id: 11,
        name: 'SANDIA',
        code: '154305'
    },
    {
        id: 12,
        name: 'UVA VERDE',
        code: '930962'
    },
    {
        id: 13,
        name: 'UVA ROJA',
        code: '930990'
    },
    {
        id: 14,
        name: 'MANZANA GALA',
        code: '798067'
    },
    {
        id: 15,
        name: 'MANZANA GRANNY',
        code: '176344'
    },
    {
        id: 16,
        name: 'MANZANA RED DELICIOUS',
        code: '796940'
    },
    {
        id: 17,
        name: 'PIÑA MIEL',
        code: '85305'
    },
    {
        id: 18,
        name: ' MANZANA GOLDEN',
        code: '797185'
    },
    {
        id: 19,
        name: 'CEBOLLA BLANCA',
        code: '134083'
    },
    {
        id: 20,
        name: 'CEBOLLA CAMBRAY',
        code: '69494'
    },
    {
        id: 21,
        name: 'DURAZNO',
        code: '935407'
    },
    {
        id: 21,
        name: 'ESPARRAGO',
        code: '71235'
    },
    {
        id: 22,
        name: 'TOMATE CHERRY',
        code: '123315'
    },
    {
        id: 23,
        name: 'TOMATE HIODRONICO',
        code: '337070'
    },
    {
        id: 24,
        name: 'NARANJA VALENCIA',
        code: '86137'
    },
    {
        id: 25,
        name: 'BLUEBERRIES',
        code: '81998'
    },
    {
        id: 26,
        name: 'MANO ATAULFO',
        code: '87877'
    },
    {
        id: 27,
        name: 'ZARZAMORA',
        code: '72619'
    },
    {
        id: 28,
        name: 'FRAMBUESA',
        code: '72612'
    },
    {
        id: 29,
        name: 'ZANAHORIA BABY',
        code: '232526'
    },
    {
        id: 30,
        name: 'PAPAYA MARADOL',
        code: '87454'
    },
    {
        id: 31,
        name: 'TORONJA SANGRIA',
        code: '63782'
    },
    {
        id: 32,
        name: 'PAPA BLANCA',
        code: '70096'
    },
    {
        id: 33,
        name: 'LIMON AGRIO',
        code: '98964'
    },
    {
        id: 34,
        name: 'KIWI',
        code: '73414'
    },
    {
        id: 35,
        name: 'LECHERA',
        code: '139239'
    },
    {
        id: 36,
        name: 'COCA COLA 400ML',
        code: '779517'
    },
    {
        id: 37,
        name: 'COCA COLA 235ML VIDRIO',
        code: '146177'
    },
    {
        id: 38,
        name: 'COCA COLA MINI LATA',
        code: '76395'
    },
    {
        id: 39,
        name: 'HELADO CHOCOMENTA',
        code: '126969'
    },
    {
        id: 40,
        name: 'BOLSA',
        code: '83670'
    },
    {
        id: 41,
        name: 'BOLILLO',
        code: '374357'
    },
    {
        id: 42,
        name: 'TELERA',
        code: '374371'
    },
    {
        id: 43,
        name: 'JUMEX PACK',
        code: '809617'
    },
    {
        id: 44,
        name: 'AZUCAR ESTANDAR 50K',
        code: '23251'
    },
    {
        id: 45,
        name: 'AZUCAR REFINADA 50K',
        code: '34531'
    },
    {
        id: 46,
        name: 'TE JAZMIN',
        code: '338239'
    },
    {
        id: 47,
        name: 'SAL FINA',
        code: '749029'
    },
    {
        id: 48,
        name: 'SAL CISNE',
        code: '152535'
    },
    {
        id: 49,
        name: 'SAL 12/1K',
        code: '206408'
    },
    {
        id: 50,
        name: 'MASECA',
        code: '20408'
    },
    {
        id: 51,
        name: 'HUEVO COCO',
        code: '189470'
    },
    {
        id: 52,
        name: 'NUTRILECHE',
        code: '23703'
    },
    {
        id: 53,
        name: 'MEDIA CREMA',
        code: '356303'
    },
    {
        id: 54,
        name: 'CINTURON',
        code: '154544'
    },
    {
        id: 55,
        name: 'NETFLIX 300',
        code: '80293'
    },
    {
        id: 56,
        name: 'AGUACATE',
        code: '317113'
    },
    {
        id: 57,
        name: 'PANTALON CUADROS',
        code: '980021204'
    },
    {
        id: 58,
        name: 'OBLEAS SAN PEDRO',
        code: '73804'
    },
    {
        id: 59,
        name: 'VASOS DESHECHABLES BOSCO',
        code: '669863'
    },
    {
        id: 60,
        name: 'NECTAR DE ARANDANO',
        code: '980024784'
    },
    {
        id: 61,
        name: 'JUGO DE NARANJA UNICO 6PZ',
        code: '83370'
    },
    {
        id: 62,
        name: 'JUGO V8 SPLASH',
        code: '189201'
    },
    {
        id: 63,
        name: 'OSO DE PELUCHE BEIGE',
        code: '980013244'
    },
    {
        id: 64,
        name: 'ENSALADA DE LEGUMBRES HERDEZ 8PZ',
        code: '980012074'
    },
    {
        id: 65,
        name: 'GRANOS DE ELOTE HERDEZ 8PZ',
        code: '980012076'
    },
    {
        id: 66,
        name: 'JUGO DE FRUTA JUMEX 3PZ',
        code: '980020452'
    },
    {
        id: 67,
        name: 'LECHE LALA ENTERA 12PZ 1LT',
        code: '36196'
    },
    {
        id: 68,
        name: 'LECHE LALA DESLAC 12PZ 1LT',
        code: '10235'
    },
    {
        id: 69,
        name: 'LECHE LALA DESLAC LIGHT 12PZ 1LT',
        code: '123090'
    },
    {
        id: 70,
        name: 'LECHE LALA LIGHT 12PZ 1LT',
        code: '302354'
    },
    {
        id: 71,
        name: 'LECHE LALA SEMIDESC 12PZ 1LT',
        code: '28456'
    },
    {
        id: 72,
        name: 'PLATANO ORGANICO CHANITOS',
        code: '980007149'
    },
    {
        id: 73,
        name: 'TEQUILA DON JULIO 70',
        code: '980014000'
    }

]

function printCode() {
    var container = document.getElementById('codigos');
    var html = '';
    codigos.forEach(function(codigo) {
        html += `<tr>
            <td class="width-100">${codigo.name}</td>
            <td class="width-100">${codigo.code}</td>
            </tr>`;
    });
    container.innerHTML = html;
}


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

printCode();