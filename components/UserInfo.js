import { profileName, profileSkill } from "../utils/constants.js";

export class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._skill = job;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      work: this._skill.textContent,
    };
  }
  
  setUserInfo(newName, newJob) {
    profileName.textContent = newName;
    profileSkill.textContent = newJob;
  }
}

export const userInfo = new UserInfo(profileName, profileSkill);