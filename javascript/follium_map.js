// function loadMap() {
//     try {
//         console.log('Inner Loading')
//         readLoadMap()
//         console.log('Inner Done!')

//     } catch(err) {
//         console.log(err)
//     }
// }

function loadMap() {
    var map_43c67d12571c43ac916e0711638cbe21 = L.map(
        "map_43c67d12571c43ac916e0711638cbe21",
        {
            center: [58.686072, -108.000337],
            crs: L.CRS.EPSG3857,
            zoom: 4.45,
            zoomControl: true,
            preferCanvas: false,
        }
    );





    var tile_layer_558f8b7eab2a49d99c15a97a09736ef6 = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { "attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false }
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var marker_db7d51579c334b67be166375fecd7fff = L.marker(
        [49.2176246643066, -122.645202636719],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_51dfdd20388d42f5bdd7c393caa47059 = L.popup({ "maxWidth": "100%" });


    var html_be172df551ee47d68fdcf253286f7987 = $(`<div id="html_be172df551ee47d68fdcf253286f7987" style="width: 100.0%; height: 100.0%;">Friends in Need Food Bank</div>`)[0];
    popup_51dfdd20388d42f5bdd7c393caa47059.setContent(html_be172df551ee47d68fdcf253286f7987);


    marker_db7d51579c334b67be166375fecd7fff.bindPopup(popup_51dfdd20388d42f5bdd7c393caa47059)
        ;




    var marker_8bfad18dc17b4a7bade9ae3776971bd8 = L.marker(
        [47.7412071228027, -53.2023429870605],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c9f88f71e4f74d1a945ee7768c6be6d8 = L.popup({ "maxWidth": "100%" });


    var html_39052f29aff141ca9ef07d51219edf8d = $(`<div id="html_39052f29aff141ca9ef07d51219edf8d" style="width: 100.0%; height: 100.0%;">Society of Saint Vincent de Paul</div>`)[0];
    popup_c9f88f71e4f74d1a945ee7768c6be6d8.setContent(html_39052f29aff141ca9ef07d51219edf8d);


    marker_8bfad18dc17b4a7bade9ae3776971bd8.bindPopup(popup_c9f88f71e4f74d1a945ee7768c6be6d8)
        ;




    var marker_efb08b0c09014534aabd9ee14107bdc3 = L.marker(
        [43.3316268920898, -79.8210067749023],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_edd8955fb01d4cbabdd2e998d045572e = L.popup({ "maxWidth": "100%" });


    var html_6aa356aa5b494460bcc2ceee05588dbe = $(`<div id="html_6aa356aa5b494460bcc2ceee05588dbe" style="width: 100.0%; height: 100.0%;">The Burlington Food Bank</div>`)[0];
    popup_edd8955fb01d4cbabdd2e998d045572e.setContent(html_6aa356aa5b494460bcc2ceee05588dbe);


    marker_efb08b0c09014534aabd9ee14107bdc3.bindPopup(popup_edd8955fb01d4cbabdd2e998d045572e)
        ;




    var marker_a740cd6eea0947729f34fc5b5af24d9f = L.marker(
        [43.5370140075684, -80.262321472168],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6bbfb27c129e4c4e885d8a1beee4852a = L.popup({ "maxWidth": "100%" });


    var html_926ab448780742aea39c662a58e441a8 = $(`<div id="html_926ab448780742aea39c662a58e441a8" style="width: 100.0%; height: 100.0%;">Guelph Food Bank</div>`)[0];
    popup_6bbfb27c129e4c4e885d8a1beee4852a.setContent(html_926ab448780742aea39c662a58e441a8);


    marker_a740cd6eea0947729f34fc5b5af24d9f.bindPopup(popup_6bbfb27c129e4c4e885d8a1beee4852a)
        ;




    var marker_e557945556c64ff4bad5f4193d32f30c = L.marker(
        [49.1729278564453, -123.141723632813],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5a028c21790842eb97e82d687e17554b = L.popup({ "maxWidth": "100%" });


    var html_3077008e42e24126be9363f7df70a947 = $(`<div id="html_3077008e42e24126be9363f7df70a947" style="width: 100.0%; height: 100.0%;">Richmond Food Bank Society</div>`)[0];
    popup_5a028c21790842eb97e82d687e17554b.setContent(html_3077008e42e24126be9363f7df70a947);


    marker_e557945556c64ff4bad5f4193d32f30c.bindPopup(popup_5a028c21790842eb97e82d687e17554b)
        ;




    var marker_7c628ee7a68e484885ed8efcbe4150e5 = L.marker(
        [44.5661277770996, -80.9431915283203],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b63a542923c84deca0ca3e12c7a77934 = L.popup({ "maxWidth": "100%" });


    var html_be70303ec7e24916a15e1fc5421dcd68 = $(`<div id="html_be70303ec7e24916a15e1fc5421dcd68" style="width: 100.0%; height: 100.0%;">Salvation Army Owen Sound Family Services</div>`)[0];
    popup_b63a542923c84deca0ca3e12c7a77934.setContent(html_be70303ec7e24916a15e1fc5421dcd68);


    marker_7c628ee7a68e484885ed8efcbe4150e5.bindPopup(popup_b63a542923c84deca0ca3e12c7a77934)
        ;




    var marker_462e399e842f4ff884dc95ec42a81383 = L.marker(
        [49.1558876037598, -123.930381774902],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_caabec682b1947e8985b2512155c1655 = L.popup({ "maxWidth": "100%" });


    var html_e1824914a05a4e6c823d09d816c2e7f6 = $(`<div id="html_e1824914a05a4e6c823d09d816c2e7f6" style="width: 100.0%; height: 100.0%;">Loaves \u0026 Fishes Community Food Bank</div>`)[0];
    popup_caabec682b1947e8985b2512155c1655.setContent(html_e1824914a05a4e6c823d09d816c2e7f6);


    marker_462e399e842f4ff884dc95ec42a81383.bindPopup(popup_caabec682b1947e8985b2512155c1655)
        ;




    var marker_34a70e1e8e59440ba8ff58188e8d64b0 = L.marker(
        [48.2475242614746, -79.0242919921875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6e0584fc16f2407cb598ea881c1b004a = L.popup({ "maxWidth": "100%" });


    var html_93cb44a3c64f4a4d80173cb9363852a5 = $(`<div id="html_93cb44a3c64f4a4d80173cb9363852a5" style="width: 100.0%; height: 100.0%;">Le Centre Bernard-Hamel</div>`)[0];
    popup_6e0584fc16f2407cb598ea881c1b004a.setContent(html_93cb44a3c64f4a4d80173cb9363852a5);


    marker_34a70e1e8e59440ba8ff58188e8d64b0.bindPopup(popup_6e0584fc16f2407cb598ea881c1b004a)
        ;




    var marker_0754dc1324304d7f9e93edbbb8cd4d70 = L.marker(
        [56.2467041015625, -120.849739074707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ad158df0c8b9451ea02d371a70af0e81 = L.popup({ "maxWidth": "100%" });


    var html_ea8de19028844ad78f0bccf0d74a75ba = $(`<div id="html_ea8de19028844ad78f0bccf0d74a75ba" style="width: 100.0%; height: 100.0%;">Salvation Army FORT ST JOHN - FAMILY SERVICES</div>`)[0];
    popup_ad158df0c8b9451ea02d371a70af0e81.setContent(html_ea8de19028844ad78f0bccf0d74a75ba);


    marker_0754dc1324304d7f9e93edbbb8cd4d70.bindPopup(popup_ad158df0c8b9451ea02d371a70af0e81)
        ;




    var marker_f6654191813a45a5b8e4b22c61362709 = L.marker(
        [49.697151184082, -112.777572631836],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4966e3c3257e44e788e3e9bcb8d6ec54 = L.popup({ "maxWidth": "100%" });


    var html_199a607145b64fd48873bdea1e3a2ff7 = $(`<div id="html_199a607145b64fd48873bdea1e3a2ff7" style="width: 100.0%; height: 100.0%;">Lethbridge Food Bank Society</div>`)[0];
    popup_4966e3c3257e44e788e3e9bcb8d6ec54.setContent(html_199a607145b64fd48873bdea1e3a2ff7);


    marker_f6654191813a45a5b8e4b22c61362709.bindPopup(popup_4966e3c3257e44e788e3e9bcb8d6ec54)
        ;




    var marker_05929d2a9b114831960777908fe47061 = L.marker(
        [43.1375732421875, -80.2588348388672],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8b2cb7f158154944aab2e152442ae50b = L.popup({ "maxWidth": "100%" });


    var html_cbfd3e453e98446198c5bccc02bd8137 = $(`<div id="html_cbfd3e453e98446198c5bccc02bd8137" style="width: 100.0%; height: 100.0%;">Community Resource Service</div>`)[0];
    popup_8b2cb7f158154944aab2e152442ae50b.setContent(html_cbfd3e453e98446198c5bccc02bd8137);


    marker_05929d2a9b114831960777908fe47061.bindPopup(popup_8b2cb7f158154944aab2e152442ae50b)
        ;




    var marker_c9155c2d0e1841c5beb0f0649e2dc102 = L.marker(
        [49.5099830627441, -115.770164489746],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_bcdf94d0718b4647905bfd0605ef85f4 = L.popup({ "maxWidth": "100%" });


    var html_3d3745bce7794381a47049a91c845438 = $(`<div id="html_3d3745bce7794381a47049a91c845438" style="width: 100.0%; height: 100.0%;">Cranbrook Food Bank Society</div>`)[0];
    popup_bcdf94d0718b4647905bfd0605ef85f4.setContent(html_3d3745bce7794381a47049a91c845438);


    marker_c9155c2d0e1841c5beb0f0649e2dc102.bindPopup(popup_bcdf94d0718b4647905bfd0605ef85f4)
        ;




    var marker_b81a8ca16e3b4eb3b72930eccbb2c485 = L.marker(
        [44.9560432434082, -78.8053817749023],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_17ed4dcec9044fa0858b4bc181234874 = L.popup({ "maxWidth": "100%" });


    var html_546733289daa4d0097eb58adcc7caf11 = $(`<div id="html_546733289daa4d0097eb58adcc7caf11" style="width: 100.0%; height: 100.0%;">Minden Food Bank</div>`)[0];
    popup_17ed4dcec9044fa0858b4bc181234874.setContent(html_546733289daa4d0097eb58adcc7caf11);


    marker_b81a8ca16e3b4eb3b72930eccbb2c485.bindPopup(popup_17ed4dcec9044fa0858b4bc181234874)
        ;




    var marker_20fa52bbb341401ab7339f7446cc1c31 = L.marker(
        [48.4291343688965, -71.0361862182617],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b1c9e93993664e239518ed7c2bdd428c = L.popup({ "maxWidth": "100%" });


    var html_b6226981929c4a34b9729b79e2e44a59 = $(`<div id="html_b6226981929c4a34b9729b79e2e44a59" style="width: 100.0%; height: 100.0%;">Moisson Saguenay - Lac-St-Jean</div>`)[0];
    popup_b1c9e93993664e239518ed7c2bdd428c.setContent(html_b6226981929c4a34b9729b79e2e44a59);


    marker_20fa52bbb341401ab7339f7446cc1c31.bindPopup(popup_b1c9e93993664e239518ed7c2bdd428c)
        ;




    var marker_c0a60ec5ff994a6f822f725b9e4ecb3d = L.marker(
        [49.1977119445801, -122.848159790039],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_158805f3005248c482342b29bff6f935 = L.popup({ "maxWidth": "100%" });


    var html_0ccd4fe08a52413c821fc1799b009061 = $(`<div id="html_0ccd4fe08a52413c821fc1799b009061" style="width: 100.0%; height: 100.0%;">Surrey Food Bank</div>`)[0];
    popup_158805f3005248c482342b29bff6f935.setContent(html_0ccd4fe08a52413c821fc1799b009061);


    marker_c0a60ec5ff994a6f822f725b9e4ecb3d.bindPopup(popup_158805f3005248c482342b29bff6f935)
        ;




    var marker_259d6b3f43ed4b67b60e9397c21d122a = L.marker(
        [49.9070358276367, -97.1738128662109],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2df80872f3324ae0b033f21d97dc0d64 = L.popup({ "maxWidth": "100%" });


    var html_689d3236aaf64de28a17511be8c59d47 = $(`<div id="html_689d3236aaf64de28a17511be8c59d47" style="width: 100.0%; height: 100.0%;">Winnipeg Harvest</div>`)[0];
    popup_2df80872f3324ae0b033f21d97dc0d64.setContent(html_689d3236aaf64de28a17511be8c59d47);


    marker_259d6b3f43ed4b67b60e9397c21d122a.bindPopup(popup_2df80872f3324ae0b033f21d97dc0d64)
        ;




    var marker_df3731ffc6644a84948b7cc0e803fd3c = L.marker(
        [45.2830123901367, -66.0331497192383],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0b40dd908c164479bd90ed7a50a3addd = L.popup({ "maxWidth": "100%" });


    var html_a1e81ab7c2d34dd594c4f40a49eec3be = $(`<div id="html_a1e81ab7c2d34dd594c4f40a49eec3be" style="width: 100.0%; height: 100.0%;">Saint John East Food Bank</div>`)[0];
    popup_0b40dd908c164479bd90ed7a50a3addd.setContent(html_a1e81ab7c2d34dd594c4f40a49eec3be);


    marker_df3731ffc6644a84948b7cc0e803fd3c.bindPopup(popup_0b40dd908c164479bd90ed7a50a3addd)
        ;




    var marker_6bf582bc2c0c403bbca3ad02f02543d1 = L.marker(
        [45.8957672119141, -64.5174789428711],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cef51f645ba444af92f9804214296032 = L.popup({ "maxWidth": "100%" });


    var html_cebe162a28b1495d995a11e6e7d36fa9 = $(`<div id="html_cebe162a28b1495d995a11e6e7d36fa9" style="width: 100.0%; height: 100.0%;">Dorchester Food Bank</div>`)[0];
    popup_cef51f645ba444af92f9804214296032.setContent(html_cebe162a28b1495d995a11e6e7d36fa9);


    marker_6bf582bc2c0c403bbca3ad02f02543d1.bindPopup(popup_cef51f645ba444af92f9804214296032)
        ;




    var marker_da812f71f4e84fbc9a293d0883a4a3cb = L.marker(
        [47.5190277099609, -52.8069267272949],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_144484aed6f1497fae2385636ac0448c = L.popup({ "maxWidth": "100%" });


    var html_3f8a0775879f4d379a1ad13e88dcbab8 = $(`<div id="html_3f8a0775879f4d379a1ad13e88dcbab8" style="width: 100.0%; height: 100.0%;">St. Peter\u0027s SVdP</div>`)[0];
    popup_144484aed6f1497fae2385636ac0448c.setContent(html_3f8a0775879f4d379a1ad13e88dcbab8);


    marker_da812f71f4e84fbc9a293d0883a4a3cb.bindPopup(popup_144484aed6f1497fae2385636ac0448c)
        ;




    var marker_c56f02d0caab4fee9e104de4921fbe81 = L.marker(
        [55.7577705383301, -120.231407165527],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_87185c0d66ef4b499bf69e57422f0219 = L.popup({ "maxWidth": "100%" });


    var html_e4f4ff37058d42fa8220a65f6043dd78 = $(`<div id="html_e4f4ff37058d42fa8220a65f6043dd78" style="width: 100.0%; height: 100.0%;">ST. MARK\u0027S FOOD BANK</div>`)[0];
    popup_87185c0d66ef4b499bf69e57422f0219.setContent(html_e4f4ff37058d42fa8220a65f6043dd78);


    marker_c56f02d0caab4fee9e104de4921fbe81.bindPopup(popup_87185c0d66ef4b499bf69e57422f0219)
        ;




    var marker_6129611806cb4270895264ba4288cea5 = L.marker(
        [49.7034873962402, -112.831275939941],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dd4d2d29ea8046da84dd221c8983f06e = L.popup({ "maxWidth": "100%" });


    var html_5429f2e17d96497e8a4b2a5284666282 = $(`<div id="html_5429f2e17d96497e8a4b2a5284666282" style="width: 100.0%; height: 100.0%;">Interfaith Food Bank Society of Lethbridge</div>`)[0];
    popup_dd4d2d29ea8046da84dd221c8983f06e.setContent(html_5429f2e17d96497e8a4b2a5284666282);


    marker_6129611806cb4270895264ba4288cea5.bindPopup(popup_dd4d2d29ea8046da84dd221c8983f06e)
        ;




    var marker_6a5e1115517d4d258e1888af0494721e = L.marker(
        [48.9579925537109, -54.6104736328125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3c07c6a3d83d4f5bad8d884ac4656d05 = L.popup({ "maxWidth": "100%" });


    var html_65a1c88740b449e796e00f93aede3821 = $(`<div id="html_65a1c88740b449e796e00f93aede3821" style="width: 100.0%; height: 100.0%;">Salvation Army Gander Community and Family Services</div>`)[0];
    popup_3c07c6a3d83d4f5bad8d884ac4656d05.setContent(html_65a1c88740b449e796e00f93aede3821);


    marker_6a5e1115517d4d258e1888af0494721e.bindPopup(popup_3c07c6a3d83d4f5bad8d884ac4656d05)
        ;




    var marker_92b9b2e76e714e17ad8ebb0c94dc9c0f = L.marker(
        [42.9638481140137, -82.4032135009766],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_71511f4cf4774e4ba474bb288d600072 = L.popup({ "maxWidth": "100%" });


    var html_257e1a089e60439db2ab4c00a119424b = $(`<div id="html_257e1a089e60439db2ab4c00a119424b" style="width: 100.0%; height: 100.0%;">Inn Of The Good Shepherd</div>`)[0];
    popup_71511f4cf4774e4ba474bb288d600072.setContent(html_257e1a089e60439db2ab4c00a119424b);


    marker_92b9b2e76e714e17ad8ebb0c94dc9c0f.bindPopup(popup_71511f4cf4774e4ba474bb288d600072)
        ;




    var marker_0560debe24d8460b9defa8fc134ee0a6 = L.marker(
        [49.2506643, -122.9258592],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c673d2dc48744582b8d08335192aeb2b = L.popup({ "maxWidth": "100%" });


    var html_55981af8bde347e5a3ec408d21dad13f = $(`<div id="html_55981af8bde347e5a3ec408d21dad13f" style="width: 100.0%; height: 100.0%;">Greater Vancouver Food Bank Society</div>`)[0];
    popup_c673d2dc48744582b8d08335192aeb2b.setContent(html_55981af8bde347e5a3ec408d21dad13f);


    marker_0560debe24d8460b9defa8fc134ee0a6.bindPopup(popup_c673d2dc48744582b8d08335192aeb2b)
        ;




    var marker_707ed812fd364cbd95fb3bf36f4a5cad = L.marker(
        [46.0486488342285, -64.0911483764648],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_634014ca28204764a50eed94040d7e6e = L.popup({ "maxWidth": "100%" });


    var html_8e0ddcc6cd264a8a9a4c2e730a17a8f9 = $(`<div id="html_8e0ddcc6cd264a8a9a4c2e730a17a8f9" style="width: 100.0%; height: 100.0%;">Pedvac Foundation</div>`)[0];
    popup_634014ca28204764a50eed94040d7e6e.setContent(html_8e0ddcc6cd264a8a9a4c2e730a17a8f9);


    marker_707ed812fd364cbd95fb3bf36f4a5cad.bindPopup(popup_634014ca28204764a50eed94040d7e6e)
        ;




    var marker_d06637db240841b59129c9c6c76316dc = L.marker(
        [43.163257598877, -79.2430114746094],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_11313d7ff5a247b9911e23aa2d44a7a3 = L.popup({ "maxWidth": "100%" });


    var html_e0ebfdf04c144b0988036a1f22682434 = $(`<div id="html_e0ebfdf04c144b0988036a1f22682434" style="width: 100.0%; height: 100.0%;">Community Care St. Catharines \u0026 Thorold</div>`)[0];
    popup_11313d7ff5a247b9911e23aa2d44a7a3.setContent(html_e0ebfdf04c144b0988036a1f22682434);


    marker_d06637db240841b59129c9c6c76316dc.bindPopup(popup_11313d7ff5a247b9911e23aa2d44a7a3)
        ;




    var marker_6c60fc9ec0074e8f8a52f9b2520bddb4 = L.marker(
        [46.7337341308594, -65.428337097168],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7f8f31224e0e47dd81ef60526c32f279 = L.popup({ "maxWidth": "100%" });


    var html_15794b23e290404ab3ae29e2c11ec2aa = $(`<div id="html_15794b23e290404ab3ae29e2c11ec2aa" style="width: 100.0%; height: 100.0%;">Le Comité de Bénévolat de Rogersville Inc.</div>`)[0];
    popup_7f8f31224e0e47dd81ef60526c32f279.setContent(html_15794b23e290404ab3ae29e2c11ec2aa);


    marker_6c60fc9ec0074e8f8a52f9b2520bddb4.bindPopup(popup_7f8f31224e0e47dd81ef60526c32f279)
        ;




    var marker_91e1d775e96b476aa31b990644da7b95 = L.marker(
        [43.6475524902344, -79.8997955322266],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fc596d23c1474483ac28279ec9d47566 = L.popup({ "maxWidth": "100%" });


    var html_356ae1a4584047138cedfa401bc7f68c = $(`<div id="html_356ae1a4584047138cedfa401bc7f68c" style="width: 100.0%; height: 100.0%;">Georgetown Bread Basket</div>`)[0];
    popup_fc596d23c1474483ac28279ec9d47566.setContent(html_356ae1a4584047138cedfa401bc7f68c);


    marker_91e1d775e96b476aa31b990644da7b95.bindPopup(popup_fc596d23c1474483ac28279ec9d47566)
        ;




    var marker_95d064cd1c2e47ae9b414dce73ad774f = L.marker(
        [47.5524940490723, -52.7414093017578],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0183fbcfb5fb4fe2b96fdf9cd0eb5484 = L.popup({ "maxWidth": "100%" });


    var html_aeacee2845ea47ea9d854c34af3844d4 = $(`<div id="html_aeacee2845ea47ea9d854c34af3844d4" style="width: 100.0%; height: 100.0%;">St. Teresa\u0027s SVdP</div>`)[0];
    popup_0183fbcfb5fb4fe2b96fdf9cd0eb5484.setContent(html_aeacee2845ea47ea9d854c34af3844d4);


    marker_95d064cd1c2e47ae9b414dce73ad774f.bindPopup(popup_0183fbcfb5fb4fe2b96fdf9cd0eb5484)
        ;




    var marker_d53bfd0ffb4948c5860941369eebf6f9 = L.marker(
        [45.3873062133789, -71.9071655273438],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_30f16c414b6d4e5eadeb6c5eb744bad5 = L.popup({ "maxWidth": "100%" });


    var html_e8c8a49133e340ecb0ab1343a8856178 = $(`<div id="html_e8c8a49133e340ecb0ab1343a8856178" style="width: 100.0%; height: 100.0%;">Moisson Estrie</div>`)[0];
    popup_30f16c414b6d4e5eadeb6c5eb744bad5.setContent(html_e8c8a49133e340ecb0ab1343a8856178);


    marker_d53bfd0ffb4948c5860941369eebf6f9.bindPopup(popup_30f16c414b6d4e5eadeb6c5eb744bad5)
        ;




    var marker_39402daeb67a44fe8dd047813b520207 = L.marker(
        [49.6018486022949, -119.682289123535],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f351a71c6c684686b73d96b42a564a9b = L.popup({ "maxWidth": "100%" });


    var html_8a7ad7fa59a94a14966d97369684699f = $(`<div id="html_8a7ad7fa59a94a14966d97369684699f" style="width: 100.0%; height: 100.0%;">SUMMERLAND COMMUNITY FOOD BANK</div>`)[0];
    popup_f351a71c6c684686b73d96b42a564a9b.setContent(html_8a7ad7fa59a94a14966d97369684699f);


    marker_39402daeb67a44fe8dd047813b520207.bindPopup(popup_f351a71c6c684686b73d96b42a564a9b)
        ;




    var marker_0d382f55f6ae4eb4b5136390f875c6c0 = L.marker(
        [49.8923530578613, -119.493354797363],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c9c7272efb7c4f6e9f27e580eb784a3b = L.popup({ "maxWidth": "100%" });


    var html_d559977194a241418de57a378492a50d = $(`<div id="html_d559977194a241418de57a378492a50d" style="width: 100.0%; height: 100.0%;">Central Okanagan Food Bank</div>`)[0];
    popup_c9c7272efb7c4f6e9f27e580eb784a3b.setContent(html_d559977194a241418de57a378492a50d);


    marker_0d382f55f6ae4eb4b5136390f875c6c0.bindPopup(popup_c9c7272efb7c4f6e9f27e580eb784a3b)
        ;




    var marker_4aad7ced870a4f069943c8401db34734 = L.marker(
        [45.4195022583008, -75.630241394043],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_acec5e737c2d480d955c84c0964ae3a0 = L.popup({ "maxWidth": "100%" });


    var html_4ec1bdbd7b7d42dab90ccb138767332c = $(`<div id="html_4ec1bdbd7b7d42dab90ccb138767332c" style="width: 100.0%; height: 100.0%;">Ottawa Food Bank</div>`)[0];
    popup_acec5e737c2d480d955c84c0964ae3a0.setContent(html_4ec1bdbd7b7d42dab90ccb138767332c);


    marker_4aad7ced870a4f069943c8401db34734.bindPopup(popup_acec5e737c2d480d955c84c0964ae3a0)
        ;




    var marker_7614fd5745a74d16a7e1ff05568ad293 = L.marker(
        [47.6056747436523, -52.7152481079102],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e11cb116196546958d3cfe45c05722aa = L.popup({ "maxWidth": "100%" });


    var html_e8194fd96d494a919a47f8ff52797ce8 = $(`<div id="html_e8194fd96d494a919a47f8ff52797ce8" style="width: 100.0%; height: 100.0%;">Mary Queen of Peace Food Bank</div>`)[0];
    popup_e11cb116196546958d3cfe45c05722aa.setContent(html_e8194fd96d494a919a47f8ff52797ce8);


    marker_7614fd5745a74d16a7e1ff05568ad293.bindPopup(popup_e11cb116196546958d3cfe45c05722aa)
        ;




    var marker_582be70a7d464bc5b4dc12419e6bac48 = L.marker(
        [45.5614929199219, -73.4397735595703],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cfb8ae6dc143467788611c2fc9d3d00e = L.popup({ "maxWidth": "100%" });


    var html_8f2107172c32422ba7eb74a40ee1ebd3 = $(`<div id="html_8f2107172c32422ba7eb74a40ee1ebd3" style="width: 100.0%; height: 100.0%;">Moisson Rive-Sud</div>`)[0];
    popup_cfb8ae6dc143467788611c2fc9d3d00e.setContent(html_8f2107172c32422ba7eb74a40ee1ebd3);


    marker_582be70a7d464bc5b4dc12419e6bac48.bindPopup(popup_cfb8ae6dc143467788611c2fc9d3d00e)
        ;




    var marker_7cdc91f9a3b1490895917d31527a2679 = L.marker(
        [44.4873962402344, -80.0566329956055],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2401b6fc76cb47bfa5c448bae662ce4e = L.popup({ "maxWidth": "100%" });


    var html_756e772c01dd4e76b9107d3615cb11b9 = $(`<div id="html_756e772c01dd4e76b9107d3615cb11b9" style="width: 100.0%; height: 100.0%;">Wasaga Beach Ministerial Food Bank</div>`)[0];
    popup_2401b6fc76cb47bfa5c448bae662ce4e.setContent(html_756e772c01dd4e76b9107d3615cb11b9);


    marker_7cdc91f9a3b1490895917d31527a2679.bindPopup(popup_2401b6fc76cb47bfa5c448bae662ce4e)
        ;




    var marker_f14517e546364bc4ab3920121fecd3ee = L.marker(
        [46.3099708557129, -79.4525833129883],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dd4af72a126e4ef78ae15f9b65e06540 = L.popup({ "maxWidth": "100%" });


    var html_69b750ccca354641b15afdfae511fdb2 = $(`<div id="html_69b750ccca354641b15afdfae511fdb2" style="width: 100.0%; height: 100.0%;">North Bay Food Bank</div>`)[0];
    popup_dd4af72a126e4ef78ae15f9b65e06540.setContent(html_69b750ccca354641b15afdfae511fdb2);


    marker_f14517e546364bc4ab3920121fecd3ee.bindPopup(popup_dd4af72a126e4ef78ae15f9b65e06540)
        ;




    var marker_e40c386f4f4343198707050e911db610 = L.marker(
        [50.0289001464844, -125.271896362305],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e877b84ec9a74ee29d374585ff4be4a8 = L.popup({ "maxWidth": "100%" });


    var html_967c76b9b1d947b7b680b5f2b6af1033 = $(`<div id="html_967c76b9b1d947b7b680b5f2b6af1033" style="width: 100.0%; height: 100.0%;">Campbell River \u0026 District Food Bank</div>`)[0];
    popup_e877b84ec9a74ee29d374585ff4be4a8.setContent(html_967c76b9b1d947b7b680b5f2b6af1033);


    marker_e40c386f4f4343198707050e911db610.bindPopup(popup_e877b84ec9a74ee29d374585ff4be4a8)
        ;




    var marker_8bfc967675824cf6b1baa3f7b6f75842 = L.marker(
        [46.0952606201172, -64.7813110351563],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dcbc31a7ce804459b169f18f2d438c67 = L.popup({ "maxWidth": "100%" });


    var html_b2cc3e50438444aa960f62c3db9ce2df = $(`<div id="html_b2cc3e50438444aa960f62c3db9ce2df" style="width: 100.0%; height: 100.0%;">Maison Nazareth Inc.</div>`)[0];
    popup_dcbc31a7ce804459b169f18f2d438c67.setContent(html_b2cc3e50438444aa960f62c3db9ce2df);


    marker_8bfc967675824cf6b1baa3f7b6f75842.bindPopup(popup_dcbc31a7ce804459b169f18f2d438c67)
        ;




    var marker_678476b18bfc4122b7bd5225fa9820c6 = L.marker(
        [54.0654220581055, -128.63249206543],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e4bfc5c5f21046fd9f56f8f352c10675 = L.popup({ "maxWidth": "100%" });


    var html_e1f69c00d5794eb6a9fde2b6b97fd191 = $(`<div id="html_e1f69c00d5794eb6a9fde2b6b97fd191" style="width: 100.0%; height: 100.0%;">Kitimat Food Bank Society</div>`)[0];
    popup_e4bfc5c5f21046fd9f56f8f352c10675.setContent(html_e1f69c00d5794eb6a9fde2b6b97fd191);


    marker_678476b18bfc4122b7bd5225fa9820c6.bindPopup(popup_e4bfc5c5f21046fd9f56f8f352c10675)
        ;




    var marker_db24911a623c4d71b8cd462cf1747591 = L.marker(
        [44.2525520324707, -76.4890975952148],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a10b4ad2ded1475ab487df21cfce7336 = L.popup({ "maxWidth": "100%" });


    var html_9e33e644bb7b42d2a680f658c31354f0 = $(`<div id="html_9e33e644bb7b42d2a680f658c31354f0" style="width: 100.0%; height: 100.0%;">Partners in Mission Food Bank</div>`)[0];
    popup_a10b4ad2ded1475ab487df21cfce7336.setContent(html_9e33e644bb7b42d2a680f658c31354f0);


    marker_db24911a623c4d71b8cd462cf1747591.bindPopup(popup_a10b4ad2ded1475ab487df21cfce7336)
        ;




    var marker_1afea872daa94d30b1cadc21d684c57a = L.marker(
        [46.0113334655762, -73.4544982910156],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ac7c8d1844eb4689944af128e0b6d761 = L.popup({ "maxWidth": "100%" });


    var html_aaf17ec0e5b6438ba8b5f7c2f8699ee8 = $(`<div id="html_aaf17ec0e5b6438ba8b5f7c2f8699ee8" style="width: 100.0%; height: 100.0%;">Moisson Lanaudière</div>`)[0];
    popup_ac7c8d1844eb4689944af128e0b6d761.setContent(html_aaf17ec0e5b6438ba8b5f7c2f8699ee8);


    marker_1afea872daa94d30b1cadc21d684c57a.bindPopup(popup_ac7c8d1844eb4689944af128e0b6d761)
        ;




    var marker_017332ff5c3244a0b9d4e9eaac8a1254 = L.marker(
        [46.2380523681641, -63.1267242431641],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8dcde8fc2a354e20b5736a78c361621d = L.popup({ "maxWidth": "100%" });


    var html_4f9858296b114419ab467780d697c92c = $(`<div id="html_4f9858296b114419ab467780d697c92c" style="width: 100.0%; height: 100.0%;">Salvation Army - Charlottetown</div>`)[0];
    popup_8dcde8fc2a354e20b5736a78c361621d.setContent(html_4f9858296b114419ab467780d697c92c);


    marker_017332ff5c3244a0b9d4e9eaac8a1254.bindPopup(popup_8dcde8fc2a354e20b5736a78c361621d)
        ;




    var marker_66015b0c3cdb44b4a6731b24c7a40573 = L.marker(
        [48.9443016052246, -55.6667404174805],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2078da4a446d482bb46602f0d4617845 = L.popup({ "maxWidth": "100%" });


    var html_c67a52bd90474f249768f34115480fe3 = $(`<div id="html_c67a52bd90474f249768f34115480fe3" style="width: 100.0%; height: 100.0%;">Grand Falls/Windsor/Bishop\u0027s Falls Community Food Bank Inc.</div>`)[0];
    popup_2078da4a446d482bb46602f0d4617845.setContent(html_c67a52bd90474f249768f34115480fe3);


    marker_66015b0c3cdb44b4a6731b24c7a40573.bindPopup(popup_2078da4a446d482bb46602f0d4617845)
        ;




    var marker_36400ee58ed945559a14e69af4ca043c = L.marker(
        [48.9483261108398, -125.559143066406],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_efeae1eca895418d810997529b6e4cc0 = L.popup({ "maxWidth": "100%" });


    var html_1d23aacb65d04d998bd109d77d1d73d8 = $(`<div id="html_1d23aacb65d04d998bd109d77d1d73d8" style="width: 100.0%; height: 100.0%;">FOOD BANK ON THE EDGE</div>`)[0];
    popup_efeae1eca895418d810997529b6e4cc0.setContent(html_1d23aacb65d04d998bd109d77d1d73d8);


    marker_36400ee58ed945559a14e69af4ca043c.bindPopup(popup_efeae1eca895418d810997529b6e4cc0)
        ;




    var marker_1686a7bb6c53442b9201c0edc7a89e27 = L.marker(
        [44.4992790222168, -80.2154541015625],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2f89185b2fb14cc5b6e1a1d368d2e3ee = L.popup({ "maxWidth": "100%" });


    var html_a3e023d1948c4244b20fce02b3fc9b8f = $(`<div id="html_a3e023d1948c4244b20fce02b3fc9b8f" style="width: 100.0%; height: 100.0%;">Salvation Army Collingwood Food Bank</div>`)[0];
    popup_2f89185b2fb14cc5b6e1a1d368d2e3ee.setContent(html_a3e023d1948c4244b20fce02b3fc9b8f);


    marker_1686a7bb6c53442b9201c0edc7a89e27.bindPopup(popup_2f89185b2fb14cc5b6e1a1d368d2e3ee)
        ;




    var marker_7b3ba204997048918ec1f089bb65979b = L.marker(
        [47.0017280578613, -65.5668792724609],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5fff786dde75472caf2bb09e6d505abd = L.popup({ "maxWidth": "100%" });


    var html_3f466a1bc82947c2aef2e566cce4a684 = $(`<div id="html_3f466a1bc82947c2aef2e566cce4a684" style="width: 100.0%; height: 100.0%;">Miramichi Community Food Bank Inc.</div>`)[0];
    popup_5fff786dde75472caf2bb09e6d505abd.setContent(html_3f466a1bc82947c2aef2e566cce4a684);


    marker_7b3ba204997048918ec1f089bb65979b.bindPopup(popup_5fff786dde75472caf2bb09e6d505abd)
        ;




    var marker_f6adf98ffe2c4846bbd1449c3efb2037 = L.marker(
        [43.7431755065918, -81.7090301513672],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5c97d64e596940778e412700e3369953 = L.popup({ "maxWidth": "100%" });


    var html_8b688675c8864073a787190c31f82ac7 = $(`<div id="html_8b688675c8864073a787190c31f82ac7" style="width: 100.0%; height: 100.0%;">St. Vincent de Paul Goderich</div>`)[0];
    popup_5c97d64e596940778e412700e3369953.setContent(html_8b688675c8864073a787190c31f82ac7);


    marker_f6adf98ffe2c4846bbd1449c3efb2037.bindPopup(popup_5c97d64e596940778e412700e3369953)
        ;




    var marker_213d174f415849bdb796aab6f1d48260 = L.marker(
        [42.9781608581543, -79.2515487670898],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0e1661f1ba2644aba7d320b653c36600 = L.popup({ "maxWidth": "100%" });


    var html_c2cfaf63001c4e30bc7d0b3cb14da268 = $(`<div id="html_c2cfaf63001c4e30bc7d0b3cb14da268" style="width: 100.0%; height: 100.0%;">The Hope Centre</div>`)[0];
    popup_0e1661f1ba2644aba7d320b653c36600.setContent(html_c2cfaf63001c4e30bc7d0b3cb14da268);


    marker_213d174f415849bdb796aab6f1d48260.bindPopup(popup_0e1661f1ba2644aba7d320b653c36600)
        ;




    var marker_027dd13cddbd4a23bca44492ef080af9 = L.marker(
        [43.8633422851563, -79.7182083129883],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_224ffd691a204a0296955d021615ca74 = L.popup({ "maxWidth": "100%" });


    var html_fc898c0c721f4b978f07f78dd2506e43 = $(`<div id="html_fc898c0c721f4b978f07f78dd2506e43" style="width: 100.0%; height: 100.0%;">Caledon Community Services - The Exchange</div>`)[0];
    popup_224ffd691a204a0296955d021615ca74.setContent(html_fc898c0c721f4b978f07f78dd2506e43);


    marker_027dd13cddbd4a23bca44492ef080af9.bindPopup(popup_224ffd691a204a0296955d021615ca74)
        ;




    var marker_9283cfcbf5274b51bc546f383c37b3ea = L.marker(
        [49.178638458252, -57.4176330566406],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_11e13fe0348a45519f8ea7360c71672f = L.popup({ "maxWidth": "100%" });


    var html_197aeda304cb49f994f57404f202d4f7 = $(`<div id="html_197aeda304cb49f994f57404f202d4f7" style="width: 100.0%; height: 100.0%;">Deer Lake Regional Food Bank</div>`)[0];
    popup_11e13fe0348a45519f8ea7360c71672f.setContent(html_197aeda304cb49f994f57404f202d4f7);


    marker_9283cfcbf5274b51bc546f383c37b3ea.bindPopup(popup_11e13fe0348a45519f8ea7360c71672f)
        ;




    var marker_3d5ad8bbc6624df19d890f9c913e95f8 = L.marker(
        [43.193000793457, -79.5607833862305],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_bc6e0581995f46f3bdadf5ed12a9fd50 = L.popup({ "maxWidth": "100%" });


    var html_c1179cff23994a299d399367a32c64f1 = $(`<div id="html_c1179cff23994a299d399367a32c64f1" style="width: 100.0%; height: 100.0%;">Grimsby Benevolent Fund Food Bank</div>`)[0];
    popup_bc6e0581995f46f3bdadf5ed12a9fd50.setContent(html_c1179cff23994a299d399367a32c64f1);


    marker_3d5ad8bbc6624df19d890f9c913e95f8.bindPopup(popup_bc6e0581995f46f3bdadf5ed12a9fd50)
        ;




    var marker_dc970b62449e48bb9d2311c34618195f = L.marker(
        [45.589282989502, -73.7533721923828],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6220450dfebd429c994db1383f696097 = L.popup({ "maxWidth": "100%" });


    var html_d8da28782d444a0f8828fc8b156d0a58 = $(`<div id="html_d8da28782d444a0f8828fc8b156d0a58" style="width: 100.0%; height: 100.0%;">Moisson Laval</div>`)[0];
    popup_6220450dfebd429c994db1383f696097.setContent(html_d8da28782d444a0f8828fc8b156d0a58);


    marker_dc970b62449e48bb9d2311c34618195f.bindPopup(popup_6220450dfebd429c994db1383f696097)
        ;




    var marker_3fd62ba0d2fd41d4975ac7b81495e0ac = L.marker(
        [-67.3921585083008, 58.0],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9d66aaf029ce4422a9f3b46c6a6af20f = L.popup({ "maxWidth": "100%" });


    var html_fb9d84379bf04983bac3737252023bef = $(`<div id="html_fb9d84379bf04983bac3737252023bef" style="width: 100.0%; height: 100.0%;">Banque Alimentaire \"J\u0027ai Faim\", "47.5105819702148</div>`)[0];
    popup_9d66aaf029ce4422a9f3b46c6a6af20f.setContent(html_fb9d84379bf04983bac3737252023bef);


    marker_3fd62ba0d2fd41d4975ac7b81495e0ac.bindPopup(popup_9d66aaf029ce4422a9f3b46c6a6af20f)
        ;




    var marker_13d37534e0be4821b08e0b88c7531bb2 = L.marker(
        [43.1137657165527, -80.7385940551758],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c7a15e49239a4dd09d3d446280739111 = L.popup({ "maxWidth": "100%" });


    var html_cbc7678e781c4aaa9794721ae78034d8 = $(`<div id="html_cbc7678e781c4aaa9794721ae78034d8" style="width: 100.0%; height: 100.0%;">Salvation Army Woodstock Community \u0026 Family Services</div>`)[0];
    popup_c7a15e49239a4dd09d3d446280739111.setContent(html_cbc7678e781c4aaa9794721ae78034d8);


    marker_13d37534e0be4821b08e0b88c7531bb2.bindPopup(popup_c7a15e49239a4dd09d3d446280739111)
        ;




    var marker_5f7238798e034169a5963c49620089c1 = L.marker(
        [50.7019653320313, -119.280303955078],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a677fb0b8f6547559ac00064c3990eae = L.popup({ "maxWidth": "100%" });


    var html_2cd299d1b70d4f80b2afa56bb33fba4e = $(`<div id="html_2cd299d1b70d4f80b2afa56bb33fba4e" style="width: 100.0%; height: 100.0%;">Salvation Army SALMON ARM FOOD BANK</div>`)[0];
    popup_a677fb0b8f6547559ac00064c3990eae.setContent(html_2cd299d1b70d4f80b2afa56bb33fba4e);


    marker_5f7238798e034169a5963c49620089c1.bindPopup(popup_a677fb0b8f6547559ac00064c3990eae)
        ;




    var marker_8def396c17d14418b1ef8ac40ed3b8b3 = L.marker(
        [43.6064720153809, -79.5040435791016],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5c78fdc6818f4e3e898cddeb9766ad6d = L.popup({ "maxWidth": "100%" });


    var html_5321931635144dbf8fe380aee9ec2109 = $(`<div id="html_5321931635144dbf8fe380aee9ec2109" style="width: 100.0%; height: 100.0%;">Daily Bread Food Bank</div>`)[0];
    popup_5c78fdc6818f4e3e898cddeb9766ad6d.setContent(html_5321931635144dbf8fe380aee9ec2109);


    marker_8def396c17d14418b1ef8ac40ed3b8b3.bindPopup(popup_5c78fdc6818f4e3e898cddeb9766ad6d)
        ;




    var marker_e52175dc99314c0784106c61bcc6c635 = L.marker(
        [43.0390281677246, -80.8955383300781],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2071209c2b8d4b3b97ad88af38a554c5 = L.popup({ "maxWidth": "100%" });


    var html_4692d6a87b45424a9fadacd74739f444 = $(`<div id="html_4692d6a87b45424a9fadacd74739f444" style="width: 100.0%; height: 100.0%;">Salvation Army Ingersoll</div>`)[0];
    popup_2071209c2b8d4b3b97ad88af38a554c5.setContent(html_4692d6a87b45424a9fadacd74739f444);


    marker_e52175dc99314c0784106c61bcc6c635.bindPopup(popup_2071209c2b8d4b3b97ad88af38a554c5)
        ;




    var marker_9ea50bd66e7e4f4aae669dfb0bfdb258 = L.marker(
        [45.4878425598145, -77.673942565918],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_560a71f4c9cb432681f424efa84cdf33 = L.popup({ "maxWidth": "100%" });


    var html_618f8513b800465d9253e97146b7e2b9 = $(`<div id="html_618f8513b800465d9253e97146b7e2b9" style="width: 100.0%; height: 100.0%;">Madawaska Valley Food Bank</div>`)[0];
    popup_560a71f4c9cb432681f424efa84cdf33.setContent(html_618f8513b800465d9253e97146b7e2b9);


    marker_9ea50bd66e7e4f4aae669dfb0bfdb258.bindPopup(popup_560a71f4c9cb432681f424efa84cdf33)
        ;




    var marker_0edb104c236347a8b0e73146596b1be9 = L.marker(
        [43.9855346679688, -79.4551391601563],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3460b5f6b8c94d2f828acebc4ffd56f9 = L.popup({ "maxWidth": "100%" });


    var html_86aa738458f14da58294aac7a719ef9f = $(`<div id="html_86aa738458f14da58294aac7a719ef9f" style="width: 100.0%; height: 100.0%;">Aurora Food Pantry</div>`)[0];
    popup_3460b5f6b8c94d2f828acebc4ffd56f9.setContent(html_86aa738458f14da58294aac7a719ef9f);


    marker_0edb104c236347a8b0e73146596b1be9.bindPopup(popup_3460b5f6b8c94d2f828acebc4ffd56f9)
        ;




    var marker_107cbbbf69b54aad8c0d21b583e263f4 = L.marker(
        [47.5186195373535, -52.9544372558594],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9935322cd17543bfac876e9409ebebc5 = L.popup({ "maxWidth": "100%" });


    var html_181b7659b31046538c1f0667df379ada = $(`<div id="html_181b7659b31046538c1f0667df379ada" style="width: 100.0%; height: 100.0%;">Conception Bay South/Paradise Community Food Bank</div>`)[0];
    popup_9935322cd17543bfac876e9409ebebc5.setContent(html_181b7659b31046538c1f0667df379ada);


    marker_107cbbbf69b54aad8c0d21b583e263f4.bindPopup(popup_9935322cd17543bfac876e9409ebebc5)
        ;




    var marker_8c0c3804468748259fd08b94a68a3d53 = L.marker(
        [45.5241851806641, -65.8229598999023],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_efaf8ca88505457c99d4e7f3ea842378 = L.popup({ "maxWidth": "100%" });


    var html_7ba07ce9a5bd4d349b3a6016f4f5f9a0 = $(`<div id="html_7ba07ce9a5bd4d349b3a6016f4f5f9a0" style="width: 100.0%; height: 100.0%;">Hampton Food Basket</div>`)[0];
    popup_efaf8ca88505457c99d4e7f3ea842378.setContent(html_7ba07ce9a5bd4d349b3a6016f4f5f9a0);


    marker_8c0c3804468748259fd08b94a68a3d53.bindPopup(popup_efaf8ca88505457c99d4e7f3ea842378)
        ;




    var marker_7914a3d7925945a1874bb222eb503789 = L.marker(
        [43.1141242980957, -79.0868377685547],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_772fd8918efa4d1995f429588fcfca6a = L.popup({ "maxWidth": "100%" });


    var html_5b8568c8bec847d5826d4b043f66b094 = $(`<div id="html_5b8568c8bec847d5826d4b043f66b094" style="width: 100.0%; height: 100.0%;">Project S.H.A.R.E</div>`)[0];
    popup_772fd8918efa4d1995f429588fcfca6a.setContent(html_5b8568c8bec847d5826d4b043f66b094);


    marker_7914a3d7925945a1874bb222eb503789.bindPopup(popup_772fd8918efa4d1995f429588fcfca6a)
        ;




    var marker_ebe0f29838c245879132f8f06ee33eae = L.marker(
        [50.4710350036621, -104.593780517578],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f9fd7cb0dd97488f9daef13abfbfad0d = L.popup({ "maxWidth": "100%" });


    var html_60d57d2a8970452287537eaa241e939a = $(`<div id="html_60d57d2a8970452287537eaa241e939a" style="width: 100.0%; height: 100.0%;">Regina \u0026 District Food Bank</div>`)[0];
    popup_f9fd7cb0dd97488f9daef13abfbfad0d.setContent(html_60d57d2a8970452287537eaa241e939a);


    marker_ebe0f29838c245879132f8f06ee33eae.bindPopup(popup_f9fd7cb0dd97488f9daef13abfbfad0d)
        ;




    var marker_2039993ea63d4e878fc2686a2ecbaf8c = L.marker(
        [51.2913627624512, -113.995819091797],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d70242e996484ca6a197b15b019f1684 = L.popup({ "maxWidth": "100%" });


    var html_5374554a42dc4e38b7ddffbf9bdaf35d = $(`<div id="html_5374554a42dc4e38b7ddffbf9bdaf35d" style="width: 100.0%; height: 100.0%;">Airdrie Food Bank</div>`)[0];
    popup_d70242e996484ca6a197b15b019f1684.setContent(html_5374554a42dc4e38b7ddffbf9bdaf35d);


    marker_2039993ea63d4e878fc2686a2ecbaf8c.bindPopup(popup_d70242e996484ca6a197b15b019f1684)
        ;




    var marker_050b4fec7e514b428a6ab1d01dcd321c = L.marker(
        [49.2775535583496, -122.853302001953],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5110dd0b5d7a48d9882cb8919b80316f = L.popup({ "maxWidth": "100%" });


    var html_d0c67ff33c21440bb263fd46136621ad = $(`<div id="html_d0c67ff33c21440bb263fd46136621ad" style="width: 100.0%; height: 100.0%;">SHARE FAMILY \u0026 COMMUNITY SERVICES</div>`)[0];
    popup_5110dd0b5d7a48d9882cb8919b80316f.setContent(html_d0c67ff33c21440bb263fd46136621ad);


    marker_050b4fec7e514b428a6ab1d01dcd321c.bindPopup(popup_5110dd0b5d7a48d9882cb8919b80316f)
        ;




    var marker_13ee1309b0ef462784f45d65fc8ef2cc = L.marker(
        [50.6021385192871, -115.821403503418],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7e3043f824fd4874b0250247249ddea8 = L.popup({ "maxWidth": "100%" });


    var html_e503fca5d3f44d47ac1c65509e6d16b6 = $(`<div id="html_e503fca5d3f44d47ac1c65509e6d16b6" style="width: 100.0%; height: 100.0%;">Columbia Valley Food Bank</div>`)[0];
    popup_7e3043f824fd4874b0250247249ddea8.setContent(html_e503fca5d3f44d47ac1c65509e6d16b6);


    marker_13ee1309b0ef462784f45d65fc8ef2cc.bindPopup(popup_7e3043f824fd4874b0250247249ddea8)
        ;




    var marker_f620d3e8f781445da54d1654255d1520 = L.marker(
        [52.1274948120117, -106.673042297363],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1d06c2f8fa1941d2a854e2ffbc5f5a9f = L.popup({ "maxWidth": "100%" });


    var html_e3527ac0b6a8491cb259e0e50aaf7a0b = $(`<div id="html_e3527ac0b6a8491cb259e0e50aaf7a0b" style="width: 100.0%; height: 100.0%;">Saskatoon Food Bank \u0026 Learning Centre</div>`)[0];
    popup_1d06c2f8fa1941d2a854e2ffbc5f5a9f.setContent(html_e3527ac0b6a8491cb259e0e50aaf7a0b);


    marker_f620d3e8f781445da54d1654255d1520.bindPopup(popup_1d06c2f8fa1941d2a854e2ffbc5f5a9f)
        ;




    var marker_97a18563799f4680ae1c12c5aa64f246 = L.marker(
        [50.1098442077637, -120.789054870605],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_83cb6bda51dc4b18a512e3b7ce329437 = L.popup({ "maxWidth": "100%" });


    var html_e5064dd40f64482ba5cead921bcd0323 = $(`<div id="html_e5064dd40f64482ba5cead921bcd0323" style="width: 100.0%; height: 100.0%;">NICOLA VALLEY \u0026 DISTRICT FOOD BANK</div>`)[0];
    popup_83cb6bda51dc4b18a512e3b7ce329437.setContent(html_e5064dd40f64482ba5cead921bcd0323);


    marker_97a18563799f4680ae1c12c5aa64f246.bindPopup(popup_83cb6bda51dc4b18a512e3b7ce329437)
        ;




    var marker_659f487906e64628ba28a2ad154fefc7 = L.marker(
        [48.3715171813965, -123.727584838867],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7020cfe6b5a54b0c9a0e97b5bfecd0a7 = L.popup({ "maxWidth": "100%" });


    var html_1996cd39e18645ac8c44bf8fa269bb32 = $(`<div id="html_1996cd39e18645ac8c44bf8fa269bb32" style="width: 100.0%; height: 100.0%;">SOOKE FOOD BANK SOCIETY</div>`)[0];
    popup_7020cfe6b5a54b0c9a0e97b5bfecd0a7.setContent(html_1996cd39e18645ac8c44bf8fa269bb32);


    marker_659f487906e64628ba28a2ad154fefc7.bindPopup(popup_7020cfe6b5a54b0c9a0e97b5bfecd0a7)
        ;




    var marker_635dc440b43c42e69286ce0ddd27f33c = L.marker(
        [46.903980255127, -67.396842956543],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b4cd4885603c44f888831b6a34bed66f = L.popup({ "maxWidth": "100%" });


    var html_7e667ad0c89c473e861a1685522c24cf = $(`<div id="html_7e667ad0c89c473e861a1685522c24cf" style="width: 100.0%; height: 100.0%;">Keeper of the Light Food Bank</div>`)[0];
    popup_b4cd4885603c44f888831b6a34bed66f.setContent(html_7e667ad0c89c473e861a1685522c24cf);


    marker_635dc440b43c42e69286ce0ddd27f33c.bindPopup(popup_b4cd4885603c44f888831b6a34bed66f)
        ;




    var marker_8be70068cecb407695b1a38c610b7d01 = L.marker(
        [45.5334815979004, -75.6090316772461],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6361f773eaab48b29bc10d4d9b635c05 = L.popup({ "maxWidth": "100%" });


    var html_71c44a498e9c4109b28eaf144d779c9a = $(`<div id="html_71c44a498e9c4109b28eaf144d779c9a" style="width: 100.0%; height: 100.0%;">Moisson Outaouais</div>`)[0];
    popup_6361f773eaab48b29bc10d4d9b635c05.setContent(html_71c44a498e9c4109b28eaf144d779c9a);


    marker_8be70068cecb407695b1a38c610b7d01.bindPopup(popup_6361f773eaab48b29bc10d4d9b635c05)
        ;




    var marker_782115bb309546549046e0654f3865f7 = L.marker(
        [47.5351142883301, -52.7496223449707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9a3e797a721c45d48a741ce486c3bd36 = L.popup({ "maxWidth": "100%" });


    var html_9fd8bd2cc47440ddadac5a6f8c43bc75 = $(`<div id="html_9fd8bd2cc47440ddadac5a6f8c43bc75" style="width: 100.0%; height: 100.0%;">Salvation Army St. John\u0027s</div>`)[0];
    popup_9a3e797a721c45d48a741ce486c3bd36.setContent(html_9fd8bd2cc47440ddadac5a6f8c43bc75);


    marker_782115bb309546549046e0654f3865f7.bindPopup(popup_9a3e797a721c45d48a741ce486c3bd36)
        ;




    var marker_247cbab7fa314d1d93726d9d3310ddee = L.marker(
        [46.8046798706055, -71.2833251953125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a9b16f2321494295aa489e037a2b889f = L.popup({ "maxWidth": "100%" });


    var html_c5aad0e3f168466c813bdf82023ab477 = $(`<div id="html_c5aad0e3f168466c813bdf82023ab477" style="width: 100.0%; height: 100.0%;">Moisson Quebec</div>`)[0];
    popup_a9b16f2321494295aa489e037a2b889f.setContent(html_c5aad0e3f168466c813bdf82023ab477);


    marker_247cbab7fa314d1d93726d9d3310ddee.bindPopup(popup_a9b16f2321494295aa489e037a2b889f)
        ;




    var marker_dabb95a8751a41b58672545f0213ab82 = L.marker(
        [45.2755317687988, -66.0567398071289],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a42de24bc3ef422bb234ec4bd737120d = L.popup({ "maxWidth": "100%" });


    var html_6c4337c06e5441f585024caa5b318854 = $(`<div id="html_6c4337c06e5441f585024caa5b318854" style="width: 100.0%; height: 100.0%;">Community Food Basket of Saint John</div>`)[0];
    popup_a42de24bc3ef422bb234ec4bd737120d.setContent(html_6c4337c06e5441f585024caa5b318854);


    marker_dabb95a8751a41b58672545f0213ab82.bindPopup(popup_a42de24bc3ef422bb234ec4bd737120d)
        ;




    var marker_46a845cbc719454eaed93088b2ae7a3f = L.marker(
        [47.7603073120117, -65.0584030151367],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_706257c3aaa64871ae2224d9f2aa048c = L.popup({ "maxWidth": "100%" });


    var html_13d5637f35ae4819a5ac6d1f1209baf4 = $(`<div id="html_13d5637f35ae4819a5ac6d1f1209baf4" style="width: 100.0%; height: 100.0%;">Ami Soleil</div>`)[0];
    popup_706257c3aaa64871ae2224d9f2aa048c.setContent(html_13d5637f35ae4819a5ac6d1f1209baf4);


    marker_46a845cbc719454eaed93088b2ae7a3f.bindPopup(popup_706257c3aaa64871ae2224d9f2aa048c)
        ;




    var marker_2764380b5d0d43699696233cdd9cd71d = L.marker(
        [45.0314598083496, -75.4934921264648],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3fd54bdff77549feae509672a1bc3da9 = L.popup({ "maxWidth": "100%" });


    var html_4af4454a40604a738cdd471f68e34b90 = $(`<div id="html_4af4454a40604a738cdd471f68e34b90" style="width: 100.0%; height: 100.0%;">House of Lazarus</div>`)[0];
    popup_3fd54bdff77549feae509672a1bc3da9.setContent(html_4af4454a40604a738cdd471f68e34b90);


    marker_2764380b5d0d43699696233cdd9cd71d.bindPopup(popup_3fd54bdff77549feae509672a1bc3da9)
        ;




    var marker_59f9dfa30f0a47a8b29afcba2c83fc19 = L.marker(
        [42.9006423950195, -79.6156463623047],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4bfe0aedbcdb4a71a098a40f7b6cc38c = L.popup({ "maxWidth": "100%" });


    var html_63617558402141a4887d58124ec52f2c = $(`<div id="html_63617558402141a4887d58124ec52f2c" style="width: 100.0%; height: 100.0%;">Salvation Army Dunnville</div>`)[0];
    popup_4bfe0aedbcdb4a71a098a40f7b6cc38c.setContent(html_63617558402141a4887d58124ec52f2c);


    marker_59f9dfa30f0a47a8b29afcba2c83fc19.bindPopup(popup_4bfe0aedbcdb4a71a098a40f7b6cc38c)
        ;




    var marker_e554c98f8475467e8a89efe093ce06c7 = L.marker(
        [45.5728912353516, -67.3656311035156],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3856ae8781e04105a62bdb53d658cca4 = L.popup({ "maxWidth": "100%" });


    var html_175122147de7448e8695f54370afd29b = $(`<div id="html_175122147de7448e8695f54370afd29b" style="width: 100.0%; height: 100.0%;">Lakeland Resource Centre</div>`)[0];
    popup_3856ae8781e04105a62bdb53d658cca4.setContent(html_175122147de7448e8695f54370afd29b);


    marker_e554c98f8475467e8a89efe093ce06c7.bindPopup(popup_3856ae8781e04105a62bdb53d658cca4)
        ;




    var marker_234064f908d44396a556124d1c32e308 = L.marker(
        [48.653450012207, -123.440704345703],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d9e32bf91a3b4821874f324b5cc57a21 = L.popup({ "maxWidth": "100%" });


    var html_483e3579b0ed496ca036b9706d750554 = $(`<div id="html_483e3579b0ed496ca036b9706d750554" style="width: 100.0%; height: 100.0%;">Sidney Lions Food Bank</div>`)[0];
    popup_d9e32bf91a3b4821874f324b5cc57a21.setContent(html_483e3579b0ed496ca036b9706d750554);


    marker_234064f908d44396a556124d1c32e308.bindPopup(popup_d9e32bf91a3b4821874f324b5cc57a21)
        ;




    var marker_a44905af908f46328c13c2f88f185ff6 = L.marker(
        [45.3466377258301, -80.0334701538086],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4b8ae000fc1d47c08a082ab3c61d58b0 = L.popup({ "maxWidth": "100%" });


    var html_996bd503336044cf95ff1a98101a9ebf = $(`<div id="html_996bd503336044cf95ff1a98101a9ebf" style="width: 100.0%; height: 100.0%;">Harvest Share Community Food Bank</div>`)[0];
    popup_4b8ae000fc1d47c08a082ab3c61d58b0.setContent(html_996bd503336044cf95ff1a98101a9ebf);


    marker_a44905af908f46328c13c2f88f185ff6.bindPopup(popup_4b8ae000fc1d47c08a082ab3c61d58b0)
        ;




    var marker_9c87b6b9f0114bcd8d02b2204d3f8637 = L.marker(
        [49.469783782959, -119.58219909668],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e40aafc0cb3045f89513f6c8857e0b3a = L.popup({ "maxWidth": "100%" });


    var html_287fecd8008b4a27bf41d64d4394d9dd = $(`<div id="html_287fecd8008b4a27bf41d64d4394d9dd" style="width: 100.0%; height: 100.0%;">Salvation Army PENTICTON COMMUNITY FOOD BANK</div>`)[0];
    popup_e40aafc0cb3045f89513f6c8857e0b3a.setContent(html_287fecd8008b4a27bf41d64d4394d9dd);


    marker_9c87b6b9f0114bcd8d02b2204d3f8637.bindPopup(popup_e40aafc0cb3045f89513f6c8857e0b3a)
        ;




    var marker_605c3247d4534300b36ed51ddf0363c3 = L.marker(
        [49.0486602783203, -122.28572845459],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4ca1aa3267a0416b95d4ac8678466fcb = L.popup({ "maxWidth": "100%" });


    var html_6b05b698e42242b5bbbe672813aa0c8d = $(`<div id="html_6b05b698e42242b5bbbe672813aa0c8d" style="width: 100.0%; height: 100.0%;">Archway Community Services</div>`)[0];
    popup_4ca1aa3267a0416b95d4ac8678466fcb.setContent(html_6b05b698e42242b5bbbe672813aa0c8d);


    marker_605c3247d4534300b36ed51ddf0363c3.bindPopup(popup_4ca1aa3267a0416b95d4ac8678466fcb)
        ;




    var marker_9a15004bbe7a4c81b27f9a0cf9790f36 = L.marker(
        [54.3101081848145, -130.326248168945],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f7705caef70945de8661d478faa9f1fe = L.popup({ "maxWidth": "100%" });


    var html_e4346e7f105945e49644a96200d22786 = $(`<div id="html_e4346e7f105945e49644a96200d22786" style="width: 100.0%; height: 100.0%;">Salvation Army Prince Rupert Food Bank</div>`)[0];
    popup_f7705caef70945de8661d478faa9f1fe.setContent(html_e4346e7f105945e49644a96200d22786);


    marker_9a15004bbe7a4c81b27f9a0cf9790f36.bindPopup(popup_f7705caef70945de8661d478faa9f1fe)
        ;




    var marker_7c2c4fdb91ee48c19594e4ffffc68a0d = L.marker(
        [45.6683616638184, -73.8543090820313],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_097492cf1844476ab38c09b68b52425e = L.popup({ "maxWidth": "100%" });


    var html_5737027b09214b5db826a0058fef173a = $(`<div id="html_5737027b09214b5db826a0058fef173a" style="width: 100.0%; height: 100.0%;">Moisson Laurentides</div>`)[0];
    popup_097492cf1844476ab38c09b68b52425e.setContent(html_5737027b09214b5db826a0058fef173a);


    marker_7c2c4fdb91ee48c19594e4ffffc68a0d.bindPopup(popup_097492cf1844476ab38c09b68b52425e)
        ;




    var marker_9870110183bf4c6a985c572fccc36815 = L.marker(
        [45.2608642578125, -66.073616027832],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d7c811541fb848c2ae41a412f73417fd = L.popup({ "maxWidth": "100%" });


    var html_530a26ca59394db4bf669ccc5b027d9c = $(`<div id="html_530a26ca59394db4bf669ccc5b027d9c" style="width: 100.0%; height: 100.0%;">West Side Food Bank Inc.</div>`)[0];
    popup_d7c811541fb848c2ae41a412f73417fd.setContent(html_530a26ca59394db4bf669ccc5b027d9c);


    marker_9870110183bf4c6a985c572fccc36815.bindPopup(popup_d7c811541fb848c2ae41a412f73417fd)
        ;




    var marker_033db3d639364148ae251a3e5b21a4d2 = L.marker(
        [53.5388641357422, -113.328414916992],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2d755d9aa68c457695e6ee10ce895958 = L.popup({ "maxWidth": "100%" });


    var html_a120845df06546a883d4971e9ff6d19f = $(`<div id="html_a120845df06546a883d4971e9ff6d19f" style="width: 100.0%; height: 100.0%;">Strathcona Food Bank Association</div>`)[0];
    popup_2d755d9aa68c457695e6ee10ce895958.setContent(html_a120845df06546a883d4971e9ff6d19f);


    marker_033db3d639364148ae251a3e5b21a4d2.bindPopup(popup_2d755d9aa68c457695e6ee10ce895958)
        ;




    var marker_0ad02017e4b546378db2e7af292137a3 = L.marker(
        [45.6128311157227, -74.6952743530273],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_bdfce127358045d2afa91196aaf7bab8 = L.popup({ "maxWidth": "100%" });


    var html_afb47d355f2a4fa4bc82ce0177b34418 = $(`<div id="html_afb47d355f2a4fa4bc82ce0177b34418" style="width: 100.0%; height: 100.0%;">Banque Alimentaire de L\u0027Orignal</div>`)[0];
    popup_bdfce127358045d2afa91196aaf7bab8.setContent(html_afb47d355f2a4fa4bc82ce0177b34418);


    marker_0ad02017e4b546378db2e7af292137a3.bindPopup(popup_bdfce127358045d2afa91196aaf7bab8)
        ;




    var marker_cf55d102558344cea567522ac1d96f01 = L.marker(
        [53.2985763549805, -60.332763671875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_584bd4440ec742818b586f8b0d3e166f = L.popup({ "maxWidth": "100%" });


    var html_93d92cafa0254d9da33c4b16aed7f913 = $(`<div id="html_93d92cafa0254d9da33c4b16aed7f913" style="width: 100.0%; height: 100.0%;">Labrador Friendship Centre</div>`)[0];
    popup_584bd4440ec742818b586f8b0d3e166f.setContent(html_93d92cafa0254d9da33c4b16aed7f913);


    marker_cf55d102558344cea567522ac1d96f01.bindPopup(popup_584bd4440ec742818b586f8b0d3e166f)
        ;




    var marker_e95ce1a803974f64bb34479cd0800f0f = L.marker(
        [43.8329048156738, -80.850456237793],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5f42bc0e14804e77803e2c71383cfaa9 = L.popup({ "maxWidth": "100%" });


    var html_c006950a3cfc4b50956a835a96d39a54 = $(`<div id="html_c006950a3cfc4b50956a835a96d39a54" style="width: 100.0%; height: 100.0%;">Palmerston Food Bank</div>`)[0];
    popup_5f42bc0e14804e77803e2c71383cfaa9.setContent(html_c006950a3cfc4b50956a835a96d39a54);


    marker_e95ce1a803974f64bb34479cd0800f0f.bindPopup(popup_5f42bc0e14804e77803e2c71383cfaa9)
        ;




    var marker_70defb0a71a340498a895828967825fd = L.marker(
        [52.1297340393066, -122.142593383789],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a6cb54f3fefe496cba45d2750f60bca1 = L.popup({ "maxWidth": "100%" });


    var html_de498d8d570a447eafc65527a145ea38 = $(`<div id="html_de498d8d570a447eafc65527a145ea38" style="width: 100.0%; height: 100.0%;">Salvation Army Williams Lake Food Bank</div>`)[0];
    popup_a6cb54f3fefe496cba45d2750f60bca1.setContent(html_de498d8d570a447eafc65527a145ea38);


    marker_70defb0a71a340498a895828967825fd.bindPopup(popup_a6cb54f3fefe496cba45d2750f60bca1)
        ;




    var marker_b3efa21bdb2d44f6bbbac860c2ee9e1d = L.marker(
        [48.8475151062012, -123.500328063965],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_33e35f1cddd9439eaac990612e4c211a = L.popup({ "maxWidth": "100%" });


    var html_2ba622ee5a1b4e26b20d0ed7ab4876e3 = $(`<div id="html_2ba622ee5a1b4e26b20d0ed7ab4876e3" style="width: 100.0%; height: 100.0%;">SALT SPRING ISLAND COMMUNITY SERVICES FOOD BANK</div>`)[0];
    popup_33e35f1cddd9439eaac990612e4c211a.setContent(html_2ba622ee5a1b4e26b20d0ed7ab4876e3);


    marker_b3efa21bdb2d44f6bbbac860c2ee9e1d.bindPopup(popup_33e35f1cddd9439eaac990612e4c211a)
        ;




    var marker_115dd3a25de043dc8b939e2f075f600a = L.marker(
        [48.6528663635254, -123.557807922363],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a8f61c5744bb4fcbab2e095f7ca28aae = L.popup({ "maxWidth": "100%" });


    var html_c61f329d3a79496eb8bd06a250584d5a = $(`<div id="html_c61f329d3a79496eb8bd06a250584d5a" style="width: 100.0%; height: 100.0%;">CMS FOOD BANK</div>`)[0];
    popup_a8f61c5744bb4fcbab2e095f7ca28aae.setContent(html_c61f329d3a79496eb8bd06a250584d5a);


    marker_115dd3a25de043dc8b939e2f075f600a.bindPopup(popup_a8f61c5744bb4fcbab2e095f7ca28aae)
        ;




    var marker_3d33645661b64b1eaa46fec352a228d8 = L.marker(
        [48.1525268554688, -53.962287902832],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9d6e69414ed7464bb12b64cfd39053c4 = L.popup({ "maxWidth": "100%" });


    var html_2a6efdae1339454e9b3d2bffdaf5eb8d = $(`<div id="html_2a6efdae1339454e9b3d2bffdaf5eb8d" style="width: 100.0%; height: 100.0%;">Salvation Army Clarenville</div>`)[0];
    popup_9d6e69414ed7464bb12b64cfd39053c4.setContent(html_2a6efdae1339454e9b3d2bffdaf5eb8d);


    marker_3d33645661b64b1eaa46fec352a228d8.bindPopup(popup_9d6e69414ed7464bb12b64cfd39053c4)
        ;




    var marker_81e67ecf02964e049c77f0c8d3d1365a = L.marker(
        [49.0115547180176, -57.6024513244629],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6225b7f5a9264d20bf4a706f912f68ad = L.popup({ "maxWidth": "100%" });


    var html_9542dcb71a4d49f4ba579683d8b00c5c = $(`<div id="html_9542dcb71a4d49f4ba579683d8b00c5c" style="width: 100.0%; height: 100.0%;">Pasadena FoodBank (Pentacostal Assembly)</div>`)[0];
    popup_6225b7f5a9264d20bf4a706f912f68ad.setContent(html_9542dcb71a4d49f4ba579683d8b00c5c);


    marker_81e67ecf02964e049c77f0c8d3d1365a.bindPopup(popup_6225b7f5a9264d20bf4a706f912f68ad)
        ;




    var marker_3aa7bd74b06d471ea0e313156e4f4ff3 = L.marker(
        [46.0666046142578, -64.7491836547852],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_66c135b7d0b3466cab4df9b938fb18ef = L.popup({ "maxWidth": "100%" });


    var html_32f5c8594b294ed5b1c81d10f1f7d37b = $(`<div id="html_32f5c8594b294ed5b1c81d10f1f7d37b" style="width: 100.0%; height: 100.0%;">Albert County Food Bank</div>`)[0];
    popup_66c135b7d0b3466cab4df9b938fb18ef.setContent(html_32f5c8594b294ed5b1c81d10f1f7d37b);


    marker_3aa7bd74b06d471ea0e313156e4f4ff3.bindPopup(popup_66c135b7d0b3466cab4df9b938fb18ef)
        ;




    var marker_8944d9c8c28a42a5aacc5f8b242bf332 = L.marker(
        [48.9524459838867, -55.6458206176758],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fa5f6083d3d044edb8608e5938c0b14b = L.popup({ "maxWidth": "100%" });


    var html_d38b832a8c0b40f1947f418503111a40 = $(`<div id="html_d38b832a8c0b40f1947f418503111a40" style="width: 100.0%; height: 100.0%;">Salvation Army Grand Falls-Windsor</div>`)[0];
    popup_fa5f6083d3d044edb8608e5938c0b14b.setContent(html_d38b832a8c0b40f1947f418503111a40);


    marker_8944d9c8c28a42a5aacc5f8b242bf332.bindPopup(popup_fa5f6083d3d044edb8608e5938c0b14b)
        ;




    var marker_151d5f967d91434dab440558706c455a = L.marker(
        [44.9991111755371, -66.950813293457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_60cffd14d3214db18209db1807119f53 = L.popup({ "maxWidth": "100%" });


    var html_431ac618eb314d3bbe6150eae8742b39 = $(`<div id="html_431ac618eb314d3bbe6150eae8742b39" style="width: 100.0%; height: 100.0%;">Deer Island Safety Net</div>`)[0];
    popup_60cffd14d3214db18209db1807119f53.setContent(html_431ac618eb314d3bbe6150eae8742b39);


    marker_151d5f967d91434dab440558706c455a.bindPopup(popup_60cffd14d3214db18209db1807119f53)
        ;




    var marker_2a3b40a481484d008ab1662432e34aad = L.marker(
        [50.3924522399902, -105.542526245117],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fa49e1b139f14d769c029a320f255db0 = L.popup({ "maxWidth": "100%" });


    var html_8f29ae836f934dc882c951659f533f78 = $(`<div id="html_8f29ae836f934dc882c951659f533f78" style="width: 100.0%; height: 100.0%;">Moose Jaw Food Bank</div>`)[0];
    popup_fa49e1b139f14d769c029a320f255db0.setContent(html_8f29ae836f934dc882c951659f533f78);


    marker_2a3b40a481484d008ab1662432e34aad.bindPopup(popup_fa49e1b139f14d769c029a320f255db0)
        ;




    var marker_e30102224f9248238f5c07688581c05b = L.marker(
        [60.7231330871582, -135.058151245117],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0c1590d6c85648e1aece235668623d55 = L.popup({ "maxWidth": "100%" });


    var html_1809918023264c1f915f0004b0be551f = $(`<div id="html_1809918023264c1f915f0004b0be551f" style="width: 100.0%; height: 100.0%;">Whitehorse Food Bank Society</div>`)[0];
    popup_0c1590d6c85648e1aece235668623d55.setContent(html_1809918023264c1f915f0004b0be551f);


    marker_e30102224f9248238f5c07688581c05b.bindPopup(popup_0c1590d6c85648e1aece235668623d55)
        ;




    var marker_a9adc1b8648d4a8fbe89b6a09a3a2121 = L.marker(
        [47.1021881103516, -55.7521743774414],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_29708474470a4fb9aed072d01324a9ba = L.popup({ "maxWidth": "100%" });


    var html_0086444bf12d48ddb44b2b03592d328b = $(`<div id="html_0086444bf12d48ddb44b2b03592d328b" style="width: 100.0%; height: 100.0%;">Grand Bank/Fortune Community Care Centre</div>`)[0];
    popup_29708474470a4fb9aed072d01324a9ba.setContent(html_0086444bf12d48ddb44b2b03592d328b);


    marker_a9adc1b8648d4a8fbe89b6a09a3a2121.bindPopup(popup_29708474470a4fb9aed072d01324a9ba)
        ;




    var marker_18fc7d8310b241e287bb1f9715c7ae77 = L.marker(
        [50.029224395752, -119.404449462891],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e4470885feb94bec8f538f79ff72eb5f = L.popup({ "maxWidth": "100%" });


    var html_002ff927814845eaa539630cad5bb2df = $(`<div id="html_002ff927814845eaa539630cad5bb2df" style="width: 100.0%; height: 100.0%;">Lake Country Food Assistance Society</div>`)[0];
    popup_e4470885feb94bec8f538f79ff72eb5f.setContent(html_002ff927814845eaa539630cad5bb2df);


    marker_18fc7d8310b241e287bb1f9715c7ae77.bindPopup(popup_e4470885feb94bec8f538f79ff72eb5f)
        ;




    var marker_6dbb1ae189dd41cf99a6ff885dcc46be = L.marker(
        [45.2900810241699, -66.1896209716797],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_682d40db18f74af2809cf324d414290f = L.popup({ "maxWidth": "100%" });


    var html_1796b102c86c410583e4b8b695574e87 = $(`<div id="html_1796b102c86c410583e4b8b695574e87" style="width: 100.0%; height: 100.0%;">River Valley Food Bank Association</div>`)[0];
    popup_682d40db18f74af2809cf324d414290f.setContent(html_1796b102c86c410583e4b8b695574e87);


    marker_6dbb1ae189dd41cf99a6ff885dcc46be.bindPopup(popup_682d40db18f74af2809cf324d414290f)
        ;




    var marker_f2cc1d16a22549028d7884c791eceeba = L.marker(
        [49.1397171020508, -122.322944641113],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1a31bb90378b41eaba20ce1f2be2e0b8 = L.popup({ "maxWidth": "100%" });


    var html_90ad3581cf51419daf8bd6b328eae05e = $(`<div id="html_90ad3581cf51419daf8bd6b328eae05e" style="width: 100.0%; height: 100.0%;">St. Joseph\u0027s Food Bank</div>`)[0];
    popup_1a31bb90378b41eaba20ce1f2be2e0b8.setContent(html_90ad3581cf51419daf8bd6b328eae05e);


    marker_f2cc1d16a22549028d7884c791eceeba.bindPopup(popup_1a31bb90378b41eaba20ce1f2be2e0b8)
        ;




    var marker_29d637a45a2a4e2e8425f61b290357de = L.marker(
        [45.3938369750977, -72.7417449951172],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4460e48524c142f0b6d121513ed65171 = L.popup({ "maxWidth": "100%" });


    var html_af9a396f9e1146eba43816a5c87e857d = $(`<div id="html_af9a396f9e1146eba43816a5c87e857d" style="width: 100.0%; height: 100.0%;">Moisson Granby</div>`)[0];
    popup_4460e48524c142f0b6d121513ed65171.setContent(html_af9a396f9e1146eba43816a5c87e857d);


    marker_29d637a45a2a4e2e8425f61b290357de.bindPopup(popup_4460e48524c142f0b6d121513ed65171)
        ;




    var marker_3599e7e1a5624e13bacc5012b0d21bd6 = L.marker(
        [47.3647270202637, -70.0211563110352],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dfbb295f61704352ba0a7fc2c1d32dfe = L.popup({ "maxWidth": "100%" });


    var html_461539ab51784ca28388e67163cbed18 = $(`<div id="html_461539ab51784ca28388e67163cbed18" style="width: 100.0%; height: 100.0%;">Moisson Kamouraska</div>`)[0];
    popup_dfbb295f61704352ba0a7fc2c1d32dfe.setContent(html_461539ab51784ca28388e67163cbed18);


    marker_3599e7e1a5624e13bacc5012b0d21bd6.bindPopup(popup_dfbb295f61704352ba0a7fc2c1d32dfe)
        ;




    var marker_f85ffbf08e434a288d8b378e6449d5d6 = L.marker(
        [50.2654457092285, -119.275947570801],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_96d4dcdb58d942cea7c42dabd1a7f965 = L.popup({ "maxWidth": "100%" });


    var html_500309dccacb42dfac976a54cc06576a = $(`<div id="html_500309dccacb42dfac976a54cc06576a" style="width: 100.0%; height: 100.0%;">Salvation Army Vernon Food Bank</div>`)[0];
    popup_96d4dcdb58d942cea7c42dabd1a7f965.setContent(html_500309dccacb42dfac976a54cc06576a);


    marker_f85ffbf08e434a288d8b378e6449d5d6.bindPopup(popup_96d4dcdb58d942cea7c42dabd1a7f965)
        ;




    var marker_91975eb0794a4b728e80893794ff9cea = L.marker(
        [43.2286987304688, -79.7239227294922],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d1c6b8b5e26e4f58b7c08e1e5888b19b = L.popup({ "maxWidth": "100%" });


    var html_0469da0b9835454182d549e0a9fa5b7d = $(`<div id="html_0469da0b9835454182d549e0a9fa5b7d" style="width: 100.0%; height: 100.0%;">Hamilton Food Share</div>`)[0];
    popup_d1c6b8b5e26e4f58b7c08e1e5888b19b.setContent(html_0469da0b9835454182d549e0a9fa5b7d);


    marker_91975eb0794a4b728e80893794ff9cea.bindPopup(popup_d1c6b8b5e26e4f58b7c08e1e5888b19b)
        ;




    var marker_c0637cd42797402ca8c59c758aaf602a = L.marker(
        [46.0970115661621, -64.7951812744141],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9719784c29e04f2cad985199f662027e = L.popup({ "maxWidth": "100%" });


    var html_800a40b9abdb4a1abfdf445b817de9c1 = $(`<div id="html_800a40b9abdb4a1abfdf445b817de9c1" style="width: 100.0%; height: 100.0%;">Ray of Hope Shelter</div>`)[0];
    popup_9719784c29e04f2cad985199f662027e.setContent(html_800a40b9abdb4a1abfdf445b817de9c1);


    marker_c0637cd42797402ca8c59c758aaf602a.bindPopup(popup_9719784c29e04f2cad985199f662027e)
        ;




    var marker_b871460750a94200898c1abdc5b3c0e5 = L.marker(
        [49.6827049255371, -115.984260559082],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8d347010bcc24cbda70f944d0fbf4d83 = L.popup({ "maxWidth": "100%" });


    var html_6b0c69501a734a169fdd9884cf0fcdc9 = $(`<div id="html_6b0c69501a734a169fdd9884cf0fcdc9" style="width: 100.0%; height: 100.0%;">Kimberley Helping Hands Food Bank</div>`)[0];
    popup_8d347010bcc24cbda70f944d0fbf4d83.setContent(html_6b0c69501a734a169fdd9884cf0fcdc9);


    marker_b871460750a94200898c1abdc5b3c0e5.bindPopup(popup_8d347010bcc24cbda70f944d0fbf4d83)
        ;




    var marker_a2b3df42d3e342f49c6e851f68a1571c = L.marker(
        [47.6018447875977, -52.7057762145996],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cd11e3a5b18145388d70dabdcf18c4d1 = L.popup({ "maxWidth": "100%" });


    var html_11e8ddf2540e43e2a1c7096232deb152 = $(`<div id="html_11e8ddf2540e43e2a1c7096232deb152" style="width: 100.0%; height: 100.0%;">St. Paul\u0027s Church Family Aid Food Bank</div>`)[0];
    popup_cd11e3a5b18145388d70dabdcf18c4d1.setContent(html_11e8ddf2540e43e2a1c7096232deb152);


    marker_a2b3df42d3e342f49c6e851f68a1571c.bindPopup(popup_cd11e3a5b18145388d70dabdcf18c4d1)
        ;




    var marker_3791465af81f41559466177a61bf0ea3 = L.marker(
        [45.417293548584, -65.9533309936523],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_afbf4d9987b141cab21585bbed817de3 = L.popup({ "maxWidth": "100%" });


    var html_c52a51e63482469a8a5c2d7f32050d03 = $(`<div id="html_c52a51e63482469a8a5c2d7f32050d03" style="width: 100.0%; height: 100.0%;">Kennebacasis Valley Food Basket</div>`)[0];
    popup_afbf4d9987b141cab21585bbed817de3.setContent(html_c52a51e63482469a8a5c2d7f32050d03);


    marker_3791465af81f41559466177a61bf0ea3.bindPopup(popup_afbf4d9987b141cab21585bbed817de3)
        ;




    var marker_6fd67fd8cec34ab5aeb6fc8e24202e8a = L.marker(
        [50.6985473632813, -121.92748260498],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a83a002afb6349ccb24d66c1f103d111 = L.popup({ "maxWidth": "100%" });


    var html_e4446e6368e24f4d914105da65db9107 = $(`<div id="html_e4446e6368e24f4d914105da65db9107" style="width: 100.0%; height: 100.0%;">Lillooet Food Bank</div>`)[0];
    popup_a83a002afb6349ccb24d66c1f103d111.setContent(html_e4446e6368e24f4d914105da65db9107);


    marker_6fd67fd8cec34ab5aeb6fc8e24202e8a.bindPopup(popup_a83a002afb6349ccb24d66c1f103d111)
        ;




    var marker_4a0ef4296c8e45a2b3752e0c3594e394 = L.marker(
        [43.6242485046387, -79.5734252929688],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b747b627ba6d4b5dad72817b3b0d1040 = L.popup({ "maxWidth": "100%" });


    var html_1c2c07ce40e2487dac625d4ef2a816e0 = $(`<div id="html_1c2c07ce40e2487dac625d4ef2a816e0" style="width: 100.0%; height: 100.0%;">Mississauga Food Bank</div>`)[0];
    popup_b747b627ba6d4b5dad72817b3b0d1040.setContent(html_1c2c07ce40e2487dac625d4ef2a816e0);


    marker_4a0ef4296c8e45a2b3752e0c3594e394.bindPopup(popup_b747b627ba6d4b5dad72817b3b0d1040)
        ;




    var marker_285840fb617e458184030f18c52185b2 = L.marker(
        [47.0349464416504, -67.7467803955078],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_368cd8ec1b8b49b5bd6b1689b2803eff = L.popup({ "maxWidth": "100%" });


    var html_292fcab3b7dc43648527409357e94ae6 = $(`<div id="html_292fcab3b7dc43648527409357e94ae6" style="width: 100.0%; height: 100.0%;">Grand Falls Regional Food Bank Inc.</div>`)[0];
    popup_368cd8ec1b8b49b5bd6b1689b2803eff.setContent(html_292fcab3b7dc43648527409357e94ae6);


    marker_285840fb617e458184030f18c52185b2.bindPopup(popup_368cd8ec1b8b49b5bd6b1689b2803eff)
        ;




    var marker_cf5d96acdf51435183fec5ec1e3b6578 = L.marker(
        [52.978946685791, -122.495635986328],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dfd07abc3de14815b52365bf6fb53e52 = L.popup({ "maxWidth": "100%" });


    var html_ced0e86d689a47219739fc6f54f8ab1d = $(`<div id="html_ced0e86d689a47219739fc6f54f8ab1d" style="width: 100.0%; height: 100.0%;">Salvation Army QUESNEL FOOD BANK</div>`)[0];
    popup_dfd07abc3de14815b52365bf6fb53e52.setContent(html_ced0e86d689a47219739fc6f54f8ab1d);


    marker_cf5d96acdf51435183fec5ec1e3b6578.bindPopup(popup_dfd07abc3de14815b52365bf6fb53e52)
        ;




    var marker_8657d61be756409f84307ce809476b9d = L.marker(
        [46.1027679443359, -70.6718063354492],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_82251c99832d4ec185bdf2dce12355b3 = L.popup({ "maxWidth": "100%" });


    var html_7ef60d14233d49fbbecad652591ab996 = $(`<div id="html_7ef60d14233d49fbbecad652591ab996" style="width: 100.0%; height: 100.0%;">Moisson Beauce</div>`)[0];
    popup_82251c99832d4ec185bdf2dce12355b3.setContent(html_7ef60d14233d49fbbecad652591ab996);


    marker_8657d61be756409f84307ce809476b9d.bindPopup(popup_82251c99832d4ec185bdf2dce12355b3)
        ;




    var marker_559ef9a0b01049939ee9b575ce1a132f = L.marker(
        [51.0862503051758, -114.009559631348],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7f6fa87235b046a5983449617447331e = L.popup({ "maxWidth": "100%" });


    var html_bfc074362ced48e3ae71891a670e0390 = $(`<div id="html_bfc074362ced48e3ae71891a670e0390" style="width: 100.0%; height: 100.0%;">Community Kitchen Program of Calgary</div>`)[0];
    popup_7f6fa87235b046a5983449617447331e.setContent(html_bfc074362ced48e3ae71891a670e0390);


    marker_559ef9a0b01049939ee9b575ce1a132f.bindPopup(popup_7f6fa87235b046a5983449617447331e)
        ;




    var marker_5d9d43a42bab4eb2ab6ba5576274fb02 = L.marker(
        [43.0770988464355, -79.9567794799805],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_80ec6e2c4eac4c119f2a85e099a38ee5 = L.popup({ "maxWidth": "100%" });


    var html_60e3e3500fb24bcdb5a295a2ef038862 = $(`<div id="html_60e3e3500fb24bcdb5a295a2ef038862" style="width: 100.0%; height: 100.0%;">Caledonia \u0026 District Food Bank</div>`)[0];
    popup_80ec6e2c4eac4c119f2a85e099a38ee5.setContent(html_60e3e3500fb24bcdb5a295a2ef038862);


    marker_5d9d43a42bab4eb2ab6ba5576274fb02.bindPopup(popup_80ec6e2c4eac4c119f2a85e099a38ee5)
        ;




    var marker_28cd9176df7b419e993bde00590178bc = L.marker(
        [47.515567779541, -52.8245735168457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1559153b8913458580b861ff1e8c5430 = L.popup({ "maxWidth": "100%" });


    var html_3f6eba240cc1438f8b3119f7459d3419 = $(`<div id="html_3f6eba240cc1438f8b3119f7459d3419" style="width: 100.0%; height: 100.0%;">Bridges to Hope</div>`)[0];
    popup_1559153b8913458580b861ff1e8c5430.setContent(html_3f6eba240cc1438f8b3119f7459d3419);


    marker_28cd9176df7b419e993bde00590178bc.bindPopup(popup_1559153b8913458580b861ff1e8c5430)
        ;




    var marker_257dc8ca03a3491eb456879b17ad7eb5 = L.marker(
        [48.5504188537598, -58.5746841430664],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_81c2a297379b4389bb13aceba79a33f2 = L.popup({ "maxWidth": "100%" });


    var html_94d99043ac8b421caf1e6c05871a4467 = $(`<div id="html_94d99043ac8b421caf1e6c05871a4467" style="width: 100.0%; height: 100.0%;">Stephenville Emergency Food Services</div>`)[0];
    popup_81c2a297379b4389bb13aceba79a33f2.setContent(html_94d99043ac8b421caf1e6c05871a4467);


    marker_257dc8ca03a3491eb456879b17ad7eb5.bindPopup(popup_81c2a297379b4389bb13aceba79a33f2)
        ;




    var marker_7bd11e5a7d274948befe0677868df57b = L.marker(
        [46.6610069274902, -64.8715209960938],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2af65a1f969b467bbf6645e229fe13aa = L.popup({ "maxWidth": "100%" });


    var html_072a1cb435fc416a9017ca475e6cad76 = $(`<div id="html_072a1cb435fc416a9017ca475e6cad76" style="width: 100.0%; height: 100.0%;">Kent County CVA Food Bank</div>`)[0];
    popup_2af65a1f969b467bbf6645e229fe13aa.setContent(html_072a1cb435fc416a9017ca475e6cad76);


    marker_7bd11e5a7d274948befe0677868df57b.bindPopup(popup_2af65a1f969b467bbf6645e229fe13aa)
        ;




    var marker_aec002db31464c3e81e95790f51f6e20 = L.marker(
        [45.0221290588379, -74.7321090698242],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_260f17342c0649b2bea283f2c0dbd8a0 = L.popup({ "maxWidth": "100%" });


    var html_f095e05a37014ceeb1bf3de3c95945df = $(`<div id="html_f095e05a37014ceeb1bf3de3c95945df" style="width: 100.0%; height: 100.0%;">Agape Centre Cornwall</div>`)[0];
    popup_260f17342c0649b2bea283f2c0dbd8a0.setContent(html_f095e05a37014ceeb1bf3de3c95945df);


    marker_aec002db31464c3e81e95790f51f6e20.bindPopup(popup_260f17342c0649b2bea283f2c0dbd8a0)
        ;




    var marker_ee6495c7b6514bcf9fcce065b3c4ffa6 = L.marker(
        [47.8013801574707, -64.6473007202148],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fd5559f40c534beb8c78ab0aa6b45b98 = L.popup({ "maxWidth": "100%" });


    var html_e97b580601964e8e8913e4d5f33c19fc = $(`<div id="html_e97b580601964e8e8913e4d5f33c19fc" style="width: 100.0%; height: 100.0%;">Secours Amitié Inc.</div>`)[0];
    popup_fd5559f40c534beb8c78ab0aa6b45b98.setContent(html_e97b580601964e8e8913e4d5f33c19fc);


    marker_ee6495c7b6514bcf9fcce065b3c4ffa6.bindPopup(popup_fd5559f40c534beb8c78ab0aa6b45b98)
        ;




    var marker_a03ccf7aa0724fceba94915f0d19621a = L.marker(
        [45.133617401123, -66.8107986450195],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_00182a25266f43b5a664abdd1b3be61e = L.popup({ "maxWidth": "100%" });


    var html_bbe015f0e0f941f38cea5260dcefa26b = $(`<div id="html_bbe015f0e0f941f38cea5260dcefa26b" style="width: 100.0%; height: 100.0%;">St. George \u0026 Area Food Bank</div>`)[0];
    popup_00182a25266f43b5a664abdd1b3be61e.setContent(html_bbe015f0e0f941f38cea5260dcefa26b);


    marker_a03ccf7aa0724fceba94915f0d19621a.bindPopup(popup_00182a25266f43b5a664abdd1b3be61e)
        ;




    var marker_6f1d9acf9e514f1f916a2541b37cfeaa = L.marker(
        [54.5178565979004, -128.588897705078],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_086b5ee816774f0692f7e31fac024200 = L.popup({ "maxWidth": "100%" });


    var html_9afa8a558d94459cb71da825c35a97c7 = $(`<div id="html_9afa8a558d94459cb71da825c35a97c7" style="width: 100.0%; height: 100.0%;">TERRACE CHURCH\u0027S FOOD BANK</div>`)[0];
    popup_086b5ee816774f0692f7e31fac024200.setContent(html_9afa8a558d94459cb71da825c35a97c7);


    marker_6f1d9acf9e514f1f916a2541b37cfeaa.bindPopup(popup_086b5ee816774f0692f7e31fac024200)
        ;




    var marker_20a36c852f9f47a5a4a03a247429cf54 = L.marker(
        [42.8568992614746, -79.8481826782227],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a357cc223f53444699e84bee31d67463 = L.popup({ "maxWidth": "100%" });


    var html_ddb329eab7e747a6b5b54de45ae036fb = $(`<div id="html_ddb329eab7e747a6b5b54de45ae036fb" style="width: 100.0%; height: 100.0%;">Jarvis Caring Cupboard</div>`)[0];
    popup_a357cc223f53444699e84bee31d67463.setContent(html_ddb329eab7e747a6b5b54de45ae036fb);


    marker_20a36c852f9f47a5a4a03a247429cf54.bindPopup(popup_a357cc223f53444699e84bee31d67463)
        ;




    var marker_ad7b97646afc402c942ec0d77cf556b9 = L.marker(
        [44.1073036193848, -79.1234893798828],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_277d525c0a5f46ffabe527cbbec74926 = L.popup({ "maxWidth": "100%" });


    var html_6919bcc3da744367b94edaa9cf405e4c = $(`<div id="html_6919bcc3da744367b94edaa9cf405e4c" style="width: 100.0%; height: 100.0%;">Uxbridge Loaves and Fishes Food Bank</div>`)[0];
    popup_277d525c0a5f46ffabe527cbbec74926.setContent(html_6919bcc3da744367b94edaa9cf405e4c);


    marker_ad7b97646afc402c942ec0d77cf556b9.bindPopup(popup_277d525c0a5f46ffabe527cbbec74926)
        ;




    var marker_92ca41d05d5c41178a06952c1793564b = L.marker(
        [43.3618774414063, -80.9900436401367],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_572b7c83f7da48f19dc967a673227b6e = L.popup({ "maxWidth": "100%" });


    var html_1f7988064ade411ea80c0e6451588d10 = $(`<div id="html_1f7988064ade411ea80c0e6451588d10" style="width: 100.0%; height: 100.0%;">Stratford House of Blessing</div>`)[0];
    popup_572b7c83f7da48f19dc967a673227b6e.setContent(html_1f7988064ade411ea80c0e6451588d10);


    marker_92ca41d05d5c41178a06952c1793564b.bindPopup(popup_572b7c83f7da48f19dc967a673227b6e)
        ;




    var marker_e1919dc78af74c8596f515a2e0b9220b = L.marker(
        [49.3803176879883, -121.438743591309],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f3ed105810e64d478002efc78130e56e = L.popup({ "maxWidth": "100%" });


    var html_1b5e76b844664e32b78118d1455b25d0 = $(`<div id="html_1b5e76b844664e32b78118d1455b25d0" style="width: 100.0%; height: 100.0%;">Hope Food Bank</div>`)[0];
    popup_f3ed105810e64d478002efc78130e56e.setContent(html_1b5e76b844664e32b78118d1455b25d0);


    marker_e1919dc78af74c8596f515a2e0b9220b.bindPopup(popup_f3ed105810e64d478002efc78130e56e)
        ;




    var marker_2965d8722dc549359138d6e59d62b3e7 = L.marker(
        [43.7489204406738, -80.0646667480469],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_30db69ad339f48b8bea8def5f1144a6a = L.popup({ "maxWidth": "100%" });


    var html_d333fab69ca64755b616be60f47f0fc8 = $(`<div id="html_d333fab69ca64755b616be60f47f0fc8" style="width: 100.0%; height: 100.0%;">East Wellington Community Services</div>`)[0];
    popup_30db69ad339f48b8bea8def5f1144a6a.setContent(html_d333fab69ca64755b616be60f47f0fc8);


    marker_2965d8722dc549359138d6e59d62b3e7.bindPopup(popup_30db69ad339f48b8bea8def5f1144a6a)
        ;




    var marker_dcfc912db1384c2485451eeaf9a00634 = L.marker(
        [53.5867881774902, -116.423683166504],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_211982466dd54b56b80ac055217f1ceb = L.popup({ "maxWidth": "100%" });


    var html_48cbc47f895943579c5acf8ff201f5c5 = $(`<div id="html_48cbc47f895943579c5acf8ff201f5c5" style="width: 100.0%; height: 100.0%;">Edson Food Bank Society</div>`)[0];
    popup_211982466dd54b56b80ac055217f1ceb.setContent(html_48cbc47f895943579c5acf8ff201f5c5);


    marker_dcfc912db1384c2485451eeaf9a00634.bindPopup(popup_211982466dd54b56b80ac055217f1ceb)
        ;




    var marker_6537856fcb454f7ea598ce068fc46248 = L.marker(
        [47.2662887573242, -65.0607147216797],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_51e5a6625d0547209cc1e96326a2215e = L.popup({ "maxWidth": "100%" });


    var html_d0617011dbd948e0bddaba25ec91b04b = $(`<div id="html_d0617011dbd948e0bddaba25ec91b04b" style="width: 100.0%; height: 100.0%;">Centre familial UNIQUE Family Centre Inc</div>`)[0];
    popup_51e5a6625d0547209cc1e96326a2215e.setContent(html_d0617011dbd948e0bddaba25ec91b04b);


    marker_6537856fcb454f7ea598ce068fc46248.bindPopup(popup_51e5a6625d0547209cc1e96326a2215e)
        ;




    var marker_f08216bb6c2d414ea3e086bcd8aa9d52 = L.marker(
        [52.0281982421875, -113.950721740723],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_23096a5aacba435796fb9d7d0494f8d6 = L.popup({ "maxWidth": "100%" });


    var html_206f4eecc04f4f719b35dd8334849796 = $(`<div id="html_206f4eecc04f4f719b35dd8334849796" style="width: 100.0%; height: 100.0%;">Innisfail \u0026 Area Food Bank</div>`)[0];
    popup_23096a5aacba435796fb9d7d0494f8d6.setContent(html_206f4eecc04f4f719b35dd8334849796);


    marker_f08216bb6c2d414ea3e086bcd8aa9d52.bindPopup(popup_23096a5aacba435796fb9d7d0494f8d6)
        ;




    var marker_992dfa7f78bd4aa8b5bd126e4385271c = L.marker(
        [49.1600227355957, -121.958221435547],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a95e0f63ef6845b8b0d97e9cdb6a78db = L.popup({ "maxWidth": "100%" });


    var html_c9560d51573b433ab701b4624bd3ba18 = $(`<div id="html_c9560d51573b433ab701b4624bd3ba18" style="width: 100.0%; height: 100.0%;">Salvation Amry CHILLIWACK COMMUNITY FOOD BANK</div>`)[0];
    popup_a95e0f63ef6845b8b0d97e9cdb6a78db.setContent(html_c9560d51573b433ab701b4624bd3ba18);


    marker_992dfa7f78bd4aa8b5bd126e4385271c.bindPopup(popup_a95e0f63ef6845b8b0d97e9cdb6a78db)
        ;




    var marker_aeb7b47c14d24f709fb7fab988106c3a = L.marker(
        [47.4756469726563, -65.4929580688477],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6b3e1ab7230f4c94a0ec5c965cc2fb2e = L.popup({ "maxWidth": "100%" });


    var html_4564d00e82ad40238ecd7cf4e921d21a = $(`<div id="html_4564d00e82ad40238ecd7cf4e921d21a" style="width: 100.0%; height: 100.0%;">Comite D\u0027entraide Allardville</div>`)[0];
    popup_6b3e1ab7230f4c94a0ec5c965cc2fb2e.setContent(html_4564d00e82ad40238ecd7cf4e921d21a);


    marker_aeb7b47c14d24f709fb7fab988106c3a.bindPopup(popup_6b3e1ab7230f4c94a0ec5c965cc2fb2e)
        ;




    var marker_80bd4770379c4434a51dd871242c7de7 = L.marker(
        [43.1888732910156, -80.3779144287109],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b0ef0a5d2709420198f65a67b820fd2d = L.popup({ "maxWidth": "100%" });


    var html_0e1514bae9d14b59a9b5eea22ba88eaa = $(`<div id="html_0e1514bae9d14b59a9b5eea22ba88eaa" style="width: 100.0%; height: 100.0%;">Salvation Army - Brantford \u0026 Paris</div>`)[0];
    popup_b0ef0a5d2709420198f65a67b820fd2d.setContent(html_0e1514bae9d14b59a9b5eea22ba88eaa);


    marker_80bd4770379c4434a51dd871242c7de7.bindPopup(popup_b0ef0a5d2709420198f65a67b820fd2d)
        ;




    var marker_d9d7572fa84e4fb99ac2dc7be35a5d7c = L.marker(
        [47.6174659729004, -65.6521682739258],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e279398b634f43be81389593321f8ae2 = L.popup({ "maxWidth": "100%" });


    var html_233a698f23d949e895fea62883256029 = $(`<div id="html_233a698f23d949e895fea62883256029" style="width: 100.0%; height: 100.0%;">Centre de Bénévolat de Bathurst Inc.</div>`)[0];
    popup_e279398b634f43be81389593321f8ae2.setContent(html_233a698f23d949e895fea62883256029);


    marker_d9d7572fa84e4fb99ac2dc7be35a5d7c.bindPopup(popup_e279398b634f43be81389593321f8ae2)
        ;




    var marker_de8f155fd852497e8c91c860fff2126c = L.marker(
        [49.2348709106445, -124.805358886719],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f97710873487465f8f531c44ed31ca37 = L.popup({ "maxWidth": "100%" });


    var html_ea0ecf197f7f491ca42d347ff1ba740b = $(`<div id="html_ea0ecf197f7f491ca42d347ff1ba740b" style="width: 100.0%; height: 100.0%;">Salvation Army PORT ALBERNI FOOD BANK</div>`)[0];
    popup_f97710873487465f8f531c44ed31ca37.setContent(html_ea0ecf197f7f491ca42d347ff1ba740b);


    marker_de8f155fd852497e8c91c860fff2126c.bindPopup(popup_f97710873487465f8f531c44ed31ca37)
        ;




    var marker_a5af19e813d14908b3a10bff44694073 = L.marker(
        [45.14179, -76.14408],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6e5747a49d474cfebc09ceab39c6bf81 = L.popup({ "maxWidth": "100%" });


    var html_2d994a38cf574ca5a0a96a089d7a2766 = $(`<div id="html_2d994a38cf574ca5a0a96a089d7a2766" style="width: 100.0%; height: 100.0%;">Lanark County Food Bank</div>`)[0];
    popup_6e5747a49d474cfebc09ceab39c6bf81.setContent(html_2d994a38cf574ca5a0a96a089d7a2766);


    marker_a5af19e813d14908b3a10bff44694073.bindPopup(popup_6e5747a49d474cfebc09ceab39c6bf81)
        ;




    var marker_50a05aa7e0af42a5943ca887974623ca = L.marker(
        [49.0445404052734, -122.790603637695],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b2f0bea9e0c94cffb05682ece0ae995b = L.popup({ "maxWidth": "100%" });


    var html_94ec7d35206046c196c3e9682c24cd4f = $(`<div id="html_94ec7d35206046c196c3e9682c24cd4f" style="width: 100.0%; height: 100.0%;">Sources Whiterock/South Surrey Food Bank</div>`)[0];
    popup_b2f0bea9e0c94cffb05682ece0ae995b.setContent(html_94ec7d35206046c196c3e9682c24cd4f);


    marker_50a05aa7e0af42a5943ca887974623ca.bindPopup(popup_b2f0bea9e0c94cffb05682ece0ae995b)
        ;




    var marker_5c3436f2db2d423db09e62f8c226234b = L.marker(
        [48.8292541503906, -124.046241760254],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6b7bd60629f744c48ac039fff5f92b57 = L.popup({ "maxWidth": "100%" });


    var html_16df0809272549dc9aa48a5e4d706b3d = $(`<div id="html_16df0809272549dc9aa48a5e4d706b3d" style="width: 100.0%; height: 100.0%;">LAKE COWICHAN FOOD BANK SOCIETY</div>`)[0];
    popup_6b7bd60629f744c48ac039fff5f92b57.setContent(html_16df0809272549dc9aa48a5e4d706b3d);


    marker_5c3436f2db2d423db09e62f8c226234b.bindPopup(popup_6b7bd60629f744c48ac039fff5f92b57)
        ;




    var marker_d49c3c2c9f294a4aad1d4aed8a57664a = L.marker(
        [43.9132690429688, -80.1100540161133],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dfbec84e274b46c7a08537c81ecdbc60 = L.popup({ "maxWidth": "100%" });


    var html_8b0e1b78790a4b65a890ee3896b55610 = $(`<div id="html_8b0e1b78790a4b65a890ee3896b55610" style="width: 100.0%; height: 100.0%;">Orangeville Food Bank</div>`)[0];
    popup_dfbec84e274b46c7a08537c81ecdbc60.setContent(html_8b0e1b78790a4b65a890ee3896b55610);


    marker_d49c3c2c9f294a4aad1d4aed8a57664a.bindPopup(popup_dfbec84e274b46c7a08537c81ecdbc60)
        ;




    var marker_2f52b7c9073d4bcdbc76a20a2b225a10 = L.marker(
        [54.1575126647949, -113.846221923828],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_82e636a474b6440a86529b26ae9082af = L.popup({ "maxWidth": "100%" });


    var html_2f7492b1f0094252b1a57041549534d2 = $(`<div id="html_2f7492b1f0094252b1a57041549534d2" style="width: 100.0%; height: 100.0%;">Westlock \u0026 District Food Bank Association</div>`)[0];
    popup_82e636a474b6440a86529b26ae9082af.setContent(html_2f7492b1f0094252b1a57041549534d2);


    marker_2f52b7c9073d4bcdbc76a20a2b225a10.bindPopup(popup_82e636a474b6440a86529b26ae9082af)
        ;




    var marker_dc1cc5b47a6b44c2ac2670c1802f1b87 = L.marker(
        [45.2497596740723, -74.1252670288086],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fd1080bcbf45449c9ce14e0dc1a2b75d = L.popup({ "maxWidth": "100%" });


    var html_53a5ed4166f448d5b5f76e831a8cc12d = $(`<div id="html_53a5ed4166f448d5b5f76e831a8cc12d" style="width: 100.0%; height: 100.0%;">Moisson Sud-Ouest</div>`)[0];
    popup_fd1080bcbf45449c9ce14e0dc1a2b75d.setContent(html_53a5ed4166f448d5b5f76e831a8cc12d);


    marker_dc1cc5b47a6b44c2ac2670c1802f1b87.bindPopup(popup_fd1080bcbf45449c9ce14e0dc1a2b75d)
        ;




    var marker_17a2aa68bc6a4b9080b415dd148b5dc6 = L.marker(
        [52.4671249389648, -113.735137939453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5e59c5b511e44304969d38cd73f001c9 = L.popup({ "maxWidth": "100%" });


    var html_b9fb43fddcb14e869d14fc7a38ece437 = $(`<div id="html_b9fb43fddcb14e869d14fc7a38ece437" style="width: 100.0%; height: 100.0%;">Lacombe Community Food Bank</div>`)[0];
    popup_5e59c5b511e44304969d38cd73f001c9.setContent(html_b9fb43fddcb14e869d14fc7a38ece437);


    marker_17a2aa68bc6a4b9080b415dd148b5dc6.bindPopup(popup_5e59c5b511e44304969d38cd73f001c9)
        ;




    var marker_87dd080d47cd465195983ef535ae5265 = L.marker(
        [50.0378608703613, -110.672554016113],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c55102c2981441ec93c0571329c8e6ab = L.popup({ "maxWidth": "100%" });


    var html_221e84382b3b44cb8882b2b1452bf335 = $(`<div id="html_221e84382b3b44cb8882b2b1452bf335" style="width: 100.0%; height: 100.0%;">Medicine Hat \u0026 District Food Bank</div>`)[0];
    popup_c55102c2981441ec93c0571329c8e6ab.setContent(html_221e84382b3b44cb8882b2b1452bf335);


    marker_87dd080d47cd465195983ef535ae5265.bindPopup(popup_c55102c2981441ec93c0571329c8e6ab)
        ;




    var marker_7be9c52be0bb4c19adc2b475f5ea1a33 = L.marker(
        [43.3565864562988, -80.3140487670898],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c8059d9e1c7f4b8f96ac1909ee09ee8d = L.popup({ "maxWidth": "100%" });


    var html_752596b964d0420f9d086b440059cb46 = $(`<div id="html_752596b964d0420f9d086b440059cb46" style="width: 100.0%; height: 100.0%;">Cambridge Self-Help Food Bank</div>`)[0];
    popup_c8059d9e1c7f4b8f96ac1909ee09ee8d.setContent(html_752596b964d0420f9d086b440059cb46);


    marker_7be9c52be0bb4c19adc2b475f5ea1a33.bindPopup(popup_c8059d9e1c7f4b8f96ac1909ee09ee8d)
        ;




    var marker_54ee5b747bcb4527b42fd7eb176c14df = L.marker(
        [47.6627616882324, -52.7345352172852],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_776453f48c7a4a4c9766b64b66419060 = L.popup({ "maxWidth": "100%" });


    var html_6df1568f189c4d6aa29e00aa22e5f632 = $(`<div id="html_6df1568f189c4d6aa29e00aa22e5f632" style="width: 100.0%; height: 100.0%;">Northeast Avalon Family Aid</div>`)[0];
    popup_776453f48c7a4a4c9766b64b66419060.setContent(html_6df1568f189c4d6aa29e00aa22e5f632);


    marker_54ee5b747bcb4527b42fd7eb176c14df.bindPopup(popup_776453f48c7a4a4c9766b64b66419060)
        ;




    var marker_9ae1810b805044dfa575b049bfd04a7a = L.marker(
        [48.4655876159668, -67.4304504394531],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_08ce27daa7464acd9d8a84b211a8b0c8 = L.popup({ "maxWidth": "100%" });


    var html_074c5d94955047abab84e45eef331565 = $(`<div id="html_074c5d94955047abab84e45eef331565" style="width: 100.0%; height: 100.0%;">Moisson Vallee Matapedia</div>`)[0];
    popup_08ce27daa7464acd9d8a84b211a8b0c8.setContent(html_074c5d94955047abab84e45eef331565);


    marker_9ae1810b805044dfa575b049bfd04a7a.bindPopup(popup_08ce27daa7464acd9d8a84b211a8b0c8)
        ;




    var marker_014cc64fb37e40e1abe4e7e0a4ca3bb2 = L.marker(
        [45.6101531982422, -74.6024551391602],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_106275fab0e84c17910e15e8a082a748 = L.popup({ "maxWidth": "100%" });


    var html_ba13a71798624608985eda6f29ae8a9e = $(`<div id="html_ba13a71798624608985eda6f29ae8a9e" style="width: 100.0%; height: 100.0%;">Hawkesbury Food Bank</div>`)[0];
    popup_106275fab0e84c17910e15e8a082a748.setContent(html_ba13a71798624608985eda6f29ae8a9e);


    marker_014cc64fb37e40e1abe4e7e0a4ca3bb2.bindPopup(popup_106275fab0e84c17910e15e8a082a748)
        ;




    var marker_63eee992ad534fa3bcacee57ef5e53d8 = L.marker(
        [44.3286170959473, -76.1631927490234],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_93ee6e0fa77e497e92c1b719bb4151ac = L.popup({ "maxWidth": "100%" });


    var html_47840307303447d9b54ee105575b7fd9 = $(`<div id="html_47840307303447d9b54ee105575b7fd9" style="width: 100.0%; height: 100.0%;">Gananoque \u0026 District Food Bank</div>`)[0];
    popup_93ee6e0fa77e497e92c1b719bb4151ac.setContent(html_47840307303447d9b54ee105575b7fd9);


    marker_63eee992ad534fa3bcacee57ef5e53d8.bindPopup(popup_93ee6e0fa77e497e92c1b719bb4151ac)
        ;




    var marker_565b2808af2c4a69a80601879f3c852b = L.marker(
        [45.9258460998535, -65.1859283447266],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6d0730a71ff44dfe84fc8a81ec8f3c53 = L.popup({ "maxWidth": "100%" });


    var html_59204e2b935a401c8bf504aef53899d4 = $(`<div id="html_59204e2b935a401c8bf504aef53899d4" style="width: 100.0%; height: 100.0%;">Support People of Today</div>`)[0];
    popup_6d0730a71ff44dfe84fc8a81ec8f3c53.setContent(html_59204e2b935a401c8bf504aef53899d4);


    marker_565b2808af2c4a69a80601879f3c852b.bindPopup(popup_6d0730a71ff44dfe84fc8a81ec8f3c53)
        ;




    var marker_f41516805fd54a7e955556284eeb66c0 = L.marker(
        [49.7854347229004, -112.13973236084],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a7429d600fc046ba99a87defce9cfb73 = L.popup({ "maxWidth": "100%" });


    var html_0594a72431f6403fbc3b16871c7ab653 = $(`<div id="html_0594a72431f6403fbc3b16871c7ab653" style="width: 100.0%; height: 100.0%;">Taber Food Bank Society</div>`)[0];
    popup_a7429d600fc046ba99a87defce9cfb73.setContent(html_0594a72431f6403fbc3b16871c7ab653);


    marker_f41516805fd54a7e955556284eeb66c0.bindPopup(popup_a7429d600fc046ba99a87defce9cfb73)
        ;




    var marker_7f5ac66c6c5940f48e4854cbb3165f7a = L.marker(
        [49.090705871582, -123.069496154785],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_878505929c164654ad6ebca8444e7e35 = L.popup({ "maxWidth": "100%" });


    var html_c1e79d8108094e189379051ddaaba4ee = $(`<div id="html_c1e79d8108094e189379051ddaaba4ee" style="width: 100.0%; height: 100.0%;">South Delta Food Bank</div>`)[0];
    popup_878505929c164654ad6ebca8444e7e35.setContent(html_c1e79d8108094e189379051ddaaba4ee);


    marker_7f5ac66c6c5940f48e4854cbb3165f7a.bindPopup(popup_878505929c164654ad6ebca8444e7e35)
        ;




    var marker_784a09b016cc4bdbb699d4ec6d308df7 = L.marker(
        [50.7590560913086, -122.003639221191],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_49f685fd77004b68907ce2e6c0b4a085 = L.popup({ "maxWidth": "100%" });


    var html_98a154304c64434a8a9178d05c3ecd1e = $(`<div id="html_98a154304c64434a8a9178d05c3ecd1e" style="width: 100.0%; height: 100.0%;">ONE HUNDRED MILE HOUSE FOOD BANK</div>`)[0];
    popup_49f685fd77004b68907ce2e6c0b4a085.setContent(html_98a154304c64434a8a9178d05c3ecd1e);


    marker_784a09b016cc4bdbb699d4ec6d308df7.bindPopup(popup_49f685fd77004b68907ce2e6c0b4a085)
        ;




    var marker_ccb77deac7354609a83f057ac0f58acd = L.marker(
        [44.7372703552246, -81.1311111450195],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_558b52ed1a854f4093ce5ca038769ee9 = L.popup({ "maxWidth": "100%" });


    var html_742350b51ac2483eaa6fca625f1b8c3b = $(`<div id="html_742350b51ac2483eaa6fca625f1b8c3b" style="width: 100.0%; height: 100.0%;">Salvation Army Wiarton</div>`)[0];
    popup_558b52ed1a854f4093ce5ca038769ee9.setContent(html_742350b51ac2483eaa6fca625f1b8c3b);


    marker_ccb77deac7354609a83f057ac0f58acd.bindPopup(popup_558b52ed1a854f4093ce5ca038769ee9)
        ;




    var marker_9df987fcd43a48a193223322e71a9893 = L.marker(
        [44.1554527282715, -81.0179824829102],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_aece76ff3bfe4c4899980ecf827e59ec = L.popup({ "maxWidth": "100%" });


    var html_d357c3bcad2b493080bce636742361c7 = $(`<div id="html_d357c3bcad2b493080bce636742361c7" style="width: 100.0%; height: 100.0%;">Salvation Army Hanover</div>`)[0];
    popup_aece76ff3bfe4c4899980ecf827e59ec.setContent(html_d357c3bcad2b493080bce636742361c7);


    marker_9df987fcd43a48a193223322e71a9893.bindPopup(popup_aece76ff3bfe4c4899980ecf827e59ec)
        ;




    var marker_4caec0404dc44bf08935eeaa58b1feba = L.marker(
        [48.7815856933594, -123.705909729004],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_77e9f608e05747a7afdc27ab8cf0f273 = L.popup({ "maxWidth": "100%" });


    var html_ba0653d541234317a335e539f7779ac9 = $(`<div id="html_ba0653d541234317a335e539f7779ac9" style="width: 100.0%; height: 100.0%;">Cowichan Valley Basket Society</div>`)[0];
    popup_77e9f608e05747a7afdc27ab8cf0f273.setContent(html_ba0653d541234317a335e539f7779ac9);


    marker_4caec0404dc44bf08935eeaa58b1feba.bindPopup(popup_77e9f608e05747a7afdc27ab8cf0f273)
        ;




    var marker_a872711fa05a4fdc98814c1252e07fdf = L.marker(
        [46.2178153991699, -64.5440673828125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_436da422fd1e4fdc98110b006d6b5bbe = L.popup({ "maxWidth": "100%" });


    var html_34f8ebb82a414f559a7cecd96b6eeb92 = $(`<div id="html_34f8ebb82a414f559a7cecd96b6eeb92" style="width: 100.0%; height: 100.0%;">Vestiaire St. Joseph</div>`)[0];
    popup_436da422fd1e4fdc98110b006d6b5bbe.setContent(html_34f8ebb82a414f559a7cecd96b6eeb92);


    marker_a872711fa05a4fdc98814c1252e07fdf.bindPopup(popup_436da422fd1e4fdc98110b006d6b5bbe)
        ;




    var marker_067d5af2d4be4598b2387270e62df9d6 = L.marker(
        [42.5864372253418, -82.3876037597656],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8b8547db596f44e390243354ce45c57b = L.popup({ "maxWidth": "100%" });


    var html_2c63518fefb8438f81b947bd8426c494 = $(`<div id="html_2c63518fefb8438f81b947bd8426c494" style="width: 100.0%; height: 100.0%;">Salvation Army Wallaceburg  Family Services</div>`)[0];
    popup_8b8547db596f44e390243354ce45c57b.setContent(html_2c63518fefb8438f81b947bd8426c494);


    marker_067d5af2d4be4598b2387270e62df9d6.bindPopup(popup_8b8547db596f44e390243354ce45c57b)
        ;




    var marker_e4fc6916d6ae40a890f9f664edf33529 = L.marker(
        [49.492919921875, -117.293853759766],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_911c0c49d6a84d53a965eba67cc00904 = L.popup({ "maxWidth": "100%" });


    var html_5144eeecdb884c73a51daaf44210fd2c = $(`<div id="html_5144eeecdb884c73a51daaf44210fd2c" style="width: 100.0%; height: 100.0%;">Salvation Army NELSON FAMILY SERVICES</div>`)[0];
    popup_911c0c49d6a84d53a965eba67cc00904.setContent(html_5144eeecdb884c73a51daaf44210fd2c);


    marker_e4fc6916d6ae40a890f9f664edf33529.bindPopup(popup_911c0c49d6a84d53a965eba67cc00904)
        ;




    var marker_eebb3e743354433cb3269d69bf4f73ce = L.marker(
        [47.781909942627, -65.7171020507813],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_069f29f3b06248b49e40dfc68bd6bb89 = L.popup({ "maxWidth": "100%" });


    var html_986186ea9e8e4dae90fe2d6b7f217ebd = $(`<div id="html_986186ea9e8e4dae90fe2d6b7f217ebd" style="width: 100.0%; height: 100.0%;">Banque Alimentaire Coup d\u0027Pouce Ltd.</div>`)[0];
    popup_069f29f3b06248b49e40dfc68bd6bb89.setContent(html_986186ea9e8e4dae90fe2d6b7f217ebd);


    marker_eebb3e743354433cb3269d69bf4f73ce.bindPopup(popup_069f29f3b06248b49e40dfc68bd6bb89)
        ;




    var marker_28cf203ee360408da6bcbce49c728642 = L.marker(
        [49.0251426696777, -119.475006103516],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3f45b1e888a746d99d8c2d072f0488db = L.popup({ "maxWidth": "100%" });


    var html_3c8aaea6cbb54e8792938f20f5d1256c = $(`<div id="html_3c8aaea6cbb54e8792938f20f5d1256c" style="width: 100.0%; height: 100.0%;">Osoyoos Food Bank</div>`)[0];
    popup_3f45b1e888a746d99d8c2d072f0488db.setContent(html_3c8aaea6cbb54e8792938f20f5d1256c);


    marker_28cf203ee360408da6bcbce49c728642.bindPopup(popup_3f45b1e888a746d99d8c2d072f0488db)
        ;




    var marker_b82802005d73473d8bf7511225ae474e = L.marker(
        [48.4339866638184, -123.366554260254],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_42fef2e34ea14d6b8def9a4547bf111e = L.popup({ "maxWidth": "100%" });


    var html_8e1b3e15e7bd4363b26c868a3ba07823 = $(`<div id="html_8e1b3e15e7bd4363b26c868a3ba07823" style="width: 100.0%; height: 100.0%;">Mustard Seed Food Bank</div>`)[0];
    popup_42fef2e34ea14d6b8def9a4547bf111e.setContent(html_8e1b3e15e7bd4363b26c868a3ba07823);


    marker_b82802005d73473d8bf7511225ae474e.bindPopup(popup_42fef2e34ea14d6b8def9a4547bf111e)
        ;




    var marker_2891c06a681b4a16993c26b3257f8f09 = L.marker(
        [49.8493843078613, -99.9489593505859],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3312146ac6f34670bb70fb6182c96918 = L.popup({ "maxWidth": "100%" });


    var html_2ae1c7b325934bb4ac775c449718314c = $(`<div id="html_2ae1c7b325934bb4ac775c449718314c" style="width: 100.0%; height: 100.0%;">Samaritan House Ministries Brandon</div>`)[0];
    popup_3312146ac6f34670bb70fb6182c96918.setContent(html_2ae1c7b325934bb4ac775c449718314c);


    marker_2891c06a681b4a16993c26b3257f8f09.bindPopup(popup_3312146ac6f34670bb70fb6182c96918)
        ;




    var marker_b2369e0fde504cee8a277a9159008819 = L.marker(
        [46.3533782958984, -72.5514450073242],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f58eb21d5f504095ad6e485c5f508387 = L.popup({ "maxWidth": "100%" });


    var html_eb765b5669d941f7bf2573c123f5af08 = $(`<div id="html_eb765b5669d941f7bf2573c123f5af08" style="width: 100.0%; height: 100.0%;">Moisson Mauricie</div>`)[0];
    popup_f58eb21d5f504095ad6e485c5f508387.setContent(html_eb765b5669d941f7bf2573c123f5af08);


    marker_b2369e0fde504cee8a277a9159008819.bindPopup(popup_f58eb21d5f504095ad6e485c5f508387)
        ;




    var marker_b0b99bfa64ae498b9879f1ec374fd4a9 = L.marker(
        [46.4719619750977, -81.0287475585938],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c67e36ba0e9c4769ab533200f5e63d41 = L.popup({ "maxWidth": "100%" });


    var html_5c29108c6b1a48eabef0598a9de292ce = $(`<div id="html_5c29108c6b1a48eabef0598a9de292ce" style="width: 100.0%; height: 100.0%;">Banque D\u0027Aliments Sudbury Food Bank</div>`)[0];
    popup_c67e36ba0e9c4769ab533200f5e63d41.setContent(html_5c29108c6b1a48eabef0598a9de292ce);


    marker_b0b99bfa64ae498b9879f1ec374fd4a9.bindPopup(popup_c67e36ba0e9c4769ab533200f5e63d41)
        ;




    var marker_e24f1fd3d05240dc863f2c78dc691409 = L.marker(
        [53.2032928466797, -105.751640319824],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c7be7513f2f643d1b6fc0008e83c1929 = L.popup({ "maxWidth": "100%" });


    var html_90ad0b3b45a14588aa8e726f9e65cd53 = $(`<div id="html_90ad0b3b45a14588aa8e726f9e65cd53" style="width: 100.0%; height: 100.0%;">Prince Albert Share-A-Meal Food Bank Inc.</div>`)[0];
    popup_c7be7513f2f643d1b6fc0008e83c1929.setContent(html_90ad0b3b45a14588aa8e726f9e65cd53);


    marker_e24f1fd3d05240dc863f2c78dc691409.bindPopup(popup_c7be7513f2f643d1b6fc0008e83c1929)
        ;




    var marker_20905f82da3c4b7fb592bff2495c9bf8 = L.marker(
        [43.6939888000488, -79.4927139282227],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6d1320db40704c0b8f971bdbf088343a = L.popup({ "maxWidth": "100%" });


    var html_f70242a283664046a03128285e52aa23 = $(`<div id="html_f70242a283664046a03128285e52aa23" style="width: 100.0%; height: 100.0%;">North York Harvest Food Bank</div>`)[0];
    popup_6d1320db40704c0b8f971bdbf088343a.setContent(html_f70242a283664046a03128285e52aa23);


    marker_20905f82da3c4b7fb592bff2495c9bf8.bindPopup(popup_6d1320db40704c0b8f971bdbf088343a)
        ;




    var marker_3a89ec307cfd4891b19b12f1e03e64bd = L.marker(
        [49.7633018493652, -119.794860839844],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2a03671ee4d640e6ac429e72c275a2ac = L.popup({ "maxWidth": "100%" });


    var html_6fef3d9afa5346798e7e7e2f997b832d = $(`<div id="html_6fef3d9afa5346798e7e7e2f997b832d" style="width: 100.0%; height: 100.0%;">Peachland Food Bank</div>`)[0];
    popup_2a03671ee4d640e6ac429e72c275a2ac.setContent(html_6fef3d9afa5346798e7e7e2f997b832d);


    marker_3a89ec307cfd4891b19b12f1e03e64bd.bindPopup(popup_2a03671ee4d640e6ac429e72c275a2ac)
        ;




    var marker_93eb8bc8977943e4ab0ff537d5b1cbc9 = L.marker(
        [45.9648017883301, -66.6533355712891],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_077eca0d9e1f45c18caad878f3742783 = L.popup({ "maxWidth": "100%" });


    var html_195ca67c072746e182becc0a3fe09b9c = $(`<div id="html_195ca67c072746e182becc0a3fe09b9c" style="width: 100.0%; height: 100.0%;">Fredericton Community Kitchens Inc.</div>`)[0];
    popup_077eca0d9e1f45c18caad878f3742783.setContent(html_195ca67c072746e182becc0a3fe09b9c);


    marker_93eb8bc8977943e4ab0ff537d5b1cbc9.bindPopup(popup_077eca0d9e1f45c18caad878f3742783)
        ;




    var marker_f0298f32d4c04e829bad39b27e4ce6a0 = L.marker(
        [46.4671287536621, -64.7251052856445],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6a0e45fce8cf425a89ed468f5b05ddc1 = L.popup({ "maxWidth": "100%" });


    var html_aab1216a7f35471ca79c54dea63b0f84 = $(`<div id="html_aab1216a7f35471ca79c54dea63b0f84" style="width: 100.0%; height: 100.0%;">Vestiaire St-Jean Baptiste Inc.</div>`)[0];
    popup_6a0e45fce8cf425a89ed468f5b05ddc1.setContent(html_aab1216a7f35471ca79c54dea63b0f84);


    marker_f0298f32d4c04e829bad39b27e4ce6a0.bindPopup(popup_6a0e45fce8cf425a89ed468f5b05ddc1)
        ;




    var marker_031f9f0c130f4cf7a49d2e2314d26c1d = L.marker(
        [43.7299690246582, -80.9502563476563],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e30681a188d04310867fd6453c4c2d1f = L.popup({ "maxWidth": "100%" });


    var html_b2d978f130e444c7bdb093307e2d6b1e = $(`<div id="html_b2d978f130e444c7bdb093307e2d6b1e" style="width: 100.0%; height: 100.0%;">Salvation Army Listowel Community \u0026 Family Services</div>`)[0];
    popup_e30681a188d04310867fd6453c4c2d1f.setContent(html_b2d978f130e444c7bdb093307e2d6b1e);


    marker_031f9f0c130f4cf7a49d2e2314d26c1d.bindPopup(popup_e30681a188d04310867fd6453c4c2d1f)
        ;




    var marker_0acf5e464beb4fa8bf79cab89eb1adb0 = L.marker(
        [42.3860015869141, -82.1865768432617],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9d725eb170404fffab65e4e77af8c976 = L.popup({ "maxWidth": "100%" });


    var html_5a97ad383766433baa780f643aea5159 = $(`<div id="html_5a97ad383766433baa780f643aea5159" style="width: 100.0%; height: 100.0%;">Chatham Outreach For Hunger</div>`)[0];
    popup_9d725eb170404fffab65e4e77af8c976.setContent(html_5a97ad383766433baa780f643aea5159);


    marker_0acf5e464beb4fa8bf79cab89eb1adb0.bindPopup(popup_9d725eb170404fffab65e4e77af8c976)
        ;




    var marker_ed236956f84b4af89a197592a7f26b4f = L.marker(
        [49.8440208435059, -124.528205871582],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_df0137b4414442cab4764481fbbdf800 = L.popup({ "maxWidth": "100%" });


    var html_93b22db5755948faa1f5eec47b1b82e5 = $(`<div id="html_93b22db5755948faa1f5eec47b1b82e5" style="width: 100.0%; height: 100.0%;">Powell River Action Centre Food Bank</div>`)[0];
    popup_df0137b4414442cab4764481fbbdf800.setContent(html_93b22db5755948faa1f5eec47b1b82e5);


    marker_ed236956f84b4af89a197592a7f26b4f.bindPopup(popup_df0137b4414442cab4764481fbbdf800)
        ;




    var marker_ef927a0340484f7db279f57825a477ff = L.marker(
        [45.4817314147949, -73.6957855224609],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_080d33b560954294902494e161abac08 = L.popup({ "maxWidth": "100%" });


    var html_efe8d7505c1c40a09f0e4fc736657467 = $(`<div id="html_efe8d7505c1c40a09f0e4fc736657467" style="width: 100.0%; height: 100.0%;">Moisson Montréal</div>`)[0];
    popup_080d33b560954294902494e161abac08.setContent(html_efe8d7505c1c40a09f0e4fc736657467);


    marker_ef927a0340484f7db279f57825a477ff.bindPopup(popup_080d33b560954294902494e161abac08)
        ;




    var marker_6c9fd672024d45c1965d6256707e9809 = L.marker(
        [46.5541610717773, -66.1386337280273],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f9a482cfe22f408d866ff011814213a9 = L.popup({ "maxWidth": "100%" });


    var html_91a973fd5baf4924a0d4510994b4e3ce = $(`<div id="html_91a973fd5baf4924a0d4510994b4e3ce" style="width: 100.0%; height: 100.0%;">Central NB Self Help Group Inc.</div>`)[0];
    popup_f9a482cfe22f408d866ff011814213a9.setContent(html_91a973fd5baf4924a0d4510994b4e3ce);


    marker_6c9fd672024d45c1965d6256707e9809.bindPopup(popup_f9a482cfe22f408d866ff011814213a9)
        ;




    var marker_f0d5cc499694426fb4ecf5bf1c1e1209 = L.marker(
        [48.3750152587891, -89.2495880126953],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3d50fea354c34d848d38fc2be545b0a3 = L.popup({ "maxWidth": "100%" });


    var html_4f122e3bf80847f8beb7b31da951e2ba = $(`<div id="html_4f122e3bf80847f8beb7b31da951e2ba" style="width: 100.0%; height: 100.0%;">Regional Food Distribution Association</div>`)[0];
    popup_3d50fea354c34d848d38fc2be545b0a3.setContent(html_4f122e3bf80847f8beb7b31da951e2ba);


    marker_f0d5cc499694426fb4ecf5bf1c1e1209.bindPopup(popup_3d50fea354c34d848d38fc2be545b0a3)
        ;




    var marker_393383d63e3d4292aa1976a22b471428 = L.marker(
        [48.9939002990723, -123.819435119629],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ab313cc20cf04f66b7ce76c7f7aa2f59 = L.popup({ "maxWidth": "100%" });


    var html_2a1462c2105842e0b2437ff70fdc64cc = $(`<div id="html_2a1462c2105842e0b2437ff70fdc64cc" style="width: 100.0%; height: 100.0%;">Ladysmith Food Bank</div>`)[0];
    popup_ab313cc20cf04f66b7ce76c7f7aa2f59.setContent(html_2a1462c2105842e0b2437ff70fdc64cc);


    marker_393383d63e3d4292aa1976a22b471428.bindPopup(popup_ab313cc20cf04f66b7ce76c7f7aa2f59)
        ;




    var marker_bd2a1720c38844ee9943c663fc701656 = L.marker(
        [49.0973625183105, -117.718589782715],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b5a8731b1e6a4919b989c8a7094e6f5d = L.popup({ "maxWidth": "100%" });


    var html_55b2b532e7804f808ae075591978d7ba = $(`<div id="html_55b2b532e7804f808ae075591978d7ba" style="width: 100.0%; height: 100.0%;">Salvation Army Trail Food Bank</div>`)[0];
    popup_b5a8731b1e6a4919b989c8a7094e6f5d.setContent(html_55b2b532e7804f808ae075591978d7ba);


    marker_bd2a1720c38844ee9943c663fc701656.bindPopup(popup_b5a8731b1e6a4919b989c8a7094e6f5d)
        ;




    var marker_2ecb36b741be4d0e99a436363eec1eef = L.marker(
        [50.1439819335938, -96.8763275146484],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_91668be8ccd74d07a4d5d84ed61ff503 = L.popup({ "maxWidth": "100%" });


    var html_e401161dc6e84be5bae785a57c4513b5 = $(`<div id="html_e401161dc6e84be5bae785a57c4513b5" style="width: 100.0%; height: 100.0%;">Selkirk Food Bank</div>`)[0];
    popup_91668be8ccd74d07a4d5d84ed61ff503.setContent(html_e401161dc6e84be5bae785a57c4513b5);


    marker_2ecb36b741be4d0e99a436363eec1eef.bindPopup(popup_91668be8ccd74d07a4d5d84ed61ff503)
        ;




    var marker_4ccf1ca9b4294eeb8e06d2715a412ce0 = L.marker(
        [45.8393096923828, -66.4959716796875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f94e2adea69048758acdb4de5760efe4 = L.popup({ "maxWidth": "100%" });


    var html_cd964735012f44298f0216d42178c3d0 = $(`<div id="html_cd964735012f44298f0216d42178c3d0" style="width: 100.0%; height: 100.0%;">Oromocto Food Bank</div>`)[0];
    popup_f94e2adea69048758acdb4de5760efe4.setContent(html_cd964735012f44298f0216d42178c3d0);


    marker_4ccf1ca9b4294eeb8e06d2715a412ce0.bindPopup(popup_f94e2adea69048758acdb4de5760efe4)
        ;




    var marker_b8e06da3b605468c9dc9a81ea80c39bf = L.marker(
        [46.090763092041, -64.7776260375977],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_86f17e85dc9b4f3ba47f3d2ec7618075 = L.popup({ "maxWidth": "100%" });


    var html_415d26f833834d798db6edf4f9f38564 = $(`<div id="html_415d26f833834d798db6edf4f9f38564" style="width: 100.0%; height: 100.0%;">Karing Kitchen Inc.</div>`)[0];
    popup_86f17e85dc9b4f3ba47f3d2ec7618075.setContent(html_415d26f833834d798db6edf4f9f38564);


    marker_b8e06da3b605468c9dc9a81ea80c39bf.bindPopup(popup_86f17e85dc9b4f3ba47f3d2ec7618075)
        ;




    var marker_e2da1aae054c409ab6b0210f3288bfd1 = L.marker(
        [53.9077529907227, -122.786766052246],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_15f71872636b42e98df0ae00715d80dd = L.popup({ "maxWidth": "100%" });


    var html_483d35624e064f29b48fa09fc101e67b = $(`<div id="html_483d35624e064f29b48fa09fc101e67b" style="width: 100.0%; height: 100.0%;">Salvation Army Prince George Food Bank</div>`)[0];
    popup_15f71872636b42e98df0ae00715d80dd.setContent(html_483d35624e064f29b48fa09fc101e67b);


    marker_e2da1aae054c409ab6b0210f3288bfd1.bindPopup(popup_15f71872636b42e98df0ae00715d80dd)
        ;




    var marker_e99f8ffe1ef040e0bf8896fc9cf5e11d = L.marker(
        [46.5116958618164, -84.3340301513672],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7ba1d466e8c541a8870b80e901ca5cee = L.popup({ "maxWidth": "100%" });


    var html_037b2da413bc436f832b3115fd4f14c3 = $(`<div id="html_037b2da413bc436f832b3115fd4f14c3" style="width: 100.0%; height: 100.0%;">Salvation Army Sault Ste Marie Family Services</div>`)[0];
    popup_7ba1d466e8c541a8870b80e901ca5cee.setContent(html_037b2da413bc436f832b3115fd4f14c3);


    marker_e99f8ffe1ef040e0bf8896fc9cf5e11d.bindPopup(popup_7ba1d466e8c541a8870b80e901ca5cee)
        ;




    var marker_1610c9c268144776b16ae336c03b7a04 = L.marker(
        [47.3969841003418, -53.1387596130371],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9ac02a3e065849ada691abb63c63777b = L.popup({ "maxWidth": "100%" });


    var html_148776e7146b42119df59070db0df4bb = $(`<div id="html_148776e7146b42119df59070db0df4bb" style="width: 100.0%; height: 100.0%;">Holy Cross Parish Emergency Food Bank</div>`)[0];
    popup_9ac02a3e065849ada691abb63c63777b.setContent(html_148776e7146b42119df59070db0df4bb);


    marker_1610c9c268144776b16ae336c03b7a04.bindPopup(popup_9ac02a3e065849ada691abb63c63777b)
        ;




    var marker_16db8c35dc884debb5e7e8962d426d02 = L.marker(
        [45.9752464294434, -64.541374206543],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_500da062493f4e969708249d8f4812ac = L.popup({ "maxWidth": "100%" });


    var html_aa8ccd34798f4f3fab1f1de7efe0f12d = $(`<div id="html_aa8ccd34798f4f3fab1f1de7efe0f12d" style="width: 100.0%; height: 100.0%;">Banque de Nourriture de Memramcook</div>`)[0];
    popup_500da062493f4e969708249d8f4812ac.setContent(html_aa8ccd34798f4f3fab1f1de7efe0f12d);


    marker_16db8c35dc884debb5e7e8962d426d02.bindPopup(popup_500da062493f4e969708249d8f4812ac)
        ;




    var marker_4eeeb03583db4bb0bf532a2c4a9bcdd8 = L.marker(
        [45.7248153686523, -65.4967803955078],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f74719b36f96491fa753764773909bf0 = L.popup({ "maxWidth": "100%" });


    var html_1ef2a8668ad249778744627ba3235f57 = $(`<div id="html_1ef2a8668ad249778744627ba3235f57" style="width: 100.0%; height: 100.0%;">Sussex Sharing Club</div>`)[0];
    popup_f74719b36f96491fa753764773909bf0.setContent(html_1ef2a8668ad249778744627ba3235f57);


    marker_4eeeb03583db4bb0bf532a2c4a9bcdd8.bindPopup(popup_f74719b36f96491fa753764773909bf0)
        ;




    var marker_c8e305a52bbc4a6896f6858f08ffafa6 = L.marker(
        [45.7543754577637, -64.7433471679688],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_432bb5509a4a4206acef526236412e85 = L.popup({ "maxWidth": "100%" });


    var html_323198712c3349689909edf7818ccc87 = $(`<div id="html_323198712c3349689909edf7818ccc87" style="width: 100.0%; height: 100.0%;">Shepody Food Bank</div>`)[0];
    popup_432bb5509a4a4206acef526236412e85.setContent(html_323198712c3349689909edf7818ccc87);


    marker_c8e305a52bbc4a6896f6858f08ffafa6.bindPopup(popup_432bb5509a4a4206acef526236412e85)
        ;




    var marker_53b0075ef84c416788dabb5d2ef877c7 = L.marker(
        [42.7784652709961, -81.1852264404297],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3fcad34f908f4e9980f3efc3401ddb01 = L.popup({ "maxWidth": "100%" });


    var html_b35dfea627f04f8495949dd44c6b69bb = $(`<div id="html_b35dfea627f04f8495949dd44c6b69bb" style="width: 100.0%; height: 100.0%;">St. Thomas Elgin Food Bank</div>`)[0];
    popup_3fcad34f908f4e9980f3efc3401ddb01.setContent(html_b35dfea627f04f8495949dd44c6b69bb);


    marker_53b0075ef84c416788dabb5d2ef877c7.bindPopup(popup_3fcad34f908f4e9980f3efc3401ddb01)
        ;




    var marker_b7792e60c35743ca8111029e48f3b284 = L.marker(
        [49.0950965881348, -116.515777587891],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_39130648d3e64d0b9aedd66283b30b63 = L.popup({ "maxWidth": "100%" });


    var html_3d83d2209c2c4c198721ee2ec0881925 = $(`<div id="html_3d83d2209c2c4c198721ee2ec0881925" style="width: 100.0%; height: 100.0%;">Creston Valley Food Bank</div>`)[0];
    popup_39130648d3e64d0b9aedd66283b30b63.setContent(html_3d83d2209c2c4c198721ee2ec0881925);


    marker_b7792e60c35743ca8111029e48f3b284.bindPopup(popup_39130648d3e64d0b9aedd66283b30b63)
        ;




    var marker_47e7ef57554545cc996e770e408d6a56 = L.marker(
        [44.1039962768555, -77.5848159790039],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0feb32f41cf747f5a669b5343e459c23 = L.popup({ "maxWidth": "100%" });


    var html_ef84a7cd33c84d7283ad789caace0733 = $(`<div id="html_ef84a7cd33c84d7283ad789caace0733" style="width: 100.0%; height: 100.0%;">Trenton Care and Share Food Bank</div>`)[0];
    popup_0feb32f41cf747f5a669b5343e459c23.setContent(html_ef84a7cd33c84d7283ad789caace0733);


    marker_47e7ef57554545cc996e770e408d6a56.bindPopup(popup_0feb32f41cf747f5a669b5343e459c23)
        ;




    var marker_823738c3fb7e432a953b70f41d19a158 = L.marker(
        [47.7014274597168, -65.7000961303711],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_aef575005f48466b96852eecd8749b49 = L.popup({ "maxWidth": "100%" });


    var html_a0ae3a552e09467fb7798bd8cf0f67a4 = $(`<div id="html_a0ae3a552e09467fb7798bd8cf0f67a4" style="width: 100.0%; height: 100.0%;">La Cuisine Populaire de Beresford</div>`)[0];
    popup_aef575005f48466b96852eecd8749b49.setContent(html_a0ae3a552e09467fb7798bd8cf0f67a4);


    marker_823738c3fb7e432a953b70f41d19a158.bindPopup(popup_aef575005f48466b96852eecd8749b49)
        ;




    var marker_7862caa24238430289129f28ca8a0981 = L.marker(
        [47.3604698181152, -68.3428573608398],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8ff663c0c79a4386ae10a3fe5f85e5a2 = L.popup({ "maxWidth": "100%" });


    var html_80fb75e23911429d8b3423b169d3ce77 = $(`<div id="html_80fb75e23911429d8b3423b169d3ce77" style="width: 100.0%; height: 100.0%;">Atelier R.A.D.O.Inc.</div>`)[0];
    popup_8ff663c0c79a4386ae10a3fe5f85e5a2.setContent(html_80fb75e23911429d8b3423b169d3ce77);


    marker_7862caa24238430289129f28ca8a0981.bindPopup(popup_8ff663c0c79a4386ae10a3fe5f85e5a2)
        ;




    var marker_4854ec78836140b8bf539a9f8a6519db = L.marker(
        [45.9355583190918, -66.6088333129883],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7b360b5e201c45f78a9be8df588e3a81 = L.popup({ "maxWidth": "100%" });


    var html_c4dd3ffa75fd479a9abd3e5fbd003eb0 = $(`<div id="html_c4dd3ffa75fd479a9abd3e5fbd003eb0" style="width: 100.0%; height: 100.0%;">Greener Village Community Food Centre</div>`)[0];
    popup_7b360b5e201c45f78a9be8df588e3a81.setContent(html_c4dd3ffa75fd479a9abd3e5fbd003eb0);


    marker_4854ec78836140b8bf539a9f8a6519db.bindPopup(popup_7b360b5e201c45f78a9be8df588e3a81)
        ;




    var marker_adfcfa7293654d0da65a4a8804b81751 = L.marker(
        [43.9167671203613, -78.5911331176758],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f820ae3fbd1c49c9b45fa38fa987492a = L.popup({ "maxWidth": "100%" });


    var html_de47e0a66a59453ab564071a75e81868 = $(`<div id="html_de47e0a66a59453ab564071a75e81868" style="width: 100.0%; height: 100.0%;">Clarington East Food Bank</div>`)[0];
    popup_f820ae3fbd1c49c9b45fa38fa987492a.setContent(html_de47e0a66a59453ab564071a75e81868);


    marker_adfcfa7293654d0da65a4a8804b81751.bindPopup(popup_f820ae3fbd1c49c9b45fa38fa987492a)
        ;




    var marker_509f790c78ff4e008154e315aab8b5cb = L.marker(
        [42.8373069763184, -80.3137359619141],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_32e320a2213e4e27aa1f8465410f1357 = L.popup({ "maxWidth": "100%" });


    var html_e5a560161914418c8e4e64e2183b0441 = $(`<div id="html_e5a560161914418c8e4e64e2183b0441" style="width: 100.0%; height: 100.0%;">Simcoe Caring Cupboard</div>`)[0];
    popup_32e320a2213e4e27aa1f8465410f1357.setContent(html_e5a560161914418c8e4e64e2183b0441);


    marker_509f790c78ff4e008154e315aab8b5cb.bindPopup(popup_32e320a2213e4e27aa1f8465410f1357)
        ;




    var marker_f6c84a9d18b149a1a587b4decb3abc57 = L.marker(
        [46.1658630371094, -67.574821472168],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f3d5c3cee96d467884a1a5a79541d25d = L.popup({ "maxWidth": "100%" });


    var html_1d3e661aac03406eacc8da8f0c70f02b = $(`<div id="html_1d3e661aac03406eacc8da8f0c70f02b" style="width: 100.0%; height: 100.0%;">Volunteer Family Services Inc. (Valley Food Bank)</div>`)[0];
    popup_f3d5c3cee96d467884a1a5a79541d25d.setContent(html_1d3e661aac03406eacc8da8f0c70f02b);


    marker_f6c84a9d18b149a1a587b4decb3abc57.bindPopup(popup_f3d5c3cee96d467884a1a5a79541d25d)
        ;




    var marker_bd420fe5d6de4ad49d288295d561ec60 = L.marker(
        [46.7551040649414, -67.6983184814453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_21087a2880434af89b5e1558d054996d = L.popup({ "maxWidth": "100%" });


    var html_2d7b5083c0564867a3717dba9be4756c = $(`<div id="html_2d7b5083c0564867a3717dba9be4756c" style="width: 100.0%; height: 100.0%;">Making a Difference Food Bank Inc. </div>`)[0];
    popup_21087a2880434af89b5e1558d054996d.setContent(html_2d7b5083c0564867a3717dba9be4756c);


    marker_bd420fe5d6de4ad49d288295d561ec60.bindPopup(popup_21087a2880434af89b5e1558d054996d)
        ;




    var marker_75f76de31b0842daa4761dc7a5c801b3 = L.marker(
        [42.9622573852539, -81.2163391113281],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d2d5c44b865146cda7d8edd3ea32278f = L.popup({ "maxWidth": "100%" });


    var html_472fc66e7c4049f2b9c46cb8d4c41418 = $(`<div id="html_472fc66e7c4049f2b9c46cb8d4c41418" style="width: 100.0%; height: 100.0%;">London Food Bank</div>`)[0];
    popup_d2d5c44b865146cda7d8edd3ea32278f.setContent(html_472fc66e7c4049f2b9c46cb8d4c41418);


    marker_75f76de31b0842daa4761dc7a5c801b3.bindPopup(popup_d2d5c44b865146cda7d8edd3ea32278f)
        ;




    var marker_20878b7260184035aacfde8c01ed617e = L.marker(
        [46.1791191101074, -65.8865280151367],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_56a16182fbcd4ef1a8cccee525e9eed0 = L.popup({ "maxWidth": "100%" });


    var html_cb52b728393c4c819eb080474e334e90 = $(`<div id="html_cb52b728393c4c819eb080474e334e90" style="width: 100.0%; height: 100.0%;">Chipman Community Care Inc.</div>`)[0];
    popup_56a16182fbcd4ef1a8cccee525e9eed0.setContent(html_cb52b728393c4c819eb080474e334e90);


    marker_20878b7260184035aacfde8c01ed617e.bindPopup(popup_56a16182fbcd4ef1a8cccee525e9eed0)
        ;




    var marker_153c84f7a2dc45ec90265eeb3e9f2a88 = L.marker(
        [48.4512710571289, -68.5200042724609],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5016ef591c534fe0aa8e186c1e15a2c0 = L.popup({ "maxWidth": "100%" });


    var html_17e9a1612f494ad49ec0754348525d88 = $(`<div id="html_17e9a1612f494ad49ec0754348525d88" style="width: 100.0%; height: 100.0%;">Moisson Rimouski-Neigette Inc.</div>`)[0];
    popup_5016ef591c534fe0aa8e186c1e15a2c0.setContent(html_17e9a1612f494ad49ec0754348525d88);


    marker_153c84f7a2dc45ec90265eeb3e9f2a88.bindPopup(popup_5016ef591c534fe0aa8e186c1e15a2c0)
        ;




    var marker_2b8e4c1aaa344e359af88a78faf33d86 = L.marker(
        [46.3081817626953, -66.7102508544922],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e9c81dbb06484be4a7cfd20ea82d284f = L.popup({ "maxWidth": "100%" });


    var html_c05a669eb0fa4299aaeb5b79e6d29826 = $(`<div id="html_c05a669eb0fa4299aaeb5b79e6d29826" style="width: 100.0%; height: 100.0%;">Just Friends Food Bank</div>`)[0];
    popup_e9c81dbb06484be4a7cfd20ea82d284f.setContent(html_c05a669eb0fa4299aaeb5b79e6d29826);


    marker_2b8e4c1aaa344e359af88a78faf33d86.bindPopup(popup_e9c81dbb06484be4a7cfd20ea82d284f)
        ;




    var marker_aabf189d29b54b1f8b0dad1e5be2dd52 = L.marker(
        [45.8971405029297, -64.3675155639648],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f1383f30d5804b45805c1e6fe77fc3cf = L.popup({ "maxWidth": "100%" });


    var html_95a52dc5277748fbb73170300ac077a0 = $(`<div id="html_95a52dc5277748fbb73170300ac077a0" style="width: 100.0%; height: 100.0%;">Sackville and District Assistance Centre</div>`)[0];
    popup_f1383f30d5804b45805c1e6fe77fc3cf.setContent(html_95a52dc5277748fbb73170300ac077a0);


    marker_aabf189d29b54b1f8b0dad1e5be2dd52.bindPopup(popup_f1383f30d5804b45805c1e6fe77fc3cf)
        ;




    var marker_42dcf6a86e924b6eaaf0cd4531060ca0 = L.marker(
        [51.1407432556152, -100.072731018066],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e17c6acd50c74fc59d0786612435fa2d = L.popup({ "maxWidth": "100%" });


    var html_e65010d61b6d45a39e9cc6b6c246e7b0 = $(`<div id="html_e65010d61b6d45a39e9cc6b6c246e7b0" style="width: 100.0%; height: 100.0%;">Dauphin And District Community Food Bank</div>`)[0];
    popup_e17c6acd50c74fc59d0786612435fa2d.setContent(html_e65010d61b6d45a39e9cc6b6c246e7b0);


    marker_42dcf6a86e924b6eaaf0cd4531060ca0.bindPopup(popup_e17c6acd50c74fc59d0786612435fa2d)
        ;




    var marker_bd44fa7958294c0c814175ea579b06c9 = L.marker(
        [51.1756973266602, -115.571876525879],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_eada36c4d75f4d729fe332970cc2bed3 = L.popup({ "maxWidth": "100%" });


    var html_9840773145f944ce8f33565c002bb844 = $(`<div id="html_9840773145f944ce8f33565c002bb844" style="width: 100.0%; height: 100.0%;">Banff Food Bank</div>`)[0];
    popup_eada36c4d75f4d729fe332970cc2bed3.setContent(html_9840773145f944ce8f33565c002bb844);


    marker_bd44fa7958294c0c814175ea579b06c9.bindPopup(popup_eada36c4d75f4d729fe332970cc2bed3)
        ;




    var marker_8c1adf5cc08f4b46bd7e55a2f4b37425 = L.marker(
        [47.520206451416, -64.9815063476563],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3568ee620f5b4e95b97db44ece971700 = L.popup({ "maxWidth": "100%" });


    var html_2200d9bb9bb0411e9dbe8cea458e9cc0 = $(`<div id="html_2200d9bb9bb0411e9dbe8cea458e9cc0" style="width: 100.0%; height: 100.0%;">Au Rayon d\u0027Espoir inc.</div>`)[0];
    popup_3568ee620f5b4e95b97db44ece971700.setContent(html_2200d9bb9bb0411e9dbe8cea458e9cc0);


    marker_8c1adf5cc08f4b46bd7e55a2f4b37425.bindPopup(popup_3568ee620f5b4e95b97db44ece971700)
        ;




    var marker_742e36391cba4abaa6f4587a869a8270 = L.marker(
        [48.1021347045898, -77.7896728515625],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6affe8fff7374b119f67928a8b8faa34 = L.popup({ "maxWidth": "100%" });


    var html_3372e58c1f5b4218b7c526b6f4378774 = $(`<div id="html_3372e58c1f5b4218b7c526b6f4378774" style="width: 100.0%; height: 100.0%;">Centre De Bénévolat De La Vallée De L\u0027or</div>`)[0];
    popup_6affe8fff7374b119f67928a8b8faa34.setContent(html_3372e58c1f5b4218b7c526b6f4378774);


    marker_742e36391cba4abaa6f4587a869a8270.bindPopup(popup_6affe8fff7374b119f67928a8b8faa34)
        ;




    var marker_94b3038b99944ec8be6beb1b2a1350db = L.marker(
        [48.4885520935059, -123.496078491211],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_192d281a4e44497bacecfe09512e1210 = L.popup({ "maxWidth": "100%" });


    var html_38a365f63a8549eb9e2f0c29d19d9231 = $(`<div id="html_38a365f63a8549eb9e2f0c29d19d9231" style="width: 100.0%; height: 100.0%;">Goldstream Food Bank</div>`)[0];
    popup_192d281a4e44497bacecfe09512e1210.setContent(html_38a365f63a8549eb9e2f0c29d19d9231);


    marker_94b3038b99944ec8be6beb1b2a1350db.bindPopup(popup_192d281a4e44497bacecfe09512e1210)
        ;




    var marker_8d8d308574344ccd81ccc7b9124cf2ab = L.marker(
        [49.5330810546875, -124.663391113281],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7dcea1828d394e509ad7057055a6d7a7 = L.popup({ "maxWidth": "100%" });


    var html_0a270321ebbd4de28b752cee028d0bb9 = $(`<div id="html_0a270321ebbd4de28b752cee028d0bb9" style="width: 100.0%; height: 100.0%;">Hornby Island Food Bank</div>`)[0];
    popup_7dcea1828d394e509ad7057055a6d7a7.setContent(html_0a270321ebbd4de28b752cee028d0bb9);


    marker_8d8d308574344ccd81ccc7b9124cf2ab.bindPopup(popup_7dcea1828d394e509ad7057055a6d7a7)
        ;




    var marker_d5b167a53da14b4fb3ace383ea535570 = L.marker(
        [44.703685760498, -63.5995826721191],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_702b26d1690a4a9e934ab8ff573aff16 = L.popup({ "maxWidth": "100%" });


    var html_b5ab63887a4547a6a1c6582617e80a44 = $(`<div id="html_b5ab63887a4547a6a1c6582617e80a44" style="width: 100.0%; height: 100.0%;">Feed Nova Scotia</div>`)[0];
    popup_702b26d1690a4a9e934ab8ff573aff16.setContent(html_b5ab63887a4547a6a1c6582617e80a44);


    marker_d5b167a53da14b4fb3ace383ea535570.bindPopup(popup_702b26d1690a4a9e934ab8ff573aff16)
        ;




    var marker_e435e87466d140afb8d52c78d6b4da70 = L.marker(
        [50.9294509887695, -102.804656982422],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_845827431fe9414eae1d7d6826756dc0 = L.popup({ "maxWidth": "100%" });


    var html_d3fd01314c614800ab33db5c789a46d5 = $(`<div id="html_d3fd01314c614800ab33db5c789a46d5" style="width: 100.0%; height: 100.0%;">Melville and District</div>`)[0];
    popup_845827431fe9414eae1d7d6826756dc0.setContent(html_d3fd01314c614800ab33db5c789a46d5);


    marker_e435e87466d140afb8d52c78d6b4da70.bindPopup(popup_845827431fe9414eae1d7d6826756dc0)
        ;




    var marker_2c9dc8e9317a4628bed610119f6e9509 = L.marker(
        [44.6098213195801, -79.4185485839844],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2b37702dd27642b6b524500b483108d8 = L.popup({ "maxWidth": "100%" });


    var html_930116ac91b94292995ac4c897ed1058 = $(`<div id="html_930116ac91b94292995ac4c897ed1058" style="width: 100.0%; height: 100.0%;">The Sharing Place</div>`)[0];
    popup_2b37702dd27642b6b524500b483108d8.setContent(html_930116ac91b94292995ac4c897ed1058);


    marker_2c9dc8e9317a4628bed610119f6e9509.bindPopup(popup_2b37702dd27642b6b524500b483108d8)
        ;




    var marker_0efdc724eca742889cbb8298817b59de = L.marker(
        [51.8281631469727, -113.226615905762],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_64affb9a8efc4002ba7c9f36ec6254a5 = L.popup({ "maxWidth": "100%" });


    var html_6876ab85607f4b8d869948d7d69ee144 = $(`<div id="html_6876ab85607f4b8d869948d7d69ee144" style="width: 100.0%; height: 100.0%;">Trochu \u0026 District Inter-Church Food Bank</div>`)[0];
    popup_64affb9a8efc4002ba7c9f36ec6254a5.setContent(html_6876ab85607f4b8d869948d7d69ee144);


    marker_0efdc724eca742889cbb8298817b59de.bindPopup(popup_64affb9a8efc4002ba7c9f36ec6254a5)
        ;




    var marker_64d6f94e9d3d437c8fb835534bc77f84 = L.marker(
        [49.0310554504395, -118.436309814453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6c41ac055b194dbd85be9ab9ac0c5961 = L.popup({ "maxWidth": "100%" });


    var html_200a817f5d0548a786770a4650dfd1e2 = $(`<div id="html_200a817f5d0548a786770a4650dfd1e2" style="width: 100.0%; height: 100.0%;">Boundary Community Food Bank Society</div>`)[0];
    popup_6c41ac055b194dbd85be9ab9ac0c5961.setContent(html_200a817f5d0548a786770a4650dfd1e2);


    marker_64d6f94e9d3d437c8fb835534bc77f84.bindPopup(popup_6c41ac055b194dbd85be9ab9ac0c5961)
        ;




    var marker_22f75f5fcf594bf0a93e4831ce78cd1d = L.marker(
        [49.562744140625, -123.753204345703],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d7f66f61f4e24a04b1965b1cdd233261 = L.popup({ "maxWidth": "100%" });


    var html_fb274c7d7f7042ca9887879237615e6f = $(`<div id="html_fb274c7d7f7042ca9887879237615e6f" style="width: 100.0%; height: 100.0%;">Sunshine Coast Food Bank</div>`)[0];
    popup_d7f66f61f4e24a04b1965b1cdd233261.setContent(html_fb274c7d7f7042ca9887879237615e6f);


    marker_22f75f5fcf594bf0a93e4831ce78cd1d.bindPopup(popup_d7f66f61f4e24a04b1965b1cdd233261)
        ;




    var marker_631dbff0455542ae9b1673f56cae37f0 = L.marker(
        [45.0612754821777, -77.8572463989258],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d41d35a0b89d4196b296f8dae8d8505d = L.popup({ "maxWidth": "100%" });


    var html_4e07f43843ac4d349507a6e37834abe0 = $(`<div id="html_4e07f43843ac4d349507a6e37834abe0" style="width: 100.0%; height: 100.0%;">North Hastings Community Cupboard</div>`)[0];
    popup_d41d35a0b89d4196b296f8dae8d8505d.setContent(html_4e07f43843ac4d349507a6e37834abe0);


    marker_631dbff0455542ae9b1673f56cae37f0.bindPopup(popup_d41d35a0b89d4196b296f8dae8d8505d)
        ;




    var marker_e9b153e06a834c4cbb2ff13893186326 = L.marker(
        [54.1313972473145, -108.43091583252],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_89bf21d5c646447da5fad8d2be377bbf = L.popup({ "maxWidth": "100%" });


    var html_09cf84d60d29493aab6f0fea6261ba89 = $(`<div id="html_09cf84d60d29493aab6f0fea6261ba89" style="width: 100.0%; height: 100.0%;">Door of Hope Meadow Lake Outreach Ministries</div>`)[0];
    popup_89bf21d5c646447da5fad8d2be377bbf.setContent(html_09cf84d60d29493aab6f0fea6261ba89);


    marker_e9b153e06a834c4cbb2ff13893186326.bindPopup(popup_89bf21d5c646447da5fad8d2be377bbf)
        ;




    var marker_966570d9026a451685f8e71deeaa082b = L.marker(
        [46.2448883056641, -63.1214408874512],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_31f5d0acf34947138cf3defcec3f02b1 = L.popup({ "maxWidth": "100%" });


    var html_f9b3423d8a54470780874fa53bfab948 = $(`<div id="html_f9b3423d8a54470780874fa53bfab948" style="width: 100.0%; height: 100.0%;">Upper Room</div>`)[0];
    popup_31f5d0acf34947138cf3defcec3f02b1.setContent(html_f9b3423d8a54470780874fa53bfab948);


    marker_966570d9026a451685f8e71deeaa082b.bindPopup(popup_31f5d0acf34947138cf3defcec3f02b1)
        ;




    var marker_2f51730987364a098c6a8c158824b04e = L.marker(
        [44.3472862243652, -78.7362899780273],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_beadd50db7214525a43584c2f4f1c2ef = L.popup({ "maxWidth": "100%" });


    var html_185daa44c87746519a7735dfee3d7c72 = $(`<div id="html_185daa44c87746519a7735dfee3d7c72" style="width: 100.0%; height: 100.0%;">Kawartha Lakes Food Source</div>`)[0];
    popup_beadd50db7214525a43584c2f4f1c2ef.setContent(html_185daa44c87746519a7735dfee3d7c72);


    marker_2f51730987364a098c6a8c158824b04e.bindPopup(popup_beadd50db7214525a43584c2f4f1c2ef)
        ;




    var marker_25940ef2983244369b3a58e796aa5b75 = L.marker(
        [45.2909317016602, -78.0199356079102],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_110e2075acae4e63885b837943c6f1ea = L.popup({ "maxWidth": "100%" });


    var html_aae31524401e445591c0c14cb78716e1 = $(`<div id="html_aae31524401e445591c0c14cb78716e1" style="width: 100.0%; height: 100.0%;">Word of Life Outreach</div>`)[0];
    popup_110e2075acae4e63885b837943c6f1ea.setContent(html_aae31524401e445591c0c14cb78716e1);


    marker_25940ef2983244369b3a58e796aa5b75.bindPopup(popup_110e2075acae4e63885b837943c6f1ea)
        ;




    var marker_c362a12ded5041d78d3d1f83379416cf = L.marker(
        [50.7330474853516, -119.578224182129],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f84536d7342f4036a6ef5cc9cac531f6 = L.popup({ "maxWidth": "100%" });


    var html_46ec6c70b6f9403aaf2a392363215b9b = $(`<div id="html_46ec6c70b6f9403aaf2a392363215b9b" style="width: 100.0%; height: 100.0%;">CHASE  HAMPER SOCIETY</div>`)[0];
    popup_f84536d7342f4036a6ef5cc9cac531f6.setContent(html_46ec6c70b6f9403aaf2a392363215b9b);


    marker_c362a12ded5041d78d3d1f83379416cf.bindPopup(popup_f84536d7342f4036a6ef5cc9cac531f6)
        ;




    var marker_72bbf1b2167f496ab87096f90a6a2f0e = L.marker(
        [44.3021392822266, -78.3199005126953],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_885fe5c8e9d14c5abddf6ad068d8f2b8 = L.popup({ "maxWidth": "100%" });


    var html_db4babc742fb41ce991f83d1ce2876c7 = $(`<div id="html_db4babc742fb41ce991f83d1ce2876c7" style="width: 100.0%; height: 100.0%;">Kawartha Food Share</div>`)[0];
    popup_885fe5c8e9d14c5abddf6ad068d8f2b8.setContent(html_db4babc742fb41ce991f83d1ce2876c7);


    marker_72bbf1b2167f496ab87096f90a6a2f0e.bindPopup(popup_885fe5c8e9d14c5abddf6ad068d8f2b8)
        ;




    var marker_45422c9462a440e0ae1ddb4dffff077b = L.marker(
        [51.5100173950195, -107.03987121582],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_05e25328703f4f59b727eaea3e36f1a7 = L.popup({ "maxWidth": "100%" });


    var html_d95fb385c75d43e399532b125b74ead5 = $(`<div id="html_d95fb385c75d43e399532b125b74ead5" style="width: 100.0%; height: 100.0%;">Outlook \u0026 District Food Bank Inc</div>`)[0];
    popup_05e25328703f4f59b727eaea3e36f1a7.setContent(html_d95fb385c75d43e399532b125b74ead5);


    marker_45422c9462a440e0ae1ddb4dffff077b.bindPopup(popup_05e25328703f4f59b727eaea3e36f1a7)
        ;




    var marker_24213ad1914046ac934a638c5f972ba7 = L.marker(
        [50.6866798400879, -120.352340698242],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fac6f32bd7f049adb52490d1c296e2e7 = L.popup({ "maxWidth": "100%" });


    var html_8cd5341ed34240879df156fa4cbf6338 = $(`<div id="html_8cd5341ed34240879df156fa4cbf6338" style="width: 100.0%; height: 100.0%;">KAMLOOPS FOOD BANK \u0026 OUTREACH SOCIETY</div>`)[0];
    popup_fac6f32bd7f049adb52490d1c296e2e7.setContent(html_8cd5341ed34240879df156fa4cbf6338);


    marker_24213ad1914046ac934a638c5f972ba7.bindPopup(popup_fac6f32bd7f049adb52490d1c296e2e7)
        ;




    var marker_c4dc7cd08ed940ccab73bfeca466d2b6 = L.marker(
        [45.5374984741211, -77.0974426269531],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0de0174c694743d6bcf750756c0fd791 = L.popup({ "maxWidth": "100%" });


    var html_bd190a6b4ce640ef9bc9de3b0ba0294e = $(`<div id="html_bd190a6b4ce640ef9bc9de3b0ba0294e" style="width: 100.0%; height: 100.0%;">Eganville \u0026 District Community Food Bank</div>`)[0];
    popup_0de0174c694743d6bcf750756c0fd791.setContent(html_bd190a6b4ce640ef9bc9de3b0ba0294e);


    marker_c4dc7cd08ed940ccab73bfeca466d2b6.bindPopup(popup_0de0174c694743d6bcf750756c0fd791)
        ;




    var marker_2d420d4dcc1e4630a0f7f9bc4e89bcd1 = L.marker(
        [51.7064666748047, -113.257446289063],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4a8179ad77eb4849814cfba70b554239 = L.popup({ "maxWidth": "100%" });


    var html_09db5a1dcd4341689a8b75ecd4d2e0e2 = $(`<div id="html_09db5a1dcd4341689a8b75ecd4d2e0e2" style="width: 100.0%; height: 100.0%;">Three Hills Area Food Bank Society</div>`)[0];
    popup_4a8179ad77eb4849814cfba70b554239.setContent(html_09db5a1dcd4341689a8b75ecd4d2e0e2);


    marker_2d420d4dcc1e4630a0f7f9bc4e89bcd1.bindPopup(popup_4a8179ad77eb4849814cfba70b554239)
        ;




    var marker_d32e5bec3005424ba7248ba4eb8747eb = L.marker(
        [58.5080261230469, -117.135711669922],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2350761ce57140a998f602489c7357a7 = L.popup({ "maxWidth": "100%" });


    var html_9372ace80f754505acc489bf3e495fac = $(`<div id="html_9372ace80f754505acc489bf3e495fac" style="width: 100.0%; height: 100.0%;">High Level Native Friendship Centre</div>`)[0];
    popup_2350761ce57140a998f602489c7357a7.setContent(html_9372ace80f754505acc489bf3e495fac);


    marker_d32e5bec3005424ba7248ba4eb8747eb.bindPopup(popup_2350761ce57140a998f602489c7357a7)
        ;




    var marker_fe6b055b4e3641a19cac8cb697130f26 = L.marker(
        [46.8120498657227, -64.0947036743164],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1f2a3134438e4593a899e011284b10c3 = L.popup({ "maxWidth": "100%" });


    var html_831f11c4bf514aaea7932e640c96f7bc = $(`<div id="html_831f11c4bf514aaea7932e640c96f7bc" style="width: 100.0%; height: 100.0%;">West Prince Caring Cupboard</div>`)[0];
    popup_1f2a3134438e4593a899e011284b10c3.setContent(html_831f11c4bf514aaea7932e640c96f7bc);


    marker_fe6b055b4e3641a19cac8cb697130f26.bindPopup(popup_1f2a3134438e4593a899e011284b10c3)
        ;




    var marker_a38db08fafe944be8d891ddddd11907b = L.marker(
        [48.9238548278809, -123.718772888184],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ed4a02f2e2404045802ba7a700c7c0a4 = L.popup({ "maxWidth": "100%" });


    var html_124335f2e4fe4e37a2aed5996212d21f = $(`<div id="html_124335f2e4fe4e37a2aed5996212d21f" style="width: 100.0%; height: 100.0%;">Chemainus Harvest House</div>`)[0];
    popup_ed4a02f2e2404045802ba7a700c7c0a4.setContent(html_124335f2e4fe4e37a2aed5996212d21f);


    marker_a38db08fafe944be8d891ddddd11907b.bindPopup(popup_ed4a02f2e2404045802ba7a700c7c0a4)
        ;




    var marker_397533f6cebe49e9871548df22f30cfb = L.marker(
        [52.8176918029785, -113.460647583008],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_421912e9c51c484d94932a91629ab4fe = L.popup({ "maxWidth": "100%" });


    var html_fbd0a512636f4af7b20e8ef32fafe034 = $(`<div id="html_fbd0a512636f4af7b20e8ef32fafe034" style="width: 100.0%; height: 100.0%;">Samson Food Bank Society</div>`)[0];
    popup_421912e9c51c484d94932a91629ab4fe.setContent(html_fbd0a512636f4af7b20e8ef32fafe034);


    marker_397533f6cebe49e9871548df22f30cfb.bindPopup(popup_421912e9c51c484d94932a91629ab4fe)
        ;




    var marker_21aee6f5103c41b793fdcacf16b105d2 = L.marker(
        [52.3728942871094, -126.762573242188],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d0cc7999114e42cfa0190af9357a9c1f = L.popup({ "maxWidth": "100%" });


    var html_7ed44af22b0d42b8acc45a7d4d159746 = $(`<div id="html_7ed44af22b0d42b8acc45a7d4d159746" style="width: 100.0%; height: 100.0%;">Bella Coola Valley Food Bank</div>`)[0];
    popup_d0cc7999114e42cfa0190af9357a9c1f.setContent(html_7ed44af22b0d42b8acc45a7d4d159746);


    marker_21aee6f5103c41b793fdcacf16b105d2.bindPopup(popup_d0cc7999114e42cfa0190af9357a9c1f)
        ;




    var marker_936ee509b2764328918e09d2ae3decc8 = L.marker(
        [54.7728691101074, -111.979370117188],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7108fb4081c8452ca2e1e8273091e36e = L.popup({ "maxWidth": "100%" });


    var html_387066dece5f43ffb8b3c19205f00c56 = $(`<div id="html_387066dece5f43ffb8b3c19205f00c56" style="width: 100.0%; height: 100.0%;">Waskaysoo Community Food Bank</div>`)[0];
    popup_7108fb4081c8452ca2e1e8273091e36e.setContent(html_387066dece5f43ffb8b3c19205f00c56);


    marker_936ee509b2764328918e09d2ae3decc8.bindPopup(popup_7108fb4081c8452ca2e1e8273091e36e)
        ;




    var marker_349e60a478f643b3af645ee19afb7ea4 = L.marker(
        [54.0159492492676, -124.011161804199],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7319c08bae2644f89fe69be6fa8e0b17 = L.popup({ "maxWidth": "100%" });


    var html_1cc5879c0e0a48458ef908f4661dd2c5 = $(`<div id="html_1cc5879c0e0a48458ef908f4661dd2c5" style="width: 100.0%; height: 100.0%;">Neighbour Link Food Bank</div>`)[0];
    popup_7319c08bae2644f89fe69be6fa8e0b17.setContent(html_1cc5879c0e0a48458ef908f4661dd2c5);


    marker_349e60a478f643b3af645ee19afb7ea4.bindPopup(popup_7319c08bae2644f89fe69be6fa8e0b17)
        ;




    var marker_9cd7ac93fb14494db9f29e60bd13e432 = L.marker(
        [52.1310997009277, -101.384048461914],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_aedb72c0db8e4d26851f8f8eb371e3aa = L.popup({ "maxWidth": "100%" });


    var html_81e624f63a29487e9caa7826cc616cd9 = $(`<div id="html_81e624f63a29487e9caa7826cc616cd9" style="width: 100.0%; height: 100.0%;">Swan Valley Food Bank Swan River</div>`)[0];
    popup_aedb72c0db8e4d26851f8f8eb371e3aa.setContent(html_81e624f63a29487e9caa7826cc616cd9);


    marker_9cd7ac93fb14494db9f29e60bd13e432.bindPopup(popup_aedb72c0db8e4d26851f8f8eb371e3aa)
        ;




    var marker_f6de89d21d0745cd9dc75944fbb497a9 = L.marker(
        [50.4481391906738, -119.195365905762],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_40bbf5e73a244d958828d2c71c6a310d = L.popup({ "maxWidth": "100%" });


    var html_0469c0e261894379b94c487509b42f74 = $(`<div id="html_0469c0e261894379b94c487509b42f74" style="width: 100.0%; height: 100.0%;">OKANAGAN BOYS \u0026 GIRLS CLUB</div>`)[0];
    popup_40bbf5e73a244d958828d2c71c6a310d.setContent(html_0469c0e261894379b94c487509b42f74);


    marker_f6de89d21d0745cd9dc75944fbb497a9.bindPopup(popup_40bbf5e73a244d958828d2c71c6a310d)
        ;




    var marker_a0d11d3ea9ad4780bdb9668b99a8b72b = L.marker(
        [52.861873626709, -104.616264343262],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_56e57c79f43a4fb8ba8f9946d39103fb = L.popup({ "maxWidth": "100%" });


    var html_cb47ebc3629543cf9f5c1a8014839e1d = $(`<div id="html_cb47ebc3629543cf9f5c1a8014839e1d" style="width: 100.0%; height: 100.0%;">Melfort Food Bank Inc.</div>`)[0];
    popup_56e57c79f43a4fb8ba8f9946d39103fb.setContent(html_cb47ebc3629543cf9f5c1a8014839e1d);


    marker_a0d11d3ea9ad4780bdb9668b99a8b72b.bindPopup(popup_56e57c79f43a4fb8ba8f9946d39103fb)
        ;




    var marker_166dae16f3d6414da1c87aacdc8ee53b = L.marker(
        [49.6339645385742, -102.267082214355],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a150959e13324c95a3df464d10a9a49a = L.popup({ "maxWidth": "100%" });


    var html_b378048183774b97b7963c57e07ea0c8 = $(`<div id="html_b378048183774b97b7963c57e07ea0c8" style="width: 100.0%; height: 100.0%;">Carlyle \u0026 District Food Bank Inc.</div>`)[0];
    popup_a150959e13324c95a3df464d10a9a49a.setContent(html_b378048183774b97b7963c57e07ea0c8);


    marker_166dae16f3d6414da1c87aacdc8ee53b.bindPopup(popup_a150959e13324c95a3df464d10a9a49a)
        ;




    var marker_259ac2672a694da9aa09c4293a1bde70 = L.marker(
        [52.6422309875488, -114.242240905762],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_bd062d616639487ebc43d653c5b89303 = L.popup({ "maxWidth": "100%" });


    var html_fe4ef960e10845eea69c17a738dba1a5 = $(`<div id="html_fe4ef960e10845eea69c17a738dba1a5" style="width: 100.0%; height: 100.0%;">Rimbey Food Bank</div>`)[0];
    popup_bd062d616639487ebc43d653c5b89303.setContent(html_fe4ef960e10845eea69c17a738dba1a5);


    marker_259ac2672a694da9aa09c4293a1bde70.bindPopup(popup_bd062d616639487ebc43d653c5b89303)
        ;




    var marker_2cdf43f4d5254c8f809038cead5b201b = L.marker(
        [49.2289123535156, -119.416290283203],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_62763a3827d84bc298fefb57de2fc480 = L.popup({ "maxWidth": "100%" });


    var html_4066db55034f461e88b2b4fdbd81d873 = $(`<div id="html_4066db55034f461e88b2b4fdbd81d873" style="width: 100.0%; height: 100.0%;">OLIVER FOOD BANK</div>`)[0];
    popup_62763a3827d84bc298fefb57de2fc480.setContent(html_4066db55034f461e88b2b4fdbd81d873);


    marker_2cdf43f4d5254c8f809038cead5b201b.bindPopup(popup_62763a3827d84bc298fefb57de2fc480)
        ;




    var marker_ed2f748ee02c4035881f3738a3d4b7ed = L.marker(
        [45.0614471435547, -76.4837265014648],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_553d768866714c2797fb22427a516398 = L.popup({ "maxWidth": "100%" });


    var html_189e9f347a824054a8ba9d77ef03d67b = $(`<div id="html_189e9f347a824054a8ba9d77ef03d67b" style="width: 100.0%; height: 100.0%;">Lanark Highlands Food Pantry</div>`)[0];
    popup_553d768866714c2797fb22427a516398.setContent(html_189e9f347a824054a8ba9d77ef03d67b);


    marker_ed2f748ee02c4035881f3738a3d4b7ed.bindPopup(popup_553d768866714c2797fb22427a516398)
        ;




    var marker_bd0cef7c6887461d9d786fd6edf0e952 = L.marker(
        [55.6956787109375, -121.635299682617],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3ece7f877dc84abb856feb66087fb659 = L.popup({ "maxWidth": "100%" });


    var html_71e8efe91c9448d0bcd0682ff2505c9e = $(`<div id="html_71e8efe91c9448d0bcd0682ff2505c9e" style="width: 100.0%; height: 100.0%;">Tansi Friendship Centre</div>`)[0];
    popup_3ece7f877dc84abb856feb66087fb659.setContent(html_71e8efe91c9448d0bcd0682ff2505c9e);


    marker_bd0cef7c6887461d9d786fd6edf0e952.bindPopup(popup_3ece7f877dc84abb856feb66087fb659)
        ;




    var marker_4b4492fd8a5c453484f215954b82f162 = L.marker(
        [52.0571441650391, -107.983558654785],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dc5623e220fb4577a12cc7aef2e9da5c = L.popup({ "maxWidth": "100%" });


    var html_464e9ef3057a4928920ef812392032f9 = $(`<div id="html_464e9ef3057a4928920ef812392032f9" style="width: 100.0%; height: 100.0%;">Biggar \u0026 District Food for Thought Inc.</div>`)[0];
    popup_dc5623e220fb4577a12cc7aef2e9da5c.setContent(html_464e9ef3057a4928920ef812392032f9);


    marker_4b4492fd8a5c453484f215954b82f162.bindPopup(popup_dc5623e220fb4577a12cc7aef2e9da5c)
        ;




    var marker_3efc0bc21dfb43e1b4fdd2db0d647f28 = L.marker(
        [54.3985595703125, -126.652572631836],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d7bca29cdaa64498a9c99c8e300c38f8 = L.popup({ "maxWidth": "100%" });


    var html_cddfd71effaa478ab47f08173f57f28c = $(`<div id="html_cddfd71effaa478ab47f08173f57f28c" style="width: 100.0%; height: 100.0%;">Salvation Army BULKLEY VALLEY FOOD BANK</div>`)[0];
    popup_d7bca29cdaa64498a9c99c8e300c38f8.setContent(html_cddfd71effaa478ab47f08173f57f28c);


    marker_3efc0bc21dfb43e1b4fdd2db0d647f28.bindPopup(popup_d7bca29cdaa64498a9c99c8e300c38f8)
        ;




    var marker_40e37fa8bb294325a5de22941ca9198c = L.marker(
        [51.1833572387695, -120.123161315918],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c917a237791f4032b97430229aeee3d9 = L.popup({ "maxWidth": "100%" });


    var html_45f5772dad474fd39ff190a3d620cbb1 = $(`<div id="html_45f5772dad474fd39ff190a3d620cbb1" style="width: 100.0%; height: 100.0%;">BARRIERE \u0026 DISTRICT FOOD BANK</div>`)[0];
    popup_c917a237791f4032b97430229aeee3d9.setContent(html_45f5772dad474fd39ff190a3d620cbb1);


    marker_40e37fa8bb294325a5de22941ca9198c.bindPopup(popup_c917a237791f4032b97430229aeee3d9)
        ;




    var marker_15530114ed274059812877a16c1cb0ee = L.marker(
        [53.2643203735352, -113.549255371094],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_340787325e8143319c0ebe6c351d3d48 = L.popup({ "maxWidth": "100%" });


    var html_54a38c604893437bb68105520d0e90e4 = $(`<div id="html_54a38c604893437bb68105520d0e90e4" style="width: 100.0%; height: 100.0%;">Leduc \u0026 District Food Bank Association</div>`)[0];
    popup_340787325e8143319c0ebe6c351d3d48.setContent(html_54a38c604893437bb68105520d0e90e4);


    marker_15530114ed274059812877a16c1cb0ee.bindPopup(popup_340787325e8143319c0ebe6c351d3d48)
        ;




    var marker_80f4140f9e8b47bb90faf200746270df = L.marker(
        [54.1410903930664, -115.678085327148],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_eab0a94d74bd4525b0d5797ea3a491fb = L.popup({ "maxWidth": "100%" });


    var html_8eba8c28bae74026b4dfadb77c8d5643 = $(`<div id="html_8eba8c28bae74026b4dfadb77c8d5643" style="width: 100.0%; height: 100.0%;">Whitecourt Interagency Food Bank</div>`)[0];
    popup_eab0a94d74bd4525b0d5797ea3a491fb.setContent(html_8eba8c28bae74026b4dfadb77c8d5643);


    marker_80f4140f9e8b47bb90faf200746270df.bindPopup(popup_eab0a94d74bd4525b0d5797ea3a491fb)
        ;




    var marker_266140515b8e436a81cbf873489102b5 = L.marker(
        [53.5378074645996, -113.927108764648],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f6cff810be63407286bc913ca8213827 = L.popup({ "maxWidth": "100%" });


    var html_50b333aee3564f3ebb68ff346bbb3535 = $(`<div id="html_50b333aee3564f3ebb68ff346bbb3535" style="width: 100.0%; height: 100.0%;">Parkland Food Bank Society</div>`)[0];
    popup_f6cff810be63407286bc913ca8213827.setContent(html_50b333aee3564f3ebb68ff346bbb3535);


    marker_266140515b8e436a81cbf873489102b5.bindPopup(popup_f6cff810be63407286bc913ca8213827)
        ;




    var marker_84b6d257b046400a831b503cdee4fea1 = L.marker(
        [49.2385673522949, -121.763565063477],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e7bfa6329f2748c48216f3e6e5a37137 = L.popup({ "maxWidth": "100%" });


    var html_5f369333d3284620a1fb69167eb6ff20 = $(`<div id="html_5f369333d3284620a1fb69167eb6ff20" style="width: 100.0%; height: 100.0%;">Agassiz-Harrison Community Services</div>`)[0];
    popup_e7bfa6329f2748c48216f3e6e5a37137.setContent(html_5f369333d3284620a1fb69167eb6ff20);


    marker_84b6d257b046400a831b503cdee4fea1.bindPopup(popup_e7bfa6329f2748c48216f3e6e5a37137)
        ;




    var marker_8be5927897154555956596f7652dd5ab = L.marker(
        [50.4016494750977, -113.261787414551],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_72c8c3118c964b3e9ad91a5ad617bca7 = L.popup({ "maxWidth": "100%" });


    var html_3e1037f5591b421881fe4b456702bab2 = $(`<div id="html_3e1037f5591b421881fe4b456702bab2" style="width: 100.0%; height: 100.0%;">Vulcan Regional Food Bank Society</div>`)[0];
    popup_72c8c3118c964b3e9ad91a5ad617bca7.setContent(html_3e1037f5591b421881fe4b456702bab2);


    marker_8be5927897154555956596f7652dd5ab.bindPopup(popup_72c8c3118c964b3e9ad91a5ad617bca7)
        ;




    var marker_da177322eae048aba5339c8775dd1f08 = L.marker(
        [50.3868713378906, -97.2606887817383],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7c1119136ee9450686c2d4f65af1b41e = L.popup({ "maxWidth": "100%" });


    var html_b29905099d6f465e8f97a3ced2797fb8 = $(`<div id="html_b29905099d6f465e8f97a3ced2797fb8" style="width: 100.0%; height: 100.0%;">Teulon \u0026 District Food Bank \u0026 Services Inc.</div>`)[0];
    popup_7c1119136ee9450686c2d4f65af1b41e.setContent(html_b29905099d6f465e8f97a3ced2797fb8);


    marker_da177322eae048aba5339c8775dd1f08.bindPopup(popup_7c1119136ee9450686c2d4f65af1b41e)
        ;




    var marker_e02639a5a5d042259f75cdf5b285c039 = L.marker(
        [53.5601921081543, -113.573532104492],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e15b099d2ee44e4ebc7741f873aa34dc = L.popup({ "maxWidth": "100%" });


    var html_ec2f4290d3294a89a11c9b9ebbb214d1 = $(`<div id="html_ec2f4290d3294a89a11c9b9ebbb214d1" style="width: 100.0%; height: 100.0%;">Edmonton\u0027s Food Bank</div>`)[0];
    popup_e15b099d2ee44e4ebc7741f873aa34dc.setContent(html_ec2f4290d3294a89a11c9b9ebbb214d1);


    marker_e02639a5a5d042259f75cdf5b285c039.bindPopup(popup_e15b099d2ee44e4ebc7741f873aa34dc)
        ;




    var marker_2024a5e7d45340a6a54f663b10bfe509 = L.marker(
        [49.7321090698242, -114.88697052002],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dd381723cd7a4d42accacafb54645b26 = L.popup({ "maxWidth": "100%" });


    var html_2950e38c5d22402e8b5c40f9bcf1187d = $(`<div id="html_2950e38c5d22402e8b5c40f9bcf1187d" style="width: 100.0%; height: 100.0%;">Sparwood Food Bank</div>`)[0];
    popup_dd381723cd7a4d42accacafb54645b26.setContent(html_2950e38c5d22402e8b5c40f9bcf1187d);


    marker_2024a5e7d45340a6a54f663b10bfe509.bindPopup(popup_dd381723cd7a4d42accacafb54645b26)
        ;




    var marker_d2bc46d192c045c18a608b7f96005cc4 = L.marker(
        [44.153980255127, -79.8699798583984],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1791a8d15987463c90647d2cc51737e9 = L.popup({ "maxWidth": "100%" });


    var html_b5e573e52cda4f73b9d045ba43a4e275 = $(`<div id="html_b5e573e52cda4f73b9d045ba43a4e275" style="width: 100.0%; height: 100.0%;">The Good Shepherd Food Bank</div>`)[0];
    popup_1791a8d15987463c90647d2cc51737e9.setContent(html_b5e573e52cda4f73b9d045ba43a4e275);


    marker_d2bc46d192c045c18a608b7f96005cc4.bindPopup(popup_1791a8d15987463c90647d2cc51737e9)
        ;




    var marker_a6e56dfb4e28478da32e4944222ca6b2 = L.marker(
        [52.443733215332, -109.158317565918],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b194d030145b4bcfa6e7705a6ae12e26 = L.popup({ "maxWidth": "100%" });


    var html_cc7592733526436b95042003bb2c5646 = $(`<div id="html_cc7592733526436b95042003bb2c5646" style="width: 100.0%; height: 100.0%;">Unity and District Food Bank Inc.</div>`)[0];
    popup_b194d030145b4bcfa6e7705a6ae12e26.setContent(html_cc7592733526436b95042003bb2c5646);


    marker_a6e56dfb4e28478da32e4944222ca6b2.bindPopup(popup_b194d030145b4bcfa6e7705a6ae12e26)
        ;




    var marker_ce8ee121f4c649be96939cfbd7fd8847 = L.marker(
        [51.0890731811523, -115.361099243164],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1d24de018a184d31abf13bf665357f67 = L.popup({ "maxWidth": "100%" });


    var html_ce26bcd0e4de41df8808e27b8aaf2019 = $(`<div id="html_ce26bcd0e4de41df8808e27b8aaf2019" style="width: 100.0%; height: 100.0%;">Bow Valley Food Bank Society</div>`)[0];
    popup_1d24de018a184d31abf13bf665357f67.setContent(html_ce26bcd0e4de41df8808e27b8aaf2019);


    marker_ce8ee121f4c649be96939cfbd7fd8847.bindPopup(popup_1d24de018a184d31abf13bf665357f67)
        ;




    var marker_96565e8b4bf0498da10ac100329d236e = L.marker(
        [55.4295883178711, -116.490646362305],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2653bd1e03ce4d73a130b3c06a7c3d9d = L.popup({ "maxWidth": "100%" });


    var html_eb110f71d46546a39e9f5e672f4868f9 = $(`<div id="html_eb110f71d46546a39e9f5e672f4868f9" style="width: 100.0%; height: 100.0%;">High Prairie \u0026 District Food Bank Society</div>`)[0];
    popup_2653bd1e03ce4d73a130b3c06a7c3d9d.setContent(html_eb110f71d46546a39e9f5e672f4868f9);


    marker_96565e8b4bf0498da10ac100329d236e.bindPopup(popup_2653bd1e03ce4d73a130b3c06a7c3d9d)
        ;




    var marker_ad393504179f4da185467cd490d7bf9c = L.marker(
        [50.7212944030762, -127.492538452148],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_48a256747c5a476c9745ded00ce0beab = L.popup({ "maxWidth": "100%" });


    var html_48c344a94f41401f8dcea0aeb219aa4c = $(`<div id="html_48c344a94f41401f8dcea0aeb219aa4c" style="width: 100.0%; height: 100.0%;">Port Hardy Food Bank</div>`)[0];
    popup_48a256747c5a476c9745ded00ce0beab.setContent(html_48c344a94f41401f8dcea0aeb219aa4c);


    marker_ad393504179f4da185467cd490d7bf9c.bindPopup(popup_48a256747c5a476c9745ded00ce0beab)
        ;




    var marker_ae347f02ed1f48aeafb14b6970a45763 = L.marker(
        [50.0617294311523, -96.5158538818359],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f2e07640198a4499a2b2791adbfafb37 = L.popup({ "maxWidth": "100%" });


    var html_118b895ed2434e9d90bcbd831b39aaea = $(`<div id="html_118b895ed2434e9d90bcbd831b39aaea" style="width: 100.0%; height: 100.0%;">Beausejour Food Bank</div>`)[0];
    popup_f2e07640198a4499a2b2791adbfafb37.setContent(html_118b895ed2434e9d90bcbd831b39aaea);


    marker_ae347f02ed1f48aeafb14b6970a45763.bindPopup(popup_f2e07640198a4499a2b2791adbfafb37)
        ;




    var marker_be5930da06b74a38aa1d56d7172e2c99 = L.marker(
        [50.6230201721191, -97.0355072021484],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1f6be0ac23d1408782304ebaeae10c73 = L.popup({ "maxWidth": "100%" });


    var html_5eee2881c73b4e76bfe9c72d567481df = $(`<div id="html_5eee2881c73b4e76bfe9c72d567481df" style="width: 100.0%; height: 100.0%;">Gimli Evergreen</div>`)[0];
    popup_1f6be0ac23d1408782304ebaeae10c73.setContent(html_5eee2881c73b4e76bfe9c72d567481df);


    marker_be5930da06b74a38aa1d56d7172e2c99.bindPopup(popup_1f6be0ac23d1408782304ebaeae10c73)
        ;




    var marker_2a143dc7597f41e9bf32942fb14c8039 = L.marker(
        [54.7201080322266, -113.284736633301],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8d5a3c7112f44ee8a78ba88b811dea0b = L.popup({ "maxWidth": "100%" });


    var html_8ca37f44195b459599a215dacecaa443 = $(`<div id="html_8ca37f44195b459599a215dacecaa443" style="width: 100.0%; height: 100.0%;">Good Samaritan Ministries Association</div>`)[0];
    popup_8d5a3c7112f44ee8a78ba88b811dea0b.setContent(html_8ca37f44195b459599a215dacecaa443);


    marker_2a143dc7597f41e9bf32942fb14c8039.bindPopup(popup_8d5a3c7112f44ee8a78ba88b811dea0b)
        ;




    var marker_586dac6af0ec422fbc754fc13ac37f98 = L.marker(
        [50.2398529052734, -117.801109313965],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_698f8336f54a438895f59db9509b9271 = L.popup({ "maxWidth": "100%" });


    var html_c5f0bb5756264e569a81f83d28d0e307 = $(`<div id="html_c5f0bb5756264e569a81f83d28d0e307" style="width: 100.0%; height: 100.0%;">Arrow \u0026 Slocan Lakes Community Services</div>`)[0];
    popup_698f8336f54a438895f59db9509b9271.setContent(html_c5f0bb5756264e569a81f83d28d0e307);


    marker_586dac6af0ec422fbc754fc13ac37f98.bindPopup(popup_698f8336f54a438895f59db9509b9271)
        ;




    var marker_de8fe1426b194e98b6534263d68ebea6 = L.marker(
        [48.0044174194336, -66.6751480102539],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_40d0fe875af34f0281e3f25252044048 = L.popup({ "maxWidth": "100%" });


    var html_4e5981acbbb24ccc83137ca632d8e951 = $(`<div id="html_4e5981acbbb24ccc83137ca632d8e951" style="width: 100.0%; height: 100.0%;">Restigouche County Volunteer Action Assn</div>`)[0];
    popup_40d0fe875af34f0281e3f25252044048.setContent(html_4e5981acbbb24ccc83137ca632d8e951);


    marker_de8fe1426b194e98b6534263d68ebea6.bindPopup(popup_40d0fe875af34f0281e3f25252044048)
        ;




    var marker_0a05a84b74fb4a608d41cf4a7eabec7d = L.marker(
        [47.6031036376953, -53.2401161193848],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_75051e1b9b784bb1966ba627d6a61e7f = L.popup({ "maxWidth": "100%" });


    var html_783868148f1d4900a8994de218024a82 = $(`<div id="html_783868148f1d4900a8994de218024a82" style="width: 100.0%; height: 100.0%;">The Helping Hand</div>`)[0];
    popup_75051e1b9b784bb1966ba627d6a61e7f.setContent(html_783868148f1d4900a8994de218024a82);


    marker_0a05a84b74fb4a608d41cf4a7eabec7d.bindPopup(popup_75051e1b9b784bb1966ba627d6a61e7f)
        ;




    var marker_cb08bafab7434cc5bd3b4e32fee72d10 = L.marker(
        [51.2963066101074, -116.959526062012],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_915ec3a835a1485797b7942f448a2cf4 = L.popup({ "maxWidth": "100%" });


    var html_cb7ea0ea1225408c90e3b5d046dcf2f6 = $(`<div id="html_cb7ea0ea1225408c90e3b5d046dcf2f6" style="width: 100.0%; height: 100.0%;">Golden Food Bank</div>`)[0];
    popup_915ec3a835a1485797b7942f448a2cf4.setContent(html_cb7ea0ea1225408c90e3b5d046dcf2f6);


    marker_cb08bafab7434cc5bd3b4e32fee72d10.bindPopup(popup_915ec3a835a1485797b7942f448a2cf4)
        ;




    var marker_fa3a7365fa8d424c8c21c79c67fd8e41 = L.marker(
        [51.1615447998047, -114.850967407227],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c1e8942f5a174da09958947cb909226e = L.popup({ "maxWidth": "100%" });


    var html_69e0d23b71b2466389d66a0c01f287f1 = $(`<div id="html_69e0d23b71b2466389d66a0c01f287f1" style="width: 100.0%; height: 100.0%;">Iyahrhe Nakoda Food Bank Society</div>`)[0];
    popup_c1e8942f5a174da09958947cb909226e.setContent(html_69e0d23b71b2466389d66a0c01f287f1);


    marker_fa3a7365fa8d424c8c21c79c67fd8e41.bindPopup(popup_c1e8942f5a174da09958947cb909226e)
        ;




    var marker_b3315d0b542f412ba81a8b9f986287d8 = L.marker(
        [49.4679985046387, -113.30541229248],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_219a7736a4394eeba73f629b7fe7371c = L.popup({ "maxWidth": "100%" });


    var html_c4b305d6044642fa925b9bac0b47e8ef = $(`<div id="html_c4b305d6044642fa925b9bac0b47e8ef" style="width: 100.0%; height: 100.0%;">Kainai Food Bank Society</div>`)[0];
    popup_219a7736a4394eeba73f629b7fe7371c.setContent(html_c4b305d6044642fa925b9bac0b47e8ef);


    marker_b3315d0b542f412ba81a8b9f986287d8.bindPopup(popup_219a7736a4394eeba73f629b7fe7371c)
        ;




    var marker_d4250733c5ef4da0bf32cf9673e34cae = L.marker(
        [54.1154670715332, -112.471000671387],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d6a44dc3249543f4ab3d1ca4828736b7 = L.popup({ "maxWidth": "100%" });


    var html_41c1f7eda10d4ca498e33f26909fe331 = $(`<div id="html_41c1f7eda10d4ca498e33f26909fe331" style="width: 100.0%; height: 100.0%;">Smoky Lake Food Bank Society</div>`)[0];
    popup_d6a44dc3249543f4ab3d1ca4828736b7.setContent(html_41c1f7eda10d4ca498e33f26909fe331);


    marker_d4250733c5ef4da0bf32cf9673e34cae.bindPopup(popup_d6a44dc3249543f4ab3d1ca4828736b7)
        ;




    var marker_6ff59a37e29a4316b7f94b66f75a9c04 = L.marker(
        [42.9876441955566, -80.5981369018555],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_16876b9d6f224e02a5e0df4fb773c6bd = L.popup({ "maxWidth": "100%" });


    var html_bc878a147999405d8ac998ea9064bf3b = $(`<div id="html_bc878a147999405d8ac998ea9064bf3b" style="width: 100.0%; height: 100.0%;">Salvation Army Norwich Family Services \u0026 Food Bank</div>`)[0];
    popup_16876b9d6f224e02a5e0df4fb773c6bd.setContent(html_bc878a147999405d8ac998ea9064bf3b);


    marker_6ff59a37e29a4316b7f94b66f75a9c04.bindPopup(popup_16876b9d6f224e02a5e0df4fb773c6bd)
        ;




    var marker_b0e8d9147e00442489258ad7f0d1b02a = L.marker(
        [46.12841796875, -62.6432914733887],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_90054061a8a044bb9fa3c7e7a60d172f = L.popup({ "maxWidth": "100%" });


    var html_36ae5f7058584c81b4bd74a21dda01ba = $(`<div id="html_36ae5f7058584c81b4bd74a21dda01ba" style="width: 100.0%; height: 100.0%;">Southern Kings and Queens</div>`)[0];
    popup_90054061a8a044bb9fa3c7e7a60d172f.setContent(html_36ae5f7058584c81b4bd74a21dda01ba);


    marker_b0e8d9147e00442489258ad7f0d1b02a.bindPopup(popup_90054061a8a044bb9fa3c7e7a60d172f)
        ;




    var marker_cb83e434ce7c4d678c035402e71efed9 = L.marker(
        [55.2118492126465, -119.424713134766],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_da0697caa9b3486ca6c25d90106378ab = L.popup({ "maxWidth": "100%" });


    var html_078251f3d86b46899945c8109d23a7f1 = $(`<div id="html_078251f3d86b46899945c8109d23a7f1" style="width: 100.0%; height: 100.0%;">Beaverlodge Christmas Hamper \u0026 Food Bank</div>`)[0];
    popup_da0697caa9b3486ca6c25d90106378ab.setContent(html_078251f3d86b46899945c8109d23a7f1);


    marker_cb83e434ce7c4d678c035402e71efed9.bindPopup(popup_da0697caa9b3486ca6c25d90106378ab)
        ;




    var marker_884c7f7a03214327aed5802452963e1b = L.marker(
        [44.5358009338379, -78.5459747314453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3084eb46d0a945849d4719967f7aa983 = L.popup({ "maxWidth": "100%" });


    var html_45496b270b934cfcb86c4f0c394b8ee9 = $(`<div id="html_45496b270b934cfcb86c4f0c394b8ee9" style="width: 100.0%; height: 100.0%;">Bobcaygeon Helps Food Bank</div>`)[0];
    popup_3084eb46d0a945849d4719967f7aa983.setContent(html_45496b270b934cfcb86c4f0c394b8ee9);


    marker_884c7f7a03214327aed5802452963e1b.bindPopup(popup_3084eb46d0a945849d4719967f7aa983)
        ;




    var marker_7ab5e4fee24c41acb22942c2c982bb61 = L.marker(
        [47.1648979187012, -55.1596298217773],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ffba536e85e24c88b4c4d54f52ad1632 = L.popup({ "maxWidth": "100%" });


    var html_dd1681ad93a143849bc98ec51fd3ab81 = $(`<div id="html_dd1681ad93a143849bc98ec51fd3ab81" style="width: 100.0%; height: 100.0%;">Sacred Heart Family Aid Food Bank</div>`)[0];
    popup_ffba536e85e24c88b4c4d54f52ad1632.setContent(html_dd1681ad93a143849bc98ec51fd3ab81);


    marker_7ab5e4fee24c41acb22942c2c982bb61.bindPopup(popup_ffba536e85e24c88b4c4d54f52ad1632)
        ;




    var marker_08ae2da14eb14752a8ecc111cd6d5de8 = L.marker(
        [47.7412071228027, -53.2023429870605],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4d6f1643b9774976a6c7574e739787be = L.popup({ "maxWidth": "100%" });


    var html_0444b85ae46444e8863bea5dc084b585 = $(`<div id="html_0444b85ae46444e8863bea5dc084b585" style="width: 100.0%; height: 100.0%;">Salvation Army Carbonear</div>`)[0];
    popup_4d6f1643b9774976a6c7574e739787be.setContent(html_0444b85ae46444e8863bea5dc084b585);


    marker_08ae2da14eb14752a8ecc111cd6d5de8.bindPopup(popup_4d6f1643b9774976a6c7574e739787be)
        ;




    var marker_6778d34546dd4d63be308200e586f843 = L.marker(
        [49.0612297058105, -81.0260391235352],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_af6ad5f695f64c429b4c0590274d1237 = L.popup({ "maxWidth": "100%" });


    var html_8622a208b6444d5fbb25c9c36841a133 = $(`<div id="html_8622a208b6444d5fbb25c9c36841a133" style="width: 100.0%; height: 100.0%;">Cochrane Food Bank Inc.</div>`)[0];
    popup_af6ad5f695f64c429b4c0590274d1237.setContent(html_8622a208b6444d5fbb25c9c36841a133);


    marker_6778d34546dd4d63be308200e586f843.bindPopup(popup_af6ad5f695f64c429b4c0590274d1237)
        ;




    var marker_121c172cf1eb44f8ba34b13f7dce0a31 = L.marker(
        [42.8617210388184, -80.7257690429688],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7e17b46d2f5c4c7b91c8171317d0a0c0 = L.popup({ "maxWidth": "100%" });


    var html_d27b10a39ca7445cb9adeb18ba5ec71c = $(`<div id="html_d27b10a39ca7445cb9adeb18ba5ec71c" style="width: 100.0%; height: 100.0%;">Helping Hand Food Bank</div>`)[0];
    popup_7e17b46d2f5c4c7b91c8171317d0a0c0.setContent(html_d27b10a39ca7445cb9adeb18ba5ec71c);


    marker_121c172cf1eb44f8ba34b13f7dce0a31.bindPopup(popup_7e17b46d2f5c4c7b91c8171317d0a0c0)
        ;




    var marker_b58e239bbb3946179c32302caf74ed06 = L.marker(
        [46.1823463439941, -82.9014434814453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4597c4fb7805460280f2f79d3b19b55b = L.popup({ "maxWidth": "100%" });


    var html_fbcb7c539e9143bd8311fd4da3a0aa82 = $(`<div id="html_fbcb7c539e9143bd8311fd4da3a0aa82" style="width: 100.0%; height: 100.0%;">Blind River Emergency Food Bank</div>`)[0];
    popup_4597c4fb7805460280f2f79d3b19b55b.setContent(html_fbcb7c539e9143bd8311fd4da3a0aa82);


    marker_b58e239bbb3946179c32302caf74ed06.bindPopup(popup_4597c4fb7805460280f2f79d3b19b55b)
        ;




    var marker_13d1e2ed618546319b858c481b3c3bc6 = L.marker(
        [47.0609741210938, -55.1498870849609],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_55b9b1534e38485ca27b6728a4c09862 = L.popup({ "maxWidth": "100%" });


    var html_1838e1e236524f6a92d1ec662390cb50 = $(`<div id="html_1838e1e236524f6a92d1ec662390cb50" style="width: 100.0%; height: 100.0%;">St. Patricks Parish food bank</div>`)[0];
    popup_55b9b1534e38485ca27b6728a4c09862.setContent(html_1838e1e236524f6a92d1ec662390cb50);


    marker_13d1e2ed618546319b858c481b3c3bc6.bindPopup(popup_55b9b1534e38485ca27b6728a4c09862)
        ;




    var marker_fd4dce5be5e34b029fb92831167c98de = L.marker(
        [44.3802070617676, -79.7015991210938],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_afd78749408b4ee6a234d43b9f23fe0e = L.popup({ "maxWidth": "100%" });


    var html_0b19a4daeef640bebbe3a94f731fa3b1 = $(`<div id="html_0b19a4daeef640bebbe3a94f731fa3b1" style="width: 100.0%; height: 100.0%;">Barrie Food Bank</div>`)[0];
    popup_afd78749408b4ee6a234d43b9f23fe0e.setContent(html_0b19a4daeef640bebbe3a94f731fa3b1);


    marker_fd4dce5be5e34b029fb92831167c98de.bindPopup(popup_afd78749408b4ee6a234d43b9f23fe0e)
        ;




    var marker_3d131cd83b614c5ab22dba2248f63a47 = L.marker(
        [43.4209327697754, -81.625129699707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_54aef740e61945318bdf1827034c9330 = L.popup({ "maxWidth": "100%" });


    var html_b7c35f0bcd9742cbbe13c3b17cb4f191 = $(`<div id="html_b7c35f0bcd9742cbbe13c3b17cb4f191" style="width: 100.0%; height: 100.0%;">Blessings Community Store \u0026 Food Bank</div>`)[0];
    popup_54aef740e61945318bdf1827034c9330.setContent(html_b7c35f0bcd9742cbbe13c3b17cb4f191);


    marker_3d131cd83b614c5ab22dba2248f63a47.bindPopup(popup_54aef740e61945318bdf1827034c9330)
        ;




    var marker_0f50b8f0f1054070a87f0cbbc1bf5373 = L.marker(
        [44.1328392028809, -81.1575469970703],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2360e42e8fc8481fa22d55206fbe96b7 = L.popup({ "maxWidth": "100%" });


    var html_436762b881194cebbf1cda7ac7027b2f = $(`<div id="html_436762b881194cebbf1cda7ac7027b2f" style="width: 100.0%; height: 100.0%;">Walkerton \u0026 District Food Bank</div>`)[0];
    popup_2360e42e8fc8481fa22d55206fbe96b7.setContent(html_436762b881194cebbf1cda7ac7027b2f);


    marker_0f50b8f0f1054070a87f0cbbc1bf5373.bindPopup(popup_2360e42e8fc8481fa22d55206fbe96b7)
        ;




    var marker_21ca188415f5466ba35378a0ca30cc14 = L.marker(
        [49.398494720459, -123.450729370117],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_58488cc6092e4ab384d1d2b04ff7ea13 = L.popup({ "maxWidth": "100%" });


    var html_8b0cca4b526d4cd9be95e04c4ced2f2a = $(`<div id="html_8b0cca4b526d4cd9be95e04c4ced2f2a" style="width: 100.0%; height: 100.0%;">HARVEST OF HOPE FOOD BANK (Salvation Army)</div>`)[0];
    popup_58488cc6092e4ab384d1d2b04ff7ea13.setContent(html_8b0cca4b526d4cd9be95e04c4ced2f2a);


    marker_21ca188415f5466ba35378a0ca30cc14.bindPopup(popup_58488cc6092e4ab384d1d2b04ff7ea13)
        ;




    var marker_86408c08730949dc92e83143bd818df9 = L.marker(
        [51.4675254821777, -109.154685974121],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d3467569452d4584b5e537e80f114a85 = L.popup({ "maxWidth": "100%" });


    var html_6ea28362855343d7b447e2cee4fab76c = $(`<div id="html_6ea28362855343d7b447e2cee4fab76c" style="width: 100.0%; height: 100.0%;">Kindersley \u0026 District Food Bank</div>`)[0];
    popup_d3467569452d4584b5e537e80f114a85.setContent(html_6ea28362855343d7b447e2cee4fab76c);


    marker_86408c08730949dc92e83143bd818df9.bindPopup(popup_d3467569452d4584b5e537e80f114a85)
        ;




    var marker_c3eae391883640c2b78b5150a5daa005 = L.marker(
        [56.0679359436035, -118.381790161133],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d3041a78ed864ddbb3bf4e897e4248b5 = L.popup({ "maxWidth": "100%" });


    var html_0c77ad9726b042068f17d93b64d7d0ff = $(`<div id="html_0c77ad9726b042068f17d93b64d7d0ff" style="width: 100.0%; height: 100.0%;">Fairview Food Bank Association</div>`)[0];
    popup_d3041a78ed864ddbb3bf4e897e4248b5.setContent(html_0c77ad9726b042068f17d93b64d7d0ff);


    marker_c3eae391883640c2b78b5150a5daa005.bindPopup(popup_d3041a78ed864ddbb3bf4e897e4248b5)
        ;




    var marker_2cd09bb2020b4425936f7f9299803f95 = L.marker(
        [44.7108306884766, -75.514518737793],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_aada2e5df1824c02a013bef09d5602cd = L.popup({ "maxWidth": "100%" });


    var html_ba2bf907887942009c6647f2a2f38ffd = $(`<div id="html_ba2bf907887942009c6647f2a2f38ffd" style="width: 100.0%; height: 100.0%;">South Grenville  Food For All Food Bank</div>`)[0];
    popup_aada2e5df1824c02a013bef09d5602cd.setContent(html_ba2bf907887942009c6647f2a2f38ffd);


    marker_2cd09bb2020b4425936f7f9299803f95.bindPopup(popup_aada2e5df1824c02a013bef09d5602cd)
        ;




    var marker_b0b04e3d49bc4a408fef042681c77a40 = L.marker(
        [43.1895713806152, -79.4774169921875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_64319baa32e44a07b9bd282b82498317 = L.popup({ "maxWidth": "100%" });


    var html_78dde3ebefa042568d1aa6865fb509d7 = $(`<div id="html_78dde3ebefa042568d1aa6865fb509d7" style="width: 100.0%; height: 100.0%;">Community Care of West Niagara</div>`)[0];
    popup_64319baa32e44a07b9bd282b82498317.setContent(html_78dde3ebefa042568d1aa6865fb509d7);


    marker_b0b04e3d49bc4a408fef042681c77a40.bindPopup(popup_64319baa32e44a07b9bd282b82498317)
        ;




    var marker_2f18e13bffe54c2bbe5494927b213332 = L.marker(
        [48.9530601501465, -57.9453125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2c8f9129879b4df2839c9957621a1d34 = L.popup({ "maxWidth": "100%" });


    var html_c74b5521b4a844e5bbbd3fe0b9c730bb = $(`<div id="html_c74b5521b4a844e5bbbd3fe0b9c730bb" style="width: 100.0%; height: 100.0%;">The Food Bank Network of the Bay of Island Ministerial Assoc</div>`)[0];
    popup_2c8f9129879b4df2839c9957621a1d34.setContent(html_c74b5521b4a844e5bbbd3fe0b9c730bb);


    marker_2f18e13bffe54c2bbe5494927b213332.bindPopup(popup_2c8f9129879b4df2839c9957621a1d34)
        ;




    var marker_daade02c3ea24cf3bdb7768f354baca0 = L.marker(
        [44.3584022521973, -81.4059219360352],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_31ca72013ee34094b7df950d550c7a5f = L.popup({ "maxWidth": "100%" });


    var html_b01f3c281bc1460b9ed6077860fc1bcf = $(`<div id="html_b01f3c281bc1460b9ed6077860fc1bcf" style="width: 100.0%; height: 100.0%;">Salvation Army Port Elgin (Saugeen Shores Food bank)</div>`)[0];
    popup_31ca72013ee34094b7df950d550c7a5f.setContent(html_b01f3c281bc1460b9ed6077860fc1bcf);


    marker_daade02c3ea24cf3bdb7768f354baca0.bindPopup(popup_31ca72013ee34094b7df950d550c7a5f)
        ;




    var marker_269d61bfe6794640a027c61f00f1700e = L.marker(
        [53.0182113647461, -112.829978942871],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_63680b635da345d69c12aac0d6a7a816 = L.popup({ "maxWidth": "100%" });


    var html_0f6f464fe0c04ca6985e18fd4cd4a5b8 = $(`<div id="html_0f6f464fe0c04ca6985e18fd4cd4a5b8" style="width: 100.0%; height: 100.0%;">Camrose Neighbor Aid Center Inc.</div>`)[0];
    popup_63680b635da345d69c12aac0d6a7a816.setContent(html_0f6f464fe0c04ca6985e18fd4cd4a5b8);


    marker_269d61bfe6794640a027c61f00f1700e.bindPopup(popup_63680b635da345d69c12aac0d6a7a816)
        ;




    var marker_0efe8d865136491196886d6c9a3c531c = L.marker(
        [44.1686820983887, -77.3926849365234],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3c7a74a777374d52bf686bbadd07e499 = L.popup({ "maxWidth": "100%" });


    var html_ae7843c396b746e78cf57136c180a8ed = $(`<div id="html_ae7843c396b746e78cf57136c180a8ed" style="width: 100.0%; height: 100.0%;">Gleaners Food Bank</div>`)[0];
    popup_3c7a74a777374d52bf686bbadd07e499.setContent(html_ae7843c396b746e78cf57136c180a8ed);


    marker_0efe8d865136491196886d6c9a3c531c.bindPopup(popup_3c7a74a777374d52bf686bbadd07e499)
        ;




    var marker_77f6c166c9e049a48971ede02e288d08 = L.marker(
        [49.7419204711914, -123.112060546875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6eff6126b6ec48319489964fec8ca093 = L.popup({ "maxWidth": "100%" });


    var html_06967532ac8245df95ef6f89e549a848 = $(`<div id="html_06967532ac8245df95ef6f89e549a848" style="width: 100.0%; height: 100.0%;">Squamish Food Bank</div>`)[0];
    popup_6eff6126b6ec48319489964fec8ca093.setContent(html_06967532ac8245df95ef6f89e549a848);


    marker_77f6c166c9e049a48971ede02e288d08.bindPopup(popup_6eff6126b6ec48319489964fec8ca093)
        ;




    var marker_a3bf75d364ac4377a7051cdeb604eb61 = L.marker(
        [52.1701431274414, -105.113166809082],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_08cbdf07affa46ff875d6a3722f2e694 = L.popup({ "maxWidth": "100%" });


    var html_426787a95a6c4b878e42f18dd4e1c6b5 = $(`<div id="html_426787a95a6c4b878e42f18dd4e1c6b5" style="width: 100.0%; height: 100.0%;">Humboldt and District Food Bank</div>`)[0];
    popup_08cbdf07affa46ff875d6a3722f2e694.setContent(html_426787a95a6c4b878e42f18dd4e1c6b5);


    marker_a3bf75d364ac4377a7051cdeb604eb61.bindPopup(popup_08cbdf07affa46ff875d6a3722f2e694)
        ;




    var marker_deedf1aeaf074517a0ee203417edf349 = L.marker(
        [47.5917930603027, -52.7102165222168],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f1a0465e01094c63bf70a28471b10edd = L.popup({ "maxWidth": "100%" });


    var html_641ae753e9294edb914b5f04cee6c8b5 = $(`<div id="html_641ae753e9294edb914b5f04cee6c8b5" style="width: 100.0%; height: 100.0%;">Single Parent Association of Newfoundland</div>`)[0];
    popup_f1a0465e01094c63bf70a28471b10edd.setContent(html_641ae753e9294edb914b5f04cee6c8b5);


    marker_deedf1aeaf074517a0ee203417edf349.bindPopup(popup_f1a0465e01094c63bf70a28471b10edd)
        ;




    var marker_a1400e1fb7184d4ea0012d06193df61b = L.marker(
        [51.7694892883301, -104.185546875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dda2ad256e544545a8ef2063b6420241 = L.popup({ "maxWidth": "100%" });


    var html_67a53c26afcd41209b1a6fd0161ee6c7 = $(`<div id="html_67a53c26afcd41209b1a6fd0161ee6c7" style="width: 100.0%; height: 100.0%;">Wynyard and District Food Bank</div>`)[0];
    popup_dda2ad256e544545a8ef2063b6420241.setContent(html_67a53c26afcd41209b1a6fd0161ee6c7);


    marker_a1400e1fb7184d4ea0012d06193df61b.bindPopup(popup_dda2ad256e544545a8ef2063b6420241)
        ;




    var marker_e20706d0db194aa2aade4ad25e2cae4b = L.marker(
        [48.9576759338379, -54.600757598877],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f710c12217f44407bfdf4c59437e060c = L.popup({ "maxWidth": "100%" });


    var html_d4691caa51214529b6b3640753788dde = $(`<div id="html_d4691caa51214529b6b3640753788dde" style="width: 100.0%; height: 100.0%;">Gander \u0026 Area Food Bank</div>`)[0];
    popup_f710c12217f44407bfdf4c59437e060c.setContent(html_d4691caa51214529b6b3640753788dde);


    marker_e20706d0db194aa2aade4ad25e2cae4b.bindPopup(popup_f710c12217f44407bfdf4c59437e060c)
        ;




    var marker_a09f360701fc49f5a4ed284e7f1bd67a = L.marker(
        [51.555492401123, -107.991035461426],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_69f22dbc249a4113a09ff8301eeece23 = L.popup({ "maxWidth": "100%" });


    var html_53ea07038b244ace93c3730bb610ef0a = $(`<div id="html_53ea07038b244ace93c3730bb610ef0a" style="width: 100.0%; height: 100.0%;">Rosetown and District food bank</div>`)[0];
    popup_69f22dbc249a4113a09ff8301eeece23.setContent(html_53ea07038b244ace93c3730bb610ef0a);


    marker_a09f360701fc49f5a4ed284e7f1bd67a.bindPopup(popup_69f22dbc249a4113a09ff8301eeece23)
        ;




    var marker_8c5765da60fb41c791d9ac02dfef4832 = L.marker(
        [45.2698020935059, -66.0579452514648],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_33ef480adec54cc7a013acf45d86baf8 = L.popup({ "maxWidth": "100%" });


    var html_9bdd1bc844944762a95263484569afdf = $(`<div id="html_9bdd1bc844944762a95263484569afdf" style="width: 100.0%; height: 100.0%;">Saint John North End Food Association</div>`)[0];
    popup_33ef480adec54cc7a013acf45d86baf8.setContent(html_9bdd1bc844944762a95263484569afdf);


    marker_8c5765da60fb41c791d9ac02dfef4832.bindPopup(popup_33ef480adec54cc7a013acf45d86baf8)
        ;




    var marker_61d437f8fc8f4ba0af4c89c5fca90888 = L.marker(
        [49.5052375793457, -115.05989074707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_88900de98f304da9959349f9a420927c = L.popup({ "maxWidth": "100%" });


    var html_db3a6512d33c478f8a15fd84f9d01fb6 = $(`<div id="html_db3a6512d33c478f8a15fd84f9d01fb6" style="width: 100.0%; height: 100.0%;">Salvation Army FERNIE FAMILY SERVICES</div>`)[0];
    popup_88900de98f304da9959349f9a420927c.setContent(html_db3a6512d33c478f8a15fd84f9d01fb6);


    marker_61d437f8fc8f4ba0af4c89c5fca90888.bindPopup(popup_88900de98f304da9959349f9a420927c)
        ;




    var marker_ad405a514a6740ddad76d52fa7ccdecc = L.marker(
        [43.6476173400879, -80.3213119506836],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2d4c9de0c5404c268e25853387cdbaf6 = L.popup({ "maxWidth": "100%" });


    var html_738e4907a1b24cb282889e403c7d023b = $(`<div id="html_738e4907a1b24cb282889e403c7d023b" style="width: 100.0%; height: 100.0%;">Centre Wellington Food Bank</div>`)[0];
    popup_2d4c9de0c5404c268e25853387cdbaf6.setContent(html_738e4907a1b24cb282889e403c7d023b);


    marker_ad405a514a6740ddad76d52fa7ccdecc.bindPopup(popup_2d4c9de0c5404c268e25853387cdbaf6)
        ;




    var marker_e41f091f7cb64590a303d73dc66d8c22 = L.marker(
        [50.9985275268555, -118.198669433594],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1f8f59ea79cf4891b5df9d563dcc6db0 = L.popup({ "maxWidth": "100%" });


    var html_37e060cccf6242efa0f6b8df0cf9039b = $(`<div id="html_37e060cccf6242efa0f6b8df0cf9039b" style="width: 100.0%; height: 100.0%;">COMMUNITY CONNECTIONS FOOD BANK</div>`)[0];
    popup_1f8f59ea79cf4891b5df9d563dcc6db0.setContent(html_37e060cccf6242efa0f6b8df0cf9039b);


    marker_e41f091f7cb64590a303d73dc66d8c22.bindPopup(popup_1f8f59ea79cf4891b5df9d563dcc6db0)
        ;




    var marker_070ee225d4394fb2b05a9c4ebb0b7502 = L.marker(
        [50.564453125, -111.898132324219],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_81b18e684f3846ce894e56d4992bbbaa = L.popup({ "maxWidth": "100%" });


    var html_2305403b0ae342b59dc5c0d3796d9acd = $(`<div id="html_2305403b0ae342b59dc5c0d3796d9acd" style="width: 100.0%; height: 100.0%;">Brooks Food Bank Foundation</div>`)[0];
    popup_81b18e684f3846ce894e56d4992bbbaa.setContent(html_2305403b0ae342b59dc5c0d3796d9acd);


    marker_070ee225d4394fb2b05a9c4ebb0b7502.bindPopup(popup_81b18e684f3846ce894e56d4992bbbaa)
        ;




    var marker_c760c3724ee04f7ca223b3d684579d33 = L.marker(
        [53.7015838623047, -114.194564819336],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5ceccca6bf2445119986e5c92b1f4eee = L.popup({ "maxWidth": "100%" });


    var html_2f19bac712e64c44bcb2531c03f20110 = $(`<div id="html_2f19bac712e64c44bcb2531c03f20110" style="width: 100.0%; height: 100.0%;">Lac Ste. Anne East Food Bank Society</div>`)[0];
    popup_5ceccca6bf2445119986e5c92b1f4eee.setContent(html_2f19bac712e64c44bcb2531c03f20110);


    marker_c760c3724ee04f7ca223b3d684579d33.bindPopup(popup_5ceccca6bf2445119986e5c92b1f4eee)
        ;




    var marker_4ec7502ab31247a2b0c1831e0a7d5178 = L.marker(
        [50.4986190795898, -121.032844543457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ce3aac8376584c98a2194677cd3781e9 = L.popup({ "maxWidth": "100%" });


    var html_cc8c29412c3d41c293d1eded8e9a8c13 = $(`<div id="html_cc8c29412c3d41c293d1eded8e9a8c13" style="width: 100.0%; height: 100.0%;">LOGAN LAKE FOOD BANK (Highland Valley Food bank)</div>`)[0];
    popup_ce3aac8376584c98a2194677cd3781e9.setContent(html_cc8c29412c3d41c293d1eded8e9a8c13);


    marker_4ec7502ab31247a2b0c1831e0a7d5178.bindPopup(popup_ce3aac8376584c98a2194677cd3781e9)
        ;




    var marker_278b5cdcccf9470ca8a525014776abfe = L.marker(
        [49.6817359924316, -124.999641418457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c63e03957c5b44939656ca2678bf7e91 = L.popup({ "maxWidth": "100%" });


    var html_49bb5bffe9314873a7cc8410c5799a6c = $(`<div id="html_49bb5bffe9314873a7cc8410c5799a6c" style="width: 100.0%; height: 100.0%;">Comox Valley Food Bank</div>`)[0];
    popup_c63e03957c5b44939656ca2678bf7e91.setContent(html_49bb5bffe9314873a7cc8410c5799a6c);


    marker_278b5cdcccf9470ca8a525014776abfe.bindPopup(popup_c63e03957c5b44939656ca2678bf7e91)
        ;




    var marker_85d73ba67f61411e91d8757feadb2d91 = L.marker(
        [52.8748550415039, -118.083953857422],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5e5c3387f1f146538a100295b08df268 = L.popup({ "maxWidth": "100%" });


    var html_41a22498c2bf477f812518298ac89be8 = $(`<div id="html_41a22498c2bf477f812518298ac89be8" style="width: 100.0%; height: 100.0%;">Jasper Food Bank Society</div>`)[0];
    popup_5e5c3387f1f146538a100295b08df268.setContent(html_41a22498c2bf477f812518298ac89be8);


    marker_85d73ba67f61411e91d8757feadb2d91.bindPopup(popup_5e5c3387f1f146538a100295b08df268)
        ;




    var marker_3122d5c72ca543ad93d4b6d85fda264d = L.marker(
        [51.8480834960938, -105.028816223145],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_004e3d2df8704bdfa9674238beca5e4b = L.popup({ "maxWidth": "100%" });


    var html_767172f30d0247009730bbd7ccb578e2 = $(`<div id="html_767172f30d0247009730bbd7ccb578e2" style="width: 100.0%; height: 100.0%;">Lanigan \u0026 District Food Bank</div>`)[0];
    popup_004e3d2df8704bdfa9674238beca5e4b.setContent(html_767172f30d0247009730bbd7ccb578e2);


    marker_3122d5c72ca543ad93d4b6d85fda264d.bindPopup(popup_004e3d2df8704bdfa9674238beca5e4b)
        ;




    var marker_f58f01741a954065a8a383a4df7d42c3 = L.marker(
        [51.4485092163086, -112.833625793457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2d65303467444a59a65ea8305721ab26 = L.popup({ "maxWidth": "100%" });


    var html_0e60f23c9d6a458587eeef934e3e981e = $(`<div id="html_0e60f23c9d6a458587eeef934e3e981e" style="width: 100.0%; height: 100.0%;">Salvation Army - Drumheller</div>`)[0];
    popup_2d65303467444a59a65ea8305721ab26.setContent(html_0e60f23c9d6a458587eeef934e3e981e);


    marker_f58f01741a954065a8a383a4df7d42c3.bindPopup(popup_2d65303467444a59a65ea8305721ab26)
        ;




    var marker_2098ab5bd1c5494682d0787a44167353 = L.marker(
        [47.2591819763184, -53.9908332824707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_485250aae5c74e6c97304fd84867b287 = L.popup({ "maxWidth": "100%" });


    var html_7ac44ebbd2cd4060839857b138137896 = $(`<div id="html_7ac44ebbd2cd4060839857b138137896" style="width: 100.0%; height: 100.0%;">Placentia \u0026 Area Community Food Bank</div>`)[0];
    popup_485250aae5c74e6c97304fd84867b287.setContent(html_7ac44ebbd2cd4060839857b138137896);


    marker_2098ab5bd1c5494682d0787a44167353.bindPopup(popup_485250aae5c74e6c97304fd84867b287)
        ;




    var marker_e5aa20809494444faf59d5a686020dd9 = L.marker(
        [44.6061973571777, -80.5933151245117],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e3c05282a47740509a0aa61a2d090ae3 = L.popup({ "maxWidth": "100%" });


    var html_77b8c7358c344f3481688f125c6282dd = $(`<div id="html_77b8c7358c344f3481688f125c6282dd" style="width: 100.0%; height: 100.0%;">Golden Town Outreach</div>`)[0];
    popup_e3c05282a47740509a0aa61a2d090ae3.setContent(html_77b8c7358c344f3481688f125c6282dd);


    marker_e5aa20809494444faf59d5a686020dd9.bindPopup(popup_e3c05282a47740509a0aa61a2d090ae3)
        ;




    var marker_ea54956fa7534ac8bff021f1d40d9c1c = L.marker(
        [49.8782920837402, -112.779083251953],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8abf12bc1e364dac862be175caa960c8 = L.popup({ "maxWidth": "100%" });


    var html_4fb72acd742f4358937bc346ab4e446b = $(`<div id="html_4fb72acd742f4358937bc346ab4e446b" style="width: 100.0%; height: 100.0%;">North County Interfaith Outreach Society</div>`)[0];
    popup_8abf12bc1e364dac862be175caa960c8.setContent(html_4fb72acd742f4358937bc346ab4e446b);


    marker_ea54956fa7534ac8bff021f1d40d9c1c.bindPopup(popup_8abf12bc1e364dac862be175caa960c8)
        ;




    var marker_1ade8cde6f10462aaa4bbfbe2d94d253 = L.marker(
        [49.1953735351563, -117.278518676758],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_79ff4ef3c2eb43278f2782d6a6fa9825 = L.popup({ "maxWidth": "100%" });


    var html_7c6f3a9d494d48d68accf178b20e7712 = $(`<div id="html_7c6f3a9d494d48d68accf178b20e7712" style="width: 100.0%; height: 100.0%;">Salmo Food Bank</div>`)[0];
    popup_79ff4ef3c2eb43278f2782d6a6fa9825.setContent(html_7c6f3a9d494d48d68accf178b20e7712);


    marker_1ade8cde6f10462aaa4bbfbe2d94d253.bindPopup(popup_79ff4ef3c2eb43278f2782d6a6fa9825)
        ;




    var marker_c97efe4eca814012a2d60fc7c3920445 = L.marker(
        [51.7873916625977, -114.116706848145],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_20b28616709d4c61ad4e96e8bc88734a = L.popup({ "maxWidth": "100%" });


    var html_67573ebf695044d8bb51329b0ed45b88 = $(`<div id="html_67573ebf695044d8bb51329b0ed45b88" style="width: 100.0%; height: 100.0%;">Mountain View Food Bank Society</div>`)[0];
    popup_20b28616709d4c61ad4e96e8bc88734a.setContent(html_67573ebf695044d8bb51329b0ed45b88);


    marker_c97efe4eca814012a2d60fc7c3920445.bindPopup(popup_20b28616709d4c61ad4e96e8bc88734a)
        ;




    var marker_9ded2f6476dc47db8d6158cffb11fd4e = L.marker(
        [50.0408248901367, -125.214782714844],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5cabfebc682242e0a58f5db87190fd7f = L.popup({ "maxWidth": "100%" });


    var html_8ad7beff71cd4d94b6dcdd6f12ee7d9c = $(`<div id="html_8ad7beff71cd4d94b6dcdd6f12ee7d9c" style="width: 100.0%; height: 100.0%;">Quadra Island Food Bank</div>`)[0];
    popup_5cabfebc682242e0a58f5db87190fd7f.setContent(html_8ad7beff71cd4d94b6dcdd6f12ee7d9c);


    marker_9ded2f6476dc47db8d6158cffb11fd4e.bindPopup(popup_5cabfebc682242e0a58f5db87190fd7f)
        ;




    var marker_ca0e128889054f53b1169a4466a208f1 = L.marker(
        [53.0951321, -111.7784978],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_359e937961784ba6bceb06979f41dd1b = L.popup({ "maxWidth": "100%" });


    var html_7245277245854011b152508e7fd7c34b = $(`<div id="html_7245277245854011b152508e7fd7c34b" style="width: 100.0%; height: 100.0%;">Viking and Holden Area Food Bank</div>`)[0];
    popup_359e937961784ba6bceb06979f41dd1b.setContent(html_7245277245854011b152508e7fd7c34b);


    marker_ca0e128889054f53b1169a4466a208f1.bindPopup(popup_359e937961784ba6bceb06979f41dd1b)
        ;




    var marker_e4039069879d42ec810b31bb6ad63ec1 = L.marker(
        [47.0967750549316, -55.2029151916504],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e094fafbe3cd4ee7ae3ad4e67e7f31c3 = L.popup({ "maxWidth": "100%" });


    var html_365e660c359342dbb6ab0338710218cd = $(`<div id="html_365e660c359342dbb6ab0338710218cd" style="width: 100.0%; height: 100.0%;">Salvation Army Marystown Family Services</div>`)[0];
    popup_e094fafbe3cd4ee7ae3ad4e67e7f31c3.setContent(html_365e660c359342dbb6ab0338710218cd);


    marker_e4039069879d42ec810b31bb6ad63ec1.bindPopup(popup_e094fafbe3cd4ee7ae3ad4e67e7f31c3)
        ;




    var marker_c56f9b3fddad41f4adb2a3b3ca8f78c3 = L.marker(
        [54.1239051818848, -114.412803649902],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_01dcbb2760dc4844983ec17357ffb754 = L.popup({ "maxWidth": "100%" });


    var html_ced654ed3c74486eb849e486422db083 = $(`<div id="html_ced654ed3c74486eb849e486422db083" style="width: 100.0%; height: 100.0%;">Barrhead Family and Community Support Services</div>`)[0];
    popup_01dcbb2760dc4844983ec17357ffb754.setContent(html_ced654ed3c74486eb849e486422db083);


    marker_c56f9b3fddad41f4adb2a3b3ca8f78c3.bindPopup(popup_01dcbb2760dc4844983ec17357ffb754)
        ;




    var marker_c20f12b00bbe439a8c58edb971b338b4 = L.marker(
        [44.2628288269043, -79.0663146972656],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2dc534a8b6f848188051bc0b96dfce95 = L.popup({ "maxWidth": "100%" });


    var html_a6b1f0a1a6eb46b38fc87c9714ec8b4b = $(`<div id="html_a6b1f0a1a6eb46b38fc87c9714ec8b4b" style="width: 100.0%; height: 100.0%;">Brock Community Food Bank</div>`)[0];
    popup_2dc534a8b6f848188051bc0b96dfce95.setContent(html_a6b1f0a1a6eb46b38fc87c9714ec8b4b);


    marker_c20f12b00bbe439a8c58edb971b338b4.bindPopup(popup_2dc534a8b6f848188051bc0b96dfce95)
        ;




    var marker_1535033d2bb9470b84f302884c88f15e = L.marker(
        [47.463306427002, -52.7713508605957],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_379a725f185d47be9ebfddc365ac0727 = L.popup({ "maxWidth": "100%" });


    var html_158b3930e3084184950704cbae11c31f = $(`<div id="html_158b3930e3084184950704cbae11c31f" style="width: 100.0%; height: 100.0%;">St. Kevin\u0027s Food Bank</div>`)[0];
    popup_379a725f185d47be9ebfddc365ac0727.setContent(html_158b3930e3084184950704cbae11c31f);


    marker_1535033d2bb9470b84f302884c88f15e.bindPopup(popup_379a725f185d47be9ebfddc365ac0727)
        ;




    var marker_c6c35b237b0b4d3ebc23463674fc8d92 = L.marker(
        [49.2184791564941, -55.4764060974121],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d0ec8dafc0cd45f2ba4ddb1a84805b8b = L.popup({ "maxWidth": "100%" });


    var html_7850432383994da6b6c77f617b92a953 = $(`<div id="html_7850432383994da6b6c77f617b92a953" style="width: 100.0%; height: 100.0%;">Botwood Interfaith Goodwill Centre</div>`)[0];
    popup_d0ec8dafc0cd45f2ba4ddb1a84805b8b.setContent(html_7850432383994da6b6c77f617b92a953);


    marker_c6c35b237b0b4d3ebc23463674fc8d92.bindPopup(popup_d0ec8dafc0cd45f2ba4ddb1a84805b8b)
        ;




    var marker_b60ac7162a334a62bcf5dc8a7bae49b8 = L.marker(
        [44.5895919799805, -75.6871948242188],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c8c67c05d3fe48f2a0a9caa003fc6885 = L.popup({ "maxWidth": "100%" });


    var html_3da31df2c1ee45d0a11b93ab10908137 = $(`<div id="html_3da31df2c1ee45d0a11b93ab10908137" style="width: 100.0%; height: 100.0%;">Operation Harvest Sharing</div>`)[0];
    popup_c8c67c05d3fe48f2a0a9caa003fc6885.setContent(html_3da31df2c1ee45d0a11b93ab10908137);


    marker_b60ac7162a334a62bcf5dc8a7bae49b8.bindPopup(popup_c8c67c05d3fe48f2a0a9caa003fc6885)
        ;




    var marker_c56e73accc3a4584a14924e502c49b81 = L.marker(
        [46.3703994750977, -62.276065826416],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_71253208660f4c42a553231120035563 = L.popup({ "maxWidth": "100%" });


    var html_ef30b8e5d7ef42289bffa164c1bed39c = $(`<div id="html_ef30b8e5d7ef42289bffa164c1bed39c" style="width: 100.0%; height: 100.0%;">Souris Food Bank</div>`)[0];
    popup_71253208660f4c42a553231120035563.setContent(html_ef30b8e5d7ef42289bffa164c1bed39c);


    marker_c56e73accc3a4584a14924e502c49b81.bindPopup(popup_71253208660f4c42a553231120035563)
        ;




    var marker_bbc7f2579937409e839cf76fef3a7b7d = L.marker(
        [54.2686080932617, -110.738502502441],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f69224160c3b42acbd49022a1cf1d409 = L.popup({ "maxWidth": "100%" });


    var html_a73e24fbfb51448fb75dc622e4c5c43a = $(`<div id="html_a73e24fbfb51448fb75dc622e4c5c43a" style="width: 100.0%; height: 100.0%;">Bonnyville Canadian Native Friendship Centre</div>`)[0];
    popup_f69224160c3b42acbd49022a1cf1d409.setContent(html_a73e24fbfb51448fb75dc622e4c5c43a);


    marker_bbc7f2579937409e839cf76fef3a7b7d.bindPopup(popup_f69224160c3b42acbd49022a1cf1d409)
        ;




    var marker_8b37be98ee1f4690a753a8c8927de9ea = L.marker(
        [51.3710708618164, -55.600772857666],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a1a3ed9a77b24fd0ad386e24da0b9d53 = L.popup({ "maxWidth": "100%" });


    var html_1af2bcc9edd14e90928f8560801db3d7 = $(`<div id="html_1af2bcc9edd14e90928f8560801db3d7" style="width: 100.0%; height: 100.0%;">St. Anthony \u0026 Area Food Sharing Association</div>`)[0];
    popup_a1a3ed9a77b24fd0ad386e24da0b9d53.setContent(html_1af2bcc9edd14e90928f8560801db3d7);


    marker_8b37be98ee1f4690a753a8c8927de9ea.bindPopup(popup_a1a3ed9a77b24fd0ad386e24da0b9d53)
        ;




    var marker_5e55ec72e9c34e68932ed6d1f51b44b5 = L.marker(
        [44.9168281555176, -79.5784912109375],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cffec62751434ce69d69ea94a124aa67 = L.popup({ "maxWidth": "100%" });


    var html_75778611617a4a71aabae06e2911e3f3 = $(`<div id="html_75778611617a4a71aabae06e2911e3f3" style="width: 100.0%; height: 100.0%;">Good Happenings Food Bank</div>`)[0];
    popup_cffec62751434ce69d69ea94a124aa67.setContent(html_75778611617a4a71aabae06e2911e3f3);


    marker_5e55ec72e9c34e68932ed6d1f51b44b5.bindPopup(popup_cffec62751434ce69d69ea94a124aa67)
        ;




    var marker_42b6de69219542c4956459b6e2163e31 = L.marker(
        [50.7212409973145, -121.283355712891],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b15b4b065ee54f74afc8ecdc94ff652b = L.popup({ "maxWidth": "100%" });


    var html_26deb24ee948400d8eacb5671c2c7fa3 = $(`<div id="html_26deb24ee948400d8eacb5671c2c7fa3" style="width: 100.0%; height: 100.0%;">Ashcroft \u0026 Area Food Bank</div>`)[0];
    popup_b15b4b065ee54f74afc8ecdc94ff652b.setContent(html_26deb24ee948400d8eacb5671c2c7fa3);


    marker_42b6de69219542c4956459b6e2163e31.bindPopup(popup_b15b4b065ee54f74afc8ecdc94ff652b)
        ;




    var marker_16e79c787bab4432b0346a0be2c8935e = L.marker(
        [53.0964317321777, -113.472457885742],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0e46241634cc4a8dad660b8ea8890d4a = L.popup({ "maxWidth": "100%" });


    var html_152fdfab1a0e4c0dbeac0de2b4e91fd2 = $(`<div id="html_152fdfab1a0e4c0dbeac0de2b4e91fd2" style="width: 100.0%; height: 100.0%;">Millet Community Food Bank</div>`)[0];
    popup_0e46241634cc4a8dad660b8ea8890d4a.setContent(html_152fdfab1a0e4c0dbeac0de2b4e91fd2);


    marker_16e79c787bab4432b0346a0be2c8935e.bindPopup(popup_0e46241634cc4a8dad660b8ea8890d4a)
        ;




    var marker_5af26421d476475298d064f7408fcadb = L.marker(
        [50.2283630371094, -121.856269836426],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_99e088e0c62145ac980591487fa163b0 = L.popup({ "maxWidth": "100%" });


    var html_41e950d232ea41788b14488249214c22 = $(`<div id="html_41e950d232ea41788b14488249214c22" style="width: 100.0%; height: 100.0%;">Lytton Community Food Bank</div>`)[0];
    popup_99e088e0c62145ac980591487fa163b0.setContent(html_41e950d232ea41788b14488249214c22);


    marker_5af26421d476475298d064f7408fcadb.bindPopup(popup_99e088e0c62145ac980591487fa163b0)
        ;




    var marker_83e47d0d5b374ea2a264e5e284b3e4de = L.marker(
        [45.2877998352051, -66.0478134155273],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b1034f2370754a519059b453fdd8a1c1 = L.popup({ "maxWidth": "100%" });


    var html_aed6e5157d2b49f4bc9eb2cf80782e36 = $(`<div id="html_aed6e5157d2b49f4bc9eb2cf80782e36" style="width: 100.0%; height: 100.0%;">Lakewood Head Start Association Inc.</div>`)[0];
    popup_b1034f2370754a519059b453fdd8a1c1.setContent(html_aed6e5157d2b49f4bc9eb2cf80782e36);


    marker_83e47d0d5b374ea2a264e5e284b3e4de.bindPopup(popup_b1034f2370754a519059b453fdd8a1c1)
        ;




    var marker_ceed62ad2d554de0aba0f01888373b97 = L.marker(
        [43.1471557617188, -81.5352630615234],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f0debc44819c47318a94461931bc38dd = L.popup({ "maxWidth": "100%" });


    var html_261d80b4422346e1bf23e89e0e20395f = $(`<div id="html_261d80b4422346e1bf23e89e0e20395f" style="width: 100.0%; height: 100.0%;">Ailsa Craig \u0026 Area Food Bank</div>`)[0];
    popup_f0debc44819c47318a94461931bc38dd.setContent(html_261d80b4422346e1bf23e89e0e20395f);


    marker_ceed62ad2d554de0aba0f01888373b97.bindPopup(popup_f0debc44819c47318a94461931bc38dd)
        ;




    var marker_832a760f0f7547a3be8adb8ab0901e88 = L.marker(
        [47.5879859924316, -59.0582389831543],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d080be817bdb42c881a72d82a5adc49f = L.popup({ "maxWidth": "100%" });


    var html_d0d380b824e449c3b35de7170dd88a3f = $(`<div id="html_d0d380b824e449c3b35de7170dd88a3f" style="width: 100.0%; height: 100.0%;">Salvation Army Grand Bay E. Channel</div>`)[0];
    popup_d080be817bdb42c881a72d82a5adc49f.setContent(html_d0d380b824e449c3b35de7170dd88a3f);


    marker_832a760f0f7547a3be8adb8ab0901e88.bindPopup(popup_d080be817bdb42c881a72d82a5adc49f)
        ;




    var marker_62fbba09c9e1491c88154c475e05900e = L.marker(
        [52.7754936218262, -108.298782348633],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b7a37ed101aa4098a5716f741140a0ed = L.popup({ "maxWidth": "100%" });


    var html_2ee822d00c42471b970405181a98271a = $(`<div id="html_2ee822d00c42471b970405181a98271a" style="width: 100.0%; height: 100.0%;">Battleford District Food \u0026 Resource Centre</div>`)[0];
    popup_b7a37ed101aa4098a5716f741140a0ed.setContent(html_2ee822d00c42471b970405181a98271a);


    marker_62fbba09c9e1491c88154c475e05900e.bindPopup(popup_b7a37ed101aa4098a5716f741140a0ed)
        ;




    var marker_d2531ef3b0254925b3118887fb066a69 = L.marker(
        [44.3072357177734, -77.796745300293],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9c28efa545964fc19032a3ccfc6109b0 = L.popup({ "maxWidth": "100%" });


    var html_d865786b37fb402da4e8b47908647366 = $(`<div id="html_d865786b37fb402da4e8b47908647366" style="width: 100.0%; height: 100.0%;">Campbellford Warkworth Fare Share Food Bank</div>`)[0];
    popup_9c28efa545964fc19032a3ccfc6109b0.setContent(html_d865786b37fb402da4e8b47908647366);


    marker_d2531ef3b0254925b3118887fb066a69.bindPopup(popup_9c28efa545964fc19032a3ccfc6109b0)
        ;




    var marker_3fb1966abbad48ff80599ba80949512f = L.marker(
        [52.7912216186523, -111.849975585938],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f65c3ddec0d44babbaef74fc5600110f = L.popup({ "maxWidth": "100%" });


    var html_bb6cfc4a068b4660920f44f3895550fb = $(`<div id="html_bb6cfc4a068b4660920f44f3895550fb" style="width: 100.0%; height: 100.0%;">Flagstaff Food Bank</div>`)[0];
    popup_f65c3ddec0d44babbaef74fc5600110f.setContent(html_bb6cfc4a068b4660920f44f3895550fb);


    marker_3fb1966abbad48ff80599ba80949512f.bindPopup(popup_f65c3ddec0d44babbaef74fc5600110f)
        ;




    var marker_5412cbe2483741b6a6cb1d4143fed500 = L.marker(
        [49.498851776123, -56.0687370300293],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5b4db81c031247ea81f93367db18d31a = L.popup({ "maxWidth": "100%" });


    var html_1ca55dbf6089441ebeb9e8bb48c63527 = $(`<div id="html_1ca55dbf6089441ebeb9e8bb48c63527" style="width: 100.0%; height: 100.0%;">Green Bay Food Bank Inc.</div>`)[0];
    popup_5b4db81c031247ea81f93367db18d31a.setContent(html_1ca55dbf6089441ebeb9e8bb48c63527);


    marker_5412cbe2483741b6a6cb1d4143fed500.bindPopup(popup_5b4db81c031247ea81f93367db18d31a)
        ;




    var marker_f0de7157004a49d38e4c136aeb6d6e1a = L.marker(
        [51.6745147705078, -105.468338012695],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e9594b9ec4b84dffafaef2b87fe26248 = L.popup({ "maxWidth": "100%" });


    var html_f068fd512f6f444fa44db3ee99c5bf3d = $(`<div id="html_f068fd512f6f444fa44db3ee99c5bf3d" style="width: 100.0%; height: 100.0%;">Watrous and District Food Bank</div>`)[0];
    popup_e9594b9ec4b84dffafaef2b87fe26248.setContent(html_f068fd512f6f444fa44db3ee99c5bf3d);


    marker_f0de7157004a49d38e4c136aeb6d6e1a.bindPopup(popup_e9594b9ec4b84dffafaef2b87fe26248)
        ;




    var marker_e142f69f9a2f47d68ccc3041cbbb2732 = L.marker(
        [43.6317825317383, -80.0410079956055],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c9d7544e19fb4a7d9a49e4873bcba04c = L.popup({ "maxWidth": "100%" });


    var html_ba1bd5656a5346baad5d6b1bf1c345ce = $(`<div id="html_ba1bd5656a5346baad5d6b1bf1c345ce" style="width: 100.0%; height: 100.0%;">Acton Foodshare</div>`)[0];
    popup_c9d7544e19fb4a7d9a49e4873bcba04c.setContent(html_ba1bd5656a5346baad5d6b1bf1c345ce);


    marker_e142f69f9a2f47d68ccc3041cbbb2732.bindPopup(popup_c9d7544e19fb4a7d9a49e4873bcba04c)
        ;




    var marker_7fac992c7ef0442c80ba9bdf0764711f = L.marker(
        [47.0227394104004, -53.5363235473633],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9e2253b5c7984b34b111c7bbcbae808f = L.popup({ "maxWidth": "100%" });


    var html_6290a2eda40e48e3a743fe5dd479880b = $(`<div id="html_6290a2eda40e48e3a743fe5dd479880b" style="width: 100.0%; height: 100.0%;">Society of St. Vincent de Paul - Immaculate Conception</div>`)[0];
    popup_9e2253b5c7984b34b111c7bbcbae808f.setContent(html_6290a2eda40e48e3a743fe5dd479880b);


    marker_7fac992c7ef0442c80ba9bdf0764711f.bindPopup(popup_9e2253b5c7984b34b111c7bbcbae808f)
        ;




    var marker_aec3585361b341ecb5598962137db564 = L.marker(
        [50.8384819030762, -118.969055175781],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_26e647e8635c4826a9eb5f943fb7e12b = L.popup({ "maxWidth": "100%" });


    var html_8aa0730881b44a198ef2d84b4883ec14 = $(`<div id="html_8aa0730881b44a198ef2d84b4883ec14" style="width: 100.0%; height: 100.0%;">Eagle Valley Community Food Bank</div>`)[0];
    popup_26e647e8635c4826a9eb5f943fb7e12b.setContent(html_8aa0730881b44a198ef2d84b4883ec14);


    marker_aec3585361b341ecb5598962137db564.bindPopup(popup_26e647e8635c4826a9eb5f943fb7e12b)
        ;




    var marker_6da97d38913c49e0a84ffe8e7f7f123f = L.marker(
        [50.2506980895996, -118.967834472656],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2bea6a2c15f0428e86988ce8fc36e4a0 = L.popup({ "maxWidth": "100%" });


    var html_dee0a00de3f3419486a5d1990ed087c1 = $(`<div id="html_dee0a00de3f3419486a5d1990ed087c1" style="width: 100.0%; height: 100.0%;">Lumby Food Bank</div>`)[0];
    popup_2bea6a2c15f0428e86988ce8fc36e4a0.setContent(html_dee0a00de3f3419486a5d1990ed087c1);


    marker_6da97d38913c49e0a84ffe8e7f7f123f.bindPopup(popup_2bea6a2c15f0428e86988ce8fc36e4a0)
        ;




    var marker_8efc6b35061d4136827726b97038b4c2 = L.marker(
        [48.6250953674316, -53.1444778442383],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_59dcb92cbf11461a88632e9ad94dc348 = L.popup({ "maxWidth": "100%" });


    var html_855f1909b5794420a0614052fc0a58e8 = $(`<div id="html_855f1909b5794420a0614052fc0a58e8" style="width: 100.0%; height: 100.0%;">Bonavista \u0026 Area Food Bank</div>`)[0];
    popup_59dcb92cbf11461a88632e9ad94dc348.setContent(html_855f1909b5794420a0614052fc0a58e8);


    marker_8efc6b35061d4136827726b97038b4c2.bindPopup(popup_59dcb92cbf11461a88632e9ad94dc348)
        ;




    var marker_0e7f38b102514ab1b28c1349714d34f5 = L.marker(
        [47.6262283325195, -52.967700958252],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_32e4aa5f358c4533b8fa871f1ce7f03f = L.popup({ "maxWidth": "100%" });


    var html_8158d9e399fe45e78d4be62ff77739bd = $(`<div id="html_8158d9e399fe45e78d4be62ff77739bd" style="width: 100.0%; height: 100.0%;">Caring By Sharing</div>`)[0];
    popup_32e4aa5f358c4533b8fa871f1ce7f03f.setContent(html_8158d9e399fe45e78d4be62ff77739bd);


    marker_0e7f38b102514ab1b28c1349714d34f5.bindPopup(popup_32e4aa5f358c4533b8fa871f1ce7f03f)
        ;




    var marker_5a35976293df4e56a0f2ecaafbf40c6b = L.marker(
        [50.1038055419922, -122.877601623535],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b09621bb620548539af6792ed73145e2 = L.popup({ "maxWidth": "100%" });


    var html_d34d976f35a249928fbe9b392aa3eb48 = $(`<div id="html_d34d976f35a249928fbe9b392aa3eb48" style="width: 100.0%; height: 100.0%;">Whistler Food Bank</div>`)[0];
    popup_b09621bb620548539af6792ed73145e2.setContent(html_d34d976f35a249928fbe9b392aa3eb48);


    marker_5a35976293df4e56a0f2ecaafbf40c6b.bindPopup(popup_b09621bb620548539af6792ed73145e2)
        ;




    var marker_6510d6aa4dfa4fbe956397fc66f9ef65 = L.marker(
        [45.6200675964355, -79.4090118408203],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_a16c86d448514abc834e221dfd895d24 = L.popup({ "maxWidth": "100%" });


    var html_86a579b4e1ae4623b9435c816028a29a = $(`<div id="html_86a579b4e1ae4623b9435c816028a29a" style="width: 100.0%; height: 100.0%;">Burk\u0027s Falls \u0026 District Food Bank</div>`)[0];
    popup_a16c86d448514abc834e221dfd895d24.setContent(html_86a579b4e1ae4623b9435c816028a29a);


    marker_6510d6aa4dfa4fbe956397fc66f9ef65.bindPopup(popup_a16c86d448514abc834e221dfd895d24)
        ;




    var marker_4ea21add1f614ba19bd3e40b83d3a540 = L.marker(
        [53.829216003418, -113.328872680664],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_665902a23f93480895a52ac2f9623306 = L.popup({ "maxWidth": "100%" });


    var html_2b4dab9f33e8432480dc1adc6d4605ae = $(`<div id="html_2b4dab9f33e8432480dc1adc6d4605ae" style="width: 100.0%; height: 100.0%;">Bon Accord/Gibbons Food Bank</div>`)[0];
    popup_665902a23f93480895a52ac2f9623306.setContent(html_2b4dab9f33e8432480dc1adc6d4605ae);


    marker_4ea21add1f614ba19bd3e40b83d3a540.bindPopup(popup_665902a23f93480895a52ac2f9623306)
        ;




    var marker_785b002027b14aa8abb23d953be5d09e = L.marker(
        [51.6470184326172, -120.011665344238],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_21946e97904d46c29a7689dd51d78f70 = L.popup({ "maxWidth": "100%" });


    var html_8e3e891f7f294408bea0686a0243f856 = $(`<div id="html_8e3e891f7f294408bea0686a0243f856" style="width: 100.0%; height: 100.0%;">CLEARWATER \u0026 DISTRICT FOOD BANK</div>`)[0];
    popup_21946e97904d46c29a7689dd51d78f70.setContent(html_8e3e891f7f294408bea0686a0243f856);


    marker_785b002027b14aa8abb23d953be5d09e.bindPopup(popup_21946e97904d46c29a7689dd51d78f70)
        ;




    var marker_2048ba9a85b34b01b457e27cd458622c = L.marker(
        [47.5675659179688, -52.7109909057617],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_725bc0a4c108423ca2623ad64e8ebc3c = L.popup({ "maxWidth": "100%" });


    var html_7bffd44cfafc4568b64c67d07ff6e972 = $(`<div id="html_7bffd44cfafc4568b64c67d07ff6e972" style="width: 100.0%; height: 100.0%;">Emmaus House Food Bank</div>`)[0];
    popup_725bc0a4c108423ca2623ad64e8ebc3c.setContent(html_7bffd44cfafc4568b64c67d07ff6e972);


    marker_2048ba9a85b34b01b457e27cd458622c.bindPopup(popup_725bc0a4c108423ca2623ad64e8ebc3c)
        ;




    var marker_6642c9f6787a4e7bbebaa669f71f181c = L.marker(
        [42.3025245666504, -82.935676574707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d44f6d25b5cd401889f49f52263390c9 = L.popup({ "maxWidth": "100%" });


    var html_724dbb4365314ac2a3f47d1a2c5805eb = $(`<div id="html_724dbb4365314ac2a3f47d1a2c5805eb" style="width: 100.0%; height: 100.0%;">Windsor \u0026 Essex County Food Bank Association</div>`)[0];
    popup_d44f6d25b5cd401889f49f52263390c9.setContent(html_724dbb4365314ac2a3f47d1a2c5805eb);


    marker_6642c9f6787a4e7bbebaa669f71f181c.bindPopup(popup_d44f6d25b5cd401889f49f52263390c9)
        ;




    var marker_6b513cecd2104034a891441614d734ef = L.marker(
        [47.3802909851074, -68.3145294189453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1b05c510aaa34b4192e222094224398a = L.popup({ "maxWidth": "100%" });


    var html_7021f862352a46ac8ebf567fe108c27a = $(`<div id="html_7021f862352a46ac8ebf567fe108c27a" style="width: 100.0%; height: 100.0%;">Thrift Store Edmundston Banque Alimentaire</div>`)[0];
    popup_1b05c510aaa34b4192e222094224398a.setContent(html_7021f862352a46ac8ebf567fe108c27a);


    marker_6b513cecd2104034a891441614d734ef.bindPopup(popup_1b05c510aaa34b4192e222094224398a)
        ;




    var marker_b1ebc2c9322c47ddbc6dc318d04d6c2e = L.marker(
        [51.0079727172852, -114.03653717041],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d305ac6ea0554033b84efbd9abf79666 = L.popup({ "maxWidth": "100%" });


    var html_eab31e71962b4516ad939a0f4bb64286 = $(`<div id="html_eab31e71962b4516ad939a0f4bb64286" style="width: 100.0%; height: 100.0%;">Calgary Food Bank</div>`)[0];
    popup_d305ac6ea0554033b84efbd9abf79666.setContent(html_eab31e71962b4516ad939a0f4bb64286);


    marker_b1ebc2c9322c47ddbc6dc318d04d6c2e.bindPopup(popup_d305ac6ea0554033b84efbd9abf79666)
        ;




    var marker_69417e3901344d2a8b6a600365f255f5 = L.marker(
        [49.2716369628906, -117.645317077637],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_00e4831551e8440ca0b9a018ce321c9d = L.popup({ "maxWidth": "100%" });


    var html_8e4d6425887c41a4b648784024bdb9ff = $(`<div id="html_8e4d6425887c41a4b648784024bdb9ff" style="width: 100.0%; height: 100.0%;">Community Harvest Food Bank</div>`)[0];
    popup_00e4831551e8440ca0b9a018ce321c9d.setContent(html_8e4d6425887c41a4b648784024bdb9ff);


    marker_69417e3901344d2a8b6a600365f255f5.bindPopup(popup_00e4831551e8440ca0b9a018ce321c9d)
        ;




    var marker_d2ce1959ad51452f9028595ca211ef3d = L.marker(
        [43.8750267028809, -78.8287124633789],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_63ae6c5785074a6c974e735f15f735ef = L.popup({ "maxWidth": "100%" });


    var html_f9816a2f409b4dbc97c289734755c9cd = $(`<div id="html_f9816a2f409b4dbc97c289734755c9cd" style="width: 100.0%; height: 100.0%;">Feed the Need Durham</div>`)[0];
    popup_63ae6c5785074a6c974e735f15f735ef.setContent(html_f9816a2f409b4dbc97c289734755c9cd);


    marker_d2ce1959ad51452f9028595ca211ef3d.bindPopup(popup_63ae6c5785074a6c974e735f15f735ef)
        ;




    var marker_550dd17e474e4781a326e77d8b6da044 = L.marker(
        [44.3110084533691, -77.9587631225586],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_77c4e28d6e3e4268941c1cc57c167e97 = L.popup({ "maxWidth": "100%" });


    var html_43c8bab4d44b4cb584c473f6d4fba485 = $(`<div id="html_43c8bab4d44b4cb584c473f6d4fba485" style="width: 100.0%; height: 100.0%;">Hastings \u0026 Roseneath Ministerial Food Bank</div>`)[0];
    popup_77c4e28d6e3e4268941c1cc57c167e97.setContent(html_43c8bab4d44b4cb584c473f6d4fba485);


    marker_550dd17e474e4781a326e77d8b6da044.bindPopup(popup_77c4e28d6e3e4268941c1cc57c167e97)
        ;




    var marker_af21978a35754a8eb73b3e0d3209ec34 = L.marker(
        [55.8070259094238, -128.087524414063],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dc50d9cb7e8a411c828e1e343757061c = L.popup({ "maxWidth": "100%" });


    var html_cde89bc23d8f41c9aead3b790de3913c = $(`<div id="html_cde89bc23d8f41c9aead3b790de3913c" style="width: 100.0%; height: 100.0%;">Salvation Army HAZELTON COMMUNITY FOOD BANK</div>`)[0];
    popup_dc50d9cb7e8a411c828e1e343757061c.setContent(html_cde89bc23d8f41c9aead3b790de3913c);


    marker_af21978a35754a8eb73b3e0d3209ec34.bindPopup(popup_dc50d9cb7e8a411c828e1e343757061c)
        ;




    var marker_0e4b48c9420146a5abfa0d0ec2d92282 = L.marker(
        [53.4154739379883, -117.561325073242],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2e0c5c683acb46b2b2eecfbb42213821 = L.popup({ "maxWidth": "100%" });


    var html_60a8e4919ea049fe85419729eec986dd = $(`<div id="html_60a8e4919ea049fe85419729eec986dd" style="width: 100.0%; height: 100.0%;">Hinton Food Bank Association</div>`)[0];
    popup_2e0c5c683acb46b2b2eecfbb42213821.setContent(html_60a8e4919ea049fe85419729eec986dd);


    marker_0e4b48c9420146a5abfa0d0ec2d92282.bindPopup(popup_2e0c5c683acb46b2b2eecfbb42213821)
        ;




    var marker_4804736340284f90ab923a50e0eb2dd8 = L.marker(
        [55.3278160095215, -119.555946350098],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_afba8fee56284b08978ccf7a28bb03c8 = L.popup({ "maxWidth": "100%" });


    var html_26c5d9ff34f84b5eba31b13635f8990d = $(`<div id="html_26c5d9ff34f84b5eba31b13635f8990d" style="width: 100.0%; height: 100.0%;">Hythe and District Food Bank Society</div>`)[0];
    popup_afba8fee56284b08978ccf7a28bb03c8.setContent(html_26c5d9ff34f84b5eba31b13635f8990d);


    marker_4804736340284f90ab923a50e0eb2dd8.bindPopup(popup_afba8fee56284b08978ccf7a28bb03c8)
        ;




    var marker_828de1a843e34dc0869a9aaf069ce91f = L.marker(
        [50.2754974365234, -99.9315414428711],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2c459717157748429e83ab40bb6a100a = L.popup({ "maxWidth": "100%" });


    var html_2d1d2d6e7852459a9bd5633daff38307 = $(`<div id="html_2d1d2d6e7852459a9bd5633daff38307" style="width: 100.0%; height: 100.0%;">Minnedosa and Area Food Bank</div>`)[0];
    popup_2c459717157748429e83ab40bb6a100a.setContent(html_2d1d2d6e7852459a9bd5633daff38307);


    marker_828de1a843e34dc0869a9aaf069ce91f.bindPopup(popup_2c459717157748429e83ab40bb6a100a)
        ;




    var marker_42e4ddce9cd64c78ab52d23271f143d7 = L.marker(
        [43.889965057373, -81.3092956542969],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ad75b356c95145d8a65ac6d705e4d590 = L.popup({ "maxWidth": "100%" });


    var html_c63a90ac427446ca8baafb9019f9585e = $(`<div id="html_c63a90ac427446ca8baafb9019f9585e" style="width: 100.0%; height: 100.0%;">North Huron Community Foodshare</div>`)[0];
    popup_ad75b356c95145d8a65ac6d705e4d590.setContent(html_c63a90ac427446ca8baafb9019f9585e);


    marker_42e4ddce9cd64c78ab52d23271f143d7.bindPopup(popup_ad75b356c95145d8a65ac6d705e4d590)
        ;




    var marker_a3267143d40e4f77938970ae48c2057b = L.marker(
        [63.7488746643066, -68.5005874633789],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4ce83a0e83154f28a718c561f633cfeb = L.popup({ "maxWidth": "100%" });


    var html_5bb098c72e7b42418ccc87a7bc108955 = $(`<div id="html_5bb098c72e7b42418ccc87a7bc108955" style="width: 100.0%; height: 100.0%;">Niqinik Nuatsivik, Nunavut Food Bank</div>`)[0];
    popup_4ce83a0e83154f28a718c561f633cfeb.setContent(html_5bb098c72e7b42418ccc87a7bc108955);


    marker_a3267143d40e4f77938970ae48c2057b.bindPopup(popup_4ce83a0e83154f28a718c561f633cfeb)
        ;




    var marker_f4ecd654ed3a43b2a4c5f3225dbcaac4 = L.marker(
        [43.9655151367188, -78.1832504272461],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f371acf11aa5461eb0eb3d2b993a2952 = L.popup({ "maxWidth": "100%" });


    var html_04ba8880594a408ca4e483475ea9e4b6 = $(`<div id="html_04ba8880594a408ca4e483475ea9e4b6" style="width: 100.0%; height: 100.0%;">Food 4 All Northumberland</div>`)[0];
    popup_f371acf11aa5461eb0eb3d2b993a2952.setContent(html_04ba8880594a408ca4e483475ea9e4b6);


    marker_f4ecd654ed3a43b2a4c5f3225dbcaac4.bindPopup(popup_f371acf11aa5461eb0eb3d2b993a2952)
        ;




    var marker_168e3d657a2545d2a0375c6b0b2906e4 = L.marker(
        [50.3213119506836, -122.810211181641],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4f53361a1b8a4918a6eed99252be0ab8 = L.popup({ "maxWidth": "100%" });


    var html_f3bd6d2e6c804f3fbc3226653b635f03 = $(`<div id="html_f3bd6d2e6c804f3fbc3226653b635f03" style="width: 100.0%; height: 100.0%;">PEMBERTON SSCS FOODBANK</div>`)[0];
    popup_4f53361a1b8a4918a6eed99252be0ab8.setContent(html_f3bd6d2e6c804f3fbc3226653b635f03);


    marker_168e3d657a2545d2a0375c6b0b2906e4.bindPopup(popup_4f53361a1b8a4918a6eed99252be0ab8)
        ;




    var marker_4ab5e6eb0c1143fda69811161f978460 = L.marker(
        [49.127025604248, -123.777465820313],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_05568d7fbe0d46818a311fc8d2d29422 = L.popup({ "maxWidth": "100%" });


    var html_d2a1402a145c467fbd4ed7c16618470e = $(`<div id="html_d2a1402a145c467fbd4ed7c16618470e" style="width: 100.0%; height: 100.0%;">People for a Healthy Community Food Bank</div>`)[0];
    popup_05568d7fbe0d46818a311fc8d2d29422.setContent(html_d2a1402a145c467fbd4ed7c16618470e);


    marker_4ab5e6eb0c1143fda69811161f978460.bindPopup(popup_05568d7fbe0d46818a311fc8d2d29422)
        ;




    var marker_d37dd09a1a674db8a10517bb9b6cedef = L.marker(
        [49.3178558349609, -124.305465698242],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cf01ea38ace3464aa58f055c64d34f98 = L.popup({ "maxWidth": "100%" });


    var html_1d2b525a9411486fa271bfa10f42ebc0 = $(`<div id="html_1d2b525a9411486fa271bfa10f42ebc0" style="width: 100.0%; height: 100.0%;">Salvation Army MT. ARROWSMITH COMMUNITY</div>`)[0];
    popup_cf01ea38ace3464aa58f055c64d34f98.setContent(html_1d2b525a9411486fa271bfa10f42ebc0);


    marker_d37dd09a1a674db8a10517bb9b6cedef.bindPopup(popup_cf01ea38ace3464aa58f055c64d34f98)
        ;




    var marker_02cd090ce5474333b25c9dc17fde42f3 = L.marker(
        [46.0908737182617, -64.7849502563477],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d5dab3a2afe14132bcd48c9816a77407 = L.popup({ "maxWidth": "100%" });


    var html_6e70fbdf00f94527b85215b5f7c1e60f = $(`<div id="html_6e70fbdf00f94527b85215b5f7c1e60f" style="width: 100.0%; height: 100.0%;">Second Mile Food Bank</div>`)[0];
    popup_d5dab3a2afe14132bcd48c9816a77407.setContent(html_6e70fbdf00f94527b85215b5f7c1e60f);


    marker_02cd090ce5474333b25c9dc17fde42f3.bindPopup(popup_d5dab3a2afe14132bcd48c9816a77407)
        ;




    var marker_918b801d4bdd499f9fc75c84d8c89f0b = L.marker(
        [49.7633247375488, -117.470115661621],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0420098058dc4f5eb67e315b21b59712 = L.popup({ "maxWidth": "100%" });


    var html_35ccab8429aa44dc85371bbc2213b926 = $(`<div id="html_35ccab8429aa44dc85371bbc2213b926" style="width: 100.0%; height: 100.0%;">Slocan Valley Food Cupboard</div>`)[0];
    popup_0420098058dc4f5eb67e315b21b59712.setContent(html_35ccab8429aa44dc85371bbc2213b926);


    marker_918b801d4bdd499f9fc75c84d8c89f0b.bindPopup(popup_0420098058dc4f5eb67e315b21b59712)
        ;




    var marker_294359867cd94d2c951e3c5e2ca0166d = L.marker(
        [50.8130073547363, -119.495147705078],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7278e32b670b4a5499b537200ef4e6b1 = L.popup({ "maxWidth": "100%" });


    var html_eb6aeed352b2425dae313c89d873432d = $(`<div id="html_eb6aeed352b2425dae313c89d873432d" style="width: 100.0%; height: 100.0%;">Sorrento Food Bank</div>`)[0];
    popup_7278e32b670b4a5499b537200ef4e6b1.setContent(html_eb6aeed352b2425dae313c89d873432d);


    marker_294359867cd94d2c951e3c5e2ca0166d.bindPopup(popup_7278e32b670b4a5499b537200ef4e6b1)
        ;




    var marker_7469b0d841c249859519e256c8695c25 = L.marker(
        [47.5600242614746, -52.7113990783691],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_74687c2430c44eb587f76d922b40fd06 = L.popup({ "maxWidth": "100%" });


    var html_f2af61db174a45e18d48eb200dd928a4 = $(`<div id="html_f2af61db174a45e18d48eb200dd928a4" style="width: 100.0%; height: 100.0%;">The Community Food Sharing Association</div>`)[0];
    popup_74687c2430c44eb587f76d922b40fd06.setContent(html_f2af61db174a45e18d48eb200dd928a4);


    marker_7469b0d841c249859519e256c8695c25.bindPopup(popup_74687c2430c44eb587f76d922b40fd06)
        ;




    var marker_d2d361a644964e8a97a2c609cb8c804a = L.marker(
        [43.4244575500488, -80.4782943725586],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8c43c487ea1a4016a0e0910844efe29a = L.popup({ "maxWidth": "100%" });


    var html_88545640e33743a9a3c00edd4458f128 = $(`<div id="html_88545640e33743a9a3c00edd4458f128" style="width: 100.0%; height: 100.0%;">The Food Bank of Waterloo Region</div>`)[0];
    popup_8c43c487ea1a4016a0e0910844efe29a.setContent(html_88545640e33743a9a3c00edd4458f128);


    marker_d2d361a644964e8a97a2c609cb8c804a.bindPopup(popup_8c43c487ea1a4016a0e0910844efe29a)
        ;




    var marker_f2a9d9692e924c9e9065b9ff0c87b285 = L.marker(
        [45.7325057983398, -66.0438766479492],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_475d036cb2fa4225beaf30a81cfa057c = L.popup({ "maxWidth": "100%" });


    var html_fe848dbdd4884b2086d413e722e8d769 = $(`<div id="html_fe848dbdd4884b2086d413e722e8d769" style="width: 100.0%; height: 100.0%;">The Good Samaritan Food Bank</div>`)[0];
    popup_475d036cb2fa4225beaf30a81cfa057c.setContent(html_fe848dbdd4884b2086d413e722e8d769);


    marker_f2a9d9692e924c9e9065b9ff0c87b285.bindPopup(popup_475d036cb2fa4225beaf30a81cfa057c)
        ;




    var marker_e4dc6f8ba67b46cc876a879315d7b5ae = L.marker(
        [42.3359756469727, -81.9967651367188],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_65feb393bc2b4d0a8104fba3f4df542d = L.popup({ "maxWidth": "100%" });


    var html_535649463b4e4356a25b028f648316d9 = $(`<div id="html_535649463b4e4356a25b028f648316d9" style="width: 100.0%; height: 100.0%;">Salvation Army (Blenheim)</div>`)[0];
    popup_65feb393bc2b4d0a8104fba3f4df542d.setContent(html_535649463b4e4356a25b028f648316d9);


    marker_e4dc6f8ba67b46cc876a879315d7b5ae.bindPopup(popup_65feb393bc2b4d0a8104fba3f4df542d)
        ;




    var marker_4c19f91b29944bf0b9f60db1d331ad0c = L.marker(
        [42.4396705627441, -81.8866882324219],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_df4cea0ccc7d4e2880e8f671fa3232da = L.popup({ "maxWidth": "100%" });


    var html_b4f8984b7d4b489080e32451efd20919 = $(`<div id="html_b4f8984b7d4b489080e32451efd20919" style="width: 100.0%; height: 100.0%;">Salvation Army Ridgetown Family Services</div>`)[0];
    popup_df4cea0ccc7d4e2880e8f671fa3232da.setContent(html_b4f8984b7d4b489080e32451efd20919);


    marker_4c19f91b29944bf0b9f60db1d331ad0c.bindPopup(popup_df4cea0ccc7d4e2880e8f671fa3232da)
        ;




    var marker_d1ab533c77d54db69fc443efecc97631 = L.marker(
        [45.1930122375488, -67.2793807983398],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_817ec3c206a347ab88b2b666620b844a = L.popup({ "maxWidth": "100%" });


    var html_670da2069da8458e9038aea616b4f559 = $(`<div id="html_670da2069da8458e9038aea616b4f559" style="width: 100.0%; height: 100.0%;">The Volunteer Centre of Charlotte County</div>`)[0];
    popup_817ec3c206a347ab88b2b666620b844a.setContent(html_670da2069da8458e9038aea616b4f559);


    marker_d1ab533c77d54db69fc443efecc97631.bindPopup(popup_817ec3c206a347ab88b2b666620b844a)
        ;




    var marker_ac65f301ebf040b8b0b2da255f4e1f54 = L.marker(
        [53.3684272766113, -112.668395996094],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3f9d55f7ff6e4ea3acc856876706c10a = L.popup({ "maxWidth": "100%" });


    var html_ea2ce6f2dbef409ea8dc6c0ea20b804b = $(`<div id="html_ea2ce6f2dbef409ea8dc6c0ea20b804b" style="width: 100.0%; height: 100.0%;">Tofield-Ryley and Area Food Bank Society</div>`)[0];
    popup_3f9d55f7ff6e4ea3acc856876706c10a.setContent(html_ea2ce6f2dbef409ea8dc6c0ea20b804b);


    marker_ac65f301ebf040b8b0b2da255f4e1f54.bindPopup(popup_3f9d55f7ff6e4ea3acc856876706c10a)
        ;




    var marker_704212639e484a8cbc3b0a5ac5666f71 = L.marker(
        [53.3879776000977, -108.958396911621],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_22645fcc84f34a8385b2c032b3c2be53 = L.popup({ "maxWidth": "100%" });


    var html_ac4a28f6d2504f0688a8bd1fde59e0a4 = $(`<div id="html_ac4a28f6d2504f0688a8bd1fde59e0a4" style="width: 100.0%; height: 100.0%;">Turtle River Food Bank</div>`)[0];
    popup_22645fcc84f34a8385b2c032b3c2be53.setContent(html_ac4a28f6d2504f0688a8bd1fde59e0a4);


    marker_704212639e484a8cbc3b0a5ac5666f71.bindPopup(popup_22645fcc84f34a8385b2c032b3c2be53)
        ;




    var marker_edc9f286be4640b88850bcac3f8f3b4f = L.marker(
        [53.4946479797363, -112.053649902344],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0c2166864f7449449a1281944540264e = L.popup({ "maxWidth": "100%" });


    var html_661a942ecf1448d8af2b9909af9ebfaa = $(`<div id="html_661a942ecf1448d8af2b9909af9ebfaa" style="width: 100.0%; height: 100.0%;">Vegreville Food Bank Society</div>`)[0];
    popup_0c2166864f7449449a1281944540264e.setContent(html_661a942ecf1448d8af2b9909af9ebfaa);


    marker_edc9f286be4640b88850bcac3f8f3b4f.bindPopup(popup_0c2166864f7449449a1281944540264e)
        ;




    var marker_e5afe87caf574913bab1038390216919 = L.marker(
        [62.4547119140625, -114.371223449707],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_480931bc9a6a41be9a5ce4feb2d0a5dc = L.popup({ "maxWidth": "100%" });


    var html_b166801c7558429289bf608d62afdeb4 = $(`<div id="html_b166801c7558429289bf608d62afdeb4" style="width: 100.0%; height: 100.0%;">Salvation Army Yellowknife</div>`)[0];
    popup_480931bc9a6a41be9a5ce4feb2d0a5dc.setContent(html_b166801c7558429289bf608d62afdeb4);


    marker_e5afe87caf574913bab1038390216919.bindPopup(popup_480931bc9a6a41be9a5ce4feb2d0a5dc)
        ;




    var marker_9f87df60434d4bb1839f7b62af7a2e0f = L.marker(
        [49.193904876709, -119.775405883789],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d168c2af33db415d84e2e1613d07c1d1 = L.popup({ "maxWidth": "100%" });


    var html_179e346052eb4621b2cf0a0a19337843 = $(`<div id="html_179e346052eb4621b2cf0a0a19337843" style="width: 100.0%; height: 100.0%;">Cawston/Keremeos Food Bank</div>`)[0];
    popup_d168c2af33db415d84e2e1613d07c1d1.setContent(html_179e346052eb4621b2cf0a0a19337843);


    marker_9f87df60434d4bb1839f7b62af7a2e0f.bindPopup(popup_d168c2af33db415d84e2e1613d07c1d1)
        ;




    var marker_98cbbdec131f4bd6a029abbba2c207d1 = L.marker(
        [50.2629203796387, -118.61466217041],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_19aa7eaccb634fc9ac754b6ea535485d = L.popup({ "maxWidth": "100%" });


    var html_11ba43ee370b41b4b32e899b5bf892dd = $(`<div id="html_11ba43ee370b41b4b32e899b5bf892dd" style="width: 100.0%; height: 100.0%;">Cherryville Community Food Bank Society</div>`)[0];
    popup_19aa7eaccb634fc9ac754b6ea535485d.setContent(html_11ba43ee370b41b4b32e899b5bf892dd);


    marker_98cbbdec131f4bd6a029abbba2c207d1.bindPopup(popup_19aa7eaccb634fc9ac754b6ea535485d)
        ;




    var marker_9eef6527294a40ee972166a4b96d5a2d = L.marker(
        [43.9589920043945, -78.1637496948242],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d462877771194bcab4d4e296c07044a2 = L.popup({ "maxWidth": "100%" });


    var html_3d5b30b841a44fd49e4f841e65b268e0 = $(`<div id="html_3d5b30b841a44fd49e4f841e65b268e0" style="width: 100.0%; height: 100.0%;">Northumberland County Fare Share</div>`)[0];
    popup_d462877771194bcab4d4e296c07044a2.setContent(html_3d5b30b841a44fd49e4f841e65b268e0);


    marker_9eef6527294a40ee972166a4b96d5a2d.bindPopup(popup_d462877771194bcab4d4e296c07044a2)
        ;




    var marker_4817db073a684cbe9c4fac851693943d = L.marker(
        [53.6463241577148, -113.620719909668],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9dbcd3dc86734c7aaac65049376f0790 = L.popup({ "maxWidth": "100%" });


    var html_04aa9da8b312490585f63d2d3246879c = $(`<div id="html_04aa9da8b312490585f63d2d3246879c" style="width: 100.0%; height: 100.0%;">St Albert Food Bank and Community Village</div>`)[0];
    popup_9dbcd3dc86734c7aaac65049376f0790.setContent(html_04aa9da8b312490585f63d2d3246879c);


    marker_4817db073a684cbe9c4fac851693943d.bindPopup(popup_9dbcd3dc86734c7aaac65049376f0790)
        ;




    var marker_9f3d339088664660b4ac60e9b19a2a36 = L.marker(
        [52.3000679016113, -113.809753417969],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_015e7ce735974c32ba33f56855f5db10 = L.popup({ "maxWidth": "100%" });


    var html_f1f64a08aee442e79b4653c300309a62 = $(`<div id="html_f1f64a08aee442e79b4653c300309a62" style="width: 100.0%; height: 100.0%;">Red Deer Food Bank Society</div>`)[0];
    popup_015e7ce735974c32ba33f56855f5db10.setContent(html_f1f64a08aee442e79b4653c300309a62);


    marker_9f3d339088664660b4ac60e9b19a2a36.bindPopup(popup_015e7ce735974c32ba33f56855f5db10)
        ;




    var marker_099412e442c24c589f669ce1c9ecaf34 = L.marker(
        [53.6018753051758, -115.021553039551],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5d9a18e0f55a466aaedcf3ee635cf770 = L.popup({ "maxWidth": "100%" });


    var html_c6a3ed0d87054015bb1258a904551e3b = $(`<div id="html_c6a3ed0d87054015bb1258a904551e3b" style="width: 100.0%; height: 100.0%;">WEE Community Food Bank</div>`)[0];
    popup_5d9a18e0f55a466aaedcf3ee635cf770.setContent(html_c6a3ed0d87054015bb1258a904551e3b);


    marker_099412e442c24c589f669ce1c9ecaf34.bindPopup(popup_5d9a18e0f55a466aaedcf3ee635cf770)
        ;




    var marker_76d04cf026814408b51ff6b3ec6c3bcd = L.marker(
        [45.3020782470703, -75.8760147094727],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7e8dee4d8c934eab88aa5ceb6ad5a560 = L.popup({ "maxWidth": "100%" });


    var html_09e0d423e0bb4a1b9e2225dcc0919106 = $(`<div id="html_09e0d423e0bb4a1b9e2225dcc0919106" style="width: 100.0%; height: 100.0%;">Kanata Food Cupboard</div>`)[0];
    popup_7e8dee4d8c934eab88aa5ceb6ad5a560.setContent(html_09e0d423e0bb4a1b9e2225dcc0919106);


    marker_76d04cf026814408b51ff6b3ec6c3bcd.bindPopup(popup_7e8dee4d8c934eab88aa5ceb6ad5a560)
        ;




    var marker_a9aad4a817c944c29be792caca5e9036 = L.marker(
        [44.2482414245605, -76.9517364501953],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cacb2d8fbcc74868a4e7f2e6e3a8a03d = L.popup({ "maxWidth": "100%" });


    var html_20ccfb8e22ae48abb7686b815822aff8 = $(`<div id="html_20ccfb8e22ae48abb7686b815822aff8" style="width: 100.0%; height: 100.0%;">Salvation Army Napanee  Food Bank</div>`)[0];
    popup_cacb2d8fbcc74868a4e7f2e6e3a8a03d.setContent(html_20ccfb8e22ae48abb7686b815822aff8);


    marker_a9aad4a817c944c29be792caca5e9036.bindPopup(popup_cacb2d8fbcc74868a4e7f2e6e3a8a03d)
        ;




    var marker_998622b1430246f296e238f7a5e3ec29 = L.marker(
        [45.3250122070313, -79.2191848754883],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_66844ee3233145bdb432d5c90bca2178 = L.popup({ "maxWidth": "100%" });


    var html_4135153d88c8442484f687fa721f53b6 = $(`<div id="html_4135153d88c8442484f687fa721f53b6" style="width: 100.0%; height: 100.0%;">Salvation Army Huntsville Family Services</div>`)[0];
    popup_66844ee3233145bdb432d5c90bca2178.setContent(html_4135153d88c8442484f687fa721f53b6);


    marker_998622b1430246f296e238f7a5e3ec29.bindPopup(popup_66844ee3233145bdb432d5c90bca2178)
        ;




    var marker_73333de0709b42c9b8d58a83d0bd80fe = L.marker(
        [50.2235832214355, -66.3839950561523],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ec00bfcc8f384a95b6e4869811f0c4e6 = L.popup({ "maxWidth": "100%" });


    var html_a8bfbc4d87684aafb08f7883331b82e8 = $(`<div id="html_a8bfbc4d87684aafb08f7883331b82e8" style="width: 100.0%; height: 100.0%;">Comptoir Alimentaire de Sept-Iles</div>`)[0];
    popup_ec00bfcc8f384a95b6e4869811f0c4e6.setContent(html_a8bfbc4d87684aafb08f7883331b82e8);


    marker_73333de0709b42c9b8d58a83d0bd80fe.bindPopup(popup_ec00bfcc8f384a95b6e4869811f0c4e6)
        ;




    var marker_82b16ee4071d4d1fa1edff08e2d2ab0c = L.marker(
        [49.19287109375, -68.2463226318359],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0e061b6bf1a64e0ab65e7422b414eef4 = L.popup({ "maxWidth": "100%" });


    var html_441d380bbe864a06b0a323c47934ccfe = $(`<div id="html_441d380bbe864a06b0a323c47934ccfe" style="width: 100.0%; height: 100.0%;">Comptoir Alimentaire L\u0027Escale </div>`)[0];
    popup_0e061b6bf1a64e0ab65e7422b414eef4.setContent(html_441d380bbe864a06b0a323c47934ccfe);


    marker_82b16ee4071d4d1fa1edff08e2d2ab0c.bindPopup(popup_0e061b6bf1a64e0ab65e7422b414eef4)
        ;




    var marker_900aad1dedc64d4cb239b2f9e1b5d936 = L.marker(
        [52.9487113952637, -66.9243392944336],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_29f0bb9573754f1ba8ed03caa59991b9 = L.popup({ "maxWidth": "100%" });


    var html_4c8299bb28944d31b5a628fbad04e2fb = $(`<div id="html_4c8299bb28944d31b5a628fbad04e2fb" style="width: 100.0%; height: 100.0%;">Labrador West Ministerial Food Bank</div>`)[0];
    popup_29f0bb9573754f1ba8ed03caa59991b9.setContent(html_4c8299bb28944d31b5a628fbad04e2fb);


    marker_900aad1dedc64d4cb239b2f9e1b5d936.bindPopup(popup_29f0bb9573754f1ba8ed03caa59991b9)
        ;




    var marker_0129431c6aab43df913f660e3b8270c8 = L.marker(
        [45.4687232971191, -76.6763076782227],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_348fc5554c06475eaba7694277b04dd1 = L.popup({ "maxWidth": "100%" });


    var html_0e6a12b5961446e3af4ed1fe59d10b7b = $(`<div id="html_0e6a12b5961446e3af4ed1fe59d10b7b" style="width: 100.0%; height: 100.0%;">Renfrew \u0026 District Food Bank</div>`)[0];
    popup_348fc5554c06475eaba7694277b04dd1.setContent(html_0e6a12b5961446e3af4ed1fe59d10b7b);


    marker_0129431c6aab43df913f660e3b8270c8.bindPopup(popup_348fc5554c06475eaba7694277b04dd1)
        ;




    var marker_3e1964d027584ee5a43bde36a25da9c5 = L.marker(
        [42.9541549682617, -81.6228790283203],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_897174f5c7a8481c836318f9f6a07df3 = L.popup({ "maxWidth": "100%" });


    var html_800e4a3b25e14ea690164b9606605f85 = $(`<div id="html_800e4a3b25e14ea690164b9606605f85" style="width: 100.0%; height: 100.0%;">Salvation Army Strathroy Food Bank</div>`)[0];
    popup_897174f5c7a8481c836318f9f6a07df3.setContent(html_800e4a3b25e14ea690164b9606605f85);


    marker_3e1964d027584ee5a43bde36a25da9c5.bindPopup(popup_897174f5c7a8481c836318f9f6a07df3)
        ;




    var marker_4794daab183f4edcaacfb55fae63b180 = L.marker(
        [43.8064956665039, -79.4974517822266],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ac990fa65f974f7d8110838627834d12 = L.popup({ "maxWidth": "100%" });


    var html_ada6cb2ab2864081b06e3f02d9f85bbe = $(`<div id="html_ada6cb2ab2864081b06e3f02d9f85bbe" style="width: 100.0%; height: 100.0%;">The Food Bank of York Region</div>`)[0];
    popup_ac990fa65f974f7d8110838627834d12.setContent(html_ada6cb2ab2864081b06e3f02d9f85bbe);


    marker_4794daab183f4edcaacfb55fae63b180.bindPopup(popup_ac990fa65f974f7d8110838627834d12)
        ;




    var marker_725a61d11c9243e5988ae60b826e0558 = L.marker(
        [51.043098449707, -113.396797180176],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_19c8b6a811984837bc54cbbe804a7eee = L.popup({ "maxWidth": "100%" });


    var html_15d273422ab44d60948a5915879ce028 = $(`<div id="html_15d273422ab44d60948a5915879ce028" style="width: 100.0%; height: 100.0%;">Wheatland County Food Bank Society</div>`)[0];
    popup_19c8b6a811984837bc54cbbe804a7eee.setContent(html_15d273422ab44d60948a5915879ce028);


    marker_725a61d11c9243e5988ae60b826e0558.bindPopup(popup_19c8b6a811984837bc54cbbe804a7eee)
        ;




    var marker_37afa062b2f946c3a8e4a8b64d3cac4d = L.marker(
        [52.8337745666504, -110.854957580566],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_422e0c863775490fac2795f2f27b5c6f = L.popup({ "maxWidth": "100%" });


    var html_41af5bcdfd5e42e1850f860df616c3f0 = $(`<div id="html_41af5bcdfd5e42e1850f860df616c3f0" style="width: 100.0%; height: 100.0%;">Wainwright Battle River Food Bank Association</div>`)[0];
    popup_422e0c863775490fac2795f2f27b5c6f.setContent(html_41af5bcdfd5e42e1850f860df616c3f0);


    marker_37afa062b2f946c3a8e4a8b64d3cac4d.bindPopup(popup_422e0c863775490fac2795f2f27b5c6f)
        ;




    var marker_5995e6a2c964462eb26b23d4ceee455e = L.marker(
        [49.4859237670898, -113.95108795166],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_95ade20516a446e289a615aa2c0b0d4b = L.popup({ "maxWidth": "100%" });


    var html_56107e1b0bf34f809cdaed15e56586e5 = $(`<div id="html_56107e1b0bf34f809cdaed15e56586e5" style="width: 100.0%; height: 100.0%;">Pincher Creek Food Bank</div>`)[0];
    popup_95ade20516a446e289a615aa2c0b0d4b.setContent(html_56107e1b0bf34f809cdaed15e56586e5);


    marker_5995e6a2c964462eb26b23d4ceee455e.bindPopup(popup_95ade20516a446e289a615aa2c0b0d4b)
        ;




    var marker_11d484f3df8c42539f53244826812712 = L.marker(
        [49.1417617797852, -102.996162414551],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9c27db5040564e64a3216116e041d602 = L.popup({ "maxWidth": "100%" });


    var html_394330bf204143b0b735999f20f52ecf = $(`<div id="html_394330bf204143b0b735999f20f52ecf" style="width: 100.0%; height: 100.0%;">Salvation Army-Estavan</div>`)[0];
    popup_9c27db5040564e64a3216116e041d602.setContent(html_394330bf204143b0b735999f20f52ecf);


    marker_11d484f3df8c42539f53244826812712.bindPopup(popup_9c27db5040564e64a3216116e041d602)
        ;




    var marker_5d01267090b541809cce3d964e7d14cf = L.marker(
        [52.9708824157715, -113.375663757324],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_50a84f4c86f44ea7bfb4dae36df8ae16 = L.popup({ "maxWidth": "100%" });


    var html_9f367b23e45045c58cbdd2aa8d4385a2 = $(`<div id="html_9f367b23e45045c58cbdd2aa8d4385a2" style="width: 100.0%; height: 100.0%;">Salvation Army - Wetaskiwin</div>`)[0];
    popup_50a84f4c86f44ea7bfb4dae36df8ae16.setContent(html_9f367b23e45045c58cbdd2aa8d4385a2);


    marker_5d01267090b541809cce3d964e7d14cf.bindPopup(popup_50a84f4c86f44ea7bfb4dae36df8ae16)
        ;




    var marker_08c7968f922d4ffd933d1354f740fbf5 = L.marker(
        [53.257869720459, -110.016151428223],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5f39a36c3c60404ea56b3973201af649 = L.popup({ "maxWidth": "100%" });


    var html_4e189176f8bc46f19397301db2ba63e8 = $(`<div id="html_4e189176f8bc46f19397301db2ba63e8" style="width: 100.0%; height: 100.0%;">Salvation Army Lloydminster Food Bank</div>`)[0];
    popup_5f39a36c3c60404ea56b3973201af649.setContent(html_4e189176f8bc46f19397301db2ba63e8);


    marker_08c7968f922d4ffd933d1354f740fbf5.bindPopup(popup_5f39a36c3c60404ea56b3973201af649)
        ;




    var marker_cfba27bed64b4b35b9ad7f667c8e64f6 = L.marker(
        [51.227783203125, -102.473579406738],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_dc6fffe46e7b473ebda61f6dcd429f8e = L.popup({ "maxWidth": "100%" });


    var html_4fe2175ddbf24e3a843be7c583e95a76 = $(`<div id="html_4fe2175ddbf24e3a843be7c583e95a76" style="width: 100.0%; height: 100.0%;">Salvation Army Yorkton</div>`)[0];
    popup_dc6fffe46e7b473ebda61f6dcd429f8e.setContent(html_4fe2175ddbf24e3a843be7c583e95a76);


    marker_cfba27bed64b4b35b9ad7f667c8e64f6.bindPopup(popup_dc6fffe46e7b473ebda61f6dcd429f8e)
        ;




    var marker_01133ca631294dac81091b77eab0a10b = L.marker(
        [53.7132415771484, -113.213241577148],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2c3a16b2360c48b69699deff8068c2a5 = L.popup({ "maxWidth": "100%" });


    var html_ad15e49d94bf4954a93c27c7936325c3 = $(`<div id="html_ad15e49d94bf4954a93c27c7936325c3" style="width: 100.0%; height: 100.0%;">Fort Saskatchewan Food Bank Food Gatherers Society</div>`)[0];
    popup_2c3a16b2360c48b69699deff8068c2a5.setContent(html_ad15e49d94bf4954a93c27c7936325c3);


    marker_01133ca631294dac81091b77eab0a10b.bindPopup(popup_2c3a16b2360c48b69699deff8068c2a5)
        ;




    var marker_a5ed1a1c2c2b431c93615b17f3bdf05f = L.marker(
        [49.6624183654785, -103.85179901123],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f69b0f93ef774511be37d211d64734d7 = L.popup({ "maxWidth": "100%" });


    var html_7764644f31be4148a5255cbc54317ff4 = $(`<div id="html_7764644f31be4148a5255cbc54317ff4" style="width: 100.0%; height: 100.0%;">Salvation Army Weyburn</div>`)[0];
    popup_f69b0f93ef774511be37d211d64734d7.setContent(html_7764644f31be4148a5255cbc54317ff4);


    marker_a5ed1a1c2c2b431c93615b17f3bdf05f.bindPopup(popup_f69b0f93ef774511be37d211d64734d7)
        ;




    var marker_b33be18d78e245b38194501376eac113 = L.marker(
        [56.4852142333984, -109.438720703125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b54afcc77e404a76896b0dbfc2dbae3c = L.popup({ "maxWidth": "100%" });


    var html_b9a50e1c12f94c76b1b6bbbd3d9d3ee6 = $(`<div id="html_b9a50e1c12f94c76b1b6bbbd3d9d3ee6" style="width: 100.0%; height: 100.0%;">La Loche Food Bank Inc (dist thru Friendship Centre -May2017)</div>`)[0];
    popup_b54afcc77e404a76896b0dbfc2dbae3c.setContent(html_b9a50e1c12f94c76b1b6bbbd3d9d3ee6);


    marker_b33be18d78e245b38194501376eac113.bindPopup(popup_b54afcc77e404a76896b0dbfc2dbae3c)
        ;




    var marker_db3e50c31a324edb93dba729ae218d7e = L.marker(
        [45.731819152832, -82.1617202758789],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_18d8301271754b21845ed94992ecd529 = L.popup({ "maxWidth": "100%" });


    var html_3c4c85620af24023b5d49bc357936b3f = $(`<div id="html_3c4c85620af24023b5d49bc357936b3f" style="width: 100.0%; height: 100.0%;">Manitoulin Family Resources</div>`)[0];
    popup_18d8301271754b21845ed94992ecd529.setContent(html_3c4c85620af24023b5d49bc357936b3f);


    marker_db3e50c31a324edb93dba729ae218d7e.bindPopup(popup_18d8301271754b21845ed94992ecd529)
        ;




    var marker_2ba75245ba8d4d0ab1829036b9c1e5a5 = L.marker(
        [49.9101943969727, -116.904075622559],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e0dda5d584024f778c6fa743ff906b48 = L.popup({ "maxWidth": "100%" });


    var html_773d6c722b4f4f6f810b23f716943986 = $(`<div id="html_773d6c722b4f4f6f810b23f716943986" style="width: 100.0%; height: 100.0%;">North Kootenay Lake Food Cupboard</div>`)[0];
    popup_e0dda5d584024f778c6fa743ff906b48.setContent(html_773d6c722b4f4f6f810b23f716943986);


    marker_2ba75245ba8d4d0ab1829036b9c1e5a5.bindPopup(popup_e0dda5d584024f778c6fa743ff906b48)
        ;




    var marker_44340c8718bb46819f61b55443c78422 = L.marker(
        [52.8567962646484, -102.388114929199],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_77ed2a1bd06e4f0582360cba13adca0a = L.popup({ "maxWidth": "100%" });


    var html_5cbbfbda156c4a16ae8a4235f04822bc = $(`<div id="html_5cbbfbda156c4a16ae8a4235f04822bc" style="width: 100.0%; height: 100.0%;">Hudson Bay Family Support</div>`)[0];
    popup_77ed2a1bd06e4f0582360cba13adca0a.setContent(html_5cbbfbda156c4a16ae8a4235f04822bc);


    marker_44340c8718bb46819f61b55443c78422.bindPopup(popup_77ed2a1bd06e4f0582360cba13adca0a)
        ;




    var marker_6ccdbeadd78740e1800975a4f23576cc = L.marker(
        [44.2006340026855, -77.8843078613281],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0b9e0907604e46f9ac07c180087bc941 = L.popup({ "maxWidth": "100%" });


    var html_c44e8f42fe354bf7953200d90e77149c = $(`<div id="html_c44e8f42fe354bf7953200d90e77149c" style="width: 100.0%; height: 100.0%;">7 Hills Community Pantry</div>`)[0];
    popup_0b9e0907604e46f9ac07c180087bc941.setContent(html_c44e8f42fe354bf7953200d90e77149c);


    marker_6ccdbeadd78740e1800975a4f23576cc.bindPopup(popup_0b9e0907604e46f9ac07c180087bc941)
        ;




    var marker_8013133d87b64f4f8bbf922e55c8a6df = L.marker(
        [44.4048347473145, -76.5966567993164],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0f5b726abbfc44778570f4856a5f7956 = L.popup({ "maxWidth": "100%" });


    var html_fb3d37e428204151a90a644379d6c981 = $(`<div id="html_fb3d37e428204151a90a644379d6c981" style="width: 100.0%; height: 100.0%;">Southern Frontenac Community Services</div>`)[0];
    popup_0f5b726abbfc44778570f4856a5f7956.setContent(html_fb3d37e428204151a90a644379d6c981);


    marker_8013133d87b64f4f8bbf922e55c8a6df.bindPopup(popup_0f5b726abbfc44778570f4856a5f7956)
        ;




    var marker_ea604c72da19475a9609fcba797b1758 = L.marker(
        [42.8830184936523, -79.2438354492188],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_20244e018c79484c94bd08afc84c7d8c = L.popup({ "maxWidth": "100%" });


    var html_3dd4985f047943b7ab67435fb68fc541 = $(`<div id="html_3dd4985f047943b7ab67435fb68fc541" style="width: 100.0%; height: 100.0%;">Port Cares Reach Out Food Centre</div>`)[0];
    popup_20244e018c79484c94bd08afc84c7d8c.setContent(html_3dd4985f047943b7ab67435fb68fc541);


    marker_ea604c72da19475a9609fcba797b1758.bindPopup(popup_20244e018c79484c94bd08afc84c7d8c)
        ;




    var marker_354e632e98ad4c7f822a03fc73ce78cd = L.marker(
        [43.0992088317871, -79.5365447998047],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_08320c7fe5b6491ea64b27968e785d8e = L.popup({ "maxWidth": "100%" });


    var html_7cdda8ee3337469b9f32786d04550205 = $(`<div id="html_7cdda8ee3337469b9f32786d04550205" style="width: 100.0%; height: 100.0%;">West Lincoln Community Care</div>`)[0];
    popup_08320c7fe5b6491ea64b27968e785d8e.setContent(html_7cdda8ee3337469b9f32786d04550205);


    marker_354e632e98ad4c7f822a03fc73ce78cd.bindPopup(popup_08320c7fe5b6491ea64b27968e785d8e)
        ;




    var marker_3cb4718d12734265bd90b2bac3871b50 = L.marker(
        [49.1819190979004, -97.9537048339844],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8a9c1830556a4181943c99283204eb86 = L.popup({ "maxWidth": "100%" });


    var html_ce91b99c536c40b8b876acb8202e3a8a = $(`<div id="html_ce91b99c536c40b8b876acb8202e3a8a" style="width: 100.0%; height: 100.0%;">Winkler \u0026 District Food Cupboard</div>`)[0];
    popup_8a9c1830556a4181943c99283204eb86.setContent(html_ce91b99c536c40b8b876acb8202e3a8a);


    marker_3cb4718d12734265bd90b2bac3871b50.bindPopup(popup_8a9c1830556a4181943c99283204eb86)
        ;




    var marker_d357e4abbc0a48058ad5f0b2ece17267 = L.marker(
        [49.5214233398438, -96.675422668457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_65005034aa2648a09b75a5668295aed4 = L.popup({ "maxWidth": "100%" });


    var html_89333dbe09bd4aacb0239da9566a7054 = $(`<div id="html_89333dbe09bd4aacb0239da9566a7054" style="width: 100.0%; height: 100.0%;">South East Helping Hands</div>`)[0];
    popup_65005034aa2648a09b75a5668295aed4.setContent(html_89333dbe09bd4aacb0239da9566a7054);


    marker_d357e4abbc0a48058ad5f0b2ece17267.bindPopup(popup_65005034aa2648a09b75a5668295aed4)
        ;




    var marker_f4da53fd9899443dbb2b16db2604e2e8 = L.marker(
        [55.7476043701172, -97.8590393066406],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9e1fdd4070904d56a2435ded3b6337ba = L.popup({ "maxWidth": "100%" });


    var html_ae41a40ce3b7444c8f480303f4daa89c = $(`<div id="html_ae41a40ce3b7444c8f480303f4daa89c" style="width: 100.0%; height: 100.0%;">Salvation Army Thompson</div>`)[0];
    popup_9e1fdd4070904d56a2435ded3b6337ba.setContent(html_ae41a40ce3b7444c8f480303f4daa89c);


    marker_f4da53fd9899443dbb2b16db2604e2e8.bindPopup(popup_9e1fdd4070904d56a2435ded3b6337ba)
        ;




    var marker_a0bc49a9aa5343f4987cbe9b91af7105 = L.marker(
        [54.7661323547363, -101.869972229004],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3ba796b81a274a55a578fddc1c647e03 = L.popup({ "maxWidth": "100%" });


    var html_77cd39f4d34d40e580a0a8c5e7471eea = $(`<div id="html_77cd39f4d34d40e580a0a8c5e7471eea" style="width: 100.0%; height: 100.0%;">The Lords Bounty Food Bank</div>`)[0];
    popup_3ba796b81a274a55a578fddc1c647e03.setContent(html_77cd39f4d34d40e580a0a8c5e7471eea);


    marker_a0bc49a9aa5343f4987cbe9b91af7105.bindPopup(popup_3ba796b81a274a55a578fddc1c647e03)
        ;




    var marker_f363cb5152c04048be119852b071296b = L.marker(
        [44.7501602172852, -79.8869781494141],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3f785be218af4308a8d0de5272f3110f = L.popup({ "maxWidth": "100%" });


    var html_025cbf2a67814e98a99a4f6551706926 = $(`<div id="html_025cbf2a67814e98a99a4f6551706926" style="width: 100.0%; height: 100.0%;">Salvation Army  Midland</div>`)[0];
    popup_3f785be218af4308a8d0de5272f3110f.setContent(html_025cbf2a67814e98a99a4f6551706926);


    marker_f363cb5152c04048be119852b071296b.bindPopup(popup_3f785be218af4308a8d0de5272f3110f)
        ;




    var marker_6dcbb14ba1f5491aaf8488cc4d8eb4a2 = L.marker(
        [49.0445404052734, -122.789939880371],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8c14410bf6dd4bc6ad3e5969fd42dd1f = L.popup({ "maxWidth": "100%" });


    var html_d38e7a5f1c414f2587d590dee05c1c41 = $(`<div id="html_d38e7a5f1c414f2587d590dee05c1c41" style="width: 100.0%; height: 100.0%;">Sources Langley</div>`)[0];
    popup_8c14410bf6dd4bc6ad3e5969fd42dd1f.setContent(html_d38e7a5f1c414f2587d590dee05c1c41);


    marker_6dcbb14ba1f5491aaf8488cc4d8eb4a2.bindPopup(popup_8c14410bf6dd4bc6ad3e5969fd42dd1f)
        ;




    var marker_7d76faca3a3d47138bff7da04f6ec7b9 = L.marker(
        [42.9201126098633, -78.9245071411133],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_12d8ba674517429b8e5be3ac33040cc9 = L.popup({ "maxWidth": "100%" });


    var html_3a3bde1f681e49a58dd17765ee9edc61 = $(`<div id="html_3a3bde1f681e49a58dd17765ee9edc61" style="width: 100.0%; height: 100.0%;">Salvation Army Fort Erie</div>`)[0];
    popup_12d8ba674517429b8e5be3ac33040cc9.setContent(html_3a3bde1f681e49a58dd17765ee9edc61);


    marker_7d76faca3a3d47138bff7da04f6ec7b9.bindPopup(popup_12d8ba674517429b8e5be3ac33040cc9)
        ;




    var marker_af8c4b4f0e754bfb9795d7207df8cf1e = L.marker(
        [58.8035507202148, -122.702209472656],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f66e212dbd2e4d6abcda415ebea4cc48 = L.popup({ "maxWidth": "100%" });


    var html_6f26e935be114750b667ee089aa1321c = $(`<div id="html_6f26e935be114750b667ee089aa1321c" style="width: 100.0%; height: 100.0%;">FORT NELSON FRIENDSHIP SOCIETY</div>`)[0];
    popup_f66e212dbd2e4d6abcda415ebea4cc48.setContent(html_6f26e935be114750b667ee089aa1321c);


    marker_af8c4b4f0e754bfb9795d7207df8cf1e.bindPopup(popup_f66e212dbd2e4d6abcda415ebea4cc48)
        ;




    var marker_4cac2924d9c94d388a3b602aadde22d1 = L.marker(
        [54.843391418457, -105.234107971191],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_22ac34496a31461a8edbd32626532f0a = L.popup({ "maxWidth": "100%" });


    var html_52a63c1279fa437a90ce1042f65a7fa1 = $(`<div id="html_52a63c1279fa437a90ce1042f65a7fa1" style="width: 100.0%; height: 100.0%;">Lac La Ronge Food Bank</div>`)[0];
    popup_22ac34496a31461a8edbd32626532f0a.setContent(html_52a63c1279fa437a90ce1042f65a7fa1);


    marker_4cac2924d9c94d388a3b602aadde22d1.bindPopup(popup_22ac34496a31461a8edbd32626532f0a)
        ;




    var marker_b18dffccefd14432af8ea62ab8cefc40 = L.marker(
        [50.1435661315918, -101.666831970215],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_101c002c550f4a5abac6432aa69a38ef = L.popup({ "maxWidth": "100%" });


    var html_25d5f4dc0ca14129ba841236f807f39c = $(`<div id="html_25d5f4dc0ca14129ba841236f807f39c" style="width: 100.0%; height: 100.0%;">Moosomin Food Bank</div>`)[0];
    popup_101c002c550f4a5abac6432aa69a38ef.setContent(html_25d5f4dc0ca14129ba841236f807f39c);


    marker_b18dffccefd14432af8ea62ab8cefc40.bindPopup(popup_101c002c550f4a5abac6432aa69a38ef)
        ;




    var marker_aff23e1eeef148a182a3276bd6592b30 = L.marker(
        [52.6622581481934, -106.331825256348],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3f8e5f5bfab7472caaa2d88ef1f7cc7d = L.popup({ "maxWidth": "100%" });


    var html_4c8df0e703594b11be85d6d0e5a2aee3 = $(`<div id="html_4c8df0e703594b11be85d6d0e5a2aee3" style="width: 100.0%; height: 100.0%;">Rosthern Food Bank (Good Neighbours Food Centre )</div>`)[0];
    popup_3f8e5f5bfab7472caaa2d88ef1f7cc7d.setContent(html_4c8df0e703594b11be85d6d0e5a2aee3);


    marker_aff23e1eeef148a182a3276bd6592b30.bindPopup(popup_3f8e5f5bfab7472caaa2d88ef1f7cc7d)
        ;




    var marker_d273ac8463674a62869998c915517fd0 = L.marker(
        [50.7251243591309, -113.97200012207],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_777bcca454ec49a9b03ffbd40144aa51 = L.popup({ "maxWidth": "100%" });


    var html_099a00c0beea4dcd930323a2f3689db5 = $(`<div id="html_099a00c0beea4dcd930323a2f3689db5" style="width: 100.0%; height: 100.0%;">Okotoks Food Bank Association</div>`)[0];
    popup_777bcca454ec49a9b03ffbd40144aa51.setContent(html_099a00c0beea4dcd930323a2f3689db5);


    marker_d273ac8463674a62869998c915517fd0.bindPopup(popup_777bcca454ec49a9b03ffbd40144aa51)
        ;




    var marker_036580910a7d4da0b16103254608786f = L.marker(
        [44.7739143371582, -76.7247314453125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2f1ac34917b34b7db587949b56131b16 = L.popup({ "maxWidth": "100%" });


    var html_4d9ad98bcc314543b4a0e8d40fa1bdd6 = $(`<div id="html_4d9ad98bcc314543b4a0e8d40fa1bdd6" style="width: 100.0%; height: 100.0%;">North Frontenac Food Bank</div>`)[0];
    popup_2f1ac34917b34b7db587949b56131b16.setContent(html_4d9ad98bcc314543b4a0e8d40fa1bdd6);


    marker_036580910a7d4da0b16103254608786f.bindPopup(popup_2f1ac34917b34b7db587949b56131b16)
        ;




    var marker_749a0cc34c224d2db4c923f1182db8bd = L.marker(
        [50.4910278320313, -119.078437805176],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4330ac0609234495a030917a694cf3cd = L.popup({ "maxWidth": "100%" });


    var html_90c35507377c4af58b7fb1274faceaa6 = $(`<div id="html_90c35507377c4af58b7fb1274faceaa6" style="width: 100.0%; height: 100.0%;">Feed Enderby and District Food Bank</div>`)[0];
    popup_4330ac0609234495a030917a694cf3cd.setContent(html_90c35507377c4af58b7fb1274faceaa6);


    marker_749a0cc34c224d2db4c923f1182db8bd.bindPopup(popup_4330ac0609234495a030917a694cf3cd)
        ;




    var marker_fbf87547f989419289d203712719d647 = L.marker(
        [43.3378219604492, -79.8966751098633],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_33dec084ef8d4de79df5aa48fc5669e3 = L.popup({ "maxWidth": "100%" });


    var html_317ce6f6ef1942ffa210b1d8c6175532 = $(`<div id="html_317ce6f6ef1942ffa210b1d8c6175532" style="width: 100.0%; height: 100.0%;">Food with Grace - Waterdown Food Bank</div>`)[0];
    popup_33dec084ef8d4de79df5aa48fc5669e3.setContent(html_317ce6f6ef1942ffa210b1d8c6175532);


    marker_fbf87547f989419289d203712719d647.bindPopup(popup_33dec084ef8d4de79df5aa48fc5669e3)
        ;




    var marker_2a97efb72bc744f18b8c56752613a4eb = L.marker(
        [50.9121627807617, -113.754539489746],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_66250a7e39f246bcaebf541c7aceed95 = L.popup({ "maxWidth": "100%" });


    var html_0e5184c916aa4a1cab8cf378ab5179a7 = $(`<div id="html_0e5184c916aa4a1cab8cf378ab5179a7" style="width: 100.0%; height: 100.0%;">Chestermere Regional Food Bank</div>`)[0];
    popup_66250a7e39f246bcaebf541c7aceed95.setContent(html_0e5184c916aa4a1cab8cf378ab5179a7);


    marker_2a97efb72bc744f18b8c56752613a4eb.bindPopup(popup_66250a7e39f246bcaebf541c7aceed95)
        ;




    var marker_c618537f038d4ac9b246cb031bbfb0e3 = L.marker(
        [51.1887588500977, -114.467208862305],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7b6ae8ead2c04eb59dca3e97fef645b2 = L.popup({ "maxWidth": "100%" });


    var html_01b4206fa2094d04abd5848719e69fc6 = $(`<div id="html_01b4206fa2094d04abd5848719e69fc6" style="width: 100.0%; height: 100.0%;">Cochrane Activettes Food Bank</div>`)[0];
    popup_7b6ae8ead2c04eb59dca3e97fef645b2.setContent(html_01b4206fa2094d04abd5848719e69fc6);


    marker_c618537f038d4ac9b246cb031bbfb0e3.bindPopup(popup_7b6ae8ead2c04eb59dca3e97fef645b2)
        ;




    var marker_4fe328ed02bf45ee821f6e4d073df105 = L.marker(
        [43.6824340820313, -79.7299118041992],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e15fa2b8a4d140a8b691c381cdc081f4 = L.popup({ "maxWidth": "100%" });


    var html_56c3470b46824702aa6e8b781eaf2d43 = $(`<div id="html_56c3470b46824702aa6e8b781eaf2d43" style="width: 100.0%; height: 100.0%;">Knights Table</div>`)[0];
    popup_e15fa2b8a4d140a8b691c381cdc081f4.setContent(html_56c3470b46824702aa6e8b781eaf2d43);


    marker_4fe328ed02bf45ee821f6e4d073df105.bindPopup(popup_e15fa2b8a4d140a8b691c381cdc081f4)
        ;




    var marker_e7c74f51bef34825be1c8661bb4cdc21 = L.marker(
        [50.285774230957, -107.799743652344],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6528fb8bee6046b3860a899da3dc1334 = L.popup({ "maxWidth": "100%" });


    var html_8fff3a6424024700902b06f3a475ef85 = $(`<div id="html_8fff3a6424024700902b06f3a475ef85" style="width: 100.0%; height: 100.0%;">Salvation ArmySwift Current</div>`)[0];
    popup_6528fb8bee6046b3860a899da3dc1334.setContent(html_8fff3a6424024700902b06f3a475ef85);


    marker_e7c74f51bef34825be1c8661bb4cdc21.bindPopup(popup_6528fb8bee6046b3860a899da3dc1334)
        ;




    var marker_8b1b9a4259ad446bae1b7f7c91b78de8 = L.marker(
        [52.5831489562988, -112.97127532959],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_46d679e00d1a4727a2f58f0515d05429 = L.popup({ "maxWidth": "100%" });


    var html_93759d55989849e1b8055391f415645a = $(`<div id="html_93759d55989849e1b8055391f415645a" style="width: 100.0%; height: 100.0%;">Bashaw and District Food Bank</div>`)[0];
    popup_46d679e00d1a4727a2f58f0515d05429.setContent(html_93759d55989849e1b8055391f415645a);


    marker_8b1b9a4259ad446bae1b7f7c91b78de8.bindPopup(popup_46d679e00d1a4727a2f58f0515d05429)
        ;




    var marker_6937073b2ca1405cb831f48150c7c057 = L.marker(
        [52.3795471191406, -113.795227050781],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ba1b5c8693854c329d97102728c94669 = L.popup({ "maxWidth": "100%" });


    var html_e869678065b743c29c3d30b101812fae = $(`<div id="html_e869678065b743c29c3d30b101812fae" style="width: 100.0%; height: 100.0%;">Blackfalds Food Bank Society</div>`)[0];
    popup_ba1b5c8693854c329d97102728c94669.setContent(html_e869678065b743c29c3d30b101812fae);


    marker_6937073b2ca1405cb831f48150c7c057.bindPopup(popup_ba1b5c8693854c329d97102728c94669)
        ;




    var marker_e8b0523c586b4861923620569272cfc1 = L.marker(
        [49.6089820861816, -114.451286315918],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_1ede9268f2144e2aa9adacdf3e861b16 = L.popup({ "maxWidth": "100%" });


    var html_a669c25268d5405b867b84dc99607f9e = $(`<div id="html_a669c25268d5405b867b84dc99607f9e" style="width: 100.0%; height: 100.0%;">Crowsnest Pass Food Bank Society</div>`)[0];
    popup_1ede9268f2144e2aa9adacdf3e861b16.setContent(html_a669c25268d5405b867b84dc99607f9e);


    marker_e8b0523c586b4861923620569272cfc1.bindPopup(popup_1ede9268f2144e2aa9adacdf3e861b16)
        ;




    var marker_7d69604ca4e94693828cfbc94b94e59f = L.marker(
        [49.8636436462402, -111.377639770508],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5b42d085c2f04cc4b87294a57ef81f29 = L.popup({ "maxWidth": "100%" });


    var html_cb8abbe9d93a4f92a5be04f21511dab3 = $(`<div id="html_cb8abbe9d93a4f92a5be04f21511dab3" style="width: 100.0%; height: 100.0%;">County of 40-Mile Food Bank</div>`)[0];
    popup_5b42d085c2f04cc4b87294a57ef81f29.setContent(html_cb8abbe9d93a4f92a5be04f21511dab3);


    marker_7d69604ca4e94693828cfbc94b94e59f.bindPopup(popup_5b42d085c2f04cc4b87294a57ef81f29)
        ;




    var marker_192b7b96020d48b8a61d3fea6a0ae4a7 = L.marker(
        [53.1127967834473, -114.468185424805],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6c2985bb521c4506b67f67d7a5b86924 = L.popup({ "maxWidth": "100%" });


    var html_9b1827191cba4cc18be02090b5dd4bed = $(`<div id="html_9b1827191cba4cc18be02090b5dd4bed" style="width: 100.0%; height: 100.0%;">Breton Faith Covenant Church Food Bank</div>`)[0];
    popup_6c2985bb521c4506b67f67d7a5b86924.setContent(html_9b1827191cba4cc18be02090b5dd4bed);


    marker_192b7b96020d48b8a61d3fea6a0ae4a7.bindPopup(popup_6c2985bb521c4506b67f67d7a5b86924)
        ;




    var marker_b81866ceeb404ecab90c14c0db04f120 = L.marker(
        [52.0937385559082, -111.445831298828],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_37240f2264d64efea32bc64bbebfba04 = L.popup({ "maxWidth": "100%" });


    var html_a075e9557ee7433894bffda14342adac = $(`<div id="html_a075e9557ee7433894bffda14342adac" style="width: 100.0%; height: 100.0%;">Coronation \u0026 District Food Bank Society</div>`)[0];
    popup_37240f2264d64efea32bc64bbebfba04.setContent(html_a075e9557ee7433894bffda14342adac);


    marker_b81866ceeb404ecab90c14c0db04f120.bindPopup(popup_37240f2264d64efea32bc64bbebfba04)
        ;




    var marker_91923939c72c423dac93a5e0091d5a99 = L.marker(
        [53.7604446411133, -112.769638061523],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c4c4ec11b6514cbc8ed59f0f96b9c2d4 = L.popup({ "maxWidth": "100%" });


    var html_f4a8b97d3b7642ad817b02599af09977 = $(`<div id="html_f4a8b97d3b7642ad817b02599af09977" style="width: 100.0%; height: 100.0%;">Lamont Hamper Committee</div>`)[0];
    popup_c4c4ec11b6514cbc8ed59f0f96b9c2d4.setContent(html_f4a8b97d3b7642ad817b02599af09977);


    marker_91923939c72c423dac93a5e0091d5a99.bindPopup(popup_c4c4ec11b6514cbc8ed59f0f96b9c2d4)
        ;




    var marker_418cd40c28cd49f09480dd47550683e3 = L.marker(
        [53.8019866943359, -113.650436401367],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c4a1a99f172e4b8b892857e57e97ff0f = L.popup({ "maxWidth": "100%" });


    var html_6afa48bb7c574286b87c46365334b6e1 = $(`<div id="html_6afa48bb7c574286b87c46365334b6e1" style="width: 100.0%; height: 100.0%;">Morinville Food Bank Society</div>`)[0];
    popup_c4a1a99f172e4b8b892857e57e97ff0f.setContent(html_6afa48bb7c574286b87c46365334b6e1);


    marker_418cd40c28cd49f09480dd47550683e3.bindPopup(popup_c4a1a99f172e4b8b892857e57e97ff0f)
        ;




    var marker_ebbeb3e63fca4b9d83cbe357ff8dd812 = L.marker(
        [52.6734237670898, -113.578224182129],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_acad0719a1744cbdbfffa384967ee9a0 = L.popup({ "maxWidth": "100%" });


    var html_151165a3014e45cb99ac4eea6a244ae7 = $(`<div id="html_151165a3014e45cb99ac4eea6a244ae7" style="width: 100.0%; height: 100.0%;">Ponoka Food Bank Association</div>`)[0];
    popup_acad0719a1744cbdbfffa384967ee9a0.setContent(html_151165a3014e45cb99ac4eea6a244ae7);


    marker_ebbeb3e63fca4b9d83cbe357ff8dd812.bindPopup(popup_acad0719a1744cbdbfffa384967ee9a0)
        ;




    var marker_7f21a3604f4142c69dd4d40f7d4148bb = L.marker(
        [53.9519157409668, -113.116905212402],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f55c1a85ed844c32a704c27431ce8651 = L.popup({ "maxWidth": "100%" });


    var html_4910380be4364c5ba3344c19f26b6960 = $(`<div id="html_4910380be4364c5ba3344c19f26b6960" style="width: 100.0%; height: 100.0%;">Redwater Fellowship of Churches Food Bank</div>`)[0];
    popup_f55c1a85ed844c32a704c27431ce8651.setContent(html_4910380be4364c5ba3344c19f26b6960);


    marker_7f21a3604f4142c69dd4d40f7d4148bb.bindPopup(popup_f55c1a85ed844c32a704c27431ce8651)
        ;




    var marker_3a679d5def604332bb9de7d4eb07e80c = L.marker(
        [52.3730583190918, -114.91552734375],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_aaca966aa90d478ba1750725f96a2b92 = L.popup({ "maxWidth": "100%" });


    var html_6aceb6d11b824db690a19b253776ed4b = $(`<div id="html_6aceb6d11b824db690a19b253776ed4b" style="width: 100.0%; height: 100.0%;">The Lord\u0027s Food Bank Rocky Mountain House Society</div>`)[0];
    popup_aaca966aa90d478ba1750725f96a2b92.setContent(html_6aceb6d11b824db690a19b253776ed4b);


    marker_3a679d5def604332bb9de7d4eb07e80c.bindPopup(popup_aaca966aa90d478ba1750725f96a2b92)
        ;




    var marker_8eb66c0acee14edfa207546f722f7def = L.marker(
        [50.7333793640137, -112.776779174805],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3bc48ff227274f7780bbc782a62d0b68 = L.popup({ "maxWidth": "100%" });


    var html_2d6bd820b4d045be9a63a1eaa23e8d6e = $(`<div id="html_2d6bd820b4d045be9a63a1eaa23e8d6e" style="width: 100.0%; height: 100.0%;">Ittasinno\u0027P Food Bank Centre</div>`)[0];
    popup_3bc48ff227274f7780bbc782a62d0b68.setContent(html_2d6bd820b4d045be9a63a1eaa23e8d6e);


    marker_8eb66c0acee14edfa207546f722f7def.bindPopup(popup_3bc48ff227274f7780bbc782a62d0b68)
        ;




    var marker_0a2157f7ce17465483e30c9bee192f2d = L.marker(
        [53.9817352294922, -111.197456359863],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4167fe192f834669bb7e4694849ab6f4 = L.popup({ "maxWidth": "100%" });


    var html_a0b6387ade404cf08a65a70b6b4b8ff0 = $(`<div id="html_a0b6387ade404cf08a65a70b6b4b8ff0" style="width: 100.0%; height: 100.0%;">St Paul \u0026 District Food Bank</div>`)[0];
    popup_4167fe192f834669bb7e4694849ab6f4.setContent(html_a0b6387ade404cf08a65a70b6b4b8ff0);


    marker_0a2157f7ce17465483e30c9bee192f2d.bindPopup(popup_4167fe192f834669bb7e4694849ab6f4)
        ;




    var marker_8a3ccd8694e54aa286b758473efbc3cd = L.marker(
        [52.2408828735352, -112.717346191406],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_37b839386d7f421784a326779fe932c1 = L.popup({ "maxWidth": "100%" });


    var html_658517870d0d4c018d97583df499c2d4 = $(`<div id="html_658517870d0d4c018d97583df499c2d4" style="width: 100.0%; height: 100.0%;">Stettler \u0026 District Food Bank Society</div>`)[0];
    popup_37b839386d7f421784a326779fe932c1.setContent(html_658517870d0d4c018d97583df499c2d4);


    marker_8a3ccd8694e54aa286b758473efbc3cd.bindPopup(popup_37b839386d7f421784a326779fe932c1)
        ;




    var marker_8f982145d3184d05a7f01f558d6ceccd = L.marker(
        [50.6774063110352, -114.281280517578],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_11e8998d3aca4e0fa7bc6dd88e193995 = L.popup({ "maxWidth": "100%" });


    var html_a1f3423b64f548f6a2452b6cb377d4c3 = $(`<div id="html_a1f3423b64f548f6a2452b6cb377d4c3" style="width: 100.0%; height: 100.0%;">Turner Valley District Food Bank Assoc.</div>`)[0];
    popup_11e8998d3aca4e0fa7bc6dd88e193995.setContent(html_a1f3423b64f548f6a2452b6cb377d4c3);


    marker_8f982145d3184d05a7f01f558d6ceccd.bindPopup(popup_11e8998d3aca4e0fa7bc6dd88e193995)
        ;




    var marker_18f7e446569c43f89622468fa24e9e9f = L.marker(
        [50.0683135986328, -112.102531433105],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f0f372e2d03941aea4dbf16deb6563c9 = L.popup({ "maxWidth": "100%" });


    var html_5a44e8a7ed954f3690e07efd6a0fdd29 = $(`<div id="html_5a44e8a7ed954f3690e07efd6a0fdd29" style="width: 100.0%; height: 100.0%;">Vauxhall \u0026 Area Food Bank Society</div>`)[0];
    popup_f0f372e2d03941aea4dbf16deb6563c9.setContent(html_5a44e8a7ed954f3690e07efd6a0fdd29);


    marker_18f7e446569c43f89622468fa24e9e9f.bindPopup(popup_f0f372e2d03941aea4dbf16deb6563c9)
        ;




    var marker_cd47742c621f4f1d8a8881a9df032a3b = L.marker(
        [53.6470680236816, -124.572830200195],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_523a2e7f790a4c0e92abfa4939b20d28 = L.popup({ "maxWidth": "100%" });


    var html_90efb81d6d37423ea98aa1247c7a6adf = $(`<div id="html_90efb81d6d37423ea98aa1247c7a6adf" style="width: 100.0%; height: 100.0%;">Fort Fraser Food Bank</div>`)[0];
    popup_523a2e7f790a4c0e92abfa4939b20d28.setContent(html_90efb81d6d37423ea98aa1247c7a6adf);


    marker_cd47742c621f4f1d8a8881a9df032a3b.bindPopup(popup_523a2e7f790a4c0e92abfa4939b20d28)
        ;




    var marker_669bb72ccda34a818dd0324c7be48ef6 = L.marker(
        [54.442138671875, -124.255424499512],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fe18d9a7b7d9429799a24748ce528811 = L.popup({ "maxWidth": "100%" });


    var html_76dff76fc1184ada88c6d2109a3449fe = $(`<div id="html_76dff76fc1184ada88c6d2109a3449fe" style="width: 100.0%; height: 100.0%;">Stuart Lake Outreach Group</div>`)[0];
    popup_fe18d9a7b7d9429799a24748ce528811.setContent(html_76dff76fc1184ada88c6d2109a3449fe);


    marker_669bb72ccda34a818dd0324c7be48ef6.bindPopup(popup_fe18d9a7b7d9429799a24748ce528811)
        ;




    var marker_bb229c0593fd4424b4f051587cde4e67 = L.marker(
        [48.8597946166992, -123.281661987305],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_fe871a7ca72d4046aa3df08721bbed8a = L.popup({ "maxWidth": "100%" });


    var html_2b2b73de190a40468a0d7d8c3e481971 = $(`<div id="html_2b2b73de190a40468a0d7d8c3e481971" style="width: 100.0%; height: 100.0%;">Mayne Island Food Bank</div>`)[0];
    popup_fe871a7ca72d4046aa3df08721bbed8a.setContent(html_2b2b73de190a40468a0d7d8c3e481971);


    marker_bb229c0593fd4424b4f051587cde4e67.bindPopup(popup_fe871a7ca72d4046aa3df08721bbed8a)
        ;




    var marker_62a7e06949784ce6ba0aaa4c891c8108 = L.marker(
        [55.1257934570313, -120.993156433105],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0af30d6c0b0643d6912dc3007b653f42 = L.popup({ "maxWidth": "100%" });


    var html_341d987bc03845b0ae9d309c68ded182 = $(`<div id="html_341d987bc03845b0ae9d309c68ded182" style="width: 100.0%; height: 100.0%;">New Life Asssembly Family Assistance</div>`)[0];
    popup_0af30d6c0b0643d6912dc3007b653f42.setContent(html_341d987bc03845b0ae9d309c68ded182);


    marker_62a7e06949784ce6ba0aaa4c891c8108.bindPopup(popup_0af30d6c0b0643d6912dc3007b653f42)
        ;




    var marker_5820f6981b484d86a11cad2cc88e4d4b = L.marker(
        [45.9853706359863, -66.6341934204102],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6d9777e78cb9454a9ccdc9e61341e5d2 = L.popup({ "maxWidth": "100%" });


    var html_054a494f32b14f9d8210faf00ab0ee99 = $(`<div id="html_054a494f32b14f9d8210faf00ab0ee99" style="width: 100.0%; height: 100.0%;">Salvation Army Fredericton</div>`)[0];
    popup_6d9777e78cb9454a9ccdc9e61341e5d2.setContent(html_054a494f32b14f9d8210faf00ab0ee99);


    marker_5820f6981b484d86a11cad2cc88e4d4b.bindPopup(popup_6d9777e78cb9454a9ccdc9e61341e5d2)
        ;




    var marker_2616c694e3734b30bb6fb726c2381a4d = L.marker(
        [45.9735717773438, -65.0069198608398],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_74cb59d263a24069a2de04f58c3725fd = L.popup({ "maxWidth": "100%" });


    var html_d3b7b9f5ad1b4d1a8b4b29bb158ff720 = $(`<div id="html_d3b7b9f5ad1b4d1a8b4b29bb158ff720" style="width: 100.0%; height: 100.0%;">Salisbury Helping Hands Food Bank</div>`)[0];
    popup_74cb59d263a24069a2de04f58c3725fd.setContent(html_d3b7b9f5ad1b4d1a8b4b29bb158ff720);


    marker_2616c694e3734b30bb6fb726c2381a4d.bindPopup(popup_74cb59d263a24069a2de04f58c3725fd)
        ;




    var marker_aa59f8bfbe814cf6957b904e5a1e19d6 = L.marker(
        [46.7126541137695, -65.8451843261719],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_74012fde17844537a081b8dfcc405113 = L.popup({ "maxWidth": "100%" });


    var html_3fe1dffd74e449f795b09b06d776c4d7 = $(`<div id="html_3fe1dffd74e449f795b09b06d776c4d7" style="width: 100.0%; height: 100.0%;">Greater Blackville Resource Centre</div>`)[0];
    popup_74012fde17844537a081b8dfcc405113.setContent(html_3fe1dffd74e449f795b09b06d776c4d7);


    marker_aa59f8bfbe814cf6957b904e5a1e19d6.bindPopup(popup_74012fde17844537a081b8dfcc405113)
        ;




    var marker_1f435e4b0e3f4d79b2c9c544087aa654 = L.marker(
        [45.6728706359863, -66.7474670410156],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_98fbfcad8ac54cd2a5fbbda809a4042c = L.popup({ "maxWidth": "100%" });


    var html_7be23709942d4a2a8d2b6b5690fe7d46 = $(`<div id="html_7be23709942d4a2a8d2b6b5690fe7d46" style="width: 100.0%; height: 100.0%;">Village of Hope</div>`)[0];
    popup_98fbfcad8ac54cd2a5fbbda809a4042c.setContent(html_7be23709942d4a2a8d2b6b5690fe7d46);


    marker_1f435e4b0e3f4d79b2c9c544087aa654.bindPopup(popup_98fbfcad8ac54cd2a5fbbda809a4042c)
        ;




    var marker_842bb30d2f3e4b3d9b9f822857e1fee4 = L.marker(
        [42.9491920471191, -79.8563766479492],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_9348f5423c454b6590e1c6cf65ed9f69 = L.popup({ "maxWidth": "100%" });


    var html_9815a18d500245b6a3495a04592def7a = $(`<div id="html_9815a18d500245b6a3495a04592def7a" style="width: 100.0%; height: 100.0%;">Cayuga Food Bank</div>`)[0];
    popup_9348f5423c454b6590e1c6cf65ed9f69.setContent(html_9815a18d500245b6a3495a04592def7a);


    marker_842bb30d2f3e4b3d9b9f822857e1fee4.bindPopup(popup_9348f5423c454b6590e1c6cf65ed9f69)
        ;




    var marker_ac9d350ecbb44dd59a8b0e830d6392f5 = L.marker(
        [47.3981018066406, -79.6829299926758],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e5dd870528ad46358479961d177f20a1 = L.popup({ "maxWidth": "100%" });


    var html_502733c2e4df4551b6770d414b02f077 = $(`<div id="html_502733c2e4df4551b6770d414b02f077" style="width: 100.0%; height: 100.0%;">Colbalt. Coleman, Latchford and Area Food Bank</div>`)[0];
    popup_e5dd870528ad46358479961d177f20a1.setContent(html_502733c2e4df4551b6770d414b02f077);


    marker_ac9d350ecbb44dd59a8b0e830d6392f5.bindPopup(popup_e5dd870528ad46358479961d177f20a1)
        ;




    var marker_35d9e8d762fe4db9bf1a83b308ebb60d = L.marker(
        [43.0824317932129, -79.2803497314453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_286ceb063c9e43d0b702fdbd38daa624 = L.popup({ "maxWidth": "100%" });


    var html_45842a053eb2416985c960fa0fb187f9 = $(`<div id="html_45842a053eb2416985c960fa0fb187f9" style="width: 100.0%; height: 100.0%;">Pelham Cares Inc</div>`)[0];
    popup_286ceb063c9e43d0b702fdbd38daa624.setContent(html_45842a053eb2416985c960fa0fb187f9);


    marker_35d9e8d762fe4db9bf1a83b308ebb60d.bindPopup(popup_286ceb063c9e43d0b702fdbd38daa624)
        ;




    var marker_c23d0454d7cc46b788424dcccfdb4845 = L.marker(
        [46.3166809082031, -78.7024993896484],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_163f65d5ae7249a9ba7ae726be2084b4 = L.popup({ "maxWidth": "100%" });


    var html_83d1007b64fd487f81a22d24bdf591ed = $(`<div id="html_83d1007b64fd487f81a22d24bdf591ed" style="width: 100.0%; height: 100.0%;">Mattawa and Area Food Bank</div>`)[0];
    popup_163f65d5ae7249a9ba7ae726be2084b4.setContent(html_83d1007b64fd487f81a22d24bdf591ed);


    marker_c23d0454d7cc46b788424dcccfdb4845.bindPopup(popup_163f65d5ae7249a9ba7ae726be2084b4)
        ;




    var marker_815a21fdb9174948a8ef4be7d7965ae8 = L.marker(
        [43.5220565795898, -79.8645935058594],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f1a61df4ff9a4b399bbbd7327f242475 = L.popup({ "maxWidth": "100%" });


    var html_be79a8e08178426bbb2ebde07ea54c8d = $(`<div id="html_be79a8e08178426bbb2ebde07ea54c8d" style="width: 100.0%; height: 100.0%;">Salvation Army Milton Khi Community</div>`)[0];
    popup_f1a61df4ff9a4b399bbbd7327f242475.setContent(html_be79a8e08178426bbb2ebde07ea54c8d);


    marker_815a21fdb9174948a8ef4be7d7965ae8.bindPopup(popup_f1a61df4ff9a4b399bbbd7327f242475)
        ;




    var marker_c1b1ea8f2d43443283a0c0f31af4d6c7 = L.marker(
        [44.0568580627441, -79.4603652954102],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c215b852eb62430ca1766ff300f9ecaa = L.popup({ "maxWidth": "100%" });


    var html_ba3c105f88fa49c6b0cb1e5097feddba = $(`<div id="html_ba3c105f88fa49c6b0cb1e5097feddba" style="width: 100.0%; height: 100.0%;">Newmarket Food Pantry</div>`)[0];
    popup_c215b852eb62430ca1766ff300f9ecaa.setContent(html_ba3c105f88fa49c6b0cb1e5097feddba);


    marker_c1b1ea8f2d43443283a0c0f31af4d6c7.bindPopup(popup_c215b852eb62430ca1766ff300f9ecaa)
        ;




    var marker_d394f22903e443a3be34c9bc547e7c4d = L.marker(
        [44.4767646789551, -76.2367935180664],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6e44813d360141f6920a1cae338572ef = L.popup({ "maxWidth": "100%" });


    var html_1bea52261b94409a9b94260aea9a3a71 = $(`<div id="html_1bea52261b94409a9b94260aea9a3a71" style="width: 100.0%; height: 100.0%;">R.O.L.L. Aid Centre</div>`)[0];
    popup_6e44813d360141f6920a1cae338572ef.setContent(html_1bea52261b94409a9b94260aea9a3a71);


    marker_d394f22903e443a3be34c9bc547e7c4d.bindPopup(popup_6e44813d360141f6920a1cae338572ef)
        ;




    var marker_7b289662aced4682811fd82f88f5e9b5 = L.marker(
        [44.295711517334, -77.5488433837891],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e977bf9a25a743459cd33a9979602797 = L.popup({ "maxWidth": "100%" });


    var html_e32cdf18b2ae47719e2957830c5b3127 = $(`<div id="html_e32cdf18b2ae47719e2957830c5b3127" style="width: 100.0%; height: 100.0%;">Stirling and Area Christian Community Care</div>`)[0];
    popup_e977bf9a25a743459cd33a9979602797.setContent(html_e32cdf18b2ae47719e2957830c5b3127);


    marker_7b289662aced4682811fd82f88f5e9b5.bindPopup(popup_e977bf9a25a743459cd33a9979602797)
        ;




    var marker_894d7d4319c44ba296e1f83aa202a90c = L.marker(
        [42.9316062927246, -80.2895812988281],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_09301ea9c5314213b2f9492fbd4686b2 = L.popup({ "maxWidth": "100%" });


    var html_1f4e90747d9d4a2d95480d03338581de = $(`<div id="html_1f4e90747d9d4a2d95480d03338581de" style="width: 100.0%; height: 100.0%;">Waterford and District Food Cupboard</div>`)[0];
    popup_09301ea9c5314213b2f9492fbd4686b2.setContent(html_1f4e90747d9d4a2d95480d03338581de);


    marker_894d7d4319c44ba296e1f83aa202a90c.bindPopup(popup_09301ea9c5314213b2f9492fbd4686b2)
        ;




    var marker_b2e69060ade24b4984c454f84e9f2217 = L.marker(
        [48.5882720947266, -68.1955032348633],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0ecc7f2b3b77463abd6b9d5f7901c95f = L.popup({ "maxWidth": "100%" });


    var html_c19fac7d226049e4a9ff163b43da19bf = $(`<div id="html_c19fac7d226049e4a9ff163b43da19bf" style="width: 100.0%; height: 100.0%;">Moisson Mitis</div>`)[0];
    popup_0ecc7f2b3b77463abd6b9d5f7901c95f.setContent(html_c19fac7d226049e4a9ff163b43da19bf);


    marker_b2e69060ade24b4984c454f84e9f2217.bindPopup(popup_0ecc7f2b3b77463abd6b9d5f7901c95f)
        ;




    var marker_cf0da04ade634969a4f0134ba7352a27 = L.marker(
        [47.443115234375, -70.5070877075195],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3ae9d2ed53154ab1b5064f862938ffe9 = L.popup({ "maxWidth": "100%" });


    var html_3586c76a8ee445d7947d13cc035b17f6 = $(`<div id="html_3586c76a8ee445d7947d13cc035b17f6" style="width: 100.0%; height: 100.0%;">Centre Communautaire Pro-Santé</div>`)[0];
    popup_3ae9d2ed53154ab1b5064f862938ffe9.setContent(html_3586c76a8ee445d7947d13cc035b17f6);


    marker_cf0da04ade634969a4f0134ba7352a27.bindPopup(popup_3ae9d2ed53154ab1b5064f862938ffe9)
        ;




    var marker_ec5dedd69c4b46c082965a97d6ca694d = L.marker(
        [47.9757232666016, -66.9540176391602],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d3245211d9a946639cdf68dea524bb5d = L.popup({ "maxWidth": "100%" });


    var html_5af3dccf16234d8bb9a59c0dc89d8fc0 = $(`<div id="html_5af3dccf16234d8bb9a59c0dc89d8fc0" style="width: 100.0%; height: 100.0%;">Centre d\u0027action Bénévole ascension/Escuminac</div>`)[0];
    popup_d3245211d9a946639cdf68dea524bb5d.setContent(html_5af3dccf16234d8bb9a59c0dc89d8fc0);


    marker_ec5dedd69c4b46c082965a97d6ca694d.bindPopup(popup_d3245211d9a946639cdf68dea524bb5d)
        ;




    var marker_cd950a535f0c42b686355e784854a099 = L.marker(
        [49.2243309020996, -65.1313095092773],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8395e14bfb9047f994fc4c0c0cd24830 = L.popup({ "maxWidth": "100%" });


    var html_ed4dab519db84cdaa409d9dffc29fa26 = $(`<div id="html_ed4dab519db84cdaa409d9dffc29fa26" style="width: 100.0%; height: 100.0%;">Centre d\u0027action Bénévole la Grande Corvée</div>`)[0];
    popup_8395e14bfb9047f994fc4c0c0cd24830.setContent(html_ed4dab519db84cdaa409d9dffc29fa26);


    marker_cd950a535f0c42b686355e784854a099.bindPopup(popup_8395e14bfb9047f994fc4c0c0cd24830)
        ;




    var marker_c290ef14f06d4270b40a37aecf26ae47 = L.marker(
        [50.0345764160156, -66.852783203125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_7efac24110fe4fa2aca3d6929555eb53 = L.popup({ "maxWidth": "100%" });


    var html_3054d10bd6ac4cfab5a7c3bbb9cee989 = $(`<div id="html_3054d10bd6ac4cfab5a7c3bbb9cee989" style="width: 100.0%; height: 100.0%;">Centre d\u0027Action Bénévole de Port-Cartier</div>`)[0];
    popup_7efac24110fe4fa2aca3d6929555eb53.setContent(html_3054d10bd6ac4cfab5a7c3bbb9cee989);


    marker_c290ef14f06d4270b40a37aecf26ae47.bindPopup(popup_7efac24110fe4fa2aca3d6929555eb53)
        ;




    var marker_35e604a73e3e42c8a4135c02eef36c93 = L.marker(
        [48.0291900634766, -65.247917175293],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cf72c33802f347a0bdbed900708a2819 = L.popup({ "maxWidth": "100%" });


    var html_21fc4a36d4284af0bcfe5b1c97d886af = $(`<div id="html_21fc4a36d4284af0bcfe5b1c97d886af" style="width: 100.0%; height: 100.0%;">Collectf Aliment-Terre</div>`)[0];
    popup_cf72c33802f347a0bdbed900708a2819.setContent(html_21fc4a36d4284af0bcfe5b1c97d886af);


    marker_35e604a73e3e42c8a4135c02eef36c93.bindPopup(popup_cf72c33802f347a0bdbed900708a2819)
        ;




    var marker_88ebe61f217a45aaa5a85d403dc65ae0 = L.marker(
        [49.1284637451172, -66.4912567138672],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_2e09cd2502014981a12a39aef3a960f9 = L.popup({ "maxWidth": "100%" });


    var html_27dd5c0854a34311850e177bf8ec8d14 = $(`<div id="html_27dd5c0854a34311850e177bf8ec8d14" style="width: 100.0%; height: 100.0%;">Partagence</div>`)[0];
    popup_2e09cd2502014981a12a39aef3a960f9.setContent(html_27dd5c0854a34311850e177bf8ec8d14);


    marker_88ebe61f217a45aaa5a85d403dc65ae0.bindPopup(popup_2e09cd2502014981a12a39aef3a960f9)
        ;




    var marker_10b874e1899643bfaac1c3d74aeabd6b = L.marker(
        [48.1905899047852, -65.9678573608398],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6ef93567d50140eea62fd819eeca871a = L.popup({ "maxWidth": "100%" });


    var html_8084fdb9d55a49e49be64bc88851f832 = $(`<div id="html_8084fdb9d55a49e49be64bc88851f832" style="width: 100.0%; height: 100.0%;">Source Alimentaire Bonavignon</div>`)[0];
    popup_6ef93567d50140eea62fd819eeca871a.setContent(html_8084fdb9d55a49e49be64bc88851f832);


    marker_10b874e1899643bfaac1c3d74aeabd6b.bindPopup(popup_6ef93567d50140eea62fd819eeca871a)
        ;




    var marker_74e5fa17b0fb47a0a568443319d466a4 = L.marker(
        [50.9746246337891, -113.680236816406],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5fb99acba326406089f773b79474c137 = L.popup({ "maxWidth": "100%" });


    var html_6c98cae28d47423a8bf49854de106d5e = $(`<div id="html_6c98cae28d47423a8bf49854de106d5e" style="width: 100.0%; height: 100.0%;">Southeast Rockyview Food Bank Society</div>`)[0];
    popup_5fb99acba326406089f773b79474c137.setContent(html_6c98cae28d47423a8bf49854de106d5e);


    marker_74e5fa17b0fb47a0a568443319d466a4.bindPopup(popup_5fb99acba326406089f773b79474c137)
        ;




    var marker_9afc2317bebb409eb5b6b4d4a7e2452e = L.marker(
        [54.4171447753906, -110.215759277344],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b4539d32d37b404cbf4919db75d60005 = L.popup({ "maxWidth": "100%" });


    var html_4b0a526b04c44fb08e93a04cc5027bb1 = $(`<div id="html_4b0a526b04c44fb08e93a04cc5027bb1" style="width: 100.0%; height: 100.0%;">Cold Lake Food Bank</div>`)[0];
    popup_b4539d32d37b404cbf4919db75d60005.setContent(html_4b0a526b04c44fb08e93a04cc5027bb1);


    marker_9afc2317bebb409eb5b6b4d4a7e2452e.bindPopup(popup_b4539d32d37b404cbf4919db75d60005)
        ;




    var marker_e0192b35255e434cbf5957f0652782ce = L.marker(
        [54.2319831848145, -125.764854431152],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8f13e01361554fe2af6cb08601101eb6 = L.popup({ "maxWidth": "100%" });


    var html_49400ad1dd714e4a920e2e826b982416 = $(`<div id="html_49400ad1dd714e4a920e2e826b982416" style="width: 100.0%; height: 100.0%;">Lakes District Food Bank</div>`)[0];
    popup_8f13e01361554fe2af6cb08601101eb6.setContent(html_49400ad1dd714e4a920e2e826b982416);


    marker_e0192b35255e434cbf5957f0652782ce.bindPopup(popup_8f13e01361554fe2af6cb08601101eb6)
        ;




    var marker_2f4a93dda9f54eb983070b50109b6509 = L.marker(
        [45.0364379882813, -78.2228012084961],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b15943987273497cad3d5d3987280936 = L.popup({ "maxWidth": "100%" });


    var html_574a8e30acbd40b39cb08d3df12d064c = $(`<div id="html_574a8e30acbd40b39cb08d3df12d064c" style="width: 100.0%; height: 100.0%;">Central Food Network (Wilberforce Food Bank)</div>`)[0];
    popup_b15943987273497cad3d5d3987280936.setContent(html_574a8e30acbd40b39cb08d3df12d064c);


    marker_2f4a93dda9f54eb983070b50109b6509.bindPopup(popup_b15943987273497cad3d5d3987280936)
        ;




    var marker_8675b451fa784aee92659ad542cabfa8 = L.marker(
        [46.0892143249512, -64.794563293457],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_759cf7ee05544858b2d8ba85f778ff96 = L.popup({ "maxWidth": "100%" });


    var html_9eace6fcc37c4f1d9bfd3baa670923c1 = $(`<div id="html_9eace6fcc37c4f1d9bfd3baa670923c1" style="width: 100.0%; height: 100.0%;">Peter McKee Community Food Centre</div>`)[0];
    popup_759cf7ee05544858b2d8ba85f778ff96.setContent(html_9eace6fcc37c4f1d9bfd3baa670923c1);


    marker_8675b451fa784aee92659ad542cabfa8.bindPopup(popup_759cf7ee05544858b2d8ba85f778ff96)
        ;




    var marker_b8dc20b1204f4e1c8858849b7766e6ec = L.marker(
        [45.0889511108398, -75.3498992919922],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4c4cce11a08345f4b76b2f7f5dfd33ce = L.popup({ "maxWidth": "100%" });


    var html_ef39c30a090a4c8fb3a982bb1ad538e6 = $(`<div id="html_ef39c30a090a4c8fb3a982bb1ad538e6" style="width: 100.0%; height: 100.0%;">Community Food Share - Winchester</div>`)[0];
    popup_4c4cce11a08345f4b76b2f7f5dfd33ce.setContent(html_ef39c30a090a4c8fb3a982bb1ad538e6);


    marker_b8dc20b1204f4e1c8858849b7766e6ec.bindPopup(popup_4c4cce11a08345f4b76b2f7f5dfd33ce)
        ;




    var marker_792f71b862f748d6b4a7d7e7ac33d977 = L.marker(
        [68.3607406616211, -133.723022460938],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b77f4603be774b008e2d0c85fde3e891 = L.popup({ "maxWidth": "100%" });


    var html_ff0c38f0ea3b4000beb153ab3c933db7 = $(`<div id="html_ff0c38f0ea3b4000beb153ab3c933db7" style="width: 100.0%; height: 100.0%;">Inuvik Food Bank</div>`)[0];
    popup_b77f4603be774b008e2d0c85fde3e891.setContent(html_ff0c38f0ea3b4000beb153ab3c933db7);


    marker_792f71b862f748d6b4a7d7e7ac33d977.bindPopup(popup_b77f4603be774b008e2d0c85fde3e891)
        ;




    var marker_33d949269c094508b68d35c23c527aba = L.marker(
        [46.3864936828613, -82.6481094360352],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0b183c08666640f19bbcca9b2759f851 = L.popup({ "maxWidth": "100%" });


    var html_9a165c0c4e814ed1932426aee04f6340 = $(`<div id="html_9a165c0c4e814ed1932426aee04f6340" style="width: 100.0%; height: 100.0%;">Elliot Lake Emergency Food Bank Inc.</div>`)[0];
    popup_0b183c08666640f19bbcca9b2759f851.setContent(html_9a165c0c4e814ed1932426aee04f6340);


    marker_33d949269c094508b68d35c23c527aba.bindPopup(popup_0b183c08666640f19bbcca9b2759f851)
        ;




    var marker_523c8c8d3d6341eea8bdf03944aa265c = L.marker(
        [45.8236274719238, -77.1215972900391],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_50c169c69f744543a9fb51b11a0e497f = L.popup({ "maxWidth": "100%" });


    var html_58772bb8a9a74a8f9ac0108b2896cdca = $(`<div id="html_58772bb8a9a74a8f9ac0108b2896cdca" style="width: 100.0%; height: 100.0%;">Salvation Army Pembroke</div>`)[0];
    popup_50c169c69f744543a9fb51b11a0e497f.setContent(html_58772bb8a9a74a8f9ac0108b2896cdca);


    marker_523c8c8d3d6341eea8bdf03944aa265c.bindPopup(popup_50c169c69f744543a9fb51b11a0e497f)
        ;




    var marker_3dacef7e101b410b91655bf601685aa4 = L.marker(
        [53.525276184082, -113.527305603027],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cd8b8f8cea104054b42bfa10b62333fd = L.popup({ "maxWidth": "100%" });


    var html_f88af4549f3a4f21b306516c4f801fc0 = $(`<div id="html_f88af4549f3a4f21b306516c4f801fc0" style="width: 100.0%; height: 100.0%;">Campus Food Bank Society</div>`)[0];
    popup_cd8b8f8cea104054b42bfa10b62333fd.setContent(html_f88af4549f3a4f21b306516c4f801fc0);


    marker_3dacef7e101b410b91655bf601685aa4.bindPopup(popup_cd8b8f8cea104054b42bfa10b62333fd)
        ;




    var marker_c5390e068c0f48e6a1358c5443f43f55 = L.marker(
        [51.9459571838379, -103.801246643066],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_aff22d73bb744c6ea575660264254fb1 = L.popup({ "maxWidth": "100%" });


    var html_ee5e137ba9a941d9a70092b8dc0487b4 = $(`<div id="html_ee5e137ba9a941d9a70092b8dc0487b4" style="width: 100.0%; height: 100.0%;">Wadena Food Bank</div>`)[0];
    popup_aff22d73bb744c6ea575660264254fb1.setContent(html_ee5e137ba9a941d9a70092b8dc0487b4);


    marker_c5390e068c0f48e6a1358c5443f43f55.bindPopup(popup_aff22d73bb744c6ea575660264254fb1)
        ;




    var marker_a67e96da26ac4437aa6a6a820988266b = L.marker(
        [43.4464378356934, -79.6859512329102],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_43132f83eea2493a9c7b05790bd988f3 = L.popup({ "maxWidth": "100%" });


    var html_4b68ed83a9b849d48589a4105cf30306 = $(`<div id="html_4b68ed83a9b849d48589a4105cf30306" style="width: 100.0%; height: 100.0%;">Kerr Street Ministries</div>`)[0];
    popup_43132f83eea2493a9c7b05790bd988f3.setContent(html_4b68ed83a9b849d48589a4105cf30306);


    marker_a67e96da26ac4437aa6a6a820988266b.bindPopup(popup_43132f83eea2493a9c7b05790bd988f3)
        ;




    var marker_0b27951cbbc64dbfa3e619f0f396ad81 = L.marker(
        [48.8277740478516, -64.4872589111328],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_c04b5bc7fa1c47bdb806aa6fe9814e80 = L.popup({ "maxWidth": "100%" });


    var html_5ddadd335f144df8b03d0e454f2bb314 = $(`<div id="html_5ddadd335f144df8b03d0e454f2bb314" style="width: 100.0%; height: 100.0%;">Accuiel Blanche Goulet de Gaspé</div>`)[0];
    popup_c04b5bc7fa1c47bdb806aa6fe9814e80.setContent(html_5ddadd335f144df8b03d0e454f2bb314);


    marker_0b27951cbbc64dbfa3e619f0f396ad81.bindPopup(popup_c04b5bc7fa1c47bdb806aa6fe9814e80)
        ;




    var marker_b7824b17ba8147518c1f486a673709e8 = L.marker(
        [49.6695175170898, -96.6476745605469],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_361cafe427b24027ab4425d5a5413863 = L.popup({ "maxWidth": "100%" });


    var html_6f917c8f359a43239e3cf60d1e13be52 = $(`<div id="html_6f917c8f359a43239e3cf60d1e13be52" style="width: 100.0%; height: 100.0%;">Accueil Kateri Centre</div>`)[0];
    popup_361cafe427b24027ab4425d5a5413863.setContent(html_6f917c8f359a43239e3cf60d1e13be52);


    marker_b7824b17ba8147518c1f486a673709e8.bindPopup(popup_361cafe427b24027ab4425d5a5413863)
        ;




    var marker_026a8c5629854d2481fd6b94d675d493 = L.marker(
        [52.2183380126953, -111.906112670898],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f3ba9e601caa48a38f0d8ffe3021793b = L.popup({ "maxWidth": "100%" });


    var html_b36ff0e184a743a59f46cdeba2602393 = $(`<div id="html_b36ff0e184a743a59f46cdeba2602393" style="width: 100.0%; height: 100.0%;">Castor \u0026 District Food Bank \u0026 Silent Santa Society</div>`)[0];
    popup_f3ba9e601caa48a38f0d8ffe3021793b.setContent(html_b36ff0e184a743a59f46cdeba2602393);


    marker_026a8c5629854d2481fd6b94d675d493.bindPopup(popup_f3ba9e601caa48a38f0d8ffe3021793b)
        ;




    var marker_b9284c5e085b4e0e965fa29b3ddfe8fc = L.marker(
        [52.0626792907715, -111.467956542969],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d6a870c02d8948118ce75757040794a1 = L.popup({ "maxWidth": "100%" });


    var html_2a6619e2300e4d24bb3b4a648e35411b = $(`<div id="html_2a6619e2300e4d24bb3b4a648e35411b" style="width: 100.0%; height: 100.0%;">Consort Food Bank *</div>`)[0];
    popup_d6a870c02d8948118ce75757040794a1.setContent(html_2a6619e2300e4d24bb3b4a648e35411b);


    marker_b9284c5e085b4e0e965fa29b3ddfe8fc.bindPopup(popup_d6a870c02d8948118ce75757040794a1)
        ;




    var marker_d0816c76d1724980a6ca7b016281ed83 = L.marker(
        [44.7660255432129, -66.7520294189453],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_04f6c3c2c38a4fb19301b7720807182a = L.popup({ "maxWidth": "100%" });


    var html_113fe0b66941472da9ff8d8c5ba5714c = $(`<div id="html_113fe0b66941472da9ff8d8c5ba5714c" style="width: 100.0%; height: 100.0%;">Grand Manan Food Bank</div>`)[0];
    popup_04f6c3c2c38a4fb19301b7720807182a.setContent(html_113fe0b66941472da9ff8d8c5ba5714c);


    marker_d0816c76d1724980a6ca7b016281ed83.bindPopup(popup_04f6c3c2c38a4fb19301b7720807182a)
        ;




    var marker_3cea4e49dfbe4297b4bdcb667ee1cc4e = L.marker(
        [49.8714027404785, -113.507667541504],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_eb76a4271e464a14b0a43c86f711c850 = L.popup({ "maxWidth": "100%" });


    var html_07c759b9c5c6418c8d920a515b781108 = $(`<div id="html_07c759b9c5c6418c8d920a515b781108" style="width: 100.0%; height: 100.0%;">Granum Drop-in Centre</div>`)[0];
    popup_eb76a4271e464a14b0a43c86f711c850.setContent(html_07c759b9c5c6418c8d920a515b781108);


    marker_3cea4e49dfbe4297b4bdcb667ee1cc4e.bindPopup(popup_eb76a4271e464a14b0a43c86f711c850)
        ;




    var marker_9a3d72e493884147b5966a5d9deca6e8 = L.marker(
        [42.9842758178711, -80.0646667480469],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_62a2fb73247c414cbc7938c0ea371a3b = L.popup({ "maxWidth": "100%" });


    var html_e605212abde64dd486facc58b7e66b79 = $(`<div id="html_e605212abde64dd486facc58b7e66b79" style="width: 100.0%; height: 100.0%;">Hagersville Food Bank</div>`)[0];
    popup_62a2fb73247c414cbc7938c0ea371a3b.setContent(html_e605212abde64dd486facc58b7e66b79);


    marker_9a3d72e493884147b5966a5d9deca6e8.bindPopup(popup_62a2fb73247c414cbc7938c0ea371a3b)
        ;




    var marker_342bce97d33f4cdba3f525a7528c2e95 = L.marker(
        [49.1325302124023, -55.2250175476074],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_6d0f325b4cb94027bc56882ab94794b0 = L.popup({ "maxWidth": "100%" });


    var html_260abdb55ca7431391c083ffab8de285 = $(`<div id="html_260abdb55ca7431391c083ffab8de285" style="width: 100.0%; height: 100.0%;">Lewisporte Food Bank</div>`)[0];
    popup_6d0f325b4cb94027bc56882ab94794b0.setContent(html_260abdb55ca7431391c083ffab8de285);


    marker_342bce97d33f4cdba3f525a7528c2e95.bindPopup(popup_6d0f325b4cb94027bc56882ab94794b0)
        ;




    var marker_2cd02475ac604323bdf98ad789f1f3ff = L.marker(
        [47.5917930603027, -52.7102165222168],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_b89338eb097e4696bf82caa91e610e34 = L.popup({ "maxWidth": "100%" });


    var html_b8e6d9f8b0684948ab022f46fcac7036 = $(`<div id="html_b8e6d9f8b0684948ab022f46fcac7036" style="width: 100.0%; height: 100.0%;">Mac Morran Community Centre</div>`)[0];
    popup_b89338eb097e4696bf82caa91e610e34.setContent(html_b8e6d9f8b0684948ab022f46fcac7036);


    marker_2cd02475ac604323bdf98ad789f1f3ff.bindPopup(popup_b89338eb097e4696bf82caa91e610e34)
        ;




    var marker_476372823f3b4222ae1f80f0dc21c077 = L.marker(
        [56.9233932495117, -117.632118225098],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f09577a7db644890bc526be56b45afe9 = L.popup({ "maxWidth": "100%" });


    var html_209595dcac3a4b4fa318ac889850242c = $(`<div id="html_209595dcac3a4b4fa318ac889850242c" style="width: 100.0%; height: 100.0%;">Manning \u0026 Area Food Bank</div>`)[0];
    popup_f09577a7db644890bc526be56b45afe9.setContent(html_209595dcac3a4b4fa318ac889850242c);


    marker_476372823f3b4222ae1f80f0dc21c077.bindPopup(popup_f09577a7db644890bc526be56b45afe9)
        ;




    var marker_6551844d78c44dfba564ac657bd9fc66 = L.marker(
        [53.9505882263184, -115.146980285645],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_4bd6e20fc8044d9ab243afa5ec02b762 = L.popup({ "maxWidth": "100%" });


    var html_a6198f59870646df9068ba0403c2f4ea = $(`<div id="html_a6198f59870646df9068ba0403c2f4ea" style="width: 100.0%; height: 100.0%;">Mayerthorpe Food Bank</div>`)[0];
    popup_4bd6e20fc8044d9ab243afa5ec02b762.setContent(html_a6198f59870646df9068ba0403c2f4ea);


    marker_6551844d78c44dfba564ac657bd9fc66.bindPopup(popup_4bd6e20fc8044d9ab243afa5ec02b762)
        ;




    var marker_687bcbb9767e4af094b0fd50ce4e609b = L.marker(
        [46.07080078125, -66.0614013671875],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_367916992cb140258a0ed96f5d346863 = L.popup({ "maxWidth": "100%" });


    var html_fe938ae9bdc64aa1960ab04b12c847cc = $(`<div id="html_fe938ae9bdc64aa1960ab04b12c847cc" style="width: 100.0%; height: 100.0%;">Minto Community Resource Centre</div>`)[0];
    popup_367916992cb140258a0ed96f5d346863.setContent(html_fe938ae9bdc64aa1960ab04b12c847cc);


    marker_687bcbb9767e4af094b0fd50ce4e609b.bindPopup(popup_367916992cb140258a0ed96f5d346863)
        ;




    var marker_a0dc7816aa324dfda34308aece9c26d2 = L.marker(
        [52.9676628112793, -113.376480102539],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_75a7c50013ed4997a914b12cbc237a18 = L.popup({ "maxWidth": "100%" });


    var html_dba5d949b1b0416f99043cdd8de32792 = $(`<div id="html_dba5d949b1b0416f99043cdd8de32792" style="width: 100.0%; height: 100.0%;">Neighbours Outreach Wetaskiwin *</div>`)[0];
    popup_75a7c50013ed4997a914b12cbc237a18.setContent(html_dba5d949b1b0416f99043cdd8de32792);


    marker_a0dc7816aa324dfda34308aece9c26d2.bindPopup(popup_75a7c50013ed4997a914b12cbc237a18)
        ;




    var marker_81d0d9546e924f8380bcfa1c18af828d = L.marker(
        [44.1686820983887, -77.3926849365234],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_0438f5e6ce714b959fdf6105353a09bc = L.popup({ "maxWidth": "100%" });


    var html_66104ea3ae7c4637bd1b3e83a1e88005 = $(`<div id="html_66104ea3ae7c4637bd1b3e83a1e88005" style="width: 100.0%; height: 100.0%;">Quinte Region Food Share Shelter</div>`)[0];
    popup_0438f5e6ce714b959fdf6105353a09bc.setContent(html_66104ea3ae7c4637bd1b3e83a1e88005);


    marker_81d0d9546e924f8380bcfa1c18af828d.bindPopup(popup_0438f5e6ce714b959fdf6105353a09bc)
        ;




    var marker_bb27d5703c044fd39406568a37dbb496 = L.marker(
        [46.4027481079102, -63.7716407775879],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f7612e58ca7449b7914a4d811906a4f5 = L.popup({ "maxWidth": "100%" });


    var html_694d676a2fd74c5eb343a8382cf01d1f = $(`<div id="html_694d676a2fd74c5eb343a8382cf01d1f" style="width: 100.0%; height: 100.0%;">Salvation Army - Summerside</div>`)[0];
    popup_f7612e58ca7449b7914a4d811906a4f5.setContent(html_694d676a2fd74c5eb343a8382cf01d1f);


    marker_bb27d5703c044fd39406568a37dbb496.bindPopup(popup_f7612e58ca7449b7914a4d811906a4f5)
        ;




    var marker_3b61087362d749728ee324e8447a1c0a = L.marker(
        [45.0528907775879, -79.3265533447266],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_8d09a450b9f04735845e5bb146accf19 = L.popup({ "maxWidth": "100%" });


    var html_ca59ed7905e0476089196970bf02302e = $(`<div id="html_ca59ed7905e0476089196970bf02302e" style="width: 100.0%; height: 100.0%;">Salvation Army Bracebridge</div>`)[0];
    popup_8d09a450b9f04735845e5bb146accf19.setContent(html_ca59ed7905e0476089196970bf02302e);


    marker_3b61087362d749728ee324e8447a1c0a.bindPopup(popup_8d09a450b9f04735845e5bb146accf19)
        ;




    var marker_4dbae02996ab4960b3e3911e8bb2674d = L.marker(
        [50.3555946350098, -113.989807128906],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_cd770cee795d496facf8c5af56704dc1 = L.popup({ "maxWidth": "100%" });


    var html_313f2fa2707c406c9bbe6ca390a5a669 = $(`<div id="html_313f2fa2707c406c9bbe6ca390a5a669" style="width: 100.0%; height: 100.0%;">Salvation Army Fort McLeod Food Bank</div>`)[0];
    popup_cd770cee795d496facf8c5af56704dc1.setContent(html_313f2fa2707c406c9bbe6ca390a5a669);


    marker_4dbae02996ab4960b3e3911e8bb2674d.bindPopup(popup_cd770cee795d496facf8c5af56704dc1)
        ;




    var marker_6c31eb126faf478a9c717dc4c012e802 = L.marker(
        [49.4633712768555, -54.829833984375],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5ba111da774a47a4821a0919284862c6 = L.popup({ "maxWidth": "100%" });


    var html_eb6e6abb291c4cf79d15fc6c76f7da70 = $(`<div id="html_eb6e6abb291c4cf79d15fc6c76f7da70" style="width: 100.0%; height: 100.0%;">Salvation Army In His Name Food Bank</div>`)[0];
    popup_5ba111da774a47a4821a0919284862c6.setContent(html_eb6e6abb291c4cf79d15fc6c76f7da70);


    marker_6c31eb126faf478a9c717dc4c012e802.bindPopup(popup_5ba111da774a47a4821a0919284862c6)
        ;




    var marker_db8c2a410d9e443da1b2057402afc301 = L.marker(
        [47.9941368103027, -52.986946105957],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f3b5533c5a6b487cacef26a25f81ed07 = L.popup({ "maxWidth": "100%" });


    var html_d35d7f1ae8274eb0bf84b8d0c685db30 = $(`<div id="html_d35d7f1ae8274eb0bf84b8d0c685db30" style="width: 100.0%; height: 100.0%;">Salvation Army Lower Island Cove Corps</div>`)[0];
    popup_f3b5533c5a6b487cacef26a25f81ed07.setContent(html_d35d7f1ae8274eb0bf84b8d0c685db30);


    marker_db8c2a410d9e443da1b2057402afc301.bindPopup(popup_f3b5533c5a6b487cacef26a25f81ed07)
        ;




    var marker_6c2417b41e444c7fb151ef7a2e16a3b2 = L.marker(
        [53.3851928710938, -103.874412536621],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5d7c019734874eacbe6d309c5f843d30 = L.popup({ "maxWidth": "100%" });


    var html_17294a7e754b46378ca6675623960136 = $(`<div id="html_17294a7e754b46378ca6675623960136" style="width: 100.0%; height: 100.0%;">Salvation Army Nipawin</div>`)[0];
    popup_5d7c019734874eacbe6d309c5f843d30.setContent(html_17294a7e754b46378ca6675623960136);


    marker_6c2417b41e444c7fb151ef7a2e16a3b2.bindPopup(popup_5d7c019734874eacbe6d309c5f843d30)
        ;




    var marker_a86a5b20391b467f9fed93ca7847305e = L.marker(
        [43.2590217590332, -81.1414947509766],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_ef994c8e97c74930a4bd2c792fe95b7f = L.popup({ "maxWidth": "100%" });


    var html_c69bbc424d0846a393fd7e2061f1bede = $(`<div id="html_c69bbc424d0846a393fd7e2061f1bede" style="width: 100.0%; height: 100.0%;">Salvation Army St. Mary\u0027s</div>`)[0];
    popup_ef994c8e97c74930a4bd2c792fe95b7f.setContent(html_c69bbc424d0846a393fd7e2061f1bede);


    marker_a86a5b20391b467f9fed93ca7847305e.bindPopup(popup_ef994c8e97c74930a4bd2c792fe95b7f)
        ;




    var marker_a714ff8991db4a4ea25609e14d859056 = L.marker(
        [49.6525573730469, -54.7717971801758],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_344cbf679d8343c48767065320f8bf54 = L.popup({ "maxWidth": "100%" });


    var html_21fb5d343d7b41aca52ddce5c472a1c6 = $(`<div id="html_21fb5d343d7b41aca52ddce5c472a1c6" style="width: 100.0%; height: 100.0%;">Salvation Army Twillingate_Bayview Corps (Helping Hand)</div>`)[0];
    popup_344cbf679d8343c48767065320f8bf54.setContent(html_21fb5d343d7b41aca52ddce5c472a1c6);


    marker_a714ff8991db4a4ea25609e14d859056.bindPopup(popup_344cbf679d8343c48767065320f8bf54)
        ;




    var marker_378991d4fc6948f58f3c44b6c91ffbe7 = L.marker(
        [56.5337715148926, -61.7462577819824],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_f87080749bd244c08f493da9864a6c60 = L.popup({ "maxWidth": "100%" });


    var html_8fcc5814708444b3983e8c65bc011f57 = $(`<div id="html_8fcc5814708444b3983e8c65bc011f57" style="width: 100.0%; height: 100.0%;">TaKuaKautik - Nain Food Bank</div>`)[0];
    popup_f87080749bd244c08f493da9864a6c60.setContent(html_8fcc5814708444b3983e8c65bc011f57);


    marker_378991d4fc6948f58f3c44b6c91ffbe7.bindPopup(popup_f87080749bd244c08f493da9864a6c60)
        ;




    var marker_2af33b4f9b884530bb36f3d763dbbe64 = L.marker(
        [54.5322570800781, -57.3328285217285],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_d67f04b0dcd04fe09c30ce19609fa58e = L.popup({ "maxWidth": "100%" });


    var html_e867512ebe1b452c9e9579c71db4dd14 = $(`<div id="html_e867512ebe1b452c9e9579c71db4dd14" style="width: 100.0%; height: 100.0%;">The Anglican Parish of St. Timothy</div>`)[0];
    popup_d67f04b0dcd04fe09c30ce19609fa58e.setContent(html_e867512ebe1b452c9e9579c71db4dd14);


    marker_2af33b4f9b884530bb36f3d763dbbe64.bindPopup(popup_d67f04b0dcd04fe09c30ce19609fa58e)
        ;




    var marker_87008b9b3e744568ae781cf8c46a5660 = L.marker(
        [53.2838096618652, -110.00853729248],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5210f0af756b40c4842f0ed88ada2d6b = L.popup({ "maxWidth": "100%" });


    var html_cfc6ad5d36b04e2abe4bd6faee732a56 = $(`<div id="html_cfc6ad5d36b04e2abe4bd6faee732a56" style="width: 100.0%; height: 100.0%;">The Olive Tree Community Centre Inc.</div>`)[0];
    popup_5210f0af756b40c4842f0ed88ada2d6b.setContent(html_cfc6ad5d36b04e2abe4bd6faee732a56);


    marker_87008b9b3e744568ae781cf8c46a5660.bindPopup(popup_5210f0af756b40c4842f0ed88ada2d6b)
        ;




    var marker_bf1c672eb01a4b65804150692c3a71d7 = L.marker(
        [44.9014167785645, -76.2383804321289],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_5783a66981e948f581eceb50660584ee = L.popup({ "maxWidth": "100%" });


    var html_d1f522d0c15f40f4b24f08c20a42f29a = $(`<div id="html_d1f522d0c15f40f4b24f08c20a42f29a" style="width: 100.0%; height: 100.0%;">The Table Community Food Centre</div>`)[0];
    popup_5783a66981e948f581eceb50660584ee.setContent(html_d1f522d0c15f40f4b24f08c20a42f29a);


    marker_bf1c672eb01a4b65804150692c3a71d7.bindPopup(popup_5783a66981e948f581eceb50660584ee)
        ;




    var marker_cba96ef3f9b54bb29b4cf1e9882acae6 = L.marker(
        [49.1501274108887, -112.0869140625],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_695c347b77784383a7ecf11bba5e3d2f = L.popup({ "maxWidth": "100%" });


    var html_4223dab3dd6144e8b3e242299255acb8 = $(`<div id="html_4223dab3dd6144e8b3e242299255acb8" style="width: 100.0%; height: 100.0%;">Tri- Community Pantry (St Pauls United Church)</div>`)[0];
    popup_695c347b77784383a7ecf11bba5e3d2f.setContent(html_4223dab3dd6144e8b3e242299255acb8);


    marker_cba96ef3f9b54bb29b4cf1e9882acae6.bindPopup(popup_695c347b77784383a7ecf11bba5e3d2f)
        ;




    var marker_85ccc231bc7149f8b4fd42918ce50467 = L.marker(
        [48.4984283447266, -53.0852241516113],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_3b40fd5b693b4211b9bb15a438fe1c0a = L.popup({ "maxWidth": "100%" });


    var html_e23cb15a26e4473382a9b944307c29e5 = $(`<div id="html_e23cb15a26e4473382a9b944307c29e5" style="width: 100.0%; height: 100.0%;">Trinity Bay North Community Care and Share</div>`)[0];
    popup_3b40fd5b693b4211b9bb15a438fe1c0a.setContent(html_e23cb15a26e4473382a9b944307c29e5);


    marker_85ccc231bc7149f8b4fd42918ce50467.bindPopup(popup_3b40fd5b693b4211b9bb15a438fe1c0a)
        ;




    var marker_6c5e3a34d3414f8da59828de491fda04 = L.marker(
        [50.9483337402344, -114.145835876465],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_562dec58c85b41239b0062a00b34a824 = L.popup({ "maxWidth": "100%" });


    var html_a52dd18b33dc40aab04577ea87e7b9d5 = $(`<div id="html_a52dd18b33dc40aab04577ea87e7b9d5" style="width: 100.0%; height: 100.0%;">Tsuut\u0027ina Food Bank</div>`)[0];
    popup_562dec58c85b41239b0062a00b34a824.setContent(html_a52dd18b33dc40aab04577ea87e7b9d5);


    marker_6c5e3a34d3414f8da59828de491fda04.bindPopup(popup_562dec58c85b41239b0062a00b34a824)
        ;




    var marker_269bfd5a77424bd89cd9f01ca10dd00e = L.marker(
        [45.8097763061523, -65.579345703125],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_e6a7929eb9564a4ba5ea801b52c4be6b = L.popup({ "maxWidth": "100%" });


    var html_5be20e2bf182421d90e13de8b28fffe9 = $(`<div id="html_5be20e2bf182421d90e13de8b28fffe9" style="width: 100.0%; height: 100.0%;">Salvation Army Sussex</div>`)[0];
    popup_e6a7929eb9564a4ba5ea801b52c4be6b.setContent(html_5be20e2bf182421d90e13de8b28fffe9);


    marker_269bfd5a77424bd89cd9f01ca10dd00e.bindPopup(popup_e6a7929eb9564a4ba5ea801b52c4be6b)
        ;




    var marker_d94ffd3bfdfe4e8eb318bc3220ca60d7 = L.marker(
        [47.5190277099609, -52.8069267272949],
        {}
    ).addTo(map_43c67d12571c43ac916e0711638cbe21);


    var popup_bf0296bed9824a56b452992e578013ba = L.popup({ "maxWidth": "100%" });


    var html_e2747f3c165c4efe922d91ffbaa9665c = $(`<div id="html_e2747f3c165c4efe922d91ffbaa9665c" style="width: 100.0%; height: 100.0%;">Salvation Army Mount Pearl Food bank</div>`)[0];
    popup_bf0296bed9824a56b452992e578013ba.setContent(html_e2747f3c165c4efe922d91ffbaa9665c);


    marker_d94ffd3bfdfe4e8eb318bc3220ca60d7.bindPopup(popup_bf0296bed9824a56b452992e578013ba)
        ;
}
