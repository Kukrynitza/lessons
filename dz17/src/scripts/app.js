import newRequests from './new-requests.js'
import clearLocalStorage from './clear-local-storage.js'
import fetchTodos from './fetch-todos.js'
import fetchFromLocaleStorage from './fetch-from-locale-storage.js'

const addNewTodos = document.querySelector('.add-new-todos')
addNewTodos.addEventListener('submit', newRequests)
const buttonClear = document.querySelector('.clear')
buttonClear.addEventListener('click', clearLocalStorage)
const buttonFetchFromLocaleStorage = document.querySelector('.fetch-from-locale-storage')
buttonFetchFromLocaleStorage.addEventListener('click', fetchFromLocaleStorage)
fetchTodos()
