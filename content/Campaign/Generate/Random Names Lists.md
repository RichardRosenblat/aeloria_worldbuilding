---
tags:
  - generation
---
Algorithym to generate random names for a campaign.

```JavaScript
((genOptions, numberOfLastNames) => {
    const numberToOrdinalWords = (n) => {
        const ordinalWords = [
            "Zeroth", "First", "Second", "Third", "Fourth",
            "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"
        ];

        if (n < 0 || n > 10) {
            const s = ["th", "st", "nd", "rd"];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        }

        return ordinalWords[n];
    };
    const generateNames = (genType) => {
        const result = [];
        for (let i = 0; i < 10; i++) {
            nameGen(genType);
            const arrayOfNames = document.getElementById("result").innerHTML.split("<br>").filter(Boolean);
            result.push(...arrayOfNames);
        }
        return result;
    };

    genOptions.forEach((genType, i) => {
        console.log('###############################-------' + i + '-------####################################')
        let result = generateNames(genType)
        if (numberOfLastNames >= 1) {
            console.log('------------------All-----------------------')
            console.log((result).join("_"))
            console.log('-----------------------------------------')
            console.log('-----------------First-----------------------')
            result = generateNames(genType)
            console.log(result.map(name => name.split(" ")[0]).join('_'))
            console.log('-----------------------------------------')

            if (numberOfLastNames === 1) {
                console.log('------------------Second-----------------------')
                result = generateNames(genType)
                console.log(result.map(name => {
                    const [_, ...rest] = name.split(" ")
                    return rest.join(' ')
                }).filter(n => !!n && n !== 'undefined').join('_'))
                console.log('-----------------------------------------')
            } else {
                for (let i = 1; i <= numberOfLastNames; i++) {
                    result = generateNames(genType)
                    console.log('------------------' + numberToOrdinalWords(i + 1) + '-----------------------')
                    console.log(result.map(name => name.split(" ")[i]).filter(n => !!n && n !== 'undefined').join("_"))
                    console.log('-----------------------------------------')
                }
            }
        }
        else {
            console.log((result).join("_"))
        }
        console.log('###################################################################################')
    });
})
    ([undefined, 1], 1)

```

# Alonian (Tallman) Generic 

## [Celtic (Breton) Names](https://www.fantasynamegenerators.com/celtic-breton-names.php)

### Male

#### Full names
Walig Le Guyader
Filiz de Rais
Min Soizic
Dogmael Vidament
Kaourig Le Garsmeur
Brevalan Kerverdo
Nevenoe Heussaff
Gwythian Dincuff
Gweltaz Vallée
Minig Guilcher
Ruvon Le Gonidec
Annaeg Tanguy
Morgan Aubert
Titouan Bothorel
Dagan Mordrel
Judikael Le Berre
Budeaux Kerfriden
Abriel Connan
Golven Le Du
Samzun Guillevic
Ivonig Debeauvais
Guéroc Menguy
Herbot Kerbrat
Tierneg Gwernig
Aubin Le Foll
Kaou Jézéquel
Bleiz Kerambrun
Meogon d'Argentré
Louenn Le Garsmeur
Nevenig Lebesque
Ruvon de Saint-André
Ou Broudig
Gwythian Vidament
Ke Callac
Peyo Le Coadic
Perez Le Coadic
Nomen Pezron
Andoche Queffelec
Foreannan Kerleroux
Suliag Robin
Donasien Cornec
Collas Konan
Gwythian Le Guyader
Titouan Hamon
Armael Ar Merer
Jaoven Lagadec
Gwenegan Le Bourhis
Arzhur Guernion
Riwanon Moigne
Conogan Rouillier
Gwenhael Maze
Adrian Quenouault
Ronan Kervinio
Gwennog Pezron
Briog Guyony
Alerig Guillevic
Ewen, de Rais
Azaf Le Gall
Padern Guilloux
Devrig Le Lann
Theoren Moisan
Gwier Flageul
Kavanig Madec
Even Laorans
Goulwen Menguy
Veig Ruellan
Laouenan Le Sciellou
Briag Connan
Kadog Le Hénaff
Jildazig Le Coq
Biavili Le Trocquer
Frañcez Abgrall
Ado Kerbrat
Gwennin Mevel
Herbod Kerrien
Suliac Flageul
Houarvian Ar Merer
Meogon Soizic
Theoren Kerdoncuff
Uriou Le Cam
Gwythian Le Garsmeur
Kou Guilloux
Similien Derrien
Bodeg Luzel
Gouziern Le Pennec
Gwen Quéré
Goulvenig Le Pen
Drenwal Rolland
Kaourig Kalloc'h
Tugal Plouzennec
Urloes Trépos
Denoelig Le Bihan
Riwall Ropars
Alor Le Gonidec
Odoceus Merser
Uuican Troadec
Suliac Guillerm
Brendanig Roper
Gwenegan Troadec
Moi Le Carvennec

#### First names
Jalm
Bertele
Joran
Kann
Jezekelig
Erwan
Donasien
Eneour
Riwanig
Janick
Arzhul
Brieu
Rivoare
Tuno
Mae
Hoelig
Maogad
Goul'chen
Fransezig
Brioc
Jacut
Frañsa
Efflamm
Tudalig
Juvad
Tudalig
Lunen
Perez
Modez
Meen
Théliau
Youen
Benedig
Ergad
Olîer
Ronan
Trestanig
Moran
Aven
Trestanig
Jodok
Iv
Brieu
Alberz
Glaoda
Helouri
Winnol
Arzel
Primelig
Maugan
Tin
Melio
Gaelig
Briwal
Brian
Tivizio
Armel
Juluan
Nouelig
Gwilherm
Konwen
Iwen
Younick
Jegu
Evarzheg
Alinoé
Luhan
Louennig
Walig
Gwihen
Judok
Maogad
Peyo
Tadeg
Kendiern
Gwenegan
Lukaz
Avel
Tegoneg
Senour
Harvian
Tin
Jikael
Meen
Argantael
Gevrog
Nevenoe
Riagad
Lom
Kolen
Tonan
Gwezhenneg
Yannig
Binidig
Brevalan
Joeva
Conan
Henog
Germen
Gwengalon




#### Last Names
Jaffrelot
Konan
Le Moigne
Plouzennec
Brekilien
Morvan
Abguillerm
Le Calvez
Jacob
Le Coadic
Le Bars
Kerbriant
Guguen
Haouisee
Abgrall
Morvan
Hascoet
Le Bigot
Visdeloup
Moigne
Le Boudec
Le Luyer
Gourvil
Cloarec
Trépos
Déguignet
Madec
Le Bivic
Abalain
Le Hir
Gourcuff
Roper
Loriquer
Omnes
Jaffrès
Jaffrezic
Godest
Guillevic
Kervinio
Hascoet
Le Verger
de Saint-André
Derrien
Ar Moal
Soizic
Barzic
Madec
Guiziou
Jacob
Rolland
Le Maux
Le Bail
Touboulic
Le Tallec
Le Guen
Derrien
Visdeloup
Roper
Kergoat
Libouban
de Gaulle
Kerbellec
Arbez
Quiviger
Gourvil
Jarry
Badoual
Masson
Le Garsmeur
Le Bouffo
Perrot
Le Bivic
Guguen
Abalain
Le Mouel
Le Baud
Gruel
Le Corre
Cadiou
Le Penven
Le Hénaff
Le Coadic
Gouedard
Kerleau
Botrel
Brekilien
Le Douget
Garandel
Segalen
Jaffrelot
Haouisee
Jézéquel
Le Carvennec
Stephan
Hamon
Gwernig
Madeg
Bolloré
Le Guillou
de Rais


### Female

#### Full names
Nennok Le Denmat
Klerwi Le Calvez
Arzhulenn Corre
Arzhurenn Coic
Riwanez Robic
Berc'hed Le Bail
Gwenael Heussaff
Enorig Kerambrun
Gael Moigne
Trefin Kerbriant
Aourell Le Gleau
Maelia Le Guen
Norig Aubert
Eloane Aubert
Paskell Soizic
Jakeza Guiziou
Maodanig Tilly
Enorig Le Bivic
Vana Vallerie
Soazick Le Goffic
Ana Gros
Binenn Kerleau
Tudon Gouyet
Maelysse Aubert
Met Guégan
Maiwena Pezron
Flamen Audigou
Agata Le Tallec
Barba Morvannou
Hoela Tiercelin
Argantel Mevel
Paolina Pasquiou
Nonn Yvenou
Liza Soizic
Maelia Le Douget
Enor Gouedard
Tiphaine Guillerm
Clervie Robic
Oanezig Quenouault
Padernez Abguillerm
Melena Moisan
Arzu Visdeloup
Nenog Haouisee
Klervie Ar Govig
Maelyss Vallée
Briny Vallerie
Gwanaelle Dubee
Efflammell Bolloré
Maely Vallée
Elen Le Gall
Vanou Arbez
Lupita Calvez
Riwana Le Bris
Koulmig Gourcuff
Azenorig Kervinio
Izabel Vidament
Brewalen Laorans
Barba Le Lann
Brec'hed Le Duff
Bél Le Borgne
Bredig Le Meur
Gaelaig Kerdoncuff
Mona Lagadic
Rozena Verne
Joceline Rocaboy
Laig Ulliac
Houarnevenn Le Goaziou
Awen Ar Merer
Heodez Rolland
Rozena Le Bars
Mariig Le Bris
Judicaëlle Le Goaziou
Sezaig Le Fevre
Koulmenn Aubert
Fanchon Le Calvez
Morna Le Guennec
Gaele Bothorel
Biganna Corre
Fransoez d'Argentré
Oanezig Al Lay
Ronanez Hercouet
Maelysse Perrot
Argane Le Bras
Brandana Thoraval
Aelig Audigou
Kannaig Aubert
Anaïg Kerdoncuff
Maela Mauvieux
Tréphina Lagadec
Nolwene Quiviger
Azenorig Rolland
Sev Jaffré
Herveline Le Denmat
Maiwena Kervinio
Morgane Le Hir
Tinaig Arbez
Azeline Le Luyer
Tunvez Morvand
Bleuenn Kerverdo
Maelenn Kerleau



#### First names
Vana
Brec'hed
Awena
Flamen
Aoda
Mevena
Lezou
Steredenn
Katel
Koulmia
Marivona
Neneg
Maiwenn
Mona
Goulvena
Yaelle
Aenor
Mevenez
Leveneza
Arzelig
Rivanon
Aoda
Tekla
Kavanin
Soizig
Trifina
Clair
Alwena
Herveline
Gladez
Arzhela
Primela
Eloane
Arzhula
Eved
Dunvael
Avela
Azenor
Morgana
Gaida
Briny
Maely
Emmanuela
Alanez
Hoela
Nolvenn
Briaga
Awen
Erwana
Fant
Jan
Brivaela
Herveline
Derwell
Aoda
Ninogan
Enorig
Efflammel
Arzhvaelig
Oanellig
Hoel
Fanchon
Maodanez
Gaelig
Modanig
Seza
Marc'haïd
Fanta
Ahez
Ninnog
Koulm
Ozvan
Charleza
Nevena
Seza
Aouregen
Yulizh
Noyale
Biganna
Soazic
Yuna
Matilina
Yuna
Rozena
Brianne
Arzhvaelig
Gaidig
Steredenn
Gwengunv
Elen
Yannez
Tella
Nevenez
Brianne
Andreva
Soizic
Maelduina
Flamenig
Jenovefa
Lezig



#### Last Names
Le Bouffo
Abguillerm
de Missirien
Le Guen
Gwennou
Le Coq
Quiniou
Dupuis
Kerbriant
Bodiou
Malmanche
Le Luyer
Talbourdet
Le Calvez
Gros
Larvor
Danielou
Ar Govig
Luzel
Garel
Badoual
Trépos
Rocaboy
Segalen
Le Verger
Grall
Le Corre
Haouisee
Laorans
Menguy
Moal
Gros
Broudic
Tanguy
Queffélec
Botrel
Trépos
Le Fur
Le Diouron
Le Berre
Pichon
Kermarrec
Vallée
Plouzennec
Le Bars
Kergoat
Le Metayer
Robic
Malmanche
Le Guillou
Le Hir
Kerbrat
Kerfriden
de Gaulle
Corre
Morvan
Ar Gak
Cornec
Mordelet
Kerderrien
Gautho
Caillibotte
Malmanche
Renan
Ar Merer
Verne
Cariou
Lagadec
Ar Moal
Goff
Yvenou
Le Goux
Moisan
Le Metayer
Le Pennec
Kerbriant
Carro
Arbez
Ar Merer
Gros
Drezen
Guillermo
Mordrel
Debeauvais
Kalloc'h
Pichon
Audigou
Kervinio
Verne
Guilloux
Danoën
Le Duff
Dubee
d'Argentré
Maze
Le Pen
Moal
Guernion
Jaouen
Le Guillou

## [Celtic (Welsh) Names](https://www.fantasynamegenerators.com/celtic-welsh-names.php)

### Male

#### Full names
Cai Priddy
Amhar Havard
Afan Isaac
Cenwyn Sundy
Anyon Morgan
Amren Harris
Gerwyn Greenway
Dirrnyg Pendry
Ermid Bliven
Mal Hire
Ysberin Pierce
Ieuan Goff
Syvwlch Corfield
Osian Rease
Bedyw Pew
Siarl Gotch
Marc Comey
Bedwyr Maddock
Rhydwyn Camm
Heini Harry
Bevin Reese
Barri Tudor
Brynmor Badder
Samlet Priddy
Teifion Beddoe
Steffan Voils
Dyfrug Blethen
Elgar Faughn
Grufudd Pew
Cadwgawn Howell
Ifan Brodrick
Steffon Ellis
Brynmor Glasscock
Tomi Bowell
Lewys Glynn
Cennydd Ellis
Maddock Boliver
Gerwyn Days
Iwan Cadwalader
Efrog Williams
Dyfi Nist
Garwyli Clough
Teifion Glascock
Rhion Griffin
Meilyg Sundy
Tecwyn Morgan
Tomos Swavely
Dirrnyg Sare
Iorweth Gethin
Cybi Prothro
Samlet Moses
Rhisiart Peairs
Ieuan Harvard
Dylan Rowlands
Meredudd Blethen
Telor Bethell
Gwyn Cadwalader
Cedwyn Protheroe
Ninian Badham
Ceri Llewelyn
Dylan Harries
Carwyn Elley
Goreu Bliven
Morys Myricks
Cedwyn Urian
Ysberin Gittings
Kyffin Beynon
Merion Mattick
Griff Parcell
Berian Charles
Hopcyn Fithen
Cadman Ellis
Meredydd Humphreys
Arfon Bennion
Madog Ellis
Wynford Powell
Tudor Bethel
Bleddyn Cadogan
Baddon Mattix
Alwyn Vaughan
Rhisiart Oliver
Anyon Prosser
Islwyn More
Marc Voyles
Llacheu Moses
Dewi Rhees
Rodric Pewitt
Prys Hovey
Berian Evan
Islwyn Mortimer
Rhun Guild
Caerwyn Ellis
Trahaearn Morgan
Gwaun Isaacks
Dirrnyg Faughn
Dylan Teague
Penvro Sear
Mabsant Harris
Glanmor Ellis
Baglen Bellin



#### First names
Gruffydd
Arwyn
Cadell
Mihangel
Ysberin
Bevan
Ceredig
Cynychwr
Cadawg
Garanwyn
Preece
Berwyn
Aneurin
Maelgwyn
Amlawdd
Cledwyn
Dafydd
Neifion
Moren
Huarwar
Dafydd
Llion
Iestyn
Ysberin
Mervyn
Iau
Garnoc
Watcyn
Caswallawn
Cayo
Harri
Cadell
Drystan
Dafydd
Telor
Owen
Cayo
Glanmor
Gwynfor
Steffan
Gwydion
Erwin
Calcas
Emyr
Mihangel
Eurion
Cadman
Garanwyn
Gwallawg
Aeron
Owein
Taliesin
Owein
Gwres
Andreas
Cynbel
Cenwyn
Medwyn
Ceri
Tudur
Cayo
Garth
Gwynlais
Dyfri
Rhys
Llassar
Meredudd
Aberthol
Mael
Mael
Ceri
Afan
Seth
Dyfed
Owin
Glyn
Elgar
Dewi
Meilyr
Deri
Elgar
Ieuan
Caerwyn
Caradoc
Edwyn
Gwayne
Drystan
Cedrik
Eurion
Ynyr
Neifion
Siawn
Myrddin
Sawel
Cynedyr
Derfel
Eryi
Caradawg
Gwili
Emyr



#### Last Names
Prichett
Moyle
Morgans
Scurlock
Preece
Hennion
Harry
Edwards
Cadwallader
Cloyd
Meredith
Bethell
Swavely
George
Hargest
David
Moore
Havard
Oliver
Nanney
Moses
Rosser
Gittings
Phillips
Mattocks
Morgan
Rice
Harries
Voiles
Bryn
Reese
Arthur
Bellin
Protheroe
Llewellyn
Isaacs
Penry
Treharne
Mostyn
Hennion
Bellis
Bees
Walters
Beddow
Tennis
Bliven
Elley
Greenway
Rease
Erwood
Charles
Rice
Sealy
Morris
Gittins
Moss
Cloyd
Wiliams
Dacus
Gibbs
Binion
Comey
Beese
Bonner
Couch
Clough
Lewis
Kemble
Tudor
Richards
Evens
Nist
Nevitt
Heaven
Watkins
Francis
Cloyd
George
Blethen
Bowen
Isaacs
Jenkins
Penrose
Coslett
Watkins
Brice
Gronow
Morgan
Moss
Elley
Llewellyn
Gwyn
Maddock
Bebb
Pryce
Blethen
Trahern
Gotch
Bellin
Prothero

### Female

#### Full names
Liliwen Firth
Gaynor Brys
Eirian Pendry
Eleri Owen
Arglwyddes Caleb
Meinwen Tudor
Grug Gittins
Elwyn Tew
Dona Stant
Aelwyd Elley
Winnie Jeffries
Heledd Corfield
Ifanna Glascock
Dwynwen Cadwalader
Aberfa Belling
Gwendolyn Price
Elain Elias
Terrwyn Parry
Penarddun Charles
Meinwen Caddell
Meredydd Howell
Lyneth Humphreys
Caitlyn Tudor
Esyllt Days
Catelyn Voyles
Rhonwen Wynn
Ina Bunner
Gladys Maddox
Caryl Bloyd
Dwynwen Mattox
Luned Penry
Mererid Brodrick
Clwyd Pendry
Gwylan Purcell
Dilys Bethell
Wyn George
Gaenor Rowlands
Eurneid Gronow
Eirlys Onion
Non Breckon
Tegwen Bevan
Gwennalarch Reece
Saeth Pembroke
Tagwen Stackpole
Nerys Cadwalader
Olwyn Tennis
Eurneid Poovey
Glain Prichard
Glesni Beavin
Olwina Bethel
Morgann Elijah
Begw Bevan
Rhian Goff
Heulwen Glynn
Ffion Rosser
Dwysil Coslett
Siany Cadogan
Fioled Clough
Brangwen Bivin
Glynis Hargest
Awen Mordecai
Myfanawy Maddock
Alwen Mathias
Eurolwyn Bebb
Margred Stealey
Aderyn Faughn
Gwen Prothro
Lona Enoch
Caryl Bowen
Arian Mattox
Aneira Richards
Rhoswen Binner
Morwen Bonner
Glyn Gough
Gwaeddan Merrick
Madlen Pryde
Clwyd Stackpole
Sioned Mower
Esyllt Wiliams
Olwenna Dee
Olwenna Lace
Artaith Eynon
Blodwen Hennion
Ffanci George
Mona Erwood
Goewyn Dey
Elenydd Bennion
Mali Glascock
Delyth Griffin
Elinor Griffin
Dwynwen Dewey
Gwenabwy Rosser
Cadi Sealy
Daere Harley
Berthog Meredith
Caryl Gwynn
Penarddun Pennoyer
Gwenabwy Evens
Cari Griffiths
Eurolwyn Bethel

#### First names
Eheubryd
Sian
Manod
Arglwyddes
Arianwen
Betrys
Olwen
Bethan
Maygan
Elwyn
Eilian
Cadi
Eira
Morwen
Blodwen
Tagwen
Tegwen
Tegan
Aeres
Morwyn
Olwen
Eiddwen
Callwen
Ffion
Maygan
Cothi
Eurwen
Tanwen
Alys
Catelyn
Rhian
Arglwyddes
Mair
Rhona
Glynis
Cari
Siriol
Carwen
Dilys
Catrin
Heulwen
Gwlithen
Gaenor
Glenys
Mair
Lowri
Aneira
Aelwen
Meggan
Rhedyn
Aelwyd
Arwydd
Gwenifer
Nest
Ffanci
Aberfa
Blodeuwedd
Gwenllian
Rhiannon
Ysbail
Dwysil
Madlen
Ffion
Esyllt
Erin
Isolde
Elwyn
Eilwen
Madlen
Fflur
Morwen
Gwyneth
Men
Eurneid
Elliw
Dafina
Glynnis
Alwen
Nesta
Gwenllian
Arglwyddes
Anwyn
Caniad
Dona
Marged
Non
Irwen
Eurwen
Aneira
Cerys
Cristyn
Daere
Aeres
Gwaeddan
Grug
Enrhydreg
Tonwen
Mererid
Mona
Teleri

#### Last Names
Mower
Francis
Kindrick
Maddock
Humphries
Ellis
Wynne
Boal
Griffiths
Howell
Bees
George
Roberts
David
Moss
Walters
Elley
Blower
Gower
Humphries
Bithell
Cecil
Jenkins
Glynn
Bennett
Glasscock
George
Nest
Glascock
Humphries
Glace
Poovey
Reese
Pryde
Tennis
Prothro
Rosser
Dey
Morse
Elijah
Wogan
Edwards
Cogan
Baines
Boal
Gaynor
Tudor
Moses
Belling
Griff
Sundy
Hargest
Harris
Evans
Prothro
Bethell
Scurlock
Firth
Beynon
Glasscock
Tew
Evans
Scurlock
Griffin
Rhys
John
Hargest
Oliver
Beavin
Priddy
Bloyd
Bloyd
Tudor
Binner
Davies
Samuel
Badder
Morgan
Beese
Moore
Purcell
Moyle
Nist
George
Pew
Dacus
More
Cadwallader
Nanney
Bithell
Walters
Charles
Pembroke
Prothero
Tudor
Povey
Cecil
Binion
Biven
Boal

## [Arthurian Name Generators](https://www.fantasynamegenerators.com/arthurian-names.php)

### Male
Glelleas
Ozamar
Avanc
Apordeiz
Antoriath
Custeth
Carnweline
Kigran
Albidud
Monnan
Loreu
Rhongolhwch
Gwemedes
Teibal
Kayhem
Accasant
Rhongoberis
Percires
Blyar
Calicheu
Gouvelon
Eliamains
Cymbens
Towain
Leonfal
Chapahem
Bedidud
Trirflet
Drycheu
Iwairence
Gouveth
Elinet
Falellean
Yspadur
Llaraunt
Ectorlon
Camladrod
Mallech
Escollon
Gahamedes
Maher
Losle
Isderence
Llamyant
Palin
Dinat
Hellemains
Aninw
Bersungist
Palath
Drulhwch
Teireu
Caraflet
Dodidain
Perilinus
Jograunce
Clamerwar
Leodozent
Gars
Arthgans
Ywaidwyn
Bellann
Esclaner
Afanna
Leodas
Bersubreul
Parzimyant
Gahemar
Bedud
Rionfal
Claudderch
Ectorleon
Lluarch
Drudain
Ancehan
Nangist
Gwalcharak
Pellinet
Spumawel
Hengroen
Perexander
Caellam
Hygrenant
Caiwg
Gaheredin
Ywaithi
Cairaint
Dinast
Hysel
Lutine
Bleoloas
Kynthedus
Leodewr
Custecius
Blailoas
Ysparnail
Cadwg
Bohocas
Guengere
Ozace

### Neutral
Pellilake
Blaivance
Horamurs
Dindran
Cyrd  
Engrello
Astollean
Aralon
Emryrent
Garvudd
Bevret
Kadymour
Gwyvere
Blangaine
Cymri
Anghannan
Gavres
Colgrerent
Hodwyr
Condwiramur
Emryrat
Owailine
Andrelat
Evembe
Aras
Teilat
Gahellean
Horent
Owaise
Helaiwel
Floffire
Owain
Mongere
Bleongere
Tes
Bellawain
Blaidure
Owainn
Elyalydd
Kahemones
Bleongoire
Brerence
Mevres
Perirdin
Hondelis
Helaiffire
Perinham
Perent
Carnwelat
Ywairawd
Perirvydd
Mese
Blaillean
Bediramurs
Clakane
Elyagan
Kadyvres
Brerion
Avarsa
Garis
Colgrerent
Olwevale
Elirawd
Bedinnin
Owaingoire
Breramur
Anghanham
Aglothi
Eliaurad
Gwydwyr
Gangere
Blard  
Blairvudd
Condwingoire
Brafir
Cuth
Moth
Avangwain
Hellerent
Cylles
Hongoire
Blailon
Dindranore
Glerre
Ozavret
Aglolon
Horre
Helleste
Guithi
Gath
Cynna
Elyawn
Hellene
Galon
Moramur
Eliredin
Olwerat
Hyndelis
Phelleas
Clardin

### Female
Belarre
Sillt
Niloyde
Brelott
Moviana
Herzerawd
Guinerine
Lavach
Litte
Danbranever
Llaflour
Anghaneve
Lynelinda
Feniloena
Teloena
Yseurad
Feniflour
Brade
Igraild
Isabegune
Blanched
Elizanna
Gwelen
Igrainloie
Blancheda
Marganors
Vird
Condwille
Langwain
Bralte
Gwendonete
Avanloie
Isovach
Cuce
Linerne
Guides
Isabenes
Ninna
Dindrarne
Belaflor
Herzed
Gwenhwyloyde
Grisald
Belaramurs
Isabelinde
Guere
Elizamue
Annaloena
Yseuce
Clarirvydd
Gwenerat
Pryfleur
Lindrie
Floloyde
Astodes
Gwenhwydwen
Anglilat
Margadamors
Dindraviana
Lalat
Blancheviana
Enyndole
Dechtenever
Argavach
Angliramurs
Olwelat
Ville
Dechtever
Isabegeus
Grisaned
Herzegune
Lyneviana
Isoflor
Igenever
Linerne
Estrikane
Gwendogyr
Larre
Gwellt
Matinte
Ygenever
Eindole
Iseugau
Herzevar
Lafach
Gwendoramurs
Ettalinda
Isaberawd
Igrailott
Elsalda
Lyowse
Kumue
Enidine
Yseunesse
Anavere
Yged
Vird
Lisamrei
Achegeus
Elsalle

## [Latin Name Generators](https://www.fantasynamegenerators.com/latin-names.php)

