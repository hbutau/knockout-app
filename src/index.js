import _ from 'lodash';
import './style.css';
import Picture from './hamub.jpg';

function component() {
  const element = document.createElement('div');

    //lodash now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

    //add th e image to our existing div
    const myImage = new Image();
    myImage.src = Picture;

    element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
