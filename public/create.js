const ul = document.querySelector('#list ul')
const questions = []

document.querySelector('#register').addEventListener('click', () => {
  const text = document.querySelector('#question')

  if (text.value === '') {
    alert('Por favor, escreva uma pergunta.')
    return
  }

  const span = document.createElement('span')
  const liElement = document.createElement('li')
  const btnRemove = document.createElement('button')

  btnRemove.classList.add('btnRemove')
  btnRemove.textContent = 'Remover'
  span.textContent = text.value
  liElement.appendChild(span)
  liElement.appendChild(btnRemove)
  ul.appendChild(liElement)

  questions.push(text.value)

  text.value = ''
  text.focus()
})

document.querySelector('#list').addEventListener('click', (event) => {
  const target = event.target
  const child = target.parentNode
  const description = child.querySelector('span').textContent
  if (target.textContent === 'Remover') {
    if (confirm(`Você deseja excluir "${description}" ?`)) {
      ul.removeChild(child)
      const pos = questions.indexOf(description)
      questions.splice(pos, 1)
    }
  }
})

document.querySelector('#finish').addEventListener('click', () => {})
