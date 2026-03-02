import { useState } from "react"
import ExerciseRow from "../components/ExerciseRow"
import { exerciseDataObj } from "../data/exercises"

const Home = () => {

    const [exerciseData, setExerciseData] = useState(exerciseDataObj)

    const deleteExercise = (id) => {
        setExerciseData((prevExerciseData) => {
            const updatedData = { ...prevExerciseData }
            Object.keys(updatedData).forEach((category) => {
                updatedData[category] = updatedData[category].filter((exe) => exe.id !== id)
            })
            return updatedData
        })
    }

    return (
            <main>
                {Object.entries(exerciseData).map(([category, exercises])=>(
                        <ExerciseRow
                            key={category}
                            title={category}
                            exercises={exercises}
                            deleteExercise = {deleteExercise}
                        />
                ))}
            </main>
        
    )
}

export default Home