//utworzenie klasy
function Phone(brand, price, color, guarantee) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.guarantee = guarantee;
}

//utworzenie metody
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", price is " + this.price + " and the color is " + this.color + ".");
}

Phone.prototype.guaranteeInfo = function() {
    console.log(this.brand + " gives you " + this.guarantee + " years of guarantee.");
}

//tworzenie obiektu
var iPhone6S = new Phone("Apple", 2250, "silver", 2);
var SamsungGalaxyS6 = new Phone("Samsung", 1850, "black", 3);
var OnePlusOne = new Phone("OnePlus", 1600, "golden", 2);

//wywołanie metody
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

iPhone6S.guaranteeInfo();
SamsungGalaxyS6.guaranteeInfo();
OnePlusOne.guaranteeInfo();