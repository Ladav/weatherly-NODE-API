console.log('the index page is loaded!');

const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const msgTwo = document.querySelector('.msg-2');
const msgOne = document.querySelector('.msg-1');

weatherform.addEventListener('submit', event => {
    event.preventDefault();

    const location = search.value;

    msgOne.textContent = 'Loading...';
    msgTwo.textContent = '';
    
    fetch(`/weather?address=${location}&unit=si&exclude=minutely`).then(response => { 
        response.json().then( data => {
            if(data.error) {
                msgOne.textContent = data.error;
            }
            else{
                // display forecast data
                msgOne.textContent = data.currently.temperature;
                msgTwo.textContent = data.location;
                console.log(data)
            }
        });
    });
});