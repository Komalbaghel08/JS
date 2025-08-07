
let Book = () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#aadhar").value;
    let city = document.querySelector("#city").value;
    let aadhar = document.querySelector("#checkin").value;
    let seatNo = document.querySelector("#checkout").value;
    let date = document.querySelector("#person").value;

    let url = 'http://localhost:3000/hotel';

    fetch(url, {
        method: 'POST',
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            aadhar: aadhar,
            email: email,
            city: city,
            seatNo: seatNo,
            date: date
        })
    })

    location.href = 'crud.html';
    return false;
}