### Male

#### Full names
Alcesimarchus Vitalis
Candidus Civilis
Philocomasium Euphemius
Artotrogus Numerius
Megadorus Clement
Sycophanta Rutilius
Lystiteles Cumanus
Dinia Martyrius
Melaenis Regulus
Godefridus Tasius
Antamonides Angelus
Tyndarus Sylla
Antipho Sylvius
Advocati Sentius
Ballio Germanicus
Phaedria Arrius
Sergius Tibullus
Demaenetus Gualterus
Demiphones Orissus
Sceledrus Mactator
Cleomachus Sisenna
Luxuria Primanus
Philippus Hortensis
Eleusium Exsupereus
Palaestrio Auxilius
Advocati Bellicus
Phronesium Faustus
Leaena Eugenius
Pardalisca Alethius
Antipho Luti
Eleusium Caletus
Aureolus Caldus
Collybiscus Milonius
Aristophontes Epolonius
Augustinus Nigidius
Anterastilis Burrus
Toxilus Panthera
Ballio Bolanus
Agorastocles Salvian
Candidus Gorgonius
Trachalio Burcanius
Philocomasium Melus
Albinus Dolabella
Stalagmus Verus
Blepharo Sarimarcus
Toxilus Sabinus
Periplectomenus Pius
Aspasius Florus
Epidicus Pascentius
Gelasimus Eudomius
Virgo Victricius
Pellio Melitus
Citrio Praetextus
Abrahamus Eunapius
Crocotium Simo
Anterastilis Augustalis
Cylindrus Victorinus
Acanthio Catus
Dionysius Naso
Cleomachus Parnesius
Megadorus Cinnius
Romanus Galarius
Pyrgopolinices Meminius
Pleusicles Celer
Pardalisca Flavius
Eutychus Hortensus
Adulescens Faustinius
Dinia Scaurus
Artamo Lucci
Milphio Terenteius
Dionysius Quartinus
Sycophanta Megellus
Theodorus Cassius
Virgo Thurinus
Palinurus Cotentinus
Henricus Maecenus
Sobersides Caelinus
Lena Rufinius
Cylindrus Bubo
Delphium Vonones
Tedusius Priscillian
Demiphones Gluvias
Pellio Castorius
Aristophontes Spendius
Curculio Sebastius
Curculio Renatus
Anterastilis Naso
Sosicles Pudens
Lysidamus Messala
Adrius Tasius
Theodorus Gracchus
Sycophanta Pollio
Demiphones Speratus
Pyrgopolynices Zoilus
Periphanes Sura
Peniculus Pilatus
Philippus Tremellius
Lyco Vonones
Abelus Iavolenus
Philocrates Rogelius

#### First names
Phaedria
Daemones
Calidorus
Hanno
Philematium
Mulier
Cleareta
Periphanes
Phaedromus
Ergalisus
Vincentius
Syncerastus
Philopolemus
Lemniselenis
Daemones
Lysidamus
Gripus
Argyrippus
Lystiteles
Adulescens
Artemona
Citrio
Periplectomenus
Cocus
Vincentius
Albanus
Baebio
Cocus
Albanus
Harpax
Chalinus
Eligius
Theodosius
Callicles
Misargyrides
Pyrgopolinices
Theopropides
Aquila
Demaenetus
Menaechmus
Megadorus
Lampadio
Nicobulus
Quintinus
Tycho
Leaena
Callicles
Eutychus
Halisca
Demipho
Aureolus
Abundantius
Tyndarus
Demaenetus
Acropolistis
Aristophontes
Philto
Theodosius
Sceparnio
Demiphones
Iosephus
Sobersides
Lampadio
Lemniselenis
Sergius
Sceparnio
Lesbonicus
Albertus
Pasicompsa
Cleareta
Martinus
Lampadio
Stadius
Godefridus
Artemona
Adrius
Eleusium
Ballio
Messenio
Stephanus
Giddenis
Abundantius
Megaronides
Philocomasium
Bacchis
Aureolus
Phronesium
Lycus
Alcesimarchus
Lena
Lyco
Eunomia
Piscatores
Rogerius
Gripus
Pasicompsa
Dionysius
Pellio
Aristophontes
Lycus

#### Last Names
Emeritus
Gaurus
Callisunus
Commidius
Probus
Damasippus
Genialis
Scato
Candidius
Drusillus
Ferreolius
Diocourides
Victor
Luti
Gavros
Gratidius
Tiburs
Laeca
Volusius
Silus
Novation
Senecius
Luti
Balduinus
Hirrus
Gavros
Eulogius
Herma
Eutherius
Marsicus
Castorius
Ramio
Avenarius
Glycia
Arrius
Adauctus
Cato
Apelles
Felissimus
Durus
Elerius
Trebonius
Burrus
Hirpinius
Maecenus
Sabinus
Epimachus
Famia
Encratis
Titillus
Silanus
Fronto
Caligula
Carinus
Acaunus
Lurco
Metunus
Gemellus
Pius
Natalinus
Salvian
Sura
Fastidius
Mucius
Andronicus
Publicola
Calpurnis
Silius
Carbo
Eumenius
Caecilius
Adepphius
Lentulus
Cumanus
Synnodus
Falconius
Libo
Florus
Exupertus
Nertomarus
Matho
Dalmatius
Major
Speratus
Valgus
Micius
Cucuphas
Silo
Albinus
Gracilis
Sisinnius
Frugi
Alypius
Petasius
Paetinus
Numerius
Dominicus
Sanga
Silius
Durus

### Female

#### Full names
Potitia Cassius
Otacilia Sorio
Atronia Pamphilius
Arsinia Tarsicius
Rusonia Falco
Pompilia Rufinius
Statilia Eliphas
Duronia Falco
Curia Restitutus
Palaestra Calerus
Tettiena Pius
Statia Leontius
Burriena Aper
Stephana Verullus
Pomptina Eonus
Domitia Cornix
Urgulania Panaetius
Caerellia Pollio
Floridia Major
Hosidia Vincentius
Lucretia Polybius
Vesnia Parnesius
Volusena Primulus
Bruttia Exuperantius
Vergilia Evodius
Munatia Germanicus
Burriena Valerius
Cilnia Torquatus
Rusonia Septimius
Pedia Ramio
Orania Opimius
Flavonia Schlerus
Messiena Lorenzi
Vinicia Laenas
Flavia Classicius
Floria Geminius
Petra Hesychius
Martina Synnodus
Floridia Salonius
Vitellia Reburrus
Sentia Caprarius
Macrinia Philippus
Fabia Nepos
Titia Fimus
Vagnia Sabinus
Viridia Durus
Equitia Secundas
Myrrhina Triferus
Ampelisca Fraucus
Cornelia Arvina
Claudia Silo
Volcatia Augurnus
Cluntia Ferreolius
Ceionia Collatinus
Caedicia Gregorius
Cluntia Bellicus
Marcella Segestes
Petra Censorinus
Artoria Surinus
Helvia Hortensis
Ateia Celatus
Hortensia Vocula
Caelia Florens
Potitia Patricius
Petillia Virginius
Insteia Martius
Sempronia Fraucus
Suedia Lurio
Nipia Marsicus
Artoria Paratus
Turullia Maro
Rufia Dardanius
Scribonia Symphorian
Ulpia Pertinax
Mamilia Indaletius
Gavia Surinus
Palpellia Vepgenus
Festinia Zeno
Lucilia Vonones
Plautia Firminus
Lucia Alypius
Petellia Livius
Francisca Crescentius
Laberia Calatinus
Novia Protacius
Vagnia Magnentius
Nasennia Carnifex
Vatinia Frontinus
Icilia Albinus
Calventia Opimius
Axia Servatius
Cantilia Trogus
Annia Marcipor
Clodia Minicius
Octavia Laetinius
Atronia Gaius
Babudia Getha
Gratidia Exupertus
Ulpia Litumaris
Caristania Tutor

#### First names
Aedinia
Verginia
Antia
Hortensia
Plotia
Sempronia
Metilia
Pinaria
Sempronia
Clodia
Trebellia
Bruttia
Lartia
Caninia
Matia
Plautia
Fulcinia
Fabia
Carvilia
Victricia
Didia
Palaestra
Curtia
Papia
Caesetia
Laberia
Hortensia
Nigilia
Pompeia
Metilia
Paesentia
Lucia
Atilia
Decumia
Caecia
Avita
Sertoria
Helvetia
Nigidia
Titinia
Pomptina
Calvisia
Sennia
Dillia
Barbatia
Vesuvia
Cincia
Allectia
Sulpicia
Blossia
Babudia
Petillia
Sidonia
Considia
Cloelia
Statilia
Canutia
Pinaria
Maelia
Novia
Octavia
Labiena
Domitia
Placidia
Suedia
Sepurcia
Babudia
Vesuvia
Rutilia
Sabucia
Licinia
Caecilia
Egnatia
Iosepha
Mamilia
Coiedia
Pinaria
Lusia
Salonia
Quinctia
Cluilia
Rusonia
Friderica
Uulia
Verginia
Claudia
Antonia
Axia
Matia
Volumnia
Munatia
Floridia
Gellia
Aemilia
Vinicia
Vorenia
Titiedia
Myrrhina
Caninia
Naevia

#### Last Names
Piscator
Pratensis
Sotericus
Scribonius
Luti
Exuperantius
Rector
Tyranus
Priscillian
Agustalis
Prilidius
Trebius
Ventor
Luci
Vindex
Ecdicius
Laurentius
Publicus
Nerva
Andronicus
Dacien
Nasica
Hirrus
Pennus
Auxientius
Indaletius
Tremellius
Fastidius
Mancinus
Capito
Claudius
Nennius
Quintillus
Indaletius
Pachomius
Adranos
Symphorian
Rufrius
Plautis
Septimius
Calpurnius
Quirinalis
Moderatus
Achaicus
Apelles
Silesius
Petasius
Lucretius
Venator
Servatius
Lurio
Paenula
Fulvius
Thurinus
Pertinax
Cyprius
Petasius
Sentius
Castinus
Simplicius
Processus
Duvius
Musicus
Marinus
Lepidus
Concessus
Augurnus
Romanus
Maternus
Auxientius
Clemens
Margarita
Flavinus
Amantius
Sulla
Balduinus
Bonifatius
Eudoxius
Lupis
Severlinus
Apelles
Tullas
Terenteius
Muco
Rutilius
Sabinius
Olearius
Candidius
Proceus
Aurelius
Bubo
Naucratius
Sudrenus
Cico
Siricus
Decmitius
Ambrosius
Cinnius
Falco
Olympicus


# Asteni (Tallman) Italian

## [Roman name generator](https://www.fantasynamegenerators.com/roman-names.php)

### Male

#### Full names
Quintus Calidius Aratus
Lars Gratius Protacius
Cossus Granius Colias
Tiberius Paesentius Amphion
Cnaeus Accoleius Buteo
Canus Verginius Cyprianus
Cassius Albanius Pastor
Quintus Curius Bamballio
Titus Petronius Cotentinus
Hostus Ninnius Zosimus
Primus Vorenius Melitus
Galerius Atilius Cotta
Titus Cordius Macrobius
Gallio Petillius Cenaeus
Caius Pomponius Micon
Sextus Quinctilius Fimbria
Lucius Betucius Aquilius
Cnaeus Statius Iocundus
Octavianus Sestius Augustus
Aulus Pomponius Perpenna
Caius Petilius Cyprianus
Servius Volusenna Restitutus
Numerius Vibidius Aurelianus
Proclus Servilius Superbus
Secundus Barbatius Cremutius
Lucius Plinius Pascentius
Tertius Vipsanius Priscus
Lucius Vorenius Florentius
Quintus Caerellius Quietus
Numerius Milonius Decianus
Amulius Petellius Hesychius
Gnaeus Vibidius Martianus
Titus Dexsius Valgus
Mettius Bruccius Sisenna
Mettius Palpellius Frigidian
Octavianus Manlius Aquillius
Lucius Maecilius Postumus
Maximus Floridius Tarquinius
Marcellus Volusenna Licinius
Decimus Messienus Synistor
Caeso Icilius Nepos
Nonus Veranius Belenus
Quintus Faenius Ulixes
Oppius Vipsanius Pudens
Aulus Caerellius Trupo
Maximus Galerius Leontius
Tiberius Piscius Genialis
Tertius Herennius Grumio
Vibius Suedius Decmus
Primus Potitius Albinus
Titus Helvius Scapula
Numerius Nepius Vespasianus
Lar Rusonius Vocula
Gaius Flavius Habitus
Secundus Cloelius Severus
Sisenna Gratius Emeritus
Quintus Vatinius Publianus
Tertius Marcius Clement
Decius Manilius Natalis
Publius Atius Volusenus
Flavius Favonius Palicamus
Gnaeus Socellius Tullius
Placus Oppius Andronicus
Cossus Livius Asellio
Spurius Lampronius Exupertus
Secundus Didius Porphyrius
Caius Vagennius Lucullus
Gaius Caecius Thurinus
Lars Pompeius Eudoxius
Titus Sextius Genialis
Drusus Octavius Diocletianus
Marcus Quinctilius Felissimus
Amulius Plotius Turpilianus
Arruns Avidius Constans
Titus Vagennius Nerva
Cossus Burrienus Vindex
Marcellus Caristanius Fagus
Titus Secundius Margarita
Postumius Maelius Priscian
Publius Considius Vetranio
Titus Aurelius Traianus
Cassius Pontidius Leddicus
Tiberius Liburnius Caprarius
Canus Mallius Abercius
Vel Vibenius Niger
Manius Vitruvius Irenaeus
Hostus Vergilius Augustalis
Quintus Lucretius Maecenus
Sextus Canidius Laetinianus
Caius Julius Cosmas
Amulius Caecilius Galerus
Augustus Postumius Comes
Mamercus Novius Genialis
Decius Vitruvius Similis
Quintus Plinius Titianus
Manius Trebellius Muncius
Mamercus Mamilius Mico
Marcus Calidius Pilatus
Vopiscus Pisentius Docilinus
Drusus Secundius Fuscus

#### First names
Secundus
Spurius
Vopiscus
Oppius
Octavianus
Aulus
Amulius
Maximus
Tullus
Tertius
Tertius
Canus
Caius
Publius
Faustus
Herius
Oppius
Tullus
Septimus
Opiter
Marcellus
Amulius
Agrippa
Cassius
Appius
Kaeso
Lucius
Vel
Herius
Mamercus
Vel
Lucius
Camillus
Septimus
Tullus
Vopiscus
Drusus
Flavius
Amulius
Publius
Decius
Quintis
Manius
Mamercus
Vibius
Secundus
Flavius
Cossus
Gnaeus
Paulus
Decius
Vibius
Manius
Proclus
Decius
Quintis
Septimus
Paullus
Galerius
Gallio
Vel
Placus
Kaeso
Caelus
Kaeso
Quintus
Faustus
Spurius
Tullus
Gallio
Paulus
Flavius
Publius
Cossus
Octavianus
Marcus
Titus
Lucius
Caeso
Kaeso
Servius
Flavius
Servius
Tiberius
Vibius
Decius
Amulius
Drusus
Amulius
Arruns
Kaeso
Drusus
Aulus
Servius
Potitus
Vibius
Tertius
Caeso
Septimus
Marcellus

#### Middle names
Quinctius
Albatius
Uulius
Pollius
Sertorius
Albanius
Vibidius
Varius
Sabucius
Fundanus
Vorenius
Cantilius
Fabius
Ulpius
Sepurcius
Herminius
Dexsius
Desticius
Cosconius
Rufius
Pomptinus
Sergius
Helvetius
Aquillius
Quinctius
Lafrenius
Viducius
Oppius
Insteius
Cantilius
Piscius
Lucceius
Hostilius
Pinarius
Socellius
Petellius
Statius
Visellius
Avidius
Petellius
Coiedius
Quinctilius
Cordius
Ninnius
Titinius
Floronius
Piscius
Avidius
Antius
Vatinius
Rutilius
Hosidius
Canius
Camilius
Caesius
Veturius
Mallius
Appuleius
Lollius
Pollius
Bucculeius
Munius
Carius
Messienus
Allectius
Sergius
Volumnius
Curius
Aburius
Cispius
Arsinius
Atrius
Epidius
Fufius
Nipius
Trebellius
Sennius
Vipsanius
Herminius
Placidius
Papinius
Volusenna
Olcinius
Antistius
Carius
Vibidius
Rabirius
Gabinius
Gratidius
Carvilius
Scribonius
Marcius
Sentius
Amatius
Desticius
Turullius
Junius
Volusius
Visellius
Vagnius

#### Last Names
Maecenus
Sarrius
Restitutus
Columbanus
Bodenius
Terenteianus
Firminus
Calenus
Nennius
Maximus
Fimbria
Cyprianus
Augendus
Archarius
Maritialis
Arminus
Octobrianus
Major
Quiriac
Ferreolius
Camillus
Clodianus
Vinicianus
Clarus
Turpilinus
Praetextus
Vitoricus
Perperna
Verecundus
Iovinus
Auxilius
Caprarius
Arcadius
Fructosis
Brucetus
Sandilianus
Campanus
Renatus
Commidus
Aquila
Lucilianus
Anullinus
Maursus
Auila
Vibennis
Felicissimus
Viator
Afer
Simplex
Censorinus
Ursus
Naso
Marsyas
Quiriac
Cinnianus
Eutherius
Magnentius
Panaetius
Brucetus
Cencius
Palicamus
Erasinus
Gualterus
Catianus
Quentin
Scato
Micon
Maximinius
Gavros
Brocchus
Clodian
Ambrosius
Pusinnus
Ventor
Vetranio
Frontinus
Hiberus
Tuditanus
Marinus
Lovernius
Epidianus
Piso
Carbo
Praetextus
Typhoeus
Gordio
Banquerius
Docilus
Marcipor
Malchus
Faustillus
Cervidus
Adventus
Siricus
Titianus
Hortensus
Paratus
Iovius
Lepontus
Iustinus

### Female

#### Full names

Ausonia Hybrida
Sepurcia Libo
Servilia Tiburs
Secundia Sympronian
Dexsia Dio
Caelia Tanica
Pedia Aciliana
Sornatia Micon
Cassia Ahala
Volcatia Castoria
Tullia Candida
Menenia Cico
Pinaria Gavros
Junia Dalmatia
Vagennia Bibula
Viducia Epolonia
Liburnia Primula
Favonia Vatia
Tanicia Pantensa
Tadia Veturia
Cicereia Ventor
Nigilia Anca
Attia Protacia
Axia Dacien
Herennia Dolabella
Tettia Censoria
Armenia Marcella
Duronia Fausta
Fabia Bambalio
Titinia Symphorian
Portia Germana
Bruttia Priscillian
Menenia Arata
Vesuvia Lentula
Tettidia Mancina
Secundinia Dalmatia
Nemetoria Pia
Attia Traila
Calvisia Abito
Ausonia Bradua
Laetoria Amphion
Juventia Hortensis
Aemilia Vonones
Caerellia Augenda
Ateia Titilla
Vassenia Facilis
Liburnia Exuperta
Loreia Maja
Veturia Rufa
Bruttia Eclecta
Peltrasia Tiburs
Canuleia Bolana
Grania Crispa
Sulpicia Megella
Octavia Fredisia
Aebutia Leddica
Orania Synnoda
Floronia Peregrina
Pullo Nemesiana
Caesetia Concessa
Consentia Acacia
Attia Calacica
Cassia Calva
Calidia Curio
Acilia Ligustina
Otacilia Comitina
Tettia Maja
Lucceia Torquata
Icilia Melita
Postumia Gordio
Livia Virilis
Desticia Fabiana
Pompeia Roscia
Olcinia Ahenobarba
Accoleia Betto
Caesonia Rufa
Sergia Fimbria
Oppia Egbuttia
Laetoria Bromida
Accia GordianGordiana
Titinia Memor
Lafrenia Pustula
Manilia Orissa
Asinia Piso
Bucculeia Senna
Flavonia Aruns
Olcinia Magna
Manlia Libania
Vinicia Aper
Seia Ulfila
Sestia Hermina
Amatia Hadriana
Caetronia Otho
Petellia Saunio
Nigidia Memmia
Tettidia Salvian
Sertoria Maritima
Caecina Gessia
Pedia Nasica
Mucia Titiana

#### First names
Ausonia Hybrida
Sepurcia Libo
Servilia Tiburs
Secundia Sympronian
Dexsia Dio
Caelia Tanica
Pedia Aciliana
Sornatia Micon
Cassia Ahala
Volcatia Castoria
Tullia Candida
Menenia Cico
Pinaria Gavros
Junia Dalmatia
Vagennia Bibula
Viducia Epolonia
Liburnia Primula
Favonia Vatia
Tanicia Pantensa
Tadia Veturia
Cicereia Ventor
Nigilia Anca
Attia Protacia
Axia Dacien
Herennia Dolabella
Tettia Censoria
Armenia Marcella
Duronia Fausta
Fabia Bambalio
Titinia Symphorian
Portia Germana
Bruttia Priscillian
Menenia Arata
Vesuvia Lentula
Tettidia Mancina
Secundinia Dalmatia
Nemetoria Pia
Attia Traila
Calvisia Abito
Ausonia Bradua
Laetoria Amphion
Juventia Hortensis
Aemilia Vonones
Caerellia Augenda
Ateia Titilla
Vassenia Facilis
Liburnia Exuperta
Loreia Maja
Veturia Rufa
Bruttia Eclecta
Peltrasia Tiburs
Canuleia Bolana
Grania Crispa
Sulpicia Megella
Octavia Fredisia
Aebutia Leddica
Orania Synnoda
Floronia Peregrina
Pullo Nemesiana
Caesetia Concessa
Consentia Acacia
Attia Calacica
Cassia Calva
Calidia Curio
Acilia Ligustina
Otacilia Comitina
Tettia Maja
Lucceia Torquata
Icilia Melita
Postumia Gordio
Livia Virilis
Desticia Fabiana
Pompeia Roscia
Olcinia Ahenobarba
Accoleia Betto
Caesonia Rufa
Sergia Fimbria
Oppia Egbuttia
Laetoria Bromida
Accia GordianGordiana
Titinia Memor
Lafrenia Pustula
Manilia Orissa
Asinia Piso
Bucculeia Senna
Flavonia Aruns
Olcinia Magna
Manlia Libania
Vinicia Aper
Seia Ulfila
Sestia Hermina
Amatia Hadriana
Caetronia Otho
Petellia Saunio
Nigidia Memmia
Tettidia Salvian
Sertoria Maritima
Caecina Gessia
Pedia Nasica
Mucia Titiana

#### Last Names
Bibula
Muciana
Damian
Symmacha
Sollemnis
Capiton
Dalmatia
Pilata
Albinia
Digna
Flaviana
Dio
Sarimarca
Mercurina
Paeta
Ulixes
Medullina
Peregrina
Glycia
Arpagia
Bonifatia
Crispa
Albinia
Sabellia
Arcadia
Galaria
Hosidia
Pusinna
Seuso
Roscia
Procyon
Epolonia
Rufiniana
Hortensia
Plautia
Lunaris
Ivmara
Vara
Damasa
Facilis
Corda
Pollio
Melissa
Caleta
Trimalchio
Luculla
Bato
Priscian
Moderata
Thurina
Abercia
Turibia
Pansa
Cimber
Buccio
Asellio
Naso
Petreia
Sulina
Acacia
Bellator
Domitiana
Cervida
Gualtera
Pudentia
Arpagia
Laterana
Livigena
Belena
Patercula
Turibia
Murena
Inda
Commia
Genesia
Optata
Tremorina
Abito
Littera
Assania
Placida
Sentia
Amantia
Festa
Quieta
Orosia
Flavian
Sabina
Congrio
Sperata
Paenula
Pia
Agorix
Scapula
Cyprias
Collatina
Frontina
Molaca
Seneciana
Protacia

## [Latin name generator](https://www.fantasynamegenerators.com/latin-names.php)

### Male

#### Full names
Augustinus Serranus
Gripus Piscator
Hadrius Homullus
Palaestrio Sorex
Epignomus Silius
Sangarinus Laetinius
Epignomus Bambalio
Pasicompsa Chlorus
Palinurus Cinnius
Tedusius Postumus
Saturio Septimus
Robertus Lucius
Aurelio Medullinus
Alanus Festus
Demiphones Rufinius
Sparax Curio
Angelus Cico
Robertus Celatus
Ergalisus Hiberus
Luxuria Rufinus
Godefridus Noster
Aurelio Ennius
Lysimachus Falco
Sycophanta Nicasius
Lorarii Trebonius
Aquila Maursus
Phygia Cethegus
Misargyrides Lupis
Truculentus Iuba
Luxuria Carinus
Stadius Bruccius
Palinurus Asprenas
Modestus Gracchus
Iosephus Paterculus
Franciscus Calpornius
Olympio Amandus
Bromia Calpornius
Selenium Messor
Chalinus Agustalis
Cacistus Roscius
Franciscus Buteo
Lysidamus Aurelius
Aquila Lucius
Pyrgopolinices Furius
Cleareta Sarimarcus
Adulescens Osterius
Periplectomenus Ripanus
Pyrgopolynices Typhoeus
Phronesium Chlorus
Aureolus Perennis
Charmides Cyprias
Toxilus Horatius
Antamonides Speratus
Stephanium Aemilius
Palaestrio Liberalis
Melaenis Proculus
Staphyla Abito
Dionysius Papinian
Dinia Felissimus
Acropolistis Marsicus
Palaestrio Moderatus
Mnesilochus Victor
Syra Mellitus
Dionysius Gaurus
Theopropides Remigius
Palinurus Lepidus
Lemniselenis Florus
Cleareta Martinus
Epignomus Trebonius
Aquila Tiburs
Cocus Minervalis
Piscatores Sylla
Georgius Crispin
Rogerius Decmus
Artotrogus Gratidius
Nicobulus Processus
Tycho Opimius
Therapontigonus Vibennis
Sparax Fraucus
Crocotium Cupitas
Lesbonicus Venustinius
Lysimachus Clodian
Charinus Scribonius
Pius Vetranio
Sceledrus Eclectus
Pellio Iuvenlis
Cyamus Domitius
Stalagmus Gryllus
Quintinus Casca
Mnesilochus Thrasea
Baebio Venantius
Grumio Ahala
Toxilus Musicus
Sycophanta Rufinius
Firminus Donatus
Megaronides Flavinus
Aspasius Aquillius
Sagaristio Planta
Pyrgopolinices Humilus
Alanus Hilarius

