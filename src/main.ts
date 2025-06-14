// TODO Insert all the burds 
const _burds = [
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
var burds = [..._burds]

const refreshCounter = (remaining: number) => {
  document.getElementById("counter")!.innerText = `Remaining: ${remaining}`
}

const popRandomBird = () => {
  if (burds.length === 0) {
    return null
  }
  // return a random index between 0 (inclusive) and burds.length (exclusive)
  const popPosition = Math.floor(Math.random() * burds.length)
  const popped = burds.splice(popPosition, 1)[0]
  return popped
}

const mkBirdPage = (birdsrc: string) => {
  const content = document.getElementById("content")!
  content.innerHTML = `
    <div class="center-col">
      <h2>Guesseth the Bird</h2>
      <audio controls>
        <source src=${birdsrc}>
      </audio>
      <div class="button" id="revealButton" style="margin-top: 1em">
        Reveal
      </div>
    </div>
  `
  refreshCounter(burds.length + 1)
  const revealButton = document.getElementById("revealButton")!
  revealButton.addEventListener("click", () => mkRevealPage(birdsrc))
}

const mkRevealPage = (whodunnit: string) => {
  const content = document.getElementById("content")!
  content.innerHTML = `
    <div class="center-col">
      <h2>It was ${whodunnit.split("/")[1]}!</h2>
      <div style="display: flex">
        <div class="button" id="continueButton">
          Continue
        </div>
        <div class="button" id="reshuffleButton">
          Continue and Reshuffle
        </div>
      </div>
    </div>
  `
  const onclick = (prevBird: string | null = null) => {

    // insert at random position
    if (prevBird !== null) {
      const insertPos = Math.floor(Math.random() * burds.length)
      burds.splice(insertPos, 0, prevBird)
    }

    const randomBird = popRandomBird()

    randomBird === null
      ? mkFinishPage()
      : mkBirdPage(randomBird)
  }

  document
    .getElementById("continueButton")!
    .addEventListener("click", () => onclick())
  document
    .getElementById("reshuffleButton")!
    .addEventListener("click", () => onclick(whodunnit))
}

const mkFinishPage = () => {
  const content = document.getElementById("content")!
  content.innerHTML = `
    <div class="center-col">
      <h2>Yippee you are done</h2>
      <div class="button" id="resetButton">
        Reset?
      </div>
    </div>
  `
  refreshCounter(burds.length)

  document
    .getElementById("resetButton")!
    .addEventListener("click", () => {
      burds = [..._burds]
      mkBirdPage(popRandomBird()!)
    })
}

mkBirdPage(popRandomBird()!)
refreshCounter(burds.length + 1)
