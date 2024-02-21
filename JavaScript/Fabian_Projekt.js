function openPopup(imageIndex) {
    const popup = document.getElementById('popup');
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Clear gallery content

    // Beispielbilder für die Galerie. Hier sollten die tatsächlichen Bilder eingefügt werden.
    const images = [
        ['bilder/LG_OLED_G3.jpg', 'bilder/lg oled g3_2.jpeg', 'bilder/LG OLED g3_3.jpeg'],
        ['bilder/panasonic_mzw2004_lifestyle.jpg', 'bilder/panasonic mzw 2004_2.webp', 'bilder/panasonic mzw2004_3.webp'],
        ['bilder/sony a95l.jpeg', 'bilder/sony a95l_2.jpeg', 'bilder/sony a95l_3.jpeg']
    ];

    images[imageIndex].forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        gallery.appendChild(img);
    });

    popup.style.display = 'block';

    // Automatisches Wechseln der Bilder in der Galerie
    let currentImg = 0;
    setInterval(() => {
        gallery.childNodes.forEach((img, index) => {
            img.style.display = index === currentImg ? 'block' : 'none';
        });
        currentImg = (currentImg + 1) % gallery.childNodes.length;
    }, 2000); // Wechsel alle 2 Sekunden
}

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