#### First names
Diniarchus
Aristophontes
Adelphasium
Leaena
Coquus
Lyconides
Vincentius
Cacistus
Panegyris
Epidicus
Callipho
Gallicles
Labrax
Chrysalus
Acroteleutium
Coquus
Philocomasium
Aristophontes
Alanus
Abrahamus
Ludovicus
Cacistus
Blepharo
Stratophanes
Syra
Tedusius
Ludovicus
Misargyrides
Sceparnio
Sycophanta
Ergalisus
Quintinus
Paegnium
Eleusium
Phaedromus
Scapha
Planesium
Stephanus
Adelphasium
Saturio
Nicodemus
Albinus
Megadorus
Pyrgopolinices
Alcesimus
Cleareta
Charinus
Gymnasium
Bromia
Fridericus
Franciscus
Ballio
Mnesilochus
Laurentius
Lorarii
Messenio
Hadrius
Alcesimus
Antipho
Hanno
Sparax
Alcesimarchus
Mnesilochus
Lesbonicus
Curculio
Lysimachus
Sceledrus
Pyrgopolinices
Sulpicio
Megaronides
Philippus
Rogerius
Artamo
Cario
Anterastilis
Dionysius
Aristophontes
Candidus
Sobersides
Pistoclerus
Abelus
Alcmena
Stratophanes
Iosephus
Gulielmus
Sphaerio
Labrax
Crocotium
Milphio
Acroteleutium
Mnesilochus
Pasicompsa
Hegio
Stratipoccles
Collybiscus
Cleostrata
Citrio
Lycus
Quintinus
Lysidamus

#### Last Names
Audens
Ursacius
Eonus
Ecdicius
Pantensus
Senecius
Clodius
Tatian
Constans
Saturninus
Processus
Marinius
Nasica
Photius
Sacerdos
Hirrus
Cogitatus
Sotericus
Farus
Lurio
Evodius
Telesinus
Marcellus
Martius
Sanga
Hilarius
Eudomius
Curio
Macro
Magnus
Piso
Romulus
Tuccius
Crispus
Fuscinus
Eunapius
Opilio
Lucceius
Petri
Praetextus
Herma
Spendius
Sollemnis
Marcialis
Capiton
Galerus
Littera
Priscian
Faber
Catius
Hybrida
Vibennis
Minicius
Festus
Meminius
Mansuetus
Ordius
Torquatus
Audaios
Super
Scato
Emeritus
Flavius
Scrofa
Augendus
Octavian
Vopiscus
Valerian
Livius
Caepio
Porphyrius
Tutor
Lentulus
Caligula
Calacicus
Mus
Litumaris
Maximus
Panthera
Fabius
Maximus
Aloysius
Majus
Melus
Caligula
Gualterus
Fulvius
Vulso
Molacus
Ausonius
Carnifex
Lucceius
Pennus
Sulla
Sylvian
Hybrida
Gellius
Caecina
Agorix
Aquillius

### Female

#### Full names
Armenia Sisinnius
Sextilia Banquerius
Paesentia Asina
Faleria Capito
Barbatia Simplex
Arsinia Gratidius
Coruncania Paratus
Calvisia Avenarius
Sempronia Receptus
Tremellia Petasius
Rabiria Genesius
Cispia Gorgonius
Paula Pleminius
Pompilia Longinus
Blandia Fabillus
Aburia Quirinalis
Ausonia Scipio
Sornatia Crispian
Palaestra Lentulus
Rufia Acilius
Numeria Luzi
Matia Tanicus
Manlia Bato
Lampronia Leddicus
Sepunia Pelagius
Manlia Turpilius
Nemetoria Iuncus
Atria Victorinus
Piscia Galenus
Nasennia Pustula
Minucia Curio
Betiliena Montanus
Palaestra Tranquillus
Sertoria Aurelius
Spuria Aluredes
Fabia Tremorinus
Cantia Galenus
Consentia Licinius
Betucia Nigellus
Flavonia Catullus
Pedia Amandus
Loreia Homullus
Rutilia Epimachus
Vibia Eborius
Volaginia Dolabella
Norbana Maius
Accoleia Primanus
Tettidia Scrofa
Valeria Clarus
Atronia Castorius
Rabiria Felicissimus
Livia Paratus
Vibidia Corvus
Allectia Marinius
Popidia Glabrio
Matia Mutius
Paula Macrinus
Caesennia Polybius
Floridia Polus
Nigidia Amor
Volusia Decius
Beata Postumus
Titiedia Senilis
Iosepha Aloysius
Ummidia Simplex
Talmudia Cresces
Dossenia Pictor
Faenia Salvius
Hirtia Iuncinus
Decumia Lurco
Lucceia Statius
Rusonia Quintillus
Talmudia Candidus
Trebatia Arcadius
Vibia Tullas
Petellia Celatus
Vitruvia Gryllus
Hosidia Dominicus
Dexsia Sura
Acilia Isatis
Titia Turpilius
Rufria Profuterius
Sentia Iuvenlis
Barbatia Veranius
Vitruvia Litorius
Lartia Octobrius
Murria Aebutus
Faenia Titillus
Nigidia Ulpius
Artoria Sabellius
Felicitas Paulinus
Pontia Gaurus
Fufia Seneca
Ulpia Genialis
Camilia Iustinius
Sidonia Megellus
Lafrenia Flavinus
Pedia Rutilius
Arria Quintus
Pompilia Medullinus

#### First names
Novia
Vagionia
Antistia
Vipstana
Grania
Pupia
Servilia
Atria
Insteia
Lartia
Gratidia
Feliciana
Seia
Helvetia
Menenia
Caecina
Desticia
Lucilia
Murria
Icilia
Julia
Dexsia
Maelia
Modesta
Titia
Duronia
Munia
Fulcinia
Acilia
Friderica
Allectia
Caprenia
Curia
Insteia
Viducia
Gavia
Isidora
Pomponia
Calpurnia
Bruttia
Lucilia
Sabucia
Postumia
Nasennia
Verginia
Lafrenia
Ulpia
Furia
Bantia
Talmudia
Stephana
Tuccia
Trebellia
Gratia
Laberia
Nipia
Tanicia
Caecina
Publicia
Oppia
Numeria
Portia
Tullia
Vagionia
Cincia
Uulia
Philippa
Caepasia
Nasennia
Laetoria
Quinctia
Secundia
Cincia
Secundinia
Virginia
Pomptina
Herminia
Desticia
Pupia
Fabia
Sidonia
Spuria
Bruccia
Caeparia
Stephana
Tettia
Julia
Caesennia
Dillia
Stertinia
Dillia
Vagennia
Titia
Nasennia
Stephana
Titinia
Clovia
Didia
Cornelia
Lollia

#### Last Names
Isatis
Osterius
Protacius
Aruns
Tullas
Aeacus
Dubitatius
Esdras
Lurio
Scato
Florentius
Mancinus
Tatian
Cerinthus
Florens
Vespillo
Panaetius
Linus
Corbulo
Columbanus
Garilius
Linus
Sanga
Ingenuus
Tremorinus
Octavian
Culleolus
Pascentius
Titius
Lepidus
Ruso
Pompolussa
Voteporix
Dorotheus
Calenus
Marinus
Fimbria
Naevius
Lucceius
Dardanius
Capito
Paulinus
Laeca
Sartorius
Tremellius
Simplex
Lorenzi
Orissus
Senopius
Pascentius
Viator
Limetanus
Frontalis
Ramirus
Musa
Murena
Volturcius
Segestes
Triferus
Volturcius
Postumius
Haterius
Vibullius
Dubitatius
Ingenuus
Vestinus
Laenas
Pustula
Carbo
Paterculus
Ursinus
Palicamus
Festus
Littera
Trebius
Calatinus
Luzi
Caelinus
Parnesius
Luci
Columbanus
Cinna
Iuvenlis
Martial
Cittinus
Brutus
Iustius
Licinius
Felissimus
Hadrius
Trenus
Mercurinus
Synnodus
Synnodus
Figulus
Encratis
Vestorius
Polybius
Auxentius
Commidius

## [Italian name generator](https://www.fantasynamegenerators.com/italian-names.php)

### Male

#### Full names
Guido Allocca
Mennone Vietti
Quintino Pase
Liborio Errante
Ermanno Passarello
Aleardo Fioretti
Ivanoe Gargano
Ursicio Paladini
Valerico Rogero
Gabino Cifarelli
Vladimiro Armando
Bertoldo Puma
Casimiro Carrino
Palladio Centrella
Alceo Zaccagnini
Vedasto Garofano
Leonida De Vico
Tussio Sciortino
Giandomenico Moceri
Barsaba Giacomelli
Gesualdo Butera
Pomponio Nutile
Beltramo Paparella
Nicodemo Lepre
Namazio Rizzi
Chiaffredo Marsala
Adeodato Pasquali
Carmine Carangelo
Venustiano Montanari
Birino Napoli
Clemente Colavita
Lisandro Spadoni
Ermenegildo Dominici
Serapione Dente
Bonito Mazzucco
Albrico Santavicca
Asdrubale Squillante
Verulo Vaccarella
Alfio Arnone
Immacolato Montecalvo
Efrem Sinisi
Uguccione Catania
Adalberto Gerace
Ampelio Capoccia
Sisto Tavella
Marino Delle Donne
Tibaldo Pignone
Osvaldo Palla
Giulio Riccelli
Bonito Patino
Celso Zello
Oddone Minicozzi
Aiace Puopolo
Sigismondo Puccia
Giulio Suriano
Frido Pennella
Manilio D'Oria
Cassio Bosi
Remo Catalanotto
Dionigi Candia
Fortunato Di Pietrantonio
Taide Gerbasi
Saverio Ranallo
Tarcisio Palaia
Rubiano Pari
Filomeno Santulli
Ricario Maratea
Meneo Mascioli
Enea Santo Pietro
Enzo Mercadante
Elifio Ugolini
Settimio Mondello
Calanico Cairo
Quarto Susco
Dario Frongillo
Clarenzio Melfi
Gherardo Brigante
Erminio Ditta
Venerio Bonato
Bortolo Venturini
Ulderico La Stella
Senofonte Bonini
Carlo Storti
Fosco Imondi
Sigfrido Minneci
Archippo Buttitta
Felice Bastianelli
Diego Guerrera
Sapiente D'Aprile
Zenobio Senna
Polidoro Zinni
Maffeo Fiandaca
Aladino Caputo
Gottardo Petruzziello
Cristoforo Arcieri
Ulisse Muscarello
Iacopone Camerino
Verulo Battaglia
Graciliano Paradiso
Taziano Suriano

#### First names
Tiziano
Aciscolo
Semplicio
Leopoldo
Saturnino
Narciso
Neoterio
Dionigi
Odidone
Quasimodo
Gianbattista
Tobia
Damocle
Gonzaga
Clinio
Oscar
Ermenegildo
Boris
Zanobi
Plutarco
Evasio
Natale
Stiliano
Eterie
Edgardo
Parmenio
Daciano
Flaviano
Eberardo
Severino
Orlando
Neopolo
Alcino
Acacio
Ippocrate
Colombo
Lautone
Livino
Patroclo
Rubiano
Vidiano
Aristotele
Pellegrino
Gonzaga
Ercolano
Eginardo
Terzo
Saverio
Elio
Orfeo
Giustiniano
Romualdo
Isidoro
Ulfo
Eufebio
Alboino
Taddeo
Caronte
Filiberto
Archimede
Cirino
Costante
Onorio
Settimio
Daniele
Cremenzio
Barsaba
Guiscardo
Mirocleto
Ecclesio
Gianluigi
Geronzio
Clodoveo
Antonello
Gioele
Saul
Santo
Verano
Ugolino
Nicolò
Augusto
Berardo
Everardo
Sandro
Ardito
Democrito
Bonagiunta
Sosteneo
Ulfo
Crescente
Alberto
Coronato
Aris
Deodato
Ponziano
Felice
Amleto
Alessandro
Arturo
Cupido

#### Last Names
Roberto
Moschetti
Parro
Amelio
Latino
D'Andrea
Faiella
Cucci
Sperandio
Milone
Monastero
Trozzo
De Socio
Liberi
Cecala
Santone
Giammanco
Filippone
Silvi
Scipione
Trama
Sainato
Stumpo
Marolda
Falzarano
Mattei
Mei
Grippo
Zucco
Sciuto
Di Fulvio
Reale
Pacini
Correnti
Cucchi
Capuano
Vece
Mazzanti
Burgo
Coppolino
Rossini
Teresi
Vitale
Casagranda
Puma
D'Antonio
Cherico
Ucci
Dragone
Di Domizio
Grasso
Roberto
Stancato
Correnti
Satriano
Poppa
Barnaba
Martorano
Moccia
Agostini
Iovino
Petri
Tonti
Cassese
Puricelli
D'Agosta
Lo Galbo
Rizzi
Bassetti
Sangiovanni
Balma
Di Francesco
Perro
Fabiano
Breda
Cella
Mandato
Assante
Marchesano
Saeli
Dondero
Baccaro
Ripa
Ciotti
Savio
Masso
Valentini
Anastasi
Giarratano
Mola
Rinaldi
Zaccheo
Maiuri
Sita
Mascaro
Balbo
Boccuzzi
Mannino
Vitanza
Michelotti

### Female

#### Full names
Rufina Isabella
Cornelia La Via
Esterina Fonti
Incoronata Dino
Elvira Bucci
Cleofe Rigali
Cunegonda Peroni
Lucrezia Pacini
Laura Polsinelli
Teodata Buffo
Elisa Agro
Devota Ferrero
Elide Salatino
Giusta Cafarelli
Dina Dello Russo
Esmeralda Danza
Desdemona Di Giorgio
Teodata Stolfi
Menodora Sammarco
Tarquinia Ben
Minerva Roso
Ilva Muccio
Iona Recchio
Ilaria Vignali
Vilma Lo Vallo
Federica Petrella
Incoronata Di Sabato
Arabella De Sena
Altea Mareno
Maida Rossini
Gaudenzia Riccitelli
Leonilda Lullo
Ernesta Gibilisco
Priscilla Amorosi
Tarquinia Tasso
Lena Lucente
Secondina Le Donne
Giuditta Amelio
Monica Zanetti
Vala Boffa
Guenda Meccia
Calpurnia Celona
Alberta Nasuti
Tosca Pirolli
Altea Minieri
Alcina Favata
Nives Faiola
Silvana Ciardullo
Fortunata Maura
Esterina Marchiano
Teodolinda Lucente
Leda Giustino
Brigitta Spadaro
Zabina Di Cecco
Emiliana Resta
Onorata Di Fazio
Isotta Mello
Rosalba Vigliotti
Betta Simonelli
Nadia Condo
Regina Noto
Proserpina La Torre
Ida Titone
Mimma Montana
Nicole Nori
Addolorata Forlenza
Uliva Fittipaldi
Delinda Bonacci
Sonia Viola
Mareta Coccia
Edda Bove
Adelina Venturo
Floriana Guzzo
Erica Cammarata
Assunta Orso
Ausilia Castorina
Arabella Arco
Polissena Nespoli
Unna Oberto
Eliana Di Fonzo
Dalila Cardile
Amalia Ugolini
Donatella Fradella
Sabina Scolaro
Vanda Renzi
Luisa Lucchese
Maruta Morga
Giacinta Sedita
Olimpia Manzolillo
Zenobia Santucci
Luce Pianalto
Liliana Magnotta
Appia Camelio
Beniamina Moresco
Mina Giangregorio
Generosa Rubino
Cleopatra De Benedetto
Zosima Campobasso
Viviana Prete
Valentina Zanetti

#### First names
Emiliana
Zarina
Elaide
Lorenza
Carlotta
Prisca
Simonetta
Capitolina
Bernadetta
Adria
Egizia
Adriana
Samanta
Arabella
Cora
Raffaella
Emma
Crescenzia
Clemenzia
Zaira
Ada
Vanessa
Elsa
Zosima
Sibilla
Godiva
Minervina
Ermenegilda
Lidania
Evangelina
Adalgisa
Luigia
Norina
Dora
Daniela
Bianca
Carola
Foca
Imelda
Santina
Alfonsa
Riccarda
Daria
Felicita
Dafne
Tamara
Ildegonda
Zosima
Antonella
Emiliana
Teodata
Generosa
Isotta
Liana
Bibiana
Alfonsa
Monica
Lidia
Ermenegilda
Iona
Gloria
Giorgia
Carmela
Ghita
Dora
Godiva
Valentina
Filippa
Bambina
Miranda
Giuliana
Crescenzia
Onorina
Aida
Calpurnia
Verdiana
Prisca
Altea
Cloe
Eufemia
Violante
Olinda
Eva
Martina
Zabina
Veneranda
Nadia
Armida
Immacolata
Linda
Isidora
Sveva
Floridia
Irma
Esterina
Fabiola
Glenda
Capitolina
Benigna
Paola

#### Last Names
Iannetta
Cortazzo
Raimo
Crocetti
Capua
Calcagni
Staiano
Pompilio
Scalone
Riga
Gugliuzza
Puccia
Ramundo
Acquisto
Barbati
Torelli
La Fratta
Miserendino
Zinno
Pizzini
Bernardino
Iadevaia
Maiorano
Commisso
Balestrieri
Di Maggio
Ceci
Massari
Curto
Giardina
Franceschi
Tempesta
Castiglione
Biamonte
Senese
Castelli
Tasca
Fratto
Nudo
Patalano
Simonini
Ruggero
Sperrazza
Avolio
Emilio
Di Nello
Genco
Gioe
Zagami
Malia
Pullara
Russo
Salce
Bergamini
De Toro
Passaro
Fazzio
Vecera
Virgilio
Stefanelli
Rizzotti
Pio
Guadagnino
Signore
Micalizzi
De Franco
Eppolito
Del Mastro
Tursi
Danella
Caravella
Stagliano
Cerruti
Sepe
Romito
Schillaci
Bucca
Perrotti
Mucci
Cira
Rosselli
Umana
Corsaro
Lenzini
Cafarella
Del Grosso
Lorenzo
Pantalone
Alteri
Tassinari
D'Atri
Cancelliere
Tronolone
Faiella
Pola
Scarpace
Innamorato
Zinno
Muto
Pirolli

## [Reinassance Italian name generator](https://www.fantasynamegenerators.com/italian-renaissance-names.php)

### Male

#### Full names
Agnolo Marin
Bettino de Fidellis
Alesso de Fiandkonis
Leonardo Barbaro
Tingo Memo
Abramo de Calvenzano
Zaccheria Rosso
Maffeo de Fialis
Giovannozz Zustignan
Cenni Babbi
Spinello Rosso
Ugolino Michiel
Orlando Albizi
Guido de Calvis
Giannino de Fialis
Tano de Abbrixio
Lodovico Bassadoar
Nofri Acciaioli
Donnino Firavanti
Marino Acordolo
Feo Fiolo
Deo Donado
Arrigo Alberighi
Iacopo di Prioli
Bruno de Rossi
Ercole Sforza
Lando Calvane
Barone Viari
Polito Barbolani
Bardo Alberti
Mariotto Caloprara
Zaccheria Boldu
Averardo Callocci
Dino Calderara
Cambio da Barberino
Manetto Foscari
Giulio Fiolario
Amerigo Bassadoar
Michele Badoer
Maffeo de Alberinis
Leonardo Acharigi
Carlo Fiesi
Alessio da Filichaia
Benvenuto Calderara
Maso de Albe
Lando Trevisan
Luca Barbeta
Lapaccio Caloprara
Marsilio Albergati
Prospero Contarini
Goro Longo
Giotto Calvacanti
Corso Visconti
Priore Lignago
Albizzo Accottanto
Alberto Barberan
Bonsi Querini
Ugo Carafa
Tingo Corner
Gasparo de Rossi
Manno de Albiate
Maso Marcello
Naldo Morosini
Giunta Filiarchi
Dego Barbo
Giorgio Albizi
Leonello Zani
Bruno Acolti
Nigi Acerbi
Prospero Bon
Pierandrea Morosini
Antonio da Filichaia
Manetto Fioranati
Ottavio Tiepolo
Mainardo Albergati
Barone Foscarini
Bonsi Albaregno
Andrea Acordolo
Cenni de Albiate
Ulisse Malipiero
Bruno Mudazo
Priore Calderara
Marchionne Albergati
Boccaccio Zustignan
Gentile da Vigo
Vico Palmio
Fiorentino de Abagio
Nofri Bellini
Giunta Fioravanti
Giorgio Michiel
Romigi Benedetti
Buccio Lion
Jacopo de Calvis
Lapaccio Michiel
Taddeo Badoer
Giuseppe Palmio
Lamberto Longo
Puccio Gradenigo
Scolaio Donado
Lando Calza

#### First names
Smeraldo
Iacomo
Salvestro
Guasparre
Uguccione
Abramo
Luigi
Tomme
Maccio
Lorenzo
Tieri
Gherardo
Girolamo
Albizzo
Pacino
Giunta
Betto
Agnolo
Abramo
Gasparo
Ulisse
Prospero
Uberto
Cecco
Cambino
Niccolaio
Andrea
Bartolo
Berto
Buono
Martino
Ambrogio
Bardo
Smeraldo
Bianco
Salvestro
Conte
Carlo
Bonifazio
Bartolomeo
Ottavio
Corso
Doffo
Puccino
Lotto
Bettino
Ludovico
Vieri
Niccolino
Cecco
Manno
Buono
Bertino
Giotto
Ramondo
Conte
Sandro
Roberto
Donnino
Nanni
Ramondo
Alessandro
Cione
Bindo
Rinaldo
Priore
Migliore
Carlo
Guelfo
Gianfrancesco
Romigi
Cosimo
Leonardo
Urbano
Meo
Alberto
Giusto
Ventura
Marco
Uguccione
Piero
Pasquino
Giovenco
Scolaio
Manetto
Pandolfo
Guccio
Lotto
Cardinale
Fabiano
Nardo
Nello
Dego
Stoldo
Bono
Vanni
Prospero
Marsilio
Bonacorso
Bernardo

#### Last Names
Alban
Abiate
Fioranati
Sanudo
Calderara
Lion
Firavanti
de Albairate
Fiorensi
Bassadoar
de Fiandkonis
Sforza
Luppi
Barbolani
de Fino
Calvane
Fiesi
Bonzi
Avonal
Albani
Lion
Avonal
de Albrixis
Falier
Bassadoar
de Albe
Albiso
Giustiniani
Mudazo
Caldogne
Calza
de Fiescho
Crivelli
de Albano
de Calchano
Visconti
Barbamachollo
Acharigi
Alban
Rosso
de Fiorino
Rosso
da Canal
Albergati
Barbo
Barbaro
Albaregno
Caliara
Gradenigo
Barbani
Spizega
Venier
Acardolo
di Fiorelli
Barbolani
Albani
Crivelli
de Abondiolis
Capello
de Albvxiis
Caladri
de Figino
Frescobaldi
Donato
Tiepolo
Barbieri
Acordolo
de Alberinis
de Calvio
Barbachollo
Accottanto
de Fialis
Querini
Malipiero
Frescobaldi
Vasari
Michiel
de Fiandkonis
Calbo
Mauroceno
Barbo
Alberti
da Vigo
Fontana
Abrami
Alban
de Fino
Avonal
Bondimier
Barbaro
Tiepolo
Abiate
Acceptati
Spizega
Bascio
da Chioza
Fontana
de Albvxiis
Filiarchi
Giustiniani

### Female

#### Full names
Lauretta Donato
Andrea Accottanto
Lagia Barbarigo
Ghita Accottato
Isabella Caldogne
Lippa Albaregno
Riguardatta Vasari
Agnesina de Fidellis
Moresina de Fiorino
Tommasa Acordolo
Sordamor Bassadoar
Cecilia Calcagnini
Pantasilea Gritti
Madelena Barbolini
Foscarina Albizi
Foscharina de Barbanario
Paula Barbani
Ghinga Barbaro
Ghita Palmio
Properzia da Molin
Lapa de Fiescho
Anzola Baldovinetti
Tullia de Filago
Jacobella Bondimier
Lisa Carafa
Flora Giustiniani
Serena Veneziano
Gilia Accottanto
Bianca Barbaroman
Margherita Marcello
Tommasa Barbadori
Helena Contarini
Pia Calvane
Magdalena da Molin
Nicolosia Bragadin
Tomasia di Prioli
Leonarda Viari
Bice Memo
Angela Donato
Pantasilea de Accora
Orsa Acerbi
Flora Priuli
Zuana de Albiate
Dea Calvane
Lavinia de Calvenzano
Isotta Frescobaldi
Serena Loredan
Santa di Fiorelli
Pasqua da Filichaia
Gianetta de Abbrixio
Andriana Barbachollo
Isabella de Calvio
Andrea de Accora
Ciosa Contarini
Lena da Molin
Beneta Accottato
Riguardatta de Calvenzano
Agnesina de Fialis
Agnola Foscari
Cecilia Caldogne
Orsa Albizi
Adrianna Gritti
Veroncia Firavanti
Nezetta Alban
Gilia de Albiate
Elena Gradenigo
Bella Corner
Sofia Fiorensi
Brisca Fiesi
Novella de Calis
Masina Calvacanti
Quirina Calderara
Maurocena Tiepolo
Andriana Calandrini
Rigarda Carafa
Grana da Leze
Nencia Albicio
Elizabeth Luppi
Santa d'Este
Buona Lego
Nanna da Filichaia
Battista Fioravanti
Grana Bonzi
Serena Gonzaga
Nezetta Fiolario
Paola Calcagnini
Bella Fioranati
Benedicta Acharigi
Cristina Falier
Tomasia Barbolini
Andrea Barbamachollo
Helena de Calvenzano
Bartolomea Morosini
Margarita Acardolo
Tullia Veneziano
Gostanza Riccoboni
Simona Albani
Cecilia de Abondiolis
Madelena de Figino
Mella Barbaro

#### First names
Flora
Agnesina
Gostanza
Ysabeta
Pantasilea
Veronica
Lucia
Nanna
Rigarda
Brisscha
Chola
Lisa
Ciuta
Brisca
Andrea
Battista
Nicolosia
Fiametta
Angela
Druda
Ciecherella
Isotta
Vittoria
Druda
Martinella
Tomasia
Letta
Marieta
Buona
Agnese
Catalina
Chataruza
Marsilia
Nicolosia
Cristina
Gilia
Maria
Martinella
Properzia
Vittoria
Lucretia
Lavinia
Elena
Pantasilea
Cicilia
Piera
Diana
Ginevra
Beneta
Serena
Faustina
Madaluza
Cecilia
Alessandra
Arcanzola
Pasqua
Elena
Buona
Lucia
Pellegrina
Euphemia
Lucia
Brisca
Nencia
Orsa
Ghinga
Gradeniga
Fiora
Dolce
Anastasia
Mea
Jacobella
Simona
Ciosa
Lagia
Francesca
Olympia
Andreuola
Loredana
Ginevra
Properzia
Ciosa
Vittoria
Paula
Isotta
Aurelia
Margherita
Euphemia
Filippa
Alessandra
Tommasa
Ippolita
Paula
Ciecherella
Ghita
Madelena
Fiametta
Dolce
Nicolosa
Lagia

