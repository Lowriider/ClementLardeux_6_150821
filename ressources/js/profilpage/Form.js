export default class Form {
  constructor(profil) {
    this.profil = profil,
 
    // DOM Elements // 
    this.form = document.querySelector(".form");
    this.contact = document.querySelector(".profil__contact");
    this.closeForm = document.querySelector(".form__close");
    this.header = document.querySelector(".form__header");
    this.headerFormTemplate = `<h1 class="form__header--title">Contactez-moi <br/>${this.profil[0].name}</h1>`;
    this.header.innerHTML += this.headerFormTemplate;
    this.submitFormOk = document.querySelector(".form__submit");
    this.errorBlock = document.getElementsByClassName("form__error");
    this.data = document.querySelectorAll(".form__data");

    // all var declared //
    this.regLetters = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
    this.regmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    this.message;
    this.firstNameOk = false;
    this.lastNameOk = false;
    this.emailOk = false;
    this.messageOk = false;

    // EVENT STARTS WHEN YOU LEAVE INPUT FIELD
    this.data.forEach(item => item.addEventListener('blur', function(e) {
        // check first name field //
      if (e.target.id === "first-name") {
        if (e.target.value.length < 2 || !this.regLetters.test(e.target.value)) { 
          this.highlightField(e.target, true);
        } else {
          this.highlightField(e.target, false);
          this.errorMessagesReset(e.target);
          this.firstName = e.target.value;
          this.firstNameOk = true;
        }
          // check last name field // 
      } else if (e.target.id === "last-name") {
        if (e.target.value.length < 2 || !this.regLetters.test(e.target.value)) {
          this.highlightField(e.target, true);
        } else {
          this.highlightField(e.target, false);
          this.errorMessagesReset(e.target);
          this.lastName = e.target.value;
          this.lastNameOk = true;
        }
          // check email field // 
      } else if (e.target.id === "email") {
        if (e.target.value.length < 2 || !this.regmail.test(e.target.value)) {
          this.highlightField(e.target, true);
        } else {
          this.highlightField(e.target, false);
          this.errorMessagesReset(e.target);
          this.email = e.target.value;
          this.emailOk = true;
        }
          // check textarea field // 
      } else if (e.target.id === "message") {
        if (e.target.value.length < 1 || e.target.value > 100) { // if length of e.target is sup or equal to 1 and 
          this.highlightField(e.target, true);
        } else {
          this.highlightField(e.target, false);
          this.errorMessagesReset(e.target);
          this.message = e.target.value;
          this.messageOk = true;
        }
      }
    }.bind(this)));
 
    this.contact.addEventListener('click', function() {
      this.contact.style.display = "none";
      this.form.style.display = "block";
    }.bind(this));
    // close form //

    document.querySelector(".form__close").addEventListener('click', function() { // this.closeForm ne fonctionne pas...
      this.form.style.display = "none";
      this.contact.style.display = "block";
    }.bind(this));

    // submit form + message //
    this.submitFormOk.addEventListener('click', function(e) {
      e.preventDefault(); // prevent default action of the button if the form is not filled with all the infos //
      this.checkAllFields();

      if (this.checkAllFields()) {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.email);
        console.log(this.message);
        this.formOK();
        this.closeModal();
        this.reset();
      } else {
        this.formNotOK();
      }
    }.bind(this));
  }
  
  //alert form not OK //
  formNotOK() {
    alert("verifiez les champs en rouge");
  }
  // alert form is ok
  formOK() {
    alert("le formulaire a été transmis avec succès");
  }
  closeModal() {
    this.form.style.display = "none";
    this.contact.style.display = "block";
  }
  // fields error messages //
  errorMessages(field) {
    switch (field.getAttribute('id')) {
      case 'first': // Si field ID = first then display this text. //
        this.errorBlock[0].innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        break;
      case 'last':
        this.errorBlock[1].innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        break;
      case 'email':
        this.errorBlock[2].innerText = "Veuillez vérifier votre adresse email.";
        break;
      case 'message':
        this.errorBlock[3].innerText = "Veuillez remplir le champs";
        break;
    }
  }
  errorMessagesReset(field) {
    switch (field.getAttribute('id')) {
      case 'first': // Si field ID = first then display this text. //
        this.errorBlock[0].innerText = "";
        break;
      case 'last':
        this.errorBlock[1].innerText = "";
        break;
      case 'email':
        this.errorBlock[2].innerText = "";
        break;
      case 'message':
        this.errorBlock[3].innerText = "";
        break;
    }
  }
  // surligne le champs invalide // 
  highlightField(field, erreur) {
    if (erreur) {
      field.style.backgroundColor = "#fba";
      this.errorMessages(field);
    } else
      field.style.backgroundColor = "";
    // errorMessagesReset(field);
  }

  checkAllFields() {
    if (this.firstNameOk && this.lastNameOk && this.emailOk && this.messageOk) { // if  var set to true all fields are OK so function return true //
      return true;
    } else {
      if (!this.firstNameOk) {
        this.firstName.style.backgroundColor = "#fba";
      }
      if (!this.lastNameOk) {
        this.lastName.style.backgroundColor = "#fba";
      }
      if (!this.emailOk) {
        this.email.style.backgroundColor = "#fba";
      }
      if (!this.messageOK) {
        this.message.style.backgroundColor = "#fba"
      }
      return false;
    }
  }
  /* reset all var to false after submiting*/
  reset() {
    this.firstNameOk = false;
    this.lastNameOk = false;
    this.emailOk = false;
    this.messageOK = false;
  }
}