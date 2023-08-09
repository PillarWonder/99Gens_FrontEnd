// Password Validation

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}

$(document).on("focus keyup", "#signupEmail", function (e) {
  $(this).parents("li").find(".required-txt").remove();
  if (!validateEmail(this.value)) {
    $(this).after(`
            <div class="required-txt">Please Input a Valid Email Address.</div>
        `);
  }
});

$(document).on("focus keyup", "#password", function (e) {
  $(this).parents("li").find(".required-txt").remove();
  if (this.value.length < 8) {
    $(this).after(`
            <div class="required-txt">Password must be at least 8 characters.</div>
        `);
  }
});

$(document).on("focus keyup", "#passwordConfirm", function (e) {
  $(this).parents("li").find(".required-txt").remove();
  if (this.value !== $("#password").val()) {
    $(this).after(`
            <div class="required-txt">Password does not match</div>
        `);
  }
});

$(document).on("keyup", "#code1", function (e) {
  // $(code1).value=e.which;
  $(code2).focus();
});
$(document).on("keyup", "#code2", function (e) {
  $(code3).focus();
});
$(document).on("keyup", "#code3", function (e) {
  $(code4).focus();
});
$(document).on("keyup", "#code4", function (e) {
  $(document).focus();
});

// $(document).on('click', '.view', function(e) {
//     console.log("deadly manner");
//     var input = $(this).parents('li').find('input')[0];
//     if(input.type === 'password') {
//         input.type = 'text';
//         $(this).html(`
//             <em><img src="../assets/img/eye-slash-solid.svg" alt="eye" /></em> Hide
//         `);
//     } else {
//         input.type = 'password';
//         $(this).html(`
//             <em><img src="../assets/img/eye-solid.svg" alt="eye" /></em> Show
//         `);
//     }
// });
