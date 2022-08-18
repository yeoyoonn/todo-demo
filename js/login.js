const googlename = document.getElementById("#header_id strong");
const logoutbtn = document.getElementById("logout");

logoutbtn.addEventListener("click", logout);

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };
  function saveJwt(){
    
}
  function handleCredentialResponse(response) {
      // decodeJwtResponse() is a custom function defined by you
      // to decode the credential response.
      const responsePayload = parseJwt(response.credential);
      window.location.href = "http://localhost:5500/toyproject/";
      localStorage.setItem("JWT", JSON.stringify(responsePayload));
      console.log("ID: " + responsePayload.sub);
      console.log('Full Name: ' + responsePayload.name);
      console.log('Given Name: ' + responsePayload.given_name);
      console.log('Family Name: ' + responsePayload.family_name);
      console.log("Image URL: " + responsePayload.picture);
      console.log("Email: " + responsePayload.email);
  }

  function logout(){
    localStorage.removeItem("JWT");
  }