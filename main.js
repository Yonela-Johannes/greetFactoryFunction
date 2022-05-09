export function Greet() {
    let language = false
    let nameExist = false
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
    const getNames = () => names

    return {
        setName,
        getName,
        getNameExist,
        getNames,
        storeName,
        selectLanguage,
        getCheckLang,
        getLanguage,
    }

}