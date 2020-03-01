const displayAbout = () => {
  const main = document.getElementById('main');
  main.innerHTML = /*html*/ `
    <div id="intro">
      <p class=about>
        Hi, my name is Dan Meloy.<br><br>I am a full-stack software engineer based out of Portland, Oregon. I use powerful technologies such as React, Redux, Express, & Node to build beautiful, client-oriented, full-stack applications.
      </p>
      <p>
        My background ranges from 
      </p>
    </div>
  `;
}

export default displayAbout;
