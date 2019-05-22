//hide preloader when all scripts, links, images have loaded
//constructor function
class UI {
  constructor() {}
}

class Customer {
  constructor(name, lastName, email) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }
}

const eventListeners = () => {
  const ui = new UI();
  //window eventlistener
  window.addEventListener("load", () => {
    ui.hidePreloader();
  });

  //nav btn
  document.querySelector(".navBtn").addEventListener("click", () => {
    ui.toggleNav();
  });

  //control video
  document.querySelector(".video__switch").addEventListener("click", () => {
    ui.videoControls();
  });
  //submit listener
  document.querySelector(".drink-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector(".input-name").value;
    const lastName = document.querySelector(".input-lastname").value;
    const email = document.querySelector(".input-email").value;

    let value = ui.checkEmpty(name, lastName, email);
    if (value) {
      let customer = new Customer(name, lastName, email);
      ui.addCustomer(customer);
      ui.showFeedback("Thank you!", "success");
      ui.clearFields();
    } else {
      ui.showFeedback("some form values are empty", "error");
    }
  });
  //display modal
  const links = document.querySelectorAll(".work-item__icon");
  links.forEach(item => {
    item.addEventListener("click", event => {
      ui.showModal(event);
    });
  });

  //hide modal
  document.querySelector(".work-modal__close").addEventListener("click", () => {
    ui.closeModal();
  });
};

eventListeners();

UI.prototype.hidePreloader = () => {
  document.querySelector(".preloader").style.display = "none";
};

UI.prototype.toggleNav = () => {
  document.querySelector(".nav").classList.toggle("nav--show");
};

UI.prototype.videoControls = () => {
  let btn = document.querySelector(".video__switch-btn");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
};

UI.prototype.checkEmpty = (name, lastName, email) => {
  let result;
  if (name === "" || lastName === "" || email === "") {
    result = false;
  } else {
    result = true;
  }
  return result;
};

//remove alert
UI.prototype.removeAlert = function(type) {
  setTimeout(function() {
    document.querySelector(".drink-form__feedback").classList.remove(type);
  }, 3000);
};

UI.prototype.showFeedback = (text, type) => {
  let ui = new UI();
  const feedback = document.querySelector(".drink-form__feedback");
  if (type === "success") {
    feedback.classList.add("success");
    feedback.innerText = text;
    ui.removeAlert("success");
  } else if (type === "error") {
    feedback.classList.add("error");
    feedback.innerText = text;
    ui.removeAlert("error");
  }
};

//clear fields
UI.prototype.clearFields = function() {
  document.querySelector(".input-name").value = "";
  document.querySelector(".input-lastname").value = "";
  document.querySelector(".input-email").value = "";
};

UI.prototype.addCustomer = customer => {
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random() * images.length);
  const div = document.createElement("div");
  div.classList.add("person");
  div.innerHTML = `<img
        src="img/person-${random}.jpeg"
        alt="person 1"
        class="person__thumbnail"
        />
        <h4 class="person__name">${customer.name}</h4>
        <h4 class="person__last-name">${customer.lastName}</h4>`;
  document.querySelector(".drink-card__list").appendChild(div);
};

UI.prototype.showModal = function(event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains("work-item__icon")) {
    let id = event.target.parentElement.dataset.id;
    const modal = document.querySelector(".work-modal");
    const modalItem = document.querySelector(".work-modal__item");

    modal.classList.add("work-modal__show");
    modalItem.style.backgroundImage = `url(img/work-${id}.jpeg)`;
  }
};

UI.prototype.closeModal = () => {
  document.querySelector(".work-modal").classList.remove("work-modal__show");
};
