   document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '4px';
            trail.style.height = '4px';
            trail.style.background = '#00ffff';
            trail.style.borderRadius = '50%';
            trail.style.boxShadow = '0 0 10px #00ffff';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.animation = 'fadeOut 1s ease-out forwards';
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 1000);
        });
        
        // Add fadeOut animation for mouse trail
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                0% {
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
        document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function(){
    const profileWrapper = document.querySelector('.profile-wrapper');
    const particleCount = 30;

    for(let i=0; i < particleCount; i++){
        const particle = document.createElement('div');
        particle.classList.add('particle');}
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = Math.random();
        particle.style.animation='floatUp 10s linear infinite';

        profileWrapper.appendChild(particle);
    
});