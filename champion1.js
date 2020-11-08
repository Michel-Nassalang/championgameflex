// gestion des noms
joueur1 =document.getElementById('bouton_1');
joueur2 =document.getElementById('bouton_2');
joueur3 =document.getElementById('bouton_3');
joueur4 =document.getElementById('bouton_4');

joueur1.addEventListener('click', nom1);
function nom1(){
    valeur1 = prompt('Veillez saisir votre nom s\'il vous plait');
    document.getElementById('joueur1').textContent = valeur1;
}
joueur2.addEventListener('click', nom2);
function nom2(){
    valeur2 = prompt('Veillez saisir votre nom s\'il vous plait');
    document.getElementById('joueur2').textContent = valeur2;
}
joueur3.addEventListener('click', nom3);
function nom3(){
    valeur3 = prompt('Veillez saisir votre nom s\'il vous plait');
    document.getElementById('joueur3').textContent = valeur3;
}
joueur4.addEventListener('click', nom4);
function nom4(){
    valeur4 = prompt('Veillez saisir votre nom s\'il vous plait');
    document.getElementById('joueur4').textContent = valeur4;
}

//-----------------------------------------------------------------
// gestion des réponses
let reponseA = document.getElementById('rep_a');
let reponseB = document.getElementById('rep_b');
let reponseC = document.getElementById('rep_c');
let reponseD = document.getElementById('rep_d');

const click1 = document.getElementById('f_r');
const click2 = document.getElementById('s_r');
const click3 = document.getElementById('t_r');
const click4 = document.getElementById('fr_r');
//------------------------------------------------------------------
// gestion des questions
let question = document.getElementById('la_question');

question.style.fontFamily = 'Forte';
question.style.fontSize = "40px";
question.style.justifyContent = "center";
question.textContent = " Nous souhaitons la Bienvenue à nos champions";
question.style.color = "gold";
question.style.alignContent = "center";
 let jouer = document.getElementById('jouer');
 function demarrer(){
     jouer.remove('jouer');
     joueur();
 }

 //------------------------------------------------------
// Gestion des points
points1 = getElementById('points_1');
points2 = getElementById('points_2');
points3 = getElementById('points_3');
points4 = getElementById('points_4');
function compteur(points){
    var nombre = ++points;
    return nombre;
}

function joueur(){
    
    question.style.color = "#000";
    question.style.fontFamily=  "calibri";
    question.style.fontSize = "25px";

    question.textContent = "Comment s\'appelle le 1er président du Sénégal ?"
    reponseA.textContent="L.S.Senghor";
    reponseB.textContent="Abdou Diouf";
    reponseC.textContent="Macky Sall";
    reponseD.textContent="Abdoulaye Wade";
        // if (click1.clicked == true){
    //     alert('la réponse est correct. Passons à la suivate');
    // }else{
    //     alert('Oups c\'est raté !!! ');
    // }
    click1.onclick = function(){
        alert('la réponse est correct. Bravo !!! Passons à la suivante');
        // points1.textContent = compteur(Number(points1));
        question.textContent = "Quel est le plus grand université du Sénégal ?"
        reponseA.textContent="UGB";
        reponseB.textContent="UVS";
        reponseC.textContent="UCAD";
        reponseD.textContent="UAS";
        click1.onclick = function(){
            alert('Oups c\'est raté !!!');
        }
        click2.onclick = function(){
            alert('Oups c\'est raté !!!');
        }
        click3.onclick = function(){
            alert('la réponse est correct. Bravo !!! Passons à la suivante');
            question.textContent = "Où se situe le Sénégal ?"
            reponseA.textContent="En Europe";
            reponseB.textContent="En Afrique";
            reponseC.textContent="En Asie";
            reponseD.textContent="En Amérique";
            click1.onclick = function(){
                alert('Oups c\'est raté !!!');
            }
            click2.onclick = function(){
                alert('la réponse est correct. Bravo !!! Passons à la suivante');
                question.textContent = " Quelle était l'ancienne capitale du Sénégal ?"
                reponseA.textContent="Dakar";
                reponseB.textContent="M'Bour";
                reponseC.textContent="Thiès";
                reponseD.textContent="Saint Louis";
                click1.onclick = function(){
                    alert('Oups c\'est raté !!!');
                }
                click2.onclick = function(){
                    alert('Oups c\'est raté !!!');
                }
                click3.onclick = function(){
                    alert('Oups c\'est raté !!!');
                }
                click4.onclick = function(){
                    alert('la réponse est correct. Bravo !!! Passons à la suivante');
                    question.textContent = " Quel est l'arbre qui est dit sacré ?"
                    reponseA.textContent="Le chêne";
                    reponseB.textContent="L'acacia";
                    reponseC.textContent=" Le palmier";
                    reponseD.textContent="Le baobab";
                    click1.onclick = function(){
                        alert('Oups c\'est raté !!!');
                    }
                    click2.onclick = function(){
                        alert('Oups c\'est raté !!!');
                    }
                    click3.onclick = function(){
                        alert('Oups c\'est raté !!!');
                    }
                    click4.onclick = function(){
                        alert('la réponse est correct. Bravo !!! Passons à la suivante');
                        question.textContent = " Le Sénégal est devenu indépendant en :"
                        reponseA.textContent="1960";
                        reponseB.textContent="1955";
                        reponseC.textContent="1987";
                        reponseD.textContent="1943";
                        click1.onclick = function(){
                            alert('Congratulations Bravo !!! Nous vous remercions  de votre participation');
                        }
                        click2.onclick = function(){
                            alert('Oups c\'est raté !!!');
                        }
                        click3.onclick = function(){
                            alert('Oups c\'est raté !!!');
                        }
                        click4.onclick = function(){
                            alert('Oups c\'est raté !!!');
                        }
                        question.style.fontFamily = 'Forte';
                        question.style.fontSize = "40px";
                        question.style.justifyContent = "center";
                        question.textContent = "Merci pour votre participation. Bien de choses à vous !!!"
                        reponseA.textContent=" ";
                        reponseB.textContent=" ";
                        reponseC.textContent=" ";
                        reponseD.textContent=" ";
                    }
                }
            }
            click3.onclick = function(){
                alert('Oups c\'est raté !!!');
            }
            click4.onclick = function(){
                alert('Oups c\'est raté !!!');
            }
        }
        click4.onclick = function(){
            alert('Oups c\'est raté !!!');
        }
    }
    click2.onclick = function(){
        alert('Oups c\'est raté !!!');
    }
    click3.onclick = function(){
        alert('Oups c\'est raté !!!');
    }
    click4.onclick = function(){
        alert('Oups c\'est raté !!!');
    }
    //-------------------------------------------------
    identite1 = document.getElementById('identite1');
    identite2 = document.getElementById('identite2');
    identite3 = document.getElementById('identite3');
    identite4 = document.getElementById('identite4');

    
}
function unclick(identite){

    identite1.style.background= "#fff";
    identite2.style.background= "#fff";
    identite3.style.background= "#fff";
    identite4.style.background= "#fff";
            //--------//
    identite.style.marginTop= "10px";
    identite.style.height= "120px";
    identite.style.border= "3px solid lightblue";
    identite.style.background= "rgb(91, 139, 175)";
    identite.style.borderRadius= "10px";
    identite.style.cursor= "pointer";
}
// let jeu = setTimeout(joueur, 6000);

