/**
 * LÓGICA DE PROGRAMAÇÃO DA HOME PAGE DO PROJETO DO SITE MUSICAL EVOLUTION
 * Atividade da Conclusão de curso JAVASCRIPT
 * Prof. Claudio Junior Nascimento
 *
 *  **/

/*** DEFININDO OBJETO PRODUTO ***/
const oldProd = [
  { prdID: 131036, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-electromatic-bigsby-semi-acustica-g5420t-two-tone-vintage-white-131036/344111.jpg?w=275&h=275&v=202504091045", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Electromatic Bigsby Semi-Acústica G5420T - Two-Tone Vintage White" }, { prdID: 130030, prdPrecoUnit: 43990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gibson-les-paul-slash-standard-november-burst-130030/343098.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Gibson", prdDescr: "Guitarra Gibson Les Paul Slash Standard - November Burst" }, { prdID: 121848, prdPrecoUnit: 1489.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tw-55-preta-121848/308333.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TW-55 - Preta" }, { prdID: 130064, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-epiphone-les-paul-special-tv-yellow-130064/343132.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Epiphone", prdDescr: "Guitarra Epiphone Les Paul Special - TV Yellow" }, { prdID: 131026, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-chromatic-ii-semi-acustica-g2420-cadillac-green-131026/344101.jpg?w=275&h=275&v=202504081327", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Chromatic II Semi-Acústica G2420 - Cadillac Green" }, { prdID: 130901, prdPrecoUnit: 21990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-tom-morello-signature-preta-130901/343975.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Tom Morello Signature - Preta" }, { prdID: 131079, prdPrecoUnit: 1789.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-duo-smart-s-preta-131079/344154.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Duo Smart-S - Preta" }, { prdID: 130868, prdPrecoUnit: 10290.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jaguar-player-ii-aquatone-blue-130868/343941.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jaguar Player II - Aquatone Blue" }, { prdID: 128119, prdPrecoUnit: 1349.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-510-metallic-blue-128119/314605.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-510 - Metallic Blue" }, { prdID: 129316, prdPrecoUnit: 4819.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-ibanez-azes31-single-coil-vermelha-129316/342377.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Ibanez", prdDescr: "Guitarra Ibanez AZES31 Single-Coil Vermelha" }, { prdID: 131013, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2622t-vintage-white-131013/344088.jpg?w=275&h=275&v=202504081140", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2622T - Vintage White" }, { prdID: 129798, prdPrecoUnit: 29990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-american-ultra-stratocaster-hss-cobra-blue-129798/342865.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender American Ultra Stratocaster HSS - Cobra Blue" }, { prdID: 128673, prdPrecoUnit: 5239.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-classic-vibe-70s-olympic-white-128673/315613.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Classic Vibe 70s - Olympic White" }, { prdID: 130770, prdPrecoUnit: 11490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-prs-se-nf3-ice-blue-metallic-130770/343840.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra PRS", prdDescr: "Guitarra PRS SE NF3 - Ice Blue Metallic" }, { prdID: 69267, prdPrecoUnit: 2019.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tw-61-fiesta-red-no-estado-peca-de-showroom-69267/255750.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TW-61 - Fiesta Red (No Estado Peça de Showroom)" }, { prdID: 129045, prdPrecoUnit: 4099.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-mirach-com-hardcase-preta-129045/316205.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Mirach com Hardcase - Preta" }, { prdID: 130859, prdPrecoUnit: 1490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-debut-preta-130859/343932.jpg?w=275&h=275&v=202502181718", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Debut - Preta" }, { prdID: 131029, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-chromatic-ii-semi-acustica-g2420-village-amber-131029/344104.jpg?w=275&h=275&v=202504081405", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Chromatic II Semi-Acústica G2420 - Village Amber" }, { prdID: 130693, prdPrecoUnit: 11590.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-hss-preta-130693/343763.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II HSS - Preta" }, { prdID: 131025, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-v-stoptail-semi-acustica-g2622-forge-glow-131025/344100.jpg?w=275&h=275&v=202504081245", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner V-Stoptail Semi-Acústica G2622 - Forge Glow" }, { prdID: 130968, prdPrecoUnit: 19990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jazz-tele-2018-edicao-limitada-2-color-sunburst-130968/344043.jpg?w=275&h=275&v=202503061031", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jazz-Tele 2018 Edição Limitada - 2-Color Sunburst" }, { prdID: 130847, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jazzmaster-player-ii-birch-green-130847/343920.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jazzmaster Player II - Birch Green" }, { prdID: 131031, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2420t-havana-burst-131031/344106.jpg?w=275&h=275&v=202504081634", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2420T - Havana Burst" }, { prdID: 130177, prdPrecoUnit: 1479.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-540-preta-130177/343245.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-540 - Preta" }, { prdID: 129610, prdPrecoUnit: 8249.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-revstar-standard-rss20-hot-merlot-129610/342677.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Revstar Standard RSS20 - Hot Merlot" }, { prdID: 131032, prdPrecoUnit: 35990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-american-ultra-hss-aniversario-de-70-anos-amethyst-131032/344107.jpg?w=275&h=275&v=202504081643", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster American Ultra HSS Aniversário de 70 Anos - Amethyst" }, { prdID: 131021, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2655t-forge-glow-131021/344096.jpg?w=275&h=275&v=202504081218", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-acústica G2655T - Forge Glow" }, { prdID: 131080, prdPrecoUnit: 1789.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-duo-smart-s-candy-apple-131080/344155.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Duo Smart-S - Candy Apple" }, { prdID: 130794, prdPrecoUnit: 2539.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-t-640-super-hss-surf-green-130794/343864.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima T-640 Super HSS - Surf Green" }, { prdID: 130871, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-polar-white-130871/343944.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Polar White" }, { prdID: 128520, prdPrecoUnit: 24990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-american-professional-ii-sienna-sunburst-128520/315021.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster American Professional II - Sienna Sunburst" }, { prdID: 129977, prdPrecoUnit: 12490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-charvel-so-cal-pro-mod-style-1-hss-fr-e-vermelha-129977/343045.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Charvel", prdDescr: "Guitarra Charvel So-Cal Pro-Mod Style 1 HSS FR E - Vermelha" }, { prdID: 130793, prdPrecoUnit: 2539.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-t-640-super-hss-shell-pink-130793/343863.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima T-640 Super HSS - Shell Pink" }, { prdID: 131006, prdPrecoUnit: 33990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-prs-ce-24-semi-acustica-com-gigbag-burnt-amber-sunburst-131006/344081.jpg?w=275&h=275&v=202504071507", prdTitulo: "Guitarra PRS", prdDescr: "Guitarra PRS CE 24 Semi-Acústica com Gigbag - Burnt Amber Sunburst" }, { prdID: 130907, prdPrecoUnit: 11190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-transparent-cherry-130907/343981.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Transparent Cherry" }, { prdID: 130341, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-evh-wolfgang-wg-standard-battleship-gray-130341/343411.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra EVH", prdDescr: "Guitarra EVH Wolfgang WG Standard - Battleship Gray" }, { prdID: 131040, prdPrecoUnit: 12599.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-electromatic-bigsby-semi-acustica-g5422tg-snowcrest-white-131040/344115.jpg?w=275&h=275&v=202504091842", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Electromatic Bigsby Semi-Acústica G5422TG - Snowcrest White" }, { prdID: 130688, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-birch-green-130688/343758.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Birch Green" }, { prdID: 130695, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-polar-white-130695/343765.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Polar White" }, { prdID: 131063, prdPrecoUnit: 58990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-prs-custom-24-com-case-deluxe-charcoal-burst-131063/344138.jpg?w=275&h=275&v=202504161615", prdTitulo: "Guitarra PRS", prdDescr: "Guitarra PRS Custom 24 com Case Deluxe - Charcoal Burst" }, { prdID: 128129, prdPrecoUnit: 1319.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-strato-st-2-ch-vintage-white-creme-128129/314615.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Strato", prdDescr: "Guitarra Strato ST 2 CH Vintage White Creme" }, { prdID: 128671, prdPrecoUnit: 4899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-classic-vibe-60s-lake-placid-blue-128671/315611.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Classic Vibe 60s - Lake Placid Blue" }, { prdID: 130781, prdPrecoUnit: 13990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-cacau-santos-signature-grace-70-7-black-sparkle-130781/343851.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Cacau Santos Signature Grace 70.7 - Black Sparkle" }, { prdID: 87368, prdPrecoUnit: 2149.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-pacifica-112j-yns-vfw7890j-87368/273853.jpg?w=275&h=275&v=202504161956", prdTitulo: "GUITARRA PACIFICA", prdDescr: "GUITARRA PACIFICA 112J YNS VFW7890j" }, { prdID: 130689, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-preta-130689/343759.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Preta" }, { prdID: 129366, prdPrecoUnit: 16390.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-jimi-hendrix-signature-olympic-white-129366/342427.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Jimi Hendrix Signature - Olympic White" }, { prdID: 130694, prdPrecoUnit: 11590.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-hss-aquatone-blue-130694/343764.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II HSS - Aquatone Blue" }, { prdID: 130864, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jazzmaster-player-ii-preta-130864/343937.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jazzmaster Player II - Preta" }, { prdID: 129318, prdPrecoUnit: 4819.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-strato-ibanez-azes31-single-coil-creme-ivory-129318/342379.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Strato", prdDescr: "Guitarra Strato Ibanez AZES31 Single-Coil Creme (Ivory)" }, { prdID: 130683, prdPrecoUnit: 11590.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-hss-polar-white-130683/343753.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II HSS - Polar White" }, { prdID: 131027, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-v-stoptail-semi-acustica-g2622-gunmetal-131027/344102.jpg?w=275&h=275&v=202504081337", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner V-Stoptail Semi-Acústica G2622 - Gunmetal" }, { prdID: 131078, prdPrecoUnit: 1990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-sixmart-single-cut-metalic-deep-silver-131078/344153.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Sixmart Single Cut - Metalic Deep Silver" }, { prdID: 131087, prdPrecoUnit: 1789.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-duo-smart-h-candy-apple-131087/344162.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Duo Smart-H - Candy Apple" }, { prdID: 129698, prdPrecoUnit: 18499.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-american-performer-telecaster-satin-sonic-blue-129698/342765.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender American Performer Telecaster - Satin Sonic Blue" }, { prdID: 131049, prdPrecoUnit: 1849.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-telecaster-debut-dakota-red-131049/344124.jpg?w=275&h=275&v=202504091923", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Telecaster Debut - Dakota Red" }, { prdID: 129226, prdPrecoUnit: 3490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-affinity-stratocaster-preta-129226/342287.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Affinity Stratocaster - Preta" }, { prdID: 129613, prdPrecoUnit: 8249.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-revstar-standard-rss20-flash-green-129613/342680.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Revstar Standard RSS20 - Flash Green" }, { prdID: 130889, prdPrecoUnit: 11190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-transparent-cherry-burst-130889/343963.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Transparent Cherry Burst" }, { prdID: 130050, prdPrecoUnit: 8249.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-revstar-rss20-sunset-burst-130050/343118.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Revstar RSS20 - Sunset Burst" }, { prdID: 130678, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-preta-130678/343748.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Preta" }, { prdID: 131037, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-electromatic-bigsby-semi-acustica-g5420t-walnut-stain-131037/344112.jpg?w=275&h=275&v=202504091356", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Electromatic Bigsby Semi-Acústica G5420T - Walnut Stain" }, { prdID: 130891, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-transparent-mocha-burst-130891/343965.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Transparent Mocha Burst" }, { prdID: 129416, prdPrecoUnit: 7489.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac612-viifmx-fired-red-129416/342477.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC612 VIIFMX - Fired Red" }, { prdID: 130862, prdPrecoUnit: 10290.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jaguar-player-ii-hialeah-yellow-130862/343935.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jaguar Player II - Hialeah Yellow" }, { prdID: 130774, prdPrecoUnit: 11590.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-prs-sa22-se-swamp-ash-special-charcoal-130774/343844.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra PRS", prdDescr: "Guitarra PRS SA22 SE Swamp Ash Special - Charcoal" }, { prdID: 131042, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-standard-aqua-marine-metallic-131042/344117.jpg?w=275&h=275&v=202504091914", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Standard - Aqua Marine Metallic" }, { prdID: 130034, prdPrecoUnit: 33679.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gibson-les-paul-classic-heritage-cherry-sunburst-130034/343102.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Gibson", prdDescr: "Guitarra Gibson Les Paul Classic - Heritage Cherry Sunburst" }, { prdID: 129044, prdPrecoUnit: 3869.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-stella-dw-classic-series-transparent-brown-fade-129044/316204.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Stella DW Classic Series - Transparent Brown Fade" }, { prdID: 130877, prdPrecoUnit: 25990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-american-professional-ii-aniversario-de-70-anos-comet-burst-130877/343951.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster American Professional II Aniversário de 70 Anos - Comet Burst" }, { prdID: 130858, prdPrecoUnit: 1490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-debut-2-color-sunburst-130858/343931.jpg?w=275&h=275&v=202502181719", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Debut - 2-Color Sunburst" }, { prdID: 131033, prdPrecoUnit: 13990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-edicao-aniversario-de-70-anos-nebula-noir-131033/344108.jpg?w=275&h=275&v=202504081651", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Edição Aniversário de 70 Anos - Nebula Noir" }, { prdID: 87141, prdPrecoUnit: 5169.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-ibanez-grg170-dx-bkn-87141/273626.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Ibanez", prdDescr: "Guitarra Ibanez Grg170 Dx (Bkn)" }, { prdID: 129048, prdPrecoUnit: 1239.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-500-preta-129048/316208.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-500 - Preta" }, { prdID: 131091, prdPrecoUnit: 6639.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-true-range-multiscale-7-cordas-branca-131091/344166.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima True Range Multiscale 7 Cordas - Branca" }, { prdID: 126456, prdPrecoUnit: 2519.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-classic-series-t-635-preta-126456/312941.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Classic Series T-635 - Preta" }, { prdID: 129345, prdPrecoUnit: 8479.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-preta-129345/342406.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player - Preta" }, { prdID: 129355, prdPrecoUnit: 15490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-signature-buddy-guy-polka-dot-finish-129355/342416.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Signature Buddy Guy - Polka Dot Finish" }, { prdID: 130863, prdPrecoUnit: 10290.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jaguar-player-ii-3-color-sunburst-130863/343936.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jaguar Player II - 3 Color Sunburst" }, { prdID: 131048, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-standard-candy-cola-131048/344123.jpg?w=275&h=275&v=202504091923", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Standard - Candy Cola" }, { prdID: 130681, prdPrecoUnit: 18690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-american-performer-timber-pinho-edicao-limitada-2-color-sunburst-130681/343751.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster American Performer Timber Pinho Edição Limitada - 2-Color Sunburst" }, { prdID: 129943, prdPrecoUnit: 41790.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gibson-les-paul-standard-70s-deluxe-gold-top-129943/343011.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Gibson", prdDescr: "Guitarra Gibson Les Paul Standard 70S Deluxe - Gold Top" }, { prdID: 128783, prdPrecoUnit: 4899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-classic-vibe-50s-fiesta-red-128783/315854.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Classic Vibe 50s - Fiesta Red" }, { prdID: 129700, prdPrecoUnit: 18990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-american-performer-stratocaster-hss-aubergine-129700/342767.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender American Performer Stratocaster HSS - Aubergine" }, { prdID: 129785, prdPrecoUnit: 16569.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-epiphone-les-paul-standard-slash-november-burst-129785/342852.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Epiphone", prdDescr: "Guitarra Epiphone Les Paul Standard Slash - November Burst" }, { prdID: 130561, prdPrecoUnit: 1289.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-500-sunburst-130561/343631.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-500 - Sunburst" }, { prdID: 130314, prdPrecoUnit: 4319.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-classic-series-stella-oasis-rw-ocean-blue-130314/343384.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Classic Series Stella Oasis RW - Ocean Blue" }, { prdID: 129454, prdPrecoUnit: 7489.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac612-viix-teal-green-129454/342515.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC612 VIIX - Teal Green" }, { prdID: 131038, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-electromatic-bigsby-semi-acustica-g5420t-orange-stain-131038/344113.jpg?w=275&h=275&v=202504091628", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Electromatic Bigsby Semi-Acústica G5420T - Orange Stain" }, { prdID: 130684, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-polar-white-130684/343754.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Polar White" }, { prdID: 130242, prdPrecoUnit: 10490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-player-mustang-firemist-gold-130242/343310.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Player Mustang - Firemist Gold" }, { prdID: 131084, prdPrecoUnit: 1789.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-duo-smart-h-preta-131084/344159.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Duo Smart-H - Preta" }, { prdID: 128224, prdPrecoUnit: 4199.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-grg121-dx-wnf-128224/314710.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra GRG121", prdDescr: "Guitarra GRG121 DX WNF" }, { prdID: 130940, prdPrecoUnit: 12899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pacs-12m-ash-pink-130940/344014.jpg?w=275&h=275&v=202502071802", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PACS+12M - Ash Pink" }, { prdID: 131018, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2655t-tropico-131018/344093.jpg?w=275&h=275&v=202504081212", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2655T - Tropico" }, { prdID: 113744, prdPrecoUnit: 1849.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac012-hss-branca-113744/300229.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC012 HSS - Branca" }, { prdID: 130783, prdPrecoUnit: 2539.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-t-640-super-hss-olympic-white-130783/343853.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima T-640 Super HSS - Olympic White" }, { prdID: 130347, prdPrecoUnit: 15490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-evh-wolfgang-special-satin-surf-green-130347/343417.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra EVH", prdDescr: "Guitarra EVH Wolfgang Special - Satin Surf Green" }, { prdID: 131020, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-v-stoptail-semi-acustica-g2655-steel-olive-131020/344095.jpg?w=275&h=275&v=202504081212", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner V-Stoptail Semi-Acústica G2655 - Steel Olive" }, { prdID: 87116, prdPrecoUnit: 1849.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac012-hss-preta-87116/273601.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC012 HSS - Preta" }, { prdID: 87151, prdPrecoUnit: 1849.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac-012-hss-vermelho-metalico-87151/273636.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC 012 HSS - Vermelho Metálico" }, { prdID: 130472, prdPrecoUnit: 1289.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-500-olympic-white-130472/343542.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-500 - Olympic White" }, { prdID: 130869, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jazzmaster-player-ii-coral-red-130869/343942.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jazzmaster Player II - Coral Red" }, { prdID: 131005, prdPrecoUnit: 33990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-prs-ce-24-com-gig-bag-dark-cherry-sunburst-131005/344080.jpg?w=275&h=275&v=202504071448", prdTitulo: "Guitarra PRS", prdDescr: "Guitarra PRS CE 24 com Gig Bag - Dark Cherry Sunburst" }, { prdID: 131083, prdPrecoUnit: 1749.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-relic-tga-580-olympic-white-131083/344158.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Relic TGA-580 - Olympic White" }, { prdID: 130637, prdPrecoUnit: 1539.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-rock-in-rio-sse-tg-530-preta-130637/343707.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Rock in Rio SSE TG-530 - Preta" }, { prdID: 130185, prdPrecoUnit: 29990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-stevie-ray-vaughan-3-color-sunburst-130185/343253.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Stevie Ray Vaughan - 3-Color Sunburst" }, { prdID: 129966, prdPrecoUnit: 11290.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-charvel-so-cal-pro-mod-style-1-hh-fr-m-azul-129966/343034.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Charvel", prdDescr: "Guitarra Charvel So-Cal Pro-Mod Style 1 HH FR M - Azul" }, { prdID: 129289, prdPrecoUnit: 8249.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-revstar-standard-rss20-com-gigbag-branca-129289/342350.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Revstar Standard RSS20 com Gigbag - Branca" }, { prdID: 130016, prdPrecoUnit: 11319.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-epiphone-uptown-kat-es-sapphire-blue-metallic-130016/343084.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Epiphone", prdDescr: "Guitarra Epiphone Uptown Kat ES Sapphire - Blue Metallic" }, { prdID: 130890, prdPrecoUnit: 11190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-white-blonde-130890/343964.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - White Blonde" }, { prdID: 130866, prdPrecoUnit: 10290.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jaguar-player-ii-polar-white-130866/343939.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jaguar Player II - Polar White" }, { prdID: 130895, prdPrecoUnit: 11190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-mocha-130895/343969.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Mocha" }, { prdID: 97040, prdPrecoUnit: 1249.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-juvenil-phx-strato-junior-3-4-ist1-preta-97040/283525.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Juvenil", prdDescr: "Guitarra Juvenil PHX Strato Junior 3/4 IST1 - Preta" }, { prdID: 130892, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-white-blonde-130892/343966.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - White Blonde" }, { prdID: 129240, prdPrecoUnit: 4899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-classic-vibe-50s-preta-129240/342301.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Classic Vibe 50s - Preta" }, { prdID: 129732, prdPrecoUnit: 1399.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-530-olimpic-white-129732/342799.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-530 - Olimpic White" }, { prdID: 131014, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2622t-arctic-blue-131014/344089.jpg?w=275&h=275&v=202504081140", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2622T - Arctic Blue" }, { prdID: 128723, prdPrecoUnit: 2899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-stella-ntm-escala-tech-wood-natural-satin-128723/315670.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Stella NTM Escala Tech Wood - Natural Satin" }, { prdID: 130340, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-evh-wolfgang-wg-standard-absinthe-frost-130340/343410.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra EVH", prdDescr: "Guitarra EVH Wolfgang WG Standard - Absinthe Frost" }, { prdID: 130893, prdPrecoUnit: 10990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-aged-cherry-burst-130893/343967.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II - Aged Cherry Burst" }, { prdID: 129906, prdPrecoUnit: 22990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-american-professional-ii-stratocaster-roasted-pine-129906/342974.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender American Professional II Stratocaster - Roasted Pine" }, { prdID: 130315, prdPrecoUnit: 4559.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-classic-series-cosmos-oasis-rw-ocean-blue-130315/343385.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Classic Séries Cosmos Oasis RW - Ocean Blue" }, { prdID: 130682, prdPrecoUnit: 18690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-american-performer-timber-spruce-edicao-limitada-honey-burst-130682/343752.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster American Performer Timber Spruce Edição Limitada - Honey Burst" }, { prdID: 131015, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2622t-dark-denim-131015/344090.jpg?w=275&h=275&v=202504081141", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2622T - Dark Denim" }, { prdID: 131028, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-chromatic-ii-semi-acustica-g2420-aged-brooklyn-burst-131028/344103.jpg?w=275&h=275&v=202504081404", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Chromatic II Semi-Acústica G2420 - Aged Brooklyn Burst" }, { prdID: 128672, prdPrecoUnit: 4899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-classic-vibe-60s-candy-apple-red-128672/315612.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Classic Vibe 60s - Candy Apple Red" }, { prdID: 130799, prdPrecoUnit: 11319.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-epiphone-les-paul-standard-50s-vintage-sunburst-130799/343869.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Epiphone", prdDescr: "Guitarra Epiphone Les Paul Standard 50s - Vintage Sunburst" }, { prdID: 129712, prdPrecoUnit: 18499.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-american-performer-stratocaster-satin-lake-placid-blue-129712/342779.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender American Performer Stratocaster - Satin Lake Placid Blue" }, { prdID: 131043, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-standard-preta-131043/344118.jpg?w=275&h=275&v=202504091916", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Standard - Preta" }, { prdID: 129043, prdPrecoUnit: 3869.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-stella-hss-dw-transparent-ambar-129043/316203.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Stella HSS DW - Transparent Ambar" }, { prdID: 128135, prdPrecoUnit: 1349.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-510-metallic-gold-128135/314621.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-510 - Metallic Gold" }, { prdID: 130798, prdPrecoUnit: 10290.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jaguar-player-ii-coral-red-130798/343868.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jaguar Player II - Coral Red" }, { prdID: 129455, prdPrecoUnit: 7489.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac612-viix-silk-blue-129455/342516.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC612 VIIX - Silk Blue" }, { prdID: 129886, prdPrecoUnit: 2190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-sonic-ht-torino-red-129886/342953.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Sonic HT - Torino Red" }, { prdID: 131081, prdPrecoUnit: 1749.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-relic-tga-580-preta-131081/344156.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Relic TGA-580 - Preta" }, { prdID: 130903, prdPrecoUnit: 17890.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-vintera-ii-edicao-aniversario-de-70-anos-antigua-130903/343977.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Vintera II Edição Aniversário de 70 Anos - Antigua" }, { prdID: 129981, prdPrecoUnit: 12490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-charvel-pro-mod-san-dima-style-1-hh-fr-m-129981/343049.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Charvel", prdDescr: "Guitarra Charvel Pro-Mod San Dima Style 1 HH FR M" }, { prdID: 121945, prdPrecoUnit: 1489.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tw-55-sunburst-121945/308430.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TW-55 - Sunburst" }, { prdID: 69147, prdPrecoUnit: 2519.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-classic-series-t-635-metallic-red-69147/255630.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Classic Series T-635 - Metallic Red" }, { prdID: 69254, prdPrecoUnit: 2019.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tw-61-sunburst-69254/255737.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TW-61 - Sunburst" }, { prdID: 129611, prdPrecoUnit: 8249.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-revstar-standard-rss20-swift-blue-129611/342678.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Revstar Standard RSS20 - Swift Blue" }, { prdID: 130686, prdPrecoUnit: 18690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-american-performer-timber-spruce-edicao-limitada-honey-burst-130686/343756.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster American Performer Timber Spruce Edição Limitada - Honey Burst" }, { prdID: 130908, prdPrecoUnit: 11190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-aged-cherry-burst-130908/343982.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Aged Cherry Burst" }, { prdID: 131035, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2420t-brandywine-131035/344110.jpg?w=275&h=275&v=202504081914", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2420T - Brandywine" }, { prdID: 130192, prdPrecoUnit: 1990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-sixmart-mettalic-deep-silver-130192/343260.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Sixmart - Mettalic Deep Silver" }, { prdID: 131045, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-standard-olympic-white-131045/344120.jpg?w=275&h=275&v=202504091917", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Standard - Olympic White" }, { prdID: 131016, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2622t-steel-olive-131016/344091.jpg?w=275&h=275&v=202504081141", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2622T - Steel Olive" }, { prdID: 128668, prdPrecoUnit: 5239.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-telecaster-classic-vibe-70s-custom-3-color-sunburst-128668/315608.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Telecaster Classic Vibe 70s Custom - 3-color Sunburst" }, { prdID: 130791, prdPrecoUnit: 2539.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-t-640-super-hss-sonic-blue-130791/343861.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima T-640 Super HSS - Sonic Blue" }, { prdID: 131082, prdPrecoUnit: 1749.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-relic-tga-580-surf-green-131082/344157.jpg?w=275&h=275&v=202504301948", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Relic TGA-580 - Surf Green" }, { prdID: 130906, prdPrecoUnit: 11190.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-butterscotch-blonde-130906/343980.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Butterscotch Blonde" }, { prdID: 130696, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-aquatone-blue-130696/343766.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - Aquatone Blue" }, { prdID: 130969, prdPrecoUnit: 22990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-american-vintage-64-aged-white-blonde-130969/344044.jpg?w=275&h=275&v=202502261612", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster American Vintage 64 - Aged White Blonde" }, { prdID: 131022, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-v-stoptail-semi-acustica-g2655-claret-burst-131022/344097.jpg?w=275&h=275&v=202504081223", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner V-Stoptail Semi-Acústica G2655 - Claret Burst" }, { prdID: 131012, prdPrecoUnit: 21990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-jaguar-kurt-cobain-signature-3-color-sunburst-131012/344087.jpg?w=275&h=275&v=202504081130", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Jaguar Kurt Cobain Signature - 3-Color Sunburst" }, { prdID: 130865, prdPrecoUnit: 36890.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-american-vintage-ii-1954-aniversario-de-70-anos-2-color-sunburst-130865/343938.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster American Vintage II 1954 Aniversário de 70 Anos - 2-Color Sunburst" }, { prdID: 130677, prdPrecoUnit: 9990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-ii-3-color-sunburst-130677/343747.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player II - 3-Color Sunburst" }, { prdID: 128734, prdPrecoUnit: 5169.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-de-6-cordas-rg-series-gio-grgr221pa-128734/315690.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra de", prdDescr: "Guitarra de 6 Cordas RG Series Gio GRGR221PA" }, { prdID: 131007, prdPrecoUnit: 33990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-prs-ce-24-faded-blue-smokeburst-131007/344082.jpg?w=275&h=275&v=202504071508", prdTitulo: "Guitarra PRS", prdDescr: "Guitarra PRS CE 24 - Faded Blue Smokeburst" }, { prdID: 129042, prdPrecoUnit: 3869.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-stella-dw-classic-series-transparent-black-fade-129042/316202.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Stella DW Classic Series - Transparent Black Fade" }, { prdID: 129046, prdPrecoUnit: 4099.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-mirach-com-hardcase-cherry-burst-129046/316206.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Mirach com Hardcase - Cherry Burst" }, { prdID: 130339, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-evh-wolfgang-wg-standard-royalty-purple-130339/343409.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra EVH", prdDescr: "Guitarra EVH Wolfgang WG Standard - Royalty Purple" }, { prdID: 128607, prdPrecoUnit: 5990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-squier-stratocaster-classic-vibe-70s-natural-128607/315117.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Squier", prdDescr: "Guitarra Squier Stratocaster Classic Vibe 70s - Natural" }, { prdID: 131034, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2420t-robusto-burst-131034/344109.jpg?w=275&h=275&v=202504081858", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-Acústica G2420T - Robusto Burst" }, { prdID: 130011, prdPrecoUnit: 4079.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-112v-130011/343079.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica 112V" }, { prdID: 69019, prdPrecoUnit: 1399.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-530-sunburst-69019/255502.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-530 - Sunburst" }, { prdID: 131047, prdPrecoUnit: 7990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-standard-butterscotch-blonde-131047/344122.jpg?w=275&h=275&v=202504091923", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Standard - Butterscotch Blonde" }, { prdID: 128133, prdPrecoUnit: 899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-phx-infantl-marvel-gmc-k2-capitao-america-128133/314619.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra PHX", prdDescr: "Guitarra PHX Infantl Marvel GMC-K2 - Capitão América" }, { prdID: 130939, prdPrecoUnit: 12899.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pacs-12-shell-white-130939/344013.jpg?w=275&h=275&v=202502071802", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PACS+12 - Shell White" }, { prdID: 129341, prdPrecoUnit: 8479.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-player-tidepool-129341/342402.jpg?w=275&h=275&v=202501301450", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster Player - Tidepool" }, { prdID: 131017, prdPrecoUnit: 6590.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-bigsby-semi-acustica-g2655t-brandywine-131017/344092.jpg?w=275&h=275&v=202504081141", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Bigsby Semi-acústica G2655T - Brandywine" }, { prdID: 130885, prdPrecoUnit: 11590.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-hss-transparent-cherry-burst-130885/343959.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II HSS - Transparent Cherry Burst" }, { prdID: 130379, prdPrecoUnit: 1479.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-540-surf-green-130379/343449.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-540 - Surf Green" }, { prdID: 129717, prdPrecoUnit: 21990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-american-professional-ii-dark-night-129717/342784.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster American Professional II - Dark Night" }, { prdID: 129047, prdPrecoUnit: 1349.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-woodstock-tg-510-candy-apple-129047/316207.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Woodstock TG-510 - Candy Apple" }, { prdID: 129457, prdPrecoUnit: 7489.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-yamaha-pacifica-pac612-viix-yellow-natural-129457/342518.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Yamaha", prdDescr: "Guitarra Yamaha Pacifica PAC612 VIIX - Yellow Natural" }, { prdID: 130898, prdPrecoUnit: 11490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-player-ii-hss-transparent-mocha-burst-130898/343972.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Player II HSS - Transparent Mocha Burst" }, { prdID: 130033, prdPrecoUnit: 44359.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gibson-les-paul-standard-60s-figured-top-60s-cherry-130033/343101.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Gibson", prdDescr: "Guitarra Gibson Les Paul Standard 60s Figured Top - 60s Cherry" }, { prdID: 131030, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-chromatic-ii-semi-acustica-g2420-claret-burst-131030/344105.jpg?w=275&h=275&v=202504081551", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner Chromatic II Semi-Acústica G2420 - Claret Burst" }, { prdID: 127232, prdPrecoUnit: 6859.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-ibanez-7-cordas-rg-7421-walnut-flat-127232/313717.jpg?w=275&h=275&v=202501301450", prdTitulo: "Guitarra Ibanez", prdDescr: "Guitarra Ibanez 7 Cordas RG 7421 - Walnut Flat" }, { prdID: 130354, prdPrecoUnit: 1539.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-jazz-master-tw-60-metallic-deep-silver-130354/343424.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima Jazz Master TW-60 - Metallic Deep Silver" }, { prdID: 131023, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-v-stoptail-semi-acustica-g2622-cadillac-green-131023/344098.jpg?w=275&h=275&v=202504081225", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner V-Stoptail Semi-Acústica G2622 - Cadillac Green" }, { prdID: 131024, prdPrecoUnit: 6690.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-streamliner-v-stoptail-semi-acustica-g2655-midnight-sapphire-131024/344099.jpg?w=275&h=275&v=202504081243", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Streamliner V-Stoptail Semi-Acústica G2655 - Midnight Sapphire" }, { prdID: 129590, prdPrecoUnit: 5019.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-tagima-t-930-serie-brasil-honey-burst-129590/342657.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Tagima", prdDescr: "Guitarra Tagima T-930 Série Brasil - Honey Burst" }, { prdID: 131039, prdPrecoUnit: 12599.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-gretsch-electromatic-bigsby-semi-acustica-g5422tg-walnut-stain-131039/344114.jpg?w=275&h=275&v=202504091842", prdTitulo: "Guitarra Gretsch", prdDescr: "Guitarra Gretsch Electromatic Bigsby Semi-Acústica G5422TG - Walnut Stain" }, { prdID: 130459, prdPrecoUnit: 25490.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-mike-mccready-signature-3-color-sunburst-130459/343529.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Mike McCready Signature - 3-Color Sunburst" }, { prdID: 129790, prdPrecoUnit: 21990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-telecaster-american-professional-ii-mystic-surf-green-129790/342857.jpg?w=275&h=275&v=no-value", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Telecaster American Professional II - Mystic Surf Green" }, { prdID: 130886, prdPrecoUnit: 29990.0, prdCategoria: "Cordas", prdImg: "https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-eric-clapton-signature-olympic-white-130886/343960.jpg?w=275&h=275&v=202501231556", prdTitulo: "Guitarra Fender", prdDescr: "Guitarra Fender Stratocaster Eric Clapton Signature - Olympic White" },{prdID:73870, prdPrecoUnit:479.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-hohner-blues-harp-do-20v-532-20c-73870/260353.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Hohner", prdDescr:"Gaita Hohner Blues Harp (Dó) 20v 532/20c"}, {prdID:73906, prdPrecoUnit:449.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-fender-blues-deville-harmonicas-g-sol-73906/260389.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Fender", prdDescr:"Gaita Fender Blues DeVille Harmonicas G (Sol)"}, {prdID:73857, prdPrecoUnit:249.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-hering-black-blues-60-20-g-sol-73857/260340.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Hering", prdDescr:"Gaita Hering Black Blues 60/20 G (Sol)"}, {prdID:73899, prdPrecoUnit:499.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-fender-blues-deville-harmonicas-c-do-73899/260382.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Fender", prdDescr:"Gaita Fender Blues DeVille Harmonicas C (Dó)"}, {prdID:86511, prdPrecoUnit:489.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-hohner-marine-band-1896-20-la-86511/272996.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Hohner", prdDescr:"Gaita Hohner Marine Band 1896/20 (Lá)"}, {prdID:73915, prdPrecoUnit:449.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-fender-blues-deville-harmonicas-a-la-73915/260398.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Fender", prdDescr:"Gaita Fender Blues DeVille Harmonicas A (Lá)"}, {prdID:73878, prdPrecoUnit:489.0, prdCategoria:"Sopro", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/gaita-hohner-marine-band-1896-do-20v-73878/260361.jpg?w=275&h=275&v=no-value", prdTitulo:"Gaita Hohner", prdDescr:"Gaita Hohner Marine Band 1896 (Dó) 20v"},{prdID:128599, prdPrecoUnit:28490.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-martin-eletroacustico-aco-d-16e-folk-dreadnought-captacao-fishman-matrix-vt-enhance-com-case-128599/315109.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Martin", prdDescr:"Violão Martin Eletroacústico Aço D-16E Folk Dreadnought Captação Fishman Matrix VT Enhance com Case"}, {prdID:130971, prdPrecoUnit:3887.78, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-yamaha-eletroacustico-aco-storia-ii-natural-130971/344046.jpg?w=275&h=275&v=202502281758", prdTitulo:"Violão Yamaha", prdDescr:"Violão Yamaha Eletroacústico Aço STORIA II - Natural"}, {prdID:130380, prdPrecoUnit:7990.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-martin-eletroacustico-aco-d-x1e-11dx1e-01-captacao-martin-e-1-com-case-koa-130380/343450.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Martin", prdDescr:"Violão Martin Eletroacústico Aço D-X1E 11DX1E-01 Captação Martin E-1 com Case - Koa"}, {prdID:129571, prdPrecoUnit:8749.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-epiphone-jumbo-eletroacustico-aco-j-200ec-studio-vintage-sunburst-129571/342638.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Epiphone", prdDescr:"Violão Epiphone Jumbo Eletroacústico Aço J-200EC Studio - Vintage Sunburst"}, {prdID:130928, prdPrecoUnit:13290.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-martin-eletroacustico-aco-00-10e-captacao-martin-e1-com-softcase-130928/344002.jpg?w=275&h=275&v=202501231556", prdTitulo:"Violão Martin", prdDescr:"Violão Martin Eletroacústico Aço 00-10E Captação Martin E1 com Softcase"}, {prdID:130922, prdPrecoUnit:2732.22, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-tagima-eletroacustico-aco-mini-smart-lumi-x-black-sparkle-130922/343996.jpg?w=275&h=275&v=202501231556", prdTitulo:"Violão Tagima", prdDescr:"Violão Tagima Eletroacústico Aço Mini Smart LUMI-X - Black Sparkle"}, {prdID:123812, prdPrecoUnit:1699.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-tagima-eletroacustico-aco-kansas-serie-america-drop-sunburst-123812/310297.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Tagima", prdDescr:"Violão Tagima Eletroacústico Aço Kansas Série América - Drop Sunburst"}, {prdID:130634, prdPrecoUnit:1379.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-tagima-eletroacustico-aco-gran-reserva-detroit-130634/343704.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Tagima", prdDescr:"Violão Tagima Eletroacústico Aço Gran Reserva Detroit"}, {prdID:129945, prdPrecoUnit:16699.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-martin-eletroacustico-aco-d-15e-captacao-martin-e1-com-softcase-129945/343013.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Martin", prdDescr:"Violão Martin Eletroacústico Aço D-15E Captação Martin E1 com Softcase"}, {prdID:130700, prdPrecoUnit:14999.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-yamaha-eletroacustico-aco-a5r-are-natural-130700/343770.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Yamaha", prdDescr:"Violão Yamaha Eletroacústico Aço A5R ARE - Natural"}, {prdID:128804, prdPrecoUnit:12990.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-martin-eletroacustico-folk-aco-d-10e-spruce-com-capa-128804/315881.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Martin", prdDescr:"Violão Martin Eletroacústico Folk Aço D-10E Spruce com Capa"}, {prdID:128624, prdPrecoUnit:2479.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-tanglewood-eletroacustico-aco-twr-2-roadster-parlour-128624/315168.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Tanglewood", prdDescr:"Violão Tanglewood Eletroacústico Aço TWR-2 Roadster Parlour"}, {prdID:127805, prdPrecoUnit:6449.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-yamaha-aco-transacoustic-fs-ta-com-reverb-e-chorus-brown-sunburst-127805/314290.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Yamaha", prdDescr:"Violão Yamaha Aço Transacoustic FS-TA com Reverb e Chorus - Brown Sunburst"}, {prdID:129432, prdPrecoUnit:3190.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-sigma-eletroacustico-aco-gme-129432/342493.jpg?w=275&h=275&v=202501281308", prdTitulo:"Violão Sigma", prdDescr:"Violão Sigma Eletroacústico Aço GME"}, {prdID:129659, prdPrecoUnit:2279.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-rozini-dreadnought-eletroacustico-crude-woodie-imbuia-rx318-eq-f-i-129659/342726.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Rozini", prdDescr:"Violão Rozini Dreadnought Eletroacústico Crude Woodie Imbuia\xa0RX318\xa0EQ.F.I"}, {prdID:85140, prdPrecoUnit:59990.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-martin-000-28ec-eric-clapton-signature-captacao-fishman-infinity-matrix-com-ply-hardshell-85140/271625.jpg?w=275&h=275&v=202501231556", prdTitulo:"Violão Martin", prdDescr:"Violão Martin 000-28EC Eric Clapton Signature Captacão Fishman Infinity Matrix com Ply Hardshell"}, {prdID:129155, prdPrecoUnit:7499.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-eletroacustico-aco-little-martin-lx-1re-captacao-fishman-sonitone-com-capa-129155/320307.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Eletroacústico", prdDescr:"Violão Eletroacústico Aço Little Martin LX-1RE Captação Fishman Sonitone com Capa"}, {prdID:69966, prdPrecoUnit:4299.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-sigma-travel-guitar-eletroacustico-aco-tm-15e-com-capa-69966/256449.jpg?w=275&h=275&v=202501281320", prdTitulo:"Violão Sigma", prdDescr:"Violão Sigma Travel Guitar Eletroacústico Aço TM-15E com Capa"}, {prdID:69935, prdPrecoUnit:3099.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-sigma-eletroacustico-aco-dme-dreadnought-folk-69935/256418.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Sigma", prdDescr:"Violão Sigma Eletroacústico Aço DME Dreadnought Folk"}, {prdID:130647, prdPrecoUnit:1299.0, prdCategoria:"Acusticos", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/violao-tagima-eletroacustico-aco-kansas-gran-reserva-ntop-130647/343717.jpg?w=275&h=275&v=no-value", prdTitulo:"Violão Tagima", prdDescr:"Violão Tagima Eletroacústico Aço Kansas Gran Reserva NTOP"},{prdID:130802, prdPrecoUnit:455.05, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/boss-bt-dual-adaptador-de-audio-e-midi-bluetooth-130802/343872.jpg?w=275&h=275&v=202502111716", prdTitulo:"BOSS BT-DUAL", prdDescr:"BOSS BT-DUAL | Adaptador de Áudio e MIDI Bluetooth"}, {prdID:130145, prdPrecoUnit:139.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-para-microfone-saty-shock-mount-com-pop-filter-smpf-01-130145/343213.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte para", prdDescr:"Suporte para Microfone Saty Shock Mount com Pop Filter SMPF-01"}, {prdID:130102, prdPrecoUnit:399.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/pedestal-para-microfone-girafa-saty-pmg-15-130102/343170.jpg?w=275&h=275&v=no-value", prdTitulo:"Pedestal para", prdDescr:"Pedestal para Microfone Girafa Saty PMG-15"}, {prdID:129689, prdPrecoUnit:89.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-de-copo-para-pedestal-de-microfone-saty-scl-20-129689/342756.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte de", prdDescr:"Suporte de Copo para Pedestal de Microfone Saty SCL-20"}, {prdID:129647, prdPrecoUnit:35.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/cachimbo-para-microfone-sem-fio-tsm72-129647/342714.jpg?w=275&h=275&v=no-value", prdTitulo:"Cachimbo para", prdDescr:"Cachimbo para Microfone Sem Fio TSM72"}, {prdID:128885, prdPrecoUnit:469.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-para-monitor-de-referencia-srm3-128885/315981.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte Para", prdDescr:"Suporte Para Monitor De Referência SRM3"}, {prdID:128649, prdPrecoUnit:1119.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-compacto-para-caixa-acustica-kit-com-2-suportes-e-bag-ssp7750-128649/315588.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte Compacto", prdDescr:"Suporte Compacto para Caixa Acústica (Kit Com 2 Suportes e Bag SSP7750)"}, {prdID:128183, prdPrecoUnit:1119.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-para-caixa-acustica-on-stage-pack-ssp7750-128183/314669.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte para", prdDescr:"Suporte para Caixa Acústica On-Stage Pack SSP7750"}, {prdID:117325, prdPrecoUnit:459.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/pedestal-girafa-para-microfone-saty-pmg-100-117325/303810.jpg?w=275&h=275&v=no-value", prdTitulo:"Pedestal Girafa", prdDescr:"Pedestal Girafa para Microfone Saty PMG-100"}, {prdID:110382, prdPrecoUnit:569.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-para-caixa-on-stage-ss7725b-110382/296867.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte para", prdDescr:"Suporte para Caixa On-Stage SS7725B"}, {prdID:73619, prdPrecoUnit:89.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/suporte-fixo-de-parede-para-caixas-de-som-spc177-73619/260102.jpg?w=275&h=275&v=no-value", prdTitulo:"Suporte Fixo", prdDescr:"Suporte Fixo de Parede para Caixas de Som SPC177"}, {prdID:73589, prdPrecoUnit:29.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/cachimbo-para-microfone-com-fio-torelli-hsm71-73589/260072.jpg?w=275&h=275&v=no-value", prdTitulo:"Cachimbo para", prdDescr:"Cachimbo para Microfone com Fio Torelli HSM71"}, {prdID:73566, prdPrecoUnit:219.0, prdCategoria:"Acessorios", prdImg:"https://madeinbrazil.fbitsstatic.net/img/p/pedestal-de-mesa-para-microfone-hpm56-torelli-73566/260049.jpg?w=275&h=275&v=no-value", prdTitulo:"Pedestal de", prdDescr:"Pedestal de Mesa para Microfone Hpm56 Torelli"}

]
oldProd.forEach(p => {
  p.prdQtde = 1;
});



