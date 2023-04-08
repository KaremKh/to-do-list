import dom from "./dom";

const project = (() => {

  let projectList = [
    {
      description: 'fa-tools',
      title: 'Craft New Project',
      tasks: [
        {
          title: 'Enjoy my tea as much as my coding! 🍵',
          description: 'Longer description of my demo task, just to show you this surprisingly nice scrollbar and amazingly cute kitty ฅ(^◉ᴥ◉^)ฅ',
          date: '2011-11-11',
          priority: 'low',
          projectIndex: 0,
          completed: false
        }
      ]
    },
    {
      description: 'fa-tools',
      title: 'Craft Another Project',
      tasks: [
        {
          title: 'Create magic through my mind, my heart and my keyboard.. 👩🏻‍💻',
          description: 'Another longer description of my demo task, just to show you this surprisingly nice scrollbar and cute little birdie ϵ( ‘Θ’ )϶♪♫',
          date: '2012-12-12',
          priority: 'high',
          projectIndex: 1,
          completed: false
        }
      ]
    },
    {
      description: 'fa-tools',
      title: 'Craft New Project',
      tasks: [
        {
          title: 'Enjoy my tea as much as my coding! 🍵',
          description: 'Longer description of my demo task, just to show you this surprisingly nice scrollbar and amazingly cute kitty ฅ(^◉ᴥ◉^)ฅ',
          date: '2011-11-11',
          priority: 'low',
          projectIndex: 0,
          completed: false
        }
      ]
    },
  ];

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
  }

  function editProject(title, description, index){
    projectList[index].title = title;
    projectList[index.description] = description;

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