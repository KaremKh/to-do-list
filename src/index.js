import "./style.css";
import project from "./modules/project";
import task from "./modules/task";
import dom from "./modules/dom";

console.log(project.projectList);
project.addProject('Final Exam', 'I have to revise 10 chapters');
task.addTask('Collect Materials', 'Go through journal papers and find notes', '14/04/2023', 'important', 2);

console.log(project.projectList);

dom.loadInitialPage();
dom.showProjects();