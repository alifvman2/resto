const formatRupiah = (number) => {
    const numString = number.toString();
  
    // Split the number into integer and decimal parts
    const [integerPart, decimalPart = ''] = numString.split('.');
  
    // Format the integer part
    const formattedInteger = integerPart
      .split('')
      .reverse()
      .map((char, index) => (index !== 0 && index % 3 === 0 ? `${char}.` : char))
      .reverse()
      .join('');
  
    // Combine the formatted integer part with the decimal part
    const formattedRupiah = `Rp ${formattedInteger}${decimalPart ? `.${decimalPart}` : ''}`;
  
    return formattedRupiah;
  };
  
  export default formatRupiah;
  