// local reviews data
const reviews = [
    {
      id: 1,
      name: "Gaurav adhikari",
      job: "Full stack developer",
      img:
        "../images/avatar-1299805_1280.png",
      text:
        "I can personally say that this is one of the  Best company providing IT consultancy and Industrial Training in Haldwani with highly qualified Professionals....."
    },
    {
      id: 2,
      name: "Gokul mer",
      job: "Intern",
      img:
        "../images/avatar-1299805_1280.png",
      text:
        "One of the things I appreciate most about Business encipher is their attention to detail and dedication to customer satisfaction. Whenever I encounter an issue or need assistance, their support team is always quick to respond and resolve the issue effectively. Their level of professionalism and expertise is truly commendable"
    },
    {
      id: 3,
      name: "Dhirendra Nainwal",
      job: "Digital marketing expert",
      img:
        "../images/avatar-1299805_1280.png",
      text:
        " Business encip stays up-to-date with the latest industry trends and technologies, ensuring that their services are always cutting-edge and innovative. This gives me confidence that I'm receiving the best possible solutions for my IT needs."
    },
    {
      id: 4,
      name: "Mukul",
      job: "Video editor",
      img:
        "../images/avatar-1299805_1280.png",
      text:
        " I've been particularly impressed by the quality of their products and services. Whether it's designing a website, developing a custom software solution, or implementing cloud infrastructure, Business encipher delivers top-notch results every time. Their team of skilled professionals goes above and beyond to ensure that the end product not only meets but exceeds my expectations. "
    }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  