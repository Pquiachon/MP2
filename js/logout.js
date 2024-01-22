$(document).ready(function () {
  $("#btn-logout").click(function () {
    window.location.href = "index.html";
    localStorage.clear();
  });
});
