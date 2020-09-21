
let dataToPost = {};
document.getElementById('submitEvent').addEventListener('click',function(){
    dataToPost = {
        title:document.getElementById('title').value,
        date:document.getElementById('date').value,
        website:document.getElementById('website').value,
        details:document.getElementById('details').value
    }
    fetch('http://localhost:5000/addevent',{
        method:'post',
        mode:'no-cors',
        body:JSON.stringify(dataToPost)
    }).then((res) => console.log(res) )
})
