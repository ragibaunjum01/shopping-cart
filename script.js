document.getElementById('caseIncrease').addEventListener('click',function(){
    handleProductChange('case', true);
});
document.getElementById('caseDecrease').addEventListener('click',function(){
    handleProductChange('case', false);
})
document.getElementById('phoneIncrease').addEventListener('click',function(){
    handleProductChange('phone', true);
})
document.getElementById('phoneDecrease').addEventListener('click',function(){
    handleProductChange('phone', false);
})
function handleProductChange(product, isIncrease) {
    const productCount = document.getElementById(product+'Count');
    const countProductNumber = parseInt(productCount.value);
    let newProductCount = countProductNumber;
    if(isIncrease == true){
        newProductCount = countProductNumber + 1;
    }
    if(isIncrease == false && countProductNumber > 0){
        newProductCount = countProductNumber - 1;
    }
    productCount.value = newProductCount;
    let totalPrice = 0;
    if(product == 'phone'){
        totalPrice = 1219 * newProductCount;
    }
    if(product == 'case'){
        totalPrice = 59 * newProductCount;
    }
    document.getElementById(product+'Price').innerText = totalPrice;
    calculateTotal();
}
function calculateTotal(){
    const phoneCountNumber = getInputValue('phone')
    const caseCountNumber = getInputValue('case')

    const subTotal = phoneCountNumber * 1219 + caseCountNumber * 59;
    document.getElementById('subTotal').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax').innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}
function getInputValue(product){
    const productCount = document.getElementById(product+'Count');
    const productCountNumber = parseInt(productCount.value);
    return productCountNumber;
}


