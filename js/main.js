import {
  isVoid,
  invalidDate,
  notOfLegalAge,
  invalidNifNie,
  invalidEmail,
  invalidBookingDate,
  invalidSport,
} from "./functions.js";

const DOM = {
  firstName: $("#firstName"),
  lastName: $("#lastName"),
  birthdate: $("#birthdate"),
  birthdateMSG: $("#birthdateMSG"),
  nifnie: $("#nif-nie"),
  email: $("#email"),
  telephone: $("#telephone"),
  bookingDate: $("#bookingDate"),
  bookingDateMSG: $("#bookingDateMSG"),
  sport: $("#sport"),
  sportMSG: $("#sportMSG"),
  submit: $("#submit"),
};

// PREVENT SEND DATA PRESSING ENTER KEY
$("*").on("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

// FIRST NAME
DOM.firstName.focus(function () {
  if (DOM.firstName.attr("class") == "dataError") {
    DOM.firstName.removeClass("dataError");
    DOM.firstName.val("");
  }
});

function checkFirstName() {
  if (isVoid(DOM.firstName.val())) {
    DOM.firstName.addClass("dataError");
    DOM.firstName.val("Empty First Name");
  }

  var regex = /[^\p{L}\s]/u;
  if (regex.test(DOM.firstName.val())) {
    DOM.firstName.addClass("dataError");
    DOM.firstName.val("Invalid Data");
  }
}

// LAST NAME
DOM.lastName.focus(function () {
  if (DOM.lastName.attr("class") == "dataError") {
    DOM.lastName.removeClass("dataError");
    DOM.lastName.val("");
  }
});

function checkLastName() {
  if (isVoid(DOM.lastName.val())) {
    DOM.lastName.addClass("dataError");
    DOM.lastName.val("Empty Last Name");
  }

  var regex = /[^\p{L}\s]/u;
  if (regex.test(DOM.lastName.val())) {
    DOM.lastName.addClass("dataError");
    DOM.lastName.val("Invalid Data");
  }
}

// BIRTHDATE
DOM.birthdate.focus(function () {
  if (DOM.birthdate.attr("class") == "dataError") {
    DOM.birthdate.removeClass("dataError");
    DOM.birthdate.val("");
    DOM.birthdateMSG.text("");
  }
});

function checkBirthdate() {
  if (isVoid(DOM.birthdate.val())) {
    DOM.birthdate.addClass("dataError");
    DOM.birthdateMSG.text("Empty Date.");
  }

  if (invalidDate(DOM.birthdate.val())) {
    DOM.birthdate.addClass("dataError");
    DOM.birthdateMSG.text("Insert a valid date.");
  }

  if (notOfLegalAge(DOM.birthdate.val())) {
    DOM.birthdate.addClass("dataError");
    DOM.birthdateMSG.text("You must be of legal age.");
  }
}

// NIF NIE
DOM.nifnie.focus(function () {
  if (DOM.nifnie.attr("class") == "dataError") {
    DOM.nifnie.removeClass("dataError");
    DOM.nifnie.val("");
    DOM.nifnie.text("");
  }
});

function checkNifNie() {
  if (isVoid(DOM.nifnie.val())) {
    DOM.nifnie.addClass("dataError");
    DOM.nifnie.val("Empty NIF/NIE");
  }

  if (invalidNifNie(DOM.nifnie.val())) {
    DOM.nifnie.addClass("dataError");
    DOM.nifnie.val("Insert a valid NIF/NIE.");
  }
}

// EMAIL
DOM.email.focus(function () {
  if (DOM.email.attr("class") == "dataError") {
    DOM.email.removeClass("dataError");
    DOM.email.val("");
    DOM.email.text("");
  }
});

function checkEmail() {
  if (invalidEmail(DOM.email.val())) {
    DOM.email.addClass("dataError");
    DOM.email.val("Insert a valid Email.");
  }
}

// TELEPHONE NUMBER
DOM.telephone.focus(function () {
  if (DOM.telephone.attr("class") == "dataError") {
    DOM.telephone.removeClass("dataError");
    DOM.telephone.val("");
    DOM.telephone.text("");
  }
});

function checkTelephone() {
  if (isVoid(DOM.telephone.val())) {
    DOM.telephone.addClass("dataError");
    DOM.telephone.val("Telephone is Empty");
  }

  if (isNaN(DOM.telephone.val())) {
    DOM.telephone.addClass("dataError");
    DOM.telephone.val("Insert a valid number.");
  }
}

// BOOKING DATE
DOM.bookingDate.focus(function () {
  if (DOM.bookingDate.attr("class") == "dataError") {
    DOM.bookingDate.removeClass("dataError");
    DOM.bookingDate.val("");
    DOM.bookingDateMSG.text("");
  }
});

function checkBookingDate() {
  if (isVoid(DOM.bookingDate.val())) {
    DOM.bookingDate.addClass("dataError");
    DOM.bookingDateMSG.text("Empty Date.");

  } else if (invalidBookingDate(DOM.bookingDate.val())) {
    DOM.bookingDate.addClass("dataError");
    DOM.bookingDateMSG.text("Insert a valid date.");
  }

}

// SPORT
DOM.sport.focus(function () {
  if (DOM.sport.attr("class") == "dataError") {
    DOM.sport.removeClass("dataError");
    $("#sport:first-child").val("-Choose one-");
    DOM.sportMSG.text("");
  }
});

function checkSport() {
  if (isVoid(DOM.sport.val())) {
    DOM.sport.addClass("dataError");
    DOM.sportMSG.text("Select a valid option.");
  }

  if (invalidSport(DOM.sport.val())) {
    DOM.sport.addClass("dataError");
    DOM.sportMSG.text("Select a valid option.");
  }
}

// SUBMIT
DOM.submit.click(function checkForm(event) {
  checkBirthdate();
  checkBookingDate();
  checkFirstName();
  checkLastName();  
  checkNifNie();
  checkEmail();
  checkTelephone();  
  checkSport();

  if ($(".dataError").length != 0) {
    event.preventDefault();
  } 
  
});
