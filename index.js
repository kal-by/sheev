const id = 'sheev'
const advice = [
  'DO IT',
  'Did You Ever Hear The Tragedy Of Darth Plagueis The Wise?'
]

const onClick = () => {
  const current = document.getElementById(id).innerHTML
  let next = advice[Math.floor(Math.random() * advice.length)]
  while (current === next) {
    next = advice[Math.floor(Math.random() * advice.length)]
  }
  document.getElementById(id).innerHTML = next
}

document.body.addEventListener('click', onClick, true)
window.addEventListener('load', onClick)