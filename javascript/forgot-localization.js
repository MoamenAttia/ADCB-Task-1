$(document).ready(function () {
  if (localStorage.getItem("localization") === "AR") {
    $("#usernameLabel").html("اسم المستخدم");
    $("#usernameInput").attr("placeholder", "اسم المستخدم");

    $("#login-btn").html("تسجيل الدخول");
    $("#forgot-label").html("هل نسيت كلمة المرور ؟");

    $("#cancel-btn").html("العودة");
    $("#submit-btn").html("طلب الباسورد ");

    $("#submit-btn-cont").removeAttr("style");
    $("#submit-btn-cont").css("margin-right", "auto");

    $("#username-field-cont .invalid-feedback").html(
      "من فضلك ادخل اسم مستخدم صحيح."
    );
  }
});
