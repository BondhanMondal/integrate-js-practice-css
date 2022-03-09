function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
            productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = parseInt(productNumber) * price;

    // calling function to calculate total
    calculateTotal();
}

function getProductNumber(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getProductNumber('phone') * 1219;
    const caseTotal = getProductNumber('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal * 10) / 100;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}





//phone incerase 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)

});

//phone decrese
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)

});

//case increase
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

//case decrease
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});