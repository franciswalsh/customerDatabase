(function () {

  'use strict';
let randomCustomersArray = [];
let t = 0;
while ( t < 12){

  fetch('https://randomuser.me/api/')
    .then(
      function(response){
        if (response.status != 200){
          console.log("Houston, we have a problem" + response.status);
          return;
        }
        response.json().then(function(data){

            randomCustomersArray.push(data.results[0]);

          function customerInfoToHTML (user){
            return `
              <div class="customerBox">
                <img class="profPic" src="${user.picture.large}">
                <ul class="customerInfo">
                  <li class="name">${user.name.first} ${user.name.last}</li>
                  <li class="email">${user.email}</li>
                  <li class="streetAddress">${user.location.street}</li>
                  <li class="cityAddress">${user.location.city}</li>
                  <li class="phoneNumber">${user.phone}</li>
                </ul>
              </div>
            `;
          }

          let markup = `
            <div class="customers">
              ${customerInfoToHTML(randomCustomersArray[0])}
              ${customerInfoToHTML(randomCustomersArray[1])}
              ${customerInfoToHTML(randomCustomersArray[2])}
              ${customerInfoToHTML(randomCustomersArray[3])}
              ${customerInfoToHTML(randomCustomersArray[4])}
              ${customerInfoToHTML(randomCustomersArray[5])}
              ${customerInfoToHTML(randomCustomersArray[6])}
              ${customerInfoToHTML(randomCustomersArray[7])}
              ${customerInfoToHTML(randomCustomersArray[8])}
              ${customerInfoToHTML(randomCustomersArray[9])}
              ${customerInfoToHTML(randomCustomersArray[10])}
              ${customerInfoToHTML(randomCustomersArray[11])}
            </div>
          `

          document.body.innerHTML = markup;

        }
      )
      }
    )
    t++;
}


})();
