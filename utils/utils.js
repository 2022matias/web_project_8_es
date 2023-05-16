import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { cardContainer, openFormButton, openFormImage, popupFormImage, popupProfile } from "./constants.js";

export function addCardForm(values, evt) {
  evt.preventDefault();
  const title = values[0].value;
  const image = values[1].value;
  const data = [{ name: title, link: image }];
  const cardList = new Section(
    {
      items: data,
      renderer: (item) => {
        const card = new Card(item, "#elements");
        const cardElement = card._createCard();
        cardList.setItemStart(cardElement);
      },
    },
    cardContainer
  );
  cardList.renderItems();
  this.close();
}

openFormImage.addEventListener("click", () => {
  const popupWithForm = new PopupWithForm(
    popupFormImage,
    "visibility",
    () => {}
  );
  popupWithForm.open();
});

openFormButton.addEventListener("click", () => {
  const popupWithForm = new PopupWithForm(
    popupProfile,
    "popup-visible",
    () => {}
  );
  popupWithForm.open();
});