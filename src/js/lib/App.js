let Ufuture = {
  init: function() {
    this.smoothHashLinks();
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
  }
}

module.exports = Ufuture;