function generatePassword(length = 12) {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_"

    let random_password = ""
    for (let i = 0; i < length; i++) {
        random_password += characters[Math.floor(Math.random()*characters.length)]
    }
    
    return random_password
}

module.exports = generatePassword;