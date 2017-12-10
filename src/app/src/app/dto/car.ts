import { DTO } from "../hydrator/annotation/dto";
import { path } from "../hydrator/annotation/path";


@DTO("Car")
export class Car {

    private brand: string;
    private age: number;

    constructor(
        @path("brand") brand: string,
        @path("age") age: number
    ) {

        // validation here
        this.brand = brand;
        this.age = age;

    }

}
