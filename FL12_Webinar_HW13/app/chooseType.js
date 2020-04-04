export default function chooseType() {
    let arr = [0,1];
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}