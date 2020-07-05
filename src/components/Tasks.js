import React, { useEffect } from 'react'
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks'
import { collatedTasks } from '../constants'
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { AddTask } from './AddTask';

export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject)



    let projectName = ''

    if (projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;

    }
    // console.log(projectName)

    useEffect(() => {
        document.title = `${projectName}: Todoist`
    }, [selectedProject, projectName])

    return (
        <div className="p-8 w-full bg-white border-l">
            <h2 className="font-semibold">{projectName}</h2>
            <ul className="mt-4">
                {tasks &&
                    tasks.map(task => (
                        <li key={`${task.id}`} className="mt-2">
                            <div className="flex items-center">
                                <Checkbox id={task.id} />
                                <span className="ml-4">{task.task}</span>
                            </div>
                            <hr className="mt-2" />
                        </li>
                    ))}
            </ul>
            <div className="my-2">
                <AddTask />
            </div>
        </div>
    )
}

