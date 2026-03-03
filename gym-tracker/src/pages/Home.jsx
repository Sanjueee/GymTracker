import { useState } from "react"
import ExerciseRow from "../components/ExerciseRow"
import { exerciseDataObj } from "../data/exercises"
import ConfirmDelete from "../components/ConfirmDelete"
import ToastMessage from "../components/toastMessage"

const Home = () => {

    
    const [exerciseData, setExerciseData] = useState(exerciseDataObj)
    const [exerciseToDelete, setExerciseToDelete ] = useState(null)
    const [showDeleteToast, setShowDeleteToast] = useState(false)

    


    const requestDelete = (exercise, category) => {
        setExerciseToDelete({...exercise, category})
    } 


    
    const deleteExercise = (id, category) => {

        const categoryToUpdate = exerciseData[category]
        const updatedList = categoryToUpdate.filter((exe) => exe.id !== id)

        setExerciseData({
            ...exerciseData,
            [category]: updatedList
        })
        setShowDeleteToast(true)
        setTimeout(() => setShowDeleteToast(false), 3000)
        setExerciseToDelete(null)

    }


    return (
            <>
                {Object.entries(exerciseData).map(([category, exercises])=>(
                        <ExerciseRow
                            key={category}
                            title={category}
                            exercises={exercises}
                            requestDelete = {requestDelete}
                        />
                ))}
                {exerciseToDelete && (
                    <ConfirmDelete 
                        exercise = {exerciseToDelete}
                        onDelete = { () => deleteExercise(exerciseToDelete.id, exerciseToDelete.category)}
                        onCancel = { () => setExerciseToDelete(null)}
                    />
                )}
                {showDeleteToast && <ToastMessage message="Exercise Deleted !"/>}
            </>
        
    )
}

export default Home