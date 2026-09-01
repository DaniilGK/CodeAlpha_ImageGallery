const galleryData = {
    nature: ['annie-spratt-GJCLsZ4GtRE-unsplash.jpg', 'annie-spratt-gJMls7cPvts-unsplash.jpg', 'emily-sandoval-PBbCf6RQwdI-unsplash.jpg', 'esma-melike-sezer-k8zIoFzMXNw-unsplash.jpg', 'katie-kirkman-CW4VeRjMZjE-unsplash.jpg', 'silali-banerjee-3JLRF3Yn3f0-unsplash.jpg', 'sodo-sane-1O1KExjoQQY-unsplash.jpg', 'viktoriya-lissachenko-cShMGr61WD4-unsplash.jpg'],
    people: ['agung-prayoga-r5ygkIlNNE4-unsplash.jpg', 'alghozy-nGh-7uMHT98-unsplash.jpg', 'kamara-rahmat-1GeBFmg0Xa0-unsplash.jpg', 'esma-melike-sezer-f7741znO77s-unsplash.jpg','kamara-rahmat-tezBLHCZ7ao-unsplash.jpg', 'round-icons-r9M-Qe6Thgc-unsplash.jpg'],
    streets: ['aliaksei-lepik-goa_pgKhAnI-unsplash.jpg', 'artur-adilkhanian-EIo9tWYAFc4-unsplash.jpg', 'bruno-bd-FFGHpRop-DU-unsplash.jpg', 'gabriele-merlino-fa5so58oDAI-unsplash.jpg', 'martin-bennie-MhYU5K4A93I-unsplash.jpg', 'ruben-mavarez-wWcadZJcsYM-unsplash.jpg', 'the-metropolitan-museum-of-art-S2WA31buOIA-unsplash.jpg'],
};

const gridGallery = document.querySelector('.grid-gallery');

for (const category in galleryData) {

    const categoryGallery = document.createElement('div');
    gridGallery.appendChild(categoryGallery);
    categoryGallery.classList.add('category');

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category;
    categoryTitle.classList.add('category-title');
    categoryGallery.appendChild(categoryTitle);

    const gridImages = document.createElement('div');
    gridImages.classList.add('grid-images');
    categoryGallery.appendChild(gridImages);

    galleryData[category].forEach(image => {
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = `./assets/images/${category}/${image}`;
        img.alt = image;
        gridImages.appendChild(img);
    });
    
}

