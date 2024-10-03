const { Servo } = require('johnny-five');

const MAX_POSITION = 180;
const MIN_POSITION = 0;
const STEP = 15;

const positionMapper = {};

function moveServo(req, res) {
    const pin = req.params.pin;
    const direction = req.params.direction;

    if (!pin) {
        return res.writeHead(400).end("missing param: pin");
    }

    if (!direction || (direction !== 'right' && direction !== 'left')) {
        return res.writeHead(400).end("missing or invalid param: direction (use 'right' or 'left')");
    }

    // Inicializa o servo no pino
    const servo = new Servo(pin);

    // Define a posição inicial se não estiver mapeada
    if (positionMapper[pin] === undefined) {
        positionMapper[pin] = 90;
    }

    // Ajusta a posição do servo com base na direção
    if (direction === 'right') {
        positionMapper[pin] = Math.min(positionMapper[pin] + STEP, MAX_POSITION);
    } else if (direction === 'left') {
        positionMapper[pin] = Math.max(positionMapper[pin] - STEP, MIN_POSITION);
    }

    // Move o servo para a nova posição
    servo.to(positionMapper[pin]);

    // Resposta de sucesso
    res.writeHead(200).end();
}

module.exports = {
    moveServo
};
