import "./styles/index.css";
import { initialCards, cardContainer, popupFormImage, popupProfile, popupCloseIcon, closeFormImage } from "../utils/constants.js";
import { addCardForm } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { userInfo } from "../components/UserInfo.js";

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#elements");
      const cardElement = card._createCard();
      cardList.setItem(cardElement);
    },
  },
  cardContainer
);
cardList.renderItems();

const popupWithFormProfile = new PopupWithForm(
  popupProfile,
  "popup-visible",
  (inputValues) => {
    userInfo.setUserInfo(inputValues[0].value, inputValues[1].value);
    popupWithFormProfile.close();
  },
  popupCloseIcon.addEventListener("click", () => {
    popupWithFormProfile.close();
  })
);

const popupWithForm = new PopupWithForm(
  popupFormImage,
  "visibility",
  addCardForm,
  closeFormImage.addEventListener("click", () => {
    popupWithForm.close();
  })
);

const validar = new FormValidator({});
validar.enableValidation();
const formularios = Array.from(document.querySelectorAll(".popup__container"));
formularios.forEach((elemento) => {
  elemento.addEventListener("input", (evt) => {
    validar.enableValidation();
  });
});