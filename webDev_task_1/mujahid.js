const reservationForm = document.getElementById('reservation-form');
// const reservationStatus = document.getElementById('reservation-status');
let arr=[]
reservationForm.addEventListener('submit', (e) => {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    for(let i=0;i<name.toStringify().length;i++){
        if(name[i]==" " || name[i]==parseInt(name[i])){
            return alert(`enter correct input for ${name}`)
        }
    }
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const guests = document.getElementById('guests').value;
    e.preventDefault();
    arr.push({
        date,
        time,
        name,
        email,
        phone,
        guests
      })

    })
    console.log(arr)

  // Send the reservation data to the server
//   const url = `http://127.0.0.1:5500/mujahid.html?date=${date}&time=${time}&guests=${guests}&name=${name}&email=${email}&phone=${phone}`;
//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // display the server's response data
//   })
//   .catch(error => {
//     console.error(error);
//     // display an error message to the customer
//   });
// });
