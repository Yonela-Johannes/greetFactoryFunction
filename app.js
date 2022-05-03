import { Greet } from "./main.js";
const greeting = Greet()
let username = document.querySelector('.name')
const counter = document.querySelector('.counter')
const greetMe = document.querySelector('.greet-me')
const reset = document.querySelector('.reset')
const greet = document.querySelector('.greet')
const error = document.querySelector('.error')
let users = JSON.parse(localStorage.getItem("users"))

const selectionError = document.querySelector('.selection-error')
const nameLabel = document.querySelector('.name-label')
const languageGreetSelect = document.getElementsByClassName('language')
let count = JSON.parse(localStorage.getItem('count'))
let language = JSON.parse(localStorage.getItem('language'))

let usernames = !users ? [] : users

counter.innerHTML = count ? count : 0
greet.innerHTML = 'Your name and greeting in selected language will appear here.'

greetMe.onclick = () => {
    let selected = false
    let name = username.value
    greeting.selectLanguage(languageGreetSelect)
    selected = greeting.getCheckLang()
    language = greeting.getLanguage()
    greeting.setName(name, usernames, selected)

    greeting.getName() ? (
        greeting.correctNameClassName(nameLabel, error, username),
        counter.innerHTML = usernames.length,
        greet.innerHTML = `${greeting.getLanguage()} ${greeting.getName()}`,
        localStorage.setItem('users', JSON.stringify(usernames)),
        localStorage.setItem('count', JSON.stringify(usernames.length)),
        localStorage.setItem("language", JSON.stringify(greeting.getLanguage())))
        :
        username.value == '' ? (
            greeting.nameClassName(nameLabel, error, username)
        ) : !selected && (
            selectionError.classList.remove('hide')
        )
}

reset.onclick = () => {
    localStorage.clear()
    location.reload()
}