const ConfirmDelete = ({exercise , onDelete, onCancel}) => {
    return(
        <div className="z-[9999] fixed inset-0 bg-black/60 backdrop-blur-sm
                        flex justify-center items-center  "
             onClick={onCancel}>                
            <div className="bg-zinc-900/100 border border-zinc-700 shadow-2xl w-full max-w-sm 
                            flex justify-center items-center flex-col p-7 rounded-l "  >
                                
                <p className="font-outfit md:text-sm">Do you want to delete {exercise.name}?</p>
                <div className="">
                    <button className="bg-accent/50 border border-gray-700 text-zinc-300 px-6  mt-1 mr-2 py-2 
                                    rounded-xl font-medium hover:bg-gray-800 transition-colors cursor-pointer" 
                            onClick={onDelete}>Yes</button>

                    <button className="bg-red-500/60 border border-gray-700 cursor-pointer
                            text-zinc-100 px-6 py-2 rounded-xl font-medium hover:bg-red-500/20 transition-colors "
                             onClick={onCancel}>Cancel</button>
                </div>

            </div>
        </div>
        
    )
}

export default ConfirmDelete