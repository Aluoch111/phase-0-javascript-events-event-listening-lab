function addingEventListener() {
    let input = document.getElementById('input');
    input.addEventListener('click', () => {
        alert('i was clicked')
    });
}

addingEventListener()