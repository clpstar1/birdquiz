// TODO Insert all the burds 
var burds = [
  "bird.mp3"
]

var poppedBurds: string[] = []

const popRandomBird = () => {

  const popped = burds.length === 0
    ? null
    : burds.splice((Math.random() * 100000) % burds.length)[0]

  if (popped !== null) {
    poppedBurds.push(popped)
  }

  return popped
}

const mkStartPage = (reset: boolean = false) => {
  const content = document.getElementById("content")!
  content.innerHTML = `
    <div class="center" id="#startPage">
      <h1>Welcome to Birdjizz</h1>
      <div class="button" id="startButton">
        Start Quiz???
      </div>
    </div>
  `
  if (reset) {
    burds = poppedBurds
    poppedBurds = []
  }

  const startButton = document.getElementById("startButton")!
  const randomBird = popRandomBird()
  startButton.addEventListener(
    "click",
    () => randomBird === null
      ? mkStartPage()
      : mkBirdPage(randomBird))
}

const mkBirdPage = (birdsrc: string) => {
  const content = document.getElementById("content")!
  content.innerHTML = `
    <div class="center">
      <h2>Guesseth the Bird</h2>
      <audio controls>
        <source src=${birdsrc}>
      </audio>
      <div class="button" id="revealButton">Reveal</div>
    </div>
  `
  const revealButton = document.getElementById("revealButton")!
  revealButton.addEventListener("click", () => mkRevealPage(birdsrc))
}

const mkRevealPage = (whodunnit: string) => {
  const content = document.getElementById("content")!
  content.innerHTML = `
    <div class="center">
      <h2>It was ${whodunnit}!</h2>
      <div style="display: flex">
        <div class="button" id="continueButton">Continue</div>
        <div class="button" id="reshuffleButton">Continue and Reshuffle</div>
      </div>
    </div>
  `
  const onclick = (prevBird: string | null = null) => {

    if (prevBird !== null) {
      const insertPosition = (Math.random() * 100000) % burds.length
      burds.splice(insertPosition, 0, prevBird)
    }

    const randomBird = popRandomBird()
    // TODO prevent showing the reshuffled bird?
    randomBird === null
      ? mkStartPage(true)
      : mkBirdPage(randomBird)
  }

  document
    .getElementById("continueButton")!
    .addEventListener("click", () => onclick())
  document
    .getElementById("reshuffleButton")!
    .addEventListener("click", () => onclick(whodunnit))

}

mkStartPage()
