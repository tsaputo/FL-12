function buttonsDisable () {
    document.querySelectorAll('.gameButtons button').forEach(x => {
        x.setAttribute('disabled', 'disabled');
    });
}