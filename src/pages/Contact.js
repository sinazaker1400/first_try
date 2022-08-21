import logo from "/home/afagh/sina/react_apps/first_try/src/logo.svg";
import "/home/afagh/sina/react_apps/first_try/src/App.css";

function Contact() {
  return (
    <div className="App clearFix">
      <header className="App-header">
        <p className="sina">Sina Zaker</p>

        <div className="a-img">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/sinazaker1370"
            target="_blank"
            rel="noopener noreferrer"
          >
            My linkedin
            <img
              className="icons"
              src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png"
            />
          </a>
        </div>

        <div class="img-container-div">
          <img src={logo} className="devider-img" />
          <img src={logo} className="devider-img-reverse" />
        </div>

        <div className="a&img">
          <a
            className="App-link"
            href="https://github.com/sinazaker1400"
            target="_blank"
            rel="noopener noreferrer"
          >
            My github
            <img
              className="icons"
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            />
          </a>
        </div>

        <div class="img-container-div">
          <img src={logo} className="devider-img-reverse" />
          <img src={logo} className="devider-img" />
        </div>

        <div className="a&img">
          <a
            className="App-link"
            href="https://www.codewars.com/users/sinazaker1400"
            target="_blank"
            rel="noopener noreferrer"
          >
            My codewars
            <img
              className="icons"
              src="https://www.codewars.com/packs/assets/logo.61192cf7.svg"
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Contact;
