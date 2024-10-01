const { Board, Servo } = require('johnny-five')
const board = new Board();

function moveServoToRight(req, res) {
    const body = JSON.parse(req.body);
    console.log(body);

    board.on('ready', () => {
        const servo = new Servo(12);

        servo.to(180);
    })
}

function moveServoToLeft(req, res) {
    const body = JSON.parse(req.body);
    console.log(body);

    board.on('ready', () => {
        const servo = new Servo(12);

        servo.to(-180);
    })
}

module.exports = {
    moveServoToRight,
    moveServoToLeft
}