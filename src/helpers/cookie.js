// set cookie
export function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/";
}

// get cookie
export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// delete cookie
export function removeCookie(cname) {
  let cvalue = getCookie(cname);
  let d = new Date();
  d.setTime(d.getTime() - (24 * 60 * 60 * 1000)); // reduce 1 day
  let expires = d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";path=/;";
}
