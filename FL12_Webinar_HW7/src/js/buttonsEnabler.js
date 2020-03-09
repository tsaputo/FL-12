 function buttonsEnable () {
    document.querySelectorAll('.gameButtons button').forEach(x => {
        x.removeAttribute('disabled');
    });
}
