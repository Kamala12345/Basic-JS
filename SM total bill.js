//supermarket billing

var rates={Carrot:10,Apple:200,Guava:50};
var discount={Apple:10};
let taxes={Carrot:5,Guava:10};
var purchases=[{item:'Carrot',units:20},{item:'Apple',units:2},{item:'Guava',units:1}];

var getDiscountPercent= function (productName)
{
    return discount.hasOwnProperty(productName)== 0? 0 :discount[productName]/100;

 }
 
 var getTaxPercent= function (productName)
 {
     return taxes.hasOwnProperty(productName)== 0? 0 :taxes[productName]/100;
 
  }
  var getUnitPrice= function (itemName)
  {
      return rates.hasOwnProperty(itemName)== 0? 0 :rates[itemName];
  
      
   }

   var getLineItemPrice= function (lineItem)
   {
    var lineItemPrices = [];
    for(var i=0;i<lineItem.length;i++)
    {
        let beforediscandtax=getUnitPrice(lineItem[i].item)*lineItem[i].units;
        let discountamt=beforediscandtax*getDiscountPercent(lineItem[i].item);
        let taxeamt=(beforediscandtax-discountamt)*getTaxPercent(lineItem[i].item);
        let totalamt=beforediscandtax-discountamt+taxeamt;
        lineItemPrices.push({"item": lineItem[i].item,"price":totalamt});
        }
        return lineItemPrices;
   }

   var getSum=function()
   {
     var finalamt=getLineItemPrice(purchases);
     var finalPrice=0;
     for(var j=0;j<finalamt.length;j++)
     {
        finalPrice=finalPrice+finalamt[j].price;
     }
     return finalPrice;
   }

   var main=function main()
   {
    console.log(getSum());
   }

   main();