const carre = document.createElement("div");
// modification de l'élément carre pour l'associé à la classe carre -> <div class="carre"></div>
carre.classList.add("carre");

//On se place au niveau du container
const container = document.querySelector("#container");
container.appendChild(carre);

//afficher texte à l'intérieur de la boite
carre.innerText="cliquez ici pour avoir des infos";

//ajouter un évènement
carre.addEventListener("click", function(){
    const monCarre =document.querySelector(".carre");
    //getComputedStyle permet d'accéder à toutes les données css de moncarre
    const style = getComputedStyle(monCarre);
    console.log(style);
    //
    const nomClass="Class : "+monCarre.getAttribute('class')+"\n";//récupère ne nom de la class
    const background = "- Background color : " + style.backgroundColor+ "\n";
    const color = "- Color : " + style.color +"\n";
    const height = "- Height : "+ style.height+"\n";
    const width = "- Width : "+ style.width+"\n";
    const display = "- Display : "+ style.display+"\n"; 
    const font = "- Font family : "+ style.fontFamily+"("+style.fontSize+")\n";

    //Pour afficher le résultat 
    alert(nomClass+background+color+height+width+display+font);
});