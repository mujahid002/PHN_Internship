
const reservationForm = document.getElementById('reservation-form');
const reservations = [];

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const guests = document.getElementById('guests').value;

  // Validate the name field
  if (name === '') {
    return alert('Please enter a name.');
  } else if (/^\d/.test(name)) {
    return alert('Name should not start with a number.');
  } else if (/\d$/.test(name)) {
    return alert('Name should not end with a number.');
  } else if (!/^[a-zA-Z ]+$/.test(name)) {
    return alert(`Name should only contain letters and spaces not like ${name}`);
  }

  // Validate the email field
  if (email === '') {
    return alert('Please enter an email address.');
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    return alert(`Please enter a valid email address not like ${email}`);
  }

  // Validate the phone field
  if (phone === '') {
    return alert('Please enter a phone number.');
  } else if (!/^\d{10}$/.test(phone)) {
    return alert(`Please enter a valid 10-digit phone number not like ${phone}`);
  }

  // Create a reservation object and add it to the reservations array
  const reservation = { date, time, name, email, phone, guests };
  reservations.push(reservation);
  if(reservations.length>=20){
    return alert("No bookings available")
  }
  else{
    console.log(reservations)

  }

  // Clear the form and display a success message
  reservationForm.reset();alert(`Reservation for ${name} on ${date} at ${time} submitted successfully!`);
});
