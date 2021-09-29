const { MESSAGE } = require('./environment');

const createMessage = async () => {
    let message = 'No se ha establecido la variable de ambiente MESSAGE';

    if (MESSAGE) {
        message = "El valor de la varible MESSAGE es: " + MESSAGE
    }

    return message;
}

module.exports = {
    createMessage
}