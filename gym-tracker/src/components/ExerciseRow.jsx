import ExerciseCard from "./ExerciseCard"

function ExerciseRow({ title, exercises }) {
    return (
        <div className="mb-2">
            <div className="flex items-center justify-between mt-2.5 px-6 mb-1">
                <h2 className="font-outfit text-zinc-100 uppercase font-semibold text-xl 
                                tracking-tight">{title}</h2>
                <span className="ml-2 text-zinc-500 text-l">({exercises.length})</span>
            </div>

            <div className="flex flex-row overflow-x-auto gap-2 scrollbar-hide pb-7.5 px-2 overflow-hidden">
            {exercises.map((exercise) => (
                <ExerciseCard 
                    key={exercise.id}
                    exercise={exercise}
                />
            ))}
            </div>
            <hr className="text-zinc-800 mt-1"/>
        </div>

        
    )
}

export default ExerciseRow