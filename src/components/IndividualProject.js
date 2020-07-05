import React, { useState } from 'react'
import { useProjectsValue, useSelectedProjectValue } from '../context'
import { firebase } from '../firebase'
import { FaTrashAlt } from 'react-icons/fa'

export const IndividualProject = ({ project, active, setActive }) => {
    const [showConfirm, setShowConfirm] = useState(false)
    const { projects, setProjects } = useProjectsValue()
    const { setSelectedProject } = useSelectedProjectValue()


    const deleteProject = (docId) => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                setProjects([...projects])
                setSelectedProject('INBOX')
            })
    }
    return (
        <li
            tabIndex={0}
            className={`${active === project.projectId ? 'bg-white font-semibold' : ''} 
                                flex items-center justify-between px-2 py-1 my-1 cursor-pointer outline-none`}
            onClick={() => {
                setSelectedProject(project.projectId)
                setActive(project.projectId)
            }}
            onKeyPress={() => {
                setSelectedProject(project.projectId)
                setActive(project.projectId)
            }}>



            <div>
                <span>&hearts;</span>
                <span className='px-2'>
                    {project.name}
                </span>
            </div>



            <button><FaTrashAlt onClick={() => setShowConfirm(!showConfirm)}/></button>


            {showConfirm && (
                <div className="absolute right-auto left-auto bg-white p-6 rounded shadow">
                    <p className="font-normal">Are you sure you want to delete the project?</p>



                    <div className="flex justify-end items-center  mt-4">
                        <button
                            className="px-2 py-1"
                            onClick={() => setShowConfirm(!showConfirm)}>Cancel</ button>



                        <button
                            className="bg-red-600 px-2 py-1 border text-white rounded"
                            onClick={() => {
                                deleteProject(project.docId)
                                setShowConfirm(!showConfirm)
                            }}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    )
}

