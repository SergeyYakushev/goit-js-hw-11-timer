
//import Tmpl from "./templates/example.hbs";
//import cards from './example.json';
import './styles.css';

class CountdownTimer{
    constructor({selector, targetDate}) {

        this._refs = this._getRefs(selector);
        this._targetDate = targetDate;

        this._remainingТime();
    }

    _getRefs(root) {
        const refs = {};

        refs.clockFace = document.querySelector(`${root}`);

        refs.d = document.querySelector(`${root} span[data-value="days"]`);
        refs.h = document.querySelector(`${root} span[data-value="hours"]`);
        refs.m = document.querySelector(`${root} span[data-value="mins"]`);
        refs.s = document.querySelector(`${root} span[data-value="secs"]`);

        return refs;
    }

    _remainingТime () {
        setInterval(this._updateTimer.bind(this), 1000);   
    };

    _deltaTime() {

        const msEnd = Date.parse( this._targetDate );
        const msNow = Date.now();

        return msEnd - msNow;
    };
    
    _updateTimer() {
      
    this._updateClockface(this._getTimeComponents(this._deltaTime()), this._refs);
    }
        
    


 _getTimeComponents(time) {
 


    const days = this._pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this._pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this._pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this._pad(Math.floor((time % (1000 * 60)) / 1000));

return { days, hours, mins, secs };
}


/*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
_pad(value) {
    return String(value).padStart(2, '0');
  }

_updateClockface({ days, hours, mins, secs }, { d, h, m, s }) {

    d.textContent =`${days}`;
    h.textContent = `${hours}`;
    m.textContent = `${mins}`;
    s.textContent = `${secs}`;
    }

    
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2021'),
});

console.log(timer1);



/*let time;
const END = 'Nov 14, 2020';

const refs = {
d: document.querySelector('span[data-value="days"'),
h: document.querySelector('span[data-value="hours"'),
m: document.querySelector('span[data-value="mins"'),
s: document.querySelector('span[data-value="secs"'),
clockFace: document.querySelector('#timer-1'),
}

function remainingТime() {

setInterval(updateTimer, 1000);
}


function updateTimer() {

deltaTime();
//const { days, hours, mins, secs } = getTimeComponents(time);
//console.log(`Дни ${days} часы ${hours} минуты ${mins} секунды ${secs}`);

updateClockface(getTimeComponents(time));

}



function deltaTime() {

const msEnd = Date.parse( END );
const msNow = Date.now();

return time = msEnd - msNow;
}

function getTimeComponents(time) {

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

return { days, hours, mins, secs };
}

function updateClockface({ days, hours, mins, secs }) {

refs.d.textContent =`${days}`;
refs.h.textContent = `${hours}`;
refs.m.textContent = `${mins}`;
refs.s.textContent = `${secs}`;
}



remainingТime();

*/