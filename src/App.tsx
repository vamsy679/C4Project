import React from "react";
import "./App.css";
import "./style.css";
import { Phone, Envelope } from "phosphor-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        RDX Solutions
        <header className="slogan">
          "Software so good, you'll have to C4 yourself!"
        </header>
      </header>
      <div>
        <div className="about"></div>
        <header
          className="App-header"
          style={{
            fontSize: "34px",
            padding: "10px 50px",
            color: "white",
            lineHeight: 3.4,
            textShadow: " text-shadow: red -3px 0, blue 3px 0;",
          }}
        >
          Meet the team
        </header>
        {/* Name, Photo and Employee details start here  */}
        <div className="cards-wrapper">
          <div className="card">
            <div className="card-image">
              <img
                src={require("./images/OliviaJacobsson.jpeg")}
                alt="Profile"
              />
            </div>
            <p className="name">Olivia Jacobsson</p>
            <p>Manager - P&S</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46733872960{" "}
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" olija587@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/JohannaLundin.jpg")} alt="Profile" />
            </div>
            <p className="name">Johanna Lundin</p>
            <p>Project Manager</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46761918218
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" johlu784@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/JakobSalemyr.jpg")} alt="Profile" />
            </div>
            <p className="name">Jakob Salemyr</p>
            <p>Communication Support</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46707436655
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" jaksa546@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/Axel.png")} alt="Profile" />
            </div>
            <p className="name">Axel Mannerson</p>
            <p>Lead Analyst</p>

            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46707556983{" "}
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" axema783@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/Erik.jpg")} alt="Profile" />
            </div>
            <p className="name">Erik Kristiansson</p>
            <p>Analyst</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" erikr278@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/Siri.jpg")} alt="Profile" />
            </div>
            <p className="name">Siri Selander</p>
            <p>Analyst</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46704447278
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" sirse488@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/Erika_Hansson.jpg")} alt="Profile" />
            </div>
            <p className="name">Erika Hansson</p>
            <p>Product Manager</p>

            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46{""}
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" eriha368@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/Dante.jpg")} alt="Profile" />
            </div>
            <p className="name">Dante Davill Glas</p>
            <p>Tester</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46707589120
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" danda691@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/Joel.jpg")} alt="Profile" />
            </div>
            <p className="name">Joel Nilsson</p>
            <p>Lead Tester</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46707315944
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" joeni320@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/gustavn.jpg")} alt="Profile" />
            </div>
            <p className="name">Gustav Nordlander</p>
            <p>Tester</p>

            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46760242724
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" gusno450@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/Vincent.jpeg")} alt="Profile" />
            </div>
            <p className="name">Vincent Bring</p>
            <p>Quality Coordinator</p>

            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46737725952
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" vinbr948@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/Adam.jpg")} alt="Profile" />
            </div>
            <p className="name">Adam Åström</p>
            <p>R&D Manager</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46738213030
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" adaas672@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/Elias.jpg")} alt="Profile" />
            </div>
            <p className="name">Elias Leijonmarck</p>
            <p>Lead Architect</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46762133348
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" elile642@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/AxelE.jpeg")} alt="Profile" />
            </div>
            <p className="name">Axel Ekblom</p>
            <p>Architect</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46738444546
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" axeek668@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/FredrikH.jpg")} alt="Profile" />
            </div>
            <p className="name">Fredrik Hammarbäck</p>
            <p>Development Manager</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46705512556
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" freha662@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/Madeleine.jpg")} alt="Profile" />
            </div>
            <p className="name">Madeleine Jacobson</p>
            <p>Process Manager - R&D</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46702878707
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" madja351@student.liu.se"}
              </h4>
            </ul>
          </div>
          
          <div className="card">
            <div className="card-image">
              <img src={require("./images/RickardP.png")} alt="Profile" />
            </div>
            <p className="name">Rickard Peters</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46730547333
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" ricpe737@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/Martin.jpg")} alt="Profile" />
            </div>
            <p className="name">Martin Hörnberg</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46733952022
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" marho558@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/MagB.jpg")} alt="Profile" />
            </div>
            <p className="name">Magdalena Bohlin</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46762009226
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{"magbo734@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/JakobB.jpeg")} alt="Profile" />
            </div>
            <p className="name">Jakob Berggren</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46739011096
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" jakbe841@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/vamsy.jpg")} alt="Profile" />
            </div>
            <p className="name">Vamsy GVS</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46793500700
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email: gonve175@student.liu.se
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/hugo.jpeg")} alt="Profile" />
            </div>
            <p className="name">Hugo Björk</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46707232389
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" hugbj806@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/Anton_Nordin.png")} alt="Profile" />
            </div>
            <p className="name">Anton Nordin</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46738392044
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" antno521@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/AxelJ.jpg")} alt="Profile" />
            </div>
            <p className="name">Axel Jönsson</p>
            <p>Developer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46708880121
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" axejo347@student.liu.se"}
              </h4>
            </ul>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={require("./images/oscar.jpg")} alt="Profile" />
            </div>
            <p className="name">Oscar Erik Josef Söderlund</p>
            <p>Technical Writer</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46738517617
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" oscso651@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/gustav.jpeg")} alt="Profile" />
            </div>
            <p className="name">Gustav Kindgren</p>
            <p>Deployment Manager</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46768012360
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" guski416@student.liu.se"}
              </h4>
            </ul>
          </div>
          <div className="card">
            <div className="card-image">
              <img src={require("./images/FilipKindell.jpg")} alt="Profile" />
            </div>
            <p className="name">Filip Kindell</p>
            <p>Integrator</p>
            <ul>
              <h4 style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Phone size={20} />
                Phone: +46763073289
              </h4>
              <h4 style={{ display: "flex", gap: 10 }}>
                <Envelope size={20} />
                Email:{" filki478@student.liu.se"}
              </h4>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <h5>Last Updated &#9201; on 16 September 2022</h5>
        <h5>Designed and Developed using ReactJS/CSS. By, Vamsy GVS &#128578;.</h5>
      </footer>
    </div>
  );
}
export default App;
