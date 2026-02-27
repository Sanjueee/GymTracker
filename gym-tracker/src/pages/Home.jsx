import ExerciseRow from "../components/ExerciseRow"
import { exerciseData } from "../data/exercises"

const Home = () => {
    return (
            <main>
                {Object.entries(exerciseData).map(([category, exercises])=>{
                    return (
                        <ExerciseRow
                            key={category}
                            title={category}
                            exercises={exercises}
                        />
                    )
                })}
            </main>
        
    )
}

export default Home