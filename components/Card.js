import { enlargeImage } from "../utils/constants.js";
import { popupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._element = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);
    this._likeButton = this._element.querySelector(".element__heart");
    this._image = this._element.querySelector(".element__image");
    this._deleteButton = this._element.querySelector(".element__trash");
    this._keyHandlerBind = this._keyHandler.bind(this);
    this._clickHandlerBind = this._clickHandler.bind(this);
    this._clickButtonBind = this._clickButton.bind(this);
  }

  _createCard() {
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
        this._giveLike();
      });
      this._image.addEventListener("click", (evt) => {
        this._zoomIn(evt);
      });
      this._deleteButton.addEventListener("click", () => {
        this._deleteCard();
      });
  }

  _giveLike() {
    this._likeButton.classList.toggle("element__heart-black");
  }
  
  _zoomIn(evt) {
    popupWithImage.open(evt);
    document.addEventListener("keydown", this._keyHandlerBind);
    document.addEventListener("click", this._clickHandlerBind);
    document.querySelector(".enlarge-image__close-image").addEventListener("click", this._clickButtonBind);
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
  
  _addClass() {
    enlargeImage.classList.add("no-vision");
    enlargeImage.classList.add("opacity");
    document.removeEventListener("keydown", this._keyHandlerBind);
    document.removeEventListener("click", this._clickHandlerBind);
    document.querySelector(".enlarge-image__close-image").removeEventListener("click", this._clickButtonBind);
  }

  _keyHandler(evt) {
      if (evt.key === "Escape") {
        this._addClass();       
      }
    };

    _clickHandler(clickEvent) {
      if (clickEvent.target.className === "fondo") {
        this._addClass();       
      }
    }

    _clickButton() {
      this._addClass();
    }
}