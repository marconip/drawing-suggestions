var objetos, item;
objetos = {
    "Animals": ["dog", "cat", "lion", "elephant", "bird", "eagle", "giraffe", "bear", "rhino", "monkey", "turtle", "zebra", "camel", "alligator", "tiger", "horse"],

    "Athletes": ["soccer player", "basketball player", "boxer", "fighter", "runner", "cyclist", "swimmer", "baseball player", "bodybuilder", "skateboarder", "gymnast", "archer"],

    "Comic_Heroes": ["Batman", "Spider-Man", "Wolverine", "Iron Man", "Captain America", "Superman", "Flash", "Hulk", "Thor", "Storm", "Nightcrawler", "Colossus", "Captain Marvel", "Batgirl"],

    "Comic_Villains": ["Joker", "Magneto", "Catwoman", "Deathstroke", "Lex Luthor", "Thanos", "Harley Quinn", "Bane", "Venom", "Scarecrow", "Doctor Octopus", "Mystique"],

    "Disney_Characters": ["Mickey Mouse", "Minnie Mouse", "Goofy (Disney)", "Donald Duck", "Pluto", "Tinker Bell", "Captain Hook", "Peter Pan", "Maleficent", "Pinocchio", "Elsa (frozen)"],

    "Fruts": ["avocado", "pineapple", "banana", "orange", "lemon", "apple", "grape", "watermelon", "coconut", "cherry", "strawberry", "papaya", "passion fruit"],

    "Games_Characters": ["Tracer (Overwatch)", "Winston (Overwatch)", "Ryu (SF)", "Lara croft", "Link (Zelda)", "Cratos (GoW)", "Chun-Li (SF)", "Raiden (MK)", "Scorpion (MK)", "Goro (MK)", "Kitana (MK)", "Sonic", "Mario"],

    "Monsters": ["frankenstein", "vampire", "wolfman", "zombie", "dragon", "godzilla", "dark angel", "mummy", "skull", "ghost"],

    "Scenery": ["house", "building", "farm", "beach", "tree house", "forest", "city", "space", "planet", "waterfall", "mountains", "castle", "destroyed city", "apocalyptic city"],

    "Science_Fiction": ["robot", "supercomputer", "cyborg", "space station", "war machine", "killer robot", "space soldier", "astronaut", "mutant", "drones", "Alien"],

    "Vegetables": ["carrot", "chili", "onion", "garlic", "cabbage", "pepper", "cucumber", "potato", "eggplant", "mushroom", "brocoli"],

    "Vehicle": ["car", "bus", "airplane", "spaceship", "spaceship", "motorcycle", "bicycle", "horse", "train", "parachute", "race car", "truck"],

    "Verbs": ["pulando", "correndo", "caindo", "chutando", "socando", "abaixando", "defendendo", "cansado", "gritando", "sorrindo", "feliz", "triste"],

    "Women": ["Little girl", "child girl", "strong woman", "evil woman", "beautiful woman", "fighter woman", "warrior woman", "bad girl", "hero girl", "villain woman"]
}

var cont = 0;
var numero = getRandomInt(0, 13);///////NUMERO DE OBJETOS (COMEÇA EM 0)///////

//PECORRE TODAS OS OBJETOS E RETONA NO MENU TEMA
for (var item in objetos) {
    var li = document.createElement('li')
    var link = document.createElement('a')
    link.href = 'javascript:void(0)'
    link.className = 'theTheme'
    link.innerHTML = item.replace("_", " ");

    document.querySelector('.themes ul').appendChild(li)
    li.appendChild(link)

    //BUSCA ITENS PARA MOSTRAR SUGESTÃO DO DIA
    if (cont == numero) {
        var listaTema = eval("objetos." + item);
        var doDia = getRandomInt(0, listaTema.length - 1);

        var suggestion01 = document.querySelector('.drawingDay');
        suggestion01.innerHTML = listaTema[doDia];
    }
    cont++;
}

//BUSCA UM ITEM NO TEMA SELECIONADO E RETORNA UMA SUGESTÃO
document.querySelectorAll('.theTheme').forEach(function (el) {
    el.onclick = function () {
        var itensTema = eval("objetos." + el.textContent.replace(" ", "_"));
        var itenEscolhido = itensTema[getRandomInt(0, itensTema.length - 1)];

        document.querySelector('.drawingChosen').innerHTML = "<p>The theme I should draw is...</p>" + "<h2>" + itenEscolhido + "</h2>";

        document.querySelectorAll('.theTheme').forEach(function (le) {
            le.classList.remove("select");
        });
        el.classList.add("select");
    }
});

//MOSTRAR E ESCONDER TEXTOS
var txtHowWorks = document.querySelector(".txtHowWorks");
var linkHowWorks = document.querySelector(".linkHowWorks")

linkHowWorks.addEventListener('click', function () {
    if (txtHowWorks.classList.contains("mostrar")) {
        txtHowWorks.classList.remove("mostrar");
        linkHowWorks.classList.remove("selectLink");
    } else {
        txtHowWorks.classList.add("mostrar");
        linkHowWorks.classList.add("selectLink");
    }
});

//FUNÇÃO PARA CONTAGEM ENTRE NUMEROS 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}