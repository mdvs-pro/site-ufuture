let Ufuture = {
  init: function() {
    this.smoothHashLinks();
  },
  smoothHashLinks: function(){
    let linksArray = document.querySelectorAll('a');
    linksArray = Array.from(linksArray);
    linksArray = linksArray.filter(function(link){
      let linkHref = link.getAttribute('href');
      return linkHref.length > 1 && linkHref[0] === '#';
    });
    linksArray.forEach(function(link){
      link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });        
      });
    });
  }
}

module.exports = Ufuture;