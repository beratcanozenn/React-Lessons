import "bulma/css/bulma.css";
import "./App.css";
import Course from "./components/Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import CompleWeb from "./images/kompleweb.jpg";
function App() {
  return (
    <div>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                title="Angular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a atque laborum obcaecati blanditiis maiores impedit eos nam neque debitis?"
                image={Angular}
              />
            </div>
            <div className="column">
              <Course
                title="C#"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a atque laborum obcaecati blanditiis maiores impedit eos nam neque debitis?"
                image={CSharp}
              />
            </div>
            <div className="column">
              <Course
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a atque laborum obcaecati blanditiis maiores impedit eos nam neque debitis?"
                image={Bootstrap}
              />
            </div>
            <div className="column">
              <Course
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a atque laborum obcaecati blanditiis maiores impedit eos nam neque debitis?"
                image={CompleWeb}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
