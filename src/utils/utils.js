import moment from "moment";

export const isWeekday = (date) => {
  date = moment(date);
  const day = date.isoWeekday();
  return day !== 6 && day !== 7;
};

export const isNumeric = (num) => {
  return !isNaN(num);
};

export const isRequiredBoolean = (value) =>
  value === true || value === false ? undefined : "Requerido!";

export const isValidCUIT = (cuit) => {
  if (!cuit || cuit.toString().length != 11) {
    return false;
  }

  if (!/\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g.test(cuit)) {
    return false;
  }

  var acumulado = 0;
  var digitos = cuit.toString().split("");
  var digito = digitos.pop();

  for (var i = 0; i < digitos.length; i++) {
    acumulado += digitos[9 - i] * (2 + (i % 6));
  }

  var verif = 11 - (acumulado % 11);
  if (verif == 11) {
    verif = 0;
  }

  return digito == verif;
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const emailIsValid = (mail) => {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!pattern.test(mail)) {
    return "e-mail inválido!";
  }
  return undefined;
};

export const number = (value) =>
  value && isNaN(Number(value)) ? "Debe ser un número!" : undefined;

export const minValue = (min) => (value) =>
  value && value < min ? `Mínimo ${min}` : undefined;

export const maxValue = (max) => (value) =>
  value && value > max ? `Máximo ${max}` : undefined;

export const required = (value) => (value ? undefined : "Requerido!");

export const isEmptyObject = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

export const isEmptyString = (value) =>
  !(
    value &&
    typeof value === "string" &&
    value.trim() &&
    value.trim().length > 0
  );

export const isValidYear = (value) => {
  if (typeof value === "string") value = parseInt(value);

  return value && typeof value === "number" && value > 0;
};

export const maxLength = (value, maxLength) =>
  value && value.toString() && value.toString().length > maxLength
    ? `Máximo ${maxLength} caracteres`
    : undefined;

export const isNonEmptyArray = (value) =>
  Array.isArray(value) && value.length > 0;

export const isValidRange = (value, minValue, maxValue) =>
  !isNumeric(value) || !isNumeric(minValue) || !isNumeric(maxValue) || value < minValue || value > maxValue
    ? `El rángo permitido es de ${minValue} a ${maxValue}`
    : undefined;