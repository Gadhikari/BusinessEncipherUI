// // Function to load blog posts based on selected category
// function loadPosts(category) {
//   // You can use AJAX to fetch blog posts from the server based on the selected category
//   // For demonstration purposes, let's assume we have an array of blog posts
//   var posts = [
//     { title: "Post 1", category: "Category 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { title: "Post 2", category: "Category 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
//     { title: "Post 2", category: "Category 2", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
//     { title: "Post 3", category: "Category 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
//     { title: "Post 3", category: "Category 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
   
//     // Add more blog posts as needed
//   ];

//   // Clear existing blog posts
//   $("#blog-posts").empty();
// }
//   // Filter posts based on selected category
//    /* posts.forEach(function(post){*/ 
   


//     // var xhttp = new XMLHttpRequest();
    
//     // xhttp.onreadystatechange = function() {
//     //   if (this.readyState == 4 && this.status == 200) {
//     //     // Request completed and response received successfully
//     //     console.log(this.responseText);
//     //   }
//     // };
//     // xhttp.open("GET", "http://127.0.0.1:5500/blogs/category/technology/first_myfirsttechblog.json", true);
//     // xhttp.send();
    
    

// // Event handler for category links
// $(".category-link-technology").click(function(e) {
//   e.preventDefault();
//   var mydata;
//     fetch('http://127.0.0.1:5500/blogs/category/technology/first_myfirsttechblog.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data); // Response data
//         data.forEach(function(post) {
//           console.log(post);
//           var postHtml = '<div class="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">' + post.name + '</h5><p class="card-text">' + post.content + '</p></div></div></div>';
//           $("#blog-posts").append(postHtml); 
//         });
     
         
        
//       })
//       .catch(error => {
//         console.error('There was a problem with your fetch operation:', error);
//       });

   
//   var category = $(this).text();
//   loadPosts(category);
// });


// /* category2 */


// $(".category-link-digital").click(function(e) {
//   e.preventDefault();
//   var mydata;
//     fetch('http://127.0.0.1:5500/blogs/category/digital/digital_marketingblogs.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data); // Response data
//         data.forEach(function(post) {
//           console.log(post);
//           var postHtml = '<div class="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">' + post.name + '</h5><pclass="cardtext">' + post.content + '</p><button onclick=showmore();>know more</button></div></div></div>';
//           $("#blog-posts").append(postHtml); 
//         });
     
         
        
//       })
//       .catch(error => {
//         console.error('There was a problem with your fetch operation:', error);
//       });

   
//   var category = $(this).text();
//   loadPosts(category);
// });


// function showmore(){
// console.log('event');

// }






// // Initial load of blog posts (all categories)
// loadPosts("All");











// new blog


// script.js

// Sample event data (can be fetched from a database or API)
// const eventsData = [
//   {
//     id:1,
//     title: " EVENT1 ",
//     date: "March 10 , 2024",
//     image: "../images/computer-767781_1280.jpg",
//     details: "lorem lorem ",
//     story:"आर्य समाज एक हिंदू सुधार आंदोलन है जिसकी स्थापना स्वामी दयानंद सरस्वती ने १८७५ में की थी। इसका मुख्य उद्देश्य वेदों के आधार पर मूल्यों और अभ्यासों को प्रोत्साहित करना है। आर्य समाज सत्य, धर्म, न्याय और एक सच्चे परमेश्वर की पूजा के मूल सिद्धांतों को महत्व देता है। "
    
//   },
//   {
//     id:1,
//     title: "EVENT2",
//     date: "April 3, 2024",
//     image: "../images/computer-767781_1280.jpg",
//     details: "XYZ",
//     story: " "

//   },
//   {
//     id:1,
//     title: "EVENT3",
//     date: "April 10, 2024",
//     image: "havan_ceremony.jpg",
//     details: "XYZ",
//     story: " "

//   },
//   {
//     id:1,
//     title: "EVENT4",
//     date: "April 17, 2024",
//     image: "youth_retreat.jpg",
//     details: "XYZ",
//     story: " "

//   },
//   {
//     id:1,
//     title: "EVENT5",
//     date: "April 24, 2024",
//     image: "community_service.jpg",
//     details: "XYZ",
//     story: " ",

//   },
//   {   
//     id:1,
//       title: "EVENT6",
//       date: "April 24, 2024",
//       image: "community_service.jpg",
//       details: "XYZ",
//       story: " "

      
//     }

// ];

// // Function to dynamically generate event cards
// function generateEventCards() {
//   const eventsContainer = document.getElementById("events-container");
//   eventsData.forEach(event => {
//     const eventCard = document.createElement("div");
//     eventCard.classList.add("event-card");
//     eventCard.addEventListener("click", function() {
//       // Call the handleClick function passing the data
//       handleClick(event);
//     });  
//     const image = document.createElement("img");
//     image.src = event.image;
//     image.alt = event.title;

//     const eventDetails = document.createElement("div");
//     eventDetails.classList.add("event-details");

//     const title = document.createElement("div");
//     title.classList.add("event-title");
//     title.textContent = event.title;

//     const date = document.createElement("div");
//     date.classList.add("event-date");
//     date.textContent = event.date;

//     const details = document.createElement("a");
//     details.textContent = event.details;
//     details.setAttribute ("href", "");
//     details.setAttribute("target", "_self"); // Open link in a new tab

    

   
//     eventDetails.appendChild(title);
//     eventDetails.appendChild(date);
//     eventDetails.appendChild(details);

//     eventCard.appendChild(image);
//     eventCard.appendChild(eventDetails);

//     eventsContainer.appendChild(eventCard);
//   });
// }

// // Generate event cards when the page loads
// document.addEventListener("DOMContentLoaded", generateEventCards);

// function handleClick(event) {
//   console.log('Div clicked!'+ JSON.stringify(event));
//   var queryString = Object.keys(event).map(key => key + '=' + encodeURIComponent(event[key])).join('&');
//   console.log(event.details)
//   var newData = event; 
//  var newPageUrl = 'blogsTemplate.html?' + queryString;
//  // var newPageUrl = 'eventTemplate.html';
//   window.open(newPageUrl, '_self');
 
// }












































