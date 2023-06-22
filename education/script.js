document.addEventListener("DOMContentLoaded", function() {
    var timelineItems = document.querySelectorAll(".timeline-item");
  
    function scrollToItem(e) {
      e.preventDefault();
      var targetId = this.getAttribute("href");
      var targetItem = document.querySelector(targetId);
  
      if (targetItem) {
        window.scrollTo({
          top: targetItem.offsetTop,
          behavior: "smooth"
        });
      }
    }
  
    timelineItems.forEach(function(item) {
      var link = item.querySelector(".timeline-date");
      if (link) {
        link.addEventListener("click", scrollToItem);
      }
    });
  });
  