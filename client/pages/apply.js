import React, { useState } from "react"
import Image from "next/image"
import styles from "../styles/apply.module.css"
import { toast } from "react-toastify"
import Link from "next/link"
import axios from "axios"
import {useRouter} from "next/router"

const Apply = () => {
  const router = useRouter()
  const [handle, setHandle] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [category, setCategory] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (!category) return toast.error("Please add a category")

    axios
      .post(
        "http://localhost:8080/api/register",
        {
          handle,
          email,
          password,
          category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data
        console.log(data)
        if (data.status === "success") {
          toast("You are registered successfully")
          localStorage.setItem("LinkTreeToken", data.token)
          setSubmitted(true)
          router.push('/login')
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  return (
    <>
    <section className="flex flex-row h-screen overflow-hidden ">
    <div className="main flex  h-full px-10 w-2/5 items-center">  
          <div className="content px-4 py-8  bg-white">
            <h1 className="text-2xl font-bold text-left">
              Create your Personlised Hub, Sign Up today
            </h1>
            <p className="text-left  mt-2">Link Share Inspire</p>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-3 text-lg mt-6"
            >
              <span className="flex flex-row border bg-white items-center">
                <Image
                  src="/svg/userhandle.svg"
                  width={35}
                  height={30}
                  alt="instagram logo"
                  className="mx-2 text-white bg-white w-6 h-6 "
                ></Image>
                <input
                  className="  border rounded-md bg-gray-100 px-3 py-2  focus:outline-none w-full"
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="Social Handle"
                />
              </span>
              <input
                className="  border px-2 py-2 rounded-md bg-gray-100 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Mail"
              />
              <input
                className="  border px-2 py-2 rounded-md bg-gray-100  focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set a Password"
              />
    
              <h5 className="text-lg text-left text-indigo-500">
                Account Type:{" "}
              </h5>
              <div className="flex">
              <label className="inline">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={category === "Creator"}
                  onChange={handleCategoryChange}
                  value="Creator"
                  className="inline rounded-md bg-gray-100 "
                />
                <p className="inline ml-2">Creators</p>
              </label>
              <label className="inline ml-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={category === "Agency"}
                  onChange={handleCategoryChange}
                  value="Agency"
                  className="inline rounded-md bg-gray-100"
                />
                <p className="inline ml-2">Agency</p>
              </label>
              </div>
             
              <input
                type="submit"
                value="Apply"
                className="bg-indigo-600 text-white py-2  cursor-pointer rounded-md"
              />
            </form>
            <h4 className="text- text-black mt-4">
            Already have an account ?
            <Link className="font-bold text-indigo-500" href="/login">
              Login
            </Link>
          </h4>
          </div>
        
          
        </div>

        <div className="flex-1 w-3/5 h-full ">
         <img src="/images/bulb.jpg " alt="" className="rounded-lg object-cover h-full w-full" />
        </div>

    </section>
     
      
    
    </>
  

  )
}

export default Apply
