import project from "./project";

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
    
    
      }
    
      function deleteTask(index){
        if (index>=0) {
          projectList.splice(index, 1);
        }
        // dom.showProjects();
      }
    
      function editTask(title, description, index){
        projectList[index].title = title;
        projectList[index.description] = description;
        // dom.showProjects();
    
      }

    return {
        addTask,
        editTask,
        deleteTask,
    }
})();

export default task;