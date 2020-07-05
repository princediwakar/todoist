import React from 'react'
import { useProjectsValue } from '../context'

export const ProjectOverlay = ({ setProject, showProjectOverlay, setShowProjectOverlay }) => {
    const { projects } = useProjectsValue()

    return (
        projects && showProjectOverlay && (
            <div className="absolute bg-white w-full border rounded shadow-md right-0 top-0 overflow-hidden">
                <ul>
                    {projects.map(project => (
                            <li
                                key={project.projectId}
                                className="border-b pl-3 py-1 cursor-pointer"
                                onClick={() => {
                                    setProject(project.projectId)
                                    setShowProjectOverlay(false)
                                }}
                                tabIndex={0}
                                onKeyPress={() => {
                                    setProject(project.projectId)
                                    setShowProjectOverlay(false)
                                }}
                            >
                                {project.name}
                            </li>
                    ))}
                </ul>
            </div>
        )
    )
}