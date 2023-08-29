# NPM Package : kannada-transliterate
The package transliterates text from Kannada ಕನ್ನಡ (kannaḍa) script to Latin script based on [ISO 15919](https://en.wikipedia.org/wiki/ISO_15919) transliteration standard and from Latin script based on [IAST](https://en.wikipedia.org/wiki/International_Alphabet_of_Sanskrit_Transliteration) or [ISO 15919](https://en.wikipedia.org/wiki/ISO_15919) to Kannada ಕನ್ನಡ (kannaḍa) script. The ```ISO 15919``` has non-strict and strict nasalisation versions of anusvāra transliteration that is made available with this package. To experiment functionality of this package use the [Kannada Transliterator App](https://vyshantha.github.io/kannadatransliterate/) website on you browser.

## Install [Node](https://nodejs.org/en/download), [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then install this package
```npm install kannada-transliterate```

## Usage
### Import the "kannada-transliterate" package

```
const kannadatransliterate = require("kannada-transliterate");
```

### Method call in code 
```kannadatransliterate(type, direction, input, strictnasalisation, ISOOnly)```
> type
>> 'ISO' \
>> 'IAST'

> direction
>> 'latin2kannada' \
>> 'kannada2latin'

> input
>> text in Latin IAST for kannaḍa \
>> text in Latin ISO-15919 for kannaḍa \
>> text in ಕನ್ನಡ script

> strictnasalisation
>> true \
>> false

> ISOOnly
>> true \
>> false

### IAST transliteration examples :

> Note : IAST does not support strict nasalisation

```
console.log('IAST >> ಕನ್ನಡ : ', kannadatransliterate("IAST","latin2kannada","saṃskṛta aṃgi yajṃakaṃkaṃa oṃṭe oṃdu oṃbatu saṃyukta ōṃ ", false, false));  
    // Expected IAST >> ಕನ್ನಡ : ಸಂಸ್ಕೃತ  ಅಂಗಿ  ಯಜ್ಅಕಂಕಂಅ  ಒಂಟೆ  ಒಂದು  ಒಂಬತು  ಸಂಯುಕ್ತ  ಓಂ 
console.log('IAST >> ISO : ', kannadatransliterate("IAST","latin2kannada","saṃskṛta aṃgi yajṃakaṃkaṃa oṃṭe oṃdu oṃbatu saṃyukta ōṃ ", false, true)); 
    // Expected IAST >> ISO non-strict nasalation : saṁskṛta aṁgi yajṁakaṁkaṁa oṁṭe oṁdu oṁbatu saṁyukta ōṁ
```

### ISO transliteration examples : 

> Note : ISO-15919 non-strict nasalisation does not get converted to ISO-15919 strict nasalisation
```
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","samskṛta aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ ", false, true));  
    // Expected ISO >> ISO non-strict nasalisation : saṁskṛta aṁgi yajṁakaṁkaṁa oṁṭe oṁdu oṁbatu saṁyukta ōṁ 
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","samskṛta aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ ", true, true)); 
    // Expected ISO >> ISO strict nasalisation : samskṛta aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ
```

### ISO-ಕನ್ನಡ transliteration examples :

```
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ ", true, false));  
    // Expected ISO >> ಕನ್ನಡ : ಅಂಗಿ  ಯಜ್ಞಕಂಕಣ  ಒಂಟೆ  ಒಂದು  ಒಂಬತು  ಸಂಯುಕ್ತ ಓಂ 
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","laṁc lāṁc liṁc līṁc luṁc lūṁc lr̥ṁc ll̥ṁc leṁc lēṁc laiṁc loṁc lōṁc lauṁc laṁc ", true, false));
    // Expected ISO >> ಕನ್ನಡ : ಲಂಚ್  ಲಾಂಚ್  ಲಿಂಚ್  ಲೀಂಚ್  ಲುಂಚ್  ಲೂಂಚ್  ಲೃಂಚ್  ಲೢಂಚ್  ಲೆಂಚ್  ಲೇಂಚ್  ಲೈಂಚ್  ಲೊಂಚ್  ಲೋಂಚ್  ಲೌಂಚ್  ಲಂಚ್  
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","za fa ennam̐ dēvā̃ fanta zinda śivo’ham mã", true, false));  
    // Expected ISO >> ಕನ್ನಡ : ಜ಼  ಫ಼ ಎನ್ನಀ  ದೇವಾಁ  ಫ಼ಂತ  ಜ಼ಿಂದ ಶಿವಽಹಮ್ ಮ್ಀ
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","śrīmūlasaṅgha dēśigaṇa pustakagaccha koṇḍakundānvayake siddhānta ca kravartti nayakīrtimunīśvarō bhāti ||", true, false));
    // Expected ISO >> ಕನ್ನಡ : ಶ್ರೀಮೂಲಸಂಘ  ದೇಶಿಗಣ  ಪುಸ್ತಕಗಚ್ಛ  ಕೊಂಡಕುಂದಾಂವಯಕೆ  ಸಿದ್ಧಾಂತ  ಚ  ಕ್ರವರ್ತ್ತಿ  ನಯಕೀರ್ತಿಮುನೀಶ್ವರೋ  ಭಾತಿ  ||
```

### ಕನ್ನಡ transliteration examples :

```
console.log('ಕನ್ನಡ >> ISO : ', kannadatransliterate("ISO","kannada2latin","ಕನ್ನಡ ಕವಿರಾಜಮಾರ್ಗ - ಪದಱಿದು ನುಡಯಲುಂ ನುಡಿದುದ ನಱಿಯಲುಮಾರ್ಪರಾ ನಾಡವರ್ಗಳ್ ಚದುರರ್ ನಿಜದಿಂ ಕುರಿತೋದದೆಯುಂ ಕಾವ್ಯಪ್ರಯೋಗ ಪರಿಣತಮತೆಗಳ್", true, false)); 
    // Expected ಕನ್ನಡ >> ISO with strict nasalisation : kannaḍa kavirājamārga - padaṟidu nuḍayaluṁ nuḍiduda naṟiyalumārparā nāḍavargaḷ cadurar nijadiṁ kuritōdadeyuṁ kāvyaprayōga pariṇatamategaḷ
```

## Execution 
Given the above JavaScript code is included into a script.js file : ```node script.js```

## License
Distributed under the MIT License. See LICENSE for more information.

## Contact Author
[Github](https://github.com/Vyshantha)

## Report Issues
[Code](https://github.com/Vyshantha/kannada-transliterate)