const objetoProduto = oldProd;




/*** DEFININDO OBJETO CARRINHO DE COMPRAS VAZIO ***/
var carrinhoCodigoInicial = 0;
var carrinhoCodigoAtual = 0;

var objetoCarrinho = [
  { carCodigo: null, carData: null, carStatus: null, carProdutos: [] },
];

setInterval(() => {
  atualizaVariavelGlobalCarrinho();
  atualizaBadge();
  calculaTotaisdoCarrinho();

  

}, 1000);

function atualizaVariavelGlobalCarrinho() {
  const existeCodigoCarrinhoCompras = objetoCarrinho.filter(
    (car) => car.carStatus === "aberto"
  );

  if (existeCodigoCarrinhoCompras.length > 0) {
    carrinhoCodigoAtual = existeCodigoCarrinhoCompras[0].carCodigo;
  }
}

/** CAHAMANDO FUNÇÃO QUE CRIA A NAVBAR */
criarNavBar();

listarTodosOsProdutosNaHomePage();

/*** FUNCAO PARA LIMPAR TUDO QUE ESTIVER NA DIV CORPO DINÂMICO */
function limparCorpoDinamico() {
  const corpoDinamico = document.getElementById("corpoDinamico");

  corpoDinamico.remove();

  const novoCorpoDinamico = document.createElement("div");
  novoCorpoDinamico.setAttribute("class", "container-flex");
  novoCorpoDinamico.setAttribute("id", "corpoDinamico");

  document.body.appendChild(novoCorpoDinamico);

  //<div class="container" id="corpoDinamico">
}

