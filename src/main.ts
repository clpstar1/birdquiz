// TODO Insert all the burds 
var burds = [
  "gartenvögel/zilpzalp.mp3",
  "gartenvögel/haubenmeise.mp3",
  "gartenvögel/mehlschwalbe.mp3",
  "gartenvögel/heckenbraunelle.mp3",
  "gartenvögel/bachstelze.mp3",
  "gartenvögel/mauersegler.mp3",
  "gartenvögel/nachtigall.mp3",
  "gartenvögel/dohle.mp3",
  "gartenvögel/kleiber.mp3",
  "gartenvögel/sommergoldhähnchen.mp3",
  "gartenvögel/wintergoldhähnchen.mp3",
  "gartenvögel/türteltaube.mp3",
  "gartenvögel/bluthänfling.mp3",
  "gartenvögel/zaunkönig.mp3",
  "gartenvögel/rabenkrähe.mp3",
  "gartenvögel/grünspecht.mp3",
  "gartenvögel/turmfalke.mp3",
  "gartenvögel/girlitz.mp3",
  "gartenvögel/buchfink.mp3",
  "gartenvögel/erlenzeisig.mp3",
  "gartenvögel/buntspecht.mp3",
  "gartenvögel/stieglitz.mp3",
  "gartenvögel/gartenrotschwanz.mp3",
  "gartenvögel/elster.mp3",
  "gartenvögel/gartengrasmücke.mp3",
  "gartenvögel/amsel.mp3",
  "gartenvögel/star2.mp3",
  "gartenvögel/ringeltaube.mp3",
  "gartenvögel/kernbeisser.mp3",
  "gartenvögel/schwanzmeise.mp3",
  "gartenvögel/gimpel.mp3",
  "gartenvögel/hausrotschwanz.mp3",
  "gartenvögel/gartenbaumläufer.mp3",
  "gartenvögel/grünfink.mp3",
  "gartenvögel/grauschnepper.mp3",
  "gartenvögel/singdrossel.mp3",
  "gartenvögel/kohlmeise.mp3",
  "gartenvögel/star1.mp3",
  "gartenvögel/klappergrasmücke.mp3",
  "gartenvögel/sumpfmeise.mp3",
  "gartenvögel/goldammer.mp3",
  "gartenvögel/tannmeise.mp3",
  "gartenvögel/rauchschwalbe.mp3",
  "gartenvögel/blaumeise.mp3",
  "gartenvögel/saatkrähe.mp3",
  "gartenvögel/fitis.mp3",
  "gartenvögel/haussperling.mp3",
  "gartenvögel/eichelhäher.mp3",
  "gartenvögel/mönchsgrasmücke.mp3",
  "gartenvögel/feldsperling.mp3",
]

var poppedBurds: string[] = []

// 50 -> 
//
const popRandomBird = () => {
  const burd = _popRandomBird()
  console.log(burds)
  return burd
}

const _popRandomBird = () => {
  if (burds.length === 0) {
    return null
  }

  if (burds.length === 1) {
    burds = []
    return burds[0]
  }
  // return a random index between 0 (inclusive) and burds.length (exclusive)
  const popPosition = Math.floor(Math.random() * burds.length)
  return burds.splice(popPosition, 1)[0]
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
  console.log(birdsrc)
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
