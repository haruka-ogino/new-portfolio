import '../styles/home.css'

export default function Education() {
  return (
    <>
      <div>
        <h1>Education</h1>{' '}
        <div className="schooling">
          <h2>NZQA Level 6 Certificate in Applied Software Development</h2>
          <div className="subtitle">
            <h3>Dev Academy Aotearoa</h3>
            <h4>Jan – May 2024</h4>
          </div>
          <ul>
            <li>Intensive 17-week long full stack web development bootcamp.</li>
            <li>
              Successfully completed multiple projects in-class as well as
              personal ones, using{' '}
              <b>
                HTML, CSS, JavaScript and TypeScript, Git, React.js, RESTful
                APIs, Express.js, Knex.js, SQLite, Auth0 and JSON Web Tokens
                (JWT).
              </b>
            </li>
            <li>
              Developed interpersonal skills in collaboration, empathy, and
              effective communication through exercises and retrospectives.
            </li>
          </ul>
        </div>
        <div className="schooling">
          <h2>Bachelor of Engineering (Honours)</h2>
          <div className="subtitle">
            <h3>The University of Auckland</h3>
            <h4>2016 – 2019</h4>
          </div>
          <ul>
            <li>Civil and Environmental Engineering</li>
          </ul>
        </div>
      </div>
    </>
  )
}