/**** CRIANDO NAVBAR DINÂMICA */
function criarNavBar() {
  /**Criando lista de objetos da nav bar */
  const objetoNavbar = [
    {
      itemId: "1",
      itemDescricao: "Homepage",
      itemCategoria: "homepageId",
      icone: "",
    },
    {
      itemId: "2",
      itemDescricao: "Quem somos",
      itemCategoria: "quemsomosId",
      icone: "",
    },
    {
      itemId: "3",
      itemDescricao: "Cordas",
      itemCategoria: "cordasId",
      icone: "",
    },
    {
      itemId: "4",
      itemDescricao: "Sopro",
      itemCategoria: "soproId",
      icone: "",
    },
    {
      itemId: "5",
      itemDescricao: "Acusticos",
      itemCategoria: "acusticosId",
      icone: "",
    },
    {
      itemId: "6",
      itemDescricao: "Eletronicos",
      itemCategoria: "eletronicosId",
      icone: "",
    },
    {
      itemId: "7",
      itemDescricao: "Acessorios",
      itemCategoria: "acessoriosId",
      icone: "",
    },
  ];

  /** Obtendo o ID da Div da Navbar ja existente na pagina home */
  const divNav = document.getElementById("divNavBar");

  /** criando elementos da lista da navbar */
  const navUl = document.createElement("ul");

  for (let it of objetoNavbar) {
    const navLi = document.createElement("li");
    const navLink = document.createElement("a");
    const navIcone = document.createElement("i");

    navLink.setAttribute("href", "home.html");
    navLink.id = it.itemCategoria.toLowerCase().trim().replace(" ", "");
    navIcone.setAttribute("class", it.icone);

    navLink.textContent = " " + it.itemDescricao + " ";

    navLink.appendChild(navIcone);
    navLi.appendChild(navLink);
    navUl.appendChild(navLi);
  }

  const btnSpanMsg = document.createElement("span");
  btnSpanMsg.id = "numPedBadgeId";
  btnSpanMsg.setAttribute(
    "class",
    "car-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
  );
  btnSpanMsg.textContent = 0;
  btnSpanMsg.hidden = true;

  const btnSpanVisible = document.createElement("span");
  btnSpanVisible.setAttribute("class", "visually-hidden");
  btnSpanVisible.textContent = " itens no carrinho";

  const navIcone = document.createElement("i");
  navIcone.setAttribute("class", "bi bi-cart");

  const navLi = document.createElement("li");

  const btnCarrinho = document.createElement("button");
  btnCarrinho.setAttribute("type", "button");
  btnCarrinho.setAttribute("class", "btn btn-primary position-relative");
  btnCarrinho.textContent = " Carrinho de Compras ";
  btnCarrinho.id = "carrinhocomprasid";
  btnCarrinho.value = "carrinhocomprasid";

  btnCarrinho.appendChild(navIcone);
  btnCarrinho.appendChild(btnSpanMsg);
  btnCarrinho.appendChild(btnSpanVisible);
  navLi.appendChild(btnCarrinho);
  navUl.appendChild(navLi);

  divNav.appendChild(navUl);
}

