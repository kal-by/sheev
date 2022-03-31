const id = 'sheev'
const advice = [
  'DO IT',
  'Did You Ever Hear The Tragedy Of Darth Plagueis The Wise?'
]

const onClick = () => {
  document.getElementById(id).innerHTML = advice[Math.floor(Math.random() * advice.length)]
}

window.addEventListener('load', onClick)
document.body.addEventListener('click', onClick, true)