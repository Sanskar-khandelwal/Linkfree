import React, { useState } from "react"
import styles from "../styles/apply.module.css"
import { toast } from "react-toastify"
import Link from "next/link"
import axios from 'axios'
import {useRouter} from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState('')
  const handleLogin = (e) => {
    e.preventDefault()

    //backend here

    axios.post("http://localhost:8080/api/login",{  
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    } ).then((response) => {
      const data = response.data
      console.log(data)
      if (data.status == "success") {
        toast("You are Login successfully")
        localStorage.setItem("LinkTreeToken", data.token)
        router.push('/dashboard')
      }
      if(data.status == "error"){
        toast("User not found")
      }
    })
    .catch((error) => {
      setError(error);
      console.log(error)
      toast.error(error.message)
    })
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <section
       className="flex flex-row h-screen overflow-hidden"
      >
        <div className="main flex  h-full px-10 w-2/5 items-center">
          <div className="content px-4  bg-white w-full">
            <h1 className="text-2xl font-bold text-left">
              Enter Your Verse
            </h1>
            <p className="text-left  mt-2">Stay Connected, Stay Inspired</p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-3 text-lg mt-6 w-full"
            >
              <input
                className=" border rounded-md bg-gray-100 px-3 py-2  focus:outline-none w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Mail"
              />
              {error && <p> try different username </p>}
              <input
                className=" border rounded-md bg-gray-100 px-3 py-2  focus:outline-none w-full"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set a Password"
              />

              <input
                type="submit"
                value="Login"
                className="bg-indigo-600 text-white py-2 rounded-md cursor-pointer "
              />
            </form>
            <h4 className="text-left text-black pt-3 ">
            New here ?{" "}
            <Link className="font-bold text-indigo-500 " href="/apply">
              Apply Now
            </Link>
          </h4>
          </div>    
        </div>
        <div className="flex-1 w-3/5 h-full ">
         <img src="/images/bulb-light.jpg " alt="" className="rounded-lg object-cover h-full w-full" />
        </div>

      </section>
    </>
  )
}

export default Login