function quemsomos() {
  limparCorpoDinamico();
  const corpo = document.getElementById("corpoDinamico");

  const messagemQuemSomos = document.createElement("h2");
  messagemQuemSomos.textContent =
    "Nossa missão é satisfazer nossos clientes, fornecendo produtos de alta qualidade e que sejam fabricados por nossos parceiros de maneira responsável e sustentável";

  corpo.appendChild(messagemQuemSomos);
}

function listarTodosOsProdutosNaHomePage(origem = "") {
  cardsTamanho();
  let novaLista

  limparCorpoDinamico();
  const corpo = document.getElementById("corpoDinamico");

  if (origem != "") {
      novaLista = objetoProduto.filter(
      (objetoProduto) => objetoProduto.prdCategoria === origem
    );
  } else {
    novaLista = objetoProduto;
  }

  if (novaLista.length == 0) {
    alert(`Não existem produtos a serem exibidos para a categoria ${origem}`);
  }

  for (item of novaLista) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", item.prdImg);
    imgCard.setAttribute("class", "card-img-top");
    imgCard.setAttribute("alt", `img${item.prdID}`);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitulo = document.createElement("h6");
    cardTitulo.setAttribute("class", "card-title");
    cardTitulo.textContent = item.prdTitulo;

    const cardParagrafo = document.createElement("p");
    cardParagrafo.setAttribute("class", "card-text");
    cardParagrafo.textContent = item.prdDescr;

    const cardFooter = document.createElement("div");
    cardFooter.setAttribute("class", "card-footer");

    const ulFooter = document.createElement("ul");
    const liPreco = document.createElement("li");
    liPreco.textContent = `Preço: R$ ${parseFloat(item.prdPrecoUnit).toFixed(
      2
    )}`;

    const liBtn = document.createElement("li");

    const cardBtnCarrinho = document.createElement("button");
    cardBtnCarrinho.id = "btnAddCarrinho";
    cardBtnCarrinho.setAttribute("class", "btn btn-primary");
    cardBtnCarrinho.setAttribute("type", "button");
    cardBtnCarrinho.setAttribute("onClick", `carrinhoAdd(${item.prdID})`);
    cardBtnCarrinho.textContent = "Add ";
    cardBtnCarrinho.value = item.prdID;

    const cardBtnIcon = document.createElement("i");
    cardBtnIcon.setAttribute("class", "bi bi-cart-plus");

    corpo.appendChild(card);

    card.appendChild(imgCard);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    cardBody.appendChild(cardTitulo);
    cardBody.appendChild(cardParagrafo);

    cardFooter.appendChild(ulFooter);
    ulFooter.appendChild(liPreco);
    ulFooter.appendChild(liBtn);
    liBtn.appendChild(cardBtnCarrinho);

    cardBtnCarrinho.appendChild(cardBtnIcon);
  }
}

