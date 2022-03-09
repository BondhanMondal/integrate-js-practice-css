





//phone incerase 
document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneNumberInput = document.getElementById('phone-number');
    let phoneNumberValue = parseInt(phoneNumberInput.value);
    phoneNumberValue = phoneNumberValue + 1;
    phoneNumberInput.value = phoneNumberValue;
//updating phone total
    const phoneTotalField = document.getElementById('phone-total');
    //const phoneTotalValue = parseInt(phoneTotalField.innerText);
    //const phoneTotal = phoneNumberValue * 1219;
    phoneTotalField.innerText = phoneNumberValue * 1219;

})

//phone decrese
document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneNumberInput = document.getElementById('phone-number');
    let phoneNumberValue = parseInt(phoneNumberInput.value);
    if(phoneNumberValue > 0){
        phoneNumberValue = phoneNumberValue - 1;
        phoneNumberInput.value = phoneNumberValue;
    }
    const phoneTotalField = document.getElementById('phone-total');
    phoneTotalField.innerText = phoneNumberValue * 1219;

})