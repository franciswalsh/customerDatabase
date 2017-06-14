(function () {

  'use strict';
  fetch('https://randomuser.me/api/?results=12')
    .then(
      function(response){
        if (response.status != 200){
          console.log("Houston, we have a problem" + response.status);
          return;
        }
        response.json().then(function(data){

          let users = data.results;

            function customerInfoToHTML (user){
              return `
                <div class="customerBox">
                  <div class="profPicContainer">
                  <img class="profPic" src="${user.picture.large}">
                  </div>
                  <ul class="customerInfo">
                    <li class="name">${user.name.first} ${user.name.last}</li>
                    <li class="email">${user.email}</li>
                    <li class="streetAddress">${user.location.street}</li>
                    <li class="cityAddress">${user.location.city}, ${user.location.state} ${user.location.postcode}</li>
                    <li class="phoneNumber">${user.phone}</li>
                  </ul>
                </div>
              `;

            }
            let markup =
            ` <h1 id="mainHeader">Internal Company Directory</h1>
              <div class="customers">
                ${customerInfoToHTML(users[0])}
                ${customerInfoToHTML(users[1])}
                ${customerInfoToHTML(users[2])}
                ${customerInfoToHTML(users[3])}
                ${customerInfoToHTML(users[4])}
                ${customerInfoToHTML(users[5])}
                ${customerInfoToHTML(users[6])}
                ${customerInfoToHTML(users[7])}
                ${customerInfoToHTML(users[8])}
                ${customerInfoToHTML(users[9])}
                ${customerInfoToHTML(users[10])}
                ${customerInfoToHTML(users[11])}
              </div>
            `

            document.body.innerHTML = markup;
          }
        )
        }
      )
})();
