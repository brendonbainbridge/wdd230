document.getElementById("close").addEventListener("click", function() {
    document.getElementById("banner").classList.remove("active");
  });
  

var messagedate = new Date();
if (messagedate.getDay() == 1 || messagedate.getDay() == 2 || messagedate.getDay() == 3) {
    document.querySelector("#banner").classList.add("active");
}