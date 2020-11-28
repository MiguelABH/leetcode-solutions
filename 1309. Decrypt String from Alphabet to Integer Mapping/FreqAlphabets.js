/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const codes = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
  };
  
  // case 1: number at i, # at i+2. Grab everything from i to i+2. i+=2.
  // case 2: number at i, no # at i+2. Gran just chartAt i. i++.
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      const currentNumber = `${s[i]}${s[i + 1]}`;
      result = `${result}${codes[`${currentNumber}#`]}`;
      i = i + 2;
    } else {
      if (s[i] !== '#') {
        const currentNumber = `${s[i]}`;
        result = `${result}${codes[currentNumber]}`; 
      }
    }
  }
  
  return result;
  
};