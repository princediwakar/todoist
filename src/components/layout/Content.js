import React from 'react'
import { Sidebar } from './Sidebar'
import { Tasks } from '../Tasks'

export const Content = () => {
    return (
        <section className="flex max-w-screen-md mx-auto">
            <Sidebar />
            <Tasks />
        </section>
    )
}