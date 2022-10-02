import {debounce} from './utils/debounce.js';
import {isEnterKey} from './utils/is-enter-key.js';

const form = document.querySelector('.form');
const formButton = form.querySelector('.form__wrapper').querySelector('button');

const onSendDataDebounce = debounce(() => {
  form.submit();
});

const initSendData = () => {
  formButton.disabled = true;
  onSendDataDebounce();
};

const sendData = () => {
  formButton.type = 'button';
  formButton.addEventListener('click', initSendData);

  const onEnterKeydown = (evt) => {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      initSendData();
    }
  };

  document.addEventListener('keydown', onEnterKeydown);
};

export {sendData};
