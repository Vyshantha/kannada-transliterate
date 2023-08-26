# kannada-transliterate
Transliterator between ಕನ್ನಡ (kannaḍa) and Latin script based on IAST &amp; ISO 15919

> Import the "kannada-transliterate" module or library

Method usage ```kannadatransliterate(type, direction, input, strictnasalisation, ISOOnly)```
> type
>>  'ISO' or 'IAST'

> direction
>> 'latin2kannada' or 'kannada2latin'

> input
>> text in IAST for kannaḍa or ISO-15919 for kannaḍa or ಕನ್ನಡ text

> strictnasalisation
>> true or false

> ISOOnly
>> true or false

```
const kannadatransliterate = require("kannada-transliterate");
```

> IAST transliteration examples :
```
console.log('IAST >> ಕನ್ನಡ : ', kannadatransliterate("IAST","latin2kannada","saṃskṛta aṃgi yajṃakaṃkaṃa oṃṭe oṃdu oṃbatu saṃyukta ōṃ ", false, false));  
    // Expected IAST >> ಕನ್ನಡ : ಸಂಸ್ಕೃತ  ಅಂಗಿ  ಯಜ್ಅಕಂಕಂಅ  ಒಂಟೆ  ಒಂದು  ಒಂಬತು  ಸಂಯುಕ್ತ  ಓಂ 
console.log('IAST >> ISO : ', kannadatransliterate("IAST","latin2kannada","saṃskṛta aṃgi yajṃakaṃkaṃa oṃṭe oṃdu oṃbatu saṃyukta ōṃ ", false, true)); 
    // Expected IAST >> ISO non-strict nasalation : saṁskṛta aṁgi yajṁakaṁkaṁa oṁṭe oṁdu oṁbatu saṁyukta ōṁ
```

> ISO transliteration examples :
```
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","samskṛta aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ ", false, true));  
    // Expected ISO >> ISO non-strict nasalisation : saṁskṛta aṁgi yajṁakaṁkaṁa oṁṭe oṁdu oṁbatu saṁyukta ōṁ 
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","samskṛta aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ ", true, true)); 
    // Expected ISO >> ISO strict nasalisation : samskṛta aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ
```

> ISO-ಕನ್ನಡ transliteration examples :
```
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","aṅgi yajñakaṅkaṇa oṇṭe ondu ombatu samyukta ōṁ ", true, false));  
    // Expected ISO >> ಕನ್ನಡ : ಅಂಗಿ  ಯಜ್ಞಕಂಕಣ  ಒಂಟೆ  ಒಂದು  ಒಂಬತು  ಸಂಯುಕ್ತ ಓಂ 
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","za fa ennam̐ dēvā̃ fanta zinda śivo’ham mã", true, false));  
    // Expected ISO >> ಕನ್ನಡ : ಜ಼  ಫ಼ ಎನ್ನಀ  ದೇವಾಁ  ಫ಼ಂತ  ಜ಼ಿಂದ ಶಿವಽಹಮ್ ಮ್ಀ
console.log('ISO >> ಕನ್ನಡ : ', kannadatransliterate("ISO","latin2kannada","śrīmūlasaṅgha dēśigaṇa pustakagaccha koṇḍakundānvayake siddhānta ca kravartti nayakīrtimunīśvarō bhāti ||", true, false));
    // Expected ISO >> ಕನ್ನಡ : ಶ್ರೀಮೂಲಸಂಘ  ದೇಶಿಗಣ  ಪುಸ್ತಕಗಚ್ಛ  ಕೊಂಡಕುಂದಾಂವಯಕೆ  ಸಿದ್ಧಾಂತ  ಚ  ಕ್ರವರ್ತ್ತಿ  ನಯಕೀರ್ತಿಮುನೀಶ್ವರೋ  ಭಾತಿ  ||
```

> ಕನ್ನಡ transliteration examples :
```
console.log('ಕನ್ನಡ >> ISO : ', kannadatransliterate("ISO","kannada2latin","ಕನ್ನಡ ಕವಿರಾಜಮಾರ್ಗ - ಪದಱಿದು ನುಡಯಲುಂ ನುಡಿದುದ ನಱಿಯಲುಮಾರ್ಪರಾ ನಾಡವರ್ಗಳ್ ಚದುರರ್ ನಿಜದಿಂ ಕುರಿತೋದದೆಯುಂ ಕಾವ್ಯಪ್ರಯೋಗ ಪರಿಣತಮತೆಗಳ್", true, false)); 
    // Expected ಕನ್ನಡ >> ISO with strict nasalisation : kannaḍa kavirājamārga - padaṟidu nuḍayaluṁ nuḍiduda naṟiyalumārparā nāḍavargaḷ cadurar nijadiṁ kuritōdadeyuṁ kāvyaprayōga pariṇatamategaḷ
```
