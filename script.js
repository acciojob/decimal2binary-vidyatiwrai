function decimalToBinary(decimal) {
  let binary = '';
  let quotient = decimal;

  while (quotient !== 0) {
    const remainder = quotient % 2;
    binary = remainder + binary;
    quotient = Math.floor(quotient / 2);
  }

  return binary;
}
    
  
 return parseInt(binaryStr.split("").reverse().join(""))
 
module.exports = decimalToBinary;