#### Last Names
di Fiorelli
Gradenigo
Calandri
Venier
da Chioza
Albaregno
de Calvis
Fiesi
Memo
Garzoni
Matelizi
Caldogne
Longo
Farnese
Barbaroman
Fiocarda
de Figino
de Fino
Caloprara
de Calchano
Corner
de Fino
Spizega
Trevisan
Albirio
Albani
Ziani
Calbi
Albergotti
Albizi
Acolti
Barbaro
Calbi
de Barbanario
Barbacia
Lego
Bellegno
de Rossi
Venier
Fiolo
Zane
da Vigo
Albiso
Fiaschi
de Abagio
da Filichaia
Valier
Bon
Caladri
Albicio
da Molin
de Fiandkonis
Calandrini
Barozzi
da Filichaia
Garzoni
Avonal
Figiovanni
Querini
Vitelli
Barbamachollo
Barbarigi
Fiorensi
de Albarate
Badoer
de Calco
de Rossi
Dalle Boccole
Benedetti
Alberti
Fonte
Barbaro
Malatesta
Barbazini
Priuli
Garzoni
Fiocarda
de Fiorino
Grimani
Fiamolin
Dandolo
Michiel
Boldu
Barbadori
de Filago
Gritti
Barbolini
Caloprara
Malatesta
Tiepolo
Albergati
Morosini
Viari
Bellini
Bragadin
da Barberino
Barberan
Calbi
Fioranati
da Chioza

# Dal (Tallman) Hispanic

## [Spanish name generator](https://www.fantasynamegenerators.com/spanish-names.php)

### Male

#### Full names
Pau Martín
Saul Nápoles
Carlos Fraile
Ibai Pajarero
Aimar Hoyo
Adan Bielsa
Juan Manuel Alférez
Arturo Corredor
Neizan Orellana
Julian Borobia
Aaron Prado
Luka Montilla
Pablo Jiménez
Juan Manuel Castrillón
Abril Cerecero
Oliver Ordóñez
Hector Gallego
Neizan Castañeda
Eric Carpentier
Ignacio Gálvez
Jose Yáñez
Dylan Val
Oscar Charpantier
Alfonso Botero
Adam Hernández
Miguel Jurado
Roger Tejero
Antonio Jose Vaca
Alejandro Olloqui
Aaron Cuevas
Miquel Capitán
Saul Duque
Cristian Pérez
Isaac Moreno
Ian Madrid
Alfonso Sánchez
Eduardo Barceló
Jaime Soria
Angel Mayordomo
Adrian Peris
Antonio Jose Ramos
Antonio Jose Villalba
Luca Vergara
Mohamed Velázquez
Jorge Bermúdez
Juan Antonio Alonso
Thiago Mallén
Dario Fernández
Youssef Rey
Jonathan Colina
Markel Rabellino
Angel Cherro
Arturo Aisa
Brais Leñero
Julio Escrivá
Emilio Saldaña
Andres Fraile
Pablo Balderas
Guillem Rey
Aaron Escudero
Edgar López
Gonzalo Barceló
Marc Caballero
Yago Ariza
Aritz Alcalde
Arturo Carpenter
Santiago Bacque
Gerard Sahagún
Sergi Hoyo
Gerard Siurana
Albert Ravelino
Aitor Carnicero
Aimar Monedero
Marcos Piedrabuena
Francisco Batanero
Markel Ferreira
Enrique Ferrer
Ferran Sanhueza
Adria Aragón
Aaron Monte
Jose Maria Aragón
Jairo Ortiz
Salvador Valenzuela
Jordi Bielsa
Francisco Javier Charpantier
Jose Maria Sallent
Alonso Rey
Alfonso Halconero
Yeray de Herrera
Denis Gállego
Joaquin Ruiz
Matias Ferrer
Isaac Melero
Jose Carlos Sacristán
Sergio Herrero
Sergio Carretero
Iñigo Esparraguera
Adrian Peña
Mikel Val
Francisco Obrero

#### First names
Cesar
Oriol
Aleix
Josep
Vicente
Carlos
Amir
Jaume
Pablo
Aaron
Aaron
Imran
Eduardo
Marcos
Antonio
Adria
Markel
Imran
Oscar
Ignacio
Victor
Enrique
Enrique
Edgar
Noah
Oscar
Eloy
Oscar
Moises
Christian
Adan
David
Francisco
Adrian
Joel
Josep
Alberto
Yago
Yago
Gael
Luca
Pol
Borja
David
Omar
Eric
Jose
Pedro
Francisco
Guillermo
Youssef
Marc
Ferran
Yago
Gael
Gonzalo
Gabriel
Ibai
Omar
Santiago
Salvador
Iñigo
Jaume
Julio
Enrique
Borja
Aaron
Pol
Izan
Abraham
Ignacio
Adam
Elias
Antonio
Pablo
Jon
German
Antonio
Eduardo
Dylan
Juan
Omar
Imran
Jon
Antonio
Julen
Alvaro
Carles
Youssef
Cesar
Aleix
Victor
Ruben
Marco
Pedro
Jose
Iago
Yeray
Kevin
Agustin

#### Last Names
Carreiro
Ocaña
Orellana
Duque
Aranda
Sastre
Ferreiro
Bolea
Sánchez
Montes
Muñoz
Miguel Carpintero Charpentier
Oñate
Ávila
Ballesteros
Carranza
Balderas
Soldado
Fraile
Pescador
Suárez
Camarero
Jesus Sastre
Miguel Gállego
Ligüerre
Bilbao
Conde
Ferrandis
Contador
Martínez
Ferrandis
Canales
Bielsa
Suárez
Soria
Bermúdez
Capitán
Gómez
Prado
Jiménez
Peña
Verdugo
Zanhuesa
Bacque
Ariza
Cherro
Vaquero
Riba
Siurana
Ferrón
Montes
Francisco Laguna
Montilla
Moreno
España
Leñero
Carnicer
Aragón
Martínez
Ferrandis
Peralta
Acin
Miguel Bolea
Jose Montemayor
Caballero
Ordóñez
Carpentier
Jose Ferrer
Manuel Gabasa
Ferrón
Sabaté
Sáenz
Tarragona
Oñate
Bolea
Menéndez
Díaz
Ferrufino
Valle
Cerecero
Siurana
Tejero
Toledo
Arroyo
Verdugo
Notario
Bescós
Biescas
Javier Santolaria
Villalba
Ayerbe
Ferrero
Valdovinos
Angel Abad
Madrid
Gistaín
Jiménez
Menéndez
Moliner
Moreno

### Female

#### Full names
Itziar Ferrer
Aida Labrador
Nazaret Pena
Clara Bolívar
Mercedes Mayordomo
Mercedes Alférez
Rocio Ovejero
Lorena Lérida
Abril Bilbao
Gabriela Sangüesa
Anna Catalán
Maria Del Mar Cerecero
Marina Tejedor
Irene Montes
Noemi Lagos
Irene Orellana
India Bermúdez
Sandra Monedero
Diana Gállego
Ane Cardenal
Anna Alguacil
June Marinero
Jessica Castrillón
Julieta Colina
Jana Castrillón
Elia Villegas
Maria Del Carmen Sastre
Lidia Valdés
Nahia Lagos
Mireia Guerrero
Aida Bolea
Mariam Velázquez
Judit Moreno
Naia Moliner
Irati Marinero
India Marinero
Yanira Valdovinos
Ane Torrente
Anna Verdugo
Mireia Esparraguera
Rosa Menéndez
Yasmina de Herrera
Nour Madrid
Irene Soldado
Victoria Montemayor
Lydia Hoyo
Candela Valladares
Alba Maria Leñero
Carmen Maria Ferrero
Zoe Camarero
Gemma Tejedor
Abril Ravelino
Mia Navarra
Naroa Vaca
Gabriela Obrero
Sofia Leñero
Teresa Pena
Mia Menéndez
Mariona Contador
Carmen Maria Charpantier
Susana Ballester
Laia Marinero
Emma Balderas
Yaiza Siurana
Uxue Mallén
Yasmina Zamorano
Naia Ferreira
Chloe Tudela
Nahia Corredor
Mara Zamorano
Sonia Bilbao
Noelia Acin
Desiree Álvarez
Aida Dávila
Miriam Rodríguez
Maria Jose Vargas
Lydia Rivera
Aida Albacete
Nora Bolea
Angela Sambuesa
Lydia Núñez
Sofia Alameda
Silvia Ocaña
Julia Mesonero
Desiree Sabaté
Isabel Maria Díez
Yasmina del Valle
Lidia Ferrón
Africa Carpenter
Paloma Ferrón
Monica Piedrabuena
Eva Maria Vázquez
Gabriela Zanhuesa
Gala Álvarez
Zaira Cherro
Carmen Rey
Ingrid Costa
Leire Alonso
Sandra Gabasa
Susana Torrente

#### First names
Irene
Cloe
Naroa
Jessica
Anna
Ingrid
Celia
Lucia
Mara
Elisa
Abril
Malak
Barbara
Ruth
Alma
Iris
Paula
Nora
Pilar
Estefania
Yanira
Maria
Abril
Miriam
Alma
Carla
Gema
Lorena
Esther
Esther
Lorena
Amanda
Chloe
Mara
Carlota
Mia
Amanda
Rosa
Jimena
Elia
Andrea
Aida
Marta
Ariadna
Azahara
Pilar
Marina
Victoria
Estela
Lorena
Paloma
Antia
Irene
Nour
Desiree
Mar
Malak
Estela
Isabel
Ines
Laura
Carmen
Aitana
Ainara
Nour
Estela
Malak
Carolina
Alejandra
Julia
Virginia
Gema
Lorena
Eva
Naiara
Paula
Irati
Barbara
Leyre
Laia
Africa
Malak
Marina
Angela
Andrea
Isabella
Daniela
Marina
Natalia
Tania
Clara
Triana
Triana
Amanda
Jana
Amanda
Maider
Mercedes
Abril
Noelia

#### Last Names
Cedillo
Vélez
Castejón
Oñate
Ordóñez
Balderas
Rey
Alameda
Tudela
Gálvez
Toledo
Martínez
de Herrera
Acin
Sastre
Biescas
Leñero
Maria Alguacil
Sevilla
Malillos
Barbero
Zapatero
Fraile
Soriano
Madrid
Madrid
Tejedor
Labrador
Cueva
Coll
Avilés
Arán
del Valle
Lagos
Maria Santolaria
Ferrufino
de Herrera
Collado
Mesonero
Burgos
Caballero
Jurado
Abad
Fraile
Ferreira
Martín
Vélez
Dávila
Conejero
Jurado
Oñate
Señor
García
Bacque
Escudero
Torres
Sevilla
Hidalgo
Castañeda
Linares
Soriano
Díaz
Ávila
Carpentier
Ferrero
Coll
Esparraguera
Fuster o Fusté
Escrivá
Belen Tejero
Caballero
España
Sahagún
Verdugo
Olloqui
Alcalde
Maria Nápoles
Sacristán
García
Mesonero
Fuster o Fusté
Castejón
Esparraguera
Balderas
Velázquez
Sahagún
Leñero
Ávila
Fonz
Del Carmen Siurana
Jiménez
Isabel Leñero
Gabasa
Yáñez
Alcalde
Ferrón
Cueva
Bermúdez
Santisteban
Laguna

## [Hispanic name generator](https://www.fantasynamegenerators.com/hispanic-names.php)

### Male

#### Full names
Benito de la Cavallería
Abel San Martín
Bruno Berganza
David del Pozo
Benito Pinto
Joel Montes
Jacobo Gaos
Edmundo Costa
Kevin Ros
Angel Covarrubias
Alfonso Barrios
Joshua Espiga
Ernesto Tasis
Valentino Chicote
Lautaro Pardo
Abraham Gaos
David Japón
Edmundo Manzanedo
Benito Garrido
Jairo Secada
Julio Alguacil
Justin Ruiz
Héctor Pardo
Dante Japón
Bruno Mastache
Iker Espiga
Cristian García
Isaac Valerio
Luz Aguinaldo
Daniel Dengra
Santiago Pozo
Ian Ferrant
Jairo Berrocal
Luis del Pozo
Joel Arrabal
Adán Aparicio
Zacarías Saavedra
Francisco Abasto
Juan David Campos
Jaime Laguna
Axel Piñón
Luis Arboleda
Óliver Sarmiento
Justin Moruga
Luca Murillo
Óliver Tassis
Edmundo Indiano
Hugo Murillo
Agustín Japón
Jaime Cadaval
Kevin Fernandino
Isidoro Arboleda
Jorge Zoido
Juan Martín Ordóñez
Josué de la Cavallería
Tobías González
Álvaro Moruga
Alonso Rouco
Juan Sebastián Nores
Mariano Curbelo
Miguel Ángel Carita
Iván Piñón
Ramón Alvarado
Guillermo Cazalla
Alonzo Curbelo
Oscar Gallo
Erick Fernandino
Joel Curbelo
Álvaro Romero
Adrián Águila
Raúl Miralles
Luz Morterero
Alejandro Cazalla
Jonathan Abellán
Orlando Tassis
Matías Agramonte
Axel Rasgado
Lucas Rubio
Víctor de la Cruz
Diego Ros
Adán Moya
Jorge Lain
Fernando Tassis
Alonzo Alarcón
Juan Saelices
Hugo Dengra
David Espiga
Pablo Franco
Matías García
Vicente Varela
Álvaro Fonseca
Andrés Prats
Mariano Carballal
Vicente Rodríguez
Nicolás Alemán
Pedro García
Eustacio Semprún
Héctor Alcabú
Gonzalo Xirau
Erick de la Cruz

#### First names
Christian
Facundo
Patricio
Cristóbal
Emilio
Gael
Rodrigo
Ismael
Lucas
Erick
Emmanuel
Gonzalo
Bernabé
Hugo
Mario
Pascual
Damián
Julian
Israel
Anthony
Ezequiel
Raul
Martín
Rubén
Simón
Umberto
Enrique
Serafín
Alonzo
Alexander
David
Jonatán
Román
Juan
Primitivo
Valentín
Gerardo
Armando
César
Alex
Santino
Alfonso
Isaías
Marcos
Efrain
David
Felix
Emilio
Elías
Jorge
Milagros
Francisco
Patricio
Raul
Santiago
Tomas
Isidoro
Serafín
Milagros
Efraim
Diego
Felix
Maximiliano
Ernesto
Héctor
Bernabé
Santiago
Víctor
Joaquín
Raúl
Maximiliano
Román
Joaquín
Edmundo
Raul
Samuel
Diego
Inhué
Max
Alexis
Tomás
Dylan
Simón
Mauricio
Jerónimo
Jorge
Antonio
Thiago
Jaime
Alfonso
Matías
Gonzalo
Eustacio
Alexander
Efrain
Aarón
Eduardo
Juan
Lucas
Roberto

#### Last Names
Palau
Alejandro Piñón
Amengual
Gisbert
Gisbert
París
Madrid
Pomar
Aparicio
Saelices
Ferrant
Graciani
Cabal
Nores
Águila
Manzanedo
González
Lain
Collazo
González
Guillén
Ocampo
Pozo
Fraga
Santángel
Saelices
Fernán
Velázquez
Tafalla
Rasgado
Moya
Gutiérrez
Alcocer
Sainz
Bienvenida
Leoz
Berrocal
Martín Gálvez
Sanz
Andrés Guillén
Pousa
Bienvenida
Alejandro Alarcón
Berrocal
Amengual
Ocampo
Carballar
Mastache
Chicote
Mariano
Indiano
Agramonte
Pablo Vera
Covarrubias
Andino
Arboleda
Sebastián Zoido
Sancho
Fraga
Botín
Yepes
Luque
Indiano
Muñoz
Arrabal
Botín
Reyes
Cortés
Pomar
Cabal
Berganza
Berganza
Ros
Nores
Moruga
Navarro
Ros
Campos
Diego Martí
Maroto
Vera
Carita
Curbelo
Diego Cotilla
Sáenz
Cicerón
Villa
Alcabú
Romero
Abasto
Magrina
Pozo
Sainz
Cadaval
Varela
Laguna
Semprún
Galán
Vera
Magrina

### Female

#### Full names
Juana Ocampo
Jazmín Carballo
Serena Tejedor
Abril Carita
Isabel Rasgado
Constanza Collazo
Fabiana Muñoz
Carla Rasgado
Dulce Gayoso
Clara Pomar
Florencia Vera
Juliana Indiano
Alessandra Ureña
Elsa Japón
Selena Andrade
Esperanza Tejedor
Florencia Galán
Asia Gaona
Laura Sofía Freixa
Isaias Andino
Ángeles Zoido
Asia Magrina
Sabrina Xirau
Alessandra Cambeiro
Elizabeth Mariano
Gloria Sáez
Daniela Illescas
Viviana de la Cavallería
Brisa Mariano
Sofia Navarro
Linda Gisbert
Pilar Mastache
Ariadna Dávalos
Evangelina Ferrant
Ana Sofía Carballal
Elisenda Murillo
Juanita Rubio
Alba Zoido
María Capmany
Raquel Coronil
Carina Luque
Natalia Abasto
Bella Palau
Patricia Ureña
Asunción Gayoso
Abril Chicote
Magdalena Capmany
Amaya Secada
Sofía Montreal
Lía Encarnación
Clara Gallo
Amaya Rubio
Carina Gisbert
Bianca Abasto
Juana Costa
Isabella Abellán
Araceli Covarrubias
Sofia Galán
Zoe Velázquez
Ana Sofía Sáenz
Inmaculada Gutiérrez
Vanessa Barrueco
Angela Cicerón
Angelina de la Cavallería
Pilar Atenas
Soledad Amengual
Ariadna Alarcón
Esperanza Manzanares
Ivanna Elvira
Isabel Rouco
Nina López
Consuela Céspedes
Maya Morillo
Doria Palau
Ana Montes
Valery Guillén
Abigail Guillén
Verónica Juderías
Talía Venegas
Brenda Laguna
Eliana Sancho
Elizabeth Cotilla
Sabrina Zoido
Albina Aparicio
Raquel Yepes
Laura Sofía Gutiérrez
Consuela Obregón
Rebeca Tenorio
Vivian Gutiérrez
Alba Céspedes
Salomé Ordóñez
Ángeles Tejedor
Viviana Fraga
Soledad Molina
Juliana Guillén
Paula Arnal
Juanita Pomar
Ana Sofia Palacio
Nina Sáenz
María José Zoido

#### First names
Claudia
Laura
Eduarda
Sandra
Angelina
Mónica
Alexandra
Juanita
Pastora
Soledad
Juanita
Clara
Pastora
Juana
Ángela
Encarnación
Melissa
Encarnación
Naomí
Juliana
Nora
María
Doria
Frida
Sophie
Vivian
Araceli
Ivanna
Florencia
Alana
Sofia
Tia
Magdalena
Florencia
Olivia
Lucia
Valentina
Marcela
Serena
Julia
Tatiana
Rebeca
Zarina
Allison
Esperanza
Alessandra
Valerie
Angelina
Eliana
Doria
Hermosa
Daniela
Alexis
Daniela
Rosa
Veronica
Estela
María
Natalie
Andrea
Linda
Juana
Emanuella
María
Laura
Jazmín
Micaela
Bárbara
María
Amanda
Albina
Estrella
Melina
Fatima
Valeria
Angela
Nina
Evangelina
Carina
Aurora
Rebeca
Veronica
Paula
Aurora
Manuela
Dulce
Angélica
Mía
Juliana
Victoria
Renata
Noé
Nora
Virginia
María
Leila
Maria
Elisabet
Amanda
Paulina

#### Last Names
Cotilla
Cortés
Dávalos
Tejedor
Escribano
Sánchez
Noboa
Gálvez
Carballar
Arias
Japón
Montenegro
Puig
Valerio
Quesada
Juderías
Lacasa
Escribano
Palau
Sánchez
Barrueco
Pinto
Ocampo
Pardo
Cotilla
Espina
Gayoso
Ureña
Vera
Pardo
Ferrant
Gilabert
Pomar
Manzanares
Bienvenida
Reyes
Paula Céspedes
Sáez
Botín
Luque
Tejedor
Escribano
José Montreal
Zorita
Cotilla
Rodríguez
Illescas
Sánchez
Tassis
del Pozo
Miralles
Dengra
Cambeiro
Semprún
Ocampo
Espiga
Miralles
Gaos
de la Cavallería
Pareja
Gayoso
Gálvez
Gilabert
Gálvez
Tenorio
Manzanedo
Saavedra
Morillo
Moya
Sánchez
Santángel
Pareja
Japón
Sarmiento
Ros
Leguizamo
Guillén
Pardo
Madrid
Reyes
Varela
Palau
Hurtado
Magrina
Coronil
Japón
Venegas
Carita
Atenas
Morillo
José Gisbert
Rubio
Barrueco
Ordóñez
Yepes
Sarmiento
Arias
Paula Franco
Alcabú
Pozo

## [Reinassance spanish name generator](https://www.fantasynamegenerators.com/spanish-renaissance-names.php)

### Male

#### Full names
Guillén Gaytan
Cosme Pina
Lorenço de Torre
Ramiro Orejón
Nadal de Cuevas Rubias
Enrrique Florentin
Diego de la Escalera
Pequeni Palafox
Perucho de Aguirre
Suero del Castellar
Johanes de Arbuete
Ontañon Llorens
Ambrosio de Urive
Duran Garrido
Nadal de Covarruvias
Fulgencio Saravia
Simon Martil
Johan Arias
Antón Castellon
Christoval Piquier
Alfonso de Bobadilla
Jayme de la Serna
Timoteo de Yaques
Carlos Ferrer
Mendo de Mahuleon
Guillen de Sant Pedro
Porico de Villoria
Per de Çavallos
Garçilaso de Cuero
Fernan de Mercado
Llorente de Nabarres
Ydalla de Peñaranda
Cristoval de Contreras
Pedro de Villalva
Antón de la Bastida
Velasco Girán
Mendo de Ahumanda
Braçayda de Cobraçes
Manuel de Morales
Escobar de la Reina
Antonio de Villalpando
Çino Maldonado
Gutierre Roche
Fernand Abril
Pablo Mirones
Cosme Symilor
Fransisco de Ribas Altas
Alvaro Carreño
Ochoa Sorje
Alsonso de Miranda
Juancho de Vallego
Bartolo Roche
Galla de Yera
Martín de Trueva
Miguel de la Carrera
Diego de Çigales
Fernendo de Texeda
Ruberte Situ
Patro de Villafuerte
Johanes de Quintanilla
Domingo de la Peña
Gerónimo de Riba
Carlos de Villamartin
Lono Chacon
Alex del Cotrob
Fernand de Albiz
Llorençe Mato
Menaute Castellon
Pedro de Bagida
Llorenco de Ytorrica
Ochoa de Bilbau
Sansón de Sahagund
Tello de Guadalupe
Nuflo de Villegas
Pedro de Silva
Gemini de Santa Maria
Andres de Quedan
Blas Villanova
Castañon de Ayala
Monferriz de Alcaraz
Anrique Vaca
Alonsico de Contreras
Cristoval Escalante
Pascual de Arçe
Bartolo de Beneja
Tomas Hurtado
Blay de Cuenca
Iñigo de la Fuente
Geronimo Martil
Gomes Alvares
Luis Bogado
Gemini Vello
Dieguito de Alçaga
Fernado de la Huerta
Lono de Castylblanco
Lucas Coll
Agustín de Villaverde
Johan de Aramayo
Llorenco de Fez
Galla de Mayorga

#### First names
Vinçente
Llorençe
Almerique
Ydalla
Ettor
Alvar
Ferrer
Juanito
Blas
Gonçalo
Jayme
Carlos
Johanes
Ruy
Blay
Bea
Lorenzo
Gascon
Alsen
Bernaldino
Ximon
Gavriel
Cristobal
Juan
Per
Fernado
Cosme
Lucas
Manuel
Ettor
Braçayda
Alexandre
Martín
Ontañon
Guillén
Pablo
Anselmo
Nufro
Bernal
Gomes
Alonso
Gonzalo
Almeyque
Jaime
Ramiro
Agustin
Alexandre
Bartolomé
Antonio
Gemini
Garçilaso
Pascual
Fulgencio
Fernendo
Blas
Duran
Damián
Bea
Bernaldino
Ettor
Antonio
Jcan
Ydalla
Arias
Nufro
Damian
Alvar
Sabastian
Bitores
Ambrosio
Manuel
Salvador
Garcia
Jorge
Gomez
Lono
Benito
Jayme
Anrique
Salazar
Alsonso
Mateo
Llorenço
Nuflo
Escobar
Ferrnando
Agostin
Muli
Henrrique
Vernaldino
Fernendo
Manuel
Velasco
Fernan
Alex
Jcan
Alonso
Pascual
Ramiro
Johan

#### Last Names
Rosil
de Madrigal
Patudo
Carral
Correa
de la Escalera
de Palma
de Ure
Calante
Jimenez
de Molina
de Vallodolid
de Sevilla
de Gadea
Justeniano
de Beneja
de Santangel
Galiano
Calante
de Santillana
de Bazan
Guerrero
Bertino Sans
de Dueñas
Montero
de Hortega
Cañero
de Rebina
de Palia
de Pliego
de Contreras
de Cuero
de Sylva
de Beydatar
Mondragon
Nuñes
de Toquemada
Gramaja
de las Quintanillas
Fontesar
de Ferrada
de Alcala
Bertino Sans
Fajardo
de Graçia
Ozalla
Gil
de Villegas
Arias
Gutierres
Pinedo
Herrero
de Peñaranda
Cavallero
de Oviedo
Castellano
de Moya
de Yra
de Padilla
Cola
de Puertos
Donayre
de la Torre
de Avalos
de Galves
de Soto
Vanegas
de Limonsin
de Luz
del Oyo
de Mercado
Cañero
de Toledo
de Espinosa
de Setiel
de Bozmediano
de Yllon
Cortes
de Layan
Covarrubias
Garrido
de Orozco
Bretanzos
Cherino
de Sant Biçente
de Ureña
de Maldonado
de Barrasa
de Ovierna
de Cea
de Yscar
de Vaca
de Toro
de Almería
Sariñena
Carperon
de Aguayo
de Pedrosa
Caminante
Seve

### Female

