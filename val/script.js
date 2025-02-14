
// Function to create floating hearts effect
function showHearts() {
    const heartContainer = document.getElementById('heart-container');

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.innerHTML = '❤';
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// CSS for hearts animation
const style = document.createElement('style');
style.innerHTML = `
    .heart {
        position: absolute;
        font-size: 2rem;
        animation: float 5s linear infinite;
    }
    @keyframes float {
        from { transform: translateY(100vh); opacity: 1; }
        to { transform: translateY(-10vh); opacity: 0; }
    }
`;
document.head.appendChild(style);