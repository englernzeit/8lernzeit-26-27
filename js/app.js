/**
 * English Adventure — application entry point.
 *
 * Wires up the hash router and registers the three view levels:
 *   #/                    → homepage night map (4 unit pins + Today's Plan)
 *   #/unit/:id            → unit page (7 competence cards)
 *   #/unit/:id/:sectionId → competence page (template until content lands)
 */

import { Router } from "./router.js";
import { renderMapView } from "./views/mapView.js";
import { renderUnitView } from "./views/unitView.js";
import { renderSectionView } from "./views/sectionView.js";

const appRoot = document.getElementById("app");

const router = new Router(appRoot, [
  { pattern: /^\/?$/, render: renderMapView },
  { pattern: /^\/unit\/([\w-]+)$/, render: renderUnitView },
  { pattern: /^\/unit\/([\w-]+)\/([\w-]+)$/, render: renderSectionView },
]);

router.start();
