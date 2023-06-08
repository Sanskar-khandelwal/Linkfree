import React, { useContext, useState } from "react"
import { useEffect } from "react"
import UserContext from "@/context/userContext"
import UserHeader from "@/components/UserHeader"
import Image from "next/image"
import { toast } from "react-toastify"
import axios from "axios"
import { useRouter } from "next/router"

const profile = () => {
  const router = useRouter()
  const { userData, setUserData } = useContext(UserContext)
  const [socials, setSocials] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  })
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [avatar, setAvatar] = useState(
    "https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
  )

  function handleSocials(e) {
    setSocials({
      ...socials,
      [e.target.id]: e.target.value,
    })
  }

  function saveProfile(e) {
    e.preventDefault()
    axios
      .post(
        "http://localhost:8080/save/profile",
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
          name, 
          bio, 
          avatar
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data
        if (data.status == "error") return toast.error(data.error)
        toast.success("Profile saved Successfully")
      })
      .catch((e) => {
        console.log(e.message)
        toast.error(e.message)
      })
  }

  function saveSocials(e) {
    e.preventDefault()
    axios
      .post(
        "http://localhost:8080/save/socials",
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
          socials,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data
        if (data.status == "error") return toast.error(data.error)
        toast.success("Socials saved Successfully")
      })
      .catch((e) => {
        console.log(e.message)
        toast.error(e.message)
      })
  }

  useEffect(() => {
    if (userData) {
      setName(userData.name)
      setAvatar(userData.avatar)
      setBio(userData.bio)
    }
  }, [userData])

  useEffect(() => {
     if(!localStorage.getItem('LinkTreeToken')) return router.push('/login')
     axios.post("http://localhost:8080/load/socials", {
      tokenMail: localStorage.getItem('LinkTreeToken')
     },
     {
      headers : {
        "Content-type": 'application/json'
      }
     }).then(res => {
      const data = res.data
      if(data.status == 'error') {return toast.error(data.error)}
      setSocials(data.socials)
     })
  }, [])

  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section>
            <div>
              <h4 className="font-bold text-center mb-5 text-lg">
                Edit Profile
              </h4>
              <div>
                <form onSubmit={saveProfile} className="flex flex-col justify-center items-center">
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/user.svg"
                      width={20}
                      height={20}
                      alt="user logo"
                      className="mx-2 text-white bg-white  text-center"
                    />
                    <input
                      className="border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Set a Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/bio.svg"
                      width={20}
                      height={20}
                      alt="bio logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter a bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </span>

                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/avatar.svg"
                      width={20}
                      height={20}
                      alt="enter image logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Image Link"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img
                      src={avatar}
                      className="w-12 rounded-full border shadow"
                      alt=""
                    />
                  </span>

                  <input
                    type="submit"
                    value="Save Profile"
                    className="bg-blue-600 px-4 py-2 rouned-md w-32 border shadow-md cursor-pointer text-white"
                  />
                </form>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-center mb-5 mt-5 text-lg">
                Edit Socials
              </h4>
              <div>
                <form
                  className="flex flex-col justify-center items-center"
                  onSubmit={saveSocials}
                >
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/facebook.svg"
                      width={20}
                      height={20}
                      alt="facebook logo"
                      className="mx-2 text-white bg-white  text-center"
                    />
                    <input
                      id="facebook"
                      className="border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter facebook profile"
                      value={socials.facebook}
                      onChange={handleSocials}
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/twitter.svg"
                      width={20}
                      height={20}
                      alt="twitter logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      id="twitter"
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter twitter profile"
                      value={socials.twitter}
                      onChange={handleSocials}
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/linkedin.svg"
                      width={20}
                      height={20}
                      alt="enter linkedin logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      id="linkedin"
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Linkedin profile link"
                      value={socials.linkedin}
                      onChange={handleSocials}
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/instagram.svg"
                      width={20}
                      height={20}
                      alt="enter instagram logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      id="instagram"
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter instagram profile Link"
                      value={socials.instagram}
                      onChange={handleSocials}
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/github.svg"
                      width={20}
                      height={20}
                      alt="enter github logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      id="github"
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter github profile Link"
                      value={socials.github}
                      onChange={handleSocials}
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 bg-white items-center">
                    <Image
                      src="/svg/youtube.svg"
                      width={20}
                      height={20}
                      alt="enter youtube logo"
                      className="mx-2 text-white bg-white"
                    ></Image>
                    <input
                      id="youtube"
                      className="  border-2 px-3 py-2  focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Youtube channel Link"
                      value={socials.youtube}
                      onChange={handleSocials}
                    />
                  </span>
                  <input
                    type="submit"
                    value="Save Profile"
                    className="bg-blue-600 px-4 py-2 rouned-md w-32 border shadow-md cursor-pointer text-white"
                  />
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default profile
