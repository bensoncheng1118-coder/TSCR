(function () {
  document.documentElement.classList.remove("no-js");
  var c = window.TSCR || {};
  var repo = "https://github.com/" + (c.repo || "");
  var url = c.downloadUrl || repo + "/releases/latest/download/" + (c.file || "TSCR-Setup.exe");

  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  each(".js-download", function (a) { a.href = url; a.setAttribute("download", ""); });
  each(".js-version", function (e) { e.textContent = "v" + (c.version || "1.0.0"); });
  each(".js-size", function (e) { e.textContent = (c.sizeMB || "") + " MB"; });
  each(".js-file", function (e) { e.textContent = c.file || "TSCR-Setup.exe"; });
  each(".js-sha", function (e) { e.textContent = c.sha256 || "—"; });
  each(".js-repo", function (a) { a.href = repo; });
  each(".js-releases", function (a) { a.href = repo + "/releases"; });

  // 複製 SHA-256
  each(".copy", function (b) {
    b.addEventListener("click", function () {
      var t = document.querySelector(b.getAttribute("data-copy")).textContent;
      var done = function () { b.textContent = "已複製"; setTimeout(function () { b.textContent = "複製"; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function () {});
    });
  });

  // 手機選單
  var menu = document.getElementById("menu"), links = document.getElementById("links");
  menu.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });
  each("#links a", function (a) {
    a.addEventListener("click", function () { links.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); });
  });

  // 捲動進場
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { each(".reveal", function (e) { e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  Array.prototype.forEach.call(items, function (e) { io.observe(e); });
})();
