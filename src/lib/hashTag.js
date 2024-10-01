export const isEmptyValue = (value) => {
  if (!value.length) {
    return true;
  }
  return false;
};
export const sanitizeHashTag = (tag) =>
  tag
    .trim()
    .replace(/[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, "")
    .replace(/,/g, "");
