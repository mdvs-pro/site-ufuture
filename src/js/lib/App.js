//import AppHelper from '../lib/App-helper.js';

var touchEvent = 'click';

let Ufuture = {
  isMobile: function(){
    return this.getScreenSize().width < 992;
  },
  initBody: function(){
    window.onload = () => {
      touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
      touchEvent = 'click';
      this.init();
      document.querySelector('html').classList.add('loaded');
    };
  },
  init: function() {
    if (Modernizr.touchevents) {
      this.postTouch('.news__item');
      this.postTouch('.post--hover');
    }

    this.fixedHeader();
    this.lazyLoadImages();
    this.smoothHashLinks();
    this.scrollUp();
    //this.historyBack();
    //this.langSelect();
    this.searchBar();
    this.uModal.init();
    if (!this.isMobile()) {
      this.uGallery();
    }
  },
  postTouch: function(elClass){
    let newsArray = document.querySelectorAll(elClass);
    let activeElement = null;
    newsArray = Array.from(newsArray);
    if (!newsArray.length) return;

    newsArray.forEach(function(el){
      el.addEventListener(touchEvent, (event)=>{
        if (!el.classList.contains('active')){
          event.preventDefault();
        }
        if (activeElement != null && activeElement != el) {
          activeElement.classList.remove('active');
        }
        activeElement = el;
        el.classList.toggle('active');
      });
    });

  },
  lazyLoadImages: function(){
    var bLazy = new Blazy({ 
      selector: 'img' // all images
    });
  },
  searchBar: function(){
    let elBtn = document.querySelector('.js-search-btn'); 
    let elReset = document.querySelector('.js-search-reset'); 

    elBtn.addEventListener(touchEvent, function(){
      document.querySelector('body').classList.add('search-opened');
    });
    elReset.addEventListener(touchEvent, function(){
      document.querySelector('body').classList.remove('search-opened');
    });
  },
  langSelect: function(){
    let className = '.js-lang';
    let elBtn = document.querySelector('.lang__btn'); 
    let el = document.querySelector(className);

    elBtn.addEventListener(touchEvent, function(){
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
    
    linksArray.forEach((link) => {
      link.addEventListener(touchEvent, function(e){
        e.preventDefault();
        let linkTarget = document.querySelector(link.getAttribute('href'));
        link.dispatchEvent(event);
        window.scroll({ top: linkTarget.offsetTop, left: 0, behavior: 'smooth' });
      });
    });
  },
  scrollUp: function(){
    let el = document.getElementById('scroll-up');
    if (el === null) return;

    let scrolled;
    let offset = 400;
    const ACTIVE_CLASS = 'show';

    // frontpage fix
    if (document.querySelector('.out').classList.contains('frontpage')) {
      let uFollow = document.querySelector('.u-follow');
      offset = this.getOffset(uFollow).top + uFollow.offsetHeight - window.innerHeight + 90; // 90 is scroll-top height + bottom
    }

    // show/hide
    window.addEventListener('scroll',function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > offset) {
        el.classList.add(ACTIVE_CLASS);
      } else {
        el.classList.remove(ACTIVE_CLASS);
      }
    });
  },
  uGallery: function(){
    // required: ScrollMagic and GSAP
    let uGalleryClass = '.u-gallery';
    let options = {
      left: {
        begin: 0,
        end: -30,
        duration: 1
      },
      right: {
        begin: -30,
        end: 30,
        duration: 1
      },
      bg: { //zoom
        begin: 1.2,
        end: 1
      }
    }

    if (!document.querySelectorAll(uGalleryClass).length) return;

    let controller = new ScrollMagic.Controller();
    document.querySelectorAll(uGalleryClass).forEach(function(tweenItem){
      let tweenGallery = new TimelineMax();
      let galleryOdd = tweenItem.querySelector('.news__odd');
      let galleryEven = tweenItem.querySelector('.news__even');
      let galleryBgs = tweenItem.querySelectorAll('.news__background');

      tweenGallery
        .fromTo(galleryOdd, options.left.duration, {y: options.left.begin, ease:Linear.easeNone},{y: options.left.end, ease:Linear.easeNone})
        .fromTo(galleryEven, options.right.duration, {y: options.right.begin, ease:Linear.easeNone},{y: options.right.end, ease:Linear.easeNone});
        // .fromTo(galleryBgs, .3, {scale: options.bg.begin},{scale: options.bg.end});
      
      let duration = 1280;

      let scene = new ScrollMagic.Scene({
        triggerElement: tweenItem, duration: duration,
        triggerHook: 'onEnter', offset: 50
      })
        .setTween(tweenGallery)
        .addTo(controller);

    });

  },
  getOffset: function(el){
    if (el.getBoundingClientRect) {
      return getOffsetRect(el)
    } else {
      return getOffsetSum(el)
    }

    function getOffsetSum(el) {
      let top = 0;
      let left = 0;

      while(el) {
          top = top + parseInt(el.offsetTop);
          left = left + parseInt(el.offsetLeft);
          el = el.offsetParent;
      }
  
      return {top: top, left: left};
    }
  
    function getOffsetRect(el) {
      let box = el.getBoundingClientRect();
      let body = document.body;
      let docElem = document.documentElement;

      let scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
      let scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft
  
      let clientTop = docElem.clientTop || body.clientTop || 0
      let clientLeft = docElem.clientLeft || body.clientLeft || 0
  
      let top  = box.top +  scrollTop - clientTop
      let left = box.left + scrollLeft - clientLeft
  
      return { top: Math.round(top), left: Math.round(left) }
    }
  },
  fixedHeader:function(){
    let scrolled;
    let el = document.querySelector('.header');
    const ACTIVE_CLASS = 'moved';

    window.addEventListener('scroll',function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 40) {
        el.classList.add(ACTIVE_CLASS);
      } else {
        el.classList.remove(ACTIVE_CLASS);
      }
    });
  },
  historyBack: function () {
    let historyBtn = document.querySelector('#history-back');
    if (window.history.length <= 1) {
      historyBtn.classList.add('no-history')
    }
    historyBtn.addEventListener('click', function () {
      window.history.back();
    });
  },
  // @TODO: take out modal functionality to a separate file
  uModal: {
    el: '.js-u-modal',
    triggerClass: '.u-modal-link',
    containerClass: '.u-modal__container',
    ACTIVE_CLASS: 'modal-open',
    // controllers isn't right name for this element
    // @TODO: add back blockscreen (overlay)
    closeLink: '.u-modal__controllers',
    tl: '',
    clickedEl: '',
    init: function(){
      let triggers = document.querySelectorAll(this.triggerClass);
      this.tl = new TimelineMax();
      
      Array.from(triggers).forEach(link => {
        link.addEventListener(touchEvent, (event) => {
          this.clickedEl = link;
          event.preventDefault();
          this.open();
        });
      });

      document.querySelector(this.closeLink).addEventListener(touchEvent, (event) => {
        this.close();
      });

      document.onkeydown = (event) => {
        event = event || window.event;
        let isEscape = false;
        let isModalOpened = document.querySelector(this.el).classList.contains(this.ACTIVE_CLASS);
        
        if ("key" in event) {
            isEscape = (event.key == "Escape" || event.key == "Esc");
        } else {
            isEscape = (event.keyCode == 27);
        }
        if (isEscape && isModalOpened) {
          this.close();
        }
      };

    },
    open: function(){
      this.tl
        .to(this.el, 0.4, {opacity:1,scale:1})
        .fromTo('.u-modal__bg', 1, {
          x:- (window.innerWidth+300),
          transformOrigin: 'center center',
          skewType: "simple"
        },{
          x:0
        })
        .fromTo('.u-modal__loader', 0.3, {opacity:0}, {opacity:1})
        .call(()=>{
          document.querySelector(this.el).classList.add(this.ACTIVE_CLASS);
          this.loadLinkSrc()
        });
    },
    close: function(){
      this.tl
        .call(()=>{
          document.querySelector(this.el).classList.remove(this.ACTIVE_CLASS);
          document.querySelector('.u-modal__inner').innerHTML = "";
        })
        .to(this.el, 0.4, { opacity: 0 })
        .set(this.el, {scale: 0})
    },
    loadLinkSrc: function(){
      // @TODO: add gallery type
      let type = this.clickedEl.dataset.modalType;
      let src = this.clickedEl.dataset.modalSrc;

      switch (type){
        case 'video' : 
          let iframe = document.createElement('iframe');
          iframe.src = src;
          iframe.setAttribute("width", document.querySelector(this.containerClass).offsetWidth); 
          iframe.setAttribute("height", document.querySelector(this.containerClass).offsetHeight); 
          document.querySelector('.u-modal__inner').appendChild(iframe);
          break;
        case 'image' : 
          let img = document.createElement('img');
          img.src = src;
          // iframe.setAttribute("width", document.querySelector(this.containerClass).offsetWidth); 
          // iframe.setAttribute("height", document.querySelector(this.containerClass).offsetHeight); 
          document.querySelector('.u-modal__inner').appendChild(img);
          break;
        case 'html' :
          let htmlContentOriginal = this.clickedEl.querySelector('.t-grid__desc');
          let htmlContent = document.createElement('div');
          htmlContent.classList.add('u-modal__html');
          htmlContent.innerHTML = htmlContentOriginal.innerHTML;
          document.querySelector('.u-modal__inner').appendChild(htmlContent);
          console.log('HTML MODAL OPENED');
          break;
        default: break;
      }

    }
  }
}

module.exports = Ufuture;