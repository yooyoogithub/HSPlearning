
    //Easy Phonics [unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let ap = [['1','01.jpg','01.mp3','<font color="red">a<font color="black">pple','w','apple','_pple','a','사과'],
        ['1','02.jpg','02.mp3','<font color="red">a<font color="black">nt','w','ant','_nt','a','개미'],
        ['1','03.jpg','03.mp3','<font color="red">b<font color="black">ear','w','bear','_ear','b','곰'],
        ['1','04.jpg','04.mp3','<font color="red">b<font color="black">ook','w','book','_ook','b','책'],
        ['2','05.jpg','05.mp3','<font color="red">c<font color="black">at','w','cat','_at','c','고양이'],
        ['2','06.jpg','06.mp3','<font color="red">c<font color="black">ake','w','cake','_ake','c','케이크'],
        ['2','07.jpg','07.mp3','<font color="red">d<font color="black">og','w','dog','_og','d','개'],
        ['2','08.jpg','08.mp3','<font color="red">d<font color="black">oor','w','door','_oor','d','문'],
        ['3','09.jpg','09.mp3','<font color="red">e<font color="black">gg','w','egg','_gg','e','달걀'],
        ['3','10.jpg','10.mp3','<font color="red">e<font color="black">lephant','w','elephant','_lephant','e','코끼리'],
        ['4','11.jpg','11.mp3','<font color="red">f<font color="black">ish','w','fish','_ish','f','물고기'],
        ['4','12.jpg','12.mp3','<font color="red">f<font color="black">rog','w','frog','_rog','f','개구리'],
        ['4','13.jpg','13.mp3','<font color="red">g<font color="black">orilla','w','gorilla','_orilla','g','고릴라'],
        ['4','14.jpg','14.mp3','<font color="red">g<font color="black">old','w','gold','_old','g','금'],
        ['5','15.jpg','15.mp3','<font color="red">h<font color="black">am','w','ham','_am','h','햄'],
        ['5','16.jpg','16.mp3','<font color="red">h<font color="black">ive','w','hive','_ive','h','벌집'],
        ['5','17.jpg','17.mp3','<font color="red">i<font color="black">ndian','w','indian','_ndian','i','인디언'],
        ['5','18.jpg','18.mp3','<font color="red">i<font color="black">nk','w','ink','_nk','i','잉크'],
        ['6','19.jpg','19.mp3','<font color="red">j<font color="black">am','w','jam','_am','j','잼'],
        ['6','20.jpg','20.mp3','<font color="red">j<font color="black">uice','w','juice','_uice','j','쥬스'],
        ['7','21.jpg','21.mp3','<font color="red">k<font color="black">ing','w','king','_ing','k','왕'],
        ['7','22.jpg','22.mp3','<font color="red">k<font color="black">ey','w','key','_ey','k','열쇄'],
        ['7','23.jpg','23.mp3','<font color="red">l<font color="black">ion','w','lion','_ion','l','사자'],
        ['7','24.jpg','24.mp3','<font color="red">l<font color="black">emon','w','lemon','_emon','l','레몬'],
        ['8','25.jpg','25.mp3','<font color="red">m<font color="black">ouse','w','mouse','_ouse','m','쥐'],
        ['8','26.jpg','26.mp3','<font color="red">m<font color="black">ilk','w','milk','_ilk','m','우유'],
        ['8','27.jpg','27.mp3','<font color="red">n<font color="black">apkin','w','napkin','_apkin','n','냅킨'],
        ['8','28.jpg','28.mp3','<font color="red">n<font color="black">et','w','net','_et','n','그물'],
        ['9','29.jpg','29.mp3','<font color="red">o<font color="black">x','w','ox','_x','o','황소'],
        ['9','30.jpg','30.mp3','<font color="red">o<font color="black">ctopus','w','octopus','_ctopus','o','문어'],
        ['10','31.jpg','31.mp3','<font color="red">p<font color="black">encil','w','pencil','_encil','p','연필'],
        ['10','32.jpg','32.mp3','<font color="red">p<font color="black">iano','w','piano','_iano','p','피아노'],
        ['10','33.jpg','33.mp3','<font color="red">q<font color="black">ueen','w','queen','_ueen','q','여왕'],
        ['10','34.jpg','34.mp3','<font color="red">q<font color="black">uilt','w','quilt','_uilt','q','자수(퀼트)'],
        ['11','35.jpg','35.mp3','<font color="red">r<font color="black">abbit','w','rabbit','_abbit','r','토끼'],
        ['11','36.jpg','36.mp3','<font color="red">r<font color="black">ibbon','w','ribbon','_ibbon','r','리본'],
        ['11','37.jpg','37.mp3','<font color="red">s<font color="black">chool','w','school','_chool','s','학교'],
        ['11','38.jpg','38.mp3','<font color="red">s<font color="black">poon','w','spoon','_poon','s','숟가락'],
        ['12','39.jpg','39.mp3','<font color="red">t<font color="black">en','w','ten','_en','t','10'],
        ['12','40.jpg','40.mp3','<font color="red">t<font color="black">omato','w','tomato','_omato','t','토마토'],
        ['13','41.jpg','41.mp3','<font color="red">u<font color="black">mbrella','w','umbrella','_mbrella','u','우산'],
        ['13','42.jpg','42.mp3','<font color="red">u<font color="black">ncle','w','uncle','_ncle','u','삼촌'],
        ['13','43.jpg','43.mp3','<font color="red">v<font color="black">iolin','w','violin','_iolin','v','바이올린'],
        ['13','44.jpg','44.mp3','<font color="red">v<font color="black">est','w','vest','_est','v','조끼'],
        ['14','45.jpg','45.mp3','<font color="red">w<font color="black">olf','w','wolf','_olf','w','늑대'],
        ['14','46.jpg','46.mp3','<font color="red">w<font color="black">atch','w','watch','_atch','w','시계'],
        ['14','47.jpg','47.mp3','<font color="red">f<font color="black">ox','w','fox','fo_','x','여우'],
        ['14','48.jpg','48.mp3','bo<font color="red">x<font color="black">','w','box','bo_','x','상자'],
        ['15','49.jpg','49.mp3','<font color="red">y<font color="black">acht','w','yacht','_acht','y','요트'],
        ['15','50.jpg','50.mp3','<font color="red">y<font color="black">ellow','w','yellow','_ellow','y','노란색'],
        ['15','51.jpg','51.mp3','<font color="red">z<font color="black">ebra','w','zebra','_ebra','z','얼룩말'],
        ['15','52.jpg','52.mp3','<font color="red">z<font color="black">oo','w','zoo','_oo','z','동물원']
    ];
    let appattern = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //Easy Phonics [unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let ep = [['1','1.PNG','1.mp3','<font color="red">a<font color="black">nt','w','ant','_nt','a','개미'],
        ['1','2.PNG','2.mp3','<font color="red">a<font color="black">pple','w','apple','_pple','a','사과'],
        ['1','3.PNG','3.mp3','s<font color="red">a<font color="black">d','w','sad','s_d','a','슬픈'],
        ['1','4.PNG','4.mp3','b<font color="red">a<font color="black">g','w','bag','b_g','a','가방'],
        ['1','5.PNG','5.mp3','j<font color="red">a<font color="black">m','w','jam','j_m','a','잼'],
        ['1','6.PNG','6.mp3','<font color="red">e<font color="black">gg','w','egg','_gg','e','달걀'],
        ['1','7.PNG','7.mp3','<font color="red">e<font color="black">lephant','w','elephant','_lephant','e','코끼리'],
        ['1','8.PNG','8.mp3','b<font color="red">e<font color="black">d','w','bed','b_d','e','침대'],
        ['1','9.PNG','9.mp3','r<font color="red">e<font color="black">d','w','red','r_d','e','빨강'],
        ['1','10.PNG','10.mp3','h<font color="red">e<font color="black">n','w','hen','h_n','e','암탉'],
        ['1','11.PNG','11.mp3','<font color="red">i<font color="black">nk','w','ink','_nk','i','잉크'],
        ['1','12.PNG','12.mp3','<font color="red">i<font color="black">ndian','w','indian','_ndian','i','인디언'],
        ['1','13.PNG','13.mp3','<font color="red">i<font color="black">gloo','w','igloo','_gloo','i','이글루'],
        ['1','14.PNG','14.mp3','<font color="red">i<font color="black">n','w','in','_n','i','~안에'],
        ['1','15.PNG','15.mp3','p<font color="red">i<font color="black">n','w','pin','p_n','i','핀'],
        ['2','16.PNG','16.mp3','<font color="red">o<font color="black">x','w','ox','_x','o','황소'],
        ['2','17.PNG','17.mp3','<font color="red">o<font color="black">ctopus','w','octopus','_ctopus','o','문어'],
        ['2','18.PNG','18.mp3','r<font color="red">o<font color="black">ck','w','rock','r_ck','o','바위'],
        ['2','19.PNG','19.mp3','m<font color="red">o<font color="black">m','w','mom','m_m','o','엄마'],
        ['2','20.PNG','20.mp3','t<font color="red">o<font color="black">p','w','top','t_p','o','팽이'],
        ['2','21.PNG','21.mp3','<font color="red">u<font color="black">ncle','w','uncle','_ncle','u','삼촌'],
        ['2','22.PNG','22.mp3','<font color="red">u<font color="black">mbrella','w','umbrella','_mbrella','u','우산'],
        ['2','23.PNG','23.mp3','b<font color="red">u<font color="black">g','w','bug','b_g','u','벌레'],
        ['2','24.PNG','24.mp3','r<font color="red">u<font color="black">n','w','run','r_n','u','달리다'],
        ['2','25.PNG','25.mp3','b<font color="red">u<font color="black">s','w','bus','b_s','u','버스'],
        ['3','26.PNG','26.mp3','<font color="red">b<font color="black">ook','w','book','_ook','b','책'],
        ['3','27.PNG','27.mp3','<font color="red">b<font color="black">ear','w','bear','_ear','b','곰'],
        ['3','28.PNG','28.mp3','<font color="red">b<font color="black">oy','w','boy','_oy','b','소년'],
        ['3','29.PNG','29.mp3','ro<font color="red">b<font color="black">ot','w','robot','ro_ot','b','로봇'],
        ['3','30.PNG','30.mp3','cra<font color="red">b<font color="black">','w','crab','cra_','b','게'],
        ['3','31.PNG','31.mp3','ca<font color="red">b<font color="black">in','w','cabin','ca_in','b','오두막'],
        ['3','32.PNG','32.mp3','<font color="red">c<font color="black">at','w','cat','_at','c','고양이'],
        ['3','33.PNG','33.mp3','<font color="red">c<font color="black">ake','w','cake','_ake','c','케이크'],
        ['3','34.PNG','34.mp3','<font color="red">k<font color="black">ing','w','king','_ing','k','왕'],
        ['3','35.PNG','35.mp3','pin<font color="red">k<font color="black">','w','pink','pin_','k','분홍색'],
        ['3','36.PNG','36.mp3','s<font color="red">c<font color="black">arf','w','scarf','s_arf','c','스카프'],
        ['3','37.PNG','37.mp3','ba<font color="red">k<font color="black">er','w','baker','ba_er','k','제방사'],
        ['4','38.PNG','38.mp3','<font color="red">d<font color="black">og','w','dog','_og','d','개'],
        ['4','39.PNG','39.mp3','<font color="red">d<font color="black">oor','w','door','_oor','d','문'],
        ['4','40.PNG','40.mp3','<font color="red">d<font color="black">a<font color="red">d<font color="black">','w','dad','_a_','d','아빠'],
        ['4','41.PNG','41.mp3','re<font color="red">d<font color="black">','w','red','re_','d','빨강'],
        ['4','42.PNG','42.mp3','san<font color="red">d<font color="black">','w','sand','san_','d','모래'],
        ['4','43.PNG','43.mp3','sha<font color="red">d<font color="black">ow','w','shadow','sha_ow','d','그림자'],
        ['4','44.PNG','44.mp3','<font color="red">f<font color="black">ish','w','fish','_ish','f','물고기'],
        ['4','45.PNG','45.mp3','<font color="red">f<font color="black">rog','w','frog','_rog','f','개구리'],
        ['4','46.PNG','46.mp3','<font color="red">f<font color="black">at','w','fat','_at','f','뚱뚱한'],
        ['4','47.PNG','47.mp3','roo<font color="red">f<font color="black">','w','roof','roo_','f','지붕'],
        ['4','48.PNG','48.mp3','lea<font color="red">f<font color="black">','w','leaf','lea_','f','나뭇잎'],
        ['4','49.PNG','49.mp3','so<font color="red">f<font color="black">a','w','sofa','so_a','f','소파'],
        ['5','50.PNG','50.mp3','<font color="red">g<font color="black">old','w','gold','_old','g','황금'],
        ['5','51.PNG','51.mp3','<font color="red">g<font color="black">orilla','w','gorilla','_orilla','g','고릴라'],
        ['5','52.PNG','52.mp3','<font color="red">g<font color="black">un','w','gun','_un','g','총'],
        ['5','53.PNG','53.mp3','bu<font color="red">g<font color="black">','w','bug','bu_','g','벌레'],
        ['5','54.PNG','54.mp3','pi<font color="red">g<font color="black">','w','pig','pi_','g','돼지'],
        ['5','55.PNG','55.mp3','lo<font color="red">g<font color="black">','w','log','lo_','g','통나무'],
        ['5','56.PNG','56.mp3','<font color="red">h<font color="black">am','w','ham','_am','h','햄'],
        ['5','57.PNG','57.mp3','<font color="red">h<font color="black">ive','w','hive','_ive','h','벌집'],
        ['5','58.PNG','58.mp3','<font color="red">h<font color="black">ippo','w','hippo','_ippo','h','하마'],
        ['5','59.PNG','59.mp3','<font color="red">h<font color="black">ungry','w','hungry','_ungry','h','배고픈'],
        ['5','60.PNG','60.mp3','<font color="red">h<font color="black">ammer','w','hammer','_ammer','h','망치'],
        ['5','61.PNG','61.mp3','be<font color="red">h<font color="black">ind','w','behind','be_ind','h','~뒤에'],
        ['6','62.PNG','62.mp3','<font color="red">j<font color="black">am','w','jam','_am','j','잼'],
        ['6','63.PNG','63.mp3','<font color="red">j<font color="black">uice','w','juice','_uice','j','쥬스'],
        ['6','64.PNG','64.mp3','<font color="red">j<font color="black">ungle','w','jungle','_ungle','j','정글'],
        ['6','65.PNG','65.mp3','<font color="red">j<font color="black">eans','w','jeans','_eans','j','청바지'],
        ['6','66.PNG','66.mp3','en<font color="red">j<font color="black">oy','w','enjoy','en_oy','j','즐기다'],
        ['6','67.PNG','67.mp3','sub<font color="red">j<font color="black">ect','w','subject','sub_ect','j','과목'],
        ['6','68.PNG','68.mp3','<font color="red">l<font color="black">ion','w','lion','_ion','l','사자'],
        ['6','69.PNG','69.mp3','<font color="red">l<font color="black">emon','w','lemon','_emon','l','레몬'],
        ['6','70.PNG','70.mp3','<font color="red">l<font color="black">ook','w','look','_ook','l','보다'],
        ['6','71.PNG','71.mp3','ba<font color="red">ll<font color="black">','w','ball','ba__','l','공'],
        ['6','72.PNG','72.mp3','wo<font color="red">l<font color="black">f','w','wolf','wo_f','l','늑대'],
        ['6','73.PNG','73.mp3','g<font color="red">l<font color="black">ass','w','glass','g_ass','l','유리(잔)'],
        ['7','74.PNG','74.mp3','<font color="red">m<font color="black">ilk','w','milk','_ilk','m','우유'],
        ['7','75.PNG','75.mp3','<font color="red">m<font color="black">ouse','w','mouse','_ouse','m','쥐'],
        ['7','76.PNG','76.mp3','<font color="red">m<font color="black">onkey','w','monkey','_onkey','m','원숭이'],
        ['7','77.PNG','77.mp3','<font color="red">m<font color="black">o<font color="red">m<font color="black">','w','mom','_o_','m','엄마'],
        ['7','78.PNG','78.mp3','roo<font color="red">m<font color="black">','w','room','roo_','m','방'],
        ['7','79.PNG','79.mp3','pu<font color="red">m<font color="black">pkin','w','pumpkin','pu_pkin','m','호박'],
        ['7','80.PNG','80.mp3','<font color="red">n<font color="black">et','w','net','_et','n','그물'],
        ['7','81.PNG','81.mp3','<font color="red">n<font color="black">apkin','w','napkin','_apki_','n','냅킨'],
        ['7','82.PNG','82.mp3','<font color="red">n<font color="black">est','w','nest','_est','n','둥지'],
        ['7','83.PNG','83.mp3','ma<font color="red">n<font color="black">','w','man','ma_','n','남자'],
        ['7','84.PNG','84.mp3','moo<font color="red">n<font color="black">','w','moon','moo_','n','달'],
        ['7','85.PNG','85.mp3','a<font color="red">n<font color="black">gel','w','angel','a_gel','n','천사'],
        ['8','86.PNG','86.mp3','<font color="red">p<font color="black">encil','w','pencil','_encil','p','연필'],
        ['8','87.PNG','87.mp3','<font color="red">p<font color="black">iano','w','piano','_iano','p','피아노'],
        ['8','88.PNG','88.mp3','<font color="red">p<font color="black">ig','w','pig','_ig','p','돼지'],
        ['8','89.PNG','89.mp3','<font color="red">p<font color="black">ink','w','pink','_ink','p','분홍색'],
        ['8','90.PNG','90.mp3','ha<font color="red">pp<font color="black">y','w','happy','ha__y','p','행복한'],
        ['8','91.PNG','91.mp3','<font color="red">p<font color="black">a<font color="red">p<font color="black">er','w','paper','_a_er','p','종이'],
        ['8','92.PNG','92.mp3','<font color="red">qu<font color="black">een','w','queen','__een','qu','여왕'],
        ['8','93.PNG','93.mp3','<font color="red">qu<font color="black">ilt','w','quilt','__ilt','qu','퀼트(자수)'],
        ['8','94.PNG','94.mp3','<font color="red">qu<font color="black">iz','w','quiz','__iz','qu','퀴즈'],
        ['8','95.PNG','95.mp3','<font color="red">qu<font color="black">iet','w','quiet','__iet','qu','조용한'],
        ['8','96.PNG','96.mp3','s<font color="red">qu<font color="black">are','w','square','s__are','qu','정사각형'],
        ['8','97.PNG','97.mp3','s<font color="red">qu<font color="black">irrel','w','squirrel','s__irrel','qu','다람쥐'],
        ['9','98.PNG','98.mp3','<font color="red">r<font color="black">abbit','w','rabbit','_abbit','r','토끼'],
        ['9','99.PNG','99.mp3','<font color="red">r<font color="black">ibbon','w','ribbon','_ibbon','r','리본'],
        ['9','100.PNG','100.mp3','<font color="red">r<font color="black">iver','w','river','_iver','r','강'],
        ['9','101.PNG','101.mp3','<font color="red">r<font color="black">ed','w','red','_ed','r','빨강'],
        ['9','102.PNG','102.mp3','g<font color="red">r<font color="black">ass','w','grass','g_ass','r','잔듸(풀)'],
        ['9','103.PNG','103.mp3','ca<font color="red">rr<font color="black">ot','w','carrot','ca__ot','r','당근'],
        ['9','104.PNG','104.mp3','<font color="red">s<font color="black">chool','w','school','_chool','s','학교'],
        ['9','105.PNG','105.mp3','<font color="red">s<font color="black">poon','w','spoon','_poon','s','숟가락'],
        ['9','106.PNG','106.mp3','<font color="red">s<font color="black">ummer','w','summer','_ummer','s','여름'],
        ['9','107.PNG','107.mp3','<font color="red">s<font color="black">i<font color="red">s<font color="black">ter','w','sister','_i_ter','s','누나,언니(여동생)'],
        ['9','108.PNG','108.mp3','in<font color="red">s<font color="black">ect','w','insect','in_ect','s','곤충'],
        ['9','109.PNG','109.mp3','dre<font color="red">ss<font color="black">','w','dress','dre__','s','드레스'],
        ['10','110.PNG','110.mp3','<font color="red">t<font color="black">en','w','ten','_en','t','10'],
        ['10','111.PNG','111.mp3','<font color="red">t<font color="black">elevision','w','television','_elevision','t','텔레비젼'],
        ['10','112.PNG','112.mp3','<font color="red">t<font color="black">omato','w','tomato','_oma_o','t','토마토'],
        ['10','113.PNG','113.mp3','doc<font color="red">t<font color="black">or','w','doctor','doc_or','t','의사'],
        ['10','114.PNG','114.mp3','den<font color="red">t<font color="black">ist','w','dentist','den_is_','t','치과의사'],
        ['10','115.PNG','115.mp3','hu<font color="red">t<font color="black">','w','hut','hu_','t','오두막'],
        ['10','116.PNG','116.mp3','<font color="red">v<font color="black">iolin','w','violin','_iolin','v','바이올린'],
        ['10','117.PNG','117.mp3','<font color="red">v<font color="black">est','w','vest','_est','v','조끼'],
        ['10','118.PNG','118.mp3','<font color="red">v<font color="black">ase','w','vase','_ase','v','꽃병'],
        ['10','119.PNG','119.mp3','<font color="red">v<font color="black">an','w','van','_an','v','밴'],
        ['10','120.PNG','120.mp3','mo<font color="red">v<font color="black">ie','w','movie','mo_ie','v','영화'],
        ['10','121.PNG','121.mp3','do<font color="red">v<font color="black">e','w','dove','do_e','v','비둘기'],
        ['11','122.PNG','122.mp3','<font color="red">w<font color="black">atch','w','watch','_atch','w','보다,시청하다'],
        ['11','123.PNG','123.mp3','<font color="red">w<font color="black">olf','w','wolf','_olf','w','늑대'],
        ['11','124.PNG','124.mp3','<font color="red">w<font color="black">ind','w','wind','_ind','w','바람'],
        ['11','125.PNG','125.mp3','<font color="red">w<font color="black">itch','w','witch','_itch','w','마녀'],
        ['11','126.PNG','126.mp3','s<font color="red">w<font color="black">eater','w','sweater','s_eater','w','스웨터'],
        ['11','127.PNG','127.mp3','bet<font color="red">w<font color="black">een','w','between','bet_een','w','~사이에'],
        ['11','128.PNG','128.mp3','fo<font color="red">x<font color="black">','w','fox','fo_','x','여우'],
        ['11','129.PNG','129.mp3','bo<font color="red">x<font color="black">','w','box','bo_','x','상자'],
        ['11','130.PNG','130.mp3','a<font color="red">x<font color="black">','w','ax','a_','x','도끼'],
        ['11','131.PNG','131.mp3','ta<font color="red">x<font color="black">i','w','taxi','ta_i','x','택시'],
        ['11','132.PNG','132.mp3','o<font color="red">x<font color="black">','w','ox','o_','x','황소'],
        ['11','133.PNG','133.mp3','sa<font color="red">x<font color="black">ophone','w','saxophone','sa_ophone','x','섹소폰'],
        ['12','134.PNG','134.mp3','<font color="red">y<font color="black">ellow','w','yellow','_ellow','y','노랑'],
        ['12','135.PNG','135.mp3','<font color="red">y<font color="black">acht','w','yacht','_acht','y','요트'],
        ['12','136.PNG','136.mp3','<font color="red">y<font color="black">oung','w','young','_oung','y','어린,젊은'],
        ['12','137.PNG','137.mp3','<font color="red">y<font color="black">ard','w','yard','_ard','y','마당'],
        ['12','138.PNG','138.mp3','<font color="red">y<font color="black">ummy','w','yummy','_ummy','y','맛있는'],
        ['12','139.PNG','139.mp3','<font color="red">y<font color="black">ak','w','yak','_ak','y','야크(티벳소)'],
        ['12','140.PNG','140.mp3','<font color="red">z<font color="black">oo','w','zoo','_oo','z','동물원'],
        ['12','141.PNG','141.mp3','<font color="red">z<font color="black">ebra','w','zebra','_ebra','z','얼룩말'],
        ['12','142.PNG','142.mp3','<font color="red">z<font color="black">ig<font color="red">z<font color="black">ag','w','zigzag','_ig_ag','z','지그재그'],
        ['12','143.PNG','143.mp3','qui<font color="red">z<font color="black">','w','quiz','qui_','z','퀴즈'],
        ['12','144.PNG','144.mp3','maga<font color="red">z<font color="black">ine','w','magazine','maga_ine','z','잡지'],
        ['12','145.PNG','145.mp3','pri<font color="red">z<font color="black">e','w','prize','pri_e','z','상'],
        ['13','146.PNG','146.mp3','ri<font color="red">c<font color="black">e','w','rice','ri_e','soft c','쌀'],
        ['13','147.PNG','147.mp3','prin<font color="red">c<font color="black">e','w','prince','prin_e','soft c','왕자'],
        ['13','148.PNG','148.mp3','dan<font color="red">c<font color="black">e','w','dance','dan_e','soft c','춤추다,춤'],
        ['13','149.PNG','149.mp3','ni<font color="red">c<font color="black">e','w','nice','ni_e','soft c','좋은'],
        ['13','150.PNG','150.mp3','<font color="red">c<font color="black">inema','w','cinema','_inema','soft c','영화(영화관)'],
        ['13','151.PNG','151.mp3','<font color="red">c<font color="black">ity','w','city','_ity','soft c','도시'],
        ['13','152.PNG','152.mp3','<font color="red">g<font color="black">iant','w','giant','_iant','soft g','부드러운'],
        ['13','153.PNG','153.mp3','oran<font color="red">g<font color="black">e','w','orange','oran_e','soft g','오렌지'],
        ['13','154.PNG','154.mp3','ca<font color="red">g<font color="black">e','w','cage','ca_e','soft g','우리,새장'],
        ['13','155.PNG','155.mp3','an<font color="red">g<font color="black">el','w','angel','an_el','soft g','천사'],
        ['13','156.PNG','156.mp3','ma<font color="red">g<font color="black">ic','w','magic','ma_ic','soft g','마법'],
        ['13','157.PNG','157.mp3','brid<font color="red">g<font color="black">e','w','bridge','brid_e','soft g','다리']
    ];
    let eppattern = ['a','e','i','o','u','b','c','k','d','f','g','h','j','l','m','n','p','qu','r','s','t','v','w','x','y','z','soft c','soft g'];

    //Easy Phonics Plus s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let epp = [['1','1.PNG','1.mp3','c<font color="red">a<font color="black">n<font color="red">e','w','cane','c_n_','a-e','지팡이'],
        ['1','2.PNG','2.mp3','c<font color="red">a<font color="black">v<font color="red">e','w','cave','c_v_','a-e','동굴'],
        ['1','3.PNG','3.mp3','l<font color="red">a<font color="black">k<font color="red">e','w','lake','l_k_','a-e','호수'],
        ['1','4.PNG','4.mp3','m<font color="red">a<font color="black">k<font color="red">e','w','make','m_k_','a-e','만들다'],
        ['1','5.PNG','5.mp3','v<font color="red">a<font color="black">s<font color="red">e','w','vase','v_s_','a-e','꽃병'],
        ['1','6.PNG','6.mp3','n<font color="red">a<font color="black">m<font color="red">e','w','name','n_m_','a-e','이름'],
        ['1','7.PNG','7.mp3','c<font color="red">a<font color="black">k<font color="red">e','w','cake','c_k_','a-e','케이크'],
        ['1','8.PNG','8.mp3','g<font color="red">a<font color="black">t<font color="red">e','w','gate','g_t_','a-e','문'],
        ['1','011.PNG','011.mp3','<font size="5">her,father,has,go to,see,by,there is</font>','s','her,father,has,go to,see,by,there is'],
        ['1','012.PNG','012.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Her name is Jane.<br>Her father has a cake.<br>They go to the lake.<br>They see a cave by the lake.<br>There is a cane and a vase.</p>','s','Her name is Jane.<br>Her father has a cake.<br>They go to the lake.<br>They see a cave by the lake.<br>There is a cane and a vase.'],
        ['2','9.PNG','9.mp3','pin<font color="red">e','w','pine','',''],
        ['2','10.PNG','10.mp3','b<font color="red">i<font color="black">k<font color="red">e','w','bike','b_k_','i-e','자전거'],
        ['2','11.PNG','11.mp3','k<font color="red">i<font color="black">t<font color="red">e','w','kite','k_t_','i-e','연'],
        ['2','12.PNG','12.mp3','f<font color="red">i<font color="black">v<font color="red">e','w','five','f_v_','i-e','5'],
        ['2','13.PNG','13.mp3','r<font color="red">i<font color="black">d<font color="red">e','w','ride','r_d_','i-e','타다'],
        ['2','14.PNG','14.mp3','l<font color="red">i<font color="black">k<font color="red">e','w','like','l_k_','i-e','좋아하다'],
        ['2','15.PNG','15.mp3','d<font color="red">i<font color="black">v<font color="red">e','w','dive','d_v_','i-e','다이빙하다'],
        ['2','16.PNG','16.mp3','t<font color="red">i<font color="black">m<font color="red">e','w','time','t_m_','i-e','시간'],
        ['2','021.PNG','021.mp3','<font size="7">children, park, behind, have, good</font>','s','children, park, behind, have, good'],
        ['2','022.PNG','022.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Five children are in the park.<br>Lisa is behind the pine.<br>Jane and Tom have a kite.<br>Let’s ride a bike!<br>They have a good time.</p>','s','Five children are in the park.<br>Lisa is behind the pine.<br>Jane and Tom have a kite.<br>Let’s ride a bike!<br>They have a good time.'],
        ['3','17.PNG','17.mp3','n<font color="red">o<font color="black">t<font color="red">e','w','note','n_t_','o-e','공책'],
        ['3','18.PNG','18.mp3','r<font color="red">o<font color="black">s<font color="red">e','w','rose','r_s_','o-e','장비'],
        ['3','19.PNG','19.mp3','h<font color="red">o<font color="black">m<font color="red">e','w','home','h_m_','o-e','가정,집'],
        ['3','20.PNG','20.mp3','b<font color="red">o<font color="black">n<font color="red">e','w','bone','b_n_','o-e','뼈'],
        ['3','21.PNG','21.mp3','h<font color="red">o<font color="black">l<font color="red">e','w','hole','h_l_','o-e','구멍'],
        ['3','22.PNG','22.mp3','st<font color="red">o<font color="black">n<font color="red">e','w','stone','st_n_','o-e','돌'],
        ['3','23.PNG','23.mp3','r<font color="red">o<font color="black">p<font color="red">e','w','rope','r_p_','o-e','밧줄'],
        ['3','24.PNG','24.mp3','n<font color="red">o<font color="black">s<font color="red">e','w','nose','n_s_','o-e','코'],
        ['3','031.PNG','031.mp3','<font size="7">follow, can, and, touch, welcome, my</font>','s','follow, can, and, touch, welcome, my'],
        ['3','032.PNG','032.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My home is in the hole.<br>Follow the rope.<br>You can see a rose and a bone.<br>You can touch a stone.<br>Welcome to my home!</p>','s','My home is in the hole.<br>Follow the rope.<br>You can see a rose and a bone.<br>You can touch a stone.<br>Welcome to my home!'],
        ['4','25.PNG','25.mp3','c<font color="red">u<font color="black">t<font color="red">e','w','cute','c_t_','u-e','귀여운'],
        ['4','26.PNG','26.mp3','c<font color="red">u<font color="black">b<font color="red">e','w','cube','c_b_','u-e','정육면체,상자'],
        ['4','27.PNG','27.mp3','f<font color="red">u<font color="black">s<font color="red">e','w','fuse','f_s_','u-e','퓨즈'],
        ['4','28.PNG','28.mp3','h<font color="red">u<font color="black">g<font color="red">e','w','huge','h_g_','u-e','거대한'],
        ['4','29.PNG','29.mp3','fl<font color="red">u<font color="black">t<font color="red">e','w','flute','fl_t_','u-e','플루트'],
        ['4','30.PNG','30.mp3','r<font color="red">u<font color="black">l<font color="red">e','w','rule','r_l_','u-e','규칙'],
        ['4','31.PNG','31.mp3','J<font color="red">u<font color="black">n<font color="red">e','w','June','J_n_','u-e','6월'],
        ['4','32.PNG','32.mp3','r<font color="red">u<font color="black">d<font color="red">e','w','rude','r_u_','u-e','무례한'],
        ['4','041.PNG','041.mp3','<font size="7">see, climb, up, plays, tree</font>','s','see, climb, up, plays, tree'],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Luke is cute.<br>He sees a huge Rubik’s cube.<br>Don’t climb up the cube.<br>He follows the rule.<br>He plays the flute by a huge tree.</p>','s','Luke is cute.<br>He sees a huge Rubik’s cube.<br>Don’t climb up the cube.<br>He follows the rule.<br>He plays the flute by a huge tree.'],
        ['5','33.PNG','33.mp3','t<font color="red">ai<font color="black">l','w','tail','t__l','ai','꼬리'],
        ['5','34.PNG','34.mp3','r<font color="red">ai<font color="black">n','w','rain','r__n','ai','비'],
        ['5','35.PNG','35.mp3','w<font color="red">ai<font color="black">t','w','wait','w__t','ai','기다리다'],
        ['5','36.PNG','36.mp3','tr<font color="red">ai<font color="black">n','w','train','tr__n','ai','기차'],
        ['5','37.PNG','37.mp3','s<font color="red">ay<font color="black">','w','say','s__','ay','말하다'],
        ['5','38.PNG','38.mp3','d<font color="red">ay<font color="black">','w','day','d__','ay','날,요일,낮'],
        ['5','39.PNG','39.mp3','tr<font color="red">ay<font color="black">','w','tray','tr__','ay','쟁반'],
        ['5','40.PNG','40.mp3','pl<font color="red">ay<font color="black">','w','play','pl__','ay','놀다'],
        ['5','051.PNG','051.mp3','<font size="7">cat, long, duck, nice</font>','s','cat, long, duck, nice'],
        ['5','052.PNG','052.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Cats wait in the rain.<br>One cat has a long tail.<br>They see a fast train. Choo Choo!<br>Ducks say, It is a nice day.<br>They play in the rain.</p>','s','Cats wait in the rain.<br>One cat has a long tail.<br>They see a fast train. Choo Choo!<br>Ducks say, It is a nice day.<br>They play in the rain.'],
        ['6','41.PNG','41.mp3','b<font color="red">ee<font color="black">','w','bee','b__','ee','벌'],
        ['6','42.PNG','42.mp3','tr<font color="red">ee<font color="black">','w','tree','tr__','ee','나무'],
        ['6','43.PNG','43.mp3','m<font color="red">ee<font color="black">t','w','meet','m__t','ee','만나다'],
        ['6','44.PNG','44.mp3','sl<font color="red">ee<font color="black">p','w','sleep','sl__p','ee','잠자다'],
        ['6','45.PNG','45.mp3','s<font color="red">ea<font color="black">','w','sea','s__','ea','바다'],
        ['6','46.PNG','46.mp3','r<font color="red">ea<font color="black">d','w','read','r__d','ea','읽다'],
        ['6','47.PNG','47.mp3','m<font color="red">ea<font color="black">t','w','meat','m__t','ea','고기'],
        ['6','48.PNG','48.mp3','t<font color="red">ea<font color="black">','w','tea','t__','ea','(마시는)차'],
        ['6','061.PNG','061.mp3','<font size="7">lion, drink, under, eat</font>','s','lion, drink, under, eat'],
        ['6','062.PNG','062.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Lions meet a bee by the sea.<br>The bee is in the tree.<br>She drinks tea in the tree.<br>Lions are under the tree.<br>They eat the meat.</p>','s','Lions meet a bee by the sea.<br>The bee is in the tree.<br>She drinks tea in the tree.<br>Lions are under the tree.<br>They eat the meat.'],
        ['7','49.PNG','49.mp3','t<font color="red">ie','w','tie','t__','ie','넥타이'],
        ['7','50.PNG','50.mp3','p<font color="red">ie','w','pie','p__','ie','파이'],
        ['7','51.PNG','51.mp3','d<font color="red">ie','w','die','d__','ie','죽다'],
        ['7','52.PNG','52.mp3','l<font color="red">ie','w','lie','l__','ie','거짓말'],
        ['7','53.PNG','53.mp3','sk<font color="red">y','w','sky','sk_','Long Vowel y','하늘'],
        ['7','54.PNG','54.mp3','dr<font color="red">y','w','dry','dr_','Long Vowel y','말리다'],
        ['7','55.PNG','55.mp3','cr<font color="red">y','w','cry','cr_','Long Vowel y','울다'],
        ['7','56.PNG','56.mp3','fl<font color="red">y','w','fly','fl_','Long Vowel y','날다'],
        ['7','071.PNG','071.mp3','<font size="7">monkey, share, with, friends, clothes, pig</font>','w','monkey, share, with, friends, clothes, pig'],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.</p>','w','The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.'],
        ['8','57.PNG','57.mp3','b<font color="red">oa<font color="black">t','w','boat','b__t','oa','보트'],
        ['8','58.PNG','58.mp3','g<font color="red">oa<font color="black">t','w','goat','g__t','oa','염소'],
        ['8','59.PNG','59.mp3','r<font color="red">oa<font color="black">d','w','road','r__d','oa','길'],
        ['8','60.PNG','60.mp3','s<font color="red">oa<font color="black">p','w','soap','s__p','oa','비누'],
        ['8','61.PNG','61.mp3','sn<font color="red">ow','w','snow','sn__','ow','눈'],
        ['8','62.PNG','62.mp3','wind<font color="red">ow','w','window','wind__','ow','창문'],
        ['8','63.PNG','63.mp3','b<font color="red">ow<font color="black">l','w','bowl','b__l','ow','사발,그릇'],
        ['8','64.PNG','64.mp3','yell<font color="red">ow','w','yellow','yell__','ow','노란색'],
        ['8','081.PNG','081.mp3','<font size="7">monkey, share, with, friends, clothes, pig</font>','s','monkey, share, with, friends, clothes, pig'],
        ['8','082.PNG','082.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.</p>','s','The monkey has a tie.<br>The cat shares the pie with the friends.<br>They fly in the sky.<br>They dry the clothes in the sky.<br>Pigs eat the pie and see them.'],
        ['9','65.PNG','65.mp3','fr<font color="red">ui<font color="black">t','w','fruit','fr__t','ui','과일'],
        ['9','66.PNG','66.mp3','j<font color="red">ui<font color="black">ce','w','juice','j__ce','ui','주스'],
        ['9','67.PNG','67.mp3','s<font color="red">ui<font color="black">t','w','suit','s__t','ui','정장'],
        ['9','68.PNG','68.mp3','cr<font color="red">ui<font color="black">se','w','cruise','cr__se','ui','크루즈'],
        ['9','69.PNG','69.mp3','gl<font color="red">ue','w','glue','gl__','ue','풀'],
        ['9','70.PNG','70.mp3','bl<font color="red">ue','w','blue','bl__','ue','파란색'],
        ['9','71.PNG','71.mp3','cl<font color="red">ue','w','clue','cl__','ue','단서'],
        ['9','72.PNG','72.mp3','tr<font color="red">ue','w','true','tr__','ue','진실의'],
        ['9','091.PNG','091.mp3','<font size="7">can, use, drink</font>','s','can, use, drink'],
        ['9','092.PNG','092.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A blue cruise is in the sea.<br>I can make a blue suit.<br>Sue is using the glue.<br>What a nice suit!<br>Sue is drinking fruit juice.</p>','s','A blue cruise is in the sea.<br>I can make a blue suit.<br>Sue is using the glue.<br>What a nice suit!<br>Sue is drinking fruit juice.'],
        ['10','73.PNG','73.mp3','sk<font color="red">y','w','sky','sk_','Vowel y','하늘'],
        ['10','74.PNG','74.mp3','dr<font color="red">y','w','dry','dr_','Vowel y','말리다'],
        ['10','75.PNG','75.mp3','cr<font color="red">y','w','cry','cr_','Vowel y','울다'],
        ['10','76.PNG','76.mp3','fl<font color="red">y','w','fly','fl_','Vowel y','날다'],
        ['10','77.PNG','77.mp3','bab<font color="red">y','w','baby','bab_','Vowel y','아기'],
        ['10','78.PNG','78.mp3','sunn<font color="red">y','w','sunny','sunn_','Vowel y','맑은'],
        ['10','79.PNG','79.mp3','carr<font color="red">y','w','carry','carr_','Vowel y','운반하다'],
        ['10','80.PNG','80.mp3','happ<font color="red">y','w','happy','happ_','Vowel y','행복한'],
        ['10','1010.PNG','1010.mp3','<font size="7">two, bird, don’t, very</font>','s','two, bird, don’t, very'],
        ['10','1020.PNG','1020.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">It is sunny.<br>Two birds fly in the sky.<br>They carry a baby.<br>Don’t cry, cute baby.<br>They are very happy.</p>','s','It is sunny.<br>Two birds fly in the sky.<br>They carry a baby.<br>Don’t cry, cute baby.<br>They are very happy.'],
        ['11','81.PNG','81.mp3','<font color="red">ch<font color="black">eese','w','cheese','__eese','ch','치즈'],
        ['11','82.PNG','82.mp3','<font color="red">ch<font color="black">ur<font color="red">ch<font color="black">','w','church','__ur__','ch','교회'],
        ['11','83.PNG','83.mp3','<font color="red">ch<font color="black">erry','w','cherry','__erry','ch','체리'],
        ['11','84.PNG','84.mp3','<font color="red">ch<font color="black">ildren','w','children','__ildren','ch','어린이들'],
        ['11','85.PNG','85.mp3','ben<font color="red">ch','w','bench','ben__','ch','벤치'],
        ['11','86.PNG','86.mp3','lun<font color="red">ch','w','lunch','lun__','ch','점심'],
        ['11','87.PNG','87.mp3','bea<font color="red">ch','w','beach','bea__','ch','해변'],
        ['11','88.PNG','88.mp3','pea<font color="red">ch','w','peach','pea__','ch','복숭아'],
        ['11','1110.PNG','1110.mp3','<font size="7">boy, girl, cake</font>','s','boy, girl, cake'],
        ['11','1120.PNG','1120.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Children play at the beach.<br>It’s time for lunch.<br>Children eat lunch on the bench.<br>A boy eats cheese cake and a peach.<br>A girl eats cheese cake and a cherry.</p>','s','Children play at the beach.<br>It’s time for lunch.<br>Children eat lunch on the bench.<br>A boy eats cheese cake and a peach.<br>A girl eats cheese cake and a cherry.'],
        ['12','89.PNG','89.mp3','<font color="red">sh<font color="black">irt','w','shirt','__irt','sh','셔츠'],
        ['12','90.PNG','90.mp3','<font color="red">sh<font color="black">op','w','shop','__op','sh','가게,상점'],
        ['12','91.PNG','91.mp3','<font color="red">sh<font color="black">oes','w','shoes','__oes','sh','신발'],
        ['12','92.PNG','92.mp3','<font color="red">sh<font color="black">eep','w','sheep','__eep','sh','양'],
        ['12','93.PNG','93.mp3','fi<font color="red">sh','w','fish','fi__','sh','물고기'],
        ['12','94.PNG','94.mp3','di<font color="red">sh','w','dish','di__','sh','접시'],
        ['12','95.PNG','95.mp3','bru<font color="red">sh','w','brush','bru__','sh','양치질하다'],
        ['12','96.PNG','96.mp3','wa<font color="red">sh','w','wash','wa__','sh','씻다'],
        ['12','1210.PNG','1210.mp3','<font size="7">face, wears, buys, need, too</font>','s','face, wears, buys, need, too'],
        ['12','1220.PNG','1220.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Sue washes her face.<br>She wears shoes and goes to a shop.<br>She buys a shirt at the clothes shop.<br>I need a fish, too.<br>She buys a fish at the fish shop.</p>','s','Sue washes her face.<br>She wears shoes and goes to a shop.<br>She buys a shirt at the clothes shop.<br>I need a fish, too.<br>She buys a fish at the fish shop.'],
        ['13','97.PNG','97.mp3','<font color="red">th<font color="black">ey','w','they','__ey','Voiced sound th','그들,그것들'],
        ['13','98.PNG','98.mp3','mo<font color="red">th<font color="black">er','w','mother','mo__er','Voiced sound th','어머니'],
        ['13','99.PNG','99.mp3','bro<font color="red">th<font color="black">er','w','brother','bro__er','Voiced sound th','남동생,형'],
        ['13','100.PNG','100.mp3','fea<font color="red">th<font color="black">er','w','feather','fea__er','Voiced sound th','깃털'],
        ['13','101.PNG','101.mp3','<font color="red">th<font color="black">ree','w','three','__ree','Voiceless sound th','3'],
        ['13','102.PNG','102.mp3','<font color="red">th<font color="black">in','w','thin','__in','Voiceless sound th','마른,날씬한'],
        ['13','103.PNG','103.mp3','ma<font color="red">th','w','math','ma__','Voiceless sound th','수학'],
        ['13','104.PNG','104.mp3','mou<font color="red">th','w','mouth','mou__','Voiceless sound th','입'],
        ['13','1310.PNG','1310.mp3','<font size="7">look at, pictures, big, hat</font>','s','look at, pictures, big, hat'],
        ['13','1320.PNG','1320.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Look at the three pictures.<br>They are my mother, father and brother.<br>My mother is thin.<br>My father has a big mouth.<br>My brother wears a hat with a feather.</p>','s','Look at the three pictures.<br>They are my mother, father and brother.<br>My mother is thin.<br>My father has a big mouth.<br>My brother wears a hat with a feather.'],
        ['14','105.PNG','105.mp3','du<font color="red">ck','w','duck','du__','ck','오리'],
        ['14','106.PNG','106.mp3','ro<font color="red">ck','w','rock','ro__','ck','바위'],
        ['14','107.PNG','107.mp3','si<font color="red">ck','w','sick','si__','ck','아픈'],
        ['14','108.PNG','108.mp3','ki<font color="red">ck','w','kick','ki__','ck','차다'],
        ['14','109.PNG','109.mp3','so<font color="red">ng','w','song','so__','ng','노래'],
        ['14','110.PNG','110.mp3','wi<font color="red">ng','w','wing','wi__','ng','날개'],
        ['14','111.PNG','111.mp3','ki<font color="red">ng','w','king','ki__','ng','왕'],
        ['14','112.PNG','112.mp3','ri<font color="red">ng','w','ring','ri__','ng','반지'],
        ['14','1410.PNG','1410.mp3','<font size="7">on, sings, for, give</font>','s','on, sings, for, give'],
        ['14','1420.PNG','1420.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A duck is on the rock.<br>The duck has big wings.<br>The duck sings a song for the king.<br>The king is sick.<br>I will give you a ring.</p>','s','A duck is on the rock.<br>The duck has big wings.<br>The duck sings a song for the king.<br>The king is sick.<br>I will give you a ring.'],
        ['15','113.PNG','113.mp3','<font color="red">wh<font color="black">eel','w','wheel','__eel','wh','바퀴'],
        ['15','114.PNG','114.mp3','<font color="red">wh<font color="black">eat','w','wheat','__eat','wh','밀'],
        ['15','115.PNG','115.mp3','<font color="red">wh<font color="black">ite','w','white','__ite','wh','하얀색'],
        ['15','116.PNG','116.mp3','<font color="red">wh<font color="black">ale','w','whale','__ale','wh','고래'],
        ['15','117.PNG','117.mp3','<font color="red">ph<font color="black">oto','w','photo','__oto','ph','사진'],
        ['15','118.PNG','118.mp3','<font color="red">ph<font color="black">one','w','phone','__one','ph','전화기'],
        ['15','119.PNG','119.mp3','dol<font color="red">ph<font color="black">in','w','dolphin','dol__in','ph','돌고래'],
        ['15','120.PNG','120.mp3','ele<font color="red">ph<font color="black">ant','w','elephant','ele__ant','ph','코끼리'],
        ['15','1510.PNG','1510.mp3','<font size="7">goes, sea, take a photo</font>','s','goes, sea, take a photo'],
        ['15','1520.PNG','1520.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">An elephant goes to the sea.<br>Are you a whale?<br>No, I’m not. I am a dolphin.<br>The elephant looks at a white whale.<br>The elephant takes a photo by the wheat.</p>','s','An elephant goes to the sea.<br>Are you a whale?<br>No, I’m not. I am a dolphin.<br>The elephant looks at a white whale.<br>The elephant takes a photo by the wheat.']
    ];
    let epppattern = ['a-e','i-e','o-e','u-e','ai','ay','ee','ea','ie','Long Vowel y','oa','ow','ui','ue','Vowel y','ch','sh','Voiced sound th','Voiceless sound th','ck','ng','wh','ph'];

    // Phonics Fun 1 [unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let pf1 = [['1','01.PNG','01.mp3','<font color="red">a<font color="black">nt','w','ant','_nt','a','개미'],
        ['1','02.PNG','02.mp3','<font color="red">a<font color="black">pple','w','apple','_pple','a','사과'],
        ['1','03.PNG','03.mp3','<font color="red">a<font color="black">x','w','ax','_x','a','도끼'],
        ['1','04.PNG','04.mp3','<font color="red">e<font color="black">gg','w','egg','_gg','e','달걀'],
        ['1','05.PNG','05.mp3','<font color="red">e<font color="black">lephant','w','elephant','_lephant','e','코끼리'],
        ['1','06.PNG','06.mp3','<font color="red">e<font color="black">lbow','w','elbow','_lbow','e','팔꿈치'],
        ['2','07.PNG','07.mp3','<font color="red">i<font color="black">ndian','w','indian','_ndian','i','인디언'],
        ['2','08.PNG','08.mp3','<font color="red">i<font color="black">nk','w','ink','_nk','i','잉크'],
        ['2','09.PNG','09.mp3','<font color="red">i<font color="black">gloo','w','igloo','_gloo','i','이글루'],
        ['2','10.PNG','10.mp3','<font color="red">o<font color="black">x','w','ox','_x','o','황소'],
        ['2','11.PNG','11.mp3','<font color="red">o<font color="black">ctopus','w','octopus','_ctopus','o','문어'],
        ['2','12.PNG','12.mp3','t<font color="red">o<font color="black">p','w','top','t_p','o','팽이'],
        ['3','13.PNG','13.mp3','<font color="red">u<font color="black">mbrella','w','umbrella','_mbrella','u','우산'],
        ['3','14.PNG','14.mp3','<font color="red">u<font color="black">nder','w','under','_nder','u','아래에'],
        ['3','15.PNG','15.mp3','d<font color="red">u<font color="black">ck','w','duck','d_ck','u','오리'],
        ['4','16.PNG','16.mp3','<font color="red">b<font color="black">ag','w','bag','_ag','b','가방'],
        ['4','17.PNG','17.mp3','<font color="red">bfont color="black">ed','w','bed','_ed','b','침대'],
        ['4','18.PNG','18.mp3','<font color="red">p<font color="black">en','w','pen','_en','p','펜'],
        ['4','19.PNG','19.mp3','<font color="red">p<font color="black">ig','w','pig','_ig','p','돼지'],
        ['5','20.PNG','20.mp3','<font color="red">c<font color="black">at','w','cat','_at','c','고양이'],
        ['5','21.PNG','21.mp3','<font color="red">k<font color="black">id','w','kid','_id','k','아이들'],
        ['5','22.PNG','22.mp3','<font color="red">g<font color="black">um','w','gum','_um','g','껌'],
        ['5','23.PNG','23.mp3','<font color="red">g<font color="black">ap','w','gap','_ap','g','간격,틈'],
        ['6','24.PNG','24.mp3','<font color="red">t<font color="black">en','w','ten','_en','t','10'],
        ['6','25.PNG','25.mp3','<font color="red">t<font color="black">ub','w','tub','_ub','t','욕조'],
        ['6','26.PNG','26.mp3','<font color="red">d<font color="black">ad','w','dad','_a_','d','아빠'],
        ['6','27.PNG','27.mp3','<font color="red">d<font color="black">ot','w','dot','_ot','d','점'],
        ['7','28.PNG','28.mp3','<font color="red">m<font color="black">an','w','man','_an','m','남자'],
        ['7','29.PNG','29.mp3','<font color="red">m<font color="black">om','w','mom','_o_','m','엄마'],
        ['7','30.PNG','30.mp3','<font color="red">n<font color="black">et','w','net','_et','n','그물'],
        ['7','31.PNG','31.mp3','<font color="red">n<font color="black">ap','w','nap','_ap','n','낮잠'],
        ['8','32.PNG','32.mp3','<font color="red">f<font color="black">ox','w','fox','_ox','f','여우'],
        ['8','33.PNG','33.mp3','<font color="red">f<font color="black">an','w','fan','_an','f','선풍기'],
        ['8','34.PNG','34.mp3','<font color="red">v<font color="black">an','w','van','_an','v','밴'],
        ['8','35.PNG','35.mp3','<font color="red">v<font color="black">et','w','vet','_et','v','수의사'],
        ['10','36.PNG','36.mp3','<font color="red">s<font color="black">un','w','sun','_un','s','해,태양'],
        ['10','37.PNG','37.mp3','<font color="red">s<font color="black">it','w','sit','_it','s','앉다'],
        ['10','38.PNG','38.mp3','<font color="red">z<font color="black">ip','w','zip','_ip','z','지퍼'],
        ['10','39.PNG','39.mp3','<font color="red">z<font color="black">igzag','w','zigzag','_ig_ag','z','지그재그'],
        ['11','40.PNG','40.mp3','<font color="red">l<font color="black">id','w','lid','_id','l','뚜껑'],
        ['11','41.PNG','41.mp3','<font color="red">l<font color="black">ap','w','lap','_ap','l','허벅지'],
        ['11','42.PNG','42.mp3','<font color="red">r<font color="black">ed','w','red','_ed','r','빨간색'],
        ['11','43.PNG','43.mp3','<font color="red">r<font color="black">un','w','run','_un','r','달리다'],
        ['12','44.PNG','44.mp3','<font color="red">h<font color="black">am','w','ham','_am','h','햄'],
        ['12','45.PNG','45.mp3','<font color="red">h<font color="black">ut','w','hut','_ut','h','오두막'],
        ['12','46.PNG','46.mp3','<font color="red">j<font color="black">am','w','jam','_am','j','잼'],
        ['12','47.PNG','47.mp3','<font color="red">j<font color="black">et','w','jet','_et','j','제트기'],
        ['13','48.PNG','48.mp3','<font color="red">w<font color="black">et','w','wet','_et','w','젖은'],
        ['13','49.PNG','49.mp3','<font color="red">w<font color="black">ig','w','wig','_ig','w','가발'],
        ['13','50.PNG','50.mp3','<font color="red">y<font color="black">ak','w','yak','_ak','y','야크,티벳소'],
        ['13','51.PNG','51.mp3','<font color="red">y<font color="black">ell','w','yell','_ell','y','소리지르다'],
        ['14','52.PNG','52.mp3','bo<font color="red">x<font color="black">','w','box','bo_','x','상자'],
        ['14','53.PNG','53.mp3','si<font color="red">x<font color="black">','w','six','si_','x','6'],
        ['14','54.PNG','54.mp3','<font color="red">qu<font color="black">iz','w','quiz','_uiz','q','퀴즈'],
        ['14','55.PNG','55.mp3','<font color="red">qu<font color="black">ilt','w','quilt','_uilt','q','퀼트(자수)']
        ];
    let pf1pattern = ['a','e','i','o','u','b','p','c','k','g','t','d','m','n','f','v','s','z','l','r','h','j','w','y','x','q'];
    // Phonics Fun 2 [unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let pf2 = [['1','01.PNG','01.mp3','c<font color="red">a<font color="black">n<font color="red">e','w','cane','c_n_','a-e','지팡이'],
        ['1','02.PNG','02.mp3','l<font color="red">a<font color="black">k<font color="red">e','w','lake','l_k_','a-e','호수'],
        ['1','03.PNG','03.mp3','v<font color="red">a<font color="black">s<font color="red">e','w','vase','v_s_','a-e','꽃병'],
        ['1','04.PNG','04.mp3','t<font color="red">a<font color="black">p<font color="red">e','w','tape','t_p_','a-e','테이프'],
        ['2','05.PNG','05.mp3','p<font color="red">i<font color="black">n<font color="red">e','w','pine','p_n_','i-e','소나무'],
        ['2','06.PNG','06.mp3','b<font color="red">i<font color="black">k<font color="red">e','w','bike','b_k_','i-e','자전거'],
        ['2','07.PNG','07.mp3','k<font color="red">i<font color="black">t<font color="red">e','w','kite','k_t_','i-e','연'],
        ['2','08.PNG','08.mp3','r<font color="red">i<font color="black">d<font color="red">e','w','ride','r_d_','i-e','타다'],
        ['3','09.PNG','09.mp3','b<font color="red">o<font color="black">n<font color="red">e','w','bone','b_n_','o-e','뼈'],
        ['3','10.PNG','10.mp3','h<font color="red">o<font color="black">p<font color="red">e','w','hope','h_p_','o-e','희망'],
        ['3','11.PNG','11.mp3','n<font color="red">o<font color="black">t<font color="red">e','w','note','n_t_','o-e','공책'],
        ['3','12.PNG','12.mp3','r<font color="red">o<font color="black">p<font color="red">e','w','rope','r_p_','o-e','밧줄'],
        ['4','13.PNG','13.mp3','c<font color="red">u<font color="black">t<font color="red">e','w','cute','c_t_','u-e','귀여운'],
        ['4','14.PNG','14.mp3','t<font color="red">u<font color="black">b<font color="red">e','w','tube','t_b','u-e','용기,튜브'],
        ['4','15.PNG','15.mp3','d<font color="red">u<font color="black">n<font color="red">e','w','dune','d_n_','u-e','사구,모래언덕'],
        ['4','16.PNG','16.mp3','m<font color="red">u<font color="black">t<font color="red">e','w','mute','m_t_','u-e','음소거'],
        ['5','17.PNG','17.mp3','r<font color="red">ai<font color="black">n','w','rain','r__n','ai','비'],
        ['5','18.PNG','18.mp3','t<font color="red">ai<font color="black">l','w','tail','t__l','ai','꼬리'],
        ['5','19.PNG','19.mp3','n<font color="red">ai<font color="black">l','w','nail','n__l','ai','손톱'],
        ['5','20.PNG','20.mp3','h<font color="red">ay','w','hay','h__','ay','건초'],
        ['5','21.PNG','21.mp3','M<font color="red">ay','w','May','M__','ay','5월'],
        ['5','22.PNG','22.mp3','s<font color="red">ay','w','say','s__','ay','말하다'],
        ['6','23.PNG','23.mp3','b<font color="red">ee<font color="black">','w','bee','b__','ee','벌'],
        ['6','24.PNG','24.mp3','f<font color="red">ee<font color="black">t','w','feet','f__t','ee','발(들)'],
        ['6','25.PNG','25.mp3','s<font color="red">ee<font color="black">d','w','seed','s__d','ee','씨앗'],
        ['6','26.PNG','26.mp3','s<font color="red">ea<font color="black">','w','sea','s__','ea','바다'],
        ['6','27.PNG','27.mp3','m<font color="red">ea<font color="black">t','w','meat','m__t','ea','고기'],
        ['6','28.PNG','28.mp3','l<font color="red">ea<font color="black">f','w','leaf','l__f','ea','나뭇잎'],
        ['7','29.PNG','29.mp3','sk<font color="red">','w','sky','sk_','long y','하늘'],
        ['7','30.PNG','30.mp3','cr<font color="red">','w','cry','cr_','long y','울다'],
        ['7','31.PNG','31.mp3','dr<font color="red">','w','dry','dr_','long y','건조한'],
        ['7','32.PNG','32.mp3','cand<font color="red">y','w','candy','cand_','long y','사탕'],
        ['7','33.PNG','33.mp3','bab<font color="red">y','w','baby','bab_','long y','아기'],
        ['7','34.PNG','34.mp3','wind<font color="red">y','w','widny','wind_','long y','바람'],
        ['8','35.PNG','35.mp3','b<font color="red">oa<font color="black">t','w','boat','b__t','oa','보트'],
        ['8','36.PNG','36.mp3','r<font color="red">oa<font color="black">d','w','road','r__d','oa','도로'],
        ['8','37.PNG','37.mp3','s<font color="red">oa<font color="black">p','w','soap','s__p','oa','비누'],
        ['8','38.PNG','38.mp3','b<font color="red">ow<font color="black">l','w','bowl','b__l','ow','불다'],
        ['8','39.PNG','39.mp3','sn<font color="red">ow','w','snow','sn__','ow','눈'],
        ['8','40.PNG','40.mp3','wind<font color="red">ow','w','window','wind__','ow','창문'],
        ['9','41.PNG','41.mp3','s<font color="red">ui<font color="black">t','w','suit','s__t','ui','정장'],
        ['9','42.PNG','42.mp3','j<font color="red">ui<font color="black">ce','w','juice','j__ce','ui','주스'],
        ['9','43.PNG','43.mp3','fr<font color="red">ui<font color="black">t','w','fruit','fr__t','ui','과일'],
        ['9','44.PNG','44.mp3','bl<font color="red">ue','w','blue','bl__','ue','파란색'],
        ['9','45.PNG','45.mp3','gl<font color="red">ue','w','glue','gl__','ue','기쁜'],
        ['9','46.PNG','46.mp3','cl<font color="red">ue','w','clue','cl__','ue','단서'],
        ['10','47.PNG','47.mp3','<font color="red">bl<font color="black">ow','w','blow','__ow','bl','불다'],
        ['10','48.PNG','48.mp3','<font color="red">bl<font color="black">ack','w','black','__ack','bl','검은색'],
        ['10','49.PNG','49.mp3','<font color="red">cl<font color="black">am','w','clam','__am','cl','조개'],
        ['10','50.PNG','50.mp3','<font color="red">cl<font color="black">ean','w','clean','__ean','cl','깨끗한'],
        ['10','51.PNG','51.mp3','<font color="red">fl<font color="black">ag','w','flag','__ag','fl','깃발'],
        ['10','52.PNG','52.mp3','<font color="red">fl<font color="black">ame','w','flame','__ame','fl','화염'],
        ['11','53.PNG','53.mp3','<font color="red">br<font color="black">ave','w','brave','__ave','br','용감한'],
        ['11','54.PNG','54.mp3','<font color="red">br<font color="black">ide','w','bride','__ide','br','신부'],
        ['11','55.PNG','55.mp3','<font color="red">cr<font color="black">ab','w','crab','__ab','cr','게'],
        ['11','56.PNG','56.mp3','<font color="red">cr<font color="black">ow','w','crow','__ow','cr','까마귀'],
        ['11','57.PNG','57.mp3','<font color="red">dr<font color="black">um','w','drum','__um','dr','북'],
        ['11','58.PNG','58.mp3','<font color="red">dr<font color="black">ive','w','drive','__ive','dr','운전하다'],
        ['12','59.PNG','59.mp3','<font color="red">gl<font color="black">ad','w','glad','__ad','gl','기쁜'],
        ['12','60.PNG','60.mp3','<font color="red">gl<font color="black">obe','w','globe','__obe','gl','공,구'],
        ['12','61.PNG','61.mp3','<font color="red">pl<font color="black">um','w','plum','__um','pl','자두'],
        ['12','62.PNG','62.mp3','<font color="red">pl<font color="black">ane','w','plane','__ane','pl','비행기'],
        ['12','63.PNG','63.mp3','<font color="red">sl<font color="black">ed','w','sled','__ed','sl','썰매'],
        ['12','64.PNG','64.mp3','<font color="red">sl<font color="black">ow','w','slow','__ow','sl','느린'],
        ['13','65.PNG','65.mp3','<font color="red">fr<font color="black">og','w','frog','__og','fr','개구리'],
        ['13','66.PNG','66.mp3','<font color="red">fr<font color="black">ame','w','frame','__ame','fr','틀'],
        ['13','67.PNG','67.mp3','<font color="red">pr<font color="black">ize','w','prize','__ize','pr','상'],
        ['13','68.PNG','68.mp3','<font color="red">pr<font color="black">ay','w','pray','__ay','pr','기도하다'],
        ['13','69.PNG','69.mp3','<font color="red">tr<font color="black">ain','w','train','__ain','tr','기차'],
        ['13','70.PNG','70.mp3','<font color="red">tr<font color="black">ee','w','tree','__ee','tr','나무'],
        ['14','71.PNG','71.mp3','<font color="red">sn<font color="black">ake','w','snake','__ake','sn','뱀'],
        ['14','72.PNG','72.mp3','<font color="red">sn<font color="black">ail','w','snail','__ail','sn','달팽이'],
        ['14','73.PNG','73.mp3','<font color="red">sp<font color="black">ace','w','space','__ace','sp','우주'],
        ['14','74.PNG','74.mp3','<font color="red">sp<font color="black">in','w','spin','__in','sp','돌다'],
        ['14','75.PNG','75.mp3','<font color="red">st<font color="black">op','w','stop','__op','st','멈추다'],
        ['14','76.PNG','76.mp3','<font color="red">st<font color="black">one','w','stone','__one','st','돌']
        ];
    let pf2pattern = ['a-e','i-e','o-e','u-e','ai','ay','ee','ea','long y','oa','ow','ui','ue','bl','cl','fl','br','cr','dr','gl','pl','sl','fr','pr','tr','sn','sp','st'];

    // Phonics Fun 3 [unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let pf3 = [['1','01.PNG','01.mp3','sea<font color="red">l','w','seal','sea_','ending l','물개'],
        ['1','02.PNG','02.mp3','mai<font color="red">l','w','mail','mai_','ending l','우편'],
        ['1','03.PNG','03.mp3','ra<font color="red">m','w','ram','ra_','ending m','숫양'],
        ['1','04.PNG','04.mp3','crea<font color="red">m','w','cream','crea_','ending m','크림'],
        ['1','05.PNG','05.mp3','wi<font color="red">n','w','win','win_','ending n','이기다'],
        ['1','06.PNG','06.mp3','gree<font color="red">n','w','green','gree_','ending n','녹색'],
        ['2','07.PNG','07.mp3','<font color="red">oi<font color="black">l','w','oil','__l','oi','기름'],
        ['2','08.PNG','08.mp3','b<font color="red">oi<font color="black">l','w','boil','b__l','oi','끓다'],
        ['2','09.PNG','09.mp3','c<font color="red">oi<font color="black">n','w','coin','c__n','oi','동전'],
        ['2','10.PNG','10.mp3','b<font color="red">oy','w','boy','b__','oy','소년'],
        ['2','11.PNG','11.mp3','t<font color="red">oy','w','toy','t__','oy','장난감'],
        ['2','12.PNG','12.mp3','j<font color="red">oy','w','joy','j__','oy','기쁨'],
        ['3','13.PNG','13.mp3','l<font color="red">ou<font color="black">d','w','loud','l__d','ou','큰소리의'],
        ['3','14.PNG','14.mp3','cl<font color="red">ou<font color="black">d','w','cloud','cl__d','ou','구름'],
        ['3','15.PNG','15.mp3','h<font color="red">ou<font color="black">se','w','house','h__se','ou','집'],
        ['3','16.PNG','16.mp3','c<font color="red">ow<font color="black">','w','cow','c__','ow','암소'],
        ['3','17.PNG','17.mp3','<font color="red">ow<font color="black">l','w','owl','__l','ow','부엉이'],
        ['3','18.PNG','18.mp3','cl<font color="red">ow<font color="black">n','w','clown','cl__n','ow','광대'],
        ['4','19.PNG','19.mp3','d<font color="red">ew<font color="black">','w','dew','d__','ew','이슬'],
        ['4','20.PNG','20.mp3','n<font color="red">ew<font color="black">s','w','news','n__s','ew','뉴스'],
        ['4','21.PNG','21.mp3','st<font color="red">ew<font color="black">','w','stew','st__','ew','스튜'],
        ['4','22.PNG','22.mp3','z<font color="red">oo<font color="black">','w','zoo','z__','oo','동물원'],
        ['4','23.PNG','23.mp3','r<font color="red">oo<font color="black">f','w','roof','r__f','oo','지붕'],
        ['4','24.PNG','24.mp3','sp<font color="red">oo<font color="black">n','w','spoon','sp__n','oo','숟가락'],
        ['6','25.PNG','25.mp3','<font color="red">kn<font color="black">ee','w','knee','__ee','silent kn','무릎'],
        ['6','26.PNG','26.mp3','<font color="red">kn<font color="black">ife','w','knife','__ife','silent kn','칼'],
        ['6','27.PNG','27.mp3','<font color="red">wr<font color="black">ap','w','wrap','__ap','silent wr','싸다,포장하다'],
        ['6','28.PNG','28.mp3','<font color="red">wr<font color="black">ite','w','write','__ite','silent wr','쓰다'],
        ['6','29.PNG','29.mp3','bo<font color="red">mb','w','bomb','bo__','silent mb','폭탁'],
        ['6','30.PNG','30.mp3','la<font color="red">mb','w','lamb','la__','silent mb','염소'],
        ['7','31.PNG','31.mp3','<font color="red">spr<font color="black">ay','w','spray','___ay','spr','뿌리다'],
        ['7','32.PNG','32.mp3','<font color="red">spr<font color="black">out','w','sprout','___out','spr','줄기'],
        ['7','33.PNG','33.mp3','<font color="red">str<font color="black">eet','w','street','___eet','str','거리'],
        ['7','34.PNG','34.mp3','<font color="red">str<font color="black">ipe','w','stripe','___ipe','str','줄무늬'],
        ['7','35.PNG','35.mp3','<font color="red">str<font color="black">ew','w','screw','___ew','scr','나사'],
        ['7','36.PNG','36.mp3','<font color="red">str<font color="black">een','w','screen','___een','scr','화면'],
        ['8','37.PNG','37.mp3','st<font color="red">ar','w','star','st__','ar','별'],
        ['8','38.PNG','38.mp3','c<font color="red">ar','w','car','c__','ar','자동차'],
        ['8','39.PNG','39.mp3','wint<font color="red">er','w','winter','wint__','er','겨울'],
        ['8','40.PNG','40.mp3','summ<font color="red">er','w','summer','summ__','er','여름'],
        ['8','41.PNG','41.mp3','sk<font color="red">ir<font color="black">t','w','skirt','sk__t','ir','치마'],
        ['8','42.PNG','42.mp3','h<font color="red">ur<font color="black">t','w','hurt','h__t','ur','다치다,상처'],
        ['9','43.PNG','43.mp3','c<font color="red">or<font color="black">n','w','corn','c__n','or','옥수수'],
        ['9','44.PNG','44.mp3','h<font color="red">or<font color="black">se','w','horse','h__se','or','집'],
        ['9','45.PNG','45.mp3','h<font color="red">air','w','hair','h___','air','머리카락'],
        ['9','46.PNG','46.mp3','st<font color="red">air','w','stair','st___','air','계단'],
        ['9','47.PNG','47.mp3','<font color="red">care','w','care','c___','are','돌봄'],
        ['9','48.PNG','48.mp3','squ<font color="red">are','w','square','squ___','are','정사각형'],
        ['10','49.PNG','49.mp3','<font color="red">c<font color="black">one','w','corn','_orn','hard c','원뿔,콘'],
        ['10','50.PNG','50.mp3','<font color="red">c<font color="black">ity','w','city','_ity','soft c','도시'],
        ['10','51.PNG','51.mp3','ri<font color="red">c<font color="black">e','w','rice','ri_e','soft c','쌀'],
        ['10','52.PNG','52.mp3','<font color="red">g<font color="black">ame','w','game','_ame','hard g','게임'],
        ['10','53.PNG','53.mp3','<font color="red">g<font color="black">em','w','gem','_em','soft g','보석'],
        ['10','54.PNG','54.mp3','ma<font color="red">g<font color="black">ic','w','magic','ma_ic','soft g','마술'],
        ['11','55.PNG','55.mp3','<font color="red">sh<font color="black">ip','w','ship','__ip','sh','배'],
        ['11','56.PNG','56.mp3','<font color="red">sh<font color="black">op','w','shop','__op','sh','가게'],
        ['11','57.PNG','57.mp3','fi<font color="red">sh<font color="black">','w','fish','fi__','sh','물고기'],
        ['11','58.PNG','58.mp3','<font color="red">ch<font color="black">in','w','chin','__in','ch','턱'],
        ['11','59.PNG','59.mp3','<font color="red">ch<font color="black">air','w','chair','__air','ch','의자'],
        ['11','60.PNG','60.mp3','pea<font color="red">ch<font color="black">','w','peach','pea__','ch','복숭아'],
        ['12','61.PNG','61.mp3','<font color="red">ph<font color="black">one','w','phone','__one','ph','전화기'],
        ['12','62.PNG','62.mp3','gra<font color="red">ph<font color="black">','w','graph','gra__','ph','그래프'],
        ['12','63.PNG','63.mp3','dol<font color="red">ph<font color="black">in','w','dolphin','dol__in','ph','돌고래'],
        ['12','64.PNG','64.mp3','<font color="red">wh<font color="black">ite','w','white','__ite','wh','하얀색'],
        ['12','65.PNG','65.mp3','<font color="red">wh<font color="black">eel','w','wheel','__eel','wh','바퀴'],
        ['12','66.PNG','66.mp3','<font color="red">wh<font color="black">ale','w','whale','__ale','wh','고래'],
        ['13','67.PNG','67.mp3','<font color="red">th<font color="black">is','w','this','__is','voiced th','이것'],
        ['13','68.PNG','68.mp3','<font color="red">th<font color="black">at','w','that','__at','voiced th','저것'],
        ['13','69.PNG','69.mp3','bro<font color="red">th<font color="black">er','w','brother','bro__er','voiced th','형제'],
        ['13','70.PNG','70.mp3','<font color="red">th<font color="black">in','w','thin','__in','voiceless th','날씬한'],
        ['13','71.PNG','71.mp3','tee<font color="red">th<font color="black">','w','teeth','tee__','voiceless th','이빨(들)'],
        ['13','72.PNG','72.mp3','ma<font color="red">th<font color="black">','w','math','ma__','voiceless th','수학'],
        ['14','73.PNG','73.mp3','ki<font color="red">ng','w','king','ki__','ng','왕'],
        ['14','74.PNG','74.mp3','si<font color="red">ng','w','sing','si__','ng','노래부르다'],
        ['14','75.PNG','75.mp3','ba<font color="red">nk','w','bank','ba__','nk','은행'],
        ['14','76.PNG','76.mp3','pi<font color="red">nk','w','pink','pi__','nk','분홍색'],
        ['14','77.PNG','77.mp3','lu<font color="red">ck','w','luck','lu__','ck','행운'],
        ['14','78.PNG','78.mp3','lo<font color="red">ck','w','lock','lo__','ck','잠그다']
        ];
    let pf3pattern = ['ending l','ending m','ending n','oi','oy','ou','ow','ew','oo','silent kn','silent wr','silent mb','spr','str','scr','ar','er','ir','ur','or','ore','air','are','hard c','soft c','hard g','soft g','sh','ch','ph','wh','voiced th','voiceless th','ng','nk','ck'];

    // Phonics Town 1 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let pt1 = [['1','001.PNG','001.mp3','<font size="7">bear, big, banana, bubble</font>','s','bear, big, banana, bubble','','',''],
        ['1','002.PNG','002.mp3','<font size="7">pig, pink, pie, pretty</font>','s','pig, pink, pie, pretty','','',''],
        ['1','003.PNG','003.mp3','<font size="7">hen, hill, house, hat</font>','s','hen, hill, house, hat','','',''],

        ['2','01.PNG','01.mp3','<font color="red">b<font color="black">ear','w','bear','_ear','b','곰'],
        ['2','02.PNG','02.mp3','<font color="red">b<font color="black">ig','w','big','_ig','b','큰'],
        ['2','03.PNG','03.mp3','<font color="red">b<font color="black">anana','w','banana','_anana','b','바나나'],
        ['2','04.PNG','04.mp3','<font color="red">b<font color="black">ubble','w','bubble','_u__le','b','거품'],
        ['2','05.PNG','05.mp3','<font color="red">p<font color="black">ig','w','pig','_ig','p','돼지'],
        ['2','06.PNG','06.mp3','<font color="red">p<font color="black">ink','w','pink','_ink','p','분홍색'],
        ['2','07.PNG','07.mp3','<font color="red">p<font color="black">ie','w','pie','_ie','p','파이'],
        ['2','08.PNG','08.mp3','<font color="red">p<font color="black">retty','w','pretty','_retty','p','이쁜'],
        ['2','09.PNG','09.mp3','<font color="red">h<font color="black">en','w','hen','_en','h','암탉'],
        ['2','10.PNG','10.mp3','<font color="red">h<font color="black">ill','w','hill','_ill','h','언덕'],
        ['2','11.PNG','11.mp3','<font color="red">h<font color="black">ouse','w','house','_ouse','h','집'],
        ['2','12.PNG','12.mp3','<font color="red">h<font color="black">at','w','hat','_at','h','모자'],

        ['3','004.PNG','004.mp3','<font size="7">goes, wears, to, on, for, in</font>','s','goes, wears, to, on, for, in','','',''],

        ['4','005.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The pink pig is pretty.<br>The bear goes to the hill.<br>The hen goes to the house.</p>','s','The pink pig is pretty.<br>The bear goes to the hill.<br>The hen goes to the house.','','',''],
        ['4','006.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The bear is on the hill.<br>The bear wears a pretty hat.<br>The banana is for the pink pig.</p>','s','The bear is on the hill.<br>The bear wears a pretty hat.<br>The banana is for the pink pig.','','',''],
        ['4','007.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The hen is in the house.<br>The hen wears a big hat.<br>The pie is for the pink pig.</p>','s','The hen is in the house.<br>The hen wears a big hat.<br>The pie is for the pink pig.','','',''],
        ['4','008.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The pink pig wears a pretty hat.<br>The big pie is for the pink pig.<br>The hen is in the bubble.<br>The pink pig is in the bubble.</p>','s','The pink pig wears a pretty hat.<br>The big pie is for the pink pig.<br>The hen is in the bubble.<br>The pink pig is in the bubble.','','','','','',''],

        ['5','009.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 분홍 돼지는 예쁩니다.<br>그 곰은 그 언덕으로 갑니다.<br>그 암탉은 그 집으로 갑니다.</p>','s','그 분홍 돼지는 예쁩니다.<br>그 곰은 그 언덕으로 갑니다.<br>그 암탉은 그 집으로 갑니다.','','',''],
        ['5','010.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 곰은 그 언덕 위에 있습니다.<br>그 곰은 예쁜 모자를 씁니다.<br>그 바나나는 그 분홍 돼지를 위한 것입니다.</p>','s','그 곰은 그 언덕 위에 있습니다.<br>그 곰은 예쁜 모자를 씁니다.<br>그 바나나는 그 분홍 돼지를 위한 것입니다.','','',''],
        ['5','011.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 암탉은 그 집 안에 있습니다.<br>그 암탉은 큰 모자를 씁니다.<br>그 파이는 그 분홍 돼지를 위한 것입니다.</p>','s','그 암탉은 그 집 안에 있습니다.<br>그 암탉은 큰 모자를 씁니다.<br>그 파이는 그 분홍 돼지를 위한 것입니다.','','',''],
        ['5','012.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 분홍 돼지는 예쁜 모자를 씁니다.<br>그 큰 파이는 그 분홍 돼지를 위한 것입니다.<br>그 암탉은 그 비눗방울 안에 있습니다.<br>그 분홍 돼지는 그 비눗방울 안에 있습니다.</p>','s','그 분홍 돼지는 예쁜 모자를 씁니다.<br>그 큰 파이는 그 분홍 돼지를 위한 것입니다.<br>그 암탉은 그 비눗방울 안에 있습니다.<br>그 분홍 돼지는 그 비눗방울 안에 있습니다.','','',''],

        ['6','101.PNG','101.mp3','<font size="7">dad, doll, draw, drink</font>','s','dad, doll, draw, drink','','',''],
        ['6','102.PNG','102.mp3','<font size="7">tomato, table, toy, tent</font>','s','tomato, table, toy, tent','','',''],
        ['6','103.PNG','103.mp3','<font size="7">juice, jeans, jet, jungle</font>','s','juice, jeans, jet, jungle','','',''],

        ['7','13.PNG','13.mp3','<font color="red">d<font color="black">ad','w','dad','_a_','d','아빠'],
        ['7','14.PNG','14.mp3','<font color="red">d<font color="black">oll','w','doll','_oll','d','인형'],
        ['7','15.PNG','15.mp3','<font color="red">d<font color="black">raw','w','draw','_raw','d','그리다'],
        ['7','16.PNG','16.mp3','<font color="red">d<font color="black">rink','w','drink','_rink','d','마시다'],
        ['7','17.PNG','17.mp3','<font color="red">t<font color="black">omato','w','tomato','_oma_o','t','토마토'],
        ['7','18.PNG','18.mp3','<font color="red">t<font color="black">able','w','table','_able','t','탁자'],
        ['7','19.PNG','19.mp3','<font color="red">t<font color="black">oy','w','toy','_oy','t','장난장'],
        ['7','20.PNG','20.mp3','<font color="red">t<font color="black">ent','w','tent','_en_','t','텐트'],
        ['7','21.PNG','21.mp3','<font color="red">j<font color="black">uice','w','juice','_uice','j','주스'],
        ['7','22.PNG','22.mp3','<font color="red">j<font color="black">eans','w','jeans','_eans','j','청바지'],
        ['7','23.PNG','23.mp3','<font color="red">j<font color="black">et','w','jet','_et','j','제트기'],
        ['7','24.PNG','24.mp3','<font color="red">j<font color="black">ungle','w','jungle','_ungle','j','정글'],

        ['8','104.PNG','104.mp3','<font size="7">has, her, bag, makes, and</font>','s','has, her, bag, makes, and','','',''],

        ['9','105.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy has a table.<br>A doll and a toy are on the table.<br>Dorothy drinks tomato juice.<br>Her dad draws a doll on the table.</p>','s','Dorothy has a table.<br>A doll and a toy are on the table.<br>Dorothy drinks tomato juice.<br>Her dad draws a doll on the table.','s','Dorothy has a table.<br>A doll and a toy are on the table.<br>Dorothy drinks tomato juice.<br>Her dad draws a doll on the table.</p>','','',''],
        ['9','106.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy wears jeans.<br>The doll and the toy are in her bag.<br>Dorothy and her dad are in the jet.</p>','s','Dorothy wears jeans.<br>The doll and the toy are in her bag.<br>Dorothy and her dad are in the jet.'],
        ['9','107.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy and her dad are in the jungle.<br>Her dad makes a big tent.<br>Her dad makes a table.<br>Dorothy and her dad are in the tent.</p>','s','Dorothy and her dad are in the jungle.<br>Her dad makes a big tent.<br>Her dad makes a table.<br>Dorothy and her dad are in the tent.','','',''],
        ['9','108.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The doll is on the jet.<br>Dorothy draws the jet and the doll.<br>Her dad is in the tent.<br>Her dad drinks tomato juice.</p>','s','The doll is on the jet.<br>Dorothy draws the jet and the doll.<br>Her dad is in the tent.<br>Her dad drinks tomato juice.','','',''],

        ['10','109.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy는 탁자를 가지고 있습니다.<br>인형과 장난감이 그 탁자 위에 있습니다.<br>Dorothy는 토마토 주스를 마십니다.<br>그녀의 아빠는 그 탁자 위에 인형을 그립니다.</p>','s','Dorothy는 탁자를 가지고 있습니다.<br>인형과 장난감이 그 탁자 위에 있습니다.<br>Dorothy는 토마토 주스를 마십니다.<br>그녀의 아빠는 그 탁자 위에 인형을 그립니다.','','',''],
        ['10','110.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy는 청바지를 입습니다.<br>그 인형과 그 장난감은 그녀의 가방 안에 있습니다.<br>Dorothy와 그녀의 아빠는 그 제트기 안에 있습니다.</p>','s','Dorothy는 청바지를 입습니다.<br>그 인형과 그 장난감은 그녀의 가방 안에 있습니다.<br>Dorothy와 그녀의 아빠는 그 제트기 안에 있습니다.','','',''],
        ['10','111.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Dorothy와 그녀의 아빠는 그 정글 안에 있습니다.<br>그녀의 아빠는 큰 텐트를 만듭니다.<br>그녀의 아빠는 탁자를 만듭니다.<br>Dorothy와 그녀의 아빠는 그 텐트 안에 있습니다.</p>','s','Dorothy와 그녀의 아빠는 그 정글 안에 있습니다.<br>그녀의 아빠는 큰 텐트를 만듭니다.<br>그녀의 아빠는 탁자를 만듭니다.<br>Dorothy와 그녀의 아빠는 그 텐트 안에 있습니다.','','',''],
        ['10','112.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 인형은 그 제트기 위에 있습니다.<br>Dorothy는 그 제트기와 그 인형을 그립니다.<br>그녀의 아빠는 그 텐트 안에 있습니다.<br>그녀의 아빠는 토마토 주스를 마십니다.</p>','s','그 인형은 그 제트기 위에 있습니다.<br>Dorothy는 그 제트기와 그 인형을 그립니다.<br>그녀의 아빠는 그 텐트 안에 있습니다.<br>그녀의 아빠는 토마토 주스를 마십니다.','','',''],

        ['11','201.PNG','201.mp3','<font size="7">fox, frog, fan, fat</font>','s','fox, frog, fan, fat','','',''],
        ['11','202.PNG','202.mp3','<font size="7">vest, vase, violin, very</font>','s','vest, vase, violin, very','','',''],
        ['11','203.PNG','203.mp3','<font size="7">wig, woods, wear, wolf</font>','s','wig, woods, wear, wolf','','',''],

        ['12','25.PNG','25.mp3','<font color="red">f<font color="black">ox','w','fox','_ox','f','여우'],
        ['12','26.PNG','26.mp3','<font color="red">f<font color="black">rog','w','frog','_rog','f','개구리'],
        ['12','27.PNG','27.mp3','<font color="red">f<font color="black">an','w','fan','_an','f','선풍기,부채'],
        ['12','28.PNG','28.mp3','<font color="red">f<font color="black">at','w','fat','_at','f','뚱뚱한'],
        ['12','29.PNG','29.mp3','<font color="red">v<font color="black">est','w','vest','_est','v','조끼'],
        ['12','30.PNG','30.mp3','<font color="red">v<font color="black">ase','w','vase','_ase','v','꽃병'],
        ['12','31.PNG','31.mp3','<font color="red">v<font color="black">iolin','w','violin','_iolin','v','바이올린'],
        ['12','32.PNG','32.mp3','<font color="red">v<font color="black">ery','w','very','_ery','v','매우'],
        ['12','33.PNG','33.mp3','<font color="red">w<font color="black">ig','w','wig','_ing','w','날개'],
        ['12','34.PNG','34.mp3','<font color="red">w<font color="black">oods','w','woods','_oods','w','숲'],
        ['12','35.PNG','35.mp3','<font color="red">w<font color="black">ear','w','wear','_ear','w','입다'],
        ['12','36.PNG','36.mp3','<font color="red">w<font color="black">olf','w','wolf','_olf','w','늑대'],

        ['13','204.PNG','104.mp3','<font size="7">there is, what, this, it, not, comes, nice</font>','s','there is, what, this, it, not, comes, nice','','',''],

        ['14','205.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A fox goes to the woods.<br>The fox wears a vest.<br>There is a wig in the woods.</p>','s','A fox goes to the woods.<br>The fox wears a vest.<br>There is a wig in the woods.','','',''],
        ['14','206.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The fox goes to the frog.<br>What is this for?<br>The frog looks at the wig.<br>It’s a vase.<br>No, it’s not a vase.</p>','s','The fox goes to the frog.<br>What is this for?<br>The frog looks at the wig.<br>It’s a vase.<br>No, it’s not a vase.','','',''],
        ['14','207.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The fox and the frog go to the wolf.<br>The wolf has a violin.<br>What is this for?<br>It’s a fan.<br>No, it’s not a fan.</p>','s','The fox and the frog go to the wolf.<br>The wolf has a violin.<br>What is this for?<br>It’s a fan.<br>No, it’s not a fan.','','',''],
        ['14','208.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A fat bear comes to the fox.<br>It is my wig. Thank you.<br>The fat bear wears the wig.<br>You are very nice!</p>','s','A fat bear comes to the fox.<br>It is my wig. Thank you.<br>The fat bear wears the wig.<br>You are very nice!','','',''],

        ['15','209.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">여우가 그 숲으로 갑니다.<br>그 여우는 조끼를 입습니다.<br>그 숲 안에 가발이 있습니다.</p>','s','여우가 그 숲으로 갑니다.<br>그 여우는 조끼를 입습니다.<br>그 숲 안에 가발이 있습니다.','','',''],
        ['15','210.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 여우는 개구리에게 갑니다.<br>이것은 무엇을 위한 것이니?<br>그 개구리는 그 가발을 봅니다.<br>그것은 꽃병이야.<br>아니, 그것은 꽃병이 아니야.</p>','s','그 여우는 개구리에게 갑니다.<br>이것은 무엇을 위한 것이니?<br>그 개구리는 그 가발을 봅니다.<br>그것은 꽃병이야.<br>아니, 그것은 꽃병이 아니야.','','',''],
        ['15','211.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 여우와 그 개구리는 그 늑대에게 갑니다.<br>그 늑대는 바이올린을 가지고 있습니다.<br>이것은 무엇을 위한 것이니?<br>그것은 부채야.<br>아니, 그것은 부채가 아니야.</p>','s','그 여우와 그 개구리는 그 늑대에게 갑니다.<br>그 늑대는 바이올린을 가지고 있습니다.<br>이것은 무엇을 위한 것이니?<br>그것은 부채야.<br>아니, 그것은 부채가 아니야.','','',''],
        ['15','212.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">뚱뚱한 곰이 그 여우에게 옵니다.<br>그것은 나의 가발이야. 고마워.<br>그 뚱뚱한 곰은 그 가발을 씁니다.<br>나는 매우 멋져!</p>','s','뚱뚱한 곰이 그 여우에게 옵니다.<br>그것은 나의 가발이야. 고마워.<br>그 뚱뚱한 곰은 그 가발을 씁니다.<br>나는 매우 멋져!','','','']

        ];
    let pt1pattern = ['b','p','h','d','t','j','f','v','w'];

    // Phonics Town 2 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let pt2 = [['1','001.PNG','001.mp3','<font size="7">lamb, long, log, ladder</font>','s','lamb, long, log, ladder','','',''],
        ['1','002.PNG','002.mp3','<font size="7">raccon, river, rain, rainbow</font>','s','raccon, river, rain, rainbow','','',''],
        ['1','003.PNG','003.mp3','<font size="7">yard, yak, yellow, yarn</font>','s','yard, yak, yellow, yarn','','',''],

        ['2','01.PNG','01.mp3','<font color="red">l<font color="black">amb','w','lamb','_amb','l','양'],
        ['2','02.PNG','02.mp3','<font color="red">l<font color="black">ong','w','long','_ong','l','긴'],
        ['2','03.PNG','03.mp3','<font color="red">l<font color="black">og','w','log','_og','l','통나무'],
        ['2','04.PNG','04.mp3','<font color="red">l<font color="black">adder','w','ladder','_adder','l','사다리'],
        ['2','05.PNG','05.mp3','<font color="red">r<font color="black">accoon','w','raccoon','_accoon','r','너구리'],
        ['2','06.PNG','06.mp3','<font color="red">r<font color="black">iver','w','river','_iver','r','강'],
        ['2','07.PNG','07.mp3','<font color="red">r<font color="black">ain','w','rain','_ain','r','비'],
        ['2','08.PNG','08.mp3','<font color="red">r<font color="black">ainbow','w','rainbow','_ainbow','r','무지개'],
        ['2','09.PNG','09.mp3','<font color="red">y<font color="black">ard','w','yard','_ard','y','마당'],
        ['2','10.PNG','10.mp3','<font color="red">y<font color="black">ark','w','yark','_ark','y','야크,티벳소'],
        ['2','11.PNG','11.mp3','<font color="red">y<font color="black">ellow','w','yellow','_ellow','y','노란색'],
        ['2','12.PNG','12.mp3','<font color="red">y<font color="black">arn','w','yarn','_arn','y','털실'],

        ['3','004.PNG','004.mp3','<font size="7">looks at, map, pulls, don\'t like, up, thank</font>','s','looks at, map, pulls, don\'t like, up, thank','','',''],

        ['4','005.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A lamb is in the yard.<br>A yak looks at a yellow map.<br>A raccoon comes to the yard.<br>The raccoon has long yarn.</p>','s','A lamb is in the yard.<br>A yak looks at a yellow map.<br>A raccoon comes to the yard.<br>The raccoon has long yarn.','','',''],
        ['4','006.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a long river.<br>The yak looks at a long log.<br>The lamb and the raccoon are on the log.<br>The yak pulls the yarn in the river.</p>','s','There is a long river.<br>The yak looks at a long log.<br>The lamb and the raccoon are on the log.<br>The yak pulls the yarn in the river.','','',''],
        ['4','007.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The lamb and the yak are in the rain.<br>I don’t like rain.<br>The raccoon is in the rain.<br>I like rain.</p>','s','The lamb and the yak are in the rain.<br>I don’t like rain.<br>The raccoon is in the rain.<br>I like rain.','','',''],
        ['4','008.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The raccoon looks at a yellow ladder.<br>They go up the yellow ladder.<br>The lamb looks at the rainbow.<br>Thank you, rain.</p>','s','The raccoon looks at a yellow ladder.<br>They go up the yellow ladder.<br>The lamb looks at the rainbow.<br>Thank you, rain.','','',''],

        ['5','009.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">어린양은 그 마당에 있습니다.<br>야크는 노란색 지도를 봅니다.<br>너구리는 그 마당으로 옵니다.<br>그 너구리는 긴 실을 가지고 있습니다.</p>','s','어린양은 그 마당에 있습니다.<br>야크는 노란색 지도를 봅니다.<br>너구리는 그 마당으로 옵니다.<br>그 너구리는 긴 실을 가지고 있습니다.','','',''],
        ['5','010.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">긴 강이 있습니다.<br>그 야크는 긴 통나무를 봅니다.<br>그 어린양과 그 너구리는 그 통나무 위에 있습니다.<br>그 야크는 그 강에서 그 실을 당깁니다.</p>','s','긴 강이 있습니다.<br>그 야크는 긴 통나무를 봅니다.<br>그 어린양과 그 너구리는 그 통나무 위에 있습니다.<br>그 야크는 그 강에서 그 실을 당깁니다.','','',''],
        ['5','011.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 어린양과 그 야크는 그 빗속에 있습니다.<br>나는 비를 좋아하지 않아.<br>그 너구리는 그 빗속에 있습니다.<br>나는 비를 좋아해.</p>','s','그 어린양과 그 야크는 그 빗속에 있습니다.<br>나는 비를 좋아하지 않아.<br>그 너구리는 그 빗속에 있습니다.<br>나는 비를 좋아해.','','',''],
        ['5','012.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 너구리는 노란색 사다리를 봅니다.<br>그들은 그 노란색 사다리 위로 갑니다.<br>그 어린양은 그 무지개를 봅니다.<br>고마워, 비야.</p>','s','그 너구리는 노란색 사다리를 봅니다.<br>그들은 그 노란색 사다리 위로 갑니다.<br>그 어린양은 그 무지개를 봅니다.<br>고마워, 비야.','','',''],

        ['6','101.PNG','101.mp3','<font size="7">cat, cake, cut, kite, kangaroo</font>','s','cat, cake, cut, kite, kangaroo','','',''],
        ['6','102.PNG','102.mp3','<font size="7">gorilla, garden, game, green</font>','s','gorilla, garden, game, green','','',''],
        ['6','103.PNG','103.mp3','<font size="7">queen, quilt, quiet, quiz</font>','s','queen, quilt, quiet, quiz','','',''],

        ['7','13.PNG','13.mp3','<font color="red">c<font color="black">at','w','cat','_at','c','고양이'],
        ['7','14.PNG','14.mp3','<font color="red">c<font color="black">ake','w','cake','_ake','c','케이크'],
        ['7','15.PNG','15.mp3','<font color="red">c<font color="black">ut','w','cut','_ut','c','자르다'],
        ['7','16.PNG','16.mp3','<font color="red">k<font color="black">ite','w','kite','_ite','k','연'],
        ['7','17.PNG','17.mp3','<font color="red">k<font color="black">angaroo','w','kangaroo','_angaroo','k','캥거루'],
        ['7','18.PNG','18.mp3','<font color="red">g<font color="black">orilla','w','gorilla','_orilla','g','고릴라'],
        ['7','19.PNG','19.mp3','<font color="red">g<font color="black">arden','w','garden','_arden','g','정원'],
        ['7','20.PNG','20.mp3','<font color="red">g<font color="black">ame','w','game','_ame','g','게임'],
        ['7','21.PNG','21.mp3','<font color="red">g<font color="black">reen','w','green','_reen','g','녹색'],
        ['7','22.PNG','22.mp3','<font color="red">qu<font color="black">een','w','queen','_ueen','q','여왕'],
        ['7','23.PNG','23.mp3','<font color="red">qu<font color="black">ilt','w','quilt','_uilt','q','퀼트(자수)'],
        ['7','24.PNG','24.mp3','<font color="red">qu<font color="black">iet','w','quiet','_uiet','q','조용한'],
        ['7','25.PNG','25.mp3','<font color="red">qu<font color="black">iz','w','quiz','_uiz','q','퀴즈'],

        ['8','104.PNG','104.mp3','<font size="7">gets, gives, sees, goodbye, down</font>','s','gets, gives, sees, goodbye, down','','',''],

        ['9','105.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A cat goes to a gorilla.<br>The cat has a pretty quilt<br>The cat is in the woods.<br>It is quiet.</p>','s','A cat goes to a gorilla.<br>The cat has a pretty quilt<br>The cat is in the woods.<br>It is quiet.','','',''],
        ['9','106.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The cat is in the garden.<br>The queen likes a quiz game.<br>The cat gets a nice cake.</p>','s','The cat is in the garden.<br>The queen likes a quiz game.<br>The cat gets a nice cake.','','',''],
        ['9','107.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The cat goes up the green hill.<br>The cat sees a kangaroo.<br>The kangaroo gives the kite to the cat.<br>Thank you. Goodbye.</p>','s','The cat goes up the green hill.<br>The cat sees a kangaroo.<br>The kangaroo gives the kite to the cat.<br>Thank you. Goodbye.','','',''],
        ['9','108.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The cat gives the quilt to the gorilla.<br>The gorilla cuts the cake.<br>Go down the green hill.<br>And go to the quiet woods.</p>','s','The cat gives the quilt to the gorilla.<br>The gorilla cuts the cake.<br>Go down the green hill.<br>And go to the quiet woods.','','',''],

        ['10','109.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">고양이는 고릴라에게 갑니다.<br>그 고양이는 예쁜 퀼트를 가지고 있습니다.<br>그 고양이는 그 숲속에 있습니다.<br>그곳은 조용합니다.</p>','s','고양이는 고릴라에게 갑니다.<br>그 고양이는 예쁜 퀼트를 가지고 있습니다.<br>그 고양이는 그 숲속에 있습니다.<br>그곳은 조용합니다.','','',''],
        ['10','110.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 고양이는 그 정원에 있습니다.<br>그 여왕은 퀴즈게임을 좋아합니다.<br>그 고양이는 멋진 케이크를 얻습니다.</p>','s','그 고양이는 그 정원에 있습니다.<br>그 여왕은 퀴즈게임을 좋아합니다.<br>그 고양이는 멋진 케이크를 얻습니다.','','',''],
        ['10','111.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 고양이는 그 초록색 언덕 위로 갑니다.<br>그 고양이는 캥거루를 봅니다.<br>그 캥거루는 그 연을 그 고양이에게 줍니다.<br>고마워, 안녕.</p>','s','그 고양이는 그 초록색 언덕 위로 갑니다.<br>그 고양이는 캥거루를 봅니다.<br>그 캥거루는 그 연을 그 고양이에게 줍니다.<br>고마워, 안녕.','','',''],
        ['10','112.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 고양이는 그 퀼트를 그 고릴라에게 줍니다.<br>그 고릴라는 그 케이크를 자릅니다.<br>그 초록색 언덕 아래로 가라.<br>그리고 그 조용한 숲으로 가라.</p>','s','그 고양이는 그 퀼트를 그 고릴라에게 줍니다.<br>그 고릴라는 그 케이크를 자릅니다.<br>그 초록색 언덕 아래로 가라.<br>그리고 그 조용한 숲으로 가라.','','',''],

        ['11','201.PNG','201.mp3','<font size="7">sea, seal, sun, sing</font>','s','sea, seal, sun, sing','','',''],
        ['11','202.PNG','202.mp3','<font size="7">zebra, zoo, zookeeper, zigzag</font>','s','zebra, zoo, zookeeper, zigzag','','',''],
        ['11','203.PNG','203.mp3','<font size="7">six, fox, box, mailbox</font>','s','six, fox, box, mailbox','','',''],

        ['12','26.PNG','26.mp3','<font color="red">s<font color="black">ea','w','sea','_ea','s','바다'],
        ['12','27.PNG','27.mp3','<font color="red">s<font color="black">eal','w','seal','_eal','s','물개'],
        ['12','28.PNG','28.mp3','<font color="red">s<font color="black">un','w','sun','_un','s','해,태양'],
        ['12','29.PNG','29.mp3','<font color="red">s<font color="black">ing','w','sing','_ing','s','노래부르다'],
        ['12','30.PNG','30.mp3','<font color="red">z<font color="black">ebra','w','zebra','_ebra','z','얼룩말'],
        ['12','31.PNG','31.mp3','<font color="red">z<font color="black">oo','w','zoo','_oo','z','동물원'],
        ['12','32.PNG','32.mp3','<font color="red">z<font color="black">ookeeper','w','zookeeper','_ookeeper','z','사육사'],
        ['12','33.PNG','33.mp3','<font color="red">z<font color="black">igzag','w','zigzag','_ig_ag','z','지그재그'],
        ['12','34.PNG','34.mp3','si<font color="red">x<font color="black">','w','six','si_','x','6'],
        ['12','35.PNG','35.mp3','fo<font color="red">x<font color="black">','w','fox','fo_','x','여우'],
        ['12','36.PNG','36.mp3','bo<font color="red">x<font color="black">','w','box','bo_','x','상자'],
        ['12','37.PNG','37.mp3','mailbo<font color="red">x<font color="black">','w','mailbox','mailbo_','x','우편함'],

        ['13','204.PNG','204.mp3','<font size="7">boys, swims, falls into, tree, under, cars</font>','s','boys, swims, falls into, tree, under, cars','','',''],

        ['14','205.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A zebra is in the zoo.<br>Six boys like the zebra.<br>A fox is on the box.</p>','s','A zebra is in the zoo.<br>Six boys like the zebra.<br>A fox is on the box.','','',''],
        ['14','206.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The zookeeper goes to the mailbox.<br>The zebra goes in zigzags.<br>The fox looks at the zebra.<br>The zebra goes to the sea.</p>','s','The zookeeper goes to the mailbox.<br>The zebra goes in zigzags.<br>The fox looks at the zebra.<br>The zebra goes to the sea.','','',''],
        ['14','207.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">A seal swims in the sea.<br>The zebra falls into the sea.<br>Six lambs sing under the tree.<br>The zebra is under the sun.</p>','s','A seal swims in the sea.<br>The zebra falls into the sea.<br>Six lambs sing under the tree.<br>The zebra is under the sun.','','',''],
        ['14','208.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Six cars are under the sun.<br>The zebra sings in the car.<br>The zookeeper is in the zoo.<br>The fox sings on the box.</p>','s','Six cars are under the sun.<br>The zebra sings in the car.<br>The zookeeper is in the zoo.<br>The fox sings on the box.','','',''],

        ['15','209.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">얼룩말은 그 동물원에 있습니다.<br>6명의 소년들은 그 얼룩말을 좋아합니다.<br>여우는 그 상자 위에 있습니다.</p>','s','얼룩말은 그 동물원에 있습니다.<br>6명의 소년들은 그 얼룩말을 좋아합니다.<br>여우는 그 상자 위에 있습니다.','','',''],
        ['15','210.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 사육사는 그 우편함으로 갑니다.<br>그 얼룩말은 지그재그로 갑니다.<br>그 여우는 그 얼룩말을 봅니다.<br>그 얼룩말은 그 바다로 갑니다.</p>','s','그 사육사는 그 우편함으로 갑니다.<br>그 얼룩말은 지그재그로 갑니다.<br>그 여우는 그 얼룩말을 봅니다.<br>그 얼룩말은 그 바다로 갑니다.','','',''],
        ['15','211.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">물개는 그 바다에서 수영합니다.<br>그 얼룩말은 그 바다에 빠집니다.<br>6마리의 어린양들이 그 나무 아래에서 노래합니다.<br>그 얼룩말은 그 태양 아래에 있습니다.</p>','s','물개는 그 바다에서 수영합니다.<br>그 얼룩말은 그 바다에 빠집니다.<br>6마리의 어린양들이 그 나무 아래에서 노래합니다.<br>그 얼룩말은 그 태양 아래에 있습니다.','','',''],
        ['15','212.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">6대의 자동차들이 그 태양 아래에 있습니다.<br>그 얼룩말은 그 자동차에서 노래합니다.<br>그 사욕사는 그 동물원에 있습니다.<br>그 여우는 그 상자 위에서 노래합니다.</p>','s','6대의 자동차들이 그 태양 아래에 있습니다.<br>그 얼룩말은 그 자동차에서 노래합니다.<br>그 사욕사는 그 동물원에 있습니다.<br>그 여우는 그 상자 위에서 노래합니다.','','','']
        ];
    let pt2pattern = ['l','r','y','c','k','g','q','s','z','x'];
    
    // Phonics Town 3 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let pt3 = [['1','001.PNG','001.mp3','<font size="7">monkey, mole, mirror, make</font>','s','monkey, mole, mirror, make','','',''],
        ['1','002.PNG','002.mp3','<font size="7">nut, necktie, nest, noise</font>','s','nut, necktie, nest, noise','','',''],
        ['1','003.PNG','003.mp3','<font size="7">rabbit, angry, hat, happy</font>','s','rabbit, angry, hat, happy','','',''],

        ['2','01.PNG','01.mp3','<font color="red">m<font color="black">onkey','w','monkey','_onkey','m','원숭이'],
        ['2','02.PNG','02.mp3','<font color="red">m<font color="black">ole','w','mole','_ole','m','두더지'],
        ['2','03.PNG','03.mp3','<font color="red">m<font color="black">irror','w','mirror','_irror','m','거울'],
        ['2','04.PNG','04.mp3','<font color="red">m<font color="black">ake','w','make','_ake','m','만들다'],
        ['2','05.PNG','05.mp3','<font color="red">n<font color="black">ut','w','nut','_ut','n','견과류'],
        ['2','06.PNG','06.mp3','<font color="red">n<font color="black">ecktie','w','necktie','_ecktie','n','넥타이'],
        ['2','07.PNG','07.mp3','<font color="red">n<font color="black">est','w','nest','_est','n','둥지'],
        ['2','08.PNG','08.mp3','<font color="red">n<font color="black">oise','w','noise','_oise','n','소음'],
        ['2','09.PNG','09.mp3','r<font color="red">a<font color="black">bbit','w','rabbit','r_bbit','a','토끼'],
        ['2','10.PNG','10.mp3','<font color="red">a<font color="black">ngry','w','angry','_ngry','a','화가난'],
        ['2','11.PNG','11.mp3','h<font color="red">a<font color="black">t','w','hat','h_t','a','모자'],
        ['2','12.PNG','12.mp3','h<font color="red">a<font color="black">ppy','w','happy','h_ppy','a','행복한'],

        ['3','004.PNG','004.mp3','<font size="7">breaks, birds, sleep, magician</font>','s','breaks, birds, sleep, magician','','',''],

        ['4','005.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey has the rabbit’s nuts.<br>The rabbit is angry.<br>The cat looks at her hat.<br>I am very angry.</p>','s','The monkey has the rabbit’s nuts.<br>The rabbit is angry.<br>The cat looks at her hat.<br>I am very angry.','','',''],
        ['4','006.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The mole wears a necktie.<br>The monkey breaks the mole’s mirror.<br>Birds sleep in the nest.<br>The monkey makes noise.</p>','s','The mole wears a necktie.<br>The monkey breaks the mole’s mirror.<br>Birds sleep in the nest.<br>The monkey makes noise.','','',''],
        ['4','007.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey doesn’t make noise.<br>The mole and the rabbit are angry.<br>The magician’s hat is in the nest.<br>The monkey gives the hat to the magician.</p>','s','The monkey doesn’t make noise.<br>The mole and the rabbit are angry.<br>The magician’s hat is in the nest.<br>The monkey gives the hat to the magician.','','',''],
        ['4','008.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The monkey gets the magician’s bag.<br>The monkey makes nuts.<br>The monkey makes the mole’s mirror.<br>They are very happy.</p>','s','The monkey gets the magician’s bag.<br>The monkey makes nuts.<br>The monkey makes the mole’s mirror.<br>They are very happy.','','',''],

        ['5','009.PNG','005.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 원숭이는 그 토끼의 견과들을 가지고 있습니다.<br>그 토끼는 화가 납니다.<br>그 고양이는 그녀의 모자를 봅니다.<br>나는 매우 화가 났어.</p>','s','그 원숭이는 그 토끼의 견과들을 가지고 있습니다.<br>그 토끼는 화가 납니다.<br>그 고양이는 그녀의 모자를 봅니다.<br>나는 매우 화가 났어.','','',''],
        ['5','010.PNG','006.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 두더지는 넥타이를 맵니다.<br>그 원숭이는 그 두더지의 거울을 깹니다.<br>새들은 그 둥지 안에서 잡니다.<br>그 원숭이는 소음을 냅니다.</p>','s','그 두더지는 넥타이를 맵니다.<br>그 원숭이는 그 두더지의 거울을 깹니다.<br>새들은 그 둥지 안에서 잡니다.<br>그 원숭이는 소음을 냅니다.','','',''],
        ['5','011.PNG','007.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 원숭이는 소음을 내지 않습니다.<br>그 두더지와 그 토끼는 화가 납니다.<br>그 마술사의 모자는 그 둥지 안에 있습니다.<br>그 원숭이는 그 모자를 그 마술사에게 줍니다.</p>','s','그 원숭이는 소음을 내지 않습니다.<br>그 두더지와 그 토끼는 화가 납니다.<br>그 마술사의 모자는 그 둥지 안에 있습니다.<br>그 원숭이는 그 모자를 그 마술사에게 줍니다.','','',''],
        ['5','012.PNG','008.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 원숭이는 그 마술사의 가방을 얻습니다.<br>그 원숭이는 견과들을 만듭니다.<br>그 원숭이는 그 두더지의 거울을 만듭니다.<br>그들은 행복합니다.</p>','s','그 원숭이는 그 마술사의 가방을 얻습니다.<br>그 원숭이는 견과들을 만듭니다.<br>그 원숭이는 그 두더지의 거울을 만듭니다.<br>그들은 행복합니다.','','',''],

        ['6','101.PNG','101.mp3','<font size="7">letter, send, sled, bed, help</font>','s','letter, send, sled, bed, help','','',''],
        ['6','102.PNG','102.mp3','<font size="7">sister, big, hill, sick, gift</font>','s','sister, big, hill, sick, gift','','',''],

        ['7','13.PNG','13.mp3','l<font color="red">e<font color="black">tter','w','letter','l_tter','e','편지'],
        ['7','14.PNG','14.mp3','s<font color="red">e<font color="black">nd','w','send','s_nd','e','보내다'],
        ['7','15.PNG','15.mp3','sl<font color="red">e<font color="black">d','w','sled','sl_d','e','썰매'],
        ['7','16.PNG','16.mp3','b<font color="red">e<font color="black">d','w','bed','b_d','e','침대'],
        ['7','17.PNG','17.mp3','h<font color="red">e<font color="black">lp','w','help','h_lp','e','돕다'],
        ['7','18.PNG','18.mp3','s<font color="red">i<font color="black">ster','w','sister','s_ster','i','누나,언니,여동생'],
        ['7','19.PNG','19.mp3','b<font color="red">i<font color="black">g','w','big','b_g','i','가방'],
        ['7','20.PNG','20.mp3','h<font color="red">i<font color="black">ll','w','hill','h_ll','i','언덕'],
        ['7','21.PNG','21.mp3','s<font color="red">i<font color="black">ck','w','sick','s_ck','i','아픈'],
        ['7','22.PNG','22.mp3','g<font color="red">i<font color="black">ft','w','gift','g_ft','i','선물'],

        ['8','104.PNG','104.mp3','<font size="7">writes, she, rides, with, children, says</font>','s','writes, she, rides, with, children, says','','',''],

        ['9','105.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister writes a letter.<br>She sends the letter to Santa Claus.<br>My sister has a big sled.<br>She rides the sled down the hill.</p>','s','My sister writes a letter.<br>She sends the letter to Santa Claus.<br>My sister has a big sled.<br>She rides the sled down the hill.','','',''],
        ['9','106.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is on the bed.<br>She is sick.<br>My sister rides the big sled.<br>Santa Claus looks at the letter.</p>','s','My sister is on the bed.<br>She is sick.<br>My sister rides the big sled.<br>Santa Claus looks at the letter.</p>','','',''],
        ['9','107.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is with Santa Claus.<br>They ride the big sled down the hill.<br>My sister helps Santa Claus.<br>She gives gifts to the children.</p>','s','My sister is with Santa Claus.<br>They ride the big sled down the hill.<br>My sister helps Santa Claus.<br>She gives gifts to the children.','','',''],
        ['9','108.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister says goodbye to Santa Claus.<br>She rides the sled down the hill.<br>My sister is on the bed.<br>She looks at the gift.<br>Merry Christmas!</p>','s','My sister says goodbye to Santa Claus.<br>She rides the sled down the hill.<br>My sister is on the bed.<br>She looks at the gift.<br>Merry Christmas!','','',''],

        ['10','109.PNG','105.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 편지를 씁니다.<br>그녀는 그 편지를 산타클로스에게 보냅니다.<br>나의 여동생은 큰 썰매를 가지고 있습니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.</p>','s','나의 여동생은 편지를 씁니다.<br>그녀는 그 편지를 산타클로스에게 보냅니다.<br>나의 여동생은 큰 썰매를 가지고 있습니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.','','',''],
        ['10','110.PNG','106.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 그 침대 위에 있습니다.<br>그녀는 아픕니다.<br>나의 여동생은 그 큰 썰매를 탑니다.<br>산타클로스는 그 편지를 봅니다.</p>','s','나의 여동생은 그 침대 위에 있습니다.<br>그녀는 아픕니다.<br>나의 여동생은 그 큰 썰매를 탑니다.<br>산타클로스는 그 편지를 봅니다.','','',''],
        ['10','111.PNG','107.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 산타 클로스와 함께 있습니다.<br>그들은 그 언덕 아래로 그 큰 썰매를 탑니다.<br>나의 여동생은 산타클로스를 돕습니다.<br>그녀는 그 어린이들에게 선물들을 줍니다.</p>','s','나의 여동생은 산타 클로스와 함께 있습니다.<br>그들은 그 언덕 아래로 그 큰 썰매를 탑니다.<br>나의 여동생은 산타클로스를 돕습니다.<br>그녀는 그 어린이들에게선물들을 줍니다.','','',''],
        ['10','112.PNG','108.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">나의 여동생은 산타클로스에게 작별 인사를 합니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.<br>나의 여동생은 그 침대 위에 있습니다.<br>그녀는 그 선물을 봅니다.<br>즐거운 크리스마스!</p>','s','나의 여동생은 산타클로스에게 작별 인사를 합니다.<br>그녀는 그 언덕 아래로 그 썰매를 탑니다.<br>나의 여동생은 그 침대 위에 있습니다.<br>그녀는 그 선물을 봅니다. <br>즐거운 크리스마스!','','',''],

        ['11','201.PNG','201.mp3','<font size="7">ox, ostrich, song, rock, fox</font>','s','ox, ostrich, song, rock, fox','','',''],
        ['11','202.PNG','202.mp3','<font size="7">duck, run, hut, lunch, umbrella</font>','s','duck, run, hut, lunch, umbrella','','',''],

        ['12','23.PNG','23.mp3','<font color="red">o<font color="black">x','w','ox','_x','o','황소'],
        ['12','24.PNG','24.mp3','<font color="red">o<font color="black">strich','w','ostrich','_strich','o','타조'],
        ['12','25.PNG','25.mp3','s<font color="red">o<font color="black">ng','w','song','s_ng','o','노래'],
        ['12','26.PNG','26.mp3','r<font color="red">o<font color="black">ck','w','rock','r_ck','o','바위'],
        ['12','27.PNG','27.mp3','f<font color="red">o<font color="black">x','w','fox','f_x','o','여우'],
        ['12','28.PNG','28.mp3','d<font color="red">u<font color="black">ck','w','duck','d_ck','u','오리'],
        ['12','29.PNG','29.mp3','r<font color="red">u<font color="black">n','w','run','r_n','u','달리다'],
        ['12','30.PNG','30.mp3','h<font color="red">u<font color="black">t','w','hut','h_t','u','오두막'],
        ['12','31.PNG','31.mp3','l<font color="red">u<font color="black">nch','w','lunch','l_nch','u','점심'],
        ['12','32.PNG','32.mp3','<font color="red">u<font color="black">mbrella','w','umbrella','_mbrella','u','우산'],

        ['13','204.PNG','204.mp3','<font size="7">man, runs, after, meets, eats, friends</font>','s','man, runs, after, meets, eats, friends','','',''],

        ['14','205.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">An ox runs up the hill.<br>A man runs after the ox.<br>The ox meets a duck.<br>The ox and the duck make a big hut.</p>','s','An ox runs up the hill.<br>A man runs after the ox.<br>The ox meets a duck.<br>The ox and the duck make a big hut.','','',''],
        ['14','206.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">An ostrich comes to the hut.<br>The ox eats lunch with friends.<br>The duck has a big umbrella.<br>The ostrich sings a song on the rock.</p>','s','An ostrich comes to the hut.<br>The ox eats lunch with friends.<br>The duck has a big umbrella.<br>The ostrich sings a song on the rock.','','',''],
        ['14','207.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The duck and the o see the hut.<br>They are under the big umbrella.<br>A fox comes to the hut.<br>The duck sees the fox on the rock.</p>','s','The duck and the o see the hut.<br>They are under the big umbrella.<br>A fox comes to the hut.<br>The duck sees the fox on the rock.','','',''],
        ['14','208.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">The fox runs up the hill.<br>The ox runs after the fox.<br>The duck is under the umbrella.<br>The ostrich sings a song on the rock.</p>','s','The fox runs up the hill.<br>The ox runs after the fox.<br>The duck is under the umbrella.<br>The ostrich sings a song on the rock.','','',''],

        ['15','209.PNG','205.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">황소는 그 언덕 위로 달립니다.<br>남자는 그 황소를 쫓아갑니다.<br>그 황소는 오리를 만납니다.<br>그 황소와 그 오리는 큰 오두막을 만듭니다.</p>','s','황소는 그 언덕 위로 달립니다.<br>남자는 그 황소를 쫓아갑니다.<br>그 황소는 오리를 만납니다.<br>그 황소와 그 오리는 큰 오두막을 만듭니다.','','',''],
        ['15','210.PNG','206.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">타조가 그 오두막으로 옵니다.<br>그 황소는 친구들과 함께 점심을 먹습니다.<br>그 오리는 큰 우산을 가지고 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.</p>','s','타조가 그 오두막으로 옵니다.<br>그 황소는 친구들과 함께 점심을 먹습니다.<br>그 오리는 큰 우산을 가지고 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.','','',''],
        ['15','211.PNG','207.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 오리와 그 타조는 그 오두막을 봅니다.<br>그들은 그 큰 우산 아래에 있습니다.<br>여우가 그 오두막을 옵니다.<br>그 오리는 그 바위 위에서 그 여우를 봅니다.</p>','s','그 오리와 그 타조는 그 오두막을 봅니다.<br>그들은 그 큰 우산 아래에 있습니다.<br>여우가 그 오두막을 옵니다.<br>그 오리는 그 바위 위에서 그 여우를 봅니다.','','',''],
        ['15','212.PNG','208.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">그 여우는 그 언덕 위로 달립니다.<br>그 황소는 그 여우를 쫓아갑니다.<br>그 오리는 그 우산 아래에 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.</p>','s','그 여우는 그 언덕 위로 달립니다.<br>그 황소는 그 여우를 쫓아갑니다.<br>그 오리는 그 우산 아래에 있습니다.<br>그 타조는 그 바위 위에서 노래를 부릅니다.','','','']

        ];
    let pt3pattern = ['m','n','a','e','i','o','u'];
 
    // Theme English 1 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let te1 = [
        ['1','011.PNG','011.mp3','doll','s','doll','','',''],
        ['1','012.PNG','012.mp3','car','s','car','','',''],
        ['1','013.PNG','013.mp3','ball','s','ball','','',''],
        ['1','014.PNG','014.mp3','balloon','s','balloon','','',''],
        ['1','015.PNG','015.mp3','robot','s','robot','','',''],
        ['1','016.PNG','016.mp3','kite','s','kite','','',''],

        ['2','021.PNG','021.mp3','doll','w','doll','','','인형'],
        ['2','022.PNG','022.mp3','car','w','car','','','자동차'],
        ['2','023.PNG','023.mp3','ball','w','ball','','','공'],
        ['2','024.PNG','024.mp3','balloon','w','balloon','','','풍선'],
        ['2','025.PNG','025.mp3','robot','w','robot','','','로봇'],
        ['2','026.PNG','026.mp3','kite','w','kite','','','연'],

        ['3','031.PNG','031.mp3','Chant','s','Chat','','',''],

        ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a balloon.<br><br><br><br></p>','s','What is this?<br>It is a balloon.','','',''],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a car.<br><br><br><br></p>','s','What is this?<br>It is a car.','','',''],
        ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a doll.<br><br><br><br></p>','s','What is this?<br>It is a doll.','','',''],
        ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a robot.<br><br><br><br></p>','s','What is this?<br>It is a robot.','','',''],
        ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a kite.<br><br><br><br></p>','s','What is this?<br>It is a kite.','','',''],
        ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a ball.<br><br><br><br></p>','s','What is this?<br>It is a ball.','','',''],

        ['5','051.PNG','051.mp3','bike','w','bike','','','자전거'],
        ['5','052.PNG','052.mp3','airplane','w','airplane','','','비행기'],
        ['5','053.PNG','053.mp3','boat','w','boat','','','보트'],
        ['5','054.PNG','054.mp3','truck','w','truck','','','트럭'],
        ['5','055.PNG','055.mp3','bus','w','bus','','','버스'],
        ['5','056.PNG','056.mp3','train','w','train','','','기차'],

        ['6','061.PNG','061.mp3','Chant','s','Chant','','',''],

        ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a bike.<br><br><br><br></p>','s','What is this?<br>It is a bike.','','',''],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a truck.<br><br><br><br></p>','s','What is this?<br>It is a truck.','','',''],
        ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a airplane.<br><br><br><br></p>','s','What is this?<br>It is a airplane.','','',''],
        ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a train.<br><br><br><br></p>','s','What is this?<br>It is a train.','','',''],
        ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a boat.<br><br><br><br></p>','s','What is this?<br>It is a train.','','',''],
        ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a but.<br><br><br><br></p>','s','What is this?<br>It is a but.','','',''],

        ['8','081.PNG','081.mp3','red','s','red','','',''],
        ['8','082.PNG','082.mp3','yellow','s','yellow','','',''],
        ['8','083.PNG','083.mp3','blue','s','blue','','',''],
        ['8','084.PNG','084.mp3','green','s','green','','',''],
        ['8','085.PNG','085.mp3','black','s','black','','',''],
        ['8','086.PNG','086.mp3','white','s','white','','',''],

        ['9','091.PNG','091.mp3','red','w','red','','','빨간색'],
        ['9','092.PNG','092.mp3','yellow','w','yellow','','','노란색'],
        ['9','093.PNG','093.mp3','blue','w','blue','','','파란색'],
        ['9','094.PNG','094.mp3','green','w','green','','','녹색'],
        ['9','095.PNG','095.mp3','black','w','black','','','검정색'],
        ['9','096.PNG','096.mp3','white','w','white','','','하얀색'],

        ['10','101.PNG','101.mp3','Chant','s','Chant','','',''],

        ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is green.<br><br><br><br></p>','s','What color is this?<br>It is green.','','',''],
        ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is red.<br><br><br><br></p>','s','What color is this?<br>It is red.','','',''],
        ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is black.<br><br><br><br></p>','s','What color is this?<br>It is black.','','',''],
        ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is white.<br><br><br><br></p>','s','What color is this?<br>It is white.','','',''],
        ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is yellow.<br><br><br><br></p>','s','What color is this?<br>It is yellow.','','',''],
        ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What color is this?<br>It is blue.<br><br><br><br></p>','s','What color is this?<br>It is blue.','','',''],

        ['12','121.PNG','121.mp3','big','w','big','','','큰'],
        ['12','122.PNG','122.mp3','small','w','small','','','작은'],
        ['12','123.PNG','123.mp3','long','w','long','','','긴'],
        ['12','124.PNG','124.mp3','short','w','short','','','짧은'],
        ['12','125.PNG','125.mp3','new','w','new','','','새로운'],
        ['12','126.PNG','126.mp3','old','w','old','','','오래된'],

        ['13','131.PNG','131.mp3','Chant','s','Chant','','',''],

        ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>It is a a small ball.<br><br><br><br></p>','s','What is that?<br>It is a a small ball.','','',''],
        ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a big ball.<br><br><br><br></p>','s','What is this?<br>It is a big ball.','','',''],
        ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a long train.<br><br><br><br></p>','s','What is this?<br>It is a long train.','','',''],
        ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a short train.<br><br><br><br></p>','s','What is this?<br>It is a short train.','','',''],
        ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a new robot.<br><br><br><br></p>','s','What is this?<br>It is a new robot.','','',''],
        ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a old robot.<br><br><br><br></p>','s','What is this?<br>It is a old robot.','','',''],

        ['15','151.PNG','151.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>It is a a new yellow car.<br><br><br><br></p>','s','What is that?<br>It is a a new yellow car.','','',''],
        ['15','152.PNG','152.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a new green bike.<br><br><br><br></p>','s','What is this?<br>It is a new green bike.','','',''],
        ['15','153.PNG','153.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a old red car.<br><br><br><br></p>','s','What is this?<br>It is a old red car.','','',''],
        ['15','154.PNG','154.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a old green kite.<br><br><br><br></p>','s','What is this?<br>It is a old green kite.','','',''],
        ['15','155.PNG','155.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a big red ball.<br><br><br><br></p>','s','What is this?<br>It is a big red ball.','','',''],
        ['15','156.PNG','156.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>It is a long blue train.<br><br><br><br></p>','s','What is this?<br>It is a long blue train.','','','']

        ];

    // Theme English 2 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let te2 = [
        ['1','011.PNG','011.mp3','jacket','s','jacket','','',''],
        ['1','012.PNG','012.mp3','sweater','s','sweater','','',''],
        ['1','013.PNG','013.mp3','shirt','s','shirt','','',''],
        ['1','014.PNG','014.mp3','skirt','s','skirt','','',''],
        ['1','015.PNG','015.mp3','coat','s','coat','','',''],
        ['1','016.PNG','016.mp3','cap','s','cap','','',''],

        ['2','021.PNG','021.mp3','jacket','w','jacket','','','자켓'],
        ['2','022.PNG','022.mp3','sweater','w','sweater','','','스웨터'],
        ['2','023.PNG','023.mp3','shirt','w','shirt','','','셔츠'],
        ['2','024.PNG','024.mp3','skirt','w','skirt','','','치마'],
        ['2','025.PNG','025.mp3','coat','w','coat','','','코트'],
        ['2','026.PNG','026.mp3','cap','w','cap','','','모자'],

        ['3','031.PNG','031.mp3','Chant','s','Chant','','',''],

        ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a cap.<br><br><br><br></p>','s','What is it?<br>It is a cap.','','',''],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a shirt.<br><br><br><br></p>','s','What is it?<br>It is a shirt.','','',''],
        ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a jacket.<br><br><br><br></p>','s','What is it?<br>It is a jacket.','','',''],
        ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a skirt.<br><br><br><br></p>','s','What is it?<br>It is a skirt.','','',''],
        ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a sweater.<br><br><br><br></p>','s','What is it?<br>It is a sweater.','','',''],
        ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a coat.<br><br><br><br></p>','s','What is it?<br>It is a coat.','','',''],
        ['4','047.PNG','047.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a new coat.<br><br><br><br></p>','s','What is it?<br>It is a new coat.','','',''],
        ['4','048.PNG','048.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a blue cap.<br><br><br><br></p>','s','What is it?<br>It is a blue cap.','','',''],
        ['4','049.PNG','049.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a yellow shirt.<br><br><br><br></p>','s','What is it?<br>It is a yellow shirt.','','',''],
        ['4','0410.PNG','0410.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a green sweater.<br><br><br><br></p>','s','What is it?<br>It is a green sweater.','','',''],
        ['4','0411.PNG','0411.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a big jacket.<br><br><br><br></p>','s','What is it?<br>It is a big jacket.','','',''],
        ['4','0412.PNG','0412.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is it?<br>It is a long skirt.<br><br><br><br></p>','s','What is it?<br>It is a long skirt.','','',''],

        ['5','051.PNG','051.mp3','pants','w','pants','','','바지'],
        ['5','052.PNG','052.mp3','socks','w','socks','','','양말'],
        ['5','053.PNG','053.mp3','shoes','w','shoes','','','신발'],
        ['5','054.PNG','054.mp3','gloves','w','gloves','','','장갑'],
        ['5','055.PNG','055.mp3','shorts','w','shorts','','','반바지'],

        ['6','061.PNG','061.mp3','Chant','s','Chant','','',''],

        ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are shorts.<br><br><br><br></p>','s','What are they?<br>They are shorts.','','',''],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are socks.<br><br><br><br></p>','s','What are they?<br>They are socks.','','',''],
        ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are gloves.<br><br><br><br></p>','s','What are they?<br>They are gloves.','','',''],
        ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are pants.<br><br><br><br></p>','s','What are they?<br>They are pants.','','',''],
        ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What are they?<br>They are shoes.<br><br><br><br></p>','s','What are they?<br>They are shoes.','','',''],

        ['8','081.PNG','081.mp3','one','s','one','','',''],
        ['8','082.PNG','082.mp3','two','s','two','','',''],
        ['8','083.PNG','083.mp3','three','s','three','','',''],
        ['8','084.PNG','084.mp3','four','s','four','','',''],
        ['8','085.PNG','085.mp3','five','s','five','','',''],
        ['8','086.PNG','086.mp3','six','s','six','','',''],

        ['9','091.PNG','091.mp3','one','w','one','','','1'],
        ['9','092.PNG','092.mp3','two','w','two','','','2'],
        ['9','093.PNG','093.mp3','three','w','three','','','3'],
        ['9','094.PNG','094.mp3','four','w','four','','','4'],
        ['9','095.PNG','095.mp3','five','w','five','','','5'],
        ['9','096.PNG','096.mp3','six','w','six','','','6'],

        ['10','101.PNG','101.mp3','Chant','s','Chant','','',''],

        ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many balls are there?<br>six<br><br><br><br></p>','s','How many balls are there?<br>six','','',''],
        ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many shoes are there?<br>four<br><br><br><br></p>','s','How many shoes are there?<br>four','','',''],
        ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many airplanes are there?<br>one<br><br><br><br></p>','s','How many airplanes are there?<br>one','','',''],
        ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many dolls are there?<br>three<br><br><br><br></p>','s','How many dolls are there?<br>three','','',''],
        ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many caps are there?<br>five<br><br><br><br></p>','s','How many caps are there?<br>five','','',''],
        ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many cars are there?<br>two<br><br><br><br></p>','s','How many cars are there?<br>two','','',''],

        ['12','121.PNG','121.mp3','seven','w','seven','','','7'],
        ['12','122.PNG','122.mp3','eight','w','eight','','','8'],
        ['12','123.PNG','123.mp3','nine','w','nine','','','9'],
        ['12','124.PNG','124.mp3','ten','w','ten','','','10'],
        ['12','125.PNG','125.mp3','eleven','w','eleven','','','11'],
        ['12','126.PNG','126.mp3','twelve','w','twelve','','','12'],

        ['13','131.PNG','131.mp3','Chant','s','Chant','','',''],

        ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many balls are there?<br>six<br><br><br><br></p>','s','How many balls are there?<br>six','','',''],
        ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many shoes are there?<br>four<br><br><br><br></p>','s','How many shoes are there?<br>four','','',''],
        ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many airplanes are there?<br>one<br><br><br><br></p>','s','How many airplanes are there?<br>one','','',''],
        ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many dolls are there?<br>three<br><br><br><br></p>','s','How many dolls are there?<br>three','','',''],
        ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many caps are there?<br>five<br><br><br><br></p>','s','How many caps are there?<br>five','','',''],
        ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">How many cars are there?<br>two<br><br><br><br></p>','s','How many cars are there?<br>two','','',''],

        ['15','151.PNG','151.mp3','Review','s','Review','','','']

        ];

    // Theme English 3 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let te3 = [
        ['1','011.PNG','011.mp3','father','s','father','','',''],
        ['1','012.PNG','012.mp3','mother','s','mother','','',''],
        ['1','013.PNG','013.mp3','grandfather','s','grandfather','','',''],
        ['1','014.PNG','014.mp3','grandmother','s','grandmother','','',''],
        ['1','015.PNG','015.mp3','sister','s','sister','','',''],
        ['1','016.PNG','016.mp3','brother','s','brother','','',''],

        ['2','021.PNG','021.mp3','father','w','father','','','아버지'],
        ['2','022.PNG','022.mp3','mother','w','mother','','','어머니'],
        ['2','023.PNG','023.mp3','grandfather','w','grandfather','','','할아버지'],
        ['2','024.PNG','024.mp3','grandmother','w','grandmother','','','할머니'],
        ['2','025.PNG','025.mp3','sister','w','sister','','','누나,언니,여동생'],
        ['2','026.PNG','026.mp3','brother','w','brother','','','오빠,형,남동생'],

        ['3','021.PNG','021.mp3','Chant','s','Chant','','',''],

        ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my mother.<br><br><br><br></p>','s','Who is this?<br>This is my mother.','','',''],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my grandmother.<br><br><br><br></p>','s','Who is this?<br>This is my grandmother','','',''],
        ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my grandfather.<br><br><br><br></p>','s','Who is this?<br>This is my grandfather.','','',''],
        ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my father.<br><br><br><br></p>','s','Who is this?<br>This is my father.','','',''],
        ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my brother.br><br><br><br></p>','s','Who is this?<br>This is my brother.','','',''],
        ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Who is this?<br>This is my sister.<br><br><br><br></p>','s','Who is this?<br>This is my sister.','','',''],

        ['5','051.PNG','051.mp3','tall','w','tall','','','키가 큰'],
        ['5','052.PNG','052.mp3','short','w','short','','','짧은, 키가 작은'],
        ['5','053.PNG','053.mp3','fat','w','fat','','','뚱뚱한'],
        ['5','054.PNG','054.mp3','thin','w','thin','','','날씬한'],
        ['5','055.PNG','055.mp3','old','w','old','','','나이가 든'],
        ['5','056.PNG','056.mp3','young','w','young','','','어린'],

        ['6','061.PNG','061.mp3','Chant','s','Chant','','',''],

        ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandfather is old.<br><br><br><br></p>','s','My grandfather is old.','','',''],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandmother is fat.<br><br><br><br></p>','s','My grandmother is fat.','','',''],
        ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My father is tall.<br><br><br><br></p>','s','My father is tall.','','',''],
        ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My mother is thin.<br><br><br><br></p>','s','My mother is thin.','','',''],
        ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My brother is young.<br><br><br><br></p>','s','My brother is young.','','',''],
        ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is short.<br><br><br><br></p>','s','My sister is short.','','',''],
        ['7','077.PNG','077.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My brother is short.<br><br><br><br></p>','s','My brother is short.','','',''],
        ['7','078.PNG','078.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My mother is tall.<br><br><br><br></p>','s','My mother is tall.','','',''],
        ['7','079.PNG','079.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My father is thin.<br><br><br><br></p>','s','My father is thin.','','',''],
        ['7','0710.PNG','0710.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandfather is fat.<br><br><br><br></p>','s','My grandfather is fat.','','',''],
        ['7','0711.PNG','0711.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My grandmother is old.<br><br><br><br></p>','s','My grandmother is old.','','',''],
        ['7','0712.PNG','0712.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">My sister is young.<br><br><br><br></p>','s','My sister is young.','','',''],

        ['8','081.PNG','081.mp3','eye','s','eye','','',''],
        ['8','082.PNG','082.mp3','nose','s','nose','','',''],
        ['8','083.PNG','083.mp3','mouth','s','mouth','','',''],
        ['8','084.PNG','084.mp3','ear','s','ear','','',''],
        ['8','085.PNG','085.mp3','hair','s','hair','','',''],
        ['8','086.PNG','086.mp3','face','s','face','','',''],

        ['9','091.PNG','091.mp3','nose','w','nose','','','코'],
        ['9','092.PNG','092.mp3','hair','w','hair','','','머리카락'],
        ['9','093.PNG','093.mp3','face','w','face','','','얼굴'],
        ['9','094.PNG','094.mp3','ear','w','ear','','','귀'],
        ['9','095.PNG','095.mp3','eye','w','eye','','','눈'],
        ['9','096.PNG','096.mp3','mouth','w','mouth','','','입'],

        ['10','101.PNG','101.mp3','Chant','s','Chant','','',''],

        ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">blue, eye<br>My eyes are blue.<br><br><br><br></p>','s','blue, eye<br>My eyes are blue.','','',''],
        ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">small, mouth<br>My mouth is small.<br><br><br><br></p>','s','small, mouth<br>My mouth is small.','','',''],
        ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, nose<br>My nose is long.<br><br><br><br></p>','s','long, nose<br>My nose is long.','','',''],
        ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">white, face<br>My face is white.<br><br><br><br></p>','s','white, face<br>My face is white.','','',''],
        ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">black, hair<br>My hair is black.<br><br><br><br></p>','s','black, hair<br>My hair is black.','','',''],
        ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, ear<br>My ears are big.<br><br><br><br></p>','s','big, ear<br>My ears are big.','','',''],

        ['12','121.PNG','121.mp3','neck','w','neck','','','목'],
        ['12','122.PNG','122.mp3','arm','w','arm','','','팔'],
        ['12','123.PNG','123.mp3','leg','w','leg','','','다리'],
        ['12','124.PNG','124.mp3','foot','w','foot','','','발'],
        ['12','125.PNG','125.mp3','hand','w','hand','','','손'],
        ['12','126.PNG','126.mp3','head','w','head','','','머리'],

        ['13','131.PNG','131.mp3','Chant','s','Chant','','',''],

        ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, foot<br>My feet are big.<br><br><br><br></p>','s','blue, eye<br>My eyes are blue.','','',''],
        ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, leg<br>My legs are long.<br><br><br><br></p>','s','long, leg<br>My legs are long.','','',''],
        ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, neck<br>My neck is big.<br><br><br><br></p>','s','long, neck<br>My neck is big.','','',''],
        ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">long, arm<br>My arms are big.<br><br><br><br></p>','s','long, arm<br>My arms are big.','','',''],
        ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, head<br>My head is big.<br><br><br><br></p>','s','big, head<br>My head is big.','','',''],
        ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">big, hand<br>My hands are big.<br><br><br><br></p>','s','big, hand<br>My hands are big.','','',''],

        ['15','151.PNG','151.mp3','Review','s','Review','','','']
        ];

    // Theme English 4 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let te4 = [
        ['1','011.PNG','011.mp3','bedroom','s','bedroom','','',''],
        ['1','012.PNG','012.mp3','bathroom','s','bathroom','','',''],
        ['1','013.PNG','013.mp3','kitchen','s','kitchen','','',''],
        ['1','014.PNG','014.mp3','living room','s','livingroom','','',''],
        ['1','015.PNG','015.mp3','dining room','s','dining room','','',''],

        ['2','021.PNG','021.mp3','bedroom','w','bedroom','','','침실'],
        ['2','022.PNG','022.mp3','bathroom','w','bathroom','','','욕실'],
        ['2','023.PNG','023.mp3','dining room','w','dining room','','','식당'],
        ['2','024.PNG','024.mp3','living room','w','livingroom','','','거실'],
        ['2','025.PNG','025.mp3','kitchen','w','kitchen','','','부엌'],

        ['3','031.PNG','031.mp3','Chant','s','Chant','','',''],

        ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your grandfather?<br>My grandfather is in the bedroom.<br><br><br><br></p>','s','Where is your grandfather?<br>My grandfather is in the bedroom.','','',''],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your father?<br>My father is in the kitchen.<br><br><br><br></p>','s','Where is your father?<br>My father is in the kitchen.','','',''],
        ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your mother?<br>My mother is in the bathroom.<br><br><br><br></p>','s','Where is your mother?<br>My mother is in the bathroom.','','',''],
        ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your sister?<br>My sister is in the livingroom.<br><br><br><br></p>','s','Where is your sister?<br>My sister is in the livingroom.','','',''],
        ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your brother?<br>My brother is in the diningroom.<br><br><br><br></p>','s','Where is your brother?<br>My brother is in the diningroom.','','',''],

        ['5','051.PNG','051.mp3','sofa','w','sofa','','','소파'],
        ['5','052.PNG','052.mp3','telephone','w','telephone','','','전화기'],
        ['5','053.PNG','053.mp3','clock','w','clock','','','시계'],
        ['5','054.PNG','054.mp3','table','w','table','','','탁자'],
        ['5','055.PNG','055.mp3','bed','w','bed','','','침대'],

        ['6','061.PNG','061.mp3','Chant','s','Chant','','',''],

        ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the telephone.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the telephone.','','',''],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the table.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the table.','','',''],
        ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the sofa.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the sofa.','','',''],
        ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the clock.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the clock.','','',''],
        ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is Willy?<br>Willy is on the bed.<br><br><br><br></p>','s','Where is Willy?<br>Willy is on the bed.','','',''],

        ['8','081.PNG','081.mp3','spoon','s','spoon','','',''],
        ['8','082.PNG','082.mp3','fork','s','fork','','',''],
        ['8','083.PNG','083.mp3','cup','s','cup','','',''],
        ['8','084.PNG','084.mp3','plate','s','plate','','',''],
        ['8','085.PNG','085.mp3','bowl','s','bowl','','',''],

        ['9','091.PNG','091.mp3','bowl','w','bowl','','','숟가락'],
        ['9','092.PNG','092.mp3','fork','w','fork','','','포크'],
        ['9','093.PNG','093.mp3','cup','w','cup','','','컵'],
        ['9','094.PNG','094.mp3','spoon','w','spoon','','','접시'],
        ['9','095.PNG','095.mp3','plate','w','plate','','','그릇'],

        ['10','101.PNG','101.mp3','Chant','s','Chant','','',''],

        ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your grandfather?<br>My grandfather is in the bedroom.<br><br><br><br></p>','s','Where is your grandfather?<br>My grandfather is in the bedroom.','','',''],
        ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your father?<br>My father is in the kitchen.<br><br><br><br></p>','s','Where is your father?<br>My father is in the kitchen.','','',''],
        ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your mother?<br>My mother is in the bathroom.<br><br><br><br></p>','s','Where is your mother?<br>My mother is in the bathroom.','','',''],
        ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your sister?<br>My sister is in the livingroom.<br><br><br><br></p>','s','Where is your sister?<br>My sister is in the livingroom.','','',''],
        ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is your brother?<br>My brother is in the diningroom.<br><br><br><br></p>','s','Where is your brother?<br>My brother is in the diningroom','','',''],

        ['12','121.PNG','121.mp3','bathtub','w','bathtub','','','욕조'],
        ['12','122.PNG','122.mp3','towel','w','towel','','','수건'],
        ['12','123.PNG','123.mp3','toilet','w','toilet','','','변기'],
        ['12','124.PNG','124.mp3','mirror','w','mirror','','','거울'],
        ['12','125.PNG','125.mp3','soap','w','soap','','','비누'],
        ['12','126.PNG','126.mp3','shower','w','shower','','','샤워기'],

        ['13','131.PNG','131.mp3','Chant','s','Chant','','',''],

        ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the shower?<br>The shower is in the bathroom.<br><br><br><br></p>','s','Where is the shower?<br>The shower is in the bathroom.','','',''],
        ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the towel?<br>The towel is in the bathroom.<br><br><br><br></p>','s','Where is the towel?<br>The towel is in the bathroom.','','',''],
        ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the mirror?<br>The mirror is in the bathroom.<br><br><br><br></p>','s','Where is the mirror?<br>The mirror is in the bathroom.','','',''],
        ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the soap?<br>The soap is in the bathroom.<br><br><br><br></p>','s','Where is the soap?<br>The soap is in the bathroom.','','',''],
        ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the bathtub?<br>The bathtub is in the bathroom.<br><br><br><br></p>','s','Where is the bathtub?<br>The bathtub is in the bathroom.','','',''],
        ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Where is the toilet?<br>The toilet is in the bathroom.<br><br><br><br></p>','s','Where is the toilet?<br>The toilet is in the bathroom.','','',''],

        ['15','151.PNG','151.mp3','Review','s','Review','','','']
        ];

    // Theme English 5 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let te5 = [
        ['1','011.PNG','011.mp3','carrot','s','carrot','','',''],
        ['1','012.PNG','012.mp3','potato','s','potato','','',''],
        ['1','013.PNG','013.mp3','cucumber','s','cucumber','','',''],
        ['1','014.PNG','014.mp3','onion','s','onion','','',''],
        ['1','015.PNG','015.mp3','cabbage','s','cabbage','','',''],
        ['1','016.PNG','016.mp3','tomato','s','tomato','','',''],

        ['2','021.PNG','021.mp3','carrot','s','carrot','','','당근'],
        ['2','022.PNG','022.mp3','potato','s','potato','','','감자'],
        ['2','023.PNG','023.mp3','cucumber','s','cucumber','','','오이'],
        ['2','024.PNG','024.mp3','onion','s','onion','','','양파'],
        ['2','025.PNG','025.mp3','cabbage','s','cabbage','','','양배추'],
        ['2','026.PNG','026.mp3','tomato','s','tomato','','','토마토'],

        ['3','031.PNG','031.mp3','Chant','s','Chant','','',''],

        ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is an onion.<br><br><br><br></p>','s','What is this?<br>This is an onion.','','',''],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a cucumber.<br><br><br><br></p>','s','What is this?<br>This is a cucumber.','','',''],
        ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a tomato.<br><br><br><br></p>','s','What is this?<br>This is a tomato.','','',''],
        ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a cabbage.<br><br><br><br></p>','s','What is this?<br>This is a cabbage.','','',''],
        ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is a strawberrry.<br><br><br><br></p>','s','What is this?<br>This is a strawberrry.','','',''],
        ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is this?<br>This is carrot.<br><br><br><br></p>','s','What is this?<br>This is carrot.','','',''],

        ['5','051.PNG','051.mp3','orange','w','orange','','','오렌지'],
        ['5','052.PNG','052.mp3','pear','w','pear','','','배'],
        ['5','053.PNG','053.mp3','banana','w','banana','','','바나나'],
        ['5','054.PNG','054.mp3','strawberry','w','strawberry','','','딸기'],
        ['5','055.PNG','055.mp3','lemon','w','lemon','','','레몬'],
        ['5','056.PNG','056.mp3','apple','w','apple','','','사과'],

        ['6','061.PNG','061.mp3','Chant','s','Chant','','',''],

        ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is an orange.<br><br><br><br></p>','s','What is that?<br>That is an orange.','','',''],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a strawberry.<br><br><br><br></p>','s','What is that?<br>That is a strawberry.','','',''],
        ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a pear.<br><br><br><br></p>','s','What is that?<br>That is a pear.','','',''],
        ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a banana.<br><br><br><br></p>','s','What is that?<br>That is a banana.','','',''],
        ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is an apple.<br><br><br><br></p>','s','What is that?<br>That is an apple.','','',''],
        ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What is that?<br>That is a lemon.<br><br><br><br></p>','s','What is that?<br>That is a lemon.','','',''],

        ['8','081.PNG','081.mp3','chocolate','s','chocolate','','',''],
        ['8','082.PNG','082.mp3','cake','s','cake','','',''],
        ['8','083.PNG','083.mp3','cheese','s','cheese','','',''],
        ['8','084.PNG','084.mp3','bread','s','bread','','',''],
        ['8','085.PNG','085.mp3','candy','s','candy','','',''],
        ['8','086.PNG','086.mp3','pizza','s','pizza','','',''],

        ['9','091.PNG','091.mp3','candy','w','candy','','','사탕'],
        ['9','092.PNG','092.mp3','chocolate','w','chocolate','','','초콜렛'],
        ['9','093.PNG','093.mp3','cheese','w','cheese','','','치즈'],
        ['9','094.PNG','094.mp3','bread','w','bread','','','빵'],
        ['9','095.PNG','095.mp3','cake','w','cake','','','케이크'],
        ['9','096.PNG','096.mp3','pizza','w','pizza','','','피자'],

        ['10','101.PNG','101.mp3','Chant','s','Chant','','',''],

        ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like chocolate.<br><br><br><br></p>','s','What do you like?<br>I like chocolate.','','',''],
        ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like cake.<br><br><br><br></p>','s','What do you like?<br>I like cake.','','',''],
        ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like cheese.<br><br><br><br></p>','s','What do you like?<br>I like cheese.','','',''],
        ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like candy.<br><br><br><br></p>','s','What do you like?<br>I like candy.','','',''],
        ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like pizza.<br><br><br><br></p>','s','What do you like?<br>I like pizza.','','',''],
        ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you like?<br>I like bread.<br><br><br><br></p>','s','What do you like?<br>I like bread.','','',''],

        ['12','121.PNG','121.mp3','juice','w','juice','','','주스'],
        ['12','122.PNG','122.mp3','water','w','water','','','물'],
        ['12','123.PNG','123.mp3','milk','w','milk','','','우유'],
        ['12','124.PNG','124.mp3','Coke','w','Coke','','','콜라'],
        ['12','125.PNG','125.mp3','icecream','w','icecream','','','아이스크림'],

        ['13','131.PNG','131.mp3','Chant','s','Chant','','',''],

        ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like juice?<br>I don\'t like juice.<br><br><br><br></p>','s','Do you like juice?<br>I don\'t like juice.','','',''],
        ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like milk?<br>I like milk.<br><br><br><br></p>','s','Do you like milk?<br>I like milk.','','',''],
        ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like water?<br>I don\'t like water.<br><br><br><br></p>','s','Do you like water?<br>I don\'t like water.','','',''],
        ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like Coke?<br>I like Coke.<br><br><br><br></p>','s','Do you like Coke?<br>I like Coke.','','',''],
        ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">Do you like icecream?<br>I like icecream.<br><br><br><br></p>','s','Do you like icecream?<br>I like icecream.','','',''],

        ['15','151.PNG','151.mp3','Review','s','Review','','','']
        ];

    // Theme English 6 s-[unit, image, sound, word, sentence:s or word:w, only word] w-[unit, image, sound, word, sentence:s or word:w, only word, word with blank, phnoics pattern, korean]
    let te6 = [
        ['1','011.PNG','011.mp3','dog','s','dog','','',''],
        ['1','012.PNG','012.mp3','cat','s','cat','','',''],
        ['1','013.PNG','013.mp3','bird','s','bird','','',''],
        ['1','014.PNG','014.mp3','fish','s','fish','','',''],
        ['1','015.PNG','015.mp3','rabbit','s','rabbit','','',''],
        ['1','016.PNG','016.mp3','hamster','s','hamster','','',''],

        ['2','021.PNG','021.mp3','bird','w','bird','','','새'],
        ['2','022.PNG','022.mp3','hamster','w','hamster','','','햄스터'],
        ['2','023.PNG','023.mp3','rabbit','w','rabbit','','','토끼'],
        ['2','024.PNG','024.mp3','dog','w','dog','','','개'],
        ['2','025.PNG','025.mp3','cat','w','cat','','','고양이'],
        ['2','026.PNG','026.mp3','fish','w','fish','','','물고기'],

        ['3','031.PNG','031.mp3','Chant','s','Chant','','',''],

        ['4','041.PNG','041.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a cat.<br><br><br><br></p>','s','What do you have?<br>I have a cat.','','',''],
        ['4','042.PNG','042.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a dog.<br><br><br><br></p>','s','What do you have?<br>I have a dog.','','',''],
        ['4','043.PNG','043.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a hamster.<br><br><br><br></p>','s','What do you have?<br>I have a hamster.','','',''],
        ['4','044.PNG','044.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a fish.<br><br><br><br></p>','s','What do you have?<br>I have a fish.','','',''],
        ['4','045.PNG','045.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a rabbit.<br><br><br><br></p>','s','What do you have?<br>I have a rabbit.','','',''],
        ['4','046.PNG','046.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a bird.<br><br><br><br></p>','s','What do you have?<br>I have a bird.','','',''],

        ['5','051.PNG','051.mp3','frog','w','frog','','','개구리'],
        ['5','052.PNG','052.mp3','snake','w','snake','','','뱀'],
        ['5','053.PNG','053.mp3','snail','w','snail','','','달팽이'],
        ['5','054.PNG','054.mp3','mouse','w','mouse','','','쥐'],
        ['5','055.PNG','055.mp3','squirrel','w','squirrel','','','다람쥐'],
        ['5','056.PNG','056.mp3','turtle','w','turtle','','','거북이'],

        ['6','061.PNG','061.mp3','Chant','s','Chant','','',''],

        ['7','071.PNG','071.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a mouse.<br><br><br><br></p>','s','What do you have?<br>I have a mouse.','','',''],
        ['7','072.PNG','072.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a snail.<br><br><br><br></p>','s','What do you have?<br>I have a snail.','','',''],
        ['7','073.PNG','073.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a turtle.<br><br><br><br></p>','s','What do you have?<br>I have a turtle.','','',''],
        ['7','074.PNG','074.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a squirrel.<br><br><br><br></p>','s','What do you have?<br>I have a squirrel.','','',''],
        ['7','075.PNG','075.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a snake.<br><br><br><br></p>','s','What do you have?<br>I have a snake.','','',''],
        ['7','076.PNG','076.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">What do you have?<br>I have a frog.<br><br><br><br></p>','s','What do you have?<br>I have a frog.','','',''],

        ['8','081.PNG','081.mp3','lion','s','lion','','',''],
        ['8','082.PNG','082.mp3','elephant','s','elephant','','',''],
        ['8','083.PNG','083.mp3','monkey','s','monkey','','',''],
        ['8','084.PNG','084.mp3','tiger','s','tiger','','',''],
        ['8','085.PNG','085.mp3','bear','s','bear','','',''],
        ['8','086.PNG','086.mp3','giraffe','s','giraffe','','',''],

        ['9','091.PNG','091.mp3','lion','w','lion','','','사자'],
        ['9','092.PNG','092.mp3','bear','w','bear','','','곰'],
        ['9','093.PNG','093.mp3','tiger','w','tiger','','','호랑이'],
        ['9','094.PNG','094.mp3','monkey','w','monkey','','','원숭이'],
        ['9','095.PNG','095.mp3','giraffe','w','giraffe','','','기린'],
        ['9','096.PNG','096.mp3','elephant','w','elephant','','','코끼리'],

        ['10','101.PNG','101.mp3','Chant','s','Chant','','',''],

        ['11','111.PNG','111.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a bear.<br><br><br><br></p>','s','There is a bear','','',''],
        ['11','112.PNG','112.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is an elephant.<br><br><br><br></p>','s','There is an elephant.','','',''],
        ['11','113.PNG','113.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a tiger.<br><br><br><br></p>','s','There is a tiger.','','',''],
        ['11','114.PNG','114.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a lion.<br><br><br><br></p>','s','There is a lion.','','',''],
        ['11','115.PNG','115.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a giraffe.<br><br><br><br></p>','s','There is a giraffe.','','',''],
        ['11','116.PNG','116.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a monkey.<br><br><br><br></p>','s','There is a monkey','','',''],

        ['12','121.PNG','121.mp3','horse','w','horse','','','말'],
        ['12','122.PNG','122.mp3','duck','w','duck','','','오리'],
        ['12','123.PNG','123.mp3','pig','w','pig','','','돼지'],
        ['12','124.PNG','124.mp3','cow','w','cow','','','소'],
        ['12','125.PNG','125.mp3','goat','w','goat','','','염소'],
        ['12','126.PNG','126.mp3','lamb','w','lamb','','','양'],

        ['13','131.PNG','131.mp3','Chant','s','Chant','','',''],

        ['14','141.PNG','141.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a goat.<br><br><br><br></p>','s','There is a goat.','','',''],
        ['14','142.PNG','142.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a lamb.<br><br><br><br></p>','s','There is a lamb.','','',''],
        ['14','143.PNG','143.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a horse.<br><br><br><br></p>','s','There is a horse.','','',''],
        ['14','144.PNG','144.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a cow.<br><br><br><br></p>','s','There is a cow.','','',''],
        ['14','145.PNG','145.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a pig.<br><br><br><br></p>','s','There is a pig.','','',''],
        ['14','146.PNG','146.mp3','<p style="font-size:30px;text-align:center;line-height:1.5;">There is a duck.<br><br><br><br></p>','s','There is a duck.','','',''],

        ['15','151.PNG','151.mp3','Review','s','Review','','','']
        ];

    // 선택된 아이템을 담을 변수
    let selecteditem=[['0','0','0','0','0','0','0','0','0']];

    //선택된 아이템의 갯수
    let listlength;

      //선택의 유무
    let choiceismade;

    // 전체 몇번 Repeat 했는지 카운트 하는 변수
    let repeatcount = -1;

    // 선택된 책의 이름을 담는 변수
    let bookselected;

    // 선택된 Unit의 수를 담는 변수
    let unitselected = [];

    //학습시간을 카운트 하기 위해 처음 접속인지만 확인하는 boolean
    let totalfirst = true;

    // 전체 학습시간을 저장하는 변수
    let StudyStartTime;
    let StudyEndTime;

    // 처음 접속이라는 걸 인지
    let isitfirst = true;

    //문제 정답 숫자를 담는 변수
    let answer = 0;
    let useranswer = 0;

    //총문제수와 정답을 대답한 갯수를 담는 변수
    let correctanswer = 0;
    let totalproblem = 0;

    // 게임을 위한 선택된 단어에 대한 정보 배열 [book, unit, image, sound, word, sentence:s or word:w, only word, word with blank, pattern letter(s)]
    let playunitinfo = [['0','0','0','0','0','0','0','0','0','0']];

    //해당 문제의 mp3파일의 전체 경로
    let problemaudiosource;

    // wordstudy 하기 위한 음성 출력을 위한 변수
    let myaudio = new Audio();

    // wordstudy 할때 하나씩 올라가기 위한 변수
    let wordstudycount;

    // setTimeout으로 작동하는 것을 clearTimeout 하기 위한 변수
    let ifcancelTO;

    //범용으로 넣어둘 패턴저장 변수
    let questionpattern = ['0'];

    /* 선택된 책과 유닛 알아내는 함수, 교재는 document.getElementById('book').value 에 있고,
        선택된 내용들은 모두 selecteditem 배열에 들어가 있으므로 이것을 참조하면 될 것.
        선택이 정상적으로 이루어졌으면 choiceismade = true.
    */
    function Getunits(){
        let units = document.getElementsByName('unit');
        let unitchoice;

        bookselected = document.getElementById('bookname').value;
        //unitselected 배열 초기화
        unitselected.length = 0;

        choiceismade = false;
        whatchosen = '선택교재 : '+bookselected+' => 선택된 유닛 : ';

        count=1;

        //이전에 학습이 진행중이었다면....
        wordstudycount = 0;
        StopStudy();

        //교재가 다시 시작되므로 반복횟수는 0으로 재설정
        repeatcount = -1;
        let repeatshow  = document.getElementById("repeat");
        let repeatnumber  = document.getElementById("repeatnumber");
        let tellrepeat="";

        tellrepeat = tellrepeat + bookselected + "의 ";
        for(let i=0;i<units.length-1;i++){
          if(units[i].checked)
          tellrepeat+="Unit"+units[i].value+',';
        }

        tellrepeat = tellrepeat.slice(0,-1);

        if(units[15].checked){
          tellrepeat=bookselected+"의 전체유닛";
        }

        //repeatshow.innerHTML = tellrepeat;
        //repeatnumber.innerHTML = "<span style='font-size:60px;'>" + repeatcount + "</span>"

        //최초 학습시간 기록용
        if(totalfirst){
          totalfirst = false;
          let startTime = new Date();
          document.getElementById('totalstudytime').innerHTML = "<font color='red'>[학습시작]</font>"+startTime.getHours()+"시"+startTime.getMinutes()+"분"+startTime.getSeconds()+"초";
          StudyStartTime = startTime.getHours()*60*60+startTime.getMinutes()*60+startTime.getSeconds();
        }

        //초기화
        for(let i=1;i<selecteditem.length;i++){
          selecteditem.splice(1,listlength);
        }

        /* playgame 확인학습할때
        for(let i=1;i<playunitinfo.length;i++){
          playunitinfo.splice(1,playunitinfo.length);
        } */

        //Stopplaygame();

        //시작
        if(units[units.length-1].checked){
          //모든 유닛이 선택되었으면 해당 교재의 모든 정보를 selecteditem에 입력
          // Alphabet Phonics 일때
          listlength = 1;
          for(let i=1;i<16;i++){
            unitselected.push(i);
          }

          if(bookselected == 'Alphabet Phonics'){
            for(let i=0;i<52;i++){
              selecteditem.push(ap[i]);
              listlength++;
            }
          }

          if(bookselected == 'Easy Phonics'){
            for(let i=0;i<157;i++){
              selecteditem.push(ep[i]);
              listlength++;
            }
          }

          if(bookselected == 'Easy Phonics Plus'){
            for(let i=0;i<150;i++){
              selecteditem.push(epp[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Fun 1'){
            for(let i=0;i<55;i++){
              selecteditem.push(pf1[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Fun 2'){
            for(let i=0;i<76;i++){
              selecteditem.push(pf2[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Fun 3'){
            for(let i=0;i<78;i++){
              selecteditem.push(pf3[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Town 1'){
            for(let i=0;i<72;i++){
              selecteditem.push(pt1[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Town 2'){
            for(let i=0;i<73;i++){
              selecteditem.push(pt2[i]);
              listlength++;
            }
          }

          if(bookselected == 'Phonics Town 3'){
            for(let i=0;i<66;i++){
              selecteditem.push(pt3[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 1'){
            for(let i=0;i<70;i++){
              selecteditem.push(te1[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 2'){
            for(let i=0;i<69;i++){
              selecteditem.push(te2[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 3'){
            for(let i=0;i<71;i++){
              selecteditem.push(te3[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 4'){
            for(let i=0;i<57;i++){
              selecteditem.push(te4[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 5'){
            for(let i=0;i<63;i++){
              selecteditem.push(te5[i]);
              listlength++;
            }
          }

          if(bookselected == 'Theme English 6'){
            for(let i=0;i<65;i++){
              selecteditem.push(te6[i]);
              listlength++;
            }
          }

          // 기타 교재는 여기에....
          choiceismade = true;
          whatchosen = whatchosen+'전체 유닛';
        }
        // 유닛이 선별적으로 선택되어졌을 때
        else{
          listlength = 1;
          choiceismade=false;
          for(let i = 0; i < units.length-1; i++){
            if(units[i].checked){

              if(bookselected=='Alphabet Phonics'){
                for(let j=0;j<52;j++){
                  if(ap[j][0]==units[i].value){
                    selecteditem.push(ap[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Easy Phonics'){
                for(let j=0;j<157;j++){
                  if(ep[j][0]==units[i].value){
                    selecteditem.push(ep[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Easy Phonics Plus'){
                for(let j=0;j<150;j++){
                  if(epp[j][0]==units[i].value){
                    selecteditem.push(epp[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Fun 1'){
                for(let j=0;j<55;j++){
                  if(pf1[j][0]==units[i].value){
                    selecteditem.push(pf1[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Fun 2'){
                for(let j=0;j<76;j++){
                  if(pf2[j][0]==units[i].value){
                    selecteditem.push(pf2[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Fun 3'){
                for(let j=0;j<78;j++){
                  if(pf3[j][0]==units[i].value){
                    selecteditem.push(pf3[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Town 1'){
                for(let j=0;j<72;j++){
                  if(pt1[j][0]==units[i].value){
                    selecteditem.push(pt1[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Town 2'){
                for(let j=0;j<73;j++){
                  if(pt2[j][0]==units[i].value){
                    selecteditem.push(pt2[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Phonics Town 3'){
                for(let j=0;j<66;j++){
                  if(pt3[j][0]==units[i].value){
                    selecteditem.push(pt3[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 1'){
                for(let j=0;j<70;j++){
                  if(te1[j][0]==units[i].value){
                    selecteditem.push(te1[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 2'){
                for(let j=0;j<69;j++){
                  if(te2[j][0]==units[i].value){
                    selecteditem.push(te2[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 3'){
                for(let j=0;j<71;j++){
                  if(te3[j][0]==units[i].value){
                    selecteditem.push(te3[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 4'){
                for(let j=0;j<57;j++){
                  if(te4[j][0]==units[i].value){
                    selecteditem.push(te4[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 5'){
                for(let j=0;j<63;j++){
                  if(te5[j][0]==units[i].value){
                    selecteditem.push(te5[j]);
                    listlength ++;
                  }
                }
              }

              if(bookselected=='Theme English 6'){
                for(let j=0;j<65;j++){
                  if(te6[j][0]==units[i].value){
                    selecteditem.push(te6[j]);
                    listlength ++;
                  }
                }
              }

              //다른 교재일때
              //if(bookselected=''){
              //}

              // 선택된 유닛 알아내서 팝업창 표시
              whatchosen = whatchosen + "Unit "+units[i].value +', ';
              unitselected.push(i+1);
              choiceismade=true;
            }
            //Check가 안되어 있으면 Skip
          }
        }

        if(choiceismade){
          whatchosen=whatchosen.slice(0,-1);
          whatchosen=whatchosen.slice(0,-1);
          whatchosen = whatchosen + "입니다.";
          alert(whatchosen);
        }
        else{
          alert("choice has not been made yet!!");
        }        
    }

    // 학습 결과 전송
    function SendResult(){
        let endstudytime = document.getElementById("endstudytime");
        let endTime = new Date();
        let StudyRealTime;
        let temphour=0;
        let tempmin=0;
        let tempsec=0;
        let tempstring="";

        endstudytime.innerHTML="<font color='red'>[학습종료]</font>"+endTime.getHours()+"시"+endTime.getMinutes()+"분"+endTime.getSeconds()+"초";

        StudyEndTime = endTime.getHours()*60*60+endTime.getMinutes()*60+endTime.getSeconds();

        StudyRealTime = StudyEndTime - StudyStartTime;

        let i;
        tempsec = StudyRealTime;
        for(i=0;tempsec>60;i++){
          tempsec = tempsec - 60;
        }

        tempmin = i;
        for(i = 0;tempmin>60;i++){
          tempmin = tempmin - 60;
        }
        temphour = i;

        if(temphour != 0){
          tempstring = tempstring + temphour+"시간";
        }
        if(tempmin != 0){
          tempstring = tempstring + tempmin+"분";
        }
        tempstring = tempstring + tempsec+"초";
        document.getElementById("realstudytime").innerHTML = "<font color='red'>[학습시간]</font>"+tempstring;
    }

    // 접속시간표시
    function getCurrentTime(){
        let currentDate = new Date();
        let pos = document.getElementById("connectTime");
        let msg = "";

        if(currentDate.getHours() > 12){
          msg = msg +(currentDate.getHours()-12)+"시";
        }
        else{
          msg = msg + currentDate.getHours() + "시";
        }

        msg = msg + currentDate.getMinutes()+"분";
        msg = msg + currentDate.getSeconds()+"초";

        if(currentDate.getHours() > 12){
          msg = msg + "PM";
        }
        else{
          msg = msg + "AM";
        }

        pos.innerHTML = msg;

        //처음 접속시 최초접속시간도 표시
        if(isitfirst){
          document.getElementById("firstcon").innerHTML=msg;
          isitfirst = false;
        }

        setTimeout(getCurrentTime,1000);
    }

    // 학습시작하는 함수
    function StartStudy(){
        let lineup = document.getElementById("title");
        let mainscreen = document.getElementById("main");
        let linedown = document.getElementById("sub");
        let sbutton = document.getElementById("sbutton");

        if(choiceismade){
            lineup.innerHTML = "<div>이제 " + bookselected + "의 유닛 " + unitselected + "의 학습을 시작합니다. 큰소리로 따라 말하세요.</div>";
            mainscreen.innerHTML = '<img src="HSP.PNG" width="50%" height="100%">';
            linedown.innerHTML = "<div>첫번째 단계는 학습한 내용 복습하기 중 그림보며 듣고 따라 말하기 입니다.</div>";
            
            if(bookselected=="Alphabet Phonics"){
              //sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="그만하기" onclick="phonicsletterstudy()">';
              //sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordstudy_2in()">';
              sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음단어학습" onclick="wordstudy_1()">';
              //document.getElementById("startstudy").disabled = true;
            }
            else{
              //sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordstudy_2in()">';
              sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음단어학습" onclick="wordstudy_1()">';
              //document.getElementById("startstudy").disabled = true;
            }

            let units = document.getElementsByName('unit');

            let repeatshow  = document.getElementById("repeat");
            let repeatnumber  = document.getElementById("repeatnumber");
            let tellrepeat="";

            tellrepeat = tellrepeat + bookselected+"의 ";
            for(let i=0;i<units.length;i++){
              if(units[i].checked)
              tellrepeat+="Unit"+units[i].value+',';
            }

            repeatcount++;

            tellrepeat = tellrepeat.slice(0,-1);

            repeatshow.innerHTML = tellrepeat;
            repeatnumber.innerHTML = "<span style='font-color:blue;'>[반복횟수 : " + repeatcount + " 번]</span>"

            //첫번째 학습 단어학습
            //그림보여주면 발음해주기
            wordstudycount = 0;
            wordstudy_1();
        }
        else{
            alert("교재와 유닛을 먼저 선택하셔야 합니다.");
        }

    }

    //그림 보여주기 => 단어보여주기(2초) => 음성들려주기(2번)    
    function wordstudy_1(){
        let main = document.getElementById("main");
        let audioduration = 0;
        let linedown = document.getElementById("sub");
        wordstudycount++;

        myaudio.pause();
        myaudio.currentTime=0;

        if(wordstudycount < selecteditem.length){
          main.innerHTML = '<img src="'+ 'https://yooyoogithub.github.io/ulsanHSP/'+ bookselected + '/' + selecteditem[wordstudycount][1]+'" width="300px" height="300px">';
          myaudio.src = 'https://yooyoogithub.github.io/ulsanHSP/'+ bookselected + '/' + selecteditem[wordstudycount][2];            

          myaudio.play();
          
          /*
          myaudio.addEventListener('durationchange', function(e){
              audioduration = e.target.duration * 1000 + 3000;
            }
          )

          setTimeout(()=>{
            if(audioduration != 0){
              ifcancelTO = window.setTimeout(()=>{
                myaudio.pause();
                myaudio.currentTime=0;
                wordstudy_1();
                if(wordstudycount==selecteditem.length){
                  document.getElementById("startstudy").disabled = false;
                  linedown.innerHTML = "<div>다음학습을 누르세요!!!</div>";
                }
              }, audioduration);
            }
          },1000);*/
        }
        else{
          //음성이 있다면 다 멈춤
          myaudio.pause();
          myaudio.currentTime = 0;
          main.innerHTML = "<br><br><br>첫번째 학습이 끝났습니다.<br>아래 버튼을 누르면, 다음학습으로 넘어갑니다."
          sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordstudy_2in()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';
        }
    }

    function wordstudy_2in(){
      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");

      StopStudy();
        
      if(choiceismade){
          lineup.innerHTML = "<div>이제 " + bookselected + "의 유닛 " + unitselected + "의 학습을 시작합니다. 큰소리로 따라 말하세요.</div>";
          mainscreen.innerHTML = '<img src="HSP.PNG" width="50%" height="100%">';
          linedown.innerHTML = "<div>두번째 단계는 학습한 내용 복습하기 중 단어보며 듣고 따라 말하기 입니다.</div>";
          if(bookselected=="Alphabet Phonics"){
            //sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="그만하기" onclick="phonicsletterstudy()">';
            //sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_1in()">';
            sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음단어학습" onclick="wordstudy_2()">';
            //document.getElementById("startstudy").disabled = true;
          }
          else{
            //sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_1in()">';
            sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음단어학습" onclick="wordstudy_2()">';
            //document.getElementById("startstudy").disabled = true;
          }

          //첫번째 학습 단어학습
          //그림보여주면 발음해주기
          wordstudycount = 0;
          wordstudy_2();
      }
      else{

        alert("교재와 유닛을 먼저 선택하셔야 합니다.");
      }
    }

    function wordstudy_2(){
        let main = document.getElementById("main");
        let audioduration = 0;

        let lineup = document.getElementById("title");
        let mainscreen = document.getElementById("main");
        let linedown = document.getElementById("sub");
        let sbutton = document.getElementById("sbutton");

        wordstudycount++;

        if(wordstudycount < selecteditem.length){
          main.innerHTML = "<br><br><br><span style='font-size:126px;text-align:center;'>"+selecteditem[wordstudycount][3]+"</span>";
          myaudio.src = 'https://yooyoogithub.github.io/ulsanHSP/'+ bookselected + '/' + selecteditem[wordstudycount][2];            

          myaudio.play();

          /*myaudio.addEventListener('durationchange', function(e){
              audioduration = e.target.duration * 1000 + 3000;
            }
          )

          setTimeout(()=>{
            if(audioduration != 0){
              ifcancelTO = window.setTimeout(()=>{
                myaudio.pause();
                myaudio.currentTime=0;
                wordstudy_2();
                if(wordstudycount==selecteditem.length){
                  linedown.innerHTML = "<div>다음학습을 누르세요!!!</div>";
                  document.getElementById("startstudy").disabled = false;
                }
              }, audioduration);
            }
          },1000);*/
        }
        else{
                  //음성이 있다면 다 멈춤
          myaudio.pause();
          myaudio.currentTime = 0;
          main.innerHTML =  "<br><br><br>첫번째 학습이 끝났습니다.<br>아래 버튼을 누르면, 다음학습으로 넘어갑니다."
          sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_1in()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';
        }
    }

    //그만하기 눌렀을때 멈춤는 거 
    function StopStudy(){
        let lineup = document.getElementById("title");
        let mainscreen = document.getElementById("main");
        let linedown = document.getElementById("sub");
        let sbutton = document.getElementById("sbutton");

        sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="학습시작" onclick="StartStudy()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';
        if(isitfirst){
          lineup.innerHTML = "<div>이제 " + bookselected + "의 유닛 " + unitselected + "의 학습이 끝났습니다.</div>";
        }else{
          lineup.innerHTML = "<div>이제 " + bookselected + "의 유닛 " + unitselected + "의 학습을 시작합니다.</div>";
        }
        mainscreen.innerHTML = '<img src="HSPC.PNG" width="600px" height="460px">';
        linedown.innerHTML = "<div>Welcome to Hansol Plus English Phoincs Learning Play!!</div>";

        //음성이 있다면 다 멈춤
        myaudio.pause();
        myaudio.currentTime = 0;

        //setTimeout으로 실행되는게 있으면 모두 중지
        if(ifcancelTO){
          window.clearTimeout(ifcancelTO);
        }
    }

    //Alphabet Phonics면 해당 유닛의 알파벳 쓰기순서 보여주고 써보게 하기
    function phonicsletterstudy(){

    }

    //play 1 : 들려주는 음성에 해당되는 단어의 그림을 찾아내는 게임
    function wordplay_1in(){

      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;
      
      lineup.innerHTML = "<div>이제 " + bookselected + "의 유닛 " + unitselected + "의 학습 중!^^</div>";
      sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_2in()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';

      //초기화
      for(let i=1;i<playunitinfo.length;){
        playunitinfo.splice(1,1);
      }

      // 게임할 배열들만 옮김
      for(let i=1;i<selecteditem.length;i++){
        if(selecteditem[i][4]=='w'){
          playunitinfo.push([document.getElementById('bookname').value,selecteditem[i][0],selecteditem[i][1],selecteditem[i][2],selecteditem[i][3],selecteditem[i][4],selecteditem[i][5],selecteditem[i][6],selecteditem[i][7],selecteditem[i][8]]);
        }
      }
      
      totalproblem = 0;
      correctanswer = 0;

      if(playunitinfo.length > 1){
        wordplay_1();
      }
      else {
        alert("선택한 유닛에는 학습할 단어가 없습니다.");
        lineup.innerHTML = "<div>" + bookselected + "의 유닛 " + unitselected + "에는 새롭게 학습할 단어가 없습니다.</div>";
        mainscreen.innerHTML = '<img src="HSPC.PNG" width=600px"" height="500px">';
        linedown.innerHTML = '<div>다시 학습할려면 학습하기를 누르세요.</div>';
        sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="학습하기" onclick="StartStudy()">';
      }
    }

    //문제의 음성을 들려주는 함수
    function playquestion(){
      myaudio.src = problemaudiosource;
      myaudio.play();
    }

    //정답을 확인해서 표시하는 함수
    function imageclick(theanswer){

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      useranswer = theanswer;

      if(answer!=0){
        if(answer==useranswer){
          correctanswer++;
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("정답입니다~~^^");
          wordplay_1();
        }
        else{
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("아쉬워요, 틀렸어요....ㅠㅠ");
          wordplay_1();
        }
      }
      else{
        alert("아직 문제가 출제되지 않았거나, 정답이 정해지지 않았습니다.");
      }
    }

    //들려주는 단어 듣고 해당하는 그림 맞추기
    function wordplay_1(){

      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");

      let q1, q2, q3, q4, centerquestionimage;
      // 게임을 위한 선택된 단어에 대한 정보 배열 [book, unit, image, sound, word, sentence:s or word:w, only word, word with blank, pattern letter(s)]
      let tempplayui = [['0','0','0','0','0','0','0','0','0','0']];
      
      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;
      
      lineup.innerHTML = "<div>아래 버튼을 누르면 들려주는 단어에 해당되는 그림을 클릭하세요.</div>";
      linedown.innerHTML = '<div>준비되면 위에 버튼을 눌러서 문제 음성을 듣고 해당되는 단어를 클릭하세요.</div>';

      totalproblem++;

      for(let i=1;i<tempplayui.length;){
        tempplayui.splice(i,1);
      }

      for(let i=1;i<playunitinfo.length;i++){
        tempplayui.push(playunitinfo[i]);
      }

      // 총 단어수 중 랜덤선택
      let randnum = Math.random()*(playunitinfo.length-1);
      randnum = Math.floor(randnum)+1;

      // 1,2,3,4번중에 어디에 정답을 포함시킬껀지를 랜덤으로 선택
      let randnum2 = Math.random()*4;
      randnum2 = Math.floor(randnum2)+1;

         //randnum2 = 1;
          if(randnum2==1){
            q1 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==2){
            q2 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==3){
            q3 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }
          else
          {
            q4 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            problemaudiosource = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = '/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][2];
            tempplayui.splice(randnum,1);
          }

          centerquestionimage = '<span class="questionimage">1<img src="https://yooyoogithub.github.io/ulsanHSP/'+q1+'" width="200px" height="180px" onclick="imageclick(1)"></span>'
            +'<span class="questionimage">2<img src="https://yooyoogithub.github.io/ulsanHSP/'+q2+'"width="200px" height="180px" onclick="imageclick(2)"></span>'
            +'<div> ---- </div>'
            +'<span class="questionimage">3<img src="https://yooyoogithub.github.io/ulsanHSP/'+q3+'" width="200px" height="180px" onclick="imageclick(3)"></span>'
            +'<span class="questionimage">4<img src="https://yooyoogithub.github.io/ulsanHSP/'+q4+'" width="200px" height="180px" onclick="imageclick(4)"></span>'
            +'<br><br><div><input class="justbutton" type="button" style="height:40px;" value="준비되면 누르세요." onclick="playquestion()"></div>';

          // 그림출력
          mainscreen.innerHTML = centerquestionimage;

          // 정답 입력
          answer = randnum2;
    }

    //play 2 : 들려주는 음성에 해당되는 단어를 찾아내는 게임.
    function wordplay_2in(){
      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      totalproblem--;
      document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
      
      lineup.innerHTML = "<div>들려주는 어휘에 해당되는 단어를 클릭하세요.</div>";
      sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_3in()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';

      //초기화 - wordplay_1in()에서 이미 했으므로 필요없음.
      //바로시작
      wordplay_2();
    }

    function wordplay_2_answerclick(theanswer){

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      useranswer = theanswer;

      if(answer!=0){
        if(answer==useranswer){
          correctanswer++;
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("정답입니다~~^^");
          wordplay_2();
        }
        else{
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("아쉬워요, 틀렸어요....ㅠㅠ");
          wordplay_2();
        }
      }
      else{
        alert("아직 문제가 출제되지 않았거나, 정답이 정해지지 않았습니다.");
      }
    }

    function wordplay_2(){

      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");

      let q1, q2, q3, q4, centerquestionimage;
      // 게임을 위한 선택된 단어에 대한 정보 배열 [book, unit, image, sound, word, sentence:s or word:w, only word, word with blank, pattern letter(s)]
      let tempplayui = [['0','0','0','0','0','0','0','0','0','0']];
      
      linedown.innerHTML = '<div>위 버튼을 클릭해서 들려주는 단어를 찾아 클릭하세요.</div>'
      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      totalproblem++;

      for(let i=1;i<tempplayui.length;){
        tempplayui.splice(i,1);
      }

      for(let i=1;i<playunitinfo.length;i++){
        tempplayui.push(playunitinfo[i]);
      }

      // 총 단어수 중 랜덤선택
      let randnum = Math.random()*(playunitinfo.length-1);
      randnum = Math.floor(randnum)+1;

      // 1,2,3,4번중에 어디에 정답을 포함시킬껀지를 랜덤으로 선택
      let randnum2 = Math.random()*4;
      randnum2 = Math.floor(randnum2)+1;

         //randnum2 = 1;
          if(randnum2==1){
            q1 = tempplayui[randnum][4];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==2){
            q2 = tempplayui[randnum][4];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==3){
            q3 = tempplayui[randnum][4];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);
          }
          else
          {
            q4 = tempplayui[randnum][4];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][4];
            tempplayui.splice(randnum,1);
          }

          //wordplay_2_answerclick(answer)
          centerquestionimage = 
          '<br><br><button class="qbutton" width="200px" height="190px" onclick="wordplay_2_answerclick(1)">'+q1+'</button>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_2_answerclick(2)">'+q2+'</button>'
          +'<div></div>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_2_answerclick(3)">'+q3+'</button>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_2_answerclick(4)">'+q4+'</button>'
          + '<br><br><div><input class="justbutton" type="button" style="height:40px;" value="준비되면 누르세요." onclick="playquestion()"></div>';
          
          /*centerquestionimage = '<span class="questionimage">1<img src="'+q1+'" width="200px" height="190px" onclick="imageclick(1)"></span>'
            +'<span class="questionimage">2<img src="'+q2+'"width="200px" height="190px" onclick="imageclick(2)"></span>'
            +'<div> ---- </div>'
            +'<span class="questionimage">3<img src="'+q3+'" width="200px" height="190px" onclick="imageclick(3)"></span>'
            +'<span class="questionimage">4<img src="'+q4+'" width="200px" height="190px" onclick="imageclick(4)"></span>'
            +'<br><br><div><input class="justbutton" type="button" style="height:40px;" value="준비되면 누르세요." onclick="playquestion()"></div>';
          */
          // 그림출력
          mainscreen.innerHTML = centerquestionimage;

          // 정답 입력
          answer = randnum2;
    }

    //play3 : 들려주는 단어에 빈칸에 들어갈 알파벳이나 패턴을 찾기
    function wordplay_3in(){
      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");
      let error;

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;
      
      totalproblem--;
      document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";

      lineup.innerHTML = "<div>다음 어휘의 빈칸에 알맞은 알파벳이나 음가를 찾아보세요.</div>";
      sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_4in()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';

      //초기화 - 범용 패턴 저장 변수
      for(i=1;i>questionpattern.lenght;){
        questionpattern.splice(i,1);        
      }
      //초기화 - 각 교재의 패턴을 패턴범용변수에 저장
      if(bookselected == 'Alphabet Phonics'){
        for(let i=0;i<appattern.length;i++){
          questionpattern.push(appattern[i]);
        }
      }
      else if(bookselected == 'Easy Phonics'){
        for(let i=0;i<eppattern.length;i++){
          questionpattern.push(eppattern[i]);
        }
      }
      else if(bookselected == 'Easy Phonics Plus'){
        for(let i=0;i<epppattern.length;i++){
          questionpattern.push(epppattern[i]);
        }
      }
      else if(bookselected == 'Phonics Fun 1'){
        for(let i=0;i<pf1pattern.length;i++){
          questionpattern.push(pf1pattern[i]);
        }
      }
      else if(bookselected == 'Phonics Fun 2'){
        for(let i=0;i<pf2pattern.length;i++){
          questionpattern.push(pf2pattern[i]);
        }
      }
      else if(bookselected == 'Phonics Fun 3'){
        for(let i=0;i<pf3pattern.length;i++){
          questionpattern.push(pf3pattern[i]);
        }
      }
      else if(bookselected == 'Phonics Town 1'){
        for(let i=0;i<pt1pattern.length;i++){
          questionpattern.push(pt1pattern[i]);
        }
      }
      else if(bookselected == 'Phonics Town 2'){
        for(let i=0;i<pt2pattern.length;i++){
          questionpattern.push(pt2pattern[i]);
        }
      }
      else if(bookselected == 'Phonics Town 3'){
        for(let i=0;i<pt3pattern.length;i++){
          questionpattern.push(pt3pattern[i]);
        }
      }
      else{
        alert("Theme English는 이 기능을 지원하지 않습니다. 바로 다음 학습으로 넘어가세요.");
        error = true;
      }
      //바로시작
      if(error){

      }
      else{
        wordplay_3();
      }
    }

    function wordplay_3_answerclick(theanswer){

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      useranswer = theanswer;

      if(answer!=0){
        if(answer==useranswer){
          correctanswer++;
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("정답입니다~~^^");
          wordplay_3();
        }
        else{
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("아쉬워요, 틀렸어요....ㅠㅠ");
          wordplay_3();
        }
      }
      else{
        alert("아직 문제가 출제되지 않았거나, 정답이 정해지지 않았습니다.");
      }
    }

    function wordplay_3(){
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");

      let q1, q2, q3, q4, centerquestionimage;
      // 게임을 위한 선택된 단어에 대한 정보 배열 [book, unit, image, sound, word, sentence:s or word:w, only word, word with blank, pattern letter(s)]
      let tempplayui = [['0','0','0','0','0','0','0','0','0','0']];
      let temppattern = ['0'];
      
      linedown.innerHTML = '<div>위 버튼을 눌러서 무슨 단어인지 알아보세요.</div>'

      let randanswernum;
      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      totalproblem++;

      for(let i=1;i<tempplayui.length;){
        tempplayui.splice(i,1);
      }

      for(let i=1;i<playunitinfo.length;i++){
        tempplayui.push(playunitinfo[i]);
      }

      // 총 단어수 중 랜덤선택
      let randnum = Math.random()*(playunitinfo.length-1);
      randnum = Math.floor(randnum)+1;
      randanswernum = randnum;

      //정답의 패턴을 제외하고 temppattern에 저장
      for(let i=1;i<questionpattern.length;i++){
        if(playunitinfo[randnum][8] != questionpattern[i]){
          temppattern.push(questionpattern[i]);
        }
      }

      // 1,2,3,4번중에 어디에 정답을 포함시킬껀지를 랜덤으로 선택
      let randnum2 = Math.random()*4;
      randnum2 = Math.floor(randnum2)+1;

         //randnum2 = 1;
          if(randnum2==1){
            q1 = tempplayui[randnum][8];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = temppattern[randnum];
            temppattern.splice(randnum,1);
          }
          else if(randnum2==2){
            q2 = tempplayui[randnum][8];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            
            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = temppattern[randnum];
            temppattern.splice(randnum,1);
          }
          else if(randnum2==3){
            q3 = tempplayui[randnum][8];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            
            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = temppattern[randnum];
            temppattern.splice(randnum,1);
          }
          else
          {
            q4 = tempplayui[randnum][8];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            
            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = temppattern[randnum];
            temppattern.splice(randnum,1);

            randnum = Math.random()*(temppattern.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = temppattern[randnum];
            temppattern.splice(randnum,1);
          }

          //wordplay_2_answerclick(answer)
          centerquestionimage = '<br><center><div style="width:200px; height:160px; font-size:40px;">'+tempplayui[randanswernum][7]+'</div></center>'
          + '<br><button class="qbutton" width="200px" height="190px" onclick="wordplay_3_answerclick(1)">'+q1+'</button>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_3_answerclick(2)">'+q2+'</button>'
          + '<div></div>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_3_answerclick(3)">'+q3+'</button>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_3_answerclick(4)">'+q4+'</button>'
          + '<br><br><div><input class="justbutton" type="button" style="height:40px;" value="준비되면 누르세요." onclick="playquestion()"></div>';
          
          // 그림출력
          mainscreen.innerHTML = centerquestionimage;

          // 정답 입력
          answer = randnum2;
    }

    //play4 : 뜻 써주고 단어 맞추기
    function wordplay_4in(){
      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");

      totalproblem--;
      document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;
      
      lineup.innerHTML = "<div>다음 한글에 맞는 영어단어를 찾아보세요.</div>";
      sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="다음학습" onclick="wordplay_5in()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';

      wordplay_4();
    }

    function wordplay_4_answerclick(theanswer){

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      useranswer = theanswer;

      if(answer!=0){
        if(answer==useranswer){
          correctanswer++;
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("정답입니다~~^^");
          wordplay_4();
        }
        else{
          document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";
          alert("아쉬워요, 틀렸어요....ㅠㅠ");
          wordplay_4();
        }
      }
      else{
        alert("아직 문제가 출제되지 않았거나, 정답이 정해지지 않았습니다.");
      }
    }

    function wordplay_4(){
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");

      let q1, q2, q3, q4, centerquestionimage;
      
      linedown.innerHTML = '<div>한글뜻에 해당되는 영어단어를 클릭하세요.</div>';
      // 게임을 위한 선택된 단어에 대한 정보 배열 [book, unit, image, sound, word, sentence:s or word:w, only word, word with blank, pattern letter(s),korean]
      let tempplayui = [['0','0','0','0','0','0','0','0','0','0']];

      //문제의 한글을 담는변수
      let qkorean;
      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;

      totalproblem++;

      for(let i=1;i<playunitinfo.length;i++){
        tempplayui.push(playunitinfo[i]);
      }

      // 총 단어수 중 랜덤선택
      let randnum = Math.random()*(playunitinfo.length-1);
      randnum = Math.floor(randnum)+1;

      // 1,2,3,4번중에 어디에 정답을 포함시킬껀지를 랜덤으로 선택
      let randnum2 = Math.random()*4;
      randnum2 = Math.floor(randnum2)+1;

         //randnum2 = 1;
          if(randnum2==1){
            q1 = tempplayui[randnum][6];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            qkorean = tempplayui[randnum][9];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);
          }
          else if(randnum2==2){
            q2 = tempplayui[randnum][6];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            qkorean = tempplayui[randnum][9];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

          }
          else if(randnum2==3){
            q3 = tempplayui[randnum][6];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            qkorean = tempplayui[randnum][9];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q4 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

          }
          else
          {
            q4 = tempplayui[randnum][6];
            problemaudiosource = 'data/'+tempplayui[randnum][0]+'/'+tempplayui[randnum][3];
            qkorean = tempplayui[randnum][9];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q1 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q2 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);

            randnum = Math.random()*(tempplayui.length-1);
            randnum = Math.floor(randnum)+1;
            q3 = tempplayui[randnum][6];
            tempplayui.splice(randnum,1);
          }

          //wordplay_2_answerclick(answer)
          centerquestionimage = '<br><center><div style="width:200px; height:160px; font-size:40px;">'+qkorean+'</div></center>'
          + '<br><button class="qbutton" width="200px" height="190px" onclick="wordplay_4_answerclick(1)">'+q1+'</button>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_4_answerclick(2)">'+q2+'</button>'
          + '<div></div>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_4_answerclick(3)">'+q3+'</button>'
          + '<button class="qbutton" width="200px" height="190px" onclick="wordplay_4_answerclick(4)">'+q4+'</button>'
          + '<br><br><div><input class="justbutton" type="button" style="height:40px;" value="Press thisin need." onclick="playquestion()"></div>';
          
          // 그림출력
          mainscreen.innerHTML = centerquestionimage;

          // 정답 입력
          answer = randnum2;
    }

    //play5 : 단어의 철자를 unscramble 해서 순서대로 배열하기
    function wordplay_5in(){
      let lineup = document.getElementById("title");
      let mainscreen = document.getElementById("main");
      let linedown = document.getElementById("sub");
      let sbutton = document.getElementById("sbutton");

      totalproblem--;
      document.getElementById('playscore').innerHTML = totalproblem + "개 중 "+correctanswer+"개 정답";

      //음성이 있다면 다 멈춤
      myaudio.pause();
      myaudio.currentTime = 0;
      lineup.innerHTML = "<div>" + bookselected + "의 유닛 " + unitselected + "의 학습이 끝났습니다.</div>";
      mainscreen.innerHTML = '<img src="HSPC.PNG" width="600px" height="500px">';
      linedown.innerHTML = '<div>다시 학습할려면 학습하기를 누르세요.</div>';
      sbutton.innerHTML = '<input class="realbutton" type="button" id="startstudy" value="학습하기" onclick="StartStudy()"><input class="realbutton" type="button" id="endstudy" value="학습끝" onclick="EndStudy()">';

      wordplay_5();      
    }

    function wordplay_5(){

    }

    //play6 : 그림보고 단어 말하기 음성인식 routine을 사용하여 확인 => 안드로이 크롬에서만 작동
    function wordplay_6(){
        
    }

    //play7 : 단어보고 발음해서 녹음 및 들어보기 및 전송(전송은 차후 구현)
    function wordplay_7(){

    }
