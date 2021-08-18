const isPorn = require("is-porn");
const psl = require("psl");
const extractHostname = require("./extractHostname");
const bannedKeywords = require("./bannedKeywords");

// let url = "https://www.pornhub.com/view_video.php?viewkey=ph5b576748add25";
let url = "https://www.churchofsatan.com/";
// isPorn(psl.get(extractHostname(url)), (err, status) => console.log(status));

isPorn(psl.get(extractHostname(url)), (err, status) => {
  if (status) {
    console.log("this is an unworthy link for our site");
  } else {
    // if returns false, then search extractedHostname for keywords
    console.log("this is not a porn site");
    bannedKeywords.forEach((keyword) => {
      if (psl.get(extractHostname(url)).includes(keyword)) {
        console.log(
          `contains banned keyword: ${keyword}. this is an unworthy link for our site`
        );
      }
    });
  }
});
