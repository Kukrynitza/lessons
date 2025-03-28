export default function removeRequest(event) {
  event.preventDefault()
  const checkbox = event.target
  const li = checkbox.parentNode
  const text = li.querySelector('label').outerText
  li.remove()
  window.localStorage.removeItem(text)
}
