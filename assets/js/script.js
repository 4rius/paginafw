$(function() {
    $('.neon').neonText({
        textColor: 'purple',
        textSize: '75pt',
        neonHighlight: 'yellow',
        neonHighlightColor: 'red',
        neonHighlightHover: '#ff5700',
        neonFontHover: 'magenta'
    });
});

$(function() {
    $("#rating").rateYo({
        rating: 4.7,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#rating1").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#rating2").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#rating3").rateYo({
        rating: 4.5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#val1").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#val2").rateYo({
        rating: 3,
        spacing: '5px',
        ratedFill: 'yellow',
        readOnly: true
    });
    $("#val3").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val4").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val5").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val6").rateYo({
        rating: 2,
        spacing: '5px',
        ratedFill: 'red',
        readOnly: true
    });
    $("#val7").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val8").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#val9").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });



    var fechaLimite1 = new Date("12/15/2021");
    var fechaLimite2 = new Date("12/30/2021");
    var fechaLimite3 = new Date("11/30/2021");
    var fechaHoy = new Date();

    var resta1 = Math.floor((fechaLimite1 - fechaHoy) / (1000 * 3600 * 24));
    if (resta1 >= 0) {
        document.getElementById("t1").innerHTML = " Quedan " + resta1 + " día/s";

    } else {
        document.getElementById("t1").innerHTML = " Promoción no válida";
        document.getElementById("b1").style.backgroundColor = "red";
        document.getElementById("b1").innerHTML = " Promoción Terminada";

    }

    var resta2 = Math.floor((fechaLimite2 - fechaHoy) / (1000 * 3600 * 24));
    if (resta2 >= 0) {
        document.getElementById("t2").innerHTML = " Quedan " + resta2 + " día/s";

    } else {
        document.getElementById("t2").innerHTML = " Promoción no válida";
        document.getElementById("b2").style.backgroundColor = "red";
        document.getElementById("b2").innerHTML = " Promoción Terminada";
    }


    var resta3 = Math.floor((fechaLimite3 - fechaHoy) / (1000 * 3600 * 24));
    if (resta3 >= 0) {
        document.getElementById("t3").innerHTML = " Quedan " + resta3 + " día/s";

    } else {
        document.getElementById("t3").innerHTML = " Promoción no válida";
        document.getElementById("b3").style.backgroundColor = "red";
        document.getElementById("b3").innerHTML = " Promoción Terminada";
    }


    if (resta1 > 0 && resta1 <= 7) {
        document.getElementById("b1").style.backgroundColor = "orange";
        document.getElementById("b1").innerHTML = "Acaba pronto";
    }

    if (resta2 > 0 && resta2 <= 7) {
        document.getElementById("b2").style.backgroundColor = "orange";
        document.getElementById("b2").innerHTML = "Acaba pronto";
    }

    if (resta3 > 0 && resta3 <= 7) {
        document.getElementById("b3").style.backgroundColor = "orange";
        document.getElementById("b3").innerHTML = "Acaba pronto";
    }






});