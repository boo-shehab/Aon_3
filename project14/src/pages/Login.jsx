import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()
    //https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
            const data = await response.json()
            console.log(data);
            
            if(data.length > 0 && data[0].username === password) {
                localStorage.setItem("user", JSON.stringify(data[0]))
                nav("/")

            } else {
                alert("Invalid email or password")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-[400px] rounded-2xl border-2 border-gray-300 p-8 shadow-2xs bg-blue-200">
            <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">Login</button>
            </form>
        </div>
    </div>
  )
}
export default Login