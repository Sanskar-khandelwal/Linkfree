import React from "react"

const UserHeader = () => {
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
          <div className="inline-flex mr-s text-right items-center hover:bg-gray-100 px-5 py-1 rounded-lg border">
            <div className="text-xs md:text-md flex flex-col flex-wrap mr-2">
              <span className="font-bold">Name</span>
              <span>Role Pack</span>
            </div>
            <div className="user-img">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <img className="w-5 h-5 mr-5  " src="/svg/notify.svg" alt="" />
          <img className="w-5 h-5 mr-5 " src="/svg/logout.svg" alt="" />
        </div>
      </header>
      <div></div>
    </>
  )
}

export default UserHeader
