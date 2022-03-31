const id = 'sheev'
const advice = [
  'Do it.',
  'Did you ever hear the tragedy of Darth Plagueis the Wise?',
  'Your feeble skills are no match for the power of the Dark Side.',
  'Everything that has transpired has done so according to my design.',
  'So be it...Jedi.',
  'There is a great disturbance in the force.',
  'You will find that it is you who are mistaken, about a great many things.',
  'Execute Order Sixty-Six!',
  'Power! Unlimited power!'
]

const answer = () => {
  document.getElementById(id).innerHTML = advice[Math.floor(Math.random() * advice.length)]
}

window.addEventListener('load', answer)
document.body.addEventListener('click', answer, true)