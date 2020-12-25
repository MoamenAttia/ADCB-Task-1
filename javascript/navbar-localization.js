$(document).ready(function () {
  onLocalization = (localization) => {
    localStorage.setItem("localization", localization);
    location.reload();
  };

  if (localStorage.getItem("localization") === "AR") {
    $("#security-tip-nav").html("نصائح أمنية");
    $("#login-guide-nav").html("دليل الدخول");
    $("#token-guide-nav").html("دليل رمز الأمان");
    $("#call-us-nav").html("أتصل علي 16862");

    $(".footer").html("@٢٠٢٠ بنك أبوظبي التجاري. كل الحقوق محفوظة.");

    $(".selected-lang").html("العربية");

    $("nav ul.navbar-nav").addClass("mr-auto").removeClass("ml-auto");

    $("<link>").appendTo("head").attr({
      type: "text/css",
      rel: "stylesheet",
      href: "../css/bootstrap_rtl.css",
      integrity:
        "sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe",
      crossorigin: "anonymous",
    });
  }
});
