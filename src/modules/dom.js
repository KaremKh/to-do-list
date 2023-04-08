import project from "./project";
import editIcon from "../images/edit.png"
import deleteIcon from "../images/delete.png";
import task from "./task";
import listeners from "./listeners";

const dom = (() =>{

  let currentProject = 3;
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
      const editProject = document.createElement('div');
      editProject.classList.add('editproject-box');
        editProject.innerHTML=`<div class="modal-content">
        <h2>Edit Project</h2>
        <form class="editproject-form">
          <label for="editproject-title">Title:</label>
          <input type="text" id="editproject-title" name="editproject-title">
          <br>
          <label for="editproject-description">Description:</label>
          <textarea id="editproject-description" name="editproject-description"></textarea>
          <br>
          <input type="hidden" id="project-id" name="project-id">
          <button type="submit">Update Project</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </form>
      </div>`;
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks');
        
        contentContainer.appendChild(headerContainer);
        contentContainer.appendChild(projectsContainer);
        contentContainer.appendChild(tasksContainer);
        contentContainer.appendChild(addProject);
        contentContainer.appendChild(editProject);

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

    function showProjectTasks(index){
      
        const selectedProject = project.projectList[index];
        const projectTitle = selectedProject.title;
        const projectDescription = selectedProject.description;
        const tasks = selectedProject.tasks;
      
        // Select the tasks section element
        const tasksSection = document.querySelector('.tasks');
      
        // Clear the tasks section element's contents
        tasksSection.innerHTML = '';
      
        // Create a title element for the project
        const titleElement = document.createElement('h2');
        titleElement.textContent = projectTitle;
      
        // Create a description element for the project
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = projectDescription;
      
        // Append the title and description elements to the tasks section
        tasksSection.appendChild(titleElement);
        tasksSection.appendChild(descriptionElement);
      
        // Create an unordered list element for the tasks
        const tasksList = document.createElement('ul');
      
        // Loop through each task and create a list item element for it
        tasks.forEach(task => {
          // Create a list item element for the task
          const taskListItem = document.createElement('li');
      
          // Create a title element for the task
          const taskTitle = document.createElement('h3');
          taskTitle.textContent = task.title;
      
          // Create a description element for the task
          const taskDescription = document.createElement('p');
          taskDescription.textContent = task.description;
      
          // Create a date element for the task
          const taskDate = document.createElement('p');
          taskDate.textContent = task.date;
      
          // Append the title, description, and date elements to the task list item
          taskListItem.appendChild(taskTitle);
          taskListItem.appendChild(taskDescription);
          taskListItem.appendChild(taskDate);
      
          // Append the task list item to the tasks list
          tasksList.appendChild(taskListItem);
        });
      
        // Append the tasks list to the tasks section
        tasksSection.appendChild(tasksList);
      
      
    }

    function showAllTasks(){

    }

    return {
        currentProject,
        showProjects,
        showProjectTasks,
        showAllTasks,
        loadInitialPage,
        loadEditProject 
    }
})();

export default dom;