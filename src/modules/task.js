import project from "./project";
import dom from "./dom";
import storage from "./storage";
import { isPast, parseISO, formatDistance } from 'date-fns';

const task = (() => {


    class Task {
        constructor(title, description, dueDate, priority, projectIndex){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.projectIndex = projectIndex;
            this.completed = false;
        }
    }

    function addTask(title, description, dueDate, priority, projectIndex) {
        const task = new Task(title, description, dueDate, priority, projectIndex);
        project.projectList[projectIndex].tasks.push(task);
        // dom.showProjects();
        storage.saveProjects();

    
    }



function getTaskData(event) {
  event.preventDefault();

  let form = document.querySelector('.task-form');
  let title = document.getElementById('task-title').value;
  let description = document.getElementById('task-description').value;
  let dueDate = new Date(document.getElementById('task-date').value).toISOString();
  let priority = document.getElementById('task-priority').value;

  

  form.reset();
  addTask(title, description, dueDate, priority, dom.currentProject);
  console.log(project.projectList);
  dom.showProjectTasks(dom.currentProject);
  return false;
}

    function editTaskData(event){
      event.preventDefault();
  
      let form = document.querySelector('.edittask-form');
      let title = document.getElementById('edittask-title').value;
      let description = document.getElementById('edittask-description').value;
      let dueDate = new Date(document.getElementById('edittask-date').value).toISOString();
      console.log(dueDate);
      let priority = document.getElementById('edittask-priority').value;
      let index = document.getElementById('task-id').value;

      
    

      form.reset();
      editTask(title,description, dueDate, priority, index);
      console.log(project.projectList);
      dom.showProjectTasks(dom.currentProject);
      return false;
    }
  
    
      function deleteTask(index, projectIndex){
        if (index>=0) {
          project.projectList[projectIndex].tasks.splice(index, 1);
        }
        dom.showProjectTasks(dom.currentProject);
        storage.saveProjects();

      }
    
      function editTask(title,description, dueDate, priority, index){
        project.projectList[dom.currentProject].tasks[index].title = title;
        project.projectList[dom.currentProject].tasks[index].description = description;
        project.projectList[dom.currentProject].tasks[index].dueDate = dueDate;
        project.projectList[dom.currentProject].tasks[index].priority = priority;
        console.log(project.projectList[dom.currentProject].tasks[index]);
        storage.saveProjects();

    
      }

    return {
        addTask,
        editTask,
        deleteTask,
        getTaskData,
        editTaskData
    }
})();

export default task;