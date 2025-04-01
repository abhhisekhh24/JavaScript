// function makeTea(typeofTea){
//     return 'making ${typeofTea}';
//     console.log(test);
    
// }
// let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);


function orderTea(teaType){
    function confirmedOrder(){
        return 'order confirmed for chai' ;
    }
     return confirmedOrder()
}

let orderconfirmation = orderTea("chai")
console.log(orderconfirmation);

const calculateTotal = (price, quantity) => {
    return price * quantity
}

let totalcost = calculateTotal(499 * 100)