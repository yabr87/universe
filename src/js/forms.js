import Bouncer from 'formbouncerjs';
import { bouncerConfig } from './validation/bouncerConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import axios from 'axios';
import MicroModal from 'micromodal';
import { modalConfig } from './micromodal';

new Bouncer('[data-form-hero]', bouncerConfig);
new Bouncer('[data-form-join-us]', bouncerConfig);

const heroForm = document.querySelector('[data-form-hero]');
const joinUsForm = document.querySelector('[data-form-join-us]');

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  sendData(form, formData);
}

heroForm.addEventListener('bouncerFormValid', handleSubmit);
joinUsForm.addEventListener('bouncerFormValid', handleSubmit);

async function sendData(form, formData) {
  Loading.standard({
    svgColor: '#1982c6',
  });

  try {
    // await axios.post('../sendmail.php', formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    MicroModal.show('modal-2', modalConfig);
    form.reset();
    Loading.remove();
  } catch (error) {
    console.error('Error:', error);

    Loading.remove();

    Notify.failure('An error occurred, please try again.', {
      timeout: 3000,
      showOnlyTheLastOne: true,
    });
  }
}
