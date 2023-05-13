function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    field: document.querySelector('input[name="field"]:checked').value,
    message: document.getElementById("message").value
  };

  const serviceID = 'service_xkkdera';
  const templateID = 'template_ag22ynq';

  if (params.name === "" || params.email === "" || params.message === "" || params.field === "") {
    return;
  }

  emailjs.send(serviceID, templateID, params)
    .then(function () {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      var radios = document.getElementsByName("field");
      for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
      }
      document.getElementById("message").value = "";
    })
    .catch((err) => console.log(err));
}
