
//google led me to this conclusion.  Not sure what the => does.
function leetspeak(n) {
    var chars = { 'a': 4, "A": 4, "e": 3, "E": 3, "g": 6, "G": 6, "i": 1, "I": 1, "o": 0, "O": 0, "s": 5, "S": 5, "t": 7, "T": 7 };
    var s = n;
    s = s.replace(/[aAeEgGiIoOsStT]/g, m => chars[m]);
    console.log(s);
}


leetspeak("You like Huey Lewis and the News?  Their early work was a little too new wave for my taste. \nBut when Sports came out in '83, I think they really came into their own, commercially and artistically. \nThe whole album has a clear, crisp sound, and a new sheen of consummate professionalism that really gives the songs a big boost. \nHe's been compared to Elvis Costello, but I think Huey has a far more bitter, cynical sense of humor.In '87, Huey released this; Fore!, their most accomplished album. \nI think their undisputed masterpiece is \"Hip To Be Square\". A song so catchy, most people probably don't listen to the lyrics. \nBut they should, because it's not just about the pleasures of conformity and the importance of trends. It's also a personal statement about the band itself. Hey, Paul!")

