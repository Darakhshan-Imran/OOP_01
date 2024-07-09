interface Rules {
    name:string
    price:number
    model:number
    showDetails:()=>void

}

class Product implements Rules{

   public name:string
   public price:number
   public model: number
   private color= "Metallic Grey"
   protected enginenumber="AC265986"


    constructor(name:string, price:number, model:number){
        this.name=name
        this.price=price
        this.model=model
    
    }

    showDetails(){

        console.log(`
            Name: ${this.name}
            Price: ${this.price}
            Model: ${this.model}
            Color: ${this.color}
            Engine Number: ${this.enginenumber}`);
        
    }
}
let car = new Product("Accord", 3500000, 2022)
console.log(car);

class product2 extends Product {

    constructor(name:string, price:number, model:number){

        super(name, price, model)
        this.name =name
        this.price= price
        this.model
    }

    showInfo(){
        super.showDetails()
    }
}

let bike = new product2("Heavy Bike", 2500000, 2023);

bike.showInfo()