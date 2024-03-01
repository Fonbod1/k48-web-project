//html elements
var input = document.querySelector('input');
var button = document.querySelector('button');
var result = document.querySelector('.result');
var error = document.querySelector('.error');

button.addEventListener('click', createLink);

function createLink() {
    var api_key = "pk_zwGotKqsRON9Pp8e";
    var short_link = "";
    if (input.value) {
         
        if(/\b.com\b/.test(input.value)){
            var data = {
                "domain": "bzh0.short.gy",
                "originalURL": input.value
            };
            fetch('https://api.short.io/links/public', {
                method: 'post',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': api_key
                },
                body: JSON.stringify(data)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                short_link = data.shortURL;
                console.log(data);
                result.textContent = short_link;
                result.style.display = 'block';
            })
        }        

        else if(!/\b.com\b/.test(input.value) && input.value){
            result.style.display = 'block'; 
            result.textContent = 'lien invalide !';
        }
        error.style.display = 'none';
    }
   
    else{
        result.style.display = 'none'; 
        error.style.display = 'block';
        error.textContent = 'Veuiller remplir le champ !';
    }
}

