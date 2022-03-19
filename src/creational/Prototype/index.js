const myCar = {
  name: "Mercedes",
  drive: function () {
    console.log("driving");
  },
};

const yourCar = Object.create(myCar);

console.log(yourCar.name);

// ====== *** ====== *** ====== ***

const vehicle = {
  getModel: function () {
    console.log("Get Model");
  },
};

const car = Object.create(vehicle, {
  id: {
    value: "Something",
    writable: false,
    enumerable: true,
  },
  model: {
    value: "mercedes",
    enumerable: true,
  },
});

// ====== *** ====== *** ====== ***

class TeslaCar {
  constructor(model, price, interior, autopilot) {
    (this.model = model),
      (this.price = price),
      (this.interior = interior),
      (this.autopilot = autopilot);
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototypeCar = new TeslaCar("S", 80000, "black", false);

// Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for particular auto
car1.interior = "white";
car1.autopilot = true;
