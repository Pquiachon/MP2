$(document).ready(function () {
  if (localStorage.getItem("check_input") != null) {
    if (localStorage.getItem("check_input") == 1) {
      window.location.href = "home.html";
    }
  }
  $("#form_content").submit(function (x) {
    let email = $("#email_input").val();
    let pw = $("#password_input").val();
    let check_input = $("#check_input").prop("checked");
    if (email == "user@gmail.com") {
      if (pw == "123") {
        if (check_input) {
          localStorage.setItem("check_input", 1);
        }
        localStorage.setItem("logged_in", 1);
        window.location.href = "home.html";
      } else {
        alert("ERROR: Invalid password!");
      }
    } else {
      alert("ERROR: Invalid email!");
    }
    x.preventDefault();
  });
});
