export const $ = () => document.querySelector.call(this, arguments);
HTMLElement.prototype.on = (event, handler, option) => this.addEventListener(event, handler, option);