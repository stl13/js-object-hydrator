import { Component } from '@angular/core';
import { HydratorService } from './hydrator.service';
import { Car } from './dto/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  public constructor(hydrator: HydratorService) {
    let data = { //Car
      brand: "Mazda",
      age: 34
    };

    let car: Car = hydrator.hydrate(Car, data);
    console.log(car);

    // TODO
    // - arrays
    // - nested objects
    // - no circural refernces
  }
}
