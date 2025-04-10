document.getElementById("close").addEventListener("click", function() {
    document.getElementById("banner").classList.remove("active");
  });
  

var messagedate = new Date();
if (messagedate.getDay() == 0 || messagedate.getDay() == 1 || messagedate.getDay() == 2 || messagedate.getDay() == 3 || messagedate.getDay() == 4 || messagedate.getDay() == 5 || messagedate.getDay() == 6) {
    document.querySelector("#banner").classList.add("active");
}