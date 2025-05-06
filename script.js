// Récupération des éléments HTML5
const navigation = document.querySelector(".header__navigation");
//console.log(navigation);
const menuBurger = document.querySelector(".header__burger__btn");
//console.log(menuBurger);
const navLinks = document.querySelectorAll(".header__link");
//console.log(navLinks);
const footerCopyrightYear = document.querySelector(".footer__text__year");
//console.log(footerCopyrightYear);
const lastNameEmoji = document.querySelector(".lastNameEmoji");
//console.log(lastNameEmoji);
const firstNameEmoji = document.querySelector(".firstNameEmoji");
//console.log(firstNameEmoji);
const emailEmoji = document.querySelector(".emailEmoji");
//console.log(emailEmoji);
const firstName = document.querySelector("#firstName");
//console.log(firstName);
const lastName = document.querySelector("#lastName");
//console.log(lastName);
const email = document.querySelector("#email");
//console.log(email);
const arrowBtn = document.querySelector(".arrow__btn");
//console.log(arrowBtn)

// Déclaration de la fonction toggleNav qui va permettre l'affichage des liens de navigation
const toggleNav = () => {
  menuBurger.classList.toggle("active");
  navigation.classList.toggle("active");
};

// Ecoute de l'événement "click" sur le bouton menuBurger et appel de la fonction toggleNav
menuBurger.addEventListener("click", toggleNav);

navLinks.forEach((link) =>
  // Ecoute de l'événement click
  link.addEventListener("click", (e) => {
    // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
    e.stopPropagation();
    // Appel de la fonction toggleNav
    toggleNav();
  })
);

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();

// Regex
const regexName = /^[A-Z][A-Za-z\é\è\ê\ô\-]+$/;
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

/**
 * Déclaration de la fonction lastNameValidation pour la validation du champ nom
 *  @param {String} lastName
 */
const lastNameValidation = (lastName) => {
  // Ecoute de l'événement "change" sur l'input lastName
  lastName.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexName.test(lastName.value) == false) {
      lastNameEmoji.textContent = "❌";
      return false;
    } else {
      lastNameEmoji.textContent = "✔️";
      return true;
    }
  });
};
// Appel de la fonction lastNameValidation
lastNameValidation(lastName);

/**
 * Fonction firstNameValidation pour la validation du champ prénom
 * @param {String} firstName
 */
const firstNameValidation = (firstName) => {
  // Ecoute de l'événement "change" sur l'input firstName
  firstName.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexName.test(firstName.value) == false) {
      firstNameEmoji.textContent = "❌";
      return false;
    } else {
      firstNameEmoji.textContent = "✔️";
      return true;
    }
  });
};
// Appel de la fonction firstNameValidation
firstNameValidation(firstName);

/**
 * Déclaration de la fonction emailValidation pour la validation du champ email
 * @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "change" sur l'input email
  email.addEventListener("change", (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) == false) {
      emailEmoji.textContent = "❌";
      return false;
    } else {
      emailEmoji.textContent = "✔️";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);

// Déclaration de la fonction send qui permet d'envoyer les données
const send = () => {
  // Récupération du bouton "S'inscrire !"
  const btn = document.querySelector(".submit__btn");
  // Ecoute de l'événement "click" sur le bouton
  btn.addEventListener("click", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    if (
      regexName.test(firstName.value) == false ||
      regexName.test(lastName.value) == false ||
      regexEmail.test(email.value) == false
    ) {
      alert("Veuillez remplir correctement tous les champs du formulaire !");
    } else {
      // Création de l'objet contact
      const contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      };
      console.log(contact);
      alert(
        "Inscription confirmée ! Nous allons vous envoyer un mail contenant les dates de nos prochains évènements. Cordialement."
      );
      // Rechargement de la page
      window.location.reload();
      lastName.value = "";
      firstName.value = "";
      email.value = "";
    }
  });
};
// Appel de la fonction send()
send();

// Déclaration de la fonction scrollTo qui va permettre à l'utilisation de revenir en haut de la page web
const scrollTo = () => {
  // Ecoute de l'événement "click" sur la flèche
  arrowBtn.addEventListener("click", () => {
    // La méthode Window.scrollTo() permet de faire défiler la fenêtre pour atteindre les coordonnées données dans le document.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Le défilement se fait en douceur
    });
  });
};

// Appel de la fonction scrollTo()
scrollTo();
