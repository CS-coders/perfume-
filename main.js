var modal = document.getElementById("contact");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#navbar ul");
  const navLinks = document.querySelectorAll("#navbar ul");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-links");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards 0.1s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();


let searchBox = document.getElementById('search-box');
    let placeholderText = 'Search';
    let index = 0;

    function moveText() {
        if (index < placeholderText.length) {
            searchBox.setAttribute('placeholder', placeholderText.slice(0, ++index));
            setTimeout(moveText, 200);
        } else if (index === placeholderText.length) {
            setTimeout(moveTextBack, 2000);
        }
    }

    function moveTextBack() {
        if (index > 0) {
            searchBox.setAttribute('placeholder', placeholderText.slice(0, --index));
            setTimeout(moveTextBack, 200);
        } else {
            setTimeout(moveText, 2000);
        }
    }

    moveText();

    function searchAndRedirect() {
      var searchTerm = document.getElementById('search-box').value.trim().toLowerCase();

      if (searchTerm === "") {
          alert("Please enter a search term");
          return;
      }

      var elements = document.querySelectorAll('body *');
      var found = false;

      elements.forEach(function (element) {
          var textContent = element.textContent.trim().toLowerCase();

          if (textContent.includes(searchTerm) && !found) {
              // Highlight the matching word
              var regex = new RegExp('\\b' + searchTerm + '\\b', 'gi');
              var highlightedText = element.innerHTML.replace(regex, '<span class="highlight">$&</span>');
              element.innerHTML = highlightedText;

              // Scroll to the first occurrence
              element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

              found = true; // Stop after the first occurrence
          }
      });

      if (!found) {
          alert("Search term not found");
      }
  }
