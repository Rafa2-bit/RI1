const homem_de_ferro  = {
    nome : "Tony Stark",
    codinome : "Homem de Ferro",
    armaPRincipal : "Armadura de ferro",
    velocidade : 80,
    forca : 80,
    resistencia : 85,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}


const thanos  = {
    nome : "Thanos",
    codinome : "Thanos",
    armaPRrincipal : "Manopla",
    velocidade : 65,
    forca : 95,
    resistencia : 100,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}

const thor  = {
    nome : "Thor",
    codinome : "Thor",
    armaPRrincipal : "Mijonir",
    velocidade : 90,
    forca : 95,
    resistencia : 100,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}

const doutor_estranho  = {
    nome : "Stephen Vincent Strange",
    codinome : "Doutor estranho",
    armaPRincipal : "Magia",
    velocidade : 60,
    forca : 75,
    resistencia : 70,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}

const viuva  = {
    nome : "Natasha Romanoff",
    codinome : "Viuva-Negra",
    armaPRincipal : "Pistola",
    velocidade : 50,
    forca : 55,
    resistencia : 65,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}

const homem_aranha  = {
    nome : "Peter Parker",
    codinome : "Homem-Aranha",
    armaPRincipal : "Teia",
    velocidade : 88,
    forca : 75,
    resistencia : 90,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}

const capitao  = {
    nome : "Steave Rogers",
    codinome : "Capitao america",
    armaPRincipal : "Escudo",
    velocidade : 70,
    forca : 80,
    resistencia : 95,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}

const hulk  = {
    nome : "Bruce Banner",
    codinome :"Hulk",
    armaPRincipal : "Bíceps",
    velocidade : 70,
    forca : 100,
    resistencia : 100,
    descricao : function() {
        return "Nome: "+this.nome+"\n"
        +"Codinome: "+this.codinome+"\n"
        +"Arma principal: "+this.armaPRincipal+"\n"
        +"Velocidade: "+this.velocidade+"\n"
        +"Resistencia: "+this.resistencia
    }
}


const personagens =[capitao,hulk,homem_aranha,viuva,doutor_estranho,thor,homem_de_ferro,thanos]



function compararPersonagens(personagens) {
    for (let i = 0; i < personagens.length; i++) {
        for (let j = i + 1; j < personagens.length; j++) {
            console.log("\n\nComparando "+personagens[i].codinome+" com "+personagens[j].codinome+"\n");

            console.log(personagens[i].descricao());
            console.log("\nVS\n");
            console.log(personagens[j].descricao());
            console.log("\n");

            if (personagens[i].forca > personagens[j].forca) {console.log(`${personagens[i].codinome} vence em FORÇA`);}
            else if (personagens[i].forca < personagens[j].forca) {console.log(`${personagens[j].codinome} vence em FORÇA`);}
            else {console.log("Empate em FORÇA");}

            if (personagens[i].velocidade > personagens[j].velocidade) {console.log(`${personagens[i].codinome} vence em VELOCIDADE`);}
            else if (personagens[i].velocidade < personagens[j].velocidade) {console.log(`${personagens[j].codinome} vence em VELOCIDADE`);}
            else {console.log("Empate em VELOCIDADE");}

            if (personagens[i].resistencia > personagens[j].resistencia) {console.log(`${personagens[i].codinome} vence em RESISTÊNCIA`);} 
            else if (personagens[i].resistencia < personagens[j].resistencia) {console.log(`${personagens[j].codinome} vence em RESISTÊNCIA`);}
            else {console.log("Empate em RESISTÊNCIA");}
        }
    }
}

compararPersonagens(personagens);




/*

//Um jeito estranho de saber quem é o mais forte.

function duelo(p1,p2){
    pontosP1 = 0
    pontosP2 = 0
    if(p1 == null){return p2}else if(p2 == null){return p1}
    else{
    if(p1.forca > p2.forca){pontosP1 = pontosP1+1}if(p1.forca < p2.forca){pontosP2 = pontosP2+1}
    if(p1.velocidade > p2.velocidade){pontosP1 = pontosP1+1}if(p1.velocidade < p2.velocidade){pontosP2 = pontosP2+1}
    if(p1.resistencia > p2.resistencia){pontosP1 = pontosP1+1}if(p1.velocidade < p2.velocidade){pontosP2 = pontosP2+1}
    if(pontosP1 > pontosP2){console.log("O personagem "+p1.codinome+" venceu o duelo contra "+p2.codinome); return p1}
    else if(pontosP1 < pontosP2){console.log("O personagem "+p2.codinome+" venceu o duelo contra "+p1.codinome); return p2}
    else{console.log("O duelo saiu em empate. Os personagens "+p1.codinome+" e "+p2.codinome+" não estão mais entre nós."); return null}}

}

const personagens =[capitao,hulk,homem_aranha,viuva,doutor_estranho,thor,homem_de_ferro,thanos]

console.log("O personagem mais forte é "+duelo(duelo(duelo(viuva,thanos),duelo(hulk,homem_de_ferro)),duelo(duelo(capitao,homem_aranha),duelo(doutor_estranho,thor))).nome)
*/