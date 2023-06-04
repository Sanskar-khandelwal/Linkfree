import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="absolute bottom-1 left-1/2 -translate-x-1/2">
      <Link
        href="/"
        target="_blank"
        className="flex flex-row items-centertransition-all duration-300"
      >
        <img className="hover:-rotate-45" src="/images/favicon.ico" alt="" />
        <h5 className="text-indigo-500 pl-3 font-bold hover:text-indigo-300 ">
          Try LinkTree
        </h5>
      </Link>
    </footer>
  )
}

export default Footer
