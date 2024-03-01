class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<p class="subtlefont">
  <a href="https://creativecommons.org/licenses/by-nc/2.0/">
    <img src="https://snagglesnaps.neocities.org/resources/88x31_cc.png">
  </a><br>
 All my photos are under the CC BY-NC licence (meaning you may freely use and/or edit my photos for any non-commercial use. Attribution nice but not necessary)
 </p>
    `;
  }
}

customElements.define('footer-component', Footer);
