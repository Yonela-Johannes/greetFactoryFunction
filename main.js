let nameError = 'error-name'
let correctNameInput = 'correct-name'
let hide = 'hide'
let language = false
let nameExist = false
export function Greet() {
    let names = []
    let username = ''
    let lang = false

    const selectLanguage = (selection) => {
        for (let i = 0; i < selection.length; i++) {
            selection[i].checked ? (lang = true, language = selection[i].value) : (lang, language)
        }
    }
    const getCheckLang = () => lang
    const getLanguage = () => language

    // checking data type
    // convert it to lower case and if input is a string of 2 word or more 
    // remove and return the first word, And remove andy whitespace characters
    const setName = name => typeof name == 'string' ? username = name.toLowerCase().split(' ')[0].trim() : ""

    // check if there is a value and if there is return value...
    // capitalise the first character and conver all other characters to lowercase
    const getName = () => username && username.replace(/[^a-z, ^A-Z]/g, '')[0].toUpperCase() + username.trim().replace(/[^a-z, A-Z]/g, '').slice(1)

    const storeName = (usernames, selected) => username && !usernames.includes(username) && selected ? names = usernames.push(username) : (names = usernames, nameExist = true)

    const getNameExist = () => nameExist
    const nameClassName = (error, nameInput) => (error.classList.remove(hide), error.innerHTML = 'please enter name!', nameInput.length <= 4 && (error.innerHTML = 'name must be more than 4 characters!'))

    const duplicateNameCheck = (dupError, checkname) => checkname && (dupError.classList.remove(hide), dupError.innerHTML = `${getName()}, you have already been greeted.`)

    const correctNameClassName = (error, nameInput) => (error.classList.add(hide), error.innerHTML = '', nameInput.classList.remove(nameError), nameInput.classList.add(correctNameInput))
    const getNames = () => names

    const getNamesList = () => {
        for (let i = 0; i < getNames().length; i++) {
            names += `<li>${getNames[i]}</li>`
        }
        return names
    }
    return {
        setName,
        getName,
        getNameExist,
        getNames,
        storeName,
        selectLanguage,
        getCheckLang,
        getLanguage,
        nameClassName,
        correctNameClassName,
        getNamesList,
        duplicateNameCheck,
    }

}