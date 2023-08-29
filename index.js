function kannadatransliterate(type, direction, input, strictnasalisation, ISOOnly) {
    if (input && direction == "latin2kannada") {
        let latinToKannada;
        let diacritics;
    
        const isoAll = {"0":"೦","1":"೧","2":"೨","3":"೩","4":"೪","5":"೫","6":"೬","7":"೭","8":"೮","9":"೯"," ":"  ",".":".",",":",",";":";","?":"?","!":"!","\"":"\"","'":"'","(":"(",")":")",":":":","+":"+","=":"=","/":"/","-":"-","<":"<",">":">","*":"*","|":"|","\\":"\\","₹":"₹","{":"{","}":"}","[":"[","]":"]","_":"_","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","a":"ಅ","ā":"ಆ","i":"ಇ","ī":"ಈ","u":"ಉ","ū":"ಊ","r̥":"ಋ","r̥̄":"ೠ","l̥":"ಌ","l̥̄":"ೡ","e":"ಎ","ē":"ಏ","ai":"ಐ","o":"ಒ","ō":"ಓ","au":"ಔ","aṁ":"ಅಂ","aṃ":"ಅಂ","āṁ":"ಆಂ","āṃ":"ಆಂ","iṁ":"ಇಂ","iṃ":"ಇಂ","uṁ":"ಉಂ","uṃ":"ಉಂ","eṃ":"ಎಂ","oṃ":"ಒಂ","aḥ":"ಅಃ","nh":"\\u0CDD","ka":"ಕ","kha":"ಖ","ga":"ಗ","gha":"ಘ","ṅa":"ಙ","ca":"ಚ","cha":"ಛ","ja":"ಜ","jha":"ಝ","ña":"ಞ","ṭa":"ಟ","ṭha":"ಠ","ḍa":"ಡ","ḍha":"ಢ","ṇa":"ಣ","ta":"ತ","tha":"ಥ","da":"ದ","dha":"ಧ","na":"ನ","pa":"ಪ","pha":"ಫ","ba":"ಬ","bha":"ಭ","ma":"ಮ","ya":"ಯ","ra":"ರ","ṟa":"ಱ","la":"ಲ","va":"ವ","śa":"ಶ","ṣa":"ಷ","sa":"ಸ","ha":"ಹ","ḷa":"ಳ","ḻa":"ೞ","fa":"ಫ಼","za":"ಜ಼","x":"\u200A","ẖ":"ೱ","ḫ":"ೲ"};
    
        const iso_dia = {"a":"","ā":"ಾ","i":"ಿ","ī":"ೀ","u":"ು","ū":"ೂ","r̥":"ೃ","r̥̄":"ೄ","l̥":"ೢ","l̥̄":"ೣ","e":"ೆ","ē":"ೇ","ai":"ೈ","o":"ೊ","ō":"ೋ","au":"ೌ","aṇ":"ಂ","aṁ":"ಂ","aṃ":"ಂ","āṁ":"ಾಂ","iṁ":"ಿಂ","īṁ":"ೀಂ","uṁ":"ುಂ","ūṁ":"ೂಂ","r̥ṁ":"ೃಂ","r̥̄ṁ":"ೄಂ","l̥ṁ":"ೢಂ","l̥̄ṁ":"ೣಂ","eṁ":"ೆಂ","ēṁ":"ೇಂ","aiṁ":"ೈಂ","oṁ":"ೊಂ","ōṁ":"ೋಂ","auṁ":"ೌಂ","āṃ":"ಾಂ","iṃ":"ಿಂ","īṃ":"ೀಂ","uṃ":"ುಂ","ūṃ":"ೂಂ","ṛṃ":"ೃಂ","ṝṃ":"ೄಂ","eṃ":"ೆಂ","ēṃ":"ೇಂ","aiṃ":"ೈಂ","oṃ":"ೊಂ","ōṃ":"ೋಂ","auṃ":"ೌಂ","aḥ":"ಃ","ʾ":"಼","m̐":"ಀ","'":"ಽ","’":"ಽ","˜":"ಁ","ã":"ಁ","ā̃":"ಾಁ","ĩ":"ಿಁ","ī̃":"ೀಁ","ũ":"ುಁ","ū̃":"ೂಁ","r̥̃":"ೃಁ","ṝ̃":"ೄಁ","ẽ":"ೆಁ","ē̃":"ೇಁ","õ":"ೊಁ","ō̃":"ೋಁ"};
    
        const iastAll = {"0":"೦","1":"೧","2":"೨","3":"೩","4":"೪","5":"೫","6":"೬","7":"೭","8":"೮","9":"೯"," ":"  ",".":".",",":",",";":";","?":"?","!":"!","\"":"\"","'":"'","(":"(",")":")",":":":","+":"+","=":"=","/":"/","-":"-","<":"<",">":">","*":"*","|":"|","\\":"\\","₹":"₹","{":"{","}":"}","[":"[","]":"]","_":"_","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","a":"ಅ","ā":"ಆ","i":"ಇ","ī":"ಈ","u":"ಉ","ū":"ಊ","ṛ":"ಋ","ṝ":"ೠ","e":"ಎ","ē":"ಏ","ai":"ಐ","o":"ಒ","ō":"ಓ","au":"ಔ","aṃ":"ಅಂ","āṃ":"ಆಂ","eṃ":"ಎಂ","oṃ":"ಒಂ","aḥ":"ಅಃ","nh":"\\u0CDD","ka":"ಕ","kha":"ಖ","ga":"ಗ","gha":"ಘ","ṅa":"ಙ","ca":"ಚ","cha":"ಛ","ja":"ಜ","jha":"ಝ","ña":"ಞ","ṭa":"ಟ","ṭha":"ಠ","ḍa":"ಡ","ḍha":"ಢ","ṇa":"ಣ","ta":"ತ","tha":"ಥ","da":"ದ","dha":"ಧ","na":"ನ","pa":"ಪ","pha":"ಫ","ba":"ಬ","bha":"ಭ","ma":"ಮ","ya":"ಯ","ra":"ರ","ṟa":"ಱ","la":"ಲ","va":"ವ","śa":"ಶ","ṣa":"ಷ","sa":"ಸ","ha":"ಹ","ḷa":"ಳ","ḻa":"ೞ","fa":"ಫ಼","za":"ಜ಼","x":"\u200A","ẖ":"ೱ","ḫ":"ೲ"}; // Removed as IAST ḷ represents : ಳ and ಌ "ḷ":"ಌ","ḹ":"ೡ
    
        const iast_dia = {"a":"","ā":"ಾ","i":"ಿ","ī":"ೀ","u":"ು","ū":"ೂ","ṛ":"ೃ","ṝ":"ೄ","e":"ೆ","ē":"ೇ","ai":"ೈ","o":"ೊ","ō":"ೋ","au":"ೌ","aṇ":"ಂ","aṃ":"ಂ","āṃ":"ಾಂ","iṃ":"ಿಂ","īṃ":"ೀಂ","uṃ":"ುಂ","ūṃ":"ೂಂ","ṛṃ":"ೃಂ","ṝṃ":"ೄಂ","eṃ":"ೆಂ","ēṃ":"ೇಂ","aiṃ":"ೈಂ","oṃ":"ೊಂ","ōṃ":"ೋಂ","auṃ":"ೌಂ","aḥ":"ಃ","ʾ":"಼","m̐":"ಀ","'":"ಽ","’":"ಽ","˜":"ಁ","ã":"ಁ","ā̃":"ಾಁ","ĩ":"ಿಁ","ī̃":"ೀಁ","ũ":"ುಁ","ū̃":"ೂಁ","r̥̃":"ೃಁ","ṝ̃":"ೄಁ","ẽ":"ೆಁ","ē̃":"ೇಁ","õ":"ೊಁ","ō̃":"ೋಁ"}; // Removed as IAST ḷ represents : ಳ and ೢ  ೣ  "ḷ":"ೢ","ḹ":"ೣ",
    
    
        let anuswaraEndings = ['ṁ','ṇ','ṅ','ñ','n','m'];
        const letterAfterAnuswara = ['k','g','c','j','ṭ','ḍ','t','d','p','b','y','r','v','ś','ṣ','s','h']; 
    
        /* const longVyanjana = ['k','g','c','j','ṭ','ḍ','t','d'];
        const anunasika = {"ã":"a","ā̃":"ā","ĩ":"i","ī̃":"ī","ũ":"u","ū̃":"ū","r̥̃":"r̥","ṝ̃":"r̥̄","ẽ":"e","ē̃":"ē","õ":"o","ō̃":"ō"}; */
    
        let resultKn = "";
    
        // ISSUE ḷ represents : ಳ (ISO 15919) and ಌ / ೢ (IAST)
        // input = input.replaceAll("ḷa"," ḷa").replaceAll("ḷā"," ḷā").replaceAll("ḷō"," ḷō");
    
        if (type == "ISO" && strictnasalisation == true) {
          // ISO 15919 only Transliteration then convert IAST to ISO equivalent
          latinToKannada = isoAll;
          diacritics = iso_dia;
          input = input.replaceAll("Ṃ","Ṁ").replaceAll("Ã","m̐").replaceAll("ṃ","ṁ").replaceAll("ã","m̐");
          // Kannada distinguishes between short & long vowels, thus this has been commented out : .replaceAll("E","Ē").replaceAll("O","Ō").replaceAll("Ṛ","R̥").replaceAll("Ṝ","R̥̄").replaceAll("Ḷ","L̥").replaceAll("Ḹ","L̥̄").replaceAll("e","ē").replaceAll("o","ō").replaceAll("ṛ","r̥").replaceAll("ṝ","r̥̄").replaceAll("ḷ","l̥").replaceAll("ḹ","l̥̄")
          if (ISOOnly) {
            return input;
          }
        } else if (type == "ISO" && strictnasalisation == false) {
          latinToKannada = isoAll;
          diacritics = iso_dia;
          if (ISOOnly) {
            return input.toLowerCase().replaceAll("ṃ","ṁ").replaceAll("ã","m̐").replaceAll("ṃ","ṁ").replaceAll("ṅ","ṁ").replaceAll("ñ","ṁ").replaceAll("ṇ","ṁ").replaceAll("n","ṁ").replaceAll("m","ṁ");
          } else {
            input = input.replaceAll("Ṃ","Ṁ").replaceAll("Ã","m̐").replaceAll("ṃ","ṁ").replaceAll("ã","m̐");
          }
          anuswaraEndings = ['ṁ'];
        } else if (type == "IAST"){
          // IAST only Transliteration
          latinToKannada = iastAll;
          diacritics = iast_dia;
          if (ISOOnly) {
            return input.replaceAll("Ṃ","Ṁ").replaceAll("Ã","m̐").replaceAll("ṃ","ṁ").replaceAll("ã","m̐");
          } else {
            input = input.replaceAll("Ṁ","Ṃ").replaceAll("ṁ","ṃ").replaceAll("r̥","ṛ").replaceAll("r̥̄","ṝ").replaceAll("l̥","ḷ").replaceAll("l̥̄","ḹ");
          }
          anuswaraEndings = ['ṃ'];
        }
    
        for (let u = 0; u < input.length; u++ ) {    
          if (diacritics[input[u-2] + input[u-1] + input[u]]) { // Vowel 3-character
            if (diacritics[input[u-2] + input[u-1] + input[u]] && latinToKannada[input[u-2] + input[u-1] + input[u]] && (input[u-3] == "" || !input[u-3] || input[u-3] == " " || input[u-3].indexOf("\n") > -1))  { // Standalone 3-character Vowel
              resultKn = resultKn.slice(0, -2) + latinToKannada[input[u-2] + input[u-1] + input[u]];
            } else {
              resultKn = resultKn.slice(0, -2) + diacritics[input[u-2] + input[u-1] + input[u]];
            }
          } else if (!diacritics[input[u-2]] && diacritics[input[u-1] + input[u]]) { // Vowel 2-character
            if (diacritics[input[u-1] + input[u]] && latinToKannada[input[u-1] + input[u]] && (input[u-2] == "" || !input[u-2] || input[u-2] == " " || input[u-2].indexOf("\n") > -1)) {  // Standalone 2-character Vowel
              if (anuswaraEndings.indexOf(input[u+1]) > -1 && (letterAfterAnuswara.indexOf(input[u+2]) > -1 || input[u+2] == " " || input[u+2] == "")) {
                resultKn = resultKn.slice(0, -1) + latinToKannada[input[u-1] + input[u]] + "ಂ"; // Anuswara - V²A  V²AC¹ V²AC²
                u = u + 1;
              } else {
                resultKn = resultKn.slice(0, -1) + latinToKannada[input[u-1] + input[u]];
              }
            } else {
              resultKn = resultKn.slice(0, -1) + diacritics[input[u-1] + input[u]];
            }
          } else if (!diacritics[input[u-2]] && !diacritics[input[u-1]] && diacritics[input[u]]) { // Vowel 1-character
            if (input[u] == "a" && input[u-1] == " ") {
              resultKn = resultKn.slice(0, -1) + latinToKannada[input[u]];
            } else if (diacritics[input[u]] && (input[u-1] == "" || !input[u-1] || input[u-1] == " " || input[u-1].indexOf("\n") > -1)) { // Standalone 1-character Vowel
              if (anuswaraEndings.indexOf(input[u+1]) > -1 && (letterAfterAnuswara.indexOf(input[u+2]) > -1 || input[u+2] == " " || input[u+2] == "")) {
                resultKn = resultKn + latinToKannada[input[u]] + "ಂ"; // Anuswara - V¹A  V¹AC¹ V¹AC²
                u = u + 1;
              } else {
                resultKn = resultKn.slice(0, -1) + latinToKannada[input[u]];
              }
            } else {
              resultKn = resultKn.slice(0, -1) + diacritics[input[u]];
            }
          } else if (latinToKannada[input[u-1] + input[u] + "a"] || (latinToKannada[input[u-2] + input[u-1] + "a"] && input[u] == "a")) { // Consonant 2-character
            if (diacritics[input[u] + input[u+1] + input[u+2]]) { // Consonant-Vowel 2-character 3-character
              resultKn = resultKn.slice(0, -1) + diacritics[input[u] + input[u+1] + input[u+2]];
            } else if (diacritics[input[u] + input[u+1]]) { // Consonant-Vowel 2-character 2-character
              resultKn = resultKn.slice(0, -1) + diacritics[input[u] + input[u+1]];
            } else if (latinToKannada[input[u-2] + input[u-1] + "a"] && input[u] == "a") { // Consonant-Vowel 2-character 1-character
              resultKn = resultKn.slice(0, -2) + latinToKannada[input[u-2] + input[u-1] + "a"];
            } else if (anuswaraEndings.indexOf(input[u+1]) > -1) {
              resultKn = resultKn + "ಂ";  // Anuswara - C²A  CD²A  C²AC² C²AC¹ CD²AC² CD²AC¹
            } else {
              resultKn = resultKn.slice(0, -2) + latinToKannada[input[u-1] + input[u] + "a"] + "್";
            }
          } else if (latinToKannada[input[u] + "a"] || (latinToKannada[input[u-1] + "a"] && input[u] == "a")) { // Consonant 1-character
            if (diacritics[input[u] + input[u+1] + input[u+2]]) { // Consonant-Vowel 1-character 3-character
              resultKn = resultKn.slice(0, -1) + diacritics[input[u] + input[u+1] + input[u+2]];
            } else if (diacritics[input[u] + input[u+1]]) { // Consonant-Vowel 1-character 2-character
              if ((input[u] + input[u+1]) == "m̐") { // Anunasika
                resultKn = resultKn + diacritics["m̐"];
              } else if (diacritics[input[u-1]] && input[u] == " ̃") { // vowel nasalisation
                resultKn = resultKn.slice(0, -1) + diacritics[input[u] + input[u+1]];
              } else { 
                resultKn = resultKn.slice(0, -1) + diacritics[input[u] + input[u+1]];
              }
            } else if (latinToKannada[input[u-1] + "a"] && input[u] == "a") { // Consonant-Vowel 1-character 1-character
              if (input[u-1] == "f" || input[u-1] == "z") { // Nuqta cases
                resultKn = resultKn.slice(0, -3) + latinToKannada[input[u-1] + "a"];
              } else if (input[u-2] == "a" && input[u-1] == "ṇ" && input[u] == "a") { 
                resultKn = resultKn.slice(0, -1) + latinToKannada[input[u-1] + "a"];
              } else { 
                resultKn = resultKn.slice(0, -2) + latinToKannada[input[u-1] + "a"];
              }
            } else if ((latinToKannada[input[u-2]] != undefined && diacritics[input[u-1]] != undefined && anuswaraEndings.indexOf(input[u]) > -1 && letterAfterAnuswara.indexOf(input[u+1]) > -1 && diacritics[input[u+2]] != undefined) || ((input[u-1] == "a" || diacritics[input[u-1]] != undefined) && anuswaraEndings.indexOf(input[u]) > -1 && letterAfterAnuswara.indexOf(input[u+1]) > -1)) {
              resultKn = resultKn + "ಂ"; // Anuswara - C¹A  CD¹A   C¹AC² CD¹AC² C¹AC² CD¹AC² 
            } else {
              resultKn = resultKn + latinToKannada[input[u] + "a"] + "್";
            }
          } else if (input[u].indexOf("\n") > -1 && (input[u+1] == "i" || input[u+1] == "e" || input[u+1] == "u" || input[u+1] == "o")) { // New Lines
            resultKn = resultKn +  "\n ";
          } else if (input[u].indexOf("\n") > -1 && (input[u+1] != "i" && input[u+1] != "e" && input[u+1] != "u" && input[u+1] != "o")) { // New Lines
            resultKn = resultKn +  "\n";
          } else if (latinToKannada[input[u]] != undefined && latinToKannada[input[u]] != null && input[u] != "") { // Default Single Character
            if (input[u-1] && input[u-1] != " " && input[u-1].indexOf("\n") == -1 && diacritics[input[u]]) {
              resultKn = resultKn.slice(0, -1) + diacritics[input[u]];
            } else {
              resultKn = resultKn + latinToKannada[input[u]];
            }
          }
        }
    
        return resultKn;
    } else if (input && direction == "kannada2latin") {
        let kannadaToLatin;
        let diacritics;
        const isoAll = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","೦":"0","೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9"," ":" ",".":".",",":",",";":";","?":"?","!":"!","\"":"\"","'":"'","(":"(",")":")",":":":","+":"+","=":"=","/":"/","-":"-","<":"<",">":">","*":"*","|":"|","\\":"\\","₹":"₹","{":"{","}":"}","[":"[","]":"]","_":"_","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","˜":"˜","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","ಅ":"a","ಆ":"ā","ಇ":"i","ಈ":"ī","ಉ":"u","ಊ":"ū","ಋ":"r̥","ೠ":"r̥̄","ಌ":"l̥","ೡ":"l̥̄","ಎ":"e","ಏ":"ē","ಐ":"ai","ಒ":"o","ಓ":"ō","ಔ":"au","ಅಂ":"aṁ","ಅಃ":"aḥ","ೱ":"ẖ","ೲ":"ḫ","ಀ":"m̐","\\u0CDD":"nh","಄":" ","ಕ":"ka","ಖ":"kha","ಗ":"ga","ಘ":"gha","ಙ":"ṅa","ಚ":"ca","ಛ":"cha","ಜ":"ja","ಝ":"jha","ಞ":"ña","ಟ":"ṭa","ಠ":"ṭha","ಡ":"ḍa","ಢ":"ḍha","ಣ":"ṇa","ತ":"ta","ಥ":"tha","ದ":"da","ಧ":"dha","ನ":"na","ಪ":"pa","ಫ":"pha","ಬ":"ba","ಭ":"bha","ಮ":"ma","ಯ":"ya","ರ":"ra","ಱ":"ṟa","ಲ":"la","ವ":"va","ಶ":"śa","ಷ":"ṣa","ಸ":"sa","ಹ":"ha","ಳ":"ḷa","ೞ":"ḻa","a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","g":"g","h":"h","i":"i","j":"j","k":"k","l":"l","m":"m","n":"n","o":"o","p":"p","q":"q","r":"r","s":"s","t":"t","u":"u","v":"v","w":"w","x":"x","y":"y","z":"z","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z","\u200A":"x"};

        const iso_dia = {"್":" ","ಾ":"ā","ಿ":"i","ೀ":"ī","ು":"u","ೂ":"ū","ೃ":"r̥","ೄ":"r̥̄","ೢ":"l̥","ೣ":"l̥̄","ೆ":"e","ೇ":"ē","ೈ":"ai","ೊ":"o","ೋ":"ō","ೌ":"au","ಂ":"ṁ","ಃ":"ḥ","಼":"ʾ","ಁ":"˜","\\u0CF3":"m̐","ಽ":"'"}; 

        const iastAll = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","೦":"0","೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9"," ":" ",".":".",",":",",";":";","?":"?","!":"!","\"":"\"","'":"'","(":"(",")":")",":":":","+":"+","=":"=","/":"/","-":"-","<":"<",">":">","*":"*","|":"|","\\":"\\","₹":"₹","{":"{","}":"}","[":"[","]":"]","_":"_","%":"%","@":"@","ˆ":"ˆ","`":"`","´":"´","˜":"˜","·":"·","˙":"˙","¯":"¯","¨":"¨","˚":"˚","˝":"˝","ˇ":"ˇ","¸":"¸","˛":"˛","˘":"˘","’":"’","ಅ":"a","ಆ":"ā","ಇ":"i","ಈ":"ī","ಉ":"u","ಊ":"ū","ಋ":"ṛ","ೠ":"ṝ","ಌ":"ḷ","ೡ":"ḹ","ಎ":"e","ಏ":"ē","ಐ":"ai","ಒ":"o","ಓ":"ō","ಔ":"au","ಅಂ":"aṃ","ಅಃ":"aḥ","ೱ":"ẖ","ೲ":"ḫ","ಀ":"m̐","\\u0CDD":"nh","಄":" ","ಕ":"ka","ಖ":"kha","ಗ":"ga","ಘ":"gha","ಙ":"ṅa","ಚ":"ca","ಛ":"cha","ಜ":"ja","ಝ":"jha","ಞ":"ña","ಟ":"ṭa","ಠ":"ṭha","ಡ":"ḍa","ಢ":"ḍha","ಣ":"ṇa","ತ":"ta","ಥ":"tha","ದ":"da","ಧ":"dha","ನ":"na","ಪ":"pa","ಫ":"pha","ಬ":"ba","ಭ":"bha","ಮ":"ma","ಯ":"ya","ರ":"ra","ಱ":"ṟa","ಲ":"la","ವ":"va","ಶ":"śa","ಷ":"ṣa","ಸ":"sa","ಹ":"ha","ಳ":"ḷa","ೞ":"ḻa","a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","g":"g","h":"h","i":"i","j":"j","k":"k","l":"l","m":"m","n":"n","o":"o","p":"p","q":"q","r":"r","s":"s","t":"t","u":"u","v":"v","w":"w","x":"x","y":"y","z":"z","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z","\u200A":"x"};

        const iast_dia = {"್":" ","ಾ":"ā","ಿ":"i","ೀ":"ī","ು":"u","ೂ":"ū","ೃ":"ṛ","ೄ":"ṝ","ೢ":"ḷ","ೣ":"ḹ","ೆ":"e","ೇ":"ē","ೈ":"ai","ೊ":"o","ೋ":"ō","ೌ":"au","ಂ":"ṃ","ಃ":"ḥ","಼":"ʾ","ಁ":"˜","\\u0CF3":"m̐","ಽ":"'"}; 

        const swaras = ['ಅ','ಆ','ಇ','ಈ','ಊ','ಉ','ಋ','ೠ','ಌ','ೡ','ಎ','ಏ','ಐ','ಒ','ಓ','ಔ'];

        const gutturalLetter = ['ಕ','ಖ','ಗ','ಘ'];
        const palatalLetter = ['ಚ','ಛ','ಜ','ಝ'];
        const retroflexLetter = ['ಟ','ಠ','ಡ','ಢ'];
        const dentalLetter = ['ತ','ಥ','ದ','ಧ'];
        const labialApproximateLetter = ['ಪ','ಫ','ಬ','ಭ','ಯ','ರ','ವ','ಶ','ಷ','ಸ','ಹ'];

        const nonPronunced = ["್","ಾ","ಿ","ೀ","ು","ೂ","ೃ","ೄ","ೢ","ೣ","ೆ","ೇ","ೈ","ೊ","ೋ","ೌ","಼","ಽ"];

        const anunasika = {"a":"ã","ā":"ā̃","i":"ĩ","ī":"ī̃","u":"ũ","ū":"ū̃","r̥":"r̥̃","r̥̄":"ṝ̃","e":"ẽ","ē":"ē̃","o":"õ","ō":"ō̃"};

        if (type == "ISO") {
            // IAST only Transliteration
            kannadaToLatin = isoAll;
            diacritics = iso_dia;
        } else if (type == "IAST"){
            // IAST only Transliteration
            kannadaToLatin = iastAll;
            diacritics = iast_dia;
        }

        let resultLa = "";
        for (let u = 0; u < input.length; u++ ) {
            if (input[u] && diacritics[input[u]] && nonPronunced.indexOf(input[u]) > -1 && input[u-1] && swaras.indexOf(input[u-1]) > -1) {
            // Half swara are not pronounced : http://nannabaraha.blogspot.com/2017/02/blog-post_27.html
            let ulpaswara1 = ['ೠ', 'ೡ'];
            let ulpaswara2 = ['ಋ', 'ಌ', 'ಐ', 'ಔ'];
            if (ulpaswara1.indexOf(input[u-1]) > -1)
                resultLa = resultLa.slice(0, -3);
            else if (ulpaswara2.indexOf(input[u-1]) > -1)
                resultLa = resultLa.slice(0, -2);
            else 
                resultLa = resultLa.slice(0, -1);
            continue;
            } else if (input[u] != " " && diacritics[input[u]] && input[u] == "ಁ") {
            let lastVowel = resultLa[resultLa.length - 1];
            if (anunasika[lastVowel])
                resultLa = resultLa.slice(0, -1) + anunasika[lastVowel];
            else
                resultLa = resultLa + "m̐";
            } else if (input[u] != " " && diacritics[input[u]] && input[u-1] != "ಅ") {
            if (input[u] != " " && diacritics[input[u-1]] && diacritics[input[u]]) {
                resultLa = resultLa + diacritics[input[u]];
            } else if (input[u] == "್") {
                resultLa = resultLa.slice(0, -1);
            } else {
                if (input[u] == "ಂ" || input[u] == "ಃ") { // Anusvara & Visarga
                if (input[u-1] && swaras.indexOf(input[u-1])) {
                    resultLa = resultLa + diacritics[input[u]];
                } else {
                    resultLa = resultLa.slice(0, -1) + 'a' + diacritics[input[u]];
                }
                } else {
                // Nukta signs in Kannada ಜ಼ = 'za' & ಫ಼ = 'fa'
                if (input[u] == "಼" && input[u-1] && input[u-1] == "ಜ") {
                    resultLa = resultLa.slice(0, -2) + "za";
                } else if (input[u] == "಼" && input[u-1] && input[u-1] == "ಫ") {
                    resultLa = resultLa.slice(0, -3) + "fa";
                } else {
                    resultLa = resultLa.slice(0, -1) + diacritics[input[u]];
                }
                }
            }
            } else if (input[u-1] == "ಅ" && diacritics[input[u]] && nonPronunced.indexOf(input[u]) == -1) {
            resultLa = resultLa.slice(0, -1) +  kannadaToLatin[input[u-1] + input[u]];
            } else if (input[u].indexOf("\n") > -1) {
            resultLa = resultLa + "\n";
            } else if (kannadaToLatin[input[u]] != undefined && kannadaToLatin[input[u]] != null && input[u] != "") {
            // Anusvara rule
            if (input[u-1] && input[u-1] == "ಂ" && gutturalLetter.indexOf(input[u]) > -1 && type == "ISO" && strictnasalisation == true) {
                resultLa = resultLa.slice(0, -1) + "ṅ" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && palatalLetter.indexOf(input[u]) > -1 && type == "ISO" && strictnasalisation == true) {
                resultLa = resultLa.slice(0, -1) + "ñ" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && retroflexLetter.indexOf(input[u]) > -1 && type == "ISO" && strictnasalisation == true) {
                resultLa = resultLa.slice(0, -1) + "ṇ" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && dentalLetter.indexOf(input[u]) > -1 && type == "ISO" && strictnasalisation == true) {
                resultLa = resultLa.slice(0, -1) + "n" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && labialApproximateLetter.indexOf(input[u]) > -1 && type == "ISO" && strictnasalisation == true) {
                resultLa = resultLa.slice(0, -1) + "m" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && gutturalLetter.indexOf(input[u]) == -1 && palatalLetter.indexOf(input[u]) == -1 && retroflexLetter.indexOf(input[u]) == -1 && dentalLetter.indexOf(input[u]) == -1 && labialApproximateLetter.indexOf(input[u]) == -1 && input[u] == " " && type == "ISO" && strictnasalisation == true) {
                resultLa = resultLa.slice(0, -1) + "ṁ" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && type == "ISO" && strictnasalisation == false) {
                resultLa = resultLa.slice(0, -1) + "ṁ" + kannadaToLatin[input[u]];
            } else if (input[u-1] && input[u-1] == "ಂ" && type == "IAST") {
                resultLa = resultLa.slice(0, -1) + "ṃ" + kannadaToLatin[input[u]];
            } else  {
                resultLa = resultLa + kannadaToLatin[input[u]];
            }
            }
        }
        return resultLa;
    }
}

module.exports = kannadatransliterate;

/*  
    Transliteration for Sanskrit (ISO 15919 : IAST), Marathi, older Kannada, old Tamil, modern Kannada and modern Tamil, Havigannada, Konkani, Tulu, Awadhi
    Standard Unicode Proposal : https://unicode.org/L2/L2003/03068-kannada.pdf
    Unicode Block : https://en.wikipedia.org/wiki/Kannada_(Unicode_block)
    Unicode version 10 : http://www.unicode.org/versions/Unicode10.0.0/ch12.pdf (Page 497 - 500)
    Unicode code point : ಁ - https://unicode.org/L2/L2010/10392r2-chandrabindus.pdf
    Unicode code point : \u0CF3 - https://www.unicode.org/L2/L2021/21114-kannada-sign-anusvara.pdf
    Unicode code point : ಀ - https://www.unicode.org/L2/L2014/14153-kannada-chandrabindu.pdf

    Strict Nasalisation of Anusvara - rule ṇ & ṁ : "English Transliteration of Kannada Words with Anusvara and Visarga" : https://link.springer.com/chapter/10.1007/978-981-15-3514-7_28
  */
