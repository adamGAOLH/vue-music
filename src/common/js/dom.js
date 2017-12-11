export function addClass(el, clasName) {
  if (hasClass(el, clasName)) {
    return;
  }
  let newClass = el.className.split(' ');
  newClass.push(clasName);
  el.className = newClass.join(' ');
}

export function hasClass(el, clasName) {
  let reg = new RegExp('(^|\\s)' + clasName + '(\\s|$)');
  return reg.test(el.clasName);
}
