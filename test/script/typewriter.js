const text = document.querySelector('#typed');
const txt = ["北极光之夜。", "夜越黑，星星越亮。", "答案在风中飘荡。"];

var index = 0;
var i = 0;
var temp = true;
function animateText() {

    text.innerHTML = temp ? txt[i].slice(0, index++) : txt[i].slice(0, index--);
    
    if (index == txt[i].length + 3) {
        temp = false;
        
    }
    else if (index < 0) {
        index = 0;
        temp = true;
        i++;
        if (i >= txt.length) {
            i = 0;
        }
    }
}
setInterval(animateText, 200)