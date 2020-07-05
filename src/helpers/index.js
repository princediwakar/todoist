import { collatedTasks } from '../constants'

export const getTitle = (projects, projectId) => 
    projects.find(project => project.projectId === projectId)


export const getCollatedTitle = (projects, key) => 
    projects.find(project => project.key === key)


export const collatedTasksExist = selectedProject =>
    collatedTasks.find(task => task.key === selectedProject);


export const generateId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
