class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var p = window.location.pathname;

    var index = (p.length === 0 || p === "/" || p.match(/^\/?index/)) 
    if ((window.matchMedia("(max-width: 767px)").matches) && index)
     //if (index)
    {
      // The viewport is less than 768 pixels wide
      this.innerHTML = `<p><ul><li><a href="https://snagglesnaps.neocities.org">back</a></li></ul></p>`
    }
    else
    {
      this.innerHTML = `
<p>
 <ul>
 <li><a href="https://snagglesnaps.neocities.org">home</a></li>
 <li><a href="https://snagglesnaps.neocities.org/contact_me.html">contact me</a></li>
 <li><a href="https://snagglesnaps.neocities.org/photographers.html">other photographers</a></li>
 <br>
 <h4>my photos</h4>
 <li><a href="https://snagglesnaps.neocities.org/galleries/bug-out/bugout.html">you don't belong here</a></li>
 <br>
 <b>natural history</b>
   <li><a href="https://snagglesnaps.neocities.org/galleries/wildflowers/wildflowers.html">wildflower project</a></li>
   <li><a href="https://snagglesnaps.neocities.org/galleries/carnations/carnations.html">carnations</a></li>
   <li><a href="https://snagglesnaps.neocities.org/galleries/mushrooms/mushs.html">mushrooms</a></li>
   <br>
 <b>fan photography</b><br>
   <li><a href="https://snagglesnaps.neocities.org/galleries/acnh/acnh.html">animal crossing</a></li>
   <li><a href="https://snagglesnaps.neocities.org/galleries/galaxy-desserts/page.html">The galaxy, and the ground within</a></li>
   <li><a href="https://snagglesnaps.neocities.org/galleries/otgw/overthegardenwall.html">Over the garden wall<a></li>
 </ul>
 </p>
    `;
    }
  }
}

customElements.define('navigation-component', Nav);
