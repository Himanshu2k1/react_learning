import React, { Component } from "react";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default class List extends Component {
  render() {
    // creating list of chemist profession scientists
    const chemists = people.filter((person) => person.profession === "chemist");

    // list of other profession scientists
    const everyoneElse = people.filter(
      (person) => person.profession !== "chemist"
    );

    return (
      <article>
        <h1>Scientists</h1>
        {/* rendering chemists */}
        <h2>Chemists</h2>
        <ul>
          {chemists.map((person) => (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
              </p>
            </li>
          ))}
        </ul>

        {/* rendering others */}
        <h2>Everyone Else</h2>
        <ul>
          {everyoneElse.map((person) => (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
              </p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
