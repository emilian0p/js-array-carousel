const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];

const imagesWrapper = document.querySelector('#img-container');
console.log(imagesWrapper)

let activeImage = 0;

for (let index = 0 ; index < images.length ; index++){
    
    const currentImage = document.createElement('img')
 
    currentImage.setAttribute('src', images[index]);

    if (index == activeImage){

        currentImage.classList.add('active');
        
    }

    imagesWrapper.append(currentImage);
    
}

const prevButton = document.getElementById('prev-button');

const nextButton = document.getElementById('next-button');

const imageElements = document.querySelectorAll('.justify-content-between img');
