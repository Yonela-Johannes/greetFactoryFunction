let nameError = 'error-name'
let correctNameInput = 'correct-name'
let hide = 'hide'
let language = false

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

    const setName = (name, usernames, selected) => name.trim().replace(/[^a-z, ^A-Z]/g, '')[0].toUpperCase() + name.trim().replace(/[^a-z, A-Z]/g, '').slice(1) && selected ? (usernames.includes(name) ? (usernames, name) : (username = name, usernames.push(names = name))) : ('')

    const nameClassName = (nameState, error, nameInput) => (nameState.classList.add(nameError), error.classList.remove(hide), error.innerHTML = 'please enter name!', nameInput.classList.add(nameError), nameInput.length <= 4 && (error.innerHTML = 'name must be more than 4 characters!'))
    const correctNameClassName = (nameState, error, nameInput) => (nameState.classList.remove(nameError), error.classList.add(hide), error.innerHTML = '', nameInput.classList.remove(nameError), nameInput.classList.add(correctNameInput))
    const getName = () => username
    const getNames = () => names

    return {
        setName,
        getName,
        getNames,
        selectLanguage,
        getCheckLang,
        getLanguage,
        nameClassName,
        correctNameClassName,
    }

}