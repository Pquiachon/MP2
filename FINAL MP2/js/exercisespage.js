$(document).ready(function () {
  getData("https://express-mp2.onrender.com/api/exercises");

  async function getData(data) {
    let my_obj = await fetch(data);
    let my_text = await my_obj.text();
    output = JSON.parse(my_text);
  }
  let beginner_val = 0;
  $("#beginner").click(function () {
    beginner_val = 1;
    intermediate_val = 0;
    expert_val = 0;
  });

  let intermediate_val = 0;
  $("#intermediate").click(function () {
    beginner_val = 0;
    intermediate_val = 1;
    expert_val = 0;
  });

  let expert_val = 0;
  $("#expert").click(function () {
    beginner_val = 0;
    intermediate_val = 0;
    expert_val = 1;
  });

  //beginner
  $("#abdominals").click(function () {
    if (beginner_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].beginner[0].abdominals.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 18rem, margin: 20%"><img src="' +
          output.difficulty[0].beginner[0].abdominals[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].beginner[0].abdominals[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].beginner[0].abdominals[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#shoulder").click(function () {
    if (beginner_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].beginner[0].shoulder.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].beginner[0].shoulder[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].beginner[0].shoulder[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].beginner[0].shoulder[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#legs").click(function () {
    if (beginner_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].beginner[0].legs.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].beginner[0].legs[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].beginner[0].legs[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].beginner[0].legs[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#chest").click(function () {
    if (beginner_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].beginner[0].chest.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].beginner[0].chest[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].beginner[0].chest[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].beginner[0].chest[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#back").click(function () {
    if (beginner_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].beginner[0].back.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].beginner[0].back[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].beginner[0].back[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].beginner[0].back[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  //intermediate
  $("#abdominals").click(function () {
    if (intermediate_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].intermediate[0].abdominals.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].intermediate[0].abdominals[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].intermediate[0].abdominals[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].intermediate[0].abdominals[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#shoulder").click(function () {
    if (intermediate_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].intermediate[0].shoulder.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].intermediate[0].shoulder[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].intermediate[0].shoulder[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].intermediate[0].shoulder[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#legs").click(function () {
    if (intermediate_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].intermediate[0].legs.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].intermediate[0].legs[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].intermediate[0].legs[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].intermediate[0].legs[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#chest").click(function () {
    if (intermediate_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].intermediate[0].chest.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].intermediate[0].chest[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].intermediate[0].chest[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].intermediate[0].chest[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#back").click(function () {
    if (intermediate_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].intermediate[0].back.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].intermediate[0].back[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].intermediate[0].back[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].intermediate[0].back[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });
  //expert
  $("#abdominals").click(function () {
    if (expert_val == 1) {
      $("#parts").html("");
      for (
        let i = 0;
        i < output.difficulty[0].expert[0].abdominals.length;
        i++
      ) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].expert[0].abdominals[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].expert[0].abdominals[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].expert[0].abdominals[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#shoulder").click(function () {
    if (expert_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].expert[0].shoulder.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].expert[0].shoulder[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].expert[0].shoulder[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].expert[0].shoulder[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#legs").click(function () {
    if (expert_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].expert[0].legs.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].expert[0].legs[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].expert[0].legs[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].expert[0].legs[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#chest").click(function () {
    if (expert_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].expert[0].chest.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].expert[0].chest[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].expert[0].chest[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].expert[0].chest[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });

  $("#back").click(function () {
    if (expert_val == 1) {
      $("#parts").html("");
      for (let i = 0; i < output.difficulty[0].expert[0].back.length; i++) {
        let row =
          '<div class="col-lg-4 gy-5"><div class="card" style="width: 5rem, margin: 10%"><img src="' +
          output.difficulty[0].expert[0].back[i].img +
          '" class="card-img-top" alt="..." /><div class="card-body"><h5 class="card-title text-center fs-2">' +
          output.difficulty[0].expert[0].back[i].name +
          '</h5><p class="card-text text-center">Equipment: ' +
          output.difficulty[0].expert[0].back[i].equipment +
          "</p></div></div></div>";

        $("#parts").append(row);
      }
    }
  });
});
