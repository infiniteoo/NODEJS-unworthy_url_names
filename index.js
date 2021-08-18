const isPorn = require("is-porn");
const psl = require("psl");
const extractHostname = require("./extractHostname");

// let url = "https://www.pornhub.com/view_video.php?viewkey=ph5b576748add25";
let url = "https://www.churchofsatan.com/";
// isPorn(psl.get(extractHostname(url)), (err, status) => console.log(status));

isPorn(psl.get(extractHostname(url)), (err, status) => {
  if (status) {
    console.log("this is an unworthy link for our site");
  } else {
    // if returns false, then search extractedHostname for keywords
    console.log("this is not a porn site");
    if (psl.get(extractHostname(url)).includes("satan")) {
      console.log(
        "contains banned keyword. this is an unworthy link for our site"
      );
    }
  }
});


