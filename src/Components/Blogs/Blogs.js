import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container mt-4 blogs">
      <h4>What is the difference between JavaScript & NodeJS?</h4>
      <p>Answer: </p>
      <table>
        <thead>
          <tr>
            <th>JavaScript</th>
            <th>NodeJS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              JavaScript is a programming language that is used <br /> to
              develop dynamic web applications.
            </td>
            <td>
              NodeJS is a JavaScript runtime environment which allows <br />
              JavaScript to be run on the server.
            </td>
          </tr>
          <tr>
            <td>JavaScript can only be run in the browsers.</td>
            <td>NodeJS helps to run JavaScript outside the browser.</td>
          </tr>
          <tr>
            <td>JavaScript basically used on the client side.</td>
            <td>NodeJS mostly used on the server side.</td>
          </tr>
          <tr>
            <td>JavaScript is used in frontend development.</td>
            <td>NodeJS is used in server side development.</td>
          </tr>
          <tr>
            <td>
              JavaScript is designed to build network centric applications.
            </td>
            <td>
              NodeJS is designed for data intensive real time applications.
            </td>
          </tr>
        </tbody>
      </table> <br />
      <h4>What is the difference between SQL & NoSQL?</h4>
      <p>Answer: </p>
      <table>
        <thead>
          <tr>
            <th>SQL</th>
            <th>NoSQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SQL databases schemas are rigid.</td>
            <td>NoSQL databases schemas are flexible.</td>
          </tr>
          <tr>
            <td>SQL databases are vertically scalable.</td>
            <td>NoSQL databases are horizontally scalable.</td>
          </tr>
          <tr>
            <td>SQL databases are table based.</td>
            <td>
              NoSQL databases are document, key-value, graph <br /> or wide
              column stores.
            </td>
          </tr>
          <tr>
            <td>SQL databases are relational.</td>
            <td>NoSQL databases are non-relational.</td>
          </tr>
          <tr>
            <td>SQL databases are structured query language.</td>
            <td>NoSQL databases are no declarative query language.</td>
          </tr>
        </tbody>
      </table> <br />
      <h4>
        When should you use NodeJS & when should you use MongoDB?
      </h4>
      <p>
        Answer: <br />
        Where to use NodeJS: <br />
        <div>
          <ul>
            <li>Real time applications</li>
            <li>IoT applications</li>
            <li>Data streaming applications</li>
            <li>Applications relying on scalability</li>
          </ul>
        </div>
        Where to use MongoDB: <br />
        <div>
          <ul>
            <li>Storing large volumes of data without structure</li>
            <li>Using cloud computing & storage</li>
            <li>Rapid development</li>
          </ul>
        </div>
      </p>
      <h4>What is the purpose of JWT? How does it work?</h4>
      <p>
        Answer: <br />
        Purpose of JWT: <br />
        The purpose of using JWT is not only to hide data but also to ensure the
        reliability of the data. JWT is signed & encoded but not encrypted.
        <br />
        How it works: <br />
        The identity provider creates a JWT certifying user identity then
        resource server decodes & verifies the reliability of the token using
        secret salt or public key. Steps:
        <div>
          <ul>
            <li>User login using username & password.</li>
            <li>
              Authentication server confirms the credentials & issues a JWT
              signed using either a secret salt or a private key.
            </li>
            <li>
              User's client uses the JWT to access protected resources by
              passing the JWT in HTTP authorization header.
            </li>
            <li>
              Resource server then confirm the reliability of the token using
              the secret salt or public key.
            </li>
          </ul>
        </div>
      </p>
    </div>
  );
};

export default Blogs;