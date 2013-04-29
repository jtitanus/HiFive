"use strict";


function NameGen() {
// Use the following variable to specify
// the number of random words
    var wordsCount = 28;

    var words = new Array(wordsCount);

// Use the following variables to
// define your random words:
    words[0] = "urbansky";
    words[1] = "czarevitch";
    words[2] = "brightwork";
    words[3] = "verkrampte";
    words[4] = "protectrix";
    words[5] = "nudibranch";
    words[6] = "grandchild";
    words[7] = "newfangled";
    words[8] = "flugelhorn";
    words[9] = "mythologer";
    words[10] = "pluperfect";
    words[11] = "jellygraph";
    words[12] = "quickthorn";
    words[13] = "rottweiler";
    words[14] = "technician";
    words[15] = "cowpuncher";
    words[16] = "middlebrow";
    words[17] = "jackhammer";
    words[18] = "triphthong";
    words[19] = "wunderkind";
    words[20] = "dazzlement";
    words[21] = "jabberwock";
    words[22] = "witchcraft";
    words[23] = "pawnbroker";
    words[24] = "thumbprint";
    words[25] = "motorcycle";
    words[26] = "cryptogram";
    words[27] = "torchlight";
    words[28] = "bankruptcy";  

    this.pickRandomWord = function() {
        // Generate a random number between 1 and wordsCount
        var rnd = Math.ceil(Math.random() * wordsCount);
        return words[rnd];
    };
}