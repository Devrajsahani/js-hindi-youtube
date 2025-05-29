const form = document.querySelector('form')

// if we want to give this value of hegith before then after refreshing the value will not be stored.
form.addEventListener('submit',function(e){
    e.preventDefault() 
    
    // prevent default stops the default things from happening, like reloading of page, submisison of the page, etc. it allows us to take control of what is happending in the browser.
    const height = parseInt (document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = (document.querySelector('#results'));

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML ="Please give a valid height"
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML ="Please give a valid weight";}
    else if(weight&&height==='' || weight&&height<0 || isNaN(weight&&height)){
        results.innerHTML ="Please give a valid height and weight";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<span>${bmi}</span>`;
    }
});
