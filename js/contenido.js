const d = document,
$descripcion = d.getElementById("descripcion"),
$pDescripcion = d.createElement("p"),
  $videos = d.getElementById("video"),
  $videoCreacion = d.getElementById("video-creacion"),
  $videoInvestigacion = d.createElement("article"),
  $frameInvestigacion = d.createElement("iframe"),
  $videoVinculacion = d.createElement("article"),
  $frameVinculacion = d.createElement("iframe");

$pDescripcion.innerHTML = 'El Laboratorio de Creación Digital, por sus siglas LaCDi es un espacio digital dedicado a la investigación, análisis, vinculación y creación de contenido transdisciplinar. Contenido abierto a todo público, pero desde un rigor académico sustentado en las estructuras del pensamiento visual y digital.'

$videoCreacion.innerHTML =
  '<iframe class="youtube" src="https://www.youtube.com/embed/pcNwgnuWsts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';

$frameInvestigacion.setAttribute(
  "src",
  "https://www.youtube.com/embed/Q0g9LIf7CW4"
);
$frameInvestigacion.setAttribute("title", "YouTube video player");
$frameInvestigacion.setAttribute("frameborder", "0");
$frameInvestigacion.setAttribute("allowfullscreen", "");
$frameInvestigacion.setAttribute(
  "allow",
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
);
$frameInvestigacion.classList.add("youtube");
$videoInvestigacion.classList.add("col-12", "col-md-4");

$frameVinculacion.setAttribute(
  "src",
  "https://www.youtube.com/embed/_48x8Yhwoo8"
);
$frameVinculacion.setAttribute("title", "YouTube video player");
$frameVinculacion.setAttribute("frameborder", "0");
$frameVinculacion.setAttribute("allowfullscreen", "");
$frameVinculacion.setAttribute(
  "allow",
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
);
$frameVinculacion.classList.add("youtube");
$videoVinculacion.classList.add("col-12", "col-md-4");



$descripcion.append($pDescripcion);
$videoInvestigacion.appendChild($frameInvestigacion);
$videoVinculacion.appendChild($frameVinculacion);
$videos.appendChild($videoInvestigacion);
$videos.appendChild($videoVinculacion);
