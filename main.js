  
   // Array with images
   const imgSources = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];




    // Variables for container and images
const carouselContainer = document.getElementById("img-container");
let images = [];

        // Create an image for every source code in the first array and print it in the new array
    for (let i = 0; i < imgSources.length; i++) {

        let newImg = document.createElement("img");
        newImg.classList.add("carousel-img");
        newImg.setAttribute("src", imgSources[i]);
        carouselContainer.append(newImg);
        images.push(newImg);

    }

        // Setting a variable for the active image using the new array
    let activeIndex = 0;
    images[activeIndex].classList.add("active");
    thumbnail[activeIndex].classList.add("active");

        // Add the onclick function on the next-button
    document.getElementById("next-button").addEventListener("click", function() {

        images[activeIndex].classList.remove("active");
        thumbnail[activeIndex].classList.remove("active");

        activeIndex++;
        if (activeIndex >= images.length) {
            activeIndex = 0;
        }

        images[activeIndex].classList.add("active");
        thumbnail[activeIndex].classList.add("active");

    });

        // Add the onclick function on the previous-button
        document.getElementById("prev-button").addEventListener("click", function() {

            images[activeIndex].classList.remove("active");
            thumbnail[activeIndex].classList.remove("active");
    
            activeIndex--;
            if (activeIndex <= -1) {
                activeIndex = images.length - 1;
            }
    
            images[activeIndex].classList.add("active");
            thumbnail[activeIndex].classList.add("active");
    
        });




for ( let i = 0; i < images.length; i++) {

    thumbnail[i].addEventListener("click", function() {

        for ( let index = 0; index < thumbnail.length; index++) {

            images[index].classList.remove("active");
            thumbnail[index].classList.remove("active");
        };

        images[i].classList.add("active");
        thumbnail[i].classList.add("active");

    });
}