#### Full names
Madelena de Deça
Loreta de Villafuerte
Cristina de Teba
Abdona Pimentel
Ursola Ospital
Alba Nuñes
Leal Sarmiento
Ana de Alarcon
Berarda de Sant Miguel
Antona de Torrijos
Luisa de Goire
Angel de Tordesillas
Eularia Carrasco
Alvira de Ocaña
Leal de Merodio
Guyomar Peres
Blanca de Ara
Sicilia de Rogorraga
Damiana de Godoy
Valentina de Arçeo
Miata Cocon
Guyomar de Fez
Teresa del Castellar
Ginovisa de Titosa
Jerónima de Tamayo
Sperança de la Bastida
Julia de Leon
Catalyna de Cordoba
Andolça de Avila
Barbola de Azpetia
Eularia de la Sara
Aldomara Romano
Barbera Navaroo
Tereysa de Beneja
Merina Bogado
Magdalena Sanches
Guinella de Vallesteros
Aularia Martin
Lopisa de Albion
Inés de Yeres
Blanqua de Chandiano
Elionor de la Roelas
Jona de Toranço
Lucia Pinedo
Castelleta de Ytorrica
Aldonsa de Madrid
Margarina Lascaris
Antona de Bolaños
Abdona de Portugal
Margarida de Fez
Maria del Lunar
Andolça de Comendador
Jona de Padilla
Luysa Patudo
Toda de las Andas
Marina Ramires
Ursola de Valdevieso
Berthomeua de Soto
Martina de Coslada
Ceçilia de Sarmiento
Dalfina del Grano
Luïsa Pellicer
Costança de Vallesteros
Egipciana Valdés
Florinda de Vio
Catelina de Guarda
Viana de Najara
Ceçilia Jimenez
Sentiu Bota
Tereysa de Xerez
Crespa de Leon
Catalana de Cordoba
Martina de Palia
Aldonça de Guevara
Blanquina de Calátayud
Mariana de Buytrago
Gentil de Padila
Eguala Mexica
Inés de Barrasa
Magdalena Cacho
Antonia Suares
Palacesa de Escobar
Ricla Galiano
Quiteria de Marchena
Dionisa de Joara
Ana Correa
Gracia Hurtado
Luysa de Villaneuva
Ageda de Palaçios
Madelena del Valle
Quiteria Sandino
Hieronyma de Guevara
Constança Çapata
Graçia de Lunar
Valentina de Salas
Olall de la Cerda
Florinda de Pernia
Sentiu de Albear
Hieronima de la Reina
Jerónima Barril

#### First names
Aguilona
Ines
Catelina
Sentiu
Ypola
Alfresina
Isabel
Constanza
Ginovisa
Teresa
Palacesa
Caterina
Jerónima
Crespa
Françisca
Violant
Andarina
Olall
Valentina
Tereysa
Tonixqua
Orastriosa
Mancia
Calamoya
Geronima
Beatriç
Eguala
Berthomeua
Gentil
Tareza
Dalfina
Gaceta
Florinda
Urgellesa
Loçia
Teresa
Elena
Melchora
Fatima
Alba
Elena
Viana
Luysa
Susana
Leal
Andarina
Marquesa
Costanza
Barbera
Andrea
Juana
Gracia
Orastriosa
Brianda
Theresa
Guyomar
Blanquina
Diomar
Susana
Violante
Hieronima
Brianda
Anthona
Isabel
Margarida
Ines
Ricla
Mencia
Yolant
Margarita
Antonia
Leal
Merina
Mayor
Anna
Palacesa
Françisca
Aldonça
Maçana
Guyomar
Egipciana
Foresa
Constança
Catalyna
Miata
Featris
Aldonça
Eluira
Maria
Blanquina
Anthona
Constança
Berarda
Luïsa
Magdelena
Aldomara
Eularia
Blanca
Juana
Luzia

#### Last Names
de Arzco
Roche
del Rey
de Joara
de Xerez
de Villarrubia
de Çisneros
Cenisçeros
de Tabares
de la Cerda
de la Nata
Porras
Muños
Estevan
de Cuellar
Yebera
Pinedo
de las Heras
de Almaçan
de Marchena
de Amusco
de Lerma
del Espinar
Lopes
de Mendoça
de Palencia
de Tavira
de Çebolleros
Dominguez
de Grizio
de Alarçio
Gil
de Quiroga
Vera
de Hontañon
de Çalaga
de Rojas
de Segura
Valdés
Soler
de Medina
Raçoso
Cascon
de Saabedra
de Acosta
de Olano
de Texeda
de Argote
de Artiaga
de Xerez
Rodrigues
Salazar
de Cobraçes
de Villaneuva
de Pinedo
de Salmeron
Pinto
de Arenas
Vera
de Robres
de Cepeda
Vello
Fajardo
del Cotrob
Varela
de Ayala
de Najara
de Quevedo
de Hermita
de Villaseca
de Hontiveros
de Betanzos
de Oñate
de Cabmillas
de Villamanan
Serrano
de la Concha
de Luson
Sosa
de Somonte
de Alcala
de Carrión
Navaroo
Pereyra
Pimentel
Oller
de la Mar
de Camarma
Gil
Pina
Ruberto
Pimentel
de Toquemada
Çenturion
Vaca
Martin
de Ysla
Rodrigues
Castellon
de Barreda

# Duir (Dwarven) German

## [Germanic name generator](https://www.fantasynamegenerators.com/german-names.php)

### Male

#### Full names
Kay Gmehling
Kasper Schimpf
Finn Kossmann
Nick Klopstock
Liam Küttner
Matz Wallmann
Patrik Rosengart
Johan Leupold
Johannes Köstler
Henny Grünspan
Alfred Schönborn
Kai Klostermann
Dennis Seitz
Lucas Heim
Timm Kaufmann
Pascal Blacher
Phillipp Krenkel
Lucas Wegmann
Erwin Lehrer
Niclas Vorgrimler
Jörn Diederich
Adrian Strub
Christopher Bauer
Hermann Kohlhase
Jörg Selig
Fritz Engelberger
Armin Görder
Nick Husch
Raoul Lerche
Rob Wolf
Caesar Blaustein
Theo Teschner
Raoul Kresinger
Liam Haring
Björn Goldreich
Peter Lingenfelter
Max Tarr
Flori Fichtner
Gustav Heiner
Lorenz Schwarzmann
Abraham Steinbauer
Paskal Wegmann
Manuel Anderle
Yannik Altermann
Joachim Haeberle
Andrej Heun
Fabian Gilges
Marc Oberhauser
Dirk Fleischman
Torben Hagmann
Kasper Rosin
Christof Jahnke
Joshua Gollwitzer
Tom Schachtschneider
Kay Strobel
Martin Blumberg
Josua Walch
Alex Hauck
Heinrich Lerche
Carsten Speidel
Abraham Ehlers
Augustin Daluege
Peter Rottmanner
Lio Gessler
Florentin Dünhaupt
Tilman Schoeler
Dominic Steinhaeuser
Jannik Weizmann
Mario Musäus
Emanuel Hauke
Arthur Heerwagen
Hauke Bode
Tilmann Eckstein
Maik Enzenauer
Alfred Mangold
Georg Schmitz
Denis Schneller
Casper Schwarzkopf
Lucas Von Sydow
Sebastian Pröll
Leo Frisch
Paskal Hauke
Marco Wagenseil
Caesar Schleiermacher
Maik Slesinger
Angelo Kronthaler
Isaak Biel
Jonas Graf
Marc Höffner
Arnold Olbrich
Paul Klotz
Mathias Sulzer
Björn Peltzer
Johann Weindorf
Philip Höss
Dominic Faulstich
Julian Geyer
Julian Lohmüller
Timm Hergenröther
Jochen Reichen

#### First names
Valentin
Patrik
Meik
Achim
Oscar
Robby
Peter
Samuel
Luca
Harri
Christoph
Swen
Alfred
Eugen
Heinrich
Harri
Julian
Kaleb
Rob
Jonas
Joseph
Niko
Julius
Peter
Kilian
Til
Ralph
Jeremias
Maxi
Marko
Patrik
Justus
Timo
Harri
Vincent
Arnold
Franz
Niklas
Roland
Dominic
Linus
Sören
Matteo
Patrik
August
Stephan
Leonhard
Paul
Lukas
Andreas
Fabi
Samuel
Kuno
Raphael
Tim
Robin
Arthur
Ferdinand
Till
Rick
Kilian
Harry
Aaron
Leon
Karl
Wilhelm
Benjamin
Felix
Nils
Vinzenz
Marcel
Harri
Maria
Fabi
Oliver
Louis
Piet
Marko
Robin
Hanno
Til
Wilhelm
Simon
Jacob
Timo
Ulrich
Yannik
Vinzent
Paul
Samuel
Lennart
August
Andrej
Fynn
Lutz
Maria
Finn
Mats
Otto
Laurens

#### Last Names
Blatt
Schwarzkopf
Heller
Kant
Bauman
Harnisch
Wehner
Haeberle
Ehrenpreis
Uthman
Kocher
Biel
Berger
Wexler
Bluhm
Weisser
Schult
Wimpffen
Nebe
Schöll
Scharff
Schaeffer
Hertel
Schierokauer
Neumark
Kaulbach
Holz
Anderle
Himmelblau
Tetzlaff
Gressmann
Steppuhn
Pracht
Reichleitner
Goldscheider
Kluck
Nachtigall
Stamm
Bohm
Lemberger
Kirchwey
Holtzmann
Homrighausen
Holtz
Furstenfeld
Schlim
Saudek
Auer
Plessner
Fichtner
Reimann
Schiller
Taussig
Tisch
Thalberg
Madelung
Tischner
Reder
Eichenwald
Lehrer
Bäcker
Mergenthaler
Ketterer
Heidenreich
Panzer
Neff
Sternhell
Petzold
Boden
Brandstätter
Eisenmann
Lemberger
Sommerfeld
Baer
Bähr
Maisel
Sattler
Schöner
Wachter
Sachs
Steuermann
Hautzig
Heinsohn
Hamburg
Arendt
Breytenbach
Friesinger
Dahlke
Schaefer
Reubke
Gaertner
Distler
Hauswald
Stentz
Marx
Peltzer
Grothmann
Oberlander
Köstler
Tendler
### Female

#### Full names
Catharina Cranz
Leonore Hegewald
Mathilda Tiedemann
Mirjam Habich
Karoline Winzer
Irene Goedde
Mandy Schlüter
Amanda Steinsaltz
Noah Gildemeister
Victoria Brestrich
Silke Ohly
Sibylle Paasche
Ottilie Semmelrogge
Lara Frisch
Mila Hess
Tiana Haselberger
Manuela Becherer
Katharina Fittkau
Mirjam Braunbeck
Hanne Gmehling
Ulrike Sussman
Luka Schönbein
Narcissa Speckmann
Leoni Herschlag
Kai Auerswald
Theres Hohmann
Gerda Hautzig
Verona Gmehling
Iva Elser
Marina Curschmann
Sibylle Bürger
Madlen Bloch
Carina Schau
Yvette Backhaus
Claudia Kratochwil
Fiora Raedler
Verena Bohlen
Elma Radnitz
Elisa Freudenberg
Fiora Graebner
Florentina Jäger
Corina Seger
Natali Gerstacker
Elsa Lutz
Loreen Winzer
Christa Happe
Katharina Kreutzberg
Wilhelmina Kringel
Gabi Bennewitz
Ellenor Albiker
Ricarda Nothnagel
Jacqueline Raddatz
Lotti Köppen
Charlotte Kirsch
Alexandra Höfle
Cornelia Hirschl
Finja Vieweg
Yasmina Fehr
Elena Waibel
Tiana Feit
Emely Aichele
Rebeca Drach
Stefanie Goldreich
Elsa Maier
Angelina Radnitz
Lena Ribbeck
Sabina Baade
Vivianne Weidmann
Paula Backhaus
Tatjana Wirth
Meike Börngen
Josefine Schiefer
Caren Landauer
Darja Baumer
Layla Kretschmer
Penelope Schwarzkopf
Anika Schmuck
Eleonora Kuhn
Oda Edelstein
Sofie May
Jutta Knirsch
Enni Fähnrich
Catharina Scharf
Helena Fenchel
Ada Platz
Sahra Ullmer
Christiane Staffel
Stefanie Grünbaum
Nathalie Lehman
Kira Seppelt
Liane Otto
Ava Kalkbrenner
Antonia Goldhaber
Emily Landsberg
Meike Hasselmann
Verona Klostermann
Sahra Schoenberg
Alex Gross
Linda Frisch
Wendy Schor

#### First names
Rosi
Natali
Veronika
Tina
Emely
Susanne
Karla
Mia
Dora
Lotte
Finn
Alina
Kai
Anne
Lotti
Elke
Clara
Vicki
Mirjam
Judith
Ute
Isabelle
Penelope
Inga
Renate
Elisabeth
Juliana
Victoria
Karina
Emily
Lina
Mona
Gerda
Irene
Cathrin
Lisa
Nine
Caren
Nike
Leonore
Jasmin
Merle
Wanda
Zarina
Pauline
Viviane
Gabriele
Yessica
Ivana
Beatrice
Vicky
Barbara
Elma
Vanessa
Luzie
Melina
Julie
Lisa
Juliane
Juna
Bernadette
Hermina
Bianca
Jaqueline
Enna
Marike
Marianne
Katrin
Lea
Nicola
Nathalie
Dorothe
Tabea
Luna
Tina
Isabel
Erika
Katrin
Jamie
Alina
Celine
Claudi
Juliane
Luise
Uta
Elin
Christina
Jutta
Samantha
Chris
Eleonora
Narcissa
Cecilie
Jutta
Mira
Narcissa
Uta
Lotti
Verena
Carola

#### Last Names
Goldhaber
Dalman
Bernauer
Kittel
Rasch
Blücher
Wegner
Lichtenberger
Ortmann
Fieber
Von Hardenberg
Erlach
Wentz
Achleitner
Schöll
Salzer
Altermann
Kohnstamm
Deutscher
Klippel
Stockert
Ungar
Pöpel
MacNicol
Scharff
Homann
Linse
Winkler
Bäcker
Heck
Breuer
Wenzel
Raab
Becken
Spielberg
Rehberg
Grünbaum
Bechtold
Schindler
Tischer
Ahrendt
Anschütz
Köstner
Feistel
Dorfmann
Kuttner
Liebermann
Hagelstein
Hahnemann
Heilmann
Felder
Hoehman
Boehm
Klugmann
Auerswald
Schweiger
Stuhr
Rosenfeld
Hammerl
Heldt
Knacke
Mandelbaum
Eicher
Güldenstädt
Spies
Ehrenreich
Landauer
Pöge
Heidrich
Mayrhofer
Küttner
Fassbender
Gräbner
Lauer
Schönbein
Herzig
Stromberg
Lindenbaum
May
Fahr
Hansch
Dahmen
Reimold
Auffarth
Rühle
Herzfeld
Neuheuser
Herreshoff
Francke
Schurz
Teyber
Pfaff
Friesinger
Pilc
Meissner
Musäus
Bernbaum
Schmadel
Leistner
Martin

## [Norwegian name generator](https://www.fantasynamegenerators.com/norwegian-names.php)

### Male

#### Full names
Ragnar Thorson
Andre Valle
Kaare Norberg
Viktor Pedersen
Kurt Austad
Lasse Breeland
Tobias Danielsen
Arnstein Eriksen
Bård Klepp
Steffen Varland
Tord Wiland
Harald Reishus
Aleksander Runde
Kjartan Lillegard
Richard Lageson
Arnfinn Flattum
Torgeir Holan
Tomas Egeland
Dagfinn Kile
Dan Orten
Torstein Johnsen
Ronny Heier
Sivert Melberg
Arnfinn Melhus
Arnstein Ostby
Raymond Lindvig
Halvard Opsal
Bendik Slette
Arnt Nordness
Raymond Eilertsen
Agnar Helseth
Erlend Alme
Peter Hoium
Fredrik Magnussen
Per Bentzen
Birger Thorstad
Petter Vangen
Klaus Hagtvedt
Tomas Berntsen
Tormod Roberg
Tom Brovold
Agnar Formo
Vebjørn Fossum
Tommy Iversen
Snorre Moen
Sigurd Trelstad
Morten Wagle
Asgeir Stoa
Reidar Sanner
Glenn Oen
Arthur Vagen
Rasmus Borresen
Alf Leite
Knut Ottesen
Stefan Velten
Torstein Bredahl
Kjetil Sandahl
Jens Truelsen
Birger Foss
Chris Sahlberg
Torstein Hotvedt
Øystein Volden
Jarle Vea
Martin Forseth
Arnstein Hegg
Audun Fjelstad
Håkon Juul
Torstein Nicolaisen
Brage Boberg
Aslak Berget
Erik Espeland
Thorbjørn Roe
Snorre Johannessen
Sveinung Tingelstad
Vegard Barstad
Benjamin Soland
Gustav Mostad
Jarl Stordalen
Herman Baardsen
Marcus Grimstad
Finn Ringdahl
Tor Kolstad
Kristen Hove
Ulrik Skaar
Julian Setter
Kim Lehne
Agnar Nicolaisen
Bendik Baardson
Vegard Arvesen
Dag Nicolaisen
Sebastian Kopperud
Sigurd Ramstad
Hallgrim Istre
Henrik Finseth
Jens Evenstad
Ingvald Skyberg
Dagfinn Lauridsen
Thorleif Aros
Eirik Caspersen
Jørn Heide

#### First names
Ali
Dan
Ove
Odin
Georg
Lars
Ali
Robert
Ragnar
Adrian
Jonathan
Yngve
Magnar
Åge
Tobias
Christopher
Audun
Sondre
Arnstein
Hugo
Kai
Christian
Arthur
Per
Vetle
Vegar
Rasmus
Axel
Torfinn
Idar
Edgar
Gaute
Bjarte
Isak
Cato
Elias
Peder
Erling
Otto
Victor
Bengt
Gard
Oliver
Leiv
Ruben
Aage
Glenn
Gisle
Raymond
Gard
Stian
Stian
Sivert
Peder
Rolf
Filip
Bjarne
Truls
Tord
Kristen
Edvard
Torbjørn
Gjermund
Kristian
Ivan
Herman
Axel
Joar
Idar
Steffen
Odin
Gard
Ali
Kjell
Hallgrim
Gustav
Kristian
Aslak
Christian
Fredrik
Øivind
Hallgrim
Otto
Svend
Kjetil
Birger
Yngve
Oliver
Espen
Haakon
Tommy
Bård
Karsten
Magnus
Thor
Oddmund
Niklas
Andre
Filip
Chris

#### Last Names
Andersen
Holt
Lerum
Oen
Aaberg
Fossen
Ness
Aamodt
Oddvarson
Mehle
Brevik
Enger
Steenrod
Oldervik
Hofland
Houge
Mensen
Bru
Stromme
Asplund
Sandberg
Lovas
Mogensen
Sorbo
Boge
Staff
Bradt
Stenseth
Gulseth
Lovland
Torgersen
Brodersen
Brenden
Aas
Dock
Strom
Nored
Borsheim
Jensen
Eidsness
Skagen
Rod
England
Volden
Eliassen
Haugli
Folstad
Silnes
Bjornsen
Saether
Amdahl
Thorson
Hammer
Nordahl
Landsverk
Kallevig
Asp
Steenrod
Brager
Williamsen
Hammer
Strommen
Baglien
Hoium
Lyngstad
Sand
Eriksen
Ringstad
Soren
Brenden
Eid
Ringstad
Oie
Veen
Furness
Runde
Ringdahl
Reishus
Folstad
Poulsen
Solberg
Aleksandersen
Graven
Evjen
Engen
Thuesen
Drag
Eide
Wollen
Ekern
Greseth
Brundtland
Hetland
Vee
Melland
Kampen
Ueland
Madland
Evjen
Opland

### Female

#### Full names
Anny Jensen
Gro Urness
Gerda Bell
Vera Thygesen
Birgit Myre
Kine Kringen
Ingebjørg Aspen
Randi Brager
Hege Drag
Karin Hemmingsen
Malin Mannes
Astrid Krogstad
Dina Norgaard
Vigdis Aaberg
Tiril Stein
Edith Holmsen
Oddrun Nored
Mia Barsness
Siri Eikeli
Emilie Aall
Karin Tveit
Synne Holberg
Tanja Smeby
Vera Teigland
Lill Lier
Marthe Loberg
Unn Rolstad
Eli Murer
Ruth Lerud
Victoria Selberg
Mia Sabo
Gunhild Lyng
Dina Natvig
Karina Matthiessen
Oddbjørg Uren
Rikke Rogness
Tonje Nystrom
Oddbjørg Kjelland
Rakel Aagard
Solveig Vee
Reidun Langseth
Aud Rosdahl
Tone Ruen
Therese Aas
Bodil Tharaldson
Oddveig Walstad
Margrethe Skeie
Sissel Dal
Britt Magnus
Rigmor Husby
Stine Greseth
Laila Flattum
Iselin Ersland
Marthe Roe
Sidsel Haagen
Målfrid Helseth
Helen Hegdahl
Grete Meling
Mathilde Holstad
Torhild Felland
Hilda Helgeland
Fride Fortun
Jane Waaler
Amanda Hegstad
Tanja Bjelland
Julia Bentson
Lise Holter
Åshild Moe
Jenny Wahl
Ruth Ree
Synnøve Kleve
Ina Hendriksen
Ranveig Mong
Annette Nilsen
Ann Devold
Benedikte Reitan
Jenny Thoe
Marte Saether
Silje Tollefsrud
Evelyn Walberg
Karina Selland
Sylvi Hippe
Natalie Salvesen
Julie Lauve
Katrine Stenberg
Emilie Andresen
Brit Sorum
Nora Stai
Helena Solheim
Lillian Sando
Sølvi Island
Margaret Sween
Toril Bylund
Frida Borja
Sonja Jelle
Klara Conradi
Ellen Holum
Lene Austad
Asbjørg Brevig
Maiken Hegland

#### First names
Lotte
Maren
Sonja
Frida
Amanda
Gunhild
Laila
Maren
Elisabeth
Mona
Anette
Silje
Turid
Evy
Malin
Vilde
Astri
Torild
Sandra
Britt
Gunn
Miriam
Oline
Liv
Maria
Hedda
Helene
Jenny
Maiken
Sofie
Henriette
Tanja
Aina
Sunniva
Alice
Vilde
Sara
Esther
Ingebjørg
Anniken
Maren
Ine
Selma
Bodil
Henny
Ina
Liv
Rebecca
Anna
Emilie
Henriette
Haldis
Olaug
Mona
Aslaug
Torild
Oline
Oline
Synne
Edith
Oda
Marit
Jorid
Guro
Kjellaug
Torbjørg
Helene
Laura
Gunn
Bergljot
Trude
Eva
Oda
Maja
Ingjerd
Anne
Ann
Merete
Laura
Birgitte
Julie
Ellinor
Olaug
Emma
Petra
Ingeborg
Amalie
Ragnhild
Evelyn
Aslaug
Birgitte
Hannah
Marte
Kjellaug
Kirsten
Marianne
Alice
Ina
Else
Nora

#### Last Names
Kolden
Olsen
Nordholm
Strommen
Blom
Meloy
Aavik
Hovden
Asper
Hippe
Moy
Fornes
Wahl
Berge
Michaelsen
Gilbertsen
Langland
Roys
Brunsvold
Oftedahl
Ringstad
Lutsi
Fossen
Osen
Odden
Cappelen
Juhl
Teigland
Welde
Furness
Froiland
Melland
Lybeck
Mathisen
Williamsen
Dokken
Stensland
Aarrestad
Rong
Bryne
Wahl
Owe
Ronning
Aadland
Selland
Dybdahl
Bratvold
Vig
Lageson
Fiske
Erland
Aunan
Holte
Siem
Huso
Nerby
Torgersen
Wagle
Thue
Thorkelson
Bernsen
Lovdahl
Bjorge
Omdahl
Bentson
Nordland
Dyrdahl
Grinde
Ingebretson
Strommen
Danielsen
Lovig
Hegg
Homme
Agnor
Urdahl
Bakke
Jakhelln
Roisum
Hegland
Velten
Brunsvold
Onsager
Rye
Asphaug
Karlstad
Halldorson
Skora
Bakken
Sollie
Mehle
Lauridsen
Falla
Albertsen
Hovet
Petersen
Myren
Dahling
Jorde
Bingen

## [Viking name generator](https://www.fantasynamegenerators.com/viking-names.php)

### Male

#### Full names
Runolf Grimwaldsson
Hjor Bjalfisson
Mord Borgarsson
Hallmund Geirleifsson
Dagfinn Sighaddsson
Asbrand Thorfinnsson
Grimwald Sigeferthsson
Borstig Geirleifsson
Forni Thorolfsson
Grimkel Gautisson
Vandil Torstensson
Vermund Varsson
Ingolf Askelsson
Hanef Gudbrandsson
Hildir Nasisson
Borgar Frostulfsson
Grimolf Arngeirsson
Arnfinn Brodirsson
Finn Odinkarsson
Yngvar Eysteinsson
Gunnkel Kispingsson
Asbrand Gormsson
Ketil Hæfnirsson
Sigfus Gnupisson
Trud Hundolfrsson
Lambi Ubbeinsson
Botulf Kispingsson
Dag Onämsson
Sumarlid Iricsson
Gunnstein Trudsson
Hrein Thormothrsson
Giermund Jobjornsson
Gorm Hottsson
Arngeir Thorbergsson
Thormar Arnlaugsson
Skuld Amundisson
Sigvat Stufsson
Thialfi Hognisson
Veleif Thrandsson
Holmstein Ofiegsson
Eirik Kolskeggsson
Gils Mordsson
Iorund Herjolfsson
Gizor Thoroddsson
Sighadd Hreitharrsson
Klakkr Arinbjornsson
Hjalti Hasteinsson
Gæda Skarfsson
Erlend Gudværsson
Hvitserk Kodransson
Trud Thoroardsson
Otrygg Vekelsson
Arnstein Varinsson
Thorbrand Grisson
Vott Sigeferthsson
Thorod Beinirsson
Hrut Gunnisson
Fastulf Abisson
Gunnkel Naddodsson
Gudrod Arnulfrsson
Holmstein Tyrfingsson
Folkbiorn Thjostolfsson
Isgaut Nafnisson
Torfi Meldunsson
Sigmund Bjarnisson
Spiallbudi Halftansson
Ondott Hroksson
Byrnjolf Thorbjornsson
Gunnulf Gudmundsson
Sigvid Gunnbjornsson
Ketilbiorn Hromundsson
Orrin Arnljotsson
Steinkel Iarlsson
Eyvald Beigarthsson
Eid Spjutsson
Jarnskeggi Hermundsson
Asvald Sigvatsson
Otrygg Arnisson
Thororm Hakonsson
Thorir Authulfsson
Gunnhautr Bjornsson
Knut Fastulfsson
Bram Hængsson
Iarl Gudværsson
Arnljot Bardsson
Geitirgest Authgrimsson
Fridgeir Gæirasson
Svipday Thormodsson
Veturlidi Sigtryggsson
Glum Onemsson
Lini Kollsson
Sigvaldi Hrafnkelsson
Bior Hjorleifsson
Hermund Isleifsson
Hedin Svansson
Jorund Asulfsson
Ari Bergthorsson
Hælæif Sigfusson
Fastulf Nasisson
Thiodolf Kætiløysson

