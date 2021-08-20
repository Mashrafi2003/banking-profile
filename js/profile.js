function getInputValue(inputID){
    const inputField =document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
   }

function updateTotalField(totalFieldId,amount){
    const totalElement= document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    totalElement.innerText =parseFloat(totalText) + parseFloat(amount);
}

function updateBalance(depositAmount , isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    if(isAdd == true){
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmount);
    }
    else{
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(depositAmount);
    }

}
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount>0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true)
    }
});

// Handle Withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount>0){
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount, false);

    }


});

