import project from "./project";
import editIcon from "../images/edit.png"
import deleteIcon from "../images/delete.png";
import task from "./task";

const dom = (() =>{

    function loadInitialPage(){
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projects');
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks');
        
        contentContainer.appendChild(headerContainer);
        contentContainer.appendChild(projectsContainer);
        contentContainer.appendChild(tasksContainer);

        document.body.appendChild(contentContainer);
    }
    function showProjects(){
        const projectContainer = document.querySelector('projects');
        for (let i = 0; i < project.projectList.length; i++){
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            const projectTitle = document.createElement('div');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = project.projectList[i].title;
            const projectEdit = document.createElement('img');
            projectEdit.src = editIcon;
            
            const projectDelete = document.createElement('img');
            projectDelete.src = deleteIcon;
            
            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectEdit);
            projectItem.appendChild(projectDelete);

            projectContainer.appendChild(projectItem);

        }
    }

    function showProjectsTasks(projectIndex){

    }

    function showAllTasks(){

    }

    return {
        showProjects,
        showProjectsTasks,
        showAllTasks,
        loadInitialPage
    }
})();

export default dom;