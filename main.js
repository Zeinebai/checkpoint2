console.log("123")

function changetobold() {
    var getText = document.getElementById("Mytext")
    if (getText.style.fontWeight == 'bold') {
        getText.style.fontWeight = 'normal';
    } else {
        getText.style.fontWeight = 'bold';
    }
}

function changetoitalic() {
    var getText = document.getElementById("Mytext")
    if (getText.style.fontStyle == 'italic') {
        getText.style.fontStyle = 'normal';
    } else {
        getText.style.fontStyle = 'italic';
    }
}

function changetounderlined() {
    var getText = document.getElementById("Mytext")
    if (getText.style.textDecoration != 'underline') {
        getText.style.textDecoration = 'underline';
    } else {
        getText.style.textDecoration = 'none';
    }
}
var changeFont = function (font) {
    console.log(font.value)
    document.getElementById("output-text").style.fontFamily = font.value;
}

function changesize() {
    document.getElementById("output-text").style.fontSize = document.getElementById("fontsize").value;
}