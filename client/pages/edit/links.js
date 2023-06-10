import UserHeader from "@/components/UserHeader"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const links = () => {
  // const [links, setLinks] = useState([{ url: "", title: "" }])

  const [links, setLinks] = useState([{ url: "", title: "" }])

  const [title, setTitle] = useState("")

  function saveLinks(e) {
    e.preventDefault()
    const linksArray = Object.values(links)
    const titlesArray = Object.values(title)
    const linksData = linksArray.map((link, index) => ({
      link,
      title: titlesArray[index],
    }))

    axios
      .post(
        "http://localhost:8080/save/links",
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
          links: linksData,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data
        if ((data.status = "error")) {
          return toast.error(data.error)
        }
        toast.success("Links saved Successfully")
      })
  }

  function handleLinkChange(index, field, value) {
    const updatedLinks = [...links]
    const linkToUpdate = { ...updatedLinks[index], [field]: value }
    updatedLinks[index] = linkToUpdate
    setLinks(updatedLinks)
  }

  function handleAddLink() {
    setLinks([...links, { url: "", title: "" }])
  }
  function handleRemoveLinks(index) {
    const updatedLinks = [...links]
    updatedLinks.splice(index, 1)
    setLinks(updatedLinks)
  }

  useEffect(() => {
    console.log(typeof [1, 2])
    console.log(Array.isArray(links))
    if (!localStorage.getItem("LinkTreeToken")) return router.push("/login")
    axios
      .post(
        "http://localhost:8080/load/links",
        {
          tokenMail: localStorage.getItem("LinkTreeToken"),
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data
        if (data.status == "error") {
          return toast.error(data.error)
        }
        setLinks(data.links)
      })
  }, [])

  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section>
            <h1 className="text-center font-bold text-xl text-gray-800">
              Add or Customize links
            </h1>
            <div>
              <form onSubmit={saveLinks}>
                {links.map((link, index) => (
                  <div key={index} className="flex justify-evenly">
                    <label>
                      URL:
                      <input
                        className="outline-none  border-2 font-bold text-xl text-gray-600 shadow rounded-md px-2 p-1 ml-2 "
                        type="text"
                        value={link.url}
                        onChange={(e) =>
                          handleLinkChange(index, "url", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Title:
                      <input
                        className="outline-none  border-2 font-bold text-xl text-gray-600 shadow rounded-md px-2 p-1 ml-2"
                        type="text"
                        value={link.title}
                        onChange={(e) =>
                          handleLinkChange(index, "title", e.target.value)
                        }
                      />
                    </label>

                    <img
                      src="/svg/delete.svg"
                      className="w-12 h-12"
                      type="button"
                      onClick={(e) => handleRemoveLinks(index)}
                      alt="icon to delete link"
                    />
                  </div>
                ))}
                <div className="buttons flex flex-row gap-5 my-1">
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md shadowsm w-full"
                    type="button"
                    onClick={handleAddLink}
                  >
                    Add link
                  </button>
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md shadowsm w-full"
                    type="submit"
                  >
                    {" "}
                    Save
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default links
