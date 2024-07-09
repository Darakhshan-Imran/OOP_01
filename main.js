var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price, model) {
        this.color = "Metallic Grey";
        this.enginenumber = "AC265986";
        this.name = name;
        this.price = price;
        this.model = model;
    }
    Product.prototype.showDetails = function () {
        console.log("\n            Name: ".concat(this.name, "\n            Price: ").concat(this.price, "\n            Model: ").concat(this.model, "\n            Color: ").concat(this.color, "\n            Engine Number: ").concat(this.enginenumber));
    };
    return Product;
}());
var car = new Product("Accord", 3500000, 2022);
console.log(car);
var product2 = /** @class */ (function (_super) {
    __extends(product2, _super);
    function product2(name, price, model) {
        var _this = _super.call(this, name, price, model) || this;
        _this.name = name;
        _this.price = price;
        _this.model;
        return _this;
    }
    product2.prototype.showInfo = function () {
        _super.prototype.showDetails.call(this);
    };
    return product2;
}(Product));
var bike = new product2("Heavy Bike", 2500000, 2023);
bike.showInfo();
