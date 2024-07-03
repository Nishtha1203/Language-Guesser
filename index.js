const franc = require("franc");
const langs = require("langs");

const input = process.argv[2];
console.log(`Input: ${input}`);

const langCode = franc(input);
console.log(`Detected language code: ${langCode}`);

if (langCode === 'und') {
    console.log('Could not identify language. Please provide more text.');
} 
else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(`Detected language: ${language.name}`);
    } 
    else {
        console.log(`Language code ${langCode} not recognized by langs.`);
    }
}