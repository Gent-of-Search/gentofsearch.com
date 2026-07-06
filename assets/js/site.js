/* Gent of Search — small progressive-enhancement behaviours */
(function () {
  'use strict';

  // FAQ accordion: single item open at a time, first open on load.
  document.querySelectorAll('[data-faq]').forEach(function (group) {
    var items = Array.prototype.slice.call(group.querySelectorAll('.faq-item'));
    items.forEach(function (item) {
      var btn = item.querySelector('.faq-q');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        items.forEach(function (other) {
          other.classList.remove('open');
          var b = other.querySelector('.faq-q');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });

  // Mobile burger menu toggle.
  var burger = document.querySelector('.nav-burger');
  var mobileMenu = document.getElementById('nav-mobile-menu');
  if (burger && mobileMenu) {
    var setOpen = function (open) {
      mobileMenu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    burger.addEventListener('click', function () {
      setOpen(!mobileMenu.classList.contains('open'));
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }
})();
