const CAR = {
    owner: "VW",
    price: 1000,
    forward: function() {
        return console.log("Andou");
    }
}
/*
Qualque coisa com um '.', o primeiro parâmetro sempre é um objeto
*/
function $(element) {
    return {
        hide: function () {
            console.log(`Escondendo o elemento ${element}`)
        }
    };
}

$('div').hide();