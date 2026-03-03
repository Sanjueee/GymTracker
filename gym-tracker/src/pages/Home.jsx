import { useState } from "react"
import ExerciseRow from "../components/ExerciseRow"
import { exerciseDataObj } from "../data/exercises"
import ConfirmDelete from "../components/ConfirmDelete"

const Home = () => {

    
    const [exerciseData, setExerciseData] = useState(exerciseDataObj)
    const [exerciseToDelete, setExerciseToDelete ] = useState(null)


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

        setExerciseToDelete(null)
    }
        // setExerciseData((prevExerciseData) => {
        //     const updatedData = { ...prevExerciseData }
        //     Object.keys(updatedData).forEach((category) => {
        //         updatedData[category] = updatedData[category].filter((exe) => exe.id !== id)
        //     })
        //     return updatedData
        // })


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
            </>
        
    )
}

export default Home