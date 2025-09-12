import './style.css';
import { snapdom } from '@zumer/snapdom';

const targets = document.querySelectorAll('#app .target');
for (const target of targets) {
  snapdom
    .toImg(target, { embedFonts: true })
    .then((img) => {
      target.insertAdjacentElement('afterend', img);
    });
}
