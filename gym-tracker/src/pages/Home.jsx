import { useEffect, useState } from "react"
import ExerciseRow from "../components/ExerciseRow"
import { exerciseDataObj } from "../data/exercises"
import ConfirmDelete from "../components/ConfirmDelete"
import ToastMessage from "../components/toastMessage"
import Header from "../components/layouts/Header"
import { useLocation } from "react-router-dom"
import AddExerciseFromDatabase from "../components/AddExerciseFromDatabase"
import { supabase } from "../lib/supabaseClient"

const Home = () => {

    const location = useLocation()
    
    const [user,setUser] = useState(null)
    const [exerciseData, setExerciseData] = useState(exerciseDataObj)
    const [exerciseToDelete, setExerciseToDelete ] = useState(null)
    const [showDeleteToast, setShowDeleteToast] = useState(false)
    const [showSignInToast, setShowSignInToast] = useState(false)
    const [signInMessageToast, setSignInMessageToast] = useState("")
    const [showAddExerciseToast,setAddExerciseToast] = useState(false)
    const [addExercise, setAddExercise] = useState(false)

    useEffect(()=>{
        try{
            const getUserData = async() => {
                const { data : {user}} = await supabase.auth.getUser()
                setUser(user)
            }
            getUserData()
    
            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
                setUser(session?.user ?? null)
            })
            return () => subscription.unsubscribe()
        }
        catch(err){
            console.log(err)
        }

    },[])

    useEffect(() => {
        if (location.state?.toastMsg){
            setSignInMessageToast(location.state.toastMsg)
            setShowSignInToast(true)

            const timer = setTimeout(() => setShowSignInToast(false), 3000)

            window.history.replaceState({}, document.title)

            return () => clearTimeout(timer)
        }
    },[location])

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
        setTimeout(() => setShowDeleteToast(false), 15000)
        setExerciseToDelete(null)

    }


    return (
            <>  <Header/>
                {Object.entries(exerciseData).map(([category, exercises])=>(
                        <ExerciseRow
                            key={category}
                            title={category}
                            exercises={exercises}
                            requestDelete = {requestDelete}
                            setAddExercise={setAddExercise}
                        />
                ))}
                {exerciseToDelete && (
                    <ConfirmDelete 
                        exercise = {exerciseToDelete}
                        onDelete = { () => deleteExercise(exerciseToDelete.id, exerciseToDelete.category)}
                        onCancel = { () => setExerciseToDelete(null)}
                    />
                )}
                {(addExercise && user) && <AddExerciseFromDatabase toast={setAddExerciseToast} userData={user} onClose={() => setAddExercise(false)}/>}

                {showDeleteToast && <ToastMessage message="Exercise Deleted !"/>}
                {showSignInToast && <ToastMessage message={signInMessageToast}/>}
                {showAddExerciseToast && <ToastMessage message={"Exercise Added!"}/>}
            
            </>
        
    )
}

export default Home