function carrinhoAdd(btnPrdId) {
  carrinhoCodigoInicial++;
  var botaoID = btnPrdId;

  /*** OBJETO CARRINHO RECEBE OS DADOS DA SUA ENTIDADE */
  var existeCarrinhoAberto = objetoCarrinho.filter(
    (x) => x.carStatus === "aberto"
  );

  if (existeCarrinhoAberto.length > 0) {
    let carCodigo = objetoCarrinho.filter((x) => x.carStatus === "aberto")[0];

    inserirProdutoCarrinho(objetoCarrinho, botaoID);
  } else {
    var objCar = {
      carCodigo: carrinhoCodigoInicial,
      carData: new Date(),
      carStatus: "aberto",
      carProdutos: [],
    };
    objetoCarrinho.push(objCar);

    let carCodigo = objetoCarrinho.filter((x) => x.carStatus === "aberto")[0];

    inserirProdutoCarrinho(objetoCarrinho, botaoID);
  }
}

function inserirProdutoCarrinho(carrinho, btnPrdId) {
  var prdFindById = objetoProduto.filter((prd) => prd.prdID === btnPrdId);

  var listaDeCarrinho = carrinho.filter((car) => car.carStatus === "aberto");
  var carrinhoid = listaDeCarrinho[0].carCodigo;

  /*** TESTANDO SE EXISTE UM CARRINHO CRIADO E QUE ESTA EM ABERTO */
  if (carrinhoid > 0) {
    /*** TESTANDO SE JA EXSITE ALGUM ITEM NA LISTA DO CARRINHO.... */
    let existeAlgumItem = objetoCarrinho.filter(
      (id) => id.carCodigo === carrinhoid
    )[0].carProdutos.length;
    if (existeAlgumItem > 0) {
      /**** DESCOBRINDO SE O PRODUTO CLICADO É O MESMO PRODUTO QUE JA EXISTE NA LISTA */
      let produtoExisteNoCarrinho = objetoCarrinho
        .filter((id) => id.carCodigo === carrinhoid)[0]
        .carProdutos.filter((pd) => pd.prdID === btnPrdId);
      if (produtoExisteNoCarrinho.length > 0) {
        alert(
          `O produto ${produtoExisteNoCarrinho[0].prdTitulo.toUpperCase()} já existe neste carrinho de compras em aberto!`
        );
      } else {
        objetoCarrinho
          .filter((id) => id.carCodigo === carrinhoid)[0]
          .carProdutos.push(prdFindById[0]);
      }
    } else {
      /*** SE NAO EXISTE NENHUM ITEM VOU INSERIR O PRODUTO CLICADO */
      objetoCarrinho
        .filter((id) => id.carCodigo === carrinhoid)[0]
        .carProdutos.push(prdFindById[0]);
    }
  }

  atualizaVariavelGlobalCarrinho();
  atualizaBadge();
}

