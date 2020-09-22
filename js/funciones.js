var news = ` <p class="text-muted">ÚLTIMAS NOTICIAS</p>
<div class="alert border" role="alert">
  Bosa, Garoppolo y Mostert de los Niners, todos descartados contra los Jets
</div>
<div class="alert border" role="alert">
McCaffrey (tobillo) cuestionable para regresar ante Buccaneers
</div>
<div class="alert border" role="alert">
Saquon se marchó con una lesión en la rodilla; más pruebas Mon.
</div>
<div class="alert border" role="alert">
Bloqueo (hombro) descartado; Driskel en QB para los Broncos
</div>
<div class="alert border" role="alert">
Lesiones notables de los primeros juegos de la Semana 2 del domingo
</div>
<div class="alert border" role="alert">Los osos rechazan el interés comercial de ARob, quieren llegar a un acuerdoA simple info alert—check it out!
</div>`;

function cargarnoticias(contenido){
    $(".newssection").html(contenido);
}


$(document).ready(function () {
    setTimeout(function () { 
        cargarnoticias(news);
    }, 2000);

});


