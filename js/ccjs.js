// JS Untuk Menu Responsive
function buka() {
    var x = document.getElementById("navigasi");
    if (x.className === "navigasi") {
        x.className += " responsive";
    } else {
        x.className = "navigasi";
    }
}

window.onscroll = function() {
    var header = document.getElementById('head');
    if ( window.pageYOffset > 100 ) {
        header.classList.add("headBlack");
    } else {
        header.classList.remove("headBlack");
    }
}

// Kintun Kana WA
function kintunWa() {
    alert("Pesan Telah Terkirim...")
}

function hasClass(el, className)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}