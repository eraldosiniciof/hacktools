document.querySelector('#register').addEventListener('click', () => {
  const ul = document.querySelector('#list ul')
  const span = document.createElement('span')
  const text = document.querySelector('#question')
  const pElement = document.createElement('p')
  const liElement = document.createElement('li')
  const answer = document.createElement('input')

  span.textContent = text.value
  pElement.appendChild(span)
  answer.classList.add('questions')
  pElement.appendChild(answer)
  liElement.appendChild(pElement)
  ul.appendChild(liElement)
})
