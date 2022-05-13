import { hamburgerMenu } from "./components/hamburguer.js";
import { darkMode } from "./components/dark_mode.js";
import { getDataJSON } from "./components/card.js";
import { getDataJSONInvestigacion } from "./components/cards-investigacion.js";
import { carrousel } from "./components/carrousel.js";

hamburgerMenu(".menu", ".hamburger");
darkMode(".theme-button", "#style");
getDataJSON();
getDataJSONInvestigacion();
carrousel();
