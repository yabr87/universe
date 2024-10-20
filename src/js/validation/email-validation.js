import Bouncer from 'formbouncerjs';
import { BouncerConfig } from './bouncerConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form]');
  const emailValidation = new Bouncer(form, BouncerConfig);

  form.addEventListener('submit', async e => {
    e.preventDefault();

    console.log('Валидация началась...');
    const isValid = emailValidation.validate();

    console.log('Результат валидации:', isValid);

    if (isValid) {
      const formData = new FormData(form);

      // Логируем данные формы
      console.log('Данные формы:');
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      Loading.standard({
        svgColor: '#1982c6',
      });

      try {
        const response = await axios.post('../sendmail.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Ответ от сервера:', response);

        Notify.success('You have successfully joined!', {
          timeout: 3000,
          showOnlyTheLastOne: true,
        });

        //form.reset();
      } catch (error) {
        Notify.failure('An error occurred, please try again.', {
          timeout: 3000,
          showOnlyTheLastOne: true,
        });

        console.error('Ошибка:', error);
      } finally {
        Loading.remove();
      }
    } else {
      Notify.failure('Please enter a valid email address.', {
        timeout: 3000,
        showOnlyTheLastOne: true,
      });

      console.log('Форма не прошла валидацию.');
    }
  });
});
