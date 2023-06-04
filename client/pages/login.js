import React, { useState } from "react"
import styles from "../styles/apply.module.css"
import { toast } from "react-toastify"
import Link from "next/link"

const Apply = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    if (!category) return toast.error("Please add a category")

    toast("You are Login Successfully Successfully")
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <section
        className={
          styles.background + " min-h-screen flex justify-center items-center"
        }
      >
        <div className="main">
          <div className="content border-2 px-4 py-8 rounded-2xl shadow-lg bg-white">
            <h1 className="text-2xl font-bold text-center">
              Make your Visibility Easy
            </h1>
            <p className="text-center  mt-2">Make LinkTree, Make your Brand</p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-3 text-lg mt-3"
            >
              <input
                className="shadow-md  border-2 px-2 py-2  focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Mail"
              />
              <input
                className="shadow-md  border-2 px-2 py-2  focus:outline-none"
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
          </div>
          <h4 className="text-center text-white pt-3">
            New here ?{" "}
            <Link className="font-bold text-indigo-500" href="/apply">
              Apply here
            </Link>
          </h4>
        </div>
      </section>
    </>
  )
}

export default Apply
