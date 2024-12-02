function isVoid(value) {
  value = value == undefined ? undefined : value.trim();
  if (value == undefined || value.length < 1 || value == "void") {
    return true;
  }
}

function invalidDate(dateValue) {
  let date = new Date(dateValue);
  if (
    date.toString() == "Invalid Date" ||
    date >= new Date() ||
    DOM.birthdate.attr("type") != "date"
  ) {
    return true;
  }
}

function notOfLegalAge(dateValue) {
  let date = new Date(dateValue);
  let currentDate = new Date();
  let elapsedTime = currentDate - date;

  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);

  if (years < 18) {
    return true;
  }
}

function invalidNifNie(value) {
  let regexStart = /^[1-9XYZ]/;
  let regexEnd = /[A-Z]$/;

  value = value.toString().toUpperCase();

  if (!regexStart.test(value) || value.length != 9 || !regexEnd.test(value)) {
    return true;
  }

  let startWith = value.charAt(0);

  switch (startWith) {
    case "X":
      startWith = "0";
      break;
    case "Y":
      startWith = "1";
      break;
    case "Z":
      startWith = "2";
      break;
    default:
      break;
  }

  let correctLetters = {
    0: "T",
    1: "R",
    2: "W",
    3: "A",
    4: "G",
    5: "M",
    6: "Y",
    7: "F",
    8: "P",
    9: "D",
    10: "X",
    11: "B",
    12: "N",
    13: "J",
    14: "Z",
    15: "S",
    16: "Q",
    17: "V",
    18: "H",
    19: "L",
    20: "C",
    21: "K",
    22: "E",
  };

  if (correctLetters[value.substring(0, 8) % 23] != value[8]) {
    return true;
  }
}

function invalidEmail(value) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(value)) {
    return true;
  }
}

function invalidBookingDate(dateValue) {
  let date = new Date(dateValue);
  if (
    date.toString() == "Invalid Date" ||
    date < new Date() ||
    DOM.bookingDate.attr("type") != "datetime-local"
  ) {
    return true;
  }
}

function invalidSport(value) {
  let sportCodes = [
    "f-c1",
    "f-c2",
    "b-c1",
    "b-c2",
    "b-c3",
    "t-c1",
    "t-c2",
    "v-c1",
    "v-c2",
    "w-c1",
  ];

  if (!sportCodes.includes(value)) {
    return true;
  }
}

export {
  isVoid,
  invalidDate,
  notOfLegalAge,
  invalidNifNie,
  invalidEmail,
  invalidBookingDate,
  invalidSport,
};
