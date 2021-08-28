export default class Form {
  constructor(profil) {
    this.profil = profil,
    console.log(this.profil)

    // DOM Elements // 
    this.form = document.querySelector(".form");
    this.contact = document.querySelector(".profil__contact");
    this.closeForm = document.querySelector(".form__close");
    this.header = document.querySelector(".form__header");
    this.headerTemplate = `<h1 class="form__header--title">Contactez-moi <br/>${this.profil[0].name}</h1>`;
    this.header.innerHTML = this.headerTemplate;
    this.submitFormOk = document.querySelector(".form__submit");
    this.errorBlock = document.getElementsByClassName("form__error");
    this.data = document.querySelectorAll(".form__data");


    // all var declared //
    this.regLetters = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
    this.regmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    this.firstNameOk = false;
    this.lastNameOk = false;
    this.emailOk = false;
    this.messageOk = false;
    console.log(this.data)



    this.data.forEach(item => item.addEventListener('blur', function () {
      console.log(item.id)
        // check first name field // 
      if (item.id === "first") {
        if (item.value.length < 2 || !this.regLetters.test(item.value)) { // if this field length =
          this.highlightField(item, true);
        } else {
          this.highlightField(item, false);
          this.errorMessagesReset(item);
          this.firstNameOk = true;
        }
          // check last name field // 
      } else if (item.id === "last") {
        if (item.value.length < 2 || !this.regLetters.test(item.value)) {
          this.highlightField(item, true);
        } else {
          this.highlightField(item, false);
          this.errorMessagesReset(item);
          this.lastNameOk = true;
        }
          // check email field // 
      } else if (item.id === "email") {
        if (item.value.length < 2 || !this.regmail.test(item.value)) {
          this.highlightField(item, true);
        } else {
          this.highlightField(item, false);
          this.errorMessagesReset(item);
          this.emailOk = true;
        }
          // check textarea field // 
      } else if (item.id === "message") {
        if (item.value.length < 1 || item.value > 100) { // if length of item is sup or equal to 1 and 
          this.highlightField(item, true);
        } else {
          this.highlightField(item, false);
          this.errorMessagesReset(item);
          this.messageOk = true;
        }
      }
    }.bind(this)));

    this.contact.addEventListener('click', function () {
      this.contact.style.display = "none";
      this.form.style.display = "block";
    }.bind(this));

    // close form //
    this.closeForm.addEventListener('click', function () {
      this.form.style.display = "none";
      this.contact.style.display = "block";
    }.bind(this));

    // submit form + message //
    this.submitFormOk.addEventListener('click', function (e) {

      e.preventDefault(); // prevent default action of the button if the form is not filled with all the infos //
      this.checkAllFields();

      if (this.checkAllFields()) {
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




  // check last name field //
  checkLast(field) {
    if (field.value.length < 2 || !this.regLetters.test(field.value)) {
      highlightField(field, true);
    } else {
      highlightField(field, false);
      errorMessagesReset(field);
      lastNameOk = true;
    }
  }

  // check email //
  checkMail(field) {
    if (field.value.length < 2 || !this.regmail.test(field.value)) {
      highlightField(field, true);
    } else {
      highlightField(field, false);
      errorMessagesReset(field);
      emailOk = true;
    }
  }

  // check le champ message //
  checkMessage(field) {
    if (field.value.length < 1 || field.value > 100 || !this.regNumbers.test(field.value)) { // if length of field is sup or equal to 1 and 
      highlightField(field, true);
    } else {
      highlightField(field, false);
      errorMessagesReset(field);
      messageOk = true;
    }
  }

  checkAllFields() {
    if (this.firstNameOk && this.lastNameOk && this.emailOk && this.messageOk) { // if functions or var = true all fields are OK so function return true //
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