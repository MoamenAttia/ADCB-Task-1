$(document).ready(function () {
  if (localStorage.getItem("localization") === "AR") {
    $("#usernameLabel").html("اسم المستخدم");
    $("#usernameInput").attr("placeholder", "اسم المستخدم");

    $("#passwordLabel").html("كلمة السر");
    $("#exampleInputPassword1").attr("placeholder", "كلمة السر");

    $("#login-btn").html("تسجيل الدخول");
    $("#forgot-label").html("هل نسيت كلمة المرور ؟");

    $("#username-field-cont .invalid-feedback").html(
      "من فضلك ادخل اسم مستخدم صحيح."
    );

    $("#password-field-cont .invalid-feedback").html(
      "من فضلك ادخل كلمة المرور."
    );
  }
});
