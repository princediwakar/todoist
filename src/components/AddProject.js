import React from 'react'
import { firebase } from '../firebase'
import { useState } from 'react'
import { generateId } from '../helpers'
import { useProjectsValue } from '../context'
// import { useProjectsValue } from '../context'

export const AddProject = ({ shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow)
    const [projectName, setProjectName] = useState('')

    const projectId = generateId(16)
    const {projects, setProjects } = useProjectsValue()

    const addProject = () => {
        projectName &&
            firebase
                .firestore()
                .collection('projects')
                .add({
                    projectId,
                    name: projectName,
                    userId: "G2FhlVAGXYi4mi3JXcsz"
                })
                .then(() => {
                    setProjectName('')
                    setShow(false)
                    setProjects([...projects])
                })
    }

    return (
        <div>
            {
                !show && (
                    <button 
                        type="button"
                        className="flex items-center w-full cursor-pointer focus:outline-none " 
                        onClick={() => setShow(true)}
                    >

                        <span className="text-red-600">+</span>
                        <span className="px-2">Add Project</span>
                    </button>
                )
            }


            
            {
                show && (
                    <div className="">
                        <input
                            value={projectName} onChange={e => setProjectName(e.target.value)} type="text" placeholder="Name your project"
                            className="px-3 py-1 border border-red-600 rounded w-full" />
                        <div className="my-2">
                            <button className="bg-red-600 text-white px-2 py-1 rounded" onClick={() => addProject()}>Add Project</button>
                            <button className="px-2 py-1" onClick={() => setShow(false)}>Cancel</button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

