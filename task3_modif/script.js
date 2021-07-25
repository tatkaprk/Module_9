function makeColor(color, event) {
    trafficOff();
    event.target.style.background = (color);
}

function trafficOff() {
    trafficGreen.style.background = ('black');
    trafficYellow.style.background = ('black');
    trafficRed.style.background = ('black');
}


trafficGreen.addEventListener('click', makeColor.bind(null,"green"));
trafficYellow.addEventListener('click', makeColor.bind(null,"yellow"));
trafficRed.addEventListener('click', makeColor.bind(null,"red"));