#### First names
Kabbi
Yngvar
Ornolf
Ragnar
Orlyg
Sigebeorht
Serk
Helgi
Guda
Vebjorn
Bodalf
Slodi
Fargrim
Agnar
Värmod
Hadd
Gudlaug
Svartkollr
Kabbi
Hrærek
Iarl
Sveinbjorn
Selkollr
Alfgeir
Thorred
Assur
Jarlebanke
Gunnvid
Eilif
Herstein
Iarund
Herjolf
Throst
Eyjolf
Oddløg
Yngvar
Sighadd
Hildir
Ulfljot
Torrad
Erp
Aron
Skurfa
Veturlidi
Sigenoth
Ornulf
Thorod
Ketilbiorn
Øpir
Svinulf
Vidkunn
Sven
Grjotgard
Bruni
Hvitserk
Slothi
Dan
Atsurr
Kollskegg
Saxi
Mord
Sighadd
Guthorm
Bjartmar
Heriolf
Iarlabanki
Vathlauss
Onäm
Saksi
Vekel
Torfi
Bork
Audgisli
Torsten
Skuld
Thorbrand
Skuti
Kollsvein
Orri
Thorbjorn
Olvir
Gudlaug
Birning
Kori
Bolverk
Thjodoft
Tufi
Geirolf
Sigewine
Grim
Bothvar
Lini
Herlaug
Fridgeir
Jarnskeggi
Grettir
Skidi
Kraki
Botulf
Hallvard

#### Last Names
Vestarsson
Hrosskelsson
Oddsson
Skœdirsson
Kætilmundsson
Ofiegsson
Skœdirsson
Giermundsson
Vermundsson
Gunnaldsson
Hämingsson
Bergfinnsson
Blængsson
Eiriksson
Finnvidsson
Vigfusson
Sigericsson
Kispingsson
Thormodsson
Modolfsson
Lytingsson
Gamlisson
Skjoldsson
Edgarsson
Jokulsson
Bjarnisson
Orestsson
Vandilsson
Skardsson
Karlsson
Freysteinsson
Wealglistsson
Hrosskellsson
Arnljotsson
Ulfketilsson
Bergthorsson
Thorvidsson
Styrbiornsson
Isisson
Hlodvirsson
Gunnaldsson
Sibbisson
Sigestælsson
Maksson
Leidolfsson
Vottsson
Æinridisson
Iarlabankisson
Hagisson
Sæbbisson
Svartkollrsson
Audgislisson
Vidkunnsson
Authketillsson
Sinfiotlisson
Eyvaldsson
Ketilsson
Skardsson
Grimolfsson
Gunnulfsson
Kotkelsson
Geitirgestsson
Svartkollrsson
Heggsson
Yngvarsson
Skarfsson
Asbrandsson
Vandradsson
Gunbjornsson
Gnupasson
Thormarsson
Oddleifsson
Asgeirsson
Thorirsson
Oddløgsson
Thorstarsson
Ondottsson
Dunfjallsson
Vesteinsson
Arnvidsson
Ongulsson
Sveinbjornsson
Tryggsson
Skulisson
Vifilsson
Alfgeirsson
Audbjornsson
Hallvardsson
Vidkunnsson
Halladsson
Asulfsson
Knútrsson
Ludinsson
Vikarsson
Englisson
Kollsveinsson
Ingifastsson
Ingolfsson
Vebjornsson
Vertlithisson

### Female

#### Full names
Gillaug Hrutdottir
Thorelf Arnvidottir
Asny Serkdottir
Bergljot Koigrimdottir
Bjartney Torradottir
Aud Gunnaldottir
Valborg Kætildottir
Turid Hvitserkdottir
Signy Vesteindottir
Bjorg Nasidottir
Valgerd Åsmundottir
Salbjorg Irenmundottir
Thorkatla Runolfdottir
Thyri Toladottir
Hallgerd Skufdottir
Thorunn Bodalfdottir
Tola Alfketilldottir
Thraslaug Sveindottir
Hrefna Thordottir
Svala Frothidottir
Thorhild Bjartmardottir
Tonna Styrdottir
Gudfinna Arnljotdottir
Hallberta Thjodoftdottir
Valgerd Magnusdottir
Geirlaug Jondottir
Audhild Flokidottir
Groa Svartlingrdottir
Gjaflaug Hreidardottir
Heith Nefsteindottir
Thorhalla Wengodottir
Drifa Thorbergdottir
Thorgrima Refdottir
Hildirid Gærhialmdottir
Tofa Snorridottir
Raghild Vidkunndottir
Olof Sigeweardottir
Hildigunn Yngvardottir
Thorkatla Unnulfdottir
Steinvor Thorgautdottir
Thorljot Sighaddottir
Vandrad Thorormdottir
Gudlang Skeggdottir
Vigdis Thoroardottir
Æstrid Hämingdottir
Ingrid Kormakdottir
Thyre Vegeirdottir
Hervor Jomardottir
Svanlaug Kadaldottir
Hildirid Unndottir
Alfdis Hæfnirdottir
Thorelf Ornolfdottir
Hervor Frostulfdottir
Hervor Osvaldottir
Ljufu Thorredottir
Ogn Kardottir
Sigrunn Thorketildottir
Asa Audgisildottir
Abi Hæmingdottir
Fastvi Birningdottir
Thorelf Arnketilldottir
Valborg Pauldottir
Hildirid Hrodgeirdottir
Bergthora Thometilldottir
Thraslaug Sorlidottir
Steinunn Thorlakdottir
Guðný Veturlididottir
Ingunn Thorsteindottir
Alof Blanndottir
Asta Havardottir
Asgerd Tumidottir
Ottkatla Runolfdottir
Ingirun Sigemærdottir
Thurid Osvaldottir
Thorbjorg Runolfdottir
Arngunn Iricdottir
Oddny Nikolasdottir
Gyrid Thrandottir
Herbjorg Egildottir
Geirlaug Olæifdottir
Alfdis Leidolfdottir
Fridgerd Guthormdottir
Yngvild Ragnardottir
Alfeid Svartdottir
Geirlaug Ævardottir
Thorve Guthheredottir
Siv Bergdottir
Þuriðr Ofiegdottir
Reginleif Gæirmundottir
Thorgærd Æskildottir
Gyrid Svartbrandottir
Dalla Lodmundottir
Asdis Eirikdottir
Jorunn Æirikdottir
Skur Skallagrimdottir
Thorljot Svendottir
Thorfrid Æirikdottir
Halla Orridottir
Unn Kalfdottir
Gyda Gnupadottir

#### First names
Gæierlaug
Tonna
Thkatla
Gudlang
Gyrd
Thraslaug
Bergthora
Reginleif
Solveig
Bergthora
Thorbjorg
Signy
Groa
Maria
Thorve
Steinvor
Alfeid
Gudney
Hildirid
Katla
Ingigerd
Sæunn
Gunnvor
Dotta
Hallgerd
Thora
Grima
Ingirid
Thorlaug
Gudlang
Solveig
Estrid
Nidbiorg
Rafarta
Gudney
Thorfrid
Brynhild
Yrsa
Rafarta
Aldis
Gudfrid
Thorgærd
Thorve
Rannveig
Yrsa
Steinunn
Odindis
Groa
Bothild
Æstrid
Greiland
Asvor
Bolla
Gyrid
Hedinfrid
Asvor
Hrodny
Solvor
Audbjorg
Bolla
Osk
Gudrun
Grima
Skur
Freygerd
Holmfrid
Gillaug
Hallkatla
Audhild
Vandrad
Thorvor
Ingirid
Ingirun
Ingunn
Sigrunn
Thorfrithr
Ingun
Hlif
Yri
Herdis
Audbjorg
Abi
Herkja
Thorve
Ingulfrid
Æsa
Gudrun
Audbjorg
Thkatla
Gudny
Inga
Solveig
Bergljot
Signy
Bergthora
Sigvor
Skur
Turid
Arnora
Arnkatla

#### Last Names
Herjolfdottir
Ofeigdottir
Northridottir
Sigfastdottir
Thorgilsdottir
Skapdottir
Refdottir
Sibbidottir
Svandottir
Gærrardottir
Isgautdottir
Frømundottir
Yngvardottir
Sigfastdottir
Onundottir
Nefsteindottir
Aslakdottir
Austmathrdottir
Koigrimdottir
Haraldottir
Bjor dottir
Asketilldottir
Thorfastdottir
Guthheredottir
Holmgavtdottir
Autidottir
Styrmirdottir
Thidrandidottir
Hrodidottir
Sigeferthdottir
Isidottir
Authulfdottir
Sæmundottir
Alvidottir
Asketilldottir
Kadaldottir
Kormakdottir
Eyjolfdottir
Ulfljotdottir
Hjorvarthdottir
Thormothrdottir
Skuldottir
Skardottir
Farthegndottir
Hafrdottir
Herlaugdottir
Thorlakdottir
Audolfdottir
Steinbjorndottir
Thorkeldottir
Hreindottir
Arngeirdottir
Thorkeldottir
Orndottir
Gudrodottir
Knutdottir
Ofiegdottir
Gudlaugdottir
Lytingdottir
Aslakdottir
Grimolfdottir
Audolfdottir
Frothidottir
Ivardottir
Thorbjorndottir
Ketilbjorndottir
Veleifdottir
Bjorgolfdottir
Makdottir
Sigbrandottir
Bothvardottir
Sinfiotlidottir
Frodidottir
Sigurdottir
Steinthordottir
Bodvardottir
Haukdottir
Toredottir
Gunnkeldottir
Rodmardottir
Svalfidottir
Holmfastdottir
Hedindottir
Bardottir
Erlendottir
Gunnardottir
Kormakdottir
Gætirdottir
Uglubathrdottir
Hafrdottir
Karsidottir
Glamdottir
Ingolfdottir
Thiodolfdottir
Kabbidottir
Starkadottir
Jomardottir
Grithdottir
Sumarlididottir
Snorridottir

## [Old high german name generator](https://www.fantasynamegenerators.com/old-high-german-names.php)

### Male
Ingolf
William
Kunibert
Hartmut
Winand
Detlev
Wilfried
Friedwart
Hartmut
Folke
Randolf
Ebbo
Randolf
Hagen
Robert
Guido
Wolfram
Burkhard
Ralf
Karl
Guntram
Friedwart
Bertrand
Elmer
Gerfried
Otto
Ingo
Bertram
Neidhard
Walter
Adolar
Ralf
Egmont
Altmann
Adelgis
Till
Volkmar
Archibald
Bertram
Reinhard
Deion
Emmerich
Wunibald
Clodomiro
Reimar
Horst
Lanfrank
Siegfried
Adolar
Hugo
Hildebrand
Gunthard
Wigmar
Hunfried
Raymond
Hubert
Karl
Arwin
Helmer
Horst
Bernard
Gerwig
Wolf
Ludwig
Dietrich
Gaston
Wolfhard
Hatto
Wigmar
Reinhold
William
Ernest
Meinhard
Kuno
Werner
Alberich
Ottfried
Dietger
Horst
Dietrich
Thilo
Wendelin
Ottokar
Degenhard
Ivo
Dietrich
Gismondo
Gerard
Reingard
Wigbert
Dankrad
Ottfried
Erwin
Engelbert
Winfried
Leonhard
Roderick
Harald
Alwin
Albert

### Female
Adalgisa
Louise
Hildburg
Reinhilde
Ebba
Randi
Amalberga
Wilhelma
Arnhild
Riccarda
Frauke
Henrietta
Gisela
Ubalda
Filiberta
Almut
Walpurga
Hildburg
Heilwig
Kai
Ludwina
Linde
Rosalinde
Radegundis
Irmgard
Almut
Mathilde
Miltrud
Everarda
Irmlinde
Hulda
Gunda
Arnhild
Helmgard
Wigberta
Miltrud
Abelarda
Eike
Radegundis
Linde
Burghild
Amalberga
Ortrun
Kaja
Wigburg
Asgard
Geraldine
Kirsa
Franka
Diomira
Adolfa
Aubrey
Louise
Irmhild
Linde
Hemma
Hildburg
Landriche
Irmgard
Berta
Irmtraud
Linda
Aubrey
Geraldine
Kaja
Kirsa
Gerlinde
Gerlinde
Gerharde
Burglinde
Thusnelda
Burghild
Geraldine
Romilda
Helmgard
Amalberga
Kunigunde
Carla
Adelinde
Henrietta
Irmhild
Aristea
Aubrey
Almut
Merlind
Dietlinde
Ludgera
Asgard
Hiltrud
Gotlinde
Riccarda
Riccarda
Romilda
Aldona
Hildrun
Saskia
Adolfa
Bertrada
Kunigunde
Hildegunde


## [Dwarven name generator](https://www.fantasynamegenerators.com/dnd-dwarf-names.php)

### Male

#### Full names
Belrik wildmantle
Emmar stonegift
Bhalmand deepale
Dulmun hammerfury
Grymus stoutkith
Bramduhr glunhorr
Banrom drutgack
Grygron holdunohr
Dalgurn lolbran
Ragbek tukahr
Brumrigg thundershield
Thuldahr boldaxe
Bhargarn silverguard
Benmand grayboots
Bhelkum wildkin
Thermyl forduck
Hjulrus drohakuck
Theldur fullehom
Grenmin maden
Emnum brordegohk
Dargurn evenanvil
Krumkahm keenfall
Hjolgran bloodfeast
Brammor brawnmane
Bharmar loudpast
Berkum draemnigehk
Thorren laeldeg
Amrak strafdikihr
Thermiir grangihehr
Tynik strelbrurk
Bramron thunderhammer
Hulnar smugfists
Torbrek graystrike
Ebkohm drunkkin
Baeradin deeppast
Thulbrek follokann
Amdrus strezzahahk
Thorduhr drangigenn
Bennum lodahr
Ragdrom hefdanart
Khargrun kindpass
Therdur boldshield
Bantharm burrowblade
Tordren strongbleeder
Gimmek boldblade
Rotmand daduhr
Balnum detguhig
Morrak huroverk
Bernus glumnurack
Gralmur strolbrum
Hjalram bronzestorm
Beltharn keenkin
Horgarn battlekind
Kramrom blackfall
Tynir madshaper
Thelkuhm takirirr
Bharman grollirak
Daermin doregek
Thurmur fafdog
Murkam fadock
Gardahr hammermantle
Bromkohm moltenreach
Bramrak goblingrace
Thalmek trollmantle
Hulbrek halftankard
Bertharm mekavark
Thydain hutgon
Baerdek druldekig
Gergrim glorthur
Dalkohm grethgehak
Magkum marblemantle
Dulron loudroar
Brumgus goldfury
Murmar grayfist
Bendal deepstorm
Dulnyl balbruhk
Belnar bralderk
Emnir dozzihek
Benrik cenheg
Reggurn lozzerag
Dulmir frosthelm
Tharmund blackbraid
Thelgus stormfeast
Hjuldan loudboots
Magdur brawnbelt
Bhelnum strereherk
Hjolrum bufderk
Muirkom bumnegeln
Rotmun strelbrart
Ebgrum straldugick
Krumdohr trollbreath
Branrig evensong
Bhartharn wildhammer
Brumbek boldreach
Malkum mightfury
Krumrik drengehr
Hulnyl fadohr
Benmir strotgeln
Umnar lullihihr
Guldrak berdeln

#### First names
Regdir
Thurgurn
Dulrus
Bramgus
Urmadin
Grilthrum
Ummyl
Bhalgrum
Gimkom
Tharthran
Thergurn
Armkom
Kromnik
Magmin
Ragkam
Bharkahm
Horram
Gardor
Krumgron
Vonnar
Tynir
Bhalmin
Hjaldor
Ebtharm
Bheldrus
Umram
Thelrom
Thertharm
Daldahr
Bermund
Thodus
Baernar
Belmir
Daerdahr
Ammond
Hjuldus
Daergran
Kardrus
Armnur
Randur
Bromiggs
Gralrom
Dalgrom
Ummek
Ragmir
Gralmyl
Grenthrum
Thorbek
Bramrig
Umrum
Umgram
Krummund
Regdahr
Umkyl
Dalkohm
Farnyl
Kromdan
Gralron
Dolnom
Bergram
Baergram
Bhaldor
Bhardrus
Thogram
Bhaldan
Thaldahr
Morram
Murmyl
Hardain
Tydal
Thurmyr
Hjuladin
Kardan
Regkohm
Dolthran
Magkuhm
Gulrum
Hjulmek
Dolnik
Regrum
Balgarn
Bromron
Torrim
Thelnar
Karthrun
Raggron
Thokyl
Ermnom
Krommek
Gimdren
Farnar
Kramrak
Dolmun
Brumgus
Branthran
Magkahm
Kharmur
Ragkuhm
Rotthrun
Tymor

#### Last Names
silverdelver
battleforge
flintfury
wildstrike
fireforce
heldem
faetgevonn
bothgam
tarenn
bolbrugehk
battlehold
stoutgift
steelsong
stoutforge
goblinboot
merogem
glomnenik
gallehohk
gonhehorr
lerem
moltenfist
bronzehold
lightstorm
grayguard
kindbelt
threzzahk
rothgenik
dafdurt
cenkegek
cumnir
mountainbleeder
grayfall
bronzemantle
coldbuster
frostreach
dalbrohek
tubrugen
cedehunn
dellunim
babrart
marblekith
loudsong
greatfury
stormreach
boldtale
garthigaln
telbrahk
brankurart
mukin
burdurt
brawnhelm
deephandle
boldfeast
lightmask
sternhand
graenhonuhk
brutgogar
laeharr
fohig
struthgohihk
mountainpass
stormward
lastshield
stonebelch
bigfury
lemnin
cenhek
gozzim
threrahan
drehokeg
steelsong
marblefall
kindfall
stonebuster
wildmane
fethgock
lethgegeck
throzzeck
cothgun
gathguvor
sternfist
smugbranch
mightreach
evenpride
goblinstone
grofdenuk
gofdivehr
glonheg
deder
gluthginarr
steelbuster
giantkith
steelforce
everboots
sternstorm
thrarthak
bronhek
thramneck
lutgagirk
tordugarr

### Female

#### Full names
Bralvan drunkhead
Tysdryn coldtankard
Brolria lastgrace
Bronsyl moltenshaper
Lassglia hammerhold
Redvian cubrirk
Rynnera drofdereg
Bralleres grezzoreg
Dearmyla gubrigahr
Tordielle lelbrovarr
Ingris graytale
Katros bloodmight
Katgiel broadpast
Tishlen burrowpride
Brennora firstfound
Mysnas grunkarr
Tasvia brerdigerr
Gymnip brezzihr
Bonmera drumnanak
Tizwynn dredugonn
Dearnip frozenfeast
Mistnan brawnrest
Nesniss silverbraid
Myrnar frozenmantle
Marlin frosttale
Ketvian strozzivak
Brylgwyn tangonahr
Gerglian lerthugock
Gwanri bunkugerk
Daerselle straderan
Kaitra mountainhorn
Gernora darkstone
Nystyn evenanvil
Baervian starkbreath
Nessyl laststorm
Nessora brafderr
Branmyl dralbrem
Rynvan gekonerk
Mystleil dongogort
Byllinn mekert
Ranbelle everhammer
Ketnora bloodforge
Nesbelle firehead
Marsyl broadkind
Gymnyss starkanvil
Bronselle glongiker
Jintin terthohk
Jynnora futhgerr
Gerros madurerr
Gwenria dofdikahk
Gwinvan firestrike
Tiztin bronzefinder
Brynlen biggift
Lessdyl marblerock
Gwanlyn bigmantle
Mistyn brangurt
Mardeth glazzurk
Tazglia rabrukirr
Gwyndyl straemnoron
Rynleil dakihohk
Misniss hardhammer
Annys darkshaper
Brulmyl smugbraid
Anbelle strongbane
Tizros brightforce
Baerbera hufdug
Brilla rofduvonn
Tasma drokirom
Kaitsora grutgert
Lasnar glankekarr
Brallenora eveneye
Lasrin graybottom
Jyndeth keenfound
Reynva hammerflight
Elvia firedelver
Lassglian methgugahk
Einwyn grorarr
Brennora hollaven
Nysdeth drethgakork
Nysgwyn bezzihort
Mistnura lastmight
Brannora starkreach
Brulthiel blackblade
Rynmyla ironstorm
Dearria graymane
Byllenia grangik
Myslynn donkann
Elgwyn gronhonahr
Nisdish rezzenn
Einras thrutger
Misdryn drunkroar
Brallerin trueforge
Jinnera goldgrace
Baerlynn smugkith
Torlin frozenfeast
Runwynn throfdack
Redlen brobrinahr
Misbelle reldeheln
Nasslinn brutgen
Lassri tunhirak

#### First names
Sartyn
Bretnora
Anleen
Maevma
Maevselle
Baernys
Dearnera
Jynleil
Brolsora
Soldeth
Tisdyl
Lyeslin
Brennyl
Kardille
Maevri
Redlyn
Naerva
Tyshnan
Karra
Katma
Nisniss
Laswynn
Jennnyl
Lassnera
Mystmura
Lessrin
Tyshris
Mystbera
Gwanleil
Neswin
Brytnora
Gwynwynn
Daerryl
Gersael
Brillegiel
Braendryn
Tysbelle
Katmyla
Bonsael
Reynryl
Tishlyl
Tornia
Bellenip
Tazros
Bronbera
Brilledille
Brylmora
Nesnyss
Gwinlen
Kathnyl
Lessyl
Torri
Mysleil
Misleen
Arlyn
Arnys
Gwanwaen
Redrin
Elnia
Bronmora
Ardish
Brynthel
Gwyndish
Soltin
Jynvan
Ketmora
Kathwaen
Gwenrin
Lyesgiel
Brulra
Jinnura
Bryndora
Einlyn
Brettyn
Elnyl
Nalglian
Daerlyl
Ketnip
Sarnura
Gemwaen
Bryllenura
Lysgiel
Tasris
Lasslynn
Gemryl
Nysvan
Kaitvan
Brynglian
Bonnera
Kaitvan
Maernora
Rannura
Jennwaen
Ingnyl
Marlyl
Gwanvia
Kardelle
Kaitbera
Rednyss
Mystwaen

#### Last Names
keenbuster
stoutfeast
giantpast
hammertale
goblinbleeder
burog
gardock
bratgahohr
fedaguhr
funkuhirt
strongmask
flinteye
biggrip
brawnaxe
boulderbreaker
tumnohuhr
stromnork
fadonn
toldeheg
murokeg
madbranch
wildforge
deepbreath
sterntale
hardeyes
toder
gangihurt
redehr
bolbrar
harduk
stormforce
flintale
sternkith
mountaintankard
trollkind
tungerr
hankanok
threfduhk
garthoviln
gukenenn
moltenbreath
keenpass
keenhelm
truetankard
coldfall
throtgok
henhokehr
threranart
grollunok
honkuram
frozenbottom
bronzebreath
darkbottom
broodbane
battlebane
tenkororr
duthgevam
hokivuln
bothgorirr
lalbrihert
boulderstorm
starkforce
burrowhammer
hammerboot
deepkith
grenkanahk
fabrenonn
drurderr
hamnugun
temnuk
evenfinder
bloodhelm
mountainbane
frozenhold
frostblood
brardom
faeldurt
strallaruck
strunkirt
threllenag
frozenaxe
battlemight
starkbleeder
stoneshield
hammerward
straebrurarr
hengigar
codik
lellinim
haebruhr
goldstand
keenanvil
gianthelm
drunkbeard
hardfound
motgegek
codonert
carivock
rordurerk
strutgert

# Dwelmer (Dwarven) Nordic

## [Norwegian name generator](https://www.fantasynamegenerators.com/norwegian-names.php)

### Male

#### Full names
Vegar Hegge
Adrian Mo
Oddvar Wike
Christoffer Johannessen
Daniel Eggen
Thor Jacobsen
Bernt Magnussen
Jon Molstad
Dagfinn Mikkelsen
Ronny Mathre
Børre Holsen
Leif Dahlby
Erling Bjorge
Kai Sand
Fredrik Mathiasen
Øistein Eiker
Odin Meloy
Preben Hjelle
Andre Roen
Idar Fodness
Dagfinn Nordheim
Kristen Sabo
Sindre Thue
Oddmund Sveen
Henrik Ramberg
Robin Jansen
Benjamin Holtan
Bendik Sogge
Ottar Saether
Klaus Estrem
Viktor Dal
Ove Wangen
Bjarte Odegaard
Oliver Bentzen
Marcus Hoen
Mikkel Fretheim
Sigve Sparre
Alf Staff
Markus Nylund
Bendik Sommerfelt
Espen Huso
Trond Viste
Kjetil Meland
Jørgen Hoium
Anton Dahl
Nicolai Buhaug
Anders Fosse
Nicolai Nicolaisen
Jostein Frostad
Kjetil Selland
Olav Moland
Rolf Klepp
Sander Holten
Klaus Hammer
Hugo Weberg
Aksel Jonassen
Amund Flom
Robin Danielsen
Svend Nesset
Per Leite
Frank Brustad
Geir Aspen
Tormod Nordahl
Ulf Kittleson
Markus Helsing
Thorbjørn Mensen
Ronny Buras
Halvor Meloy
Tom Svendsen
Freddy Skaug
Bjørn Espeseth
Halvor Dahl
Henrik Hoel
Bent Dammen
Trond Vold
Per Jonassen
Kai Garness
Asgeir Mong
Bjarte Rolstad
Olaf Monsen
Einar Sande
Stefan Helsing
Magne Stoa
Joar Becken
Gisle Salvesen
Ulrik Houg
Kristian Gandrud
Bjørnar Eggen
Benjamin Mong
Michael Sogge
Christoffer Norgard
Alf Vangsness
Øyvind Norum
Anton Gudmundson
Egil Haraldsen
Trond Aleksandersen
Kevin Brenden
Brage Halse
Sindre Nordland
Ingar Ose

#### First names
Alf
Geir
Kristen
Dennis
Filip
Inge
Henrik
Svein
Rasmus
Leiv
Ronny
Christian
Trym
Gudmund
Henrik
Harry
Kurt
Hans
Peder
Nikolai
Oddbjørn
Ronny
Stein
Aage
Per
Jørgen
Christoffer
Sten
Bent
Even
Torfinn
Simon
Roger
Sondre
Oddvar
Trygve
Paul
Reidar
Jørn
Vetle
Henrik
Bjarte
Håvard
Jon
Tommy
Bernt
Sander
Svenn
Oddbjørn
Roald
Eivind
Rolf
Alfred
Arnt
Remi
Vebjørn
Ragnar
Atle
Ståle
Rolf
Gunnar
Dan
Niklas
Patrick
Kjartan
Eivind
Hallgrim
Roar
Stefan
Carl
Roger
Ragnar
Gisle
Torgeir
Filip
Oddmund
Dennis
Raymond
Kevin
Bengt
Torfinn
Marcus
Arild
Pål
Ulrik
Roar
Mathias
Daniel
Julian
Andreas
Alf
Ulrik
Yngvar
Tomas
Ali
Ali
Richard
Marcus
Edgar
Christer

