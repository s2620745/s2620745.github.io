// 日本語 / 英語の切り替え
// 表示言語は <html lang> で管理し、CSS 側で対応しない言語の要素を隠す。
// 初期値は各ページの <head> 内スクリプトで決めている。
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.lang-toggle');

  function apply(lang) {
    root.lang = lang;
    if (toggle) toggle.setAttribute('aria-checked', String(lang === 'en'));
    var title = document.body.getAttribute('data-title-' + lang);
    if (title) document.title = title;
  }

  apply(root.lang === 'en' ? 'en' : 'ja');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.lang === 'en' ? 'ja' : 'en';
      apply(next);
      try {
        localStorage.setItem('lang', next);
      } catch (e) {}
    });
  }
})();
