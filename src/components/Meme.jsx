import React from 'react'

function Meme() {
  const [image, setImage] = React.useState({
    randomImg: 'https://i.imgflip.com/30b1gx.jpg',
    topText: '',
    bottomText: '',
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes)
      })
  }, [])

  function getMemeImg() {
    const randomIndex = Math.floor(
      Math.random() * allMemes.length
    )
    const url = allMemes[randomIndex].url

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
        <div className="flex justify-center items-center">
          <img
            src={image.randomImg}
            className="meme--image"
            alt="Meme"
          />
        </div>

        <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white text-3xl font-bold">
          {image.topText}
        </h2>
        <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
          {image.bottomText}
        </h2>
      </div>
    </main>
  )
}

export default Meme
