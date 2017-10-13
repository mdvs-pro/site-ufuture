let Ufuture = {
  isMobile: function(){
    return this.getScreenSize().width < 992;
  },
  init: function() {
    this.smoothHashLinks();
    this.scrollUp();
    this.langSelect();
    this.searchBar();
    if (!this.isMobile()) {
      this.newsAnimation();
    }
  },
  searchBar: function(){
    let elBtn = document.querySelector('.js-search-btn'); 
    let elReset = document.querySelector('.js-search-reset'); 

    elBtn.addEventListener('click', function(){
      document.querySelector('body').classList.add('search-opened');
    });
    elReset.addEventListener('click', function(){
      document.querySelector('body').classList.remove('search-opened');
    });
  },
  langSelect: function(){
    let className = '.js-lang';
    let elBtn = document.querySelector('.lang__btn'); 
    let el = document.querySelector(className);

    elBtn.addEventListener('click', function(){
     el.classList.toggle('active');
    });
  },
  getScreenSize: function(){
    let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {'width':x,'height':y}
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
  },
  newsAnimation: function(){
    let animateNews = new TimelineMax();
    animateNews.to(".news__odd", 0.4, {y: -70},0)
     .to(".news__even", 0.2, {y: 70},0)
     .from('.news__background', 0.3, {scale: 1.2},0)  

    let controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
      triggerElement: ".news__blocks", duration: 300
    })
    .setTween(animateNews)
    .addTo(controller);
  }
}

module.exports = Ufuture;