const os = require('os');

//info about current user
console.log(os.userInfo()); 

//system uptime in secs
console.log(`Uptime : ${os.uptime}`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freemem : os.freemem()
}
console.log(currentOS);