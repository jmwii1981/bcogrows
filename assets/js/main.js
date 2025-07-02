import { initMenu } from './menu.js';
import { archivePastEvents } from "./eventArchival.js";

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  archivePastEvents();
});