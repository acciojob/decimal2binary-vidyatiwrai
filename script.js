function decimalToBinary(num){
       let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}
    
  
 return parseInt(binaryStr.split("").reverse().join(""))
 
module.exports = decimalToBinary;
