document.addEventListener("DOMContentLoaded", function() {
    const blogContainer = document.getElementById('blogContainer');
    const categorySelect = document.getElementById('categorySelect');
    const blogContentModal = document.getElementById('blogContentModal');
    const blogContent = document.getElementById('blogContent');
    const modalClose = document.querySelector('.close');

    const blogs = [
      { title: 'Introduction to JavaScript', category: 'programming', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { title: 'Networking Basics', category: 'networking', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
      { title: 'Cybersecurity Tips', category: 'security', content: 'Suspendisse potenti. Vestibulum sit amet libero tortor.' },
      // Add more blogs as needed
    ];

    // Function to render blogs based on selected category
    function renderBlogs(category) {
      blogContainer.innerHTML = '';
      blogs.forEach(blog => {
        if (category === 'all' || blog.category === category) {
          const blogCard = document.createElement('div');
          blogCard.classList.add('blog-card');
          blogCard.innerHTML = `
            <h2>${blog.title}</h2>
            <button class="read-more" onclick="openBlog('${blog.title}', '${blog.content}')">Read More</button>
          `;
          blogContainer.appendChild(blogCard);
        }
      });
    }

    // Initial render
    renderBlogs('all');

    // Event listener for category selection change
    categorySelect.addEventListener('change', function() {
      renderBlogs(this.value);
    });

    // Function to open blog modal
    function openBlog(title, content) {
      blogContent.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
      `;
      blogContentModal.style.display = 'block';
    }

    // Event listener to close modal
    modalClose.addEventListener('click', function() {
      blogContentModal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', function(event) {
      if (event.target == blogContentModal) {
        blogContentModal.style.display = 'none';
      }
    });
  });