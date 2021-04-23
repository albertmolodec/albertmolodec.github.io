import { run } from './lib/dom'

run('#podcasts', target => {
  const podcasts = []
  fetch(`/api/podcasts`)
    .then(res => res.json())
    .then(data => {
      target.innerHTML = ''
      for (let record of data.records) {
        const { Name } = record
        podcasts.push(Name)
      }
      const timer = setInterval(() => {
        if (podcasts.length) {
          const listItem = document.createElement('li')
          listItem.textContent = podcasts.shift()
          target.append(listItem)
        } else {
          clearInterval(timer)
        }
      }, 16)
    })
})
