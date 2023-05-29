import './App.css';
import MyImage from './Components/Props';

function App() {
  return (
    <div id="page_wrapper">
      <div className="left_side scroller">
        <div className="top_section">
          <div className="left">
            <div id="my_photo">
              <MyImage />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="contact">
            <h2>Contact</h2>
            <ul>
              <li>Address<br />
                <span className="sm">Rivne reg., Dubno, Ukrane</span>
              </li>
              <li>Phone
                <br />
                <span className="sm"><a className="links" href='tel:+380508374201'>+380508374201</a></span>
              </li>
              <li>E-mail<br />
                <span className="sm"><a className="links" href='mailto:romangaram@gmail.com'>romangaram@gmail.com</a></span>
              </li>
              <li>Facebook<br />
                <span className="sm"><a className="links" href='https://www.facebook.com/roma.garam' target='_blank'>My page</a></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right_side">
        <section id="work_exp">
          <h2>
            <span id="letter-c" className="S">C</span>
            Work Experience</h2>
          <p className="work_exp--last">Name of employer: <span className="nt">N/A</span><br />
            Dates of employment: <span className="nt">2022 - Present time</span><br />
            Job title: <span className="nt">Unemployed. student again <a className="links" href="https://robotdreams.cc/en" target="_blank">robot_dreams</a></span><br />
            Project/Role description: <span className="nt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur rem omnis cumque cupiditate laboriosam officiis commodi, cum hic blanditiis voluptate nihil corrupti quidem ratione.</span>
          </p>
          <p className="work_exp--first">Name of employer: <span className="nt">Marlow Navigation Crew & Ship Management</span><br />
            Dates of employment: <span className="nt">2009 - 2022</span><br />
          Job title: <span className="nt">From Deck Cadet to Chief Officer on cargo ships</span><br />
          Project/Role description: <span className="nt">From Deck Cadet to Chief Officer on cargo ships at <a className="links"
            href="https://marlow-navigation.com/en/" target="_blank">Marlow Navigation Crew &
            Ship Management</a>.</span>
        </p>
      </section>
    </div>
    </div >
  );
}

export default App;
