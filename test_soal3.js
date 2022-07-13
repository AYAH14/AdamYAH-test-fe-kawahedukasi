const segitigaLeft = (length) => {
    let segitigaL = '';
    for (let i=0; i<length; i++) {
        for (let a=0; a<=i; a++) {
            segitigaL += '*';
        }
        segitigaL += '\n';
    }
    return segitigaL;
}

const segitigaRight = (length) => {
    let segitigaR = '';
    for (let i=length; i>0; i--) {
        for (let a=1; a<=length; a++) {
            if (a >= i) {
                segitigaR += '*';
            } else {
                segitigaR += ' '
            }
        }
        segitigaR += '\n';
    }
    return segitigaR;
}
console.log(segitigaLeft(6)); 
console.log(segitigaRight(6)); 