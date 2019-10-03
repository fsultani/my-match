!function includeHTML() {
  let z, i, elmnt, file, xhttp;
  
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    function getFile() {
      return axios.get(file);
    }
    if (file) {
      elmnt.removeAttribute("w3-include-html");
      getFile().then(res => {
        if (res.status === 200) {
          elmnt.innerHTML = res.data
        }
      })
      includeHTML();
      return;
    }
  }
}();