function scrollFunction() {
  const element = document.getElementById("tickets-section");
  element.scrollIntoView();
}

function getElementById(elementID) {
  const element = document.getElementById(elementID);
  return element;
}

function getTextById(elementID) {
  const element = document.getElementById(elementID);
  const text = element.innerText;
  return text;
}
function setTextById(elementID, text) {
  const element = document.getElementById(elementID);
  element.innerText = text;
}

function setBGById(elementID, count) {
  const element = document.getElementById(elementID);
  if (element.classList.contains('bg-[#1DD100]', 'text-white')) {
    element.classList.remove('bg-[#1DD100]', 'text-white');
  }
  else {
    if (count == 4) {
      return "error";
    }
    if (count < 4) {
      element.classList.add('bg-[#1DD100]', 'text-white')
    }
  }
}
