var CURRENT_SELECTED_MAIN_COUNTRY_INDEX = 1;

function setMainCountryDropdown() {
  var main_country_dropdown_data = [
    { value: "1", label: "Canada" },
    { value: "0", label: "Other" }
  ];
  var parent_element = document.getElementById("main-country");
  var option_childElement = document.createElement("option");
  option_childElement.setAttribute("Value", "");
  option_childElement.setAttribute("disabled", true);
  option_childElement.textContent = "Select a Coountry";
  parent_element.appendChild(option_childElement);

  var country_list = main_country_dropdown_data;

  for (let countryl of country_list) {
    var option_childElement = document.createElement("option");
    option_childElement.setAttribute("Value", countryl.value);
    option_childElement.textContent = countryl.label;
    parent_element.appendChild(option_childElement);
  }
  var currentCountryLS = localStorage.getItem("Country");
  console.log(currentCountryLS);
  if (Boolean(currentCountryLS)) {
    CURRENT_SELECTED_MAIN_COUNTRY_INDEX = Number(currentCountryLS);
  }
  parent_element.value = CURRENT_SELECTED_MAIN_COUNTRY_INDEX.toString();
  if(CURRENT_SELECTED_MAIN_COUNTRY_INDEX==0){
    console.log("Other");
  }else{
    console.log("Canada");
  }
}

function changecountry() {
  CURRENT_SELECTED_MAIN_COUNTRY_INDEX = Number(document.getElementById("main-country").value);
 
  
  localStorage.setItem("Country", CURRENT_SELECTED_MAIN_COUNTRY_INDEX.toString());
}



function toggleText() {
  var showMoreText = document.getElementById("moreText");

  var buttonText = document.getElementById("textButton");

  if (showMoreText.style.display === "none") {
    showMoreText.style.display = "inline";
    buttonText.innerHTML = "Show Less";
  } else {
    showMoreText.style.display = "none";
    buttonText.innerHTML = "Book Consultation";
  }
}
function sendEmail(){
 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "syfrows@prestigelawcanada.com",
    Password : "FDC2FB6C3F784E86CDAD1E1084B2E1B74787",
    To : 'prestigesocial1@gmail.com',
    From : "syfrows@prestigelawcanada.com",
    Subject : "Email Response",
    Body : "Name: " + document.getElementById("name").value + "<br> email: "+ document.getElementById("email").value +
    "<br> Contact Number: " + document.getElementById("mob").value + "<br> Message: "+ document.getElementById("mes").value
}).then(
  message => alert("Thank You, Wiil Get Back to you As Soon AS Possible")
);
}
window.setMainCountryDropdown();
