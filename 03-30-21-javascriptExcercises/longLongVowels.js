function longLongVowels(n){
    var chars ={"A": "AAAAA", "a": "aaaaa", "e": "eeeee", "E": "EEEEE", "e": "eeeee", "I": "IIIII", "i": "iiiii", "o": "ooooo" ,"O": "OOOOO", "U": "UUUUU", "u": "UUUUU"};
    var s = n;
    s = s.replace(/[aAeEiIoOuU]/g, m => chars[m]); 
    console.log(s);
}

longLongVowels("I know kung fu!!!");