document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColorButton');

    button.addEventListener('click', function() {
        if (document.body.style.backgroundColor === 'black') {
            document.body.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = 'black';
        }
    });

   
});