#### Last Names
Offerdahl
Greseth
Ericksen
Hoiland
Tande
Andreasen
Loberg
Oines
Fossen
Hanevold
Aros
Knudsen
Sundahl
Sanden
Bergo
Hoiland
Aanenson
Bolstad
Velten
Asper
Bjorn
Kallestad
Oftedahl
Holt
Gudmundson
Pedersen
Ingebretson
Wigen
Egeland
Hammer
Boler
Lier
Klepp
Mogen
Gudmundson
Brovold
Underdahl
Westrum
Martinson
Sorensen
Petersen
Folkestad
Erland
Haraldsen
Reitan
Schau
Ulland
Arvesen
Valen
Langseth
Soren
Engen
Markussen
Karlsen
Aaroy
Nielsen
Sollie
Bergland
Aasland
Oien
Winjum
Berget
Meland
Marum
Klepp
Mostad
Watland
Rise
Reinertsen
Tingelstad
Skramstad
Lageson
Reinertsen
Oyen
Flom
Forren
Bernsen
Aandahl
Bech
Wee
Mortensen
Veen
Ask
Aaberg
Enstad
Aune
Karlsen
Aga
Haugan
Teigen
Korsmo
Lande
Bole
Ramberg
Murer
Stordalen
Larsen
Borseth
Dahlem
Haugland

### Female

#### Full names
Vigdis Nordahl
Judith Lillegard
Laura Rudd
Merete Erichsen
Kirsti Grimsrud
Nina Hoyland
Marthe Oye
Arnhild Ege
Jannicke Reitan
Klara Lutsi
Madeleine Christiansen
Gunhild Evjen
Linda Wagle
Lena Ottesen
Helene Waag
Elin Mehle
Heidi Kjellberg
Rita Sandahl
Ingebjørg Petersen
Margrethe Hendriksen
Sarah Bogh
Målfrid Rosett
Tordis Gronlund
Sidsel Veen
Eli Bruhn
Michelle Erdahl
Siri Finstad
Iren Kopperud
Marita Valla
Tina Kolberg
Guro Aarbakke
Hildur Fossen
Rigmor Holstad
Lise Borresen
Johanna Haraldsen
Ina Teslow
Julia Waadeland
Merethe Fretheim
Dina Espeseth
Ellen Melland
Oddveig Torkelsen
Hjørdis Lomen
Haldis Rindahl
Ranveig Granlund
Tine Fjelde
Bergljot Haga
Michelle Ohnstad
Ingjerd Okland
Hildegunn Noss
May Holen
Tordis Nored
Solbjørg Opheim
Jorun Barstad
Grethe Johnsen
Ingvild Paasche
Solbjørg Axelsen
Gro Nordahl
Henriette Aanenson
Janne Kaas
Gjertrud Danielsen
Ingvild Haestad
Lina Selvig
Magnhild Nystrom
Alma Negaard
Julfrid Skaug
Rønnaug Hegge
Julie Naas
Sigrid Frandsen
Sølvi Sando
Ada Thaulow
Oddbjørg Odegaard
Berit Likness
Therese Blom
Victoria Albertsen
Esther Slette
Sara Lunden
Monika Langager
Oddrun Engen
Hedda Noss
Kaja Knudsvig
Vilde Lokken
Anne  Axness
Katrine Hanstad
Anniken Torkelsen
Jeanette Rusten
Amanda Knudsvig
Oddny Sveen
Sylvia Roseth
Sølvi Sommerfeldt
Kirsten Endresen
Jeanette Bruer
Asta Bohler
Monica Hagtvedt
Siri Opheim
Bergljot Walberg
Torbjørg Nyhus
Helena Wee
Siri Eriksen
Sigrid Groven
Katrine Stenseth

#### First names
Svanhild
Kine
Julie
Sara
Sofie
Karen
Gunn
Petra
Mariann
Lill
Anne
Mariann
Jannicke
Anna
Marion
Alice
Lilly
Michelle
Emilie
Rebecca
Ingrid
Guro
Elise
Reidun
Mathilde
Lisa
Jannicke
Rigmor
Sissel
Merethe
Kate
Martha
Svanhild
Elsa
Eline
Silje
Gry
Sigrid
Marianne
Marion
Dagmar
Lisbeth
Benedicte
Gunnhild
Trine
Jenny
Maria
Lina
Amalie
Monika
Oda
Tora
Åshild
Rakel
Jorid
Rakel
Torunn
Sunniva
Vibeke
Bergljot
Liv
Oddveig
Johanne
Lillian
Fride
Maiken
Åse
Mona
Fride
Petra
Inger
Hege
Sissel
Margaret
Grete
Maria
Olaug
Tine
Victoria
Maja
Kjersti
Unni
Turid
Lotte
Judith
Sofie
Sølvi
Torbjørg
Erna
Åshild
Maren
Anny
Fride
Evelyn
Haldis
Sølvi
Sølvi
Tove
Ida
Torunn

#### Last Names
Asp
Bjerke
Ramsland
 Stenseth
Berntsen
Nordrum
Sether
Watland
Lysvand
Fretheim
Stave
Lykken
Skora
Waaler
Borsheim
Christophersen
Ramberg
Hauger
Huseth
Mauseth
Fortun
Aasland
Borger
Rosdahl
Gill
Homstad
Hallum
Moy
Wik
Hareide
Sether
Theisen
Lande
Helle
Grimstad
Nordholm
Dalen
Helberg
Hee
Setter
Reitan
Asker
Meas
Beito
Eike
Michelsen
Boberg
Trygstad
Lokken
Lysvand
Mehle
Oye
Steinback
Opdahl
Morgensen
Stai
Guldbrandsen
Brevik
Knudsvig
Loken
Kvale
Berge
Hopp
Stormo
Hove
Hougen
Egeberg
Heim
Burke
 Hee
Lystad
Berland
Skora
Gulseth
Landa
Salberg
Lonning
Odegaard
Nerison
Aamo
Thanem
Ringstad
Horne
Hegge
Dahling
Ohlsen
Hippe
Sannes
Brenden
Nordhagen
Homstad
Dalby
Gaarder
Ericksen
Bingen
Nesby
Skaug
Slinde
Valla
Stenseth

## [Viking name generator](https://www.fantasynamegenerators.com/viking-names.php)

### Male

#### Full names
Njal Vermundsson
Sigeweard Gunnsteinsson
Øysten Styrkollrsson
Vertlithi Konalsson
Skorri Gunnarsson
Haflidi Asvardsson
Skeggi Hroaldsson
Otrygg Sibbisson
Gardar Storolfsson
Kari Helgisson
Otkel Valthjofsson
Starkad Svartlingrsson
Æirik Thrandsson
Thorgest Hundisson
Bjornulf Thoroddsson
Svæin Brusisson
Asketill Asketillsson
Thialfi Vandilsson
Skardi Hemingsson
Haf Geitirgestsson
Anlaf Hallfridsson
Gunnar Leifsson
Askel Dansson
Authulf Unisson
Vifil Sveinbjornsson
Skuti Ketilsson
Lifstæn Dansson
Thangbrand Herjolfsson
Vigi Eskilsson
Isleif Edgarsson
Toki Bjornsson
Vog Oddløgsson
Vigot Sinfiotlisson
Uglubathr Arnthorsson
Assur Sigvidsson
Bjorgulf Hreidasson
Gorm Hareksson
Thjostolf Hreitharrsson
Gulli Isleifsson
Svinulf Fastulfsson
Banki Bergsson
Thorbjorn Thorbrandsson
Reinn Thidrandisson
Hromund Jokulsson
Gaut Hængsson
Kveldulf Alfketillsson
Orri Thorsteinsson
Kætiløy Ornolfsson
Grimwald Arnvidsson
Manni Vermundsson
Athils Gullisson
Kol Vesteinsson
Leif Hallmundsson
Hiorvard Skulisson
Gudrod Snæbjornsson
Var Vigotsson
Otkel Holmsteinsson
Skapti Ozursson
Arinbjorn Ballisson
Thorod Ingifastsson
Sigehere Ingemarsson
Thormothr Grimolfsson
Hermund Steingrimsson
Sod Onämsson
Otkel Grimsson
Bolli Tjorvisson
Tyrfing Kolsson
Bram Kolsson
Bardi Otkelsson
Thorolf Æinridisson
Vali Sighvatsson
Hundolfr Waltheofsson
Oddløg Bjor sson
Anakol Naddodsson
Mar Thorhallsson
Odinkar Njalsson
Thorgaut Styrkollrsson
Thorfinn Ornolfsson
Hroald Tostisson
Kar Thoraldrsson
Svartgeirr Fornisson
Bodalf Glamsson
Gunnlaug Skallagrimsson
Skopti Yngvarsson
Beiner Brusisson
Asbjorn Skardisson
Kjartan Thoroardsson
Skurfa Kætilfastsson
Snækol Gardisson
Kollskegg Sigvatsson
Tola Hjortsson
Thjodoft Gizursson
Lifolf Herlusson
Thidrandi Vikarsson
Atsurr Nefsteinsson
Ivar Isgautsson
Snækol Thorvidsson
Bodalf Osvifsson
Sigurd Gizursson
Kjartan Bragisson

#### First names
Singasven
Vestein
Fridmund
Eirik
Reinn
Skegg
Skialg
Bjorgulf
Dag
Kari
Sigbrand
Hjor
Hjor
Audgisil
Lopt
Alf
Abi
Storolf
Odinkar
Sigebeorht
Thorhall
Gris
Halfdan
Alfketill
Sigfast
Orlyg
Storolf
Sigegar
Hroald
Askel
Thorvid
Arnvid
Hvitserk
Baug
Agnar
Hauk
Hallfrid
Skapti
Geirfinn
Hrafnvartr
Bergvid
Steinketill
Geitirgest
Skidi
Ingolf
Sigehelm
Asgrim
Hallkel
Koll
Atli
Starri
Thorstar
Skorri
Ottar
Ketill
Ketill
Sigeferth
Njal
Hauk
Osvald
Kabbi
Eydis
Grimwald
Eydis
Geirmund
Ludin
Alfketill
Nærfi
Valgard
Svalfi
Ingemar
Erling
Sturla
Folkbiorn
Herlaug
Ufi
Kar
Nefstein
Geirstein
Hroar
Ozur
Tosti
Vigot
Nærfi
Ofieg
Leidolf
Floki
Thorod
Kadal
Vigfus
Heriolf
Sigeweard
Beiner
Lyting
Sigmund
Eystein
Kabbi
Steinkel
Gardi
Sokkolf

#### Last Names
Sigenothsson
Audunsson
Sigmundsson
Geirsson
Ingulbjörnsson
Gnupisson
Orrinsson
Egilsson
Sigeheresson
Arnthorsson
Agmundrsson
Kjotvisson
Skurfasson
Eilifsson
Thorvardsson
Slodisson
Dagsson
Gamalsson
Karlsson
Bothvarsson
Sigestælsson
Gudværsson
Audolfsson
Granisson
Frømundsson
Hrodisson
Bjor sson
Slothisson
Isleifsson
Hrossbjornsson
Thorgrimsson
Ballisson
Starolfsson
Kætiløysson
Authketillsson
Gudleifsson
Thidriksson
Gunnsteinsson
Ulvkilsson
Hjaltisson
Hallfridsson
Eilifsson
Thorbergsson
Ofeigsson
Svertingsson
Frodisson
Thometillsson
Svartsson
Biorsson
Alfsson
Ragisson
Anundsson
Skjaldulfsson
Amundisson
Thrainsson
Thjostolfsson
Slodisson
Hanefsson
Ludinsson
Vikarsson
Oddleifsson
Thorvardsson
Throstsson
Ingimarsson
Hroaldsson
Hildirsson
Arisson
Hreitharrsson
Vogsson
Thordsson
Ingifastsson
Vifilsson
Ragnvaldsson
Hrafnkelsson
Halldorsson
Gnupasson
Hroarsson
Ondottsson
Kolsson
Toresson
Atsurrsson
Assursson
Kalfsson
Kolfinnsson
Armodsson
Hlodvirsson
Hrappsson
Frostulfsson
Grettersson
Oddløgsson
Hosvirsson
Snækolsson
Ulfsson
Hardrefilsson
Hallvardsson
Skardisson
Skarfsson
Brandsson
Birningsson
Alriksson

### Female

#### Full names
Asleif Bjorgulfdottir
Gjaflaug Iorundottir
Raghild Skapdottir
Ingirid Fargrimdottir
Thorfinna Bjartmardottir
Drifa Asgautdottir
Alfdis Grisdottir
Katla Snæ-Ulfdottir
Asny Birningdottir
Katla Saksidottir
Joreid Sæbbidottir
Ingigerd Arinbjorndottir
Ogn Hersteindottir
Siv Styrdottir
Odindis Tufidottir
Helga Halldordottir
Herdis Svandottir
Gro Heriolfdottir
Yngvild Gormdottir
Signy Sigebeorhtdottir
Skuld Holmgavtdottir
Ashild Illugidottir
Asvor Ingimardottir
Bothild Alfdottir
Aldis Svendottir
Inga Steinmodottir
Ingunn Hrosskelldottir
Gyrid Jomardottir
Asgerd Uglubathrdottir
Rafarta Tofidottir
Gudbjorg Austmathrdottir
Ingunn Onundottir
Tola Iogæirdottir
Gyrid Skapdottir
Ormhild Ulfketildottir
Ketiloy Thorstardottir
Hallberta Flokidottir
Ragnhild Erlingdottir
Ragnhild Diarfdottir
Gudfinna Ingimardottir
Ginnlaug Sorlidottir
Brynhild Refdottir
Thorhild Arnvidottir
Thyri Guthrothdottir
Arnora Gizordottir
Jorunn Eirikdottir
Abi Magnusdottir
Asdis Thokodolfdottir
Solveig Ingibjorgdottir
Hallgerd Halladottir
Thorkatla Eyjolfdottir
Hervor Gunbjorndottir
Thorfrid Isulfdottir
Styrlaug Hundolfrdottir
Drifa Thorkeldottir
Thurid Koridottir
Yri Oswaldottir
Hrefna Saxidottir
Hrefna Starolfdottir
Hallberta Thordottir
Hallgrim Alfarindottir
Asfrid Gunnlæifdottir
Fridgerd Sturladottir
Arngunn Ulfrikdottir
Asgard Grithdottir
Arnkatla Hlennidottir
Gudrun Ulfbjorndottir
Matilda Asmundottir
Steinunn Balkidottir
Asny Englidottir
Ragneid Orlygdottir
Valborg Raudebjorndottir
Æstrid Torstendottir
Asgerd Svafardottir
Signy Thorsteindottir
Ingegärd Snæbjorndottir
Aslaug Ljotdottir
Gudrid Haflididottir
Thkatla Hængdottir
Ingibjorg Arnljotdottir
Hrodny Vandradottir
Arnkatla Hottdottir
Thkatla Tofidottir
Arnbjorg Visätedottir
Tonna Jarlabankidottir
Ulfheid Fastulfdottir
Tonna Kolskeggdottir
Thorgerd Gærrardottir
Valborg Thorhalldottir
Geirlaug Johandottir
Gæierlaug Haddottir
Hild Kardottir
Guðný Finnvidottir
Audbjorg Beinerdottir
Nidbiorg Refdottir
Solveig Starridottir
Gudrid Griotgardottir
Thorgerd Anakoldottir
Turid Skeggdottir
Ljot Ævardottir

#### First names
Estrid
Ulfeid
Thorvor
Grelod
Frideburg
Halldora
Þuriðr
Ragneid
Thorfrithr
Ketiloy
Thkatla
Asta
Ogn
Bjorg
Brynhild
Thorkatla
Ingulfrid
Holmfrid
Ingirun
Reginleif
Hrafnhild
Æstrid
Olof
Svanhild
Svala
Hallgerd
Greiland
Thorhalla
Gjaflaug
Frideburg
Ingun
Nidbjorg
Thorgrima
Gyrd
Groa
Matilda
Thorgrima
Herkja
Sæunn
Freygerd
Guðný
Olof
Thjodhild
Ermingard
Ingunn
Gudney
Alfdis
Thorljot
Armod
Brynhild
Gæierlaug
Thorljot
Holmfrid
Yri
Ranveig
Ulfheid
Freygerd
Aud
Frideburg
Alfeid
Skuld
Raghild
Fridgerd
Ragneid
Thora
Oddny
Hlif
Solveig
Hungerd
Hallgrim
Thorfinna
Thorvor
Torgärd
Asa
Ormhild
Ljot
Osk
Astrid
Gerd
Gudfinna
Ingegärd
Yrsa
Fastvi
Joreid
Styrlaug
Ingigerd
Rafarta
Gudney
Dalla
Grimhild
Dalla
Ragnhild
Arnbjorg
Thorvor
Ogn
Gunnvor
Solveig
Ginnlaug
Grima
Thraslaug

#### Last Names
Bjarkidottir
Karlidottir
Sigguatrdottir
Thialfidottir
Thokodolfdottir
Svartlingrdottir
Assurdottir
Bjalkidottir
Frostulfdottir
Iridottir
Tjorvidottir
Iridottir
Hreitharrdottir
Ufidottir
Grimwaldottir
Vertlithidottir
Ketilldottir
Thoroddottir
Northridottir
Vikardottir
Herlaugdottir
Hlodvirdottir
Gætirdottir
Vardottir
Sigfusdottir
Edgardottir
Mannidottir
Jarnskeggidottir
Alidottir
Bjorndottir
Leiknirdottir
Fornidottir
Hallfridottir
Tufidottir
Bjorgulfdottir
Gizurdottir
Gullidottir
Hlennidottir
Asfrithdottir
Stigandidottir
Sigeferthdottir
Arondottir
Sigewulfdottir
Arnlaugdottir
Hakondottir
Øystæindottir
Tjorvidottir
Bragidottir
Thoroddottir
Gunnhautrdottir
Sigehelmdottir
Herlaugdottir
Throstdottir
Skardidottir
Arngrimdottir
Thorbergdottir
Singasvendottir
Hrollaugdottir
Knutdottir
Ingjaldottir
Borgardottir
Asvaldottir
Hranfastdottir
Holmgavtdottir
Gamaldottir
Gylfidottir
Styrbiorndottir
Starolfdottir
Hreidadottir
Skjaldulfdottir
Oddottir
Starolfdottir
Orestdottir
Asulfdottir
Armodottir
Bergvidottir
Thorleifdottir
Ingemardottir
Hvitserkdottir
Valbrandottir
Vogdottir
Bjorndottir
Geirsteindottir
Ingifastdottir
Knutdottir
Skjoldottir
Gærrardottir
Gunnhautrdottir
Guthormdottir
Beinirdottir
Thidrandidottir
Samdottir
Vikardottir
Bjorgulfdottir
Lytingdottir
Vigotdottir
Karldottir
Kalfdottir
Thorfinndottir
Osvaldottir

## [Swedish name generator](https://www.fantasynamegenerators.com/swedish-names.php)

### Male

#### Full names
Edward Laxman
Faje Ekström
Wilmer Söderlund
Bertil Hellberg
Roger Sundin
Hannes Holmlund
Torsten Angström
Bertil Brodd
Herse Schauman
Roger Fredholm
Adrian Malmgren
Arfast Egnell
Per Öberg
Hugo Ågren
Bertil Lundström
Fredrik Selander
Öne Dalin
Samuel Åberg
Ebbe Holmlund
Elliot Lindeman
Robert Lundmark
Sture Nordlund
Arendt Ahlund
Karl Wahlberg
Casper Drakenberg
Bror Antonsson
Edvard Hägg
Hindrik Carlsson
André Odenberg
Segol Lagerfeld
Harry Källström
Edvin Lindskog
Kevin Sjöström
Anders Rosenquist
Lucas Degermark
Joacim Aberg
Oliver Bruun
Robert Mattisson
Svante Ulf
Alexander Palmstruch
Segol Ekberg
Elias Lundgren
Adrian Lagerquist
Melker Strandberg
Johnny Odenberg
Benjamin Bergman
Ingvar Nordquist
Arvid Söderberg
Christian Lagerfelt
Alex Almgren
Örjan Aspelund
Odert Brahe
Leo Qvist
Nicholas Englund
Karl Lindblom
Jack Söderberg
Carl Palmstruch
Joel Lundquist
Öne Sandell
Valentin Augustsson
Ored Ceder
Göran Larsson
Zakarias Carlsson
Ville Skoog
Zacharias Ossler
Astrad Lagerkvist
Gjöl Haglund
Gärdar Lundberg
Maximilian Palmcrantz
Vensel Enquist
Magnus Wahlgren
Tron Persson
Allan Söderlund
Henrik Lagerfeld
Oskar Ohlin
Ored Stenström
Leonard Jansson
Christer Fagerudd
Oskar Linderoth
Ravel Lind
August Frisk
Faje Malmkvist
Gunnar Rehnquist
Tommy Malmqvist
Gjur Sundin
Rune Samuelsson
Maximilian Olofsson
Tobias Crusenstolpe
Casper Ohlson
Sven Dalin
Wilmer Lennartsson
Folke Ekdal
Filip Marklund
Leonard Aspelund
Joen Richardsson
Eddie Malmqvist
Orvar Bjorklund
Valdemar Aberg
Per Blom
Natanael Stenbeck

#### First names
Ravel
Emanuel
Segol
Niklas
Olof
Oskar
Theo
David
Sackarias
Gjöl
Charles
Melker
Thomas
Carl
Samuel
Theodor
Lennart
Olov
Fingal
Birger
Sixten
Simon
Arne
Max
Bengt
Valdemar
Vilhelm
William
Ernst
Magnus
Bo
Leon
Roland
Ernst
Segol
August
Isak
Viggo
Philip
Gjohl
Mikael
Simon
Elvin
Christian
Love
Ögge
Oscar
Linus
Knut
Knut
Vernik
Stefan
Nataniel
Åke
Axel
Isac
Zacharias
Sture
Önde
Odert
Joacim
Knut
Arendt
Daniel
Jonas
Jacob
Oskar
Sackarias
Erengisle
Hugo
Fredrik
Viggo
Ingvar
Bertil
Josef
Natanael
Mats
Arvid
Göran
Jonathan
Rikard
Olle
Anders
Odert
André
Gösta
Ingmar
Sigge
Zakarias
Erik
Christian
Erengisle
Richard
Fardhe
Emanuel
Holvaster
Hans
Sone
Elis
Alf

#### Last Names
Stenbeck
Nordlund
Eriksson
Cederström
Persson
Skoog
Blom
Quist
Dahlman
Palme
Torvalds
Heidenstam
Frisk
Lindblom
Englund
Fältskog
Selander
Hammarström
Lagerquist
Rosenblad
Forsman
Rosenqvist
Norberg
Sundström
Skarsgård
Hägglund
Malmkvist
Lundgren
Hallström
Dahlquist
Norddahl
Malmkvist
Ekholm
Qvist
Bruun
Dahlin
Holm
Edgren
Hjertsson
Augustsson
Mattisson
Olander
Dahlberg
Lindskog
Blomstedt
Lagerkvist
Cederström
Lundin
Mattson
Engberg
Quist
Dahl
Lind
Dahlström
Almgren
Ekdahl
Hjertsson
Sohlmann
Malmberg
Lundquist
Lindström
Dalin
Sundberg
Gylling
Hedlund
Englund
Magnuson
Åberg
Frisk
Eriksson
Antonsson
Angström
Marklund
Marklund
Crusenstolpe
Lagerquist
Molander
Lötvall
Nordström
Sundin
Svärd
Sjöholm
Blomgren
Odenberg
Egnell
Marklund
Blomquist
Adelsköld
Akerman
Norberg
Holm
Lindblom
Sörenstam
Palmstruch
Sparv
Lindblad
Mattisson
Sundin
Hellberg
Sandberg

### Female

#### Full names
Kira Malmsten
Oleana Hansdotter
Alina Wahlberg
Sara Heidenstam
Fanny Henriksson
Clara Svensson
Leona Selander
Gabriella Hansson
Alice Lindquist
Gillian Bergman
Ronja Degermark
Gunborg Bergqvist
Marie-Louise Ekholm
Camilla Bergquist
Bea Forsman
Tyra Östberg
Elise Richardsson
Emmelie Hopp
Leila Lundin
Ingegerd Östberg
Madeleine Lindblad
Anette Holgersson
Aimée Cederström
Vilma Söderberg
Nicole Bergman
Tyra Ekholm
Beatrice Cederström
Tuva Järnefelt
Ingiärd Blix
Ragiähl Lundin
Elisabet Borg
Milly Dahl
Astrid Ekman
Victoria Hallström
Agneta Stenström
Mimmi Lund
Nicolina Gustafson
Bianca Gustafson
Tuva Gustafson
Britt Hellqvist
Millie Hedlund
Inga Skarsgård
Adele Hagelin
Hedda Olander
Birgitta Sörenstam
Asgärd Bloch
Veronica Dahlgren
Vilda Ljung
Jesca Sandell
Joanna Skarsgård
Sofia Odhner
Elsa Enquist
Saga Bjorklund
Beata Jacobsson
Fransiska Skarsgård
Svea Ahlgren
Viktoria Skoog
Filippa Afzelius
Mimmi Hellberg
Ann-Louise Blomgren
Simona Odhner
Nadia Fagerudd
Vilda Dahlgren
Locis Palmstruch
Margit Englund
Samanta Bergkvist
Hanna Nordquist
Kerstin Malmkvist
Astrid Sjögren
Filippa Haglund
Fransiska Sjöholm
Alina Asplund
Linda Hagerström
June Skarsgård
Emilia Samuelsson
Jasmine Ceder
Sally Degermark
Therese Blomgren
Carina Jacobsson
Nadja Dahlberg
Josefine Blomqvist
Katja Svensson
Mikaela Wahlberg
Joanna Bergh
Veronica Wahlberg
Tone Akerman
Jackie Fältskog
Filippa Sörenstam
Bella Enquist
Emmely Edgren
Maj-Gun Simonsson
Ingiärd Söderberg
Ottilia Palmstruch
Gunilla Sandberg
Miryam Hellberg
Malin Vikström
Gunilla Hallström
Siri Hallström
Ellie Norddahl
Lisette Marklund

#### First names
Olivia
Beatrice
Marie-Sofie
Sanna
Tyra
Louisa
Julia
Elsa
Ellena
Therese
Pernilla
Simone
Mia
Helen
Madeleine
Greta
Rebecka
Adeline
Elisabeth
Emelie
Edith
Isabelle
Ellen
Emmy
Katja
Adeline
Emmely
Joanna
Carina
Therese
Ingeborg
Hedvig
Lina
Joanna
Karolina
Rut
Maj-Britt
Gunborg
Sofie
Adele
Filippa
Freja
Adeline
Gunvor
Alma
Gun
Britta
Katri
Gunhild
Adele
Wilma
Nellie
Jennifer
Freya
Ronja
Fia
Madeleine
Nicole
Kristin
Beata
Nellie
Helen
Leona
Katja
Jesca
Mira
Beata
Moa
Tove
Miriam
Mimmi
Jenny
Elsi
Anja
Aimée
Viviana
Carina
Sofie
Helen
Josefine
Emilie
Carina
Minna
Stella
Felicia
Majken
Jennifer
Märta
Karolina
Andrea
Mathilde
Anne
Elsi
Katja
Freja
Isabelle
Fanny
Helen
Vilda
Melissa

