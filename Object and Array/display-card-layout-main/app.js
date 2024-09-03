// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select items

// display function for reviews
const displayReview = (items) => {
  // flag for active tag in carosol
  let act = true;

  let reviewsHtml = items.map(function (review) {
    if (act) {
      act = false;
      return `  <div class="carousel-item active">
                <div class="img-container">
                  <img src=${review.img} id="person-img" alt="" />
                </div>
                <h4 id="author">${review.name}</h4>
                <p id="job">${review.job}</p>
                <p id="info">${review.text}</p>
              </div>
    `;
    } else
      return `  <div class="carousel-item">
                <div class="img-container">
                  <img src=${review.img} id="person-img" alt="" />
                </div>
                <h4 id="author">${review.name}</h4>
                <p id="job">${review.job}</p>
                <p id="info">${review.text}</p>
              </div>
    `;
  });
  document.getElementById("review-slides").innerHTML = reviewsHtml.join("");
};
displayReview(reviews);

const displayFilterCategory = () => {
  let a = reviews.map((review) => {
    return `<li><a class="dropdown-item" href="#" onclick="filterJob('${review.job}')" >${review.job}</a></li>`;
  });

  document.getElementById("filter-job").innerHTML = a.join(" ");
};
displayFilterCategory();

function filterJob(selectedJob) {
  let filteredJobs = reviews.filter((review) => {
    return review.job == selectedJob;
  });

  displayReview(filteredJobs);
}
