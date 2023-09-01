import React from 'react'

function Header() {
  return (
    <header className="h-14 bg-gradient-to-r from-purple-800 to-pink-500 flex items-center h-24 p-7">
      <img src="/Face.png" className="h-7 mr-2" />
      <h3 className="mr-auto text-white font-bold text-xl">
        Meme Generator
      </h3>
      <h4 className="font-semibold">
        React Course-Project
      </h4>
    </header>
  )
}

export default Header
