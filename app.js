import { Greet } from "./main.js";
const greeting = Greet()
let username = document.querySelector('.name')
const counter = document.querySelector('.counter')
const greetMe = document.querySelector('.greet-me')
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


    if (greeting.getName()) {
        greeting.correctNameClassName(nameLabel, error, username)
        counter.innerHTML = greeting.getCount()
        console.log(usernames)
        greet.innerHTML = `${greeting.getLanguage()} ${greeting.getName()}`
        localStorage.setItem('users', JSON.stringify(usernames))
        localStorage.setItem('count', JSON.stringify(greeting.getCount()))
        localStorage.setItem("language", JSON.stringify(greeting.getLanguage()))
    }
    else if (username.value == '') {
        greeting.nameClassName(nameLabel, error, username)
    }
    else if (!selected) {
        selectionError.classList.remove('hide')
    }
}
