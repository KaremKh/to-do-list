import dom from "./dom";
import storage from "./storage";

const project = (() => {

  let projectList = storage.getSavedProjects();

  class Project {
    constructor(title, description){
      this.title = title;
      this.description = description;
      this.tasks = [];
    }
  }

  function addProject(title, description) {
    const project = new Project(title, description);
    projectList.push(project);
    storage.saveProjects();
    


  }

  function getProjectData(event){
    event.preventDefault();

    let form = document.querySelector('.project-form');
    let title = document.getElementById('project-title').value;
    let description = document.getElementById('project-description').value;
    form.reset();
    addProject(title,description);
    console.log(projectList);
    dom.showProjects();
    dom.showProjectTasks(project.projectList.length - 1);
    return false;
  }

  function editProjectData(event){
    event.preventDefault();

    let form = document.querySelector('.editproject-form');
    let title = document.getElementById('editproject-title').value;
    let description = document.getElementById('editproject-description').value;
    let index = document.getElementById('project-id').value;
    form.reset();
    editProject(title,description, index);
    console.log(projectList);
    dom.showProjects();
    return false;
  }

  function deleteProject(index){
    if (index>=0) {
      projectList.splice(index, 1);
    }
    dom.showProjects();
    storage.saveProjects();

  }

  function editProject(title, description, index){
    projectList[index].title = title;
    projectList[index].description = description;
    storage.saveProjects();


  }

  return {
    projectList,
    addProject,
    deleteProject,
    editProject,
    getProjectData,
    editProjectData
  }
    
  })();

  export default project;