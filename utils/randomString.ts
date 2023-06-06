function randomString(numOfChar = 10) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';

    for(let i = 0; i < numOfChar; i++) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)]
        id += randomChar;
    }

    return id;
}

export default  randomString;