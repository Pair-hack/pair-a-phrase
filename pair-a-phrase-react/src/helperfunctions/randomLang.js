const randomLang = () => {
    const languages = ["af", "sq", "am", "ar", "hy", "as", "az", "bn",
    "bs", "bg", "yue", "ca", "zh-Hans", "zh-Hant", "hr", "cs", 
    "da", "prs", "nl", "et", "fj", "fil", "fi", "fr",
    "de", "el", "gu", "ht", "he", "hi", "mww", "hu",
    "is", "id", "iu", "ga", "it", "ja", "kn", "kk",
    "km", "tlh-Latn", "ko", "ku", "kmr", "lo", "lv", "lt",
    "mg", "ms", "ml", "mt", "mi", "mr", "my", "ne",
    "nb", "or", "ps", "fa", "pl", "pt", "pt-pt", "pa",
    "otq", "ro", "ru", "sm", "sr-Cyrl", "sr-Latn", "sk", "sl",
    "es", "sw", "sv", "ty", "ta", "te", "th", "ti",
    "to", "tr", "uk", "ur", "vi", "cy", "yua"
];
    return languages[Math.floor(Math.random()*languages.length)];
}


export default randomLang;