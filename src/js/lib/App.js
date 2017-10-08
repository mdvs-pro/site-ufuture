let Ufuture = {
  init: function() {
    this.smoothHashLinks();
    this.scrollUp();
  },
  smoothHashLinks: function(){
    let linksArray = document.querySelectorAll('a');
    let event = document.createEvent("Event");
    event.initEvent("hashLinkClicked", true, true);

    linksArray = Array.from(linksArray);
    linksArray = linksArray.filter(function(link){
      let linkHref = link.getAttribute('href');
      return linkHref.length > 1 && linkHref[0] === '#';
    });
    linksArray.forEach(function(link){
      link.addEventListener('click', function(e){
        e.preventDefault();
        let linkTarget = document.querySelector(link.getAttribute('href'));
        link.dispatchEvent(event);
        window.scroll({ top: linkTarget.offsetTop, left: 0, behavior: 'smooth' });
      });
    });
  },
  scrollUp: function(){
    let scrolled;
    const ACTIVE_CLASS = 'show';

    document.getElementById('scroll-up').addEventListener("click", function(){
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
    
    window.onscroll = function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 400) {
        document.getElementById('scroll-up').classList.add(ACTIVE_CLASS);
      } else {
        document.getElementById('scroll-up').classList.remove(ACTIVE_CLASS);
      }
    }
  }
}

module.exports = Ufuture;