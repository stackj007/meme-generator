import React from 'react'
import memeData from '../memeData'

function Meme() {
  const [memeImg, setMemeImg] = React.useState('')

  function getMemeImg() {
    const randomIndex = Math.floor(
      Math.random() * memeData.data.memes.length
    )
    const url = memeData.data.memes[randomIndex].url
    setMemeImg(url)
  }

  return (
    <main className="p-8">
      <div className="grid grid-rows-2 grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="input 1"
          className="border border-grey-300 rounded-lg px-4   "
        ></input>

        <input
          type="text"
          placeholder="input 1"
          className="border rounded-lg border-grey-300 px-4 py-2  "
        ></input>

        <button
          onClick={getMemeImg}
          className="col-span-2
          text-xl font-bold text-white p-4 border border-grey rounded-lg  bg-gradient-to-r from-purple-600 to-purple-600"
        >
          Get a new meme image
        </button>
      </div>

      <div className="rounded-lg mt-6">
        <img
          className="max-w-md  border-md rounded-lg  p-6 mx-auto mt-6"
          src={memeImg}
        ></img>
      </div>
    </main>
  )
}

export default Meme