function atualizaBadge() {
  /*** VERIFICANDO COMO ESTÁ O CARRINHO DE COMPRAS */
  if (objetoCarrinho.filter((b) => b.carStatus === "aberto").length > 0) {
    var qtdePedidos = objetoCarrinho.filter((b) => b.carStatus === "aberto")[0]
      .carProdutos.length;
  }

  /*** ATUALIZANDO QUANTIDADE DE PEDIDO NA BADGE DO BOTÃO DE CARRINHO DE COMPRAS */
  const badgeExists = document.querySelectorAll("car-badge");

  const badgeMsg = document.getElementById("numPedBadgeId");
  if (qtdePedidos > 0) {
    badgeMsg.hidden = false;
  } else {
    badgeMsg.hidden = true;
  }

  badgeMsg.textContent = qtdePedidos;
}

function listarTodoProdutosCarrinhoDeCompras(carrinhoCode) {

  console.log("Codigo do Carrinho "+carrinhoCode);

  var existeCarrinhoSetado = objetoCarrinho.filter(
    (x) => x.carCodigo === carrinhoCode
  );

  if (existeCarrinhoSetado.length > 0) {
    var listaDeProdutosInCarrinho = objetoCarrinho.filter(
      (x) => x.carCodigo === carrinhoCode
    )[0].carProdutos;

    if (listaDeProdutosInCarrinho.length > 0) {
      /*** VERIFICANDO SE OS ELEMENTOS DO CARRINHO JA EXISTEM PARA MANTER OS VALORES ATUALIZADOS NA TELA */
      calculaTotaisdoCarrinho();
      //console.log(objetoCarrinho);

      /** LIMPANDO CORPO DINÂMICO DA PAGINA */
      limparCorpoDinamico();
      const corpo = document.getElementById("corpoDinamico");


      /**** RECONSTRUINDO A LISTA */
      const carrinhoDivContainer = document.createElement("div");
      carrinhoDivContainer.setAttribute("class", "div-container-listacarrinho");
      carrinhoDivContainer.id = "divContainerListacarrinho";

      var corFundoTotais = "#333";
      var corDaFonteTotais = "#FFF";

      const carrinhoUL = document.createElement("ul");
      carrinhoUL.setAttribute("class", "totais-background-geral");

      const carrinhoTotalLi = document.createElement("li");
      carrinhoTotalLi.setAttribute("class", "totais-background-geral");
      carrinhoTotalLi.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const divCarrinhoTotais = document.createElement("div");
      divCarrinhoTotais.setAttribute("class", "div-carrinho-totais totais-background-geral");
      divCarrinhoTotais.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const infoTotalUl = document.createElement("ul");
      infoTotalUl.setAttribute("class", "totais-background-geral");
      infoTotalUl.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const infoLiProduto = document.createElement("li");
      infoLiProduto.setAttribute("class", "totais-background-geral");
      infoLiProduto.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const infoLiVolumes = document.createElement("li");
      infoLiVolumes.setAttribute("class", "totais-background-geral");
      infoLiVolumes.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const infoLiTotal = document.createElement("li");
      infoLiTotal.setAttribute("class", "totais-background-geral");
      infoLiTotal.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const buttonLiConcluiCompra = document.createElement("li");
      buttonLiConcluiCompra.setAttribute("class", "totais-background-geral");
      buttonLiConcluiCompra.setAttribute("style", `background-color: ${corFundoTotais}; color: ${corDaFonteTotais}`);

      const labelTotalItens = document.createElement("label");
      labelTotalItens.setAttribute("class", "labels-totais");
      labelTotalItens.textContent = "Total de Produtos: ";

      const labelTotalVolumes = document.createElement("label");
      labelTotalVolumes.setAttribute("class", "labels-totais");
      labelTotalVolumes.textContent = "Total de Volumes: ";

      const labelTotalVista = document.createElement("label");
      labelTotalVista.setAttribute("class", "labels-totais");
      labelTotalVista.textContent = "Total a Pagar (R$) a Vista: ";

      const btnConcluiCompra = document.createElement("button");
      btnConcluiCompra.setAttribute("class", "btn btn-primary");
      btnConcluiCompra.setAttribute("onClick", "concluirCompra()");
      btnConcluiCompra.id = "btnConcluirCompraID";
      btnConcluiCompra.textContent = "Concluir Compra";

      carrinhoTotalLi.appendChild(divCarrinhoTotais);
      divCarrinhoTotais.appendChild(infoTotalUl);
      infoTotalUl.appendChild(infoLiProduto);
      infoTotalUl.appendChild(infoLiVolumes);
      infoTotalUl.appendChild(infoLiTotal);
      infoTotalUl.appendChild(buttonLiConcluiCompra);
      infoLiProduto.appendChild(labelTotalItens);
      infoLiVolumes.appendChild(labelTotalVolumes);
      infoLiTotal.appendChild(labelTotalVista);
      buttonLiConcluiCompra.appendChild(btnConcluiCompra);




      /** ITERANDO E GERANDO DIVS DA LISTAGEM DO CARRINHO DE COMPRAS */
      listaDeProdutosInCarrinho.forEach(prod => {
              

        const carrinhoPrdImg = document.createElement("img");
        carrinhoPrdImg.setAttribute("src", prod.prdImg);
        carrinhoPrdImg.setAttribute("class", "img-prd-carrinho");

        const carrinhoPrdTitulo = document.createElement("h5");
        carrinhoPrdTitulo.textContent = `${prod.prdTitulo}`;

        const carrinhoDivInfo = document.createElement("div");
        carrinhoDivInfo.setAttribute("class", "carrinho-info");

        const carrinhoDivInput = document.createElement("div");
        carrinhoDivInput.setAttribute(
          "class",
          "container-flex carrinho-inputs"
        );

        const labelQuantidade = document.createElement("label");
        labelQuantidade.setAttribute("for", "nameQtde");
        labelQuantidade.setAttribute("class", "carrinho-labels");
        labelQuantidade.textContent = "Qtde: ";

        const carrinhoQtde = document.createElement("input");
        carrinhoQtde.setAttribute("id", `itemCarrinhoQtdeId_${prod.prdID}`);
        carrinhoQtde.setAttribute("class", "inputs-carrinho inputs-qtdes");
        carrinhoQtde.setAttribute("name", "nameQtde");
        carrinhoQtde.setAttribute("type", "number");
        carrinhoQtde.setAttribute("onClick", "calculaTotaisdoCarrinho()");
        carrinhoQtde.setAttribute("min", 1);
        carrinhoQtde.setAttribute("max", 9999);
        carrinhoQtde.setAttribute("placeholder", "qtde");
        carrinhoQtde.value = prod.prdQtde;
        

        const labelPreco = document.createElement("label");
        labelPreco.setAttribute("for", "namePreco");
        labelPreco.setAttribute("class", "carrinho-labels");
        labelPreco.textContent = "Preço: ";

        const carrinhoPrecoUnitario = document.createElement("input");
        carrinhoPrecoUnitario.setAttribute(
          "id",
          `inputPrecoUnit_prd_${prod.prdID}`
        );
        var precoUnitarioFormatado = formatNumero(prod.prdPrecoUnit);
        carrinhoPrecoUnitario.setAttribute("name", "namePreco");
        carrinhoPrecoUnitario.setAttribute("class", "inputs-carrinho");
        carrinhoPrecoUnitario.setAttribute("type", "text");
        carrinhoPrecoUnitario.value = precoUnitarioFormatado;
        carrinhoPrecoUnitario.disabled = true;

        const labelValorTotal = document.createElement("label");
        labelValorTotal.setAttribute("for", "nameValorTotal");
        labelValorTotal.setAttribute("class", "carrinho-labels");
        labelValorTotal.textContent = "Total: ";

        const carrinhoValorTotalItem = document.createElement("input");
        carrinhoValorTotalItem.setAttribute(
          "id",
          `inputValTotal_item_prd_${prod.prdID}`
        );
        carrinhoValorTotalItem.setAttribute("name", "nameValorTotal");
        carrinhoValorTotalItem.setAttribute("class", "inputs-carrinho");
        carrinhoValorTotalItem.setAttribute("type", "text");
        carrinhoValorTotalItem.value = 0;
        carrinhoValorTotalItem.disabled = true;

        const carrinhoBtnRemove = document.createElement("button");
        carrinhoBtnRemove.setAttribute("type", "button");
        carrinhoBtnRemove.id = "btnRemoverCarrinhoId";
        carrinhoBtnRemove.setAttribute(
          "onClick",
          `removeItemCarrinhoCompras(${prod.prdID})`
        );

        carrinhoBtnRemove.setAttribute("class", "btn btn-danger");
        carrinhoBtnRemove.textContent = " Remover ";

        const iconeBtnRemover = document.createElement("i");
        iconeBtnRemover.setAttribute("class", "bi bi-trash-fill");
        carrinhoBtnRemove.appendChild(iconeBtnRemover);

        const carrinhoLI = document.createElement("li");

        carrinhoDivInput.appendChild(labelQuantidade);
        carrinhoDivInput.appendChild(carrinhoQtde);
        carrinhoDivInput.appendChild(labelPreco);
        carrinhoDivInput.appendChild(carrinhoPrecoUnitario);
        carrinhoDivInput.appendChild(labelValorTotal);
        carrinhoDivInput.appendChild(carrinhoValorTotalItem);
        carrinhoDivInput.appendChild(carrinhoBtnRemove);

        carrinhoDivInfo.appendChild(carrinhoPrdImg);
        carrinhoDivInfo.appendChild(carrinhoPrdTitulo);
        carrinhoDivInfo.appendChild(carrinhoDivInput);

        carrinhoLI.appendChild(carrinhoDivInfo);

        carrinhoUL.appendChild(carrinhoLI);
      }); //FIM DO FOREACH GERANDO O ITENS DA LISTA DE CARRINHO DE COMPRAS....

      carrinhoUL.appendChild(carrinhoTotalLi);
      carrinhoDivContainer.appendChild(carrinhoUL);
      corpo.appendChild(carrinhoDivContainer);

      

    } else {
      alert("Não existem dados para serem exibidos no carrinho");
    }
  } else {
    limparCorpoDinamico();
    alert("Não existem dados para serem exibidos no carrinho");
  }
}

