var clicks = 0;

function handle_click() {
  //  (1) Compute new button message
  var new_params = {};
  var timeout_period = 0;
  switch( clicks ) {
    case 0:
      new_params = {
        btn: "No.",
        msg: "Now go back living your small, pointless existence."
      };
      timeout_period = 400;
      break;
    case 1:
      new_params = {
        btn: "Nope."
      };
      break;
    case 2:
      new_params = {
        btn: "Still here."
      };
      break;
    case 3:
      new_params = {
        btn: "Stage I: Denial"
      };
      break;
    case 4:
      new_params = {
        btn: "Stage II: Anger"
      };
      break;
    case 5:
      new_params = {
        btn: "Stage III: Bargaining"
      };
      break;
    case 6:
      new_params = {
        btn: "Intermission: Lunch"
      };
      break;
    case 7:
      new_params = {
        btn: "Stage IV: Depression"
      };
      break;
    case 8:
      new_params = {
        btn: "Stage V: 5:00PM"
      };
      break;
  }

  //  (2) Update the UI
  $("button#trigger").html(new_params.btn);
  if (new_params.msg !== undefined) {
    setTimeout( function() {
      Materialize.toast(new_params.msg, 4500, "blue-grey")
    }, timeout_period);
  }

  //  (3) Increment counter
  if (clicks < 9) {
    clicks += 1;
  } else {
    clicks = 0;
    $("button#trigger").html("Has the office burned down yet?");
  }
}

$(document).ready(function() {
  $("button#trigger").on("click", handle_click);
});
