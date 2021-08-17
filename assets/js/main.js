//conditionsls mehtod 3
//switch statment
let time = 0;
switch (time) {
    case 4:
        console.log("4");
        break;
    case 5:
        console.log("5");
        break;
    default:
        console.log("No Right Value")
        break;
}
//Case grouping
let explorer = "chrome firefox safari";
switch (explorer) {
    case "Edge":
        console.log("you've got he edge")
        break;
    case "chrome":
    case "firefox":
    case "Safari" :       
        console.log("Supported")
        break
        case "other":
            console.log("we hope it works")
    default:
        console.log("not Supported")
        break;
}
//browser & version comparing
let brow = "chrome";
let version = 5;
switch (brow+version) {
    case "chrome5":
        console.log("Supported")
        break;

    default:
        break;
}
/*/
if (a==0){
    let a = Number(prompt('a?'));
    alert(0);
}
if (a==1){
    alert(1);
}
if (a == 2 || a == 3){
    alert('2,3');
}

//switch mode
switch (a){
    case 0:
        alert("0");
        break
    case 1:
        alert(1);
        break
    case 2:
    case 3:
        alert("2,3")          
}*/
//Level2-5 Switch break
function check(){
    let bundsLander = getMe("bw");
    console.log(bundsLander);
    switch (bundsLander) {
        case "Baden-Württemberg":
            print("result","hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt");
            break;
        case "Bayern":
            print("result","hat 12,844 Mio Einwohner und München ist die Hauptstadt");
            break;
        case "Berlin":
            print("result","hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt");
            break;
        case "Brandenburg":
            print("result","hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt");
            break;
        case "Bremen":
            print("result","hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt");
            break;
        case "Hamburg":
            print("result","hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt");
            break;
        case "Hessen":
            print("result","hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt");
            break;
        case "Mecklenburg-Vorpommern":
            print("result","hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt");
            break;
        case "Niedersachsen":
            print("result","hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt");
            break;
        case "Nordrhein-Westfalen":
            print("result","hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt");
            break;                
        default:
            break;
    }
}
//Level -2-7
function showtxt(){
    let wert = getMe("mylist");
    console.log(wert);
    switch (wert) {
        case "0":
            print("masse","<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cmB: 7 - 12,5 cmH: bis 1 cm");
            break;
        case "1":
            print("masse","<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm");
            break;
        case "2":
            print("masse","<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm");
            break; 
        case "3":
            print("masse","<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm");
            break;      
        default:
            print("masse","<b>Extra große Größe</b>");
            break;
    }
}

//Functions 
//to get html element
function getMe(id){
let val =document.getElementById(id).value;
return String(val)
}
//to print in the html layout
function print(i,p){
    document.getElementById(i).innerHTML =p ;
}