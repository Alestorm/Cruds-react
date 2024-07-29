class NewCarDto {
    builder: string;
    model: string;
    year: number;        
    color: string;
    plate: string;
    engineSize: number;  
    fuelType: string;
    transmission: string;
    image: string;
    price: number;       

    constructor(
        builder: string,
        model: string,
        year: number,
        color: string,
        plate: string,
        engineSize: number,
        fuelType: string,
        transmission: string,
        image: string,
        price: number
    ) {
        this.builder = builder;
        this.model = model;
        this.year = year;
        this.color = color;
        this.plate = plate;
        this.engineSize = engineSize;
        this.fuelType = fuelType;
        this.transmission = transmission;
        this.image = image;
        this.price = price;
    }
}
export default NewCarDto;