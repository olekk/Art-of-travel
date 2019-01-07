var quotes = ['You dont know what to do in a free time?', '<br>We have a soluion for your problem!', 'Just choose a city you want to tour', '<br>and you will get informations what are the best things to do and see!'];

var number = 0;

addEventListener('load', nextQuote, false);

function nextQuote() {
    show();
    if (number > 3) {
        number = 0;
    }

    document.getElementById('quotes').innerHTML = quotes[number];

    setTimeout('nextQuote()', 4500);
    setTimeout('hide()', 4000);
    number++;
}

function hide() {
    $("#quotes").fadeOut(500);
}

function show() {
    $("#quotes").fadeIn(500);
}



//MAPY

var maps = ['<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18021.734880419346!2d13.735322251999508!3d51.055363006358625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf29101ad6a9%3A0x421b1cb4288feb0!2sDresden!5e1!3m2!1sen!2sde!4v1531479722005" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10400.35523506477!2d21.01012659837203!3d52.25033341825379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6f49f976dd%3A0x50d2f456e2756d4f!2sWarsaw+Old+Town%2C+00-001+Warsaw%2C+Poland!5e1!3m2!1sen!2sde!4v1531477178531" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',

            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21031.871419016654!2d18.081604392341497!3d42.646968609992356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b8ba20835e87d%3A0x400ad50862bd500!2sDubrovnik%2C+Croatia!5e1!3m2!1sen!2sde!4v1531477308122" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>',

            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53439.67170964778!2d19.952423968850027!3d49.25237494947706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f29294ef3939%3A0xdf8d87a1716ba6a0!2sZakopane%2C+Poland!5e1!3m2!1sen!2sde!4v1531477341186" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>']

var num = 0;

addEventListener('load', nextMap, false);

function nextMap() {
    showMap();
    if (num > 3) {
        num = 0;
    }

    document.getElementById('mapa').innerHTML = maps[num];


    setTimeout('nextMap()', 10300);
    setTimeout('hideMap()', 10000);
    num++;
}

function hideMap() {
    $("#mapa").fadeOut(500);
}

function showMap() {
    $("#mapa").fadeIn(500);
}
