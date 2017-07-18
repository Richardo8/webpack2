import _ from 'lodash';
import './style.css';
import Rooney from './Rooney.jpg';

function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Rooney;
    element.appendChild(myIcon)
    return element;
}

document.body.appendChild(component());