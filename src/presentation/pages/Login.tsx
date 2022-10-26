import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../../app/Context/Themecontext";
import { login } from "../../infrastructure/data/api-data";
import { addNote } from "../../infrastructure/data/local-data";
import { transitoinStyle } from "../utils/utils-style";

export default function Login() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("")
  const [pwd, setPwd] = useState<string>("")

  function onNameChange(e: any) { setEmail(e.target.value) }
  function onPwdChange(e: any) { setPwd(e.target.value) }

  async function handleSubmit(e: any) {
    e.preventDefault()
    const response = await login({ email, password: pwd })
    response.error === true ? null : navigate('/')
  }

  const inputStyle = `mt-4 w-1/3 p-2 border-b focus:outline-none ${theme === 'light' ? 'border-black' : 'bg-gray-900 text-white border-white'}`

  return <main className="">
    <h1 className="text-6xl py-20 text-center">Login</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
    
      <input type="email" placeholder="Enter the Email" onChange={onNameChange} className={inputStyle} required />
      <input type="password" placeholder="Enter the Password" onChange={onPwdChange} className={inputStyle} required />

      <button className={`py-3 px-7 text-2xl mt-12 border-b hover:shadow-lg 
        ${theme === 'light' ? 'border-black hover:bg-black hover:text-white' : 'bg-gray-900 text-white hover:bg-white hover:text-black'} ${transitoinStyle}`}>
        Enter
      </button>
      <Link to='/register'>Dont Have an Account ?</Link>
    </form>
  </main>
}