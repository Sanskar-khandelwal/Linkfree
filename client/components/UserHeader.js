import React from "react"
import { useRouter } from "next/router"

const UserHeader = ({data}) => {
  const {name, role, avatar, handle, links} = data;
  const router = useRouter()
  function handleLogout() {
    localStorage.removeItem("LinkTreeToken")
    router.push("/login")
  }
  return (
    <>
      <header className="mt-3 flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row ">
          <button className="inline-flex w-40 md:w-auto px-5 py-3 text-gray-600 font-bold border hover:text-gray-900 hover:bg-gray-100 rounded-md mb-3 mr-3">
            <img src="/svg/url.svg" alt="" className="w-4 h-4 mr-3" />
            <p>Edit Link</p>
          </button>
          <button className="inline-flex w-40 md:w-auto px-5 py-3 text-gray-600 font-bold border hover:text-gray-900 hover:bg-gray-100 rounded mb-3">
            <img src="/svg/profile.svg" alt="" className="w-4 h-4 mr-3" />
            <p>Edit Profile</p>
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="inline-flex mr-s text-right items-center hover:bg-gray-100 px-5 py-1 rounded-lg border mr-5">
            <div className="text-xs md:text-md flex flex-col flex-wrap mr-2">
              <span className="font-bold">{handle}</span>
              <span>{role} Pack</span>
            </div>
            <div className="user-img">
              <img
                src={avatar}
                alt=""
                className="w-10"
              />
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
      </header>
    </>
  )
}

export default UserHeader
