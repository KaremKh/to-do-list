import project from "./project";

const listeners = (() => {
    function projectListeners() {
        const projectDelete = document.querySelectorAll('.delete-project');
        projectDelete.forEach((project_item, index) => project_item.addEventListener('click', () => {
            project.deleteProject(index);
        }));

        const projectAdd = document.getElementById('addproject-btn');
        const projectModal = document.querySelector('.addproject-box');
        projectAdd.addEventListener('click', () => {
            projectModal.style.display = 'flex';
        });

        const editprojectModal = document.querySelector('.editproject-box');
        const editForm = document.querySelector('.editproject-form');
        const projectEdit = document.querySelectorAll('.edit-project');

        projectEdit.forEach((project_item, index) => project_item.addEventListener('click', () => {
            let proTitle = editForm.querySelector('#editproject-title');
            let proDescription = editForm.querySelector('#editproject-description');
            let proIndex = editForm.querySelector('#project-id');
            proIndex.value = index;
            proTitle.value = project.projectList[index].title;
            proDescription.value = project.projectList[index].description;
            editprojectModal.style.display = 'flex';
        }));
    }

    function initialListeners() {
        const editForm = document.querySelector('.editproject-form');
        const editprojectModal = document.querySelector('.editproject-box');
        const projectModal = document.querySelector('.addproject-box');
        const form = document.querySelector('.project-form');
        const addCancel = projectModal.querySelector('.cancel-btn');

        addCancel.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });

        const editCancel = editprojectModal.querySelector('.cancel-btn');
        editCancel.addEventListener('click', () => {
            editprojectModal.style.display = 'none';
        });

        form.addEventListener("submit", function(event) {
            project.getProjectData(event);
            projectModal.style.display = 'none';
            console.log('submitted');
        });

        editForm.addEventListener("submit", function(event) {
            project.editProjectData(event);
            editprojectModal.style.display = 'none';
            console.log('submitted');
        });
    }

    return {
        projectListeners,
        initialListeners
    }
})();

export default listeners;
