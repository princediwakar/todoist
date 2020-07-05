import React from 'react'
import moment from 'moment'
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa'


export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
    return (
        showTaskDate && (
            <div className="absolute bg-white w-full border rounded shadow-md right-0 top-0 overflow-hidden">
                <ul>
                    <li
                        className="flex items-center px-3 py-1 border-b cursor-pointer"
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                        tabIndex={0}
                        onKeyPress={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                    >

                        <span><FaSpaceShuttle /></span>
                        <span className="ml-2">Today</span>
                    </li>



                    <li
                        className="flex items-center px-3 py-1 border-b cursor-pointer"
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
                        }}
                        tabIndex={0}
                        onKeyPress={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
                        }}
                    >

                        <span><FaSun /></span>
                        <span className="ml-2">Tomorrow</span>
                    </li>



                    <li
                        className="flex items-center px-3 py-1 border-b cursor-pointer"
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
                        }}
                        tabIndex={0}
                        onKeyPress={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
                        }}

                    >

                        <span><FaRegPaperPlane /></span>
                        <span className="ml-2">Next week</span>
                    </li>
                </ul>
            </div>
        )
    )
}