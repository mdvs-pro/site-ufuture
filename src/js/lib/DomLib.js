let DomLib = {
  addClass: function(el, className) {
    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;
  },
  removeClass: function(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  },
  hasClass: function(el, className) {
    if (el.classList) 
      return el.classList.contains(className);
    else
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  },
  triggerClass: function(el, className) {
    if (this.hasClass(el, className)) {
      this.removeClass(el, className)
    } else {
      this.addClass(el, className)
    }
  }
}

module.exports = DomLib;