// Optional: Add any interactive features or additional animations here

// Example: Log when animations complete
document.addEventListener('DOMContentLoaded', function() {
    const welcome = document.querySelector('.welcome');
    const content = document.querySelector('.content');
    
    // Animation callbacks can be added here if needed
    console.log('Welcome animation starting...');
    
    welcome.addEventListener('animationend', function() {
        console.log('Welcome animation complete!');
    });
    
    content.addEventListener('animationend', function() {
        console.log('Content animation complete!');
    });
});
