const boughtCandyPrices = [];
function addCandy(candyType, weight)

{
    if (candyType==="sweet"){
        boughtCandyPrices.push ("sweet" , weight * 0.5);
        console.log("The Price of " + candyType + " for " + weight + " gram is " + (weight * 0.5));
        return;
    }
    else if (candyType==="chocolate"){
        boughtCandyPrices.push( "chocolate", weight*0.7);
        console.log("The Price of " + candyType + " for " + weight + " gram is " + (weight * 0.7));
        return;
    }
    else if (candyType==="toffee"){
        boughtCandyPrices.push("toffee", weight*1.1);
        console.log("The Price of " + candyType + " for " + weight + " gram is " + (weight * 1.1));
        return;
    }
    else (candyType==="chewing-gum")
        boughtCandyPrices.push("chewing-gum", weight*0.03);
        console.log("The Price of " + candyType + " for " + weight + " gram is " + (weight * 0.03));
        return;           
}

const amountToSpend = Math.random() * 100;
let totalPrice = 0;

function canBuyMoreCandy()
{
    
    for (let i=0; i < boughtCandyPrices.length; i++) 
{
    totalPrice+= boughtCandyPrices[i];
}
if ( totalPrice < amountToSpend) {
    return "You can buy more:"
}
else {
    return "You can not buy more:"
}
}

addCandy("toffee", 17);

console.log(canBuyMoreCandy());