import project from "./project";

const listeners = (() => {
    function projectListeners(){

        const projectDelete = document.querySelectorAll('.delete-project');
        projectDelete.forEach((project_item, index) => project_item.addEventListener('click', () => {
            project.deleteProject(index);
            
        }) )

       

        const projectModal = document.querySelector('.addproject-box');
        const editprojectModal = document.querySelector('.editproject-box');
        const projectAdd = document.getElementById('addproject-btn');
        const editForm = document.querySelector('.editproject-form');
        const projectEdit = document.querySelectorAll('.edit-project');

        projectEdit.forEach((project_item, index) => project_item.addEventListener('click', () => {
            let proTitle = editForm.querySelector('#editproject-title');
            let proDescription = editForm.querySelector('#editproject-description');
            let proIndex = editForm.querySelector('#project-id');
            proIndex.value = index;
            proTitle.value = "a";
            console.log(proTitle);
            console.log(project.projectList[index].title);
            proTitle.value = project.projectList[index].title;
            proDescription.value = project.projectList[index].description;
            editprojectModal.style.display = 'flex';

        }) );
        
        projectAdd.addEventListener('click', () => {
            projectModal.style.display = 'flex';
            
        }) ;
        const form = document.querySelector('.project-form');
        const addCancel = projectModal.querySelector('.cancel-btn');

        addCancel.addEventListener('click', () => {
            projectModal.style.display = 'none';
            
        });

        const editCancel = editprojectModal.querySelector('.cancel-btn');
        editCancel.addEventListener('click', () => {
            editprojectModal.style.display = 'none';
            
        });

        
        console.log(form);
        form.addEventListener("submit", function(event) {
            project.getProjectData(event);
            projectModal.style.display = 'none';
          });

        editForm.addEventListener("submit", function(event) {
        project.editProjectData(event);
        editprojectModal.style.display = 'none';
        });


    }

    return {
        projectListeners
    }
})();

export default listeners;