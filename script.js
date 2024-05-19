document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const player = document.getElementById('player');
    const playerContainer = document.getElementById('player-container');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const stream = this.getAttribute('data-stream');
            player.src = stream;
            playerContainer.hidden = false;
            player.play();
        });
    });
});
