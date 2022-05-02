let nameError = 'error-name'
let correctNameInput = 'correct-name'
let hide = 'hide'
let language = false

export function Greet() {
    let usernames = []
    let username = ''
    let counter = 0;
    let lang = false

    const selectLanguage = (selection) => {
        for (let i = 0; i < selection.length; i++) {
            selection[i].checked ? (lang = true, language = selection[i].value) : (lang, language)
        }
    }
    const getCheckLang = () => lang
    const getLanguage = () => language

    const setName = (name, selected) => typeof name.trim() == 'string' && selected ? (usernames.includes(name) ? (counter, usernames) : (usernames.push(username = name), counter++)) : ('')
    const nameClassName = (nameState, error, nameInput) => (nameState.classList.add(nameError), error.classList.remove(hide), error.innerHTML = 'please enter name!', nameInput.classList.add(nameError), nameInput.length <= 4 && (error.innerHTML = 'name must be more than 4 characters!'))
    const correctNameClassName = (nameState, error, nameInput) => (nameState.classList.remove(nameError), error.classList.add(hide), error.innerHTML = '', nameInput.classList.remove(nameError), nameInput.classList.add(correctNameInput))
    const getName = () => username
    const getNames = () => usernames
    const getCount = () => counter

    return {
        setName,
        getName,
        getNames,
        selectLanguage,
        getCheckLang,
        getCount,
        getLanguage,
        nameClassName,
        correctNameClassName,
    }

}