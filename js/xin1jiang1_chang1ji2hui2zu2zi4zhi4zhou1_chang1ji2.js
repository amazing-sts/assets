(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('昌吉市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"652301","properties":{"name":"昌吉市","cp":[87.267532,44.014435],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CA@@@AA@AAAC@@AAAA@A@A@@@@@@@A@@AAA@@@@A@@BAAA@@AA@AAAA@@A@@A@AA@@AABA@@@@@@@A@@AA@@@@AAA@@@@@@AB@@@@AA@@@@@@@B@@A@@@@@@@AA@@A@@@A@@@AB@@@@A@@@@@A@@AA@@AA@@A@A@A@@A@@AA@@A@@@@@@@@BA@@@@@@@A@A@@@@@A@@B@@@@A@A@@AA@@@@A@@@A@@BA@@A@@@AAA@AA@@@A@@@@@A@@@@A@A@@@A@ABA@A@AA@AA@AA@AA@@@A@A@AB@AA@@@@@@A@@@@@@CA@@A@A@@@A@A@AA@@@@A@@@@@A@@@A@@@@A@@@AAA@A@@AA@@AA@@C@@@A@AA@@@AAA@@@A@A@@AA@@AAA@AA@AAA@@AAA@@@@AA@@@A@@@A@@AA@C@@A@@@@BAA@@@@A@@A@AA@@@A@@@@AA@@AA@@A@@AA@@@@AA@A@@@A@@@@A@@@A@@AAA@AA@@CAA@AA@@@A@ABA@@AA@A@@@A@@@@@A@AAA@@AA@@BCA@BA@A@@@A@AB@@A@@@A@A@A@AA@BA@A@@@A@ABA@A@@AA@ABABABA@A@AB@@@@A@@@A@A@@B@BA@@D@@@DADA@@BA@@B@B@B@@@BA@ABA@@B@FAFCBAFA@@DCBAB@BA@AB@B@BC@ABC@@@AB@BA@A@A@@KMACCCEIGECKACAK@IDE@EEEGGIGECIEGGCAAA@ALQAG@AAIAQ@IAAACEAG@M@G@EE@K@ICGEGEGIEAACCCCAC@IAKAGB@A@@CAC@ACAAAAA@AA@A@AAA@A@AAA@AAAAC@AA@@AA@@A@@@@@@A@@@A@AA@@AB@@@@A@@B@AA@AACACAA@@@AA@A@@AA@A@A@@@AA@@AAAA@@CACACAA@CAAAAA@A@A@A@A@AA@@A@C@@B@B@DAH@DAB@BA@@@@B@DAB@B@BA@@BABAB@@ABAB@DAD@@@B@BAB@@@@A@@@ABGBEACCC@@KEIAKAIAEAAA@@AA@@@A@@@A@A@E@@AC@AAC@ACCA@EAEA@@GECE@@AE@@ACCAKCSCA@GASGE@EAUCQAWF[NKLMDSDOEOOIE[KGAQAWHYTKFaJSFUDaF]DcBgJ@FCB@BEDGAK@KB@BE@EDCB@HBNBFEJKHMR]\\IHGHEHEJEH@FFF@D@J@HGPCNFBFALBHHBDAJAFEDCFEFAD@B@D@DFHAFEFADAFFFJJNHDD@B@FIFKFIDIFQNCDCFAHADBFBHANCN@D@BBBDBDAHALFNBF@FDDBBDFBDDDFJP@HBLBHDDDFAFIHAHBL@LBHABAFAFADCBIFMHKHIHADAF@F@B@F@FBDAFCD@DBHFNFDFDBFHJFHFBF@FALCJ@H@DBHBHFHDBDAB@DAJ@DDDDFHDHDBBDDDDFJBDAF@BBBFDFBHDFBTDDDB@DBJBJFHDHBFDDDP@FBDDHBFFDDBLCTBNBHDBJBB@TDFDFD@DDFFDNHNDJ@FADAJCF@NBBDJDNBJBFBFFFDDDFBTFRDHDFBBBBHBFBFLLFHADADCFAD@DBBDDHFDFBFDDFFDDFBFBHHFDJFFDLRJLDFJFH@HD@@@DAFAFAFGFOLKFCFCDEJ@FBJDJFHJFJADAHADCF@JBBFDDHN@DBD@JAHBD@F@DEJCF@DGFKDGDGBABEHCLBLBF@F@@@@BD@@@@@BDJFHDDJHDBH@FAR@DBJBHDFBLCHAF@DBBBDDHFFFB@PBBB@BADAFEH@D@DDDBFHJBJDLBFDLBFBFDDFDFDXLJHF@JBLBLFJ@JAL@V@N@HBN@JAPBRBLBLBHBD@@@BB@@BD@B@B@@BB@F@@BD@B@@B@@B@@BB@B@@BB@B@B@B@B@BBB@@@@@D@@DB@B@@@@@DABBBB@@B@BA@@B@@BB@@@B@BBBBB@@@@AB@@@@BBBB@B@F@BBB@B@BBD@B@@AD@BB@BB@@@@ABA@@@@BB@B@BB@@@D@BB@BDBBFBBBDD@B@B@B@@@B@B@B@@@B@BBB@@@B@BBB@B@D@@@D@B@B@B@@AFA@@DAD@F@@@BAB@B@B@B@B@D@@@D@B@DBBED@B@DAD@DAD@B@BAB@DA@AD@D@B@DAD@B@B@BBH@BAD@@BBBBD@@@AB@B@@B@BB@@@DBB@BBBBFBB@@DDBBB@BBBBBBBB@BB@@BB@@BB@@@@B@@@@@@BBB@BBB@@@A@@@@BB@@BB@@@@@@@@BB@AB@@B@B@B@AB@B@@AB@BAB@@@B@@AB@@B@@BBB@@@@ABB@@B@@@BB@BB@BB@@@BB@@B@BBDBBDD@@@BB@@@@B@@BD@B@BBD@BBB@BBB@BBB@BBDBDBBBBB@BB@BBBDDDDD@BB@@BBBBDBD@BBBBBBBB@BB@@D@@BB@@BBBB@@@@B@B@@BB@@DFB@DB^THFFFDD@B@DCDBBABEDAHADEHFL@@B@@B@@@BDJFN@B@@BB@@@B@BDH@@BBBDDJ@@DJBDDH@D@DBBBHBD@F@DBB@B@F@B@@@@@D@@@@@@@B@@@BBDBB@B@@@BBB@D@@BB@DHPDFPFDX@HBH@@BF@@@@@B@@@@KNOT@D@FAF@B@F@B@B@FAB@D@B@DBB@BAB@B@BBFJRHR@F@Ro@E@CIIJCL@HA@CD@@EF@Q[K@I@@AEEEGAAFG@@CCFAD@@EAAACDA@EdE@@APJHJNdCPCjE\\FKVQFEBIBERMLTXXVTNPb@bAFI\\Wn}vwdR@R@T@R@T@d@R@f@R@h@x@J@BQtERERSvWCNGRAF]EPERGRERERERERGRERSvQtKhI\\AN@˞˨A@ˡBCXalXeNSPW^oV_bsNWDCLSNUXaVa^mJQDA@AbsduVaLQ@A@A@@@AB@@A@@@A@@BA@@@@@A@ABCBA@A@CB@@@@A@ABABC@CBA@A@ABA@A@AB@@C@@@@@AB@@A@ABA@CBA@ABA@CBC@A@@BA@A@ABA@@@A@ABA@ABA@ABC@ABA@CBA@CBA@A@ABA@@@ABA@CBA@ABA@AA@@@@@@AA@@@@@@@AA@@@@@@@@@@@@@@@AA@@@@A@@@@@@@@@A@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@B@@@@@@A@@@@@A@@@@@@@@@@@@@@A@@@@@A@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@A@@@@@@@A@@@@@@B@@@@@@@@@@@BA@@@@@@@@@@@A@@B@@@@A@@@@@A@@@@@@@A@@@@BA@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@BA@@@@@@@AB@@@@@@@@A@@@@BA@@@@@A@@BA@@@@@@@AB@@@@@@AB@@@@A@@@@@@@@@@@A@@@@B@@A@@@@@@@@@@@AB@@@@@@@@@BA@@@@@@@@B@@A@@@@B@@@@@@@@@BA@@@A@C@A@@BA@@@A@@BA@A@A@@@@@A@@@@@@@ADA@@@A@AAG@@@AGAABQ^MXW`AHEB_HEBTAEBGBIBCBEBAAAGCACDABEBAHKDIHM@CA@K@G@k@Y@K@G@@B@H@H@DCBI@ABCDE@ECA@M@QBFaDOBAAAC@C@AAAACHEDCNAJABCDAHAH@B@BC@CD@DBBAFCFABA@EAGACACBEFED@BA@ADCBAAAECDCBC@C@ADBD@BACCCCBEDCDADBFBFABCCCAA@GEA@CDAH@H@BA@CAACBAADAFCF@ACCCABAB@BAACA@CBCHGHCDCBODIDGBEDECEAEDG@EGEACBC@I@EGEE@GCGEAG@EBEBA@C@C@E@E@E@E@A@A@ABCACAG@CBAB@BAA@AAECCA@CBABBB@@A@AEECC@AB@@AAA@AB@B@D@@AAC@A@@B@@@DA@@D@@@HELGNGTMXQNKRKHIAAC@CAAA@@C@G@CA@ADABA@@AAC@@B@@AA@CB@B@BBB@@@AC@AAAAACBA@@@@@@ABA@@@A@ACE@AFALCFAB@BA\\WJIBAFE@@@@BABA@@BADEB@B@BA@@@C@AC@BA@ABCBAA@@A@CBAB@@@D@@A@ABA@AA@@@AA@@BAB@@@BAB@@@AA@@@@B@@A@@@AC@@@@B@A@@BAB@BACACB@@AA@@@AB@B@@@@A@@@AAAA@DI@@@ABEBCAC@AAE@AA@A@@@@@AAA@@A@AAAAA@@BA@@B@B@B@@A@@AAA@@AAAAA@@@@AAB@@AB@B@@@@@BABAA@AA@@AAA@A@@@A@AA@@AA@@AB@@@BABA@@@@A@A@@@A@AF@BA@AAAAA@@B@D@@A@A@AAAA@@C@C@@@A@AA@A@AAAA@A@@AAB@BAB@@A@A@AAAFEJIB@@AJE@@AC@@II@ACCEECCBE@CBA@CGGCEAAGMIICAFERMHEBC@AAC@@B@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@@A@@@@@@@@@A@@A@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@AA@@@@@A@@@@@@@A@@@@@A@@@@A@@A@@@@@C@@@A@@A@@@@A@@@@@@@A@@@@@@@A@@@@@AA@@@@@@A@@@@@A@@@@@A@@@@A@@A@@@@@@@@A@@@@BC@KJKF@BCBA@@BCBA@IB@Ca@ABAABAB@CC@A@CCEEE@@@@A@A@@@A@@A@@E@A@C@@BA@@B@@AAA@CCAA@@AB@@KC@@KGC@GCA@@@AAA@@@CA@@@@@@@ADA@@@AA@A@A@@@AAA@CAA@AAA@@@BA@@@AA@@AG@@@A@@@@@A@BBA@A@@@@@A@@@A@@AA@@B@@AA@@@@@AA@AAA@@@A@@@A@AB@A@@@@AAC@A@@@ABCB@@AA@@A@A@@A@@CCCA@AAA@@@@AA@@A@@@@A@@A@@@@A@@A@@@AAA@A@A@@A@@A@@AA@@@A@@A@@@@@A@@@@@@@A@@@@@AA@@@@@A@@@A@@@AA@@A@@@A@@A@@A@@@@@@@@@@AA@@A@@A@@@@@@AA@@@@A@@@@A@@@@A@@A@@A@@@@@@A@@AA@@A@@@A@@@@BA@@BA@@@A@@@AA@AA@@AA@@@@@@@@AA@@@@@@@@A@@@@AA@@@A@@@A@@@AAA@@@@@@@@AA@@@@@@A@@@@@@A@@@@@@@@@@@@A@@AA@@@A@@@@@@@@@@AA@@@@A@@@@AA@@@A@@@@@@@@@@@@@B@B@B@@A@AA@A@C@CA@@A@A@@@@AA@@@A@@@AA@@AA@@A@@AA@@@A@A@@@@AA@@@@@AA@@AACA@@A@AA@@AA@@@@AAA@@@@AA@@@@@AA@@@A@@@@@A@@@@@A@@A@@A@@@@A@@A@@A@@A@@@@AA@@@@@@@@@@@@@A@@@AA@AA@@@@@AA@@@@@A@@A@@@@@@@@@AA@@@@AA@@@@A@A@@@@@@A@@A@@@@@@A@@AAA@@A@@A@@A@A@@@A@@@A@@AA@@@@@@@CA@@AAA@@@@A@@@AA@@A@@@@A@AA@@A@@@AAA@@@@@@A@@@@AA@@@@AAAA@@AA@@AA@@@@@A@@AA@@@AA@@@@AA@CG@@@@@AA@@@@AA@@@@A@@@AA@@@@@AA@@@@@AAA@AA@@A@@AA@@@A@@AA@@B@@AA@@@@A@@@A@AA@@@AAAA@@A@@@@A@CA@@@AA@@AA@@@@@AB@@@BA@@@A@A@AA@@A@@@A@@@A@@BA@A@A@A@@@A@AA@@A@@@A@ABABA@@@AB@@@@@@A@A@@B@@ABA@@@ABC@A@CB@@A@A@AB@@A@@B@@A@A@@@A@@@A@@B@BA@@@@BA@A@@@A@A@@B@@A@@@A@@@ABA@@@@@@BA@@@A@@@A@@@A@A@@@ABA@@@ABA@ABA@@@@@A@@AA@AA@@A@A@@@A@AB@@A@@@A@@@A@@@@@C@A@@@A@A@A@@BA@A@A@@@@@A@@@A@@@A@@@AB@@@@A@@@@@A@@@A@@@A@A@@@A@@@A@@AA@A@@@@@AB@@@BC@A@@@AAA@@@A@@@@AA@@@A@@@@@AB@@A@@@@@@@A@@@A@A@A@A@@@A@@@A@A@@@A@A@@@A@@@@CCA@@@@A@@@@BAB@@A@@@@@A@@@AB@@@@@@@@AA@@@A@@@@A@@@@A@@@A@@@A@@@A@@@AA@@@A@@B@@@@A@BB@@@@@BB@@B@@AB@@@@A@@A@@@@A@@@@@@@@@A@@@@A@AA@@@@AA@@@@@AA@@@@@A@A@@@@@@@@A@@A@@A@@A@@@@A@@@AA@@@@@A@@@@A@@@@@A@@@@@@@@AA@@@@@A@@@A@@@@@@@@AA@@A@@@@AAA@@@@A@@A@@A@@@AA@@@@AA@@@@@A@@@@A@@@@A@@@@A@A@@@@@@@@AB@@@@@@@@@@@@@A@A@@AA@@@AA@@@A@@@@@A@@@@@AA@@@@@A@@@@@@A@@A@@@@A@@C@@@@A@A@@CCAAAAEA@A@@@@@A@@@AA@AA@A@@AA@@AAAA@A@@AC@AA@@@A@@AA@@AAAAAEECCA@@A@A@ACAAAA@AA@@@@@AAC@C@@CA@ACIAA@E@A@@AAAA@A@A@ACA@AA@@A@AAAAA@@@AAA@@CA@AA@@AAA@AAA@A@A@CAE@@CA@@@@@AA@@AE@@AAAA@EAEACA@@EA@A@A@@A@A@A@A@@AAA@AIC@@AAAAA@A@AA@@AAAAAA@@@C@A@@A@AAAAAA@A@AA@@@@AA@@@@@AA@@@A@@@AA@@@A@@@AA@@AAA@@A@AA@AA@@AA@A@@@AA@@A@@A@@A@@@AAA@@AAAA@@@@EA@@A@@A@@@A@A@AA@@AA@@A@A@@@@@A@@@A@@@@@@AA@@@@AAA@@A@@@AA@@@@A@@A@@@@@@@AA@A@@@AA@@A@@@@AA@@B@@AA@@@AA@AA@AAAA@@AA@@AA@@@AAAAA@AA@@A@@@@@AA@@A@@A@AAAAAACA@A@@@A@@AA@@AA@@A@@A@@AA@@@@@@@A@@@@AAA@@@@@AAA@@AA@@AA@@A@AA@@@@A@@AA@@AA@@AAAA@@AAA@@@@@CA@@AA@@AAC@A@AA@AA@@@AA@@ABA@AAA@@@CA@@AA@@A@@A@@A@@@@AA@@@@@@A@@@@A@@@@@A@@@A@@@@AA@@@@AA@@@@@A@@A@@A@AA@@@@@@AA@@A@@@@@A@AAA@A@@A@@@@@@AA@@@@A@A@@@@@A@@@@@A@@@@AA@@@@@A@A@@@@@AA@@AA@@A@AA@@A@@@AA@@A@@@AA@@A@@A@@@@CA@@AA@@@@@@@AA@@@AA@@@@@A@@A@AA@@AA@@AA@@@@@AA@A@@@A@AA@@@@@A@@@@A@AAA@@@AAA@@@@@A@@AA@@@@AA@@@@@@@@A@@@@@@A@@@A@@@@@AA@@A@A@@@@A@@A@@A@@@@A@CA@@C@@AA@@A@@A@AA@@@AA@@AA@@@A@A@@@@A@@@@A@@@AA@@A@@A@@@@@@@AA@@@@@A@@@AA@@AA@@A@@@A@@A@@B@@A@@@AA@@@AA@@A@@@@@AAAA@AEA@A@@AC@CAE@A@C@@@A@AAAA@@A@AAABA@A@@@AAA@A"],"encodeOffsets":[[89081,44555]]}}],"UTF8Encoding":true});}));