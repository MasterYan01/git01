const fs = require('fs')
//console.log(fs);
fs.writeFile('./座右銘.txt','三人行,則有我師焉@@@', err =>{
    if(err){
        console.log("寫入失敗");
        return
    }
    console.log("寫入成功");
})
