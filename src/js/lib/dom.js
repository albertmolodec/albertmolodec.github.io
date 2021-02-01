export const qs = (query, parent = document) => parent.querySelector(query)

export const qsa = (query, parent = document) =>
  Array.from(parent.querySelectorAll(query))

export const on = (event, el, fn) => el.addEventListener(event, fn)

export const run = (query, fn) => {
  const matches = qsa(query)
  if (matches.length > 0) {
    matches.forEach(match => fn(match))
  }
}

export const wrap = (el, wrapper) => {
  el.parentNode.insertBefore(wrapper, el)
  wrapper.appendChild(el)
  return wrapper
}
