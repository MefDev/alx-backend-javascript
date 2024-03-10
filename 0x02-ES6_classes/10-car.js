export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get color() {
    return this.color;
  }

  get motor() {
    return this._motor;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
