const displayAbout = () => {
  const main = document.getElementById('main');
  main.innerHTML = /*html*/ `
    <div id="intro">
      <p>
        Hi, my name is <span id="name">Dan Meloy</span>.<br>I am a <span id="title">full-stack software engineer</span> based out of Portland, Oregon. I utilize <span class='highlight'>powerful technologies</span> such as <span class='hightlight'>React, Redux, Express, & Node</span> to build <span class='hightlight'>beautiful, client-oriented, full-stack applications</span>.
      </p>
      <p>
        My
    </div>
  `;
}

export default displayAbout;
