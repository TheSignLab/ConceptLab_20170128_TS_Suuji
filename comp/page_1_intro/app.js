$(document).ready(function () {






    $("#id_s0_btn").click(function () {
        setTimeout(function () {
            go2S1()
        }, 100);
    });


    go2S0();





});


var siin = "";
    function noName() {
        siin = "";
        go2S1();
    }




function init_s0_t1() {

    var typed = new Typed("#typejs_s0_t1", {
        strings: ['!Hola!,^100 somos <span class="f-bold">TheSign Lab </span>'],
        typeSpeed: 30
    });

}


function init_s0_t2() {
    var typed2 = new Typed("#typejs_s0_t2", {
        strings: ['Un laboratorio de diseño con proyectos innovadores ^50 desarrollados a partir de iniciativas en múltiples campos creativos ^50 como el branding estratégico ^50, diseño ^50 y desarrollo de producto.'],
        typeSpeed: 30,
        showCursor: false
    });
}

function init_s0_t3() {
    var typed2 = new Typed("#typejs_s0_t3", {
        strings: ['cuéntanos sobre ti,^200  <span class="f-bold">¿cuál es tu nombre? </span>'],
        typeSpeed: 30
    });
}

function init_s1_t1() {
    var typed2 = new Typed("#typejs_s1_t1", {
        strings: ['es un gusto conocerte  <span class="f-bold"> ' + siin + ' </span>'],
        typeSpeed: 30
    });
}

function init_s1_t2() {
    var typed2 = new Typed("#typejs_s1_t2", {
        strings: [' ¿ Qué quieres hacer hoy ?  '],
        typeSpeed: 30
    });
}

function init_s6_t1() {
    var typed2 = new Typed("#typejs_s6_t1", {
        strings: [siin + ' ahora que nos conocemos <span class="f-bold">hablemos!</span>  '],
        typeSpeed: 30,
        showCursor: false
    });
}




function init_s5_t1() {
    var typed2 = new Typed("#typejs_s5_t1", {
        strings: [' cerca de construir juntos grandes <span class="f-bold">ideas</span>'],
        typeSpeed: 30,
        showCursor: false
    });
}





function setName() {
    siin = capitalizeFirstLetter(document.getElementById("id_input_name").value);

}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
