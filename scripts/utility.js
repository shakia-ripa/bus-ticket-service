function scrollFunction() {
  const element = document.getElementById("tickets-section");
  element.scrollIntoView();
}

function setBGById(elementID){
  const element = document.getElementById(elementID);
  element.classList.add('bg-[#1DD100]')
}