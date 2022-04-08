const d = new Date();
var day = d.getDate()
var month = d.getMonth()
var year = d.getFullYear()
var dd = day + "--" + month + "--" + year
var aa =document.getElementById('ddd')
//aa.innerHTML= d.getFullYear()

document.write(dd)


function extMsg()
        {
        alert("Message from ext.js");
        }

  

