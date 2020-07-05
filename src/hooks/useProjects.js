import { useState, useEffect } from "react"
import { firebase } from '../firebase'

export const useProjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase.firestore().collection('projects')
            .where('userId', '==', 'G2FhlVAGXYi4mi3JXcsz')
            .orderBy('name')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id
                }));
                
                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            })
     }, [projects]);
    return { projects, setProjects }
}