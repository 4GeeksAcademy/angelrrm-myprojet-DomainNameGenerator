/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "is"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".es", ".ve", ".eu"];

let container = document.querySelector(".yellow-banner");
let domainList = "";

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < extension.length; e++) {
        let domainName = pronoun[p] + adj[a] + noun[n] + extension[e];
        domainList += domainName + "<br>";
      }
    }
  }
}

container.innerHTML = domainList;
