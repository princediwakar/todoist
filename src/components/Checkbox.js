import React from 'react'
import {firebase} from '../firebase'
import {FaRegCircle} from 'react-icons/fa'


export const Checkbox = ({id}) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true
            })
    }
    return (
                <FaRegCircle onClick={()=>archiveTask()} tabIndex={0} onKeyPress={()=>archiveTask()}/>
    )
}               

