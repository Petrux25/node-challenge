export default class Car {
  UUID: string = '';
  VIN: string = '';
  Make: string = '';
  Model: string = '';
  Mileage: string = '';
  Year: string = '';
  Price: string = '';
  ZipCode: string = '';
  CreateDate: string = '';
  UpdateDate: string = '';

  constructor(car: Partial<Car>){
    for(const key in car) {
      if(this.hasOwnProperty(key)) {
        this[key] = car[key];
      }
    }
  }

  getValues() {
    return {
      UUID: this.UUID,
      VIN: this.VIN,
      Make: this.Make,
      Model: this.Model,
      Mileage: this.Mileage,
      Year: this.Year,
      Price: this.Price,
      ZipCode: this.ZipCode,
      CreateDate: this.CreateDate,
      UpdateDate: this.UpdateDate
    }
  }
}