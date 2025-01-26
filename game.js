// Canvas + ctx
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Default size
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Cube "CLASS"
const player = {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    width: 50,
    height: 50,
    color: 'black',
    speed: 4,
    dx: 0,
    dy: 0
};

// Create Cube "method"
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Update position
function updatePlayer() {
    player.x += player.dx;
    player.y += player.dy;

    // Overflow update
    if (player.x < 0) player.x = canvasWidth - player.width;
    if (player.x + player.width > canvasWidth) player.x = 0;
    if (player.y < 0) player.y = canvasHeight - player.height;
    if (player.y + player.height > canvasHeight) player.y = 0;
}

// MAIN FUNCTION
function gameLoop() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas

    drawPlayer();
    updatePlayer();
    requestAnimationFrame(gameLoop);
}

// WASD
document.addEventListener('keydown', (e) => {
    if (e.key === 'w') player.dy = -player.speed;
    if (e.key === 's') player.dy = player.speed;
    if (e.key === 'a') player.dx = -player.speed;
    if (e.key === 'd') player.dx = player.speed;
});

document.addEventListener('keyup', (e) => {
    if (['w', 's'].includes(e.key)) player.dy = 0;
    if (['a', 'd'].includes(e.key)) player.dx = 0;
});

gameLoop();
