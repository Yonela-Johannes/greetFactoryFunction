import { Greet } from "./main.js";
const greeting = Greet()
let username = document.querySelector('.name')
const counter = document.querySelector('.counter')
const greetMe = document.querySelector('.greet-me')
const reset = document.querySelector('.reset')
const greet = document.querySelector('.greet')
const error = document.querySelector('.error')
const dupError = document.querySelector('.dup-error')
let users = JSON.parse(localStorage.getItem("users"))

const selectionError = document.querySelector('.selection-error')
const languageGreetSelect = document.getElementsByClassName('language')
let count = JSON.parse(localStorage.getItem('count'))

let language = ''

let usernames = !users ? [] : users
counter.innerHTML = count ? count : 0
greet.innerHTML = 'Your name and greeting in selected language will appear here.'
const nameList = document.querySelector(".name-list")
usernames.forEach(element => {
    nameList.innerHTML += `
        <ul class="display-item"><li>${element[0].toUpperCase() + element.slice(1).toLowerCase()}</li></ul>
    `
});
greetMe.onclick = (e) => {
    e.preventDefault()
    let selected = false
    let name = username.value
    greeting.selectLanguage(languageGreetSelect)
    selected = greeting.getCheckLang()
    language = greeting.getLanguage()
    greeting.setName(name)
    greeting.storeName(usernames, selected)
    const nameExist = greeting.getNameExist()
    greeting.getName() && selected ?
        (
            greeting.correctNameClassName(error, username),
            greeting.duplicateNameCheck(dupError, nameExist),
            setTimeout(() => {
                dupError.classList.add("hide")
                // location.reload()
                username.value = ''
            }, 3000),

            setTimeout(() => {
                location.reload()
            }, 3000),
            counter.innerHTML = usernames.length,
            greet.innerHTML = `${greeting.getLanguage()} ${greeting.getName()}`,
            localStorage.setItem('users', JSON.stringify(usernames)),
            localStorage.setItem('count', JSON.stringify(usernames.length))
        )
        :
        username.value == '' ? (
            greeting.nameClassName(error, username),
            setTimeout(() => {
                username.value = ''
                error.classList.add('hide')
            }, 1000)
        ) : !selected && (
            selectionError.classList.remove('hide'),
            setTimeout(() => {
                selectionError.classList.add('hide')
            }, 1500)
        )

}

reset.onclick = () => {
    localStorage.clear()
    location.reload()
}

