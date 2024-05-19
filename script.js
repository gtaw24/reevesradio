document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const player = document.getElementById('player');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const stream = this.getAttribute('data-stream');
            player.src = stream;
            player.hidden = false;
            player.play();
        });
    });
});
