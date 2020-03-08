const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var str = "";
    for(var i = 0; i < expr.length; i+=2) {
        if (i %10 == 0)
            str += "|";
        if((expr[i] + expr[i+1]) == "00")
            continue;
        else if((expr[i] + expr[i+1]) == "10")
            str += ".";
        else if((expr[i] + expr[i+1]) == "11")
            str += "-";
        else if((expr[i] + expr[i+1]) == "**") {
            str += " ";
            i += 8;
        }
    }
    var arr = str.split("|");
    arr.shift();
    var res = "";
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == " ") {
            res += " "
            continue;
        }
        else {
            res += MORSE_TABLE[arr[i]];
        }
    }
    return res;
}

module.exports = {
    decode
}