function calculaTotaisdoCarrinho() {
  if (document.querySelectorAll(".inputs-qtdes").length) {
    //console.clear();

    const itemDigitadoNaQuantidade = document.querySelectorAll(".inputs-qtdes");
    var contagemTotalDeProdutosNoCarrinho = 0;
    var somaQtdeTotal = 0;
    var somaValorTotal = 0;

    itemDigitadoNaQuantidade.forEach((it) => {
      var id = parseInt(it.id.replace(/\D+/g, ""), 10);

      var findProd = objetoProduto.filter((p) => p.prdID === parseInt(id));
      
      if (findProd.length > 0) {

        var valorTotalItem = findProd[0].prdPrecoUnit * it.value;
        var inputTotalItem = document.getElementById(`inputValTotal_item_prd_${id}`);
        inputTotalItem.value = formatNumero(parseFloat(valorTotalItem).toFixed(2));
        contagemTotalDeProdutosNoCarrinho++;
        somaQtdeTotal += parseInt(it.value);
        somaValorTotal += valorTotalItem;

        
        let carrinhoExiste = objetoCarrinho.filter(c => c.carStatus === 'aberto').length;
        if(carrinhoExiste > 0){
            let prodCarrExiste = objetoCarrinho.filter(c => c.carStatus === 'aberto')[0].carProdutos.length;
            if(prodCarrExiste > 0){           
                
                objetoProduto.filter(obj => obj.prdID === id)[0].prdQtde = parseInt(it.value);  
                    
          }         
        }
      }      
    });

    var numberValorFormatado = formatNumero(parseFloat(somaValorTotal).toFixed(2));


    const labelTotais = document.querySelectorAll(".labels-totais");
    if (labelTotais.length > 0) {
      labelTotais[0].textContent = `Produtos: ${parseFloat(contagemTotalDeProdutosNoCarrinho).toFixed(2)}`;
      labelTotais[1].textContent = `Volumes: ${parseFloat(somaQtdeTotal).toFixed(2)}`;
      labelTotais[2].textContent = `Valor: ${numberValorFormatado}`;
    }

  }
}

