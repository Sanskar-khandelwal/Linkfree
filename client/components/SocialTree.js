import React from "react"
import Link from "next/link"

const SocialTree = ({ social }) => {
  const { facebook, twitter, instagram, youtube, linkedin, github } = social
  return (
    <>
      <div className="social flex flex-row justify-center my-4">
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 border border-gray-30 mx-3 select-none"
          target="_blank"
          href={`https://facebook.com/${facebook}`}
        >
          <img className="w-8 h-8" src="/svg/facebook.svg" alt="" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 border border-gray-30 mx-3 select-none"
          target="_blank"
          href={`https://facebook.com/${facebook}`}
        >
          <img className="w-8 h-8" src="/svg/linkedin.svg" alt="" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 border border-gray-30 mx-3 select-none"
          target="_blank"
          href={`https://facebook.com/${facebook}`}
        >
          <img className="w-8 h-8" src="/svg/twitter.svg" alt="" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 border border-gray-30 mx-3 select-none"
          target="_blank"
          href={`https://github.com/${facebook}`}
        >
          <img className="w-8 h-8" src="/svg/github.svg" alt="" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 border border-gray-30 mx-3 select-none"
          target="_blank"
          href={`https://instagram.com/${facebook}`}
        >
          <img className="w-8 h-8" src="/svg/youtube.svg" alt="" />
        </Link>
        <Link
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 border border-gray-30 mx-3 select-none"
          target="_blank"
          href={`https://twitter.com/${facebook}`}
        >
          <img className="w-8 h-8" src="/svg/instagram.svg" alt="" />
        </Link>
      </div>
    </>
  )
}

export default SocialTree
