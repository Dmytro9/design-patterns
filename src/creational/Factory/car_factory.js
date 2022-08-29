import { Audi } from './Audi.js';
import { BMW } from './BMW.js';
import { Mercedes } from './Mercedes.js';

class CarFactory {
  create(type) {
    switch (type) {
      case 'Audi':
        return new Audi();
      case 'BMW':
        return new BMW();
      case 'Mercedes':
        return new Mercedes();
      default:
        {
          console.log('Unknown Car type...');
        }
    }
  }
}

const carFactory = new CarFactory();
export { carFactory };