function formatNumero(number) {
  const numberFormatted = parseFloat(number).toLocaleString('pt-BR', { style: "currency", currency: "BRL" });
  return numberFormatted;

}

/*** FUNCAO PARA O BOTAO REMOVER PARA REMOVER O ITEM DO CARRINHO DE COMPRAS */
function removeItemCarrinhoCompras(produtoID) {
  let carrinhoExiste = objetoCarrinho.filter((cr) => cr.carStatus === "aberto");

  if (carrinhoExiste.length > 0) {
    let prdExiste = carrinhoExiste[0].carProdutos.filter(
      (p) => p.prdID === produtoID
    );
    if (prdExiste.length > 0) {
      if (confirm("Voçê deseja realmente excluir ")) {
        objetoCarrinho
          .filter((cr) => cr.carStatus === "aberto")[0]
          .carProdutos.splice((p) => p.prdID === produtoID, 1);
        listarTodoProdutosCarrinhoDeCompras(carrinhoCodigoAtual);
        atualizaBadge();
      }
    }
  }
}

/*** EVENTOS DOS COMPONENTES NA PAGINA HTML */

document
  .getElementById("quemsomosid")
  .addEventListener("click", function (event) {
    quemsomos();
    event.preventDefault();
  });

document
  .getElementById("homepageid")
  .addEventListener("click", function (event) {
    listarTodosOsProdutosNaHomePage();
    event.preventDefault();
  });

document.getElementById("cordasid").addEventListener("click", function (event) {
  var origem = document.getElementById("cordasid").textContent;
  listarTodosOsProdutosNaHomePage(origem.toString().trim());
  event.preventDefault();
});

document.getElementById("soproid").addEventListener("click", function (event) {
  var origem = document.getElementById("soproid").textContent;
  listarTodosOsProdutosNaHomePage(origem.toString().trim());
  event.preventDefault();
});

document
  .getElementById("acusticosid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("acusticosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
  });

document
  .getElementById("eletronicosid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("eletronicosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
  });

document
  .getElementById("acessoriosid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("acessoriosid").textContent;
    listarTodosOsProdutosNaHomePage(origem.toString().trim());
    event.preventDefault();
  });

document
  .getElementById("carrinhocomprasid")
  .addEventListener("click", function (event) {
    var origem = document.getElementById("carrinhocomprasid").value;

    listarTodoProdutosCarrinhoDeCompras(carrinhoCodigoAtual);

    event.preventDefault();
  });

function cardsTamanho() {
  const cards = document.querySelectorAll(".card");
  var maxHeight = 0;

  cards.forEach((card) => {
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
      //console.log(maxHeight);
    }
  });

  cards.forEach((card) => {
    card.style.maxHeight = maxHeight + "px";
  });
}



function concluirCompra(){
  insertLocalMemoria();
  
   if(objetoCarrinho.filter(p => p.carStatus === "aberto").length > 0){

    objetoCarrinho.filter(p => p.carStatus === "aberto")[0].carStatus = "fechado";
    carrinhoCodigoAtual = 0;

    

    console.log(objetoCarrinho);

    limparCorpoDinamico();

    
    alert("COMPRA FINALIZADA");
   }


   


  
}



function insertLocalMemoria(){

  localStorage.setItem('CarrinhoDeCompras', JSON.stringify(objetoCarrinho.filter(p => p.carStatus === "aberto")[0] ));

}

///** CRIANDO O RODAPÉ DA PAGINA E INCLUINDO TAG FOOTER APOS O CORPO DA PAGINA */
const pageBody = document.getElementById("body");
const footer = document.createElement("footer");

const msgFooter = document.createElement("p");
msgFooter.textContent =
  "@Este Site é um PROJETO dos Alunos(as) Fábio Leite Cardoso, Antonio ,Jonata, Natan  do Curso Programação de Computadores com Javascript ofertado pela TOMORROW, sob a orientação do professor Claudio Silva";
footer.appendChild(msgFooter);

pageBody.after(footer);
