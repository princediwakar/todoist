import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'

import moment from 'moment'
import { firebase } from '../firebase'
import { useSelectedProjectValue } from '../context'
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';


export const AddTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) => {
    const [task, setTask] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [project, setProject] = useState('')
    const [showMain, setShowMain] = useState(shouldShowMain)
    const [showProjectOverlay, setShowProjectOverlay] = useState(false)
    const [showTaskDate, setShowTaskDate] = useState(false)

    const { selectedProject } = useSelectedProjectValue()


    const addTask = () => {
        const projectId = project || selectedProject
        let collatedDate = ''

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY')
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY')
        }

        return (
            task &&
            projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task,
                    date: collatedDate || taskDate,
                    userId: 'G2FhlVAGXYi4mi3JXcsz'
                })
                .then(() => {
                    setTask('')
                    setProject('')
                    setShowMain('')
                    setShowProjectOverlay(false)
                })


        )
    }

    return (
        <>
            {showQuickAddTask &&
                <div
                    onClick={() => setShowQuickAddTask(false)}
                    class="fixed w-full h-full bg-black opacity-25 top-0 left-0">
                </div>
            }


            <div className={showQuickAddTask ? 'absolute bg-white border rounded right-0 shadow-lg max-w-sm w-full p-4' : ''}>
                {showAddTaskMain && (
                    <button
                        className="cursor-pointer focus:outline-none"
                        onClick={() => setShowMain(!showMain)}
                    >
                        <span className="text-red-600">+</span>
                        <span className="ml-4">Add Task</span>

                    </button>
                )}



                {(showMain || showQuickAddTask) && (
                    <div>
                        {showQuickAddTask && (
                            <div className="flex items-center justify-between mb-2 select-none">
                                <h2 className="font-semibold ">Quick Add Task</h2>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowMain(false)
                                        setShowProjectOverlay(false)
                                        setShowQuickAddTask(false)
                                    }}
                                >X</span>
                            </div>
                        )}



                        <input
                            type="text"
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            className="px-3 py-1 my-2 w-full border border-red-600 rounded"
                            placeholder="Add a task"
                        />



                        <div className="relative flex items-center justify-between">
                            <div>
                                <button
                                    type="button"
                                    className="px-3 py-1 text-white bg-red-600 rounded"
                                    onClick={() => {
                                        showQuickAddTask
                                            ? addTask() && setShowQuickAddTask(false)
                                            : addTask()
                                    }}

                                >
                                    Add Task
                                </button>


                                {!showQuickAddTask && (
                                    <span
                                        className="px-3 py-1 rounded cursor-pointer"
                                        onClick={() => {
                                            setShowMain(false)
                                            setShowProjectOverlay(false)
                                        }}
                                        tabIndex={0}
                                        onKeyPress={() => {
                                            setShowMain(false)
                                            setShowProjectOverlay(false)
                                        }}
                                    >
                                        Cancel
                                    </span>
                                )}
                            </div>



                            <div className="flex">
                                <span
                                    onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                                    className="mx-2 text-gray-700 cursor-pointer"
                                    tabIndex={0}
                                    onKeyPress={() => setShowProjectOverlay(!showProjectOverlay)}
                                >
                                    <FaRegListAlt />
                                </span>


                                <ProjectOverlay
                                    setProject={setProject}
                                    showProjectOverlay={showProjectOverlay}
                                    setShowProjectOverlay={setShowProjectOverlay}
                                />


                                <span
                                    onClick={() => setShowTaskDate(!showTaskDate)}
                                    className="text-gray-700 cursor-pointer"
                                    tabIndex={0}
                                    onKeyPress={() => setShowTaskDate(!showTaskDate)}
                                >
                                    <FaRegCalendarAlt />
                                </span>

                                <TaskDate
                                    setTaskDate={setTaskDate}
                                    showTaskDate={showTaskDate}
                                    setShowTaskDate={setShowTaskDate}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}