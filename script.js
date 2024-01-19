window.onload = function() {
    const prominentLetters = document.querySelectorAll('#initial-name .prominent');
    prominentLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animationDelay = `${index * 0.2}s`;
        }, 0);
    });

    setTimeout(() => {
        document.querySelector('.container').classList.add('fade-in');
        const initialName = document.getElementById('initial-name');
        initialName.style.opacity = '0';
        setTimeout(() => {
            initialName.style.display = 'none'; // Hide the element completely after fade-out
        }, 1000); // Adjust this time to match your fade-out duration
    }, prominentLetters.length * 170 + 1500); // Adjust timing based on animation
};

window.addEventListener('scroll', function() {
    var containers = document.querySelectorAll('.line-symbol-container:not(.lets-connect-section .line-symbol-container)');
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    containers.forEach(function(container) {
        var containerPosition = container.getBoundingClientRect().top + scrollY;
        var containerVisiblePosition = windowHeight - 150; // Adjust as needed

        if (scrollY > containerPosition - containerVisiblePosition) {
            container.style.opacity = 1;
            container.style.transform = 'translateY(0)';
            // Rotate the unicode symbol based on scroll position
            var unicodeSymbol = container.querySelector('#unicode-symbol');
            var rotationDegree = (scrollY - containerPosition + containerVisiblePosition) * 2; // Adjust rotation speed as needed
            unicodeSymbol.style.transform = `rotate(${rotationDegree}deg)`;
        } else {
            container.style.opacity = 0;
            container.style.transform = 'translateY(20px)';
        }
    });
});

// JavaScript for scroll-triggered animations
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in-scroll:not(.lets-connect-section .fade-in-scroll)');
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // Checking whether element is within the viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
});

document.addEventListener('scroll', function() {
    const projectItems = document.querySelectorAll('.project-section:not(.lets-connect-section .project-section)');
    const windowHeight = window.innerHeight;

    projectItems.forEach(function(item, index) {
        const position = item.getBoundingClientRect();
        const isVisible = position.top < windowHeight;

        if (isVisible) {
            const zIndex = 90 - index;
            const translateY = Math.max(-30, -position.top * 0.05);
            const scale = 1 - Math.max(0, position.top * 0.0005); // Scale down slightly as it moves up
            item.style.transform = `translateY(${translateY}px) scale(${scale})`;
            item.style.zIndex = zIndex;
            item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)'; // Enhanced shadow for depth
        } else {
            item.style.transform = 'translateY(30px) scale(0.9)';
            item.style.zIndex = 'auto';
            item.style.boxShadow = 'none'; // Reset shadow
        }
    });
});
