const options = document.querySelector('#options')
const h2Element = document.createElement('h2')
const h3Element = document.createElement('h3')
const h4Element = document.createElement('h4')

const ul = document.querySelector('ul')

const getGeo = navigator.geolocation.getCurrentPosition(function (position) {
  const local = [position.coords.latitude, position.coords.longitude]

  h4Element.textContent = `${local}`
})

const data = {
  quest: {
    name: 'Pesquisa de Satisfação',
    created: 'Eraldo Sinicio',
    questions: {
      1: 'Qual o nível de satisfação em relação aos nossos serviços?',
      2: 'Você indicaria nossos serviços?',
      3: 'Por onde nos encontrou?',
    },
  },
}

h2Element.textContent = data.quest.name
options.appendChild(h2Element)

h3Element.textContent = `Criado por: ${data.quest.created}`
options.appendChild(h3Element)

const local = getGeo
console.log(local)
h4Element.textContent = getGeo
options.appendChild(h4Element)

const quests = data.quest.questions
Object.keys(quests).forEach((item) => {
  const liElement = document.createElement('li')
  const span = document.createElement('span')
  const input = document.createElement('input')

  span.textContent = quests[item]
  liElement.appendChild(span)
  liElement.appendChild(input)
  ul.appendChild(liElement)
})
