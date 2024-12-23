const card = document.querySelector('.card');

card.addEventListener('click', function() {
    card.classList.toggle('open');
});

// snow
// Tạo hiệu ứng

const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

// Cấu hình size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cấu trúc
class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // size between 1 and 3
        this.speed = Math.random() * 1 + 0.5; // speed between 0.5 and 1.5
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}


let snowflakes = [];
for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake());
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animate); 
}


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate(); 