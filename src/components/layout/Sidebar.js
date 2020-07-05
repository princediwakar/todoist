import React, { useState } from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar, FaChevronRight, } from 'react-icons/fa'
import { useSelectedProjectValue } from '../../context'
import { Projects } from '../Projects';
import { AddProject } from '../AddProject'


export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('INBOX')
    const [showProjects, setShowProjects] = useState(true)

    const activeClassName = 'font-semibold bg-white'
    return (
        <div className="h-screen w-100" data-testid="sidebar">
            <ul className="mt-4">
                <li
                    tabIndex={0}
                    className={`flex items-center pl-2 py-1 my-1 cursor-pointer  focus:outline-none ${active === "INBOX" ? activeClassName : ''}`}
                    onClick={() => {
                        setActive('INBOX')
                        setSelectedProject('INBOX')
                    }}
                    onKeyPress={() => {
                        setActive('INBOX')
                        setSelectedProject('INBOX')
                    }}
                >
                    <span><FaInbox /></span>
                    <span className="px-2">Inbox</span></li>



                <li
                    tabIndex={0}
                    className={`flex items-center pl-2 py-1 my-1 cursor-pointer focus:outline-none ${active === "TODAY" ? activeClassName : ''}`}
                    onClick={() => {
                        setActive('TODAY')
                        setSelectedProject('TODAY')
                    }}
                    onKeyPress={() => {
                        setActive('TODAY')
                        setSelectedProject('TODAY')
                    }}
                >
                    <span><FaRegCalendar /></span>
                    <span className="px-2">Today</span></li>



                <li
                    tabIndex={0}
                    className={`flex items-center pl-2 py-1 my-1 cursor-pointer focus:outline-none ${active === "NEXT_7" ? activeClassName : ''}`}
                    onClick={() => {
                        setActive('NEXT_7')
                        setSelectedProject('NEXT_7')
                    }}
                    onKeyPress={() => {
                        setActive('NEXT_7')
                        setSelectedProject('NEXT_7')
                    }}
                >
                    <span><FaRegCalendarAlt /></span>
                    <span className="px-2" >Next 7 days</span></li>
            </ul>



            <div>
                <div
                    tabIndex={0}
                    onClick={() => setShowProjects(!showProjects)}
                    onKeyPress={() => setShowProjects(!showProjects)}
                    className="flex items-center my-2 px-2 cursor-pointer focus:outline-none ">

                    {showProjects ? <FaChevronDown /> : <FaChevronRight />}

                    <h2 className="px-2">Projects</h2>
                </div>



                {showProjects &&
                    <>
                        <hr />

                        <ul className="my-2">
                            <Projects active={active} setActive={setActive} />
                        </ul>



                        <div className="px-2 my-2">
                            <AddProject />
                        </div>
                    </>
                }
            </div>

        </div>
    )
}