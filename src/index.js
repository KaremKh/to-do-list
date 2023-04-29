import "./style.css";
import project from "./modules/project";
import task from "./modules/task";
import dom from "./modules/dom";
import listeners from "./modules/listeners";






dom.loadInitialPage();

dom.showProjects();
listeners.initialListeners();
dom.showProjectTasks(dom.currentProject);
