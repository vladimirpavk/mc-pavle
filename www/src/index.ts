import Component1 from './component1/component1';

const komp1 = new Component1('vladimir', 'pavkovic', 'vladimirpavk');
console.log(komp1.sayName());

document.getElementById('title').innerHTML = komp1.sayName();
