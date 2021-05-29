const randomLang = () => {
    const languages = ["en", "fr", "jp", "fil"];
    return languages[Math.floor(Math.random()*languages.length)];
}


export default randomLang;