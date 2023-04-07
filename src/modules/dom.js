import project from "./project";
import editIcon from "../images/edit.png"
import deleteIcon from "../images/delete.png";
import task from "./task";
import listeners from "./listeners";

const dom = (() =>{

    function loadInitialPage(){
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projects');
        const addProject = document.createElement('div');
        addProject.classList.add('addproject-box');
        addProject.innerHTML=`<div class="modal-content">
        <h2>Add Project</h2>
        <form class="project-form">
          <label for="project-title">Title:</label>
          <input type="text" id="project-title" name="project-title">
          <br>
          <label for="project-description">Description:</label>
          <textarea id="project-description" name="project-description"></textarea>
          <br>
          <button type="submit">Add Project</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </form>
      </div>`;
      
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks');
        
        contentContainer.appendChild(headerContainer);
        contentContainer.appendChild(projectsContainer);
        contentContainer.appendChild(tasksContainer);
        contentContainer.appendChild(addProject);

        document.body.appendChild(contentContainer);
    }
    function showProjects(){
        const projectContainer = document.querySelector('.projects');
        projectContainer.innerHTML = '';

        const addProjectBtn = document.createElement('button');
        addProjectBtn.id= 'addproject-btn';
        addProjectBtn.textContent = 'Add Project';
        projectContainer.appendChild(addProjectBtn);

        for (let i = 0; i < project.projectList.length; i++){
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            const projectTitle = document.createElement('div');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = project.projectList[i].title;
            const projectEdit = document.createElement('img');
            projectEdit.classList.add('edit-project');
            projectEdit.src = editIcon;
            
            const projectDelete = document.createElement('img');
            projectDelete.classList.add('delete-project');
            projectDelete.src = deleteIcon;
            
            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectEdit);
            projectItem.appendChild(projectDelete);

            projectContainer.appendChild(projectItem);


        }

        listeners.projectListeners();
    }

    function loadEditProject(){

    }

    function showProjectsTasks(projectIndex){

    }

    function showAllTasks(){

    }

    return {
        showProjects,
        showProjectsTasks,
        showAllTasks,
        loadInitialPage,
        loadEditProject 
    }
})();

export default dom;