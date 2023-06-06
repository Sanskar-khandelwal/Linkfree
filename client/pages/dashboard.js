import React, { useEffect } from "react"

import LinkBox from "@/components/LinkBox"
import UserHeader from "@/components/UserHeader"

const dashboard = () => {
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login")
  }, [])

  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <LinkBox lbTitle="Links" lbNumber="5" lbSvg="url" lbTheme="white" />
            <LinkBox
              lbTitle="Growth"
              lbNumber="5%"
              lbSvg="growth"
              lbTheme="blue"
            />
            <LinkBox
              lbTitle="bubble"
              lbNumber="5"
              lbSvg="bubble"
              lbTheme="white"
            />
            <LinkBox lbTitle="Look" lbNumber="5%" lbSvg="ig" lbTheme="blue" />
          </section>
        </main>
      </div>
    </>
  )
}

export default dashboard
