import React, { useEffect } from "react"

const dashboard = () => {
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login")
  }, [])

  return <div>dashboard</div>
}

export default dashboard
