import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, classSelector, submitCallBack) {
    super(popupSelector, classSelector);
    this._popupSelector = popupSelector;
    this._submitCallBack = submitCallBack;
    this.setEventListeners();
  }
  _getInputValues() {
    return Array.from(this._popupSelector.querySelectorAll(".popup__input"));
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector(".popup__container")
      .addEventListener("submit", (evt) => {
        this._submitCallBack(this._getInputValues(), evt);
      });
  }

  close() {
    super.close();
    this._popupSelector.querySelector(".popup__container").reset();
  }
}