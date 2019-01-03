setHtmlFontSize();

function setHtmlFontSize() {
    var desigWidth = 750;
    var designFontSize = 200;
    var windowWidth = document.documentElement.offsetWidth;
    var nowFontSize = windowWidth / (desigWidth / designFontSize);
    document.documentElement.style.fontSize = nowFontSize + 'px';
}
window.addEventListener('resize', setHtmlFontSize);