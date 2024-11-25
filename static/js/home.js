$(document).ready(function () {
  let commands = [
    "ls -1 links/",
    "cat about.txt",
    "ls /",
  ];
  
  let delay = 0;

  $(".animated-command").each(function (index) {
    let element = $(this);
    setTimeout(() => {
      element.css("animation", "typing 2s steps(20, end), blink-caret 0.75s step-end infinite");
    }, delay);
    delay += 2000;
  });
});
