// import messages from './messages';
// import defaultExport, { logError, warning, showSuccessMessage } from './notifier';
// import * as notifier from './notifier';
// import button from './button.html';
import './styles.css';
import Card from './Card';

// [...document.getElementsByClassName('item')].forEach(element => {
//   element.addEventListener('click',
//   () => alert("You have clicked me!")
// )
// });

for (let i = 1; i <= 9; i++) {
  let card = new Card(`card_${i}`);
  card.alertMethod();
}


// document.getElementById('error-btn').addEventListener('click',
//   () => logError(messages.UNEXPECTED_ERROR)
// );
// document.getElementById('warning-btn').addEventListener('click',
//   () => notifier.warning(messages.NETWORK_CONNECTION_WARNING)
// );
// document.getElementById('toastr-btn').addEventListener('click',
//   () => showSuccessMessage(messages.SUCCESS)
// );

// document.getElementById('dynamic-module').addEventListener('click',
//   () => import('./styles.css')
// )

// document.getElementById('dynamic-module').innerHTML = button;