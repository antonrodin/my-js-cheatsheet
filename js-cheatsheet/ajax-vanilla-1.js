// Create an XHR Object
const xhr = new XMLHttpRequest();

// OPEN
xhr.open('GET', 'data.txt', true);

// LOAD
// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
        // console.log(this.responseText);
        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
}

//¡ Dont FORGET THE SEND!
xhr.send();

// OPTIONAL:
// **************************

// Used for spinners/loaders
xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
}

// OBSOLETE
// xhr.onreadystatechange = function() {
//   console.log('READYSTATE', xhr.readyState);
//   if(this.status === 200 && this.readyState === 4){
//     console.log(this.responseText);
//   }
// }

xhr.onerror = function () {
    console.log('Request error...');
}



// readyState Values
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready