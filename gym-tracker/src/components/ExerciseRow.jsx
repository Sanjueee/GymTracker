function ExerciseRow({ title, exercises }) {
    return (
        <div className="flex items-center justify-between mt-0.5 px-6 mb-4">
            <h2 className="font-outfit text-zinc-100 uppercase font-semibold text-l tracking-tight">{title}</h2>
            <span className="ml-2 text-zinc-500 text-l">({exercises.length})</span>
        </div>
    )
}

export default ExerciseRow