#### Last Names
Sanddahl
Lindblom
Östlund
Rehn
Akerman
Hermansson
Wikström
Fredholm
Borgström
Jönsson
Edström
Rosenquist
Nordlund
Syrén
Sparre
Lagerqvist
Forsman
Sanddahl
Ekholm
Hägg
Sjöström
Nilsson
Lötvall
Sköld
Svensson
Lagerlöf
Syrén
Simonsson
Sundin
Lundström
Sandström
Palmcrantz
Nilsson
Sandell
Ulf
Jacobsson
Aberg
Svensson
Ekbom
Hagerström
Augustsson
Richardsson
Jacobsson
Brodd
Söderlund
Svensson
Berglund
Södergren
Bjorkman
Degermark
Rehn
Lundgren
Wallenberg
Malmsten
Ljung
Lundberg
Antonsson
Isaksson
Stenbeck
Degermark
Lötvall
Anderberg
Hammarberg
Sörenstam
Sandberg
Hedberg
Marklund
Drakenberg
Almgren
Holmquist
Malmsten
Hansdotter
Sundin
Anderberg
Wahlberg
Widforss
Dalin
Akerström
Söderberg
Akerström
Selander
Norberg
Nordlund
Ulf
Dahl
Blomqvist
Malmsten
Blomqvist
Moller
Hellqvist
Ekbom
Sundström
Angström
Edlund
Palmstruch
Johnsson
Östberg
Adelsköld
Sandberg
Jansson

## [Icelandic name generator](https://www.fantasynamegenerators.com/icelandic-names.php)

### Male

#### Full names
Kaj Arnúlfsson
Kristdór Marlonsson
Vili Eyleifsson
Vopni Kristvaldsson
Francis Stefnisson
Kristján Dantesson
Steinberg Jónarsson
Jósúa Vilhjálmsson
Náttúlfur Ugluspegilsson
Hervar Högnason
Þórar Sigmundsson
Ingþór Ívansson
Sváfnir Viljarsson
Toddi Jónarsson
Nóam Valtýsson
Kristens Hraunarsson
Hrómundur Sírusarson
Hylur Mörðsson
Ingmar Auðmundsson
Þorleifur Guðveigsson
Guðbjörn Wilhelmsson
Ari Patricksson
Sigri Hávarðsson
Sæmundur Reidarsson
Erasmus Sandelsson
Knútur persson
Eymar Leonardósson
Svani Dufþaksson
Kristmundur Friðriksson
Sæmar Hallsteinsson
Brimir Sigurgrímsson
Bambi Hjaltalínsson
Freyviður Svanhólmsson
Jósavin Snjólfsson
Friðlaugur Rexson
Gilmar Sófusarson
Valbjörn Traustason
Óliver Eisson
Hólmgrímur Geirtryggsson
Óðinn Ketilsson
Valþór Gylfason
Tindur Hagalínsson
Nývarð Friðmundsson
Hrafnbergur Geirfinnsson
Herbert Dagbjartsson
Oddbergur Grétarsson
Muggur Óðinsson
Hymir Annelsson
Þórólfur Sigbjörnsson
Snælaugur Þjóðgeirsson
Hjálmar Sandrason
Valves Sæmannsson
Abel Svörfuðsson
Alli Vilhjálmsson
Reinhold Bjólfsson
Siglaugur Engiljónsson
Sírus Leifsson
Hafgrímur Hjálmtýsson
Arnlaugur Rúdólfsson
Willum Betúelsson
Þorleikur Harrason
Végeir Arilíusarson
Benóní Austarsson
Bergsveinn Asaelsson
Stefan Svangeirsson
Fálki Olavsson
Vinjar Vigsson
Skröggur Sigbjörnsson
Karles Óliversson
Úlfgeir Svanbjörnsson
Bertel Varmarsson
Ásmar Konstantínusarson
Evald Blængsson
Sigfinnur Skrýmisson
Hávarr Jeremíasarson
Elvis Þorvarsson
Issi Rafnarsson
Gautviður Hergeirsson
Þórsteinn Freyviðsson
Rolf Sigbergsson
Amor Dagbjartsson
Sigríkur Lundason
Reginn Svansson
Elmar Villason
Gaukur Jóhannesarson
Bjarmi Lindarsson
Lóni Þórgnýsson
Ástvaldur Nonnason
Mías Sigurþórsson
Snjóki Katarínusarson
Vífill Gígsson
Þórhalli Arthúrsson
Rafnkell Steinsson
Úranus Vápnason
Ástmar Álfgrímsson
Tarfur Siglaugsson
Fannþór Móason
Klængur Borgarsson
Kalmar Skellisson
Bótólfur Sæþórsson

#### First names
Daggeir
Snæbjörn
Ebbi
Mikjáll
Hjálmþór
Feykir
Holti
Þórmundur
Árgeir
Jonni
Pálmar
Hængur
Bergvin
Tristan
Ísarr
Skrýmir
Heiðberg
Fannberg
Reyr
Heinrekur
Breki
Ubbi
Rasmus
Zakaría
Tjörfi
Valmundur
Halldór
Antóníus
Baui
Oddþór
Sírus
Brynjúlfur
Arnúlfur
Sírnir
Hárlaugur
Hólmgrímur
Angi
Aðalbjörn
Fíus
Neptúnus
Laufar
Tobías
Bergmar
Óli
Heiðmundur
Bjartur
Skrýmir
Oddþór
Thorberg
Skær
Fránn
Holgeir
Vagn
Fólki
Vilmundur
Sigurmundur
Steinberg
Sæbjörn
Þjálfi
Ingiberg
Enok
Garðar
Þjóðvarður
Steingrímur
Friðberg
Óttar
Hróðgeir
Jónsi
Gestar
Steindór
Sveinbjörn
Tryggvi
Lúðvík
Maximus
Berg
Ían
Richard
Demus
Fossmar
Reykdal
Allan
Bergfinnur
Mýrkjartan
Freybjörn
Tumas
Lindberg
Skafti
Muggur
Siglaugur
Eyleifur
Baui
Dittó
Evald
Jason
Kristdór
Magngeir
Unnþór
Þjóðmar
Reynir
Hólmfastur

#### Last Names
Hólmgrímsson
Ingimarsson
Daríusarson
Öxarsson
Hnefilsson
Pétsson
Elmarsson
Ástvinsson
Nökkvason
Unnþórsson
Birtingsson
Rögnvarsson
Jochumsson
Eyvindsson
Kaktusarson
Marzilíusarson
Merkúrsson
Benonýsson
Rósmundsson
Skírnisson
Edgarsson
Ferdínandsson
Daggeirsson
Sófóníasarson
Ásbergsson
Hansson
Arason
Finngeirsson
Þorgarðsson
Tóason
Hugósson
Hildisson
Kristvarðsson
Eyríksson
Kjartansson
Vífilsson
Guðbjörnsson
Sævarsson
Eybergsson
Bernhardsson
Christophersson
Geirólfsson
týsson
Gottskálksson
Þórmundsson
Þorgilsson
Daríusarson
Antóníusarson
Sigurleifsson
Hænisson
Kristjónsson
Vernharðsson
Júlíusarson
Hjálmtýsson
Jósúason
Ýmisson
Bylsson
Aldarsson
Gunngeirsson
Sesilsson
Friðvinsson
Hrafnbergsson
Hjálmgeirsson
Bresason
Valentínsson
Arnsteinsson
Vestarsson
Sigjónsson
Sumarliðason
Benónýsson
Gregorsson
Rudolfsson
Oddvarsson
Mekkinósson
Vilbogason
Vigtýsson
Greppsson
Sillason
Rannversson
Brynjúlfsson
Árnason
Þjóstólfsson
Fúsason
Bertelsson
Freymóðsson
Sumarliðason
Heiðbertsson
Amosarson
Ronaldsson
Dýrmundsson
Geirmundsson
Fannbergsson
Lyngarsson
Rexson
Arnórsson
Húnsson
Arnmóðsson
Bersason
Þorvaldsson
Rósarsson

### Female

#### Full names
Vera Laufarsdóttir
Móníka Sigsteinsdóttir
Dalía Ásgilsdóttir
Gunnvör Leonardsdóttir
Árbjört Arndórsdóttir
Auðna Kormáksdóttir
Karla Herbjörnsdóttir
Marlaug Michaelsdóttir
Erin Lyngþórsdóttir
Ey Kristlaugsdóttir
Enea Hólmarsdóttir
Ýlfa Gilbertsdóttir
Dagrún Þorkelsdóttir
Loftveig Theódórsdóttir
Jóríður Fálkadóttir
Þórvör Haddadóttir
Álfrún Dalísdóttir
Benedikta Svafarsdóttir
Friðfinna Siguroddsdóttir
Ísmey Ketilbjörnsdóttir
Kormlöð Signarsdóttir
Snjáfríður Bauadóttir
Díma Jósefsdóttir
Elvi Vigfúsardóttir
Marí Heiðmundsdóttir
Íva Williamsdóttir
Ólafína Bjarnleifsdóttir
Sera Elínbergsdóttir
Bobba Sölvarsdóttir
Malika Erlendsdóttir
Beata Arngilsdóttir
Matthía Andradóttir
Bergný Víðisdóttir
Halldóra Ívarsdóttir
Íma Waltersdóttir
Marít Styrkásdóttir
Mábil Auðunsdóttir
Marey Þrymisdóttir
Hrafnlaug Mjölnisdóttir
Hildiríður Kristleifsdóttir
Kalla Birkisdóttir
Sía Jesardóttir
Bjarný Sæadóttir
Jódís Viðjarsdóttir
Lind Snæringsdóttir
Selka Þórhallsdóttir
Úlfey Tristansdóttir
Arnrún Sigvaldadóttir
Frán Fríðsteinsdóttir
Ástþrúður Sighvatsdóttir
Benía Abrahamsdóttir
Vera Kíransdóttir
Sonný Gizsdóttir
Amalía Jarfadóttir
Grethe Snævarsdóttir
Fanny Michaelsdóttir
Ísdögg Bergmannsdóttir
Esmeralda Ívarsdóttir
Hertha Rolfsdóttir
Ronja Brynsteinsdóttir
Dómhildur Siggeirsdóttir
Kía Auðmundsdóttir
Úlfa Arthsdóttir
Emý Thorbergsdóttir
Rósinkara Kornelíusardóttir
Hjálmey Styrbjörnsdóttir
Brynfríður geirsdóttir
Benidikta Sýrusardóttir
Bríet Lórensdóttir
Lara Oddþórsdóttir
Kormlöð Kjóadóttir
Ylva Jaggersdóttir
Úa Þórmundsdóttir
Veronika Garibaldadóttir
Viktoría Maggadóttir
Bergrún Snjólfsdóttir
Ann Sturludóttir
Ríta Línbergsdóttir
Silka Vinjarsdóttir
Ingilaug Milladóttir
Eldey Gígjarsdóttir
Geirdís Elvarsdóttir
Alexis Lásdóttir
Donna Dagfinnsdóttir
Oddfreyja Hermundsdóttir
Arnborg Eronsdóttir
Svaney Borgþórsdóttir
Hjálmfríður Hræreksdóttir
Benía Bertadóttir
Fold Eggþórsdóttir
Bogdís Þórhallsdóttir
Sigurveig Guðsteinsdóttir
Isabel Dalísdóttir
Miriam Eðvaldsdóttir
Markrún Vigradóttir
Rósinkransa Vatnarsdóttir
Marsibil Hrómundsdóttir
Ástbjört Dagbjartsdóttir
Línhildur Krisardóttir
Vök Sveinmarsdóttir

#### First names
Ester
Heiðlaug
Otta
Betanía
Manúela
Sólrún
Árnheiður
Dís
Elka
Elsý
Lousie
Elvi
Franzisca
Loftveig
Millý
Oddleif
Karlotta
Nóa
Bil
Hervör
Magnea
Salbjörg
Heida
Herbjörg
Ingimunda
Lýdía
Sesselía
Dögun
Guðbjört
Dúnna
Asía
Vagnfríður
Natalía
Gunnþóra
Hraundís
Arnrún
Monika
Edil
Sigursteina
Ævi
Ester
Annetta
Tindra
Alexstrasa
Marey
Bjarglind
Oddveig
Þórleif
Efemía
Silvana
Elizabet
Arney
Himinbjörg
Sigurlinn
Kata
Geirbjörg
Ellín
Malena
Oddrún
Irma
Nóa
Munda
Elba
Jónbjörg
Bera
Aríella
Danhildur
Árveig
Ólöf
Arinbjörg
Sigurjóna
Esther
Heba
Charlotte
Gullý
Hallkatla
Tína
Halldís
Járnbrá
Björgheiður
Gilla
Þorbjörg
Végerður
Geirlaug
Evey
Millý
Röskva
Randí
Gunnbjörg
Júlína
Esther
Magnea
Agneta
Petrós
Bláklukka
Kára
Jasmín
Árþóra
Ásborg
Njóla

#### Last Names
Morgansdóttir
Sigurliðadóttir
Oddleifsdóttir
Benónýsdóttir
Meyvantsdóttir
Jónsteinsdóttir
Þórhaddsdóttir
Júlíusardóttir
Oddsdóttir
Jörgensdóttir
Haddsdóttir
Vígbergsdóttir
Engilsdóttir
Dynþórsdóttir
Vilbogadóttir
Otharsdóttir
Eymarsdóttir
Körmudóttir
Vörðsdóttir
Lindadóttir
Ingþórsdóttir
Kamilusardóttir
Mummadóttir
Zóphaníasardóttir
Þormóðsdóttir
Reynarðsdóttir
Esradóttir
Kolsdóttir
Sókratesardóttir
Robertsdóttir
Geisladóttir
Narfadóttir
Borgúlfsdóttir
Vilmundsdóttir
Heiðbergsdóttir
Kolsdóttir
Magnúsardóttir
Ómarsdóttir
Sælaugsdóttir
Játvarðsdóttir
Emisdóttir
Ludvigsdóttir
Þórhaddsdóttir
Starradóttir
Almarsdóttir
Björgólfsdóttir
Stirnisdóttir
Ísleifsdóttir
Ferdínandsdóttir
Arnmundsdóttir
Jóannsdóttir
Fjölnisdóttir
Arthsdóttir
Engiljónsdóttir
Svavarsdóttir
Eymarsdóttir
Gunnarsdóttir
Sigþórsdóttir
Hafbergsdóttir
Elentínusardóttir
Jacksdóttir
Hugleiksdóttir
Þyrnisdóttir
Bergfinnsdóttir
Ingimundsdóttir
Levísdóttir
Andrésdóttir
Haddsdóttir
Þorvarðsdóttir
Flosadóttir
Oddleifsdóttir
Góadóttir
Kristleifsdóttir
Anesardóttir
Ellertsdóttir
Klemensdóttir
Ellísardóttir
Brynjólfsdóttir
Kristersdóttir
Íansdóttir
Árbjörnsdóttir
Alexandersdóttir
Jónsdóttir
Adríelsdóttir
Gnúpsdóttir
Hróðólfsdóttir
Sigursveinsdóttir
Benonýsdóttir
Mjölnisdóttir
Austmannsdóttir
Jónsadóttir
Mathíasardóttir
Leonardsdóttir
Vilbertsdóttir
Normannsdóttir
Þyrnisdóttir
Þóradóttir
Hlégestsdóttir
Sigursteinsdóttir
Íansdóttir

## [Dwarven name generator](https://www.fantasynamegenerators.com/dnd-dwarf-names.php)

### Male

#### Full names
Khargrom boulderstrike
Gryren goblinhorn
Bhargrim eventale
Thuldohr sterngrace
Bhelmor loudfound
Emdrus drorthehr
Gremgrun drunkukehk
Galdor drelbronn
Kramdur strobronohk
Bramgarn tuzzock
Dargrum mightstrike
Garman keenkind
Vonnik firsttankard
Thelmyl bravesong
Thyrig moltenfist
Duliggs drunhohehk
Hjulthran telbrekon
Benron drotgireg
Ranmiir femneg
Dalmond hardohr
Emrig deepbeard
Tormyl goldstrike
Reggus brightkith
Thodohr smugbeard
Vondal goblintale
Thaldar grunhack
Thaldar gudukahk
Hjulmund gronherk
Farmand datgagehr
Bhargrom calbreg
Magrim biggrip
Horbrek drunkbranch
Gralgram brightbottom
Mornar eveneye
Brammar frostsong
Garkuhm gerugurk
Galgrum glullek
Thymun rukonerk
Bromren durdam
Beladin throdirk
Ebrigg greatheart
Tornus burrowreach
Muirthran steelblade
Ermthrun hammerstorm
Thelmiir coldstone
Bhelgrim thrurthiriln
Ebdrom straeldehk
Grytharm lebruvinn
Hormiir melbrakir
Bramdor fungahk
Armdan frozenkin
Grennur battleroar
Magrus giantaxe
Brummiir moltenbrow
Galgram broodbreath
Harnyl bromnahek
Horgrom drefdihar
Gulren makurug
Germin hukanahk
Amdus laederihk
Theltharn steelflight
Baldal hammerbottom
Hormor deepkin
Rankuhm darkfinder
Thormar ironstorm
Hjalnum gezzegart
Bardir galdack
Gimnik gaefderk
Gernus raelluk
Darthrun lulduhr
Melmyr braveheart
Balrom battleshield
Thokyl braveboot
Admiir halfbelch
Kargram ironbottom
Brandren brudovik
Bharnir thrabrohaln
Bhardek colbrer
Emkahm delbrehr
Krommun brufdack
Banmek flintrock
Horkam drunkpass
Armdahr firstboots
Dulnus frostback
Hjuladin mightkind
Armrik tubreg
Thardain grenginag
Thulmand bathgeran
Magrim gortherk
Bunkuhm rufdeck
Mordal flintgrace
Galgrum hardhelm
Harnir hammerstand
Armnus truemight
Thurgrim moltenhorn
Gremadin funhurenn
Daermur borthuln
Granrak hungovohk
Mordrom thronkenonn
Barkahm bredevohr

#### First names
Baermond
Amrum
Thuldohr
Bunnus
Bhartharm
Belren
Urmgrim
Brannam
Mormyr
Ebtharm
Rotrak
Muirdren
Gryren
Adgarn
Hjulthrum
Therdur
Dalthrun
Hjulrum
Raggrun
Umrim
Tordram
Daldan
Bertharn
Bengram
Bromthran
Brumrigg
Adthrum
Granmur
Torthrun
Rotgram
Urmrig
Regren
Krombek
Ebdal
Daergrum
Ebgrum
Karthrun
Ermrum
Hulkom
Grynik
Urmdur
Kramdus
Hjoltharm
Grengrun
Gernur
Thelkyl
Ebdren
Karnus
Ragdram
Daernir
Hjulron
Hjalnur
Ebmiir
Dalrim
Rotdan
Bentharn
Thulkum
Vonron
Thynar
Brammin
Adrigg
Brandain
Maltharm
Thergram
Muirthran
Brandram
Hjulmond
Malgrun
Thalgarn
Umtharn
Hordram
Thydrak
Bergarn
Daernyl
German
Amkum
Muirgrun
Hurtharm
Bandal
Hordor
Armdar
Thelmand
Bromron
Farmor
Armmor
Gulkum
Bunmund
Bramdrus
Umnar
Rotnar
Krommor
Ebgram
Thoriggs
Gralron
Muirgram
Guldahr
Hjolmyl
Tormun
Balmur
Vonmor

#### Last Names
loudbleeder
silvershaper
burrowaxe
flintfall
greatforge
haezzahor
bruduck
drunhir
drunguvek
drangovar
battleward
broadstorm
sternblood
flintbreaker
marblebelt
straekenn
gukahk
cudurock
brudam
tomnahr
smugfound
smugfront
giantboots
madgift
broaddelver
razzort
ganhukorr
mamnukehr
gluthgavock
canhoneln
boldeyes
marbletankard
burrowback
sternpast
moltentankard
burun
bukir
struthgur
gamnag
threlbrerert
blackmight
bloodfeast
braveshaper
mountaindelver
truebreath
gollurihk
mebrovark
tadarork
gakark
febrohurk
brawnrest
bronzefinder
starkreach
greatgift
bronzetankard
brarek
cangavinn
lenkokinn
fonkahk
retgehk
trollbreaker
goldenbleeder
frozenpass
starkstone
madbuster
thranherarr
druthgoln
goderug
glukirehk
gukovirk
starkbreath
brightmight
strongbelch
keenroar
smugkith
turdann
fefdoraln
grurunn
huregen
molbriln
hammerfront
flintkin
everward
broadhand
mountainguard
cengivihr
loldeveck
glatgaln
tudugen
drokihihk
stoutstrike
darkroar
stormmane
evenbuster
trollmane
taemnivehk
toldeher
balbrum
thruheram
larthuhon

### Female

#### Full names
Mistyn keenboots
Barnys wildhand
Tysria hammerhand
Lesma hammerfront
Deardielle deepkind
Jenndryn tarthim
Tasnura fellem
Ketniss gungahr
Brylma thrutgereg
Anvan strebrinark
Rynwaen boulderbreath
Maerglian wildmight
Eldora broadback
Tyshmora trollstorm
Missael bigfront
Tysdora mudorr
Naervia hellek
Solrielle stralbrahag
Mystin thruthguhirk
Braenmyla morthiken
Daerniss giantfinder
Myrria madbleeder
Tasras boulderhorn
Gymnar firefront
Broldelle frozentankard
Brenmura cohegan
Reynwaen botgerk
Nassmura tezzavek
Baersora glorduhehr
Anglian gengavaln
Karvian trollbreaker
Gwanwaen boldboots
Lysswin loudhold
Kaitnia greatflight
Gwindyl brightgrip
Solwyn fehak
Jinri thrordehr
Nassrin mubrirug
Artin heldom
Kathlyn lebroln
Gernyl greatbreaker
Tishryn silvermight
Mislyl wildmantle
Solma goldbelch
Maevmyla trueeye
Gwintyn cafduhan
Branvia tozzoriln
Tisnura lakuhk
Gerla merthaln
Bonnrielle glolbrugak
Marlen goblinbleeder
Lassdora firstbreaker
Tizdora everstorm
Mystris firefront
Bonvian truekin
Byllewynn tokenn
Arnera totguhk
Brillelyl brarthert
Tiznys lolbrohehk
Dimtin granhuk
Brollinn bravekin
Bretmura loudbeard
Karma broodpride
Eltyn sternkin
Brillenar frosteye
Brolsora monkoraln
Belselle munkavuhk
Kathsael hekeriln
Nasbelle hengerk
Bretris feldur
Ranres sternfury
Marleil gianthand
Tisdyl goblineyes
Jenniss stoutgrip
Barleil louddelver
Gwynla faekovam
Lasria mafdivur
Nysmera genkevon
Brilleva lubrigak
Brilria rahakack
Lysris bloodfall
Gwenres stouthead
Mistnys bighorn
Brulres blackstrike
Brytrielle sternale
Brannan lertheln
Reynbera thrufdinok
Katwaen tutgeln
Marnyl drufdagann
Katdish buthgeg
Tislin loudhold
Misres starksong
Baervan ironbuster
Mystmora frozenhead
Misglian ironpass
Lesrin haldurr
Baerrielle cezzavig
Brallemyla gruduhk
Ranvia glurthavart
Brannar gokarehk

#### First names
Gwinrielle
Byllelynn
Elvan
Rynryn
Nasgiel
Edlyl
Brulsyl
Tisniss
Sarsael
Gemla
Dimgiel
Jinnys
Tisnip
Einri
Einras
Brytleil
Jennlyn
Branleen
Jynlynn
Maermura
Lesswaen
Braennys
Gwynthiel
Lassla
Jynmera
Bralmyl
Nystin
Gwinnora
Gwanleen
Jindryn
Tazwin
Bryldelle
Naervan
Lyesdryn
Kaitlin
Kaitdish
Bryllenys
Katnera
Gwanrielle
Gwynbera
Bonndille
Tysdelle
Mistin
Maevwyn
Bellenura
Naernar
Reddelle
Nalnis
Dimglia
Gymnar
Lesva
Bralleleen
Dimnar
Kaitryl
Bretbelle
Brilla
Brynla
Naermura
Marleil
Gymnura
Bryttyn
Maevria
Nasdyl
Jinlin
Bonnlin
Bralleres
Gwinsael
Naerniss
Gwynryl
Brillema
Brilras
Ingwyn
Mistlynn
Maerva
Tasros
Torrielle
Kathrin
Tasrin
Tysdeth
Kardyl
Tordielle
Gemdryn
Nesselle
Bonnlyn
Tissyl
Lessrin
Edsael
Bellenyss
Bronryl
Nisnis
Elvian
Maevdelle
Lyssva
Taznora
Nassnys
Gwenniss
Myrnis
Brylmyla
Brolsyl
Tishlinn

#### Last Names
hardboot
broodstrike
trollbreath
marblekind
boldbeard
mezzukig
lazzag
fuhem
tozzihan
fumneriln
lightgift
madward
moltenroar
stoutbraid
silverguard
collekan
dardunak
bufdann
febragar
fathger
hammereyes
moltenstone
starkstand
everbane
fireheart
tunhoverr
brungohk
graelbrevaln
lemnahan
hedevek
thunderbraid
frostshaper
lastbelch
thunderbraid
giantfury
fefdok
brakeneck
bungak
cumnunick
rotgerack
bloodbeard
brighttankard
evenbelch
darktankard
trollgrip
gubrugen
hengohk
cunkahk
lethgovug
rothgigem
greatbraid
everstone
ironpass
silvergift
bloodhold
drotgonack
thrubrert
strerik
strenkohag
borugam
burrowblood
goldenbelch
grayrock
gianttale
loudblood
romnivart
dongakart
throngog
hethgeck
grekann
bravebleeder
darkshield
thundergift
drunkhorn
broodfinder
dordegin
malbrakim
drelbrarirk
drodunar
droldehork
sternmask
goldenstand
bighorn
battlebraid
moltenkind
brungack
fenguhen
goldark
lakoln
rerthart
ironfeast
evershaper
bronzesong
moltenpass
hardbelch
drubrovuk
glurthurohr
runhikun
thradivack
dubrageck

# Eldar (Elven) Elven

## [Celtic (Irish) name generator](https://www.fantasynamegenerators.com/irish-names.php)

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Celtic (Welsh) name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Celtic (Scottish) name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Tolkien elven name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Dnd elven name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

# Eldarin (Elven) Japanese

## Japanese name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Old Japanese name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Fantasy elven name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

# Mularir (Tallman) Greek

## Greek name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Greek mythology name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Ancient Greek name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Classical Greek name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names


# Yotunn (Giant) Giant

## Norse name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Old Norse name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Norse mythology name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Fantasy giant name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names