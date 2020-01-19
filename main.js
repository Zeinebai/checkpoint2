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

    document.getElementById("Mytext").style.fontFamily = document.getElementById("input-font").value;
}

function changesize() {
    document.getElementById("Mytext").style.fontSize = document.getElementById("fontsize").value;
}

$(".container a").css("opacity", "0");

$(".container").mouseenter(function () {
    str = "#" + this.id + " a";
    $(str).css("opacity", "1");
});

$(".container").mouseleave(function () {
    str = "#" + this.id + " a";
    $(str).css("opacity", "0");
});
$("#im1").css("opacity", "1");

$("#im1").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im1").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im2").css("opacity", "1");

$("#im2").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im2").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im3").css("opacity", "1");

$("#im3").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im3").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im4").css("opacity", "1");

$("#im4").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im4").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im5").css("opacity", "1");

$("#im5").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im5").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im6").css("opacity", "1");

$("#im6").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im6").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im7").css("opacity", "1");

$("#im7").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im7").mouseleave(function () {
    $(this).css("opacity", "1");
});
$("#im8").css("opacity", "1");

$("#im8").mouseenter(function () {
    $(this).css("opacity", "0.5");
});
$("#im8").mouseleave(function () {
    $(this).css("opacity", "1");
});