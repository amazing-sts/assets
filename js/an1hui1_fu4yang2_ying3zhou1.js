(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('颍州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341202","properties":{"name":"颍州区","cp":[115.806942,32.883468],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@C@@@D@@@"],["@@@@@@C@EA@B@@@BB@@AB@@@@@@BBA@BB@@@B@@A"],["@@EBG@CBEDCHCJCDBDAFCDADADEBGBC@G@GAA@CBCDCD@FDFBDBDDFBBFFDDHFDBFDAB@B@B@@@@A@@@@@A@@A@@A@@@@@@@@A@@@@@@A@@@@@AA@@A@@@@@@@@@@A@@A@@@@BA@@@@@@AA@AB@@AA@@@@@@@@A@@@@@A@@@A@@@@@CAA@@@AA@@@@@@A@A@@@A@@@A@@@C@A@@@A@@AA@@BA@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@AB@@@@A@@@AB@@A@A@@@CBA@AAE@I@E@A@G@CDEBCDCBEDC@CBCCECAC@CCE@AAACCACAECG@CACAIACEAACAAECEBEBCDABCFCB@BG@CBGBCAECCE@CEEGAIAEAAAE@GCC@EAE@G@C@@@EDAB@@BDBBBH@FBFBFBBDDBB@BBFBD@@@BBDFDDDDD@@BH@BBDBJBBFHB@BDBDDBBBBDBDDDBBHJPXDBBDFF@BBBBBBB@BBBDD@BB@@B@@@@@@@B@@@B@@AD@BB@@B@@BB@B@@BB@D@@BB@@@@@B@@BB@B@@@@@B@@BB@@@@@B@@@@@B@@@@B@@B@@A@@@@B@@@@@BB@@B@BB@@B@@@@BB@@BD@@@@@@A@A@A@A@AB@@AB@@@BBBDBBB@BBBAB@DAB@D@B@@BBBBDFBBDG@ABA@ABAB@DADBB@BA@@B@@ABCBA@A@ABAAC@CA@@ABADAB@B@BBB@BADA@ABA@A@ADABAFDB@DBBBBBBD@B@BBB@BD@D@B@FAD@BABC@E@C@CAC@A@ABABADABADAF@B@@BBBAB@@BBBBBBDFBBBBD@BABEBC@A@ABAB@B@BBB@B@BA@@@C@C@@@A@AB@@@BABBJ@D@B@DADAB@BBDD@@B@B@B@BEBCBCDABAB@DBBBDDDB@@BA@@BABA@C@A@ACCACB@BADEDCBA@AAACC@A@A@AB@D@BBBBB@DAD@B@B@DBDBD@BBB@BADA@A@A@@AABA@AB@FCB@DA@@B@F@B@D@JBLBHBJ@LB@@@B@BAB@BCB@@@@B@JDB@FBBB@BAB@BBBBBD@B@D@B@BAFAFAB@D@DAD@BABCBA@CB@D@D@FAD@DA@@PEFADADADAD@FADAJCJCB@ZIHABAB@@@B@JEJC@@FAB@@@DA@@B@@@DA@@DADAAC@@@A@C@@@C@A@@@@@@AE@ABAA@@@@@@E@@AE@@@AB@BCDA@BD@BD@@@@@@D@@D@D@B@@@@@@B@D@B@@@@@@@F@@A@@@@BC@@@@@A@CJ@B@@@DB@A@@DCB@DAD@B@@@@@@ALA@ALAJADAB@FAB@DADADEB@BABAB@B@B@D@D@B@DABABE@EBA@AB@DCDEBC@A@A@E@A@A@A@@BAHE@@FCTIDADAD@BBDBDBF@D@LCDCFE@G@@BCBADAD@D@@@B@B@FDHFDBFBB@D@@AB@@@@C@AAAGGAA@A@ABA@@BA@@DADA@@J@FAFALEAACECA@ACG@@@ACGAEACEAGDCBCDEDCBC@CACCCEACCECE@A@@@AAA@AEAG@GAE@GAEAC@CAA@AE@CDCDC@CDEBE@A@@AACB@CAB@CC@@AA@@AGBBD@@ABSAI@E@MASBWD@@MFIDEBAB@BABEAE@G@EBCBC@EDCDABGDCBABGBE@CAGACACAEBCBGBEBGDEBC@E@CAAA@ECGA@CAE@A@CAA@AAA@@@A@@B@AA@@@A@AA@AEAABC@CAC@ACCB@@A@AA@@@BA@@BC@@FEBI@@CC@AB@CC@@BC@AMC@@EA@@@A@@@@@@@@B@@A@BB@B@@CB@@@@A@@B@@AAA@@AAB@AC@A@@AA@@@A@@A@AG@@@A@@AB@A@A@@DA@@@@BGB@@@@@@CBB@@@@D@@@BA@@BA@BDA@@BA@A@KB@D@@@@AB_gGI@@B@B@BABB@@B@D@@BHA@@@AB@@CB@@A@@@A@@@CF@BQ@G@@@E@@@ABA@AD@B@@@B@@C@AC@@EBAD@@A@A@A@AAA@AAEAGEDBBCBGDEA@CCA@DEDIEE@@BCDBBEFDD@@@BB@BAD@BDD@BFB@@BB@BFB@@DB@@DA@@B@@BH@@GBA@AAA@@BAB@AA@@@A@AAA@@@C@@CCBAA@A@@A@@DA@DHGDA@EBCBAB@@AB@@C@C@@BBBABABA@@A@AE@CBBDABE@A@CBDD@BA@@D@@E@@A@B@@@B@@@@@B@BBBBDA@@B@@@DDDBBB@@@@BD@B@B@@@@BB@@AB@@DD@@B@@@BBBE@@D@@@BB@@FA@@B@B@@@BABADBA@BA@BDD@@BAFB@@B@B@@B@BB@@@DBABD@@A@BB@@@BB@@AB@BFDCHI@BB@@@B@@@DABBA@@D@@@D@@@BB@DL@BA@A@@B@@@DABAAC@@B@@BHA@@BA@BBD@@B@FC@@D@@BDC@AB@@@DB@@@B@@@B@@@@D@B@@ABAAA@@@AB@@AB@BC@@@@JA@@DF@@HC@@DE@@BCB"]],"encodeOffsets":[[[118286,33778]],[[118286,33769]],[[118423,33637]]]}}],"UTF8Encoding":true});}));