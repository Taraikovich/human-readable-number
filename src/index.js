module.exports = function toReadable (number) {
//const toReadable = number => {
    let read = '';
    let numberString = number + '';
    if ( numberString.length === 3) {
        if (numberString[0] === '1') {
            read += 'one hundred';
        } else if (numberString[0] === '2') {
            read += 'two hundred';
        } else if (numberString[0] === '3') {
            read += 'three hundred';
        } else if (numberString[0] === '4') {
            read += 'four hundred';
        } else if (numberString[0] === '5') {
            read += 'five hundred';
        } else if (numberString[0] === '6') {
            read += 'six hundred';
        } else if (numberString[0] === '7') {
            read += 'seven hundred';
        } else if (numberString[0] === '8') {
            read += 'eight hundred';
        } else if (numberString[0] === '9') {
            read += 'nine hundred';
        }
        if (numberString[1] + numberString[2] === '10') {
            read += ' ten';
        } else if (numberString[1] + numberString[2] === '11') {
            read += ' eleven';
        } else if (numberString[1] + numberString[2] === '12') {
            read += ' twelve';
        } else if (numberString[1] + numberString[2] === '13') {
            read += ' thirteen';
        } else if (numberString[1] + numberString[2] === '14') {
            read += ' fourteen';
        } else if (numberString[1] + numberString[2] === '15') {
            read += ' fifteen';
        } else if (numberString[1] + numberString[2] === '16') {
            read += ' sixteen';
        } else if (numberString[1] + numberString[2] === '17') {
            read += ' seventeen';
        } else if (numberString[1] + numberString[2] === '18') {
            read += ' eighteen';
        } else if (numberString[1] + numberString[2] === '19') {
            read += ' nineteen';
        }
        if (numberString[1] === '2') {
            read += ' twenty';
        } else if (numberString[1] === '3') {
            read += ' thirty';
        } else if (numberString[1] === '4') {
            read += ' forty';
        } else if (numberString[1] === '5') {
            read += ' fifty';
        } else if (numberString[1] === '6') {
            read += ' sixty';
        } else if (numberString[1] === '7') {
            read += ' seventy';
        } else if (numberString[1] === '8') {
            read += ' eighty';
        } else if (numberString[1] === '9') {
            read += ' ninety';
        }
        if (numberString[1] !== '1' && numberString[2] === '1') {
            read += ' one';
        } else if (numberString[1] !== '1' && numberString[2] === '2') {
            read += ' two';
        } else if (numberString[1] !== '1' && numberString[2] === '3') {
            read += ' three';
        } else if (numberString[1] !== '1' && numberString[2] === '4') {
            read += ' four';
        } else if (numberString[1] !== '1' && numberString[2] === '5') {
            read += ' five';
        } else if (numberString[1] !== '1' && numberString[2] === '6') {
            read += ' six';
        } else if (numberString[1] !== '1' && numberString[2] === '7') {
            read += ' seven';
        } else if (numberString[1] !== '1' && numberString[2] === '8') {
            read += ' eight';
        } else if (numberString[1] !== '1' && numberString[2] === '9') {
            read += ' nine';
        }
    } else if (numberString.length === 2) {
        if (numberString[0] + numberString[1] === '10') {
            read += 'ten';
        } else if (numberString[0] + numberString[1] === '11') {
            read += 'eleven';
        } else if (numberString[0] + numberString[1] === '12') {
            read += 'twelve';
        } else if (numberString[0] + numberString[1] === '13') {
            read += 'thirteen';
        } else if (numberString[0] + numberString[1] === '14') {
            read += 'fourteen';
        } else if (numberString[0] + numberString[1] === '15') {
            read += 'fifteen';
        } else if (numberString[0] + numberString[1] === '16') {
            read += 'sixteen';
        } else if (numberString[0] + numberString[1] === '17') {
            read += 'seventeen';
        } else if (numberString[0] + numberString[1] === '18') {
            read += 'eighteen';
        } else if (numberString[0] + numberString[1] === '19') {
            read += 'nineteen';
        }
        if (numberString[0] === '2') {
            read += 'twenty';
        } else if (numberString[0] === '3') {
            read += 'thirty';
        } else if (numberString[0] === '4') {
            read += 'forty';
        } else if (numberString[0] === '5') {
            read += 'fifty';
        } else if (numberString[0] === '6') {
            read += 'sixty';
        } else if (numberString[0] === '7') {
            read += 'seventy';
        } else if (numberString[0] === '8') {
            read += 'eighty';
        } else if (numberString[0] === '9') {
            read += 'ninety';
        }
        if (numberString[0] !== '1' && numberString[1] === '1') {
            read += ' one';
        } else if (numberString[0] !== '1' && numberString[1] === '2') {
            read += ' two';
        } else if (numberString[0] !== '1' && numberString[1] === '3') {
            read += ' three';
        } else if (numberString[0] !== '1' && numberString[1] === '4') {
            read += ' four';
        } else if (numberString[0] !== '1' && numberString[1] === '5') {
            read += ' five';
        } else if (numberString[0] !== '1' && numberString[1] === '6') {
            read += ' six';
        } else if (numberString[0] !== '1' && numberString[1] === '7') {
            read += ' seven';
        } else if (numberString[0] !== '1' && numberString[1] === '8') {
            read += ' eight';
        } else if (numberString[0] !== '1' && numberString[1] === '9') {
            read += ' nine';
        }
    } else if (numberString.length === 1) {
        if (numberString[0] === '1') {
            read += 'one';
        } else if (numberString[0] === '2') {
            read += 'two';
        } else if (numberString[0] === '3') {
            read += 'three';
        } else if (numberString[0] === '4') {
            read += 'four';
        } else if (numberString[0] === '5') {
            read += 'five';
        } else if (numberString[0] === '6') {
            read += 'six';
        } else if (numberString[0] === '7') {
            read += 'seven';
        } else if (numberString[0] === '8') {
            read += 'eight';
        } else if (numberString[0] === '9') {
            read += 'nine';
        }else if (numberString[0] === '0') {
            read += 'zero';
        }
    }
    return read;

}





