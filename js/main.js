function jumpToSection(event, targetSection){
  event.preventDefault();
  var navbarHeight = $("#myNav").height();
  var sectionString = null;
  switch(targetSection){
    case "s1":
      sectionString = "#about";
      break;
    case "s2":
      sectionString = "#portfolio";
      break;
    case "s3":
      sectionString = "#contact";
      break;
    default:
      sectionString = "#";
  }
  var sectionOffset = $(sectionString).offset().top;
  $("html, body").animate({
    scrollTop : sectionOffset - navbarHeight + 1
  }, 1000);
}
