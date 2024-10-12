document.getElementById('cash-out-button')
.addEventListener('click', function(event){
      event.preventDefault();
      const cashOut = getInputValueFaildById('cash-out-money');
      const pinNumber = getInputValueFaildById('cash-out-pin');
      console.log(pinNumber);

      if(pinNumber === 1234){
      const balance = getTextValueFaildById('account-balance');
      const newBalance = balance - cashOut;
      console.log(newBalance);
      document.getElementById('account-balance').innerText = newBalance;
      
      
            
      }
      else{
            alert('Fail to cash out Please try again')
      }
      
      
})