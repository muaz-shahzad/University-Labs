const os=require("os")
console.log("OS module methods:\n");
console.log("os.arch: "+os.arch());
console.log("os.freemem:"+os.freemem()/1024/1024/1024);
console.log("os.totalmem: "+os.totalmem()/1024/1024/1024);
console.log("os.hostname: "+os.hostname());
console.log("os.platform: "+ os.platform());
console.log("os.release: "+os.release());
console.log("os.tmpdir: "+os.tmpdir());
console.log("os.type: "+os.type());
