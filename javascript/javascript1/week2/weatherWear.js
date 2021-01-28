function weatherClothes(temp){
    
    if (temp<0){
        return "Be ready for expected snow and wear heavy jackets and snow shoes";
    }
    else if (temp > 0 && temp <= 10){
        return " It is suggested you should wear jackets and warm trousers";
    }
    else if (temp > 10 && temp <= 20){
        return " Wear normal warm cloths and keep ready 'rain coat' for expected rain";
    }
    else {
        return "The weather is sunny and pleasent , a T-shirt and Shorts trousers are recommended";
    }
}
console.log(weatherClothes(-2));