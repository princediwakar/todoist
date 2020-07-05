import React from 'react'
import {  useProjectsValue } from '../context'
import { IndividualProject } from './IndividualProject'

export const Projects = ({active, setActive}) => {
    const { projects } = useProjectsValue()

    return (
        projects && projects.map((project) => (
            <IndividualProject 
                key={project.projectId} 
                project={project} 
                active={active} 
                setActive={setActive}
            />
        ))
    )
}

