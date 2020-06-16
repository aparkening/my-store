document.addEventListener('DOMContentLoaded', () => {

  // Change base color in head css
  const baseColor = () => {
    let css = ':root { --main-bg-color: green; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
  }

  // Change css colors on button click
  const changeButton = document.querySelector('#change-color');
  changeButton.addEventListener('click', (e) => baseColor());

})