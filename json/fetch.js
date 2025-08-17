let fatchData = async () => {
 let url = 'http://localhost:3000/hotel'
 
 let res = await fetch(url, {method:"GET"})

 let data = await res.json()

 let show = document.querySelector('.showTable1')

 data.map((e)=>{
    show.innerHTML += `
        <tr>
        <td>${e.name}</td>
        <td>${e.aadha}</td>
        <td>${e.city}</td>
        <td>${e.checkin}</td>
        <td>${e.checkout}</td>
        <td>${e.person}</td>
        <td onclick="del('${e.id}')">DELETE</td>
        </tr>
    `
 })

 console.log(data)
}

fatchData()

let del = (id) =>{

    let url =  `http://localhost:3000/hotel/${id}`
    fetch(url, {method:"DELETE"})
}

