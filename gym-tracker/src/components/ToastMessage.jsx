import { Check } from "lucide-react"
const ToastMessage = ({message}) => {
    return(
        <div className="fixed bottom-8 left-1/2  animate-fade-away">
            <div className="flex items-center w-full max-w-xl p-4 text-outfit 
                        bg-zinc-900/90 rounded-xl shadow-xs border border-default" >
                <Check size={20}/>
                <div className="ms-2.5 text-sm border-s border-default ps-3.5">{message}</div>
            </div>
        </div>
    )
}

export default ToastMessage