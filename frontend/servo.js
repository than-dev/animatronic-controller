function moveServo(pin, direction) {
    const url = `http://localhost:3030/move-servo?pin=${pin}&direction=${direction}`;
    fetch(url, { method: 'POST' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao mover o servo');
            }
        })
        .catch(error => console.error('Erro:', error));
}