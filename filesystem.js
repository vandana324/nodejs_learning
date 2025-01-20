// const fs = require('fs');
// const input = process.argv;

// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[3] == 'remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input")
// }


// const fs = require('fs');

// const path = require('path');
// const dirpath = path.join(__dirname,'file');
// console.log(dirpath)

// for(let i =0;i<5;i++){
//     fs.writeFileSync(dirpath+"hello"+i+".txt","this is file");
// }

const fs = require('fs');

const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/apple.txt`;

// fs.writeFileSync(filepath,'this is simple text file')

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated");
// })


fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>
{
    if(!err) console.log("file is renamed")
})

fs.unlinkSync(`${dirpath}/fruit.txt`)


//buffer mean tempory file memory location
