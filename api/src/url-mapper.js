const { moveServo } = require('./controller')

const routeMapper = {
    '/move-servo': moveServo,
}

module.exports = {
    routeMapper
}