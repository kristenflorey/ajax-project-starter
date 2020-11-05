// const fetch = require("fetch");

document.addEventListener("DOMContentLoaded", () => {
  function getKitten() {
    fetch("/kitten/image")
      .then((res) => {
        //   console.log(res);
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        document.querySelector(".cat-pic").src = data.src;
      })
      .catch((err) => {
        console.log(err);
        // err.json().then((errorJSON) => {
        //   console.log("waiting for phase III");
        // });
      });
  }

  let newPicElement = document.getElementById("new-pic");
  newPicElement.addEventListener("click", (e) => {
    getKitten();
  });
});
