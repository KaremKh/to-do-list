import project from "./project";

const listeners = (() => {
    function projectListeners(){

        const projectDelete = document.querySelectorAll('.delete-project');
        projectDelete.forEach((project_item, index) => project_item.addEventListener('click', () => {
            project.deleteProject(index);
            
        }) )

        const projectEdit = document.querySelectorAll('.edit-project');
        projectEdit.forEach((project_item, index) => project_item.addEventListener('click', () => {
            project.deleteProject(index);
            
        }) )

        const projectModal = document.querySelector('.addproject-box');
        const projectAdd = document.getElementById('addproject-btn');

        
        projectAdd.addEventListener('click', () => {
            projectModal.style.display = 'flex';
            
        }) 

        const addCancel = document.querySelector('.cancel-btn');

        addCancel.addEventListener('click', () => {
            projectModal.style.display = 'none';
        })

        const form = document.querySelector('.project-form');
        console.log(form);
        form.addEventListener("submit", function(event) {
            project.getProjectData(event);
            projectModal.style.display = 'none';
          });


    }

    return {
        projectListeners
    }
})();

export default listeners;