import React, { useState } from "react"
import Image from "next/image"
import styles from "../styles/apply.module.css"
import { toast } from "react-toastify"

const Apply = () => {
  const [category, setCategory] = React.useState("")

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (!category) return toast.error("Please add a category")

    toast("You are registered Successfully")
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
              onSubmit={handleRegister}
              className="flex flex-col gap-3 text-lg mt-3"
            >
              <span className="flex flex-row shadow-md border-2 bg-white items-center">
                <Image
                  src="/svg/ig.svg"
                  width={35}
                  height={30}
                  alt="instagram logo"
                  className="mr-3 text-white bg-white mx-auto"
                ></Image>
                <input
                  className="shadow-md  border-2 px-3 py-2  focus:outline-none w-full"
                  type="text"
                  placeholder="Social Handle"
                />
              </span>
              <input
                className="shadow-md  border-2 px-2 py-2  focus:outline-none"
                type="emai"
                placeholder="Enter Your Mail"
              />
              <input
                className="shadow-md  border-2 px-2 py-2  focus:outline-none"
                type="password"
                placeholder="Set a Password"
              />

              <h5 className="text-sm text-center text-indigo-500">
                Account Type:{" "}
              </h5>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={category === "Creator"}
                  onChange={handleCategoryChange}
                  value="Creator"
                />
                <p>Creators</p>
              </label>
              <label>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={category === "Agency"}
                  onChange={handleCategoryChange}
                  value="Agency"
                />
                <p>Agency</p>
              </label>
              <input
                type="submit"
                value="Apply"
                className="bg-indigo-600 text-white py-2 rounded-md cursor-pointer "
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Apply
