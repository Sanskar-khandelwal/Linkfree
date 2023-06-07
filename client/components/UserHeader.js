import React, { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import UserContext from "@/context/userContext"
import axios from 'axios'

const UserHeader = () => {
  // const {name, role, avatar, handle, links} = data;
  const router = useRouter()
  function handleLogout() {
    localStorage.removeItem("LinkTreeToken")
    router.push("/login")
  }
  const { userData, setUserData } = useContext(UserContext)
  const { role, avatar, handle } = userData
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login")

    axios
      .post(
        "http://localhost:8080/data/dashboard",
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data
        if (data.status == "error") {
          return toast.error("Error Happened")
        }
        setData(data.userData)
        setUserData(data.userData)
        localStorage.setItem("userHandle", data.userData.handle)
        toast.success(data.message)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <header className="mt-3 flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row ">
          <Link href="{/edit/links}">
            <button className="inline-flex w-40 md:w-auto px-5 py-3 text-gray-600 font-bold border hover:text-gray-900 hover:bg-gray-100 rounded-md mb-3 mr-3">
              <img src="/svg/url.svg" alt="" className="w-4 h-4 mr-3" />
              <p>Edit Link</p>
            </button>
          </Link>
          <Link href={"/edit/profile"}>
            <button className="inline-flex w-40 md:w-auto px-5 py-3 text-gray-600 font-bold border hover:text-gray-900 hover:bg-gray-100 rounded mb-3">
              <img src="/svg/profile.svg" alt="" className="w-4 h-4 mr-3" />
              <p>Edit Profile</p>
            </button>
          </Link>
        </div>

        <Link href={`http://localhost:3000/${handle}`}>
          <div className="flex flex-row items-center">
            <div className="inline-flex mr-s text-right items-center hover:bg-gray-100 px-5 py-1 rounded-lg border mr-5">
              <div className="text-xs md:text-md flex flex-col flex-wrap mr-2">
                <span className="font-bold">{handle}</span>
                <span>{role} Pack</span>
              </div>
              <div className="user-img">
                <img src={avatar} alt="" className="w-10" />
              </div>
            </div>
            <img
              className="w-5 h-5 mr-5  cursor-pointer"
              src="/svg/notify.svg"
              alt=""
            />
            <img
              className="w-5 h-5 mr-5 cursor-pointer"
              src="/svg/logout.svg"
              alt=""
              onClick={handleLogout}
            />
          </div>
        </Link>
      </header>
    </>
  )
}

export default UserHeader
