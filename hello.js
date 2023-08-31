const fs = require('fs')
//console.log(fs);
fs.writeFile('./hot-fix.txt','hot-fix$$$', err =>{
    if(err){
        console.log("寫入失敗");
        return
    }
    console.log("寫入成功");
})
