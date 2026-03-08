import { Search, X, Plus } from "lucide-react"
import SearchBar from "./SearchBar"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

const AddExerciseFromDatabase = ({ onClose, userData , toast}) => {

    const[selectedExercise,setSelectedExercise] = useState(null)
    const[isLoading, setIsLoading] = useState(false)

    const handleAddToLog = async() =>{

        if(!selectedExercise) return 

        setIsLoading(true)

        const { error } = await supabase
                                .from("user_exercises")
                                .insert([{
                                   user_id : userData.id ,
                                   exercise_id : selectedExercise.id
                                }])
        
        if(error){
            console.error("Error adding exercise:", error)
            alert("Failed to add exercise. Please try again.")
            return
        }
        setIsLoading(false)
        toast(true)
        onClose()
    }

    return (
        <div className="z-9999 fixed inset-0 bg-black/80 backdrop-blur-md
                        flex justify-center items-center p-4">
            
           
            <div className="bg-[#121212] border border-zinc-800 shadow-2xl w-full max-w-md 
                            relative flex flex-col p-6 rounded-2xl gap-4 overflow-visible">
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer">
                    <X size={20} />
                </button>

                <div className="space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
                        Add Exercise
                    </h2>
                    <p className="text-zinc-500 text-sm">
                        Search our database of over 1,000 movements
                    </p>
                </div>

                <SearchBar onSelect={(item) => setSelectedExercise(item)}/>
                {!isLoading ? (
                    <button onClick={handleAddToLog} className="w-full bg-accent text-black py-3 rounded-xl font-bold
                                    hover:opacity-90 transition-all flex items-center justify-center gap-2
                                    shadow-lg shadow-accent/10 active:scale-[0.98]">
                        <Plus size={18} strokeWidth={3} />
                        Add to Log
                    </button>
                    ) : (
                        <button className="w-full bg-blue-900 text-black py-3 rounded-xl font-bold
                                    hover:opacity-90 transition-all flex items-center justify-center gap-2
                                    shadow-lg shadow-accent/10 active:scale-[0.98]">
                                <div className="w-6 h-6 border-2 border-black border-t-transparent  rounded-full animate-spin"></div>
                        </button>
                    )}

                
                <div className="pt-2 border-t border-zinc-800/50 mt-2 text-center">
                    <p className="text-zinc-500 text-sm">
                        Cant find it? 
                        <button className="text-accent font-medium ml-1 hover:underline underline-offset-4"> 
                            Create custom exercise
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AddExerciseFromDatabase