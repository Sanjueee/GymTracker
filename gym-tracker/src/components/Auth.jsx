import { useState } from "react"

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(true)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleSignup = () => {}

    return(
        <div className="min-h-screen bg-app-bg-dark flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl">

                {isSignUp ? (
                    <div className="mb-5">
                        <div className="flex flex-col">
                        <h1 className="text-white/70 text-4xl  font-montserrat font-light tracking-tighter cursor-pointer mb-5">
                                            GYM<span className="font-bold">LOG</span></h1>
                        <h1 className="text-3xl font-semibold font-inter text-white/90 tracking-tight">Create your account </h1>
                        </div>
                    </div>

                ) : (
                    <div className="mb-5">
                        <div className="flex flex-col">
                        <h1 className="text-white/70 text-4xl  font-montserrat font-light tracking-tighter cursor-pointer mb-5">
                                            GYM<span className="font-bold">LOG</span></h1>
                        <h1 className="text-4xl font-semibold font-inter text-white tracking-tight">Sign In</h1>
                        </div>
                    </div>
                )}


                <form className="space-y-4">
                    {isSignUp && (
                        <div className="font-medium text-zinc-500 tracking-tight">
                            <label className="font-medium text-zinc-400  tracking-tight">Username</label>
                            <input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 
                                            text-white focus:outline-none focus:border-blue-500 transition-colors" 
                                            onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                    )}
                    <div>
                    <label className="font-medium text-zinc-400  tracking-tight">Email</label>
                    <input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 
                                    text-white focus:outline-none focus:border-blue-500 transition-colors" 
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                </div>
                    <div>
                        <label className="font-medium text-zinc-400  tracking-tight">Password</label>
                        <input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 
                                        text-white focus:outline-none focus:border-blue-500 transition-colors" type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>

                    {!isLoading ? (
                        <button className="w-full bg-white text-black font-bold p-3 rounded-lg mt-4 hover:bg-zinc-200 transition-all"
                                    onClick={handleSignup}>
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </button>
                    ) : (
                        <div className="w-full bg-zinc-500 text-zinc-800 font-bold p-3 rounded-lg mt-4 flex items-center justify-center gap-2 ">
                            <div className=" border-t-transparent border-2 border-zinc-950 animate-spin w-6 h-6 rounded-full"></div>
                            {isSignUp ? "Creating  new account.." : "Signing In.."}
                        </div>
                    )}
                    {!error  && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm mb-4">
                                Couldn't sign in
                    </div>
                )}
                </form>

                

                    <p className="mt-6 text-center text-zinc-500 text-[18px]">
                        {isSignUp ? "Already have an account? " : "New to GymLog? "} 
                        <button type="button" onClick={() => setIsSignUp(!isSignUp)} className="text-white underline italic text-l">{isSignUp ? "Sign In" : "Sign Up"}</button>
                    </p>
                

                
            </div>
        </div>
    )
}

export default Auth