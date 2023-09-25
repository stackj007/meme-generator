import React from 'react'
import memeData from '../memeData'

function Meme() {
  const [image, setImage] = React.useState({
    randomImg: 'https://i.imgflip.com/30b1gx.jpg',
    topText: '',
    bottomText: '',
  })

  const [allMemes, setAllMemes] = React.useState(memeData)

  function getMemeImg() {
    const memesArray = allMemes.data.memes
    const randomIndex = Math.floor(
      Math.random() * memesArray.length
    )
    const url = memesArray[randomIndex].url

    setImage((prevImage) => ({
      ...prevImage,
      randomImg: url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setImage((prevImage) => ({
      ...prevImage,
      [name]: value,
    }))
  }

  return (
    <main className="p-8">
      <div className="grid grid-rows-2 grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="input 1"
          className="border border-grey-300 rounded-lg px-4   "
          name="topText"
          value={image.topText}
          onChange={handleChange}
        ></input>

        <input
          type="text"
          placeholder="input 1"
          className="border rounded-lg border-grey-300 px-4 py-2  "
          name="bottomText"
          value={image.bottomText}
          onChange={handleChange}
        ></input>

        <button
          onClick={getMemeImg}
          className="col-span-2
          text-xl font-bold text-white p-4 border border-grey rounded-lg  bg-gradient-to-r from-purple-600 to-purple-600"
        >
          Get a new meme image
        </button>
      </div>

      <div className="relative rounded-lg mt-6">
        <img
          className="max-w-md  border-md rounded-lg  p-6 mx-auto mt-6"
          src={image.randomImg}
        ></img>
        <h2 className="text-2xl font-bold absolute top-1/4 left-1/2 text-center mt-4">
          {image.topText}
        </h2>
        <h2 className="text-2xl font-bold absolute bottom-1/4 left-1/2 text-center mt-4">
          {image.bottomText}
        </h2>
      </div>
    </main>
  )
}

export default Meme
