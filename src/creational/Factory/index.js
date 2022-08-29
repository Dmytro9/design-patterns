import { carFactory } from './car_factory.js';

const Audi = carFactory.create('Audi');
const BMW = carFactory.create('BMW');
const Mercedes = carFactory.create('Mercedes');
const Audi2 = carFactory.create('Audi');

Audi.showInfo();
Audi2.showInfo();
BMW.showInfo();
Mercedes.showInfo();