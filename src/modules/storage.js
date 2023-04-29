import project from "./project";

const storage = (() => {
    function saveProjects() {
        localStorage.setItem('projects', JSON.stringify(project.projectList));
    }

    function getSavedProjects() {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
          return JSON.parse(storedProjects);
        } else {
          return []; // return an empty array if there are no stored projects
        }
      }
    return {
        saveProjects,
        getSavedProjects
    }
})();



export default storage;