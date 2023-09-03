import memeData from '../memeData'

function Meme() {
  function getMemeImg() {
    const randomIndex = Math.floor(
      Math.random() * memeData.data.memes.length
    )
    const randomMemeUrl =
      memeData.data.memes[randomIndex].url
    console.log(randomMemeUrl)
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
    </main>
  )
}

export default Meme
