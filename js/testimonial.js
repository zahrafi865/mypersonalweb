const testimonialData = [
    {
        author: "Adel",
        quote: "Keren",
        image: "https://images.unsplash.com/photo-1633279309534-f761427548b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4
    },
    {
        author: "Nawfal",
        quote: "Top",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
        rating: 5
    },
    {
        author: "Yeonjun",
        quote: "The best",
        image: "https://www.kanal247.com/images/media/photo/2019/01/11/25482.jpg",
        rating: 5
    },
    {
        author: "Eno",
        quote: "lumayan",
        image: "https://images.unsplash.com/photo-1550546094-9835463f9f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 3
    },
    {
        author: "Rara",
        quote: "Tingkatin lagi",
        image: "https://images.unsplash.com/photo-1614938355255-24b2f86f3801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 1
    },

];

function allTestimonial() {
    let testimonialHTML = "";

    testimonialData.forEach(function (item) {
        testimonialHTML += 
        `
            <div class="testimonial">
                <img class="profile-testimonial" src="${item.image}" alt="profile">
                <p class="quote">${item.quote}</p>
                <p class="author">${item.author}</p>
                <p class="author">${item.rating} <i data-feather="star"></i> </p>
            </div>
        `
    })
    
    document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonial();

// filtered testimonial
function filterTestimonial(rating) {
    let testimonialHTML = ``;

    const testimonialFiltered = testimonialData.filter(function (item) {
        return item.rating === rating;
    });

    // console.log(testimonialFiltered)

    if (testimonialFiltered.length === 0) {
        testimonialHTML += `<h1> Data not found </h1>`;
    }
    else {
        testimonialFiltered.forEach(function (item) {
        testimonialHTML += 
        `
            <div class="testimonial">
                <img
                    class="profile-testimonial"
                    src="${item.image}"
                    alt="profile"
                />
                <p class="quote">${item.quote}</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>
        `
        });
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML;

}