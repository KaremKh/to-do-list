import project from "./project";
import editIcon from "../images/edit.png"
import deleteIcon from "../images/delete.png";
import task from "./task";
import listeners from "./listeners";
import { isPast, parseISO, formatDistance } from 'date-fns';
const dom = (() =>{

  let currentProject = 0;
    function loadInitialPage(){
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('content');
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projects');
        const addProject = document.createElement('div');
        addProject.classList.add('addproject-box');

        addProject.innerHTML=`
        <div class="modal-content project">
          <h2>Add Project</h2>
          <form class="project-form">
            <label for="project-title">Title:</label>
            <input type="text" id="project-title" name="project-title">
            <br>
            <label for="project-description">Description:</label>
            <textarea id="project-description" name="project-description"></textarea>
            <br>
            <div class="buttons-container">
            <button type="submit">Add Project</button>
            <button type="button" class="cancel-btn">Cancel</button>
            </div>
          </form>
        </div>`;

      const editProject = document.createElement('div');
      editProject.classList.add('editproject-box');
        editProject.innerHTML=`
        <div class="modal-content project">
          <h2>Edit Project</h2>
          <form class="editproject-form">
            <label for="editproject-title">Title:</label>
            <input type="text" id="editproject-title" name="editproject-title">
            <br>
            <label for="editproject-description">Description:</label>
            <textarea id="editproject-description" name="editproject-description"></textarea>
            <br>
            <input type="hidden" id="project-id" name="project-id">
            <div class="buttons-container">
              <button type="submit">Update Project</button>
              <button type="button" class="cancel-btn">Cancel</button>
            </div>
          </form>
        </div>`;

        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks');

        const addTaskModal = document.createElement('div');
        addTaskModal.classList.add('addtask-box');
        addTaskModal.innerHTML = `
          <div class="modal-content task">
            <h2>Add Task</h2>
            <form class="task-form">
              <label for="task-title">Title:</label>
              <input type="text" id="task-title" name="task-title" required>
              <br>
              <label for="task-description">Description:</label>
              <textarea id="task-description" name="task-description"></textarea>
              <br>
              <label for="task-date">Date:</label>
              <input type="date" id="task-date" name="task-date" required>
              <br>
              <label for="task-priority">Priority:</label>
              <select id="task-priority" name="task-priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <br>
              <div class="buttons-container">
                <button type="submit">Add Task</button>
                <button type="button" class="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        `;

        const editTaskModal = document.createElement('div');
        editTaskModal.classList.add('edittask-box');
        editTaskModal.innerHTML = `
          <div class="modal-content task" >
            <h2>Edit Task</h2>
            <form class="edittask-form">
              <label for="edittask-title">Title:</label>
              <input type="text" id="edittask-title" name="edittask-title">
              <br>
              <label for="edittask-description">Description:</label>
              <textarea id="edittask-description" name="edittask-description"></textarea>
              <br>
              <label for="edittask-date">Date:</label>
              <input type="date" id="edittask-date" name="edittask-date">
              <br>
              <label for="edittask-priority">Priority:</label>
              <select id="edittask-priority" name="edittask-priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <br>
              <input type="hidden" id="task-id" name="task-id">
              <div class="buttons-container">
                <button type="submit">Update Task</button>
                <button type="button" class="cancel-btn">Cancel</button>
              </div>
              
            </form>
          </div>
        `;

        
        contentContainer.appendChild(headerContainer);
        contentContainer.appendChild(projectsContainer);
        contentContainer.appendChild(tasksContainer);
        contentContainer.appendChild(addProject);
        contentContainer.appendChild(editProject);
        contentContainer.appendChild(addTaskModal);
        contentContainer.appendChild(editTaskModal);

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
          
          const projectIcons = document.createElement('div');
          projectIcons.classList.add('project-icons');
          
          const projectEdit = document.createElement('img');
          projectEdit.classList.add('edit-project');
          projectEdit.src = editIcon;
      
          const projectDelete = document.createElement('img');
          projectDelete.classList.add('delete-project');
          projectDelete.src = deleteIcon;
          
          projectIcons.appendChild(projectEdit);
          projectIcons.appendChild(projectDelete);
      
          projectItem.appendChild(projectTitle);
          projectItem.appendChild(projectIcons);
      
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

      const addTaskBtn = document.createElement('button');
      addTaskBtn.id= 'addtask-btn';
      addTaskBtn.textContent = 'Add Task';
      tasksSection.appendChild(addTaskBtn);

      // Create an unordered list element for the tasks
      const tasksList = document.createElement('ul');

      // Loop through each task and create a list item element for it
      // Loop through each task and create a list item element for it
      tasks.forEach(task => {
        // Create a list item element for the task
        const taskListItem = document.createElement('li');
        taskListItem.classList.add('task-item');

        // Create a checkbox element for the task
        const taskDone = document.createElement('input');
        taskDone.type = 'checkbox';
        taskDone.checked = task.completed;
        taskDone.classList.add('task-checkbox');

        // Create a container for the task title and icons
        const taskTitleContainer = document.createElement('div');
        taskTitleContainer.classList.add('task-title-container');

        // Create a title element for the task
        const taskTitle = document.createElement('h3');
        taskTitle.textContent = task.title;
        taskTitle.classList.add('task-title');
        if (task.completed ===true){
          taskTitle.style.textDecoration = 'line-through';
        }
        else 
          taskTitle.style.textDecoration = 'none';

        taskTitleContainer.appendChild(taskDone);
        taskTitleContainer.appendChild(taskTitle);

        // Create edit and delete icons container for the task
        const taskIconsContainer = document.createElement('div');
        taskIconsContainer.classList.add('task-icons-container');

        const taskEdit = document.createElement('img');
        taskEdit.classList.add('edit-task');
        taskEdit.src = editIcon;

        const taskDelete = document.createElement('img');
        taskDelete.classList.add('delete-task');
        taskDelete.src = deleteIcon;

        taskIconsContainer.appendChild(taskEdit);
        taskIconsContainer.appendChild(taskDelete);

        // Add an event listener to the checkbox element to update the task object
        taskDone.addEventListener('change', function(event) {
          task.completed = event.target.checked;
          if (task.completed ===true)
            taskTitle.style.textDecoration = 'line-through';
          else 
            taskTitle.style.textDecoration = 'none';
        });

        // Create a date element for the task
        const taskDate = document.createElement('p');
        
        const parsedDueDate = parseISO(task.dueDate); // parse the due date string to a Date object

        const isOverdue = isPast(parsedDueDate); // check if the due date is in the past
      
      
        let relativeDueDate;
      
        if (isOverdue) {
          relativeDueDate = 'This task is overdue!';
        } else {
          relativeDueDate = 'Due ' + formatDistance(parsedDueDate, new Date(), { addSuffix: true });
        }

        taskDate.textContent = relativeDueDate;
        taskDate.classList.add('task-date');

        // Create a priority element for the task
        const taskPriority = document.createElement('p');
        taskPriority.textContent = task.priority + ' priority';
        taskPriority.classList.add('task-priority');

        // Create a description element for the task
        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;
        taskDescription.classList.add('task-description');

        // Add an event listener to the task title element to show/hide the description element
        taskTitle.addEventListener('click', function() {
          taskListItem.classList.toggle('expanded');
        });

        // Create a div to contain everything inside the task item except the description
        const taskDetailsContainer = document.createElement('div');
        taskDetailsContainer.classList.add('task-details-container');
        taskDetailsContainer.appendChild(taskTitleContainer);
        taskDetailsContainer.appendChild(taskPriority);
        taskDetailsContainer.appendChild(taskDate);
        taskDetailsContainer.appendChild(taskIconsContainer);

        // Append the task details container to the task list item
        taskListItem.appendChild(taskDetailsContainer);

        // Append the description element to the task list item
        taskListItem.appendChild(taskDescription);

        // Append the task list item to the tasks list
        tasksList.appendChild(taskListItem);
      });

              
      // Append the tasks list to the tasks section
      tasksSection.appendChild(tasksList);

          
      
      listeners.taskListeners();
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