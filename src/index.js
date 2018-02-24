// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    currency = +currency;
    let remainderH = 0, remainderQ = 0, remainderD = 0, remainderN = 0, remainderP = 0;
    let answer = {};

    if (currency > 10000){
        answer = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency <= 0){
        answer = {};
    } else{

        answer['H'] = Math.floor(currency / 50);

        if (answer['H'] > 0){
            remainderH = currency - (answer['H'] * 50);
        } else{
            remainderH = currency;
            delete answer['H'];
        }

        answer['Q'] = Math.floor(remainderH / 25);

        if (answer['Q'] > 0){
            remainderQ = remainderH - (answer['Q'] * 25);
        } else{
            remainderQ = remainderH;
            delete answer['Q'];
        }
        
        answer['D'] = Math.floor(remainderQ / 10);

        if (answer['D'] > 0){
            remainderD = remainderQ - (answer['D'] * 10);
        } else{
            remainderD = remainderQ;
            delete answer['D'];
        }

        answer['N'] = Math.floor(remainderD / 5);

        if (answer['N'] > 0){
            remainderN = remainderD - (answer['N'] * 5);
        } else{
            remainderN = remainderD;
            delete answer['N'];
        } 

        if (remainderN > 0){
            answer['P'] = remainderN;
        }

    }
    return answer;
}
