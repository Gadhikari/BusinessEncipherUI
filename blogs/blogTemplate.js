function getQueryParams() {
    var params = {};
    var search = window.location.search.substring(1);
    var pairs = search.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  }
  var queryParams = getQueryParams();
  
  loadTemplate(queryParams);
  
  
  function loadTemplate(value){
    const eventsContainer = document.getElementById("main-content");
    var image = document.getElementById("image");
    image.src = value.image;
  
  
    const titleHeading = document.getElementById("titleHeading");
    titleHeading.textContent = value.title;
  
    const eventDate = document.getElementById("eventDate");
    eventDate.textContent = value.date;
    
    const eventContent = document.getElementById("eventContent");
    eventContent.textContent = value.story;
  
  
    eventDtails.appendChild(titleHeading);
    // evenetDetails.appendChild(date);
  
    
    //   eventCard.appendChild(image);
  
  
    eventsContainer.appendChild(eventCard);
  
  
  }
  