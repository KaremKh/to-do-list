import project from "./project";
import task from "./task";
import dom from "./dom";

const listeners = (() => {
    function projectListeners() {

        const projectsContainer = document.querySelector('.projects');
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

        const projectClick = projectsContainer.querySelectorAll('.project-title');

        projectClick.forEach((project_item, index) => project_item.addEventListener('click', () => {
            dom.showProjectTasks(index);
            dom.currentProject = index;
        }));

    }

    function taskListeners() {
        const tasksContainer = document.querySelector('.tasks');
        const taskAdd = document.getElementById('addtask-btn');
        const taskModal = document.querySelector('.addtask-box');
        taskAdd.addEventListener('click', () => {
            taskModal.style.display = 'flex';
        });

        const taskDelete = document.querySelectorAll('.delete-task');
        taskDelete.forEach((task_item, index) => task_item.addEventListener('click', () => {
            task.deleteTask(index, dom.currentProject);
        }));

        const editForm = document.querySelector('.edittask-form');
        const edittaskModal = document.querySelector('.edittask-box');

        const taskEdit = document.querySelectorAll('.edit-task');
        taskEdit.forEach((task_item, index) => task_item.addEventListener('click', () => {
            let taskTitle = editForm.querySelector('#edittask-title');
            let taskDescription = editForm.querySelector('#edittask-description');
            let taskDate = editForm.querySelector('#edittask-date');
            let taskPriority = editForm.querySelector('#edittask-priority');
            let taskIndex = editForm.querySelector('#task-id');
            taskIndex.value = index;
            taskTitle.value = project.projectList[dom.currentProject].tasks[index].title;
            taskDescription.value = project.projectList[dom.currentProject].tasks[index].description;
            taskDate.value = project.projectList[dom.currentProject].tasks[index].date;
            taskPriority.value = project.projectList[dom.currentProject].tasks[index].priority;
            edittaskModal.style.display = 'flex';
        }));


    }

    function initialListeners() {


        const editForm = document.querySelector('.editproject-form');
        const taskEditForm = document.querySelector('.edittask-form');

        const editprojectModal = document.querySelector('.editproject-box');
        const projectModal = document.querySelector('.addproject-box');
        const taskModal = document.querySelector('.addtask-box');
        const form = document.querySelector('.project-form');
        const addTaskForm = document.querySelector('.task-form');
        const addCancel = projectModal.querySelector('.cancel-btn');
        const edittaskModal = document.querySelector('.edittask-box');


        addCancel.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });

        const editCancel = editprojectModal.querySelector('.cancel-btn');
        editCancel.addEventListener('click', () => {
            editprojectModal.style.display = 'none';
        });

        const taskEditCancel = edittaskModal.querySelector('.cancel-btn');
        taskEditCancel.addEventListener('click', () => {
            edittaskModal.style.display = 'none';
        });

        const addTaskCancel = taskModal.querySelector('.cancel-btn');
        addTaskCancel.addEventListener('click', () => {
            taskModal.style.display = 'none';
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

        addTaskForm.addEventListener("submit", function(event) {
            task.getTaskData(event);
            taskModal.style.display = 'none';
            console.log('submitted');
        });

        taskEditForm.addEventListener("submit", function(event) {
            console.log(dom.currentProject);
            task.editTaskData(event);
            edittaskModal.style.display = 'none';
            console.log('submitted');
        });
    }

    return {
        projectListeners,
        initialListeners,
        taskListeners
    }
})();

export default listeners;
