document.getElementById('add-money-button')
.addEventListener('click', function(event){
      event. preventDefault();
    const addMoney = getInputValueFaildById('input-add-money');

    const pinNumber = getInputValueFaildById('input-pin-number');
    console.log(pinNumber);
    if(pinNumber === 1234){
     const balance = getTextValueFaildById('account-balance');
     const newBalance = addMoney + balance;
     document.getElementById('account-balance').innerText = newBalance;
     
     

      
    }
    else{
      alert('Faild to add Money  ! please try again')
    }
    
    
    
      
})