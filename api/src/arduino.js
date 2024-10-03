const { Board, Servo } = require('johnny-five')

const board = new Board({ port: "COM3" });

function setupIOTComponents() {
    board.on('ready', () => {
        const leftEyeServo = new Servo(12);
        const rightEyeServo = new Servo(11);


        leftEyeServo.to(90);
        rightEyeServo.to(90);
    })
    
    board.on('error', (error) => {
        console.log(error.message);
    });
}

module.exports = { setupIOTComponents }