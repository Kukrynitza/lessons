export default function clearLocalStorage() {
  window.localStorage.clear()
  const form = document.querySelector('.requests')
  form.innerHTML = '<form action="get" class="requests"></form>'
}
