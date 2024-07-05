---
tags:
  - generation
---
Algorithym to generate random names for a campaign.

```JavaScript
((genOptions, hasFirstAndLast) => {

    genOptions.forEach((genType,i) => {
        console.log('###############################-------' + i + '-------####################################')
        const generateNames = () => {
            const result = [];
            for (let i = 0; i < 10; i++) {
                nameGen(genType);
                const arrayOfNames = document.getElementById("result").innerHTML.split("<br>").filter(Boolean);
                result.push(...arrayOfNames);
            }
            return result;
        };

        let result = generateNames()
        if (hasFirstAndLast) {
            console.log('------------------First and last-----------------------')
            console.log((result).join("_"))
            console.log('-----------------------------------------')
            console.log('-----------------First-----------------------')
            result = generateNames()
            console.log(result.map(name => name.split(" ")[0]).join('_'))
            console.log('-----------------------------------------')
            console.log('----------------Last-------------------')
            result = generateNames()
            console.log(result.map(name => {
                const [_, ...rest] = name.split(" ")
                return rest.join(" ")
            }).join("_"))
            console.log('-----------------------------------------')
        } else {
            console.log((result).join("_"))
        }
        console.log('###################################################################################')
    });
})
    ([namesMale, namesFemale], true)
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

## Roman name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Latin name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Ancient Roman name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Italian name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Classical name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

# Dal (Tallman) Hispanic

## Spanish name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Mexican name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Hispanic name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Latin American name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

# Duir (Dwarven) German

## Germanic name generator

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

## Viking name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Medieval German name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Dwarven name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

# Dwelmer (Dwarven) Nordic

## Old Norse name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Viking name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Nordic name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Scandinavian name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

## Dwarven name generator

### Male

#### Full names

#### First names

#### Last Names

### Female

#### Full names

#### First names

#### Last Names

# Eldar (Elven) Elven

## Celtic name generator

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

## Fantasy elven name generator

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