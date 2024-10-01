const { moveServoToRight, moveServoToLeft } = require("./arduino-controller")

const routeMapper = {
    '/servo-to-right': moveServoToRight,
    '/servo-to-left': moveServoToLeft
}

module.exports = {
    routeMapper
}