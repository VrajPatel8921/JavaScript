let form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    let results=document.querySelector('#results');

    if(height===''|| height<0 || isNaN(height)){
        results.innerHTML=`Please Enter Valid Height ${height}` ;
    }
    else if(weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML=`Please Enter Valid weight ${weight}` ;
    }
    else{
        let bmi=(weight /((height * height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}<span/>`;
    }
    
})