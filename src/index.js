const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  const arrDecode = {
    '10': '.',
    '11': '-',
  }

  for (let i = 0, step = 10; i < expr.length; i += step) {
    const encodedLetter = expr.substring(i, i + step);

    const decodeLetter = (letter) => {
      let decodedLetter = '';

      for (let i = 0, step = 2; i < letter.length; i += step) {
        const ch = letter.substring(i, i + step);
        if (ch in arrDecode) {
          decodedLetter += arrDecode[ch];
        }
      }
      return decodedLetter;
    }

    if (encodedLetter === '**********') {
      result += ' ';
      continue;
    }

    const decodedLetter = decodeLetter(encodedLetter);

    result += (MORSE_TABLE[decodedLetter]);
  }

  return result;

  // let arrLetter = [];
  // let str = '';
  // let count = 0;

  // for (let ch of expr) {
  //   str += ch;
  //   count++;
  //   if (count === 10) {
  //     arrLetter.push(str)
  //     str = '';
  //     count = 0;
  //   }
  // }

  // return arrLetter.map(item => {
  //   let letter = '';
  //   if (item === '**********') {
  //     letter = ' ';
  //     return letter;
  //   }
  //   for (let i = 0; i <= item.length; i = i + 2) {
  //     if (item[i] === '1' && item[i + 1] === '1') letter += '-';
  //     if (item[i] === '1' && item[i + 1] === '0') letter += '.';
  //   }
  //   return letter;
  // }).map(letter => {
  //   if (letter === ' ') return ' ';
  //   if (letter in MORSE_TABLE) {
  //     return MORSE_TABLE[letter]
  //   }
  // }).join('');

}

module.exports = {
  decode
}