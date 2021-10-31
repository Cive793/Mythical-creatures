"use strict";

window.addEventListener("DOMContentLoaded", get);

function get() {
  fetch("https://bands-0a5b.restdb.io/rest/mythical-creatures   ", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "6176964c8597142da1745a30",
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      post();
    });
}

function post() {
  const data = {
    name: "hesiod",
    color: "lightbrown",
    age: 27,
    mythology: "greek",
    alignment: "friendly",
    texture: "skin",
    horns: false,
    species: "cyclops",
    abilities: ["giant strength"],
  };

  const postData = JSON.stringify(data);
  fetch("https://bands-0a5b.restdb.io/rest/mythical-creatures   ", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "6176964c8597142da1745a30",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
