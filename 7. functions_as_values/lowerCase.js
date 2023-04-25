const lowercaseMessage = (message) => {
    return message.toLowerCase();
}
const transform = (string, transformFunction) => {
    return transformFunction(string);
}
transform("WHY ARE YOU SHOUTING?", lowercaseMessage);

module.exports = lowercaseMessage, transform;