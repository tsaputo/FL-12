function emptyCells() {
[...document.getElementsByClassName('item')].forEach(element => {
    element.value = -1;
});
}