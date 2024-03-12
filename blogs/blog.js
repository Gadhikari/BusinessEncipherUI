// Function to load blog posts based on selected category
function loadPosts(category) {
  // You can use AJAX to fetch blog posts from the server based on the selected category
  // For demonstration purposes, let's assume we have an array of blog posts
  var posts = [
    { title: "Post 1", category: "Category 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Post 2", category: "Category 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Post 2", category: "Category 2", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Post 3", category: "Category 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Post 3", category: "Category 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
   
    // Add more blog posts as needed
  ];

  // Clear existing blog posts
  $("#blog-posts").empty();
}
  // Filter posts based on selected category
   /* posts.forEach(function(post){*/ 
   


    // var xhttp = new XMLHttpRequest();
    
    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     // Request completed and response received successfully
    //     console.log(this.responseText);
    //   }
    // };
    // xhttp.open("GET", "http://127.0.0.1:5500/blogs/category/technology/first_myfirsttechblog.json", true);
    // xhttp.send();
    
    

// Event handler for category links
$(".category-link-technology").click(function(e) {
  e.preventDefault();
  var mydata;
    fetch('http://127.0.0.1:5500/blogs/category/technology/first_myfirsttechblog.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Response data
        data.forEach(function(post) {
          console.log(post);
          var postHtml = '<div class="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">' + post.name + '</h5><p class="card-text">' + post.content + '</p></div></div></div>';
          $("#blog-posts").append(postHtml); 
        });
     
         
        
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });

   
  var category = $(this).text();
  loadPosts(category);
});


/* category2 */


$(".category-link-digital").click(function(e) {
  e.preventDefault();
  var mydata;
    fetch('http://127.0.0.1:5500/blogs/category/digital/digital_marketingblogs.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Response data
        data.forEach(function(post) {
          console.log(post);
          var postHtml = '<div class="col-md-4"><div class="card"><div class="card-body"><h5 class="card-title">' + post.name + '</h5><pclass="cardtext">' + post.content + '</p><button onclick=showmore();>know more</button></div></div></div>';
          $("#blog-posts").append(postHtml); 
        });
     
         
        
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });

   
  var category = $(this).text();
  loadPosts(category);
});


function showmore(){
console.log('event');

}






// Initial load of blog posts (all categories)
loadPosts("All");










