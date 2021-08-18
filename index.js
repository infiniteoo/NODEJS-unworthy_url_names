const isPorn = require("is-porn");
const psl = require("psl");
const extractHostname = require("./extractHostname");

let url = "https://www.pornhub.com/view_video.php?viewkey=ph5b576748add25";
let stripped = psl.get(extractHostname(url));
isPorn(stripped, (err, status) => console.log(status));

/* example use for is-porn

isPorn("adult-site.com", function (error, status) {
  console.log("adult-site.com :", status);
}); */

/* let url = "http://www.youtube.com/watch?v=ClkQA2Lb_iE";
console.log(psl.get(extractHostname(url))); // returns youtube.com */

// test the code
/* console.log("== Testing extractHostname: ==");
console.log(extractHostname("http://www.blog.classroom.me.uk/index.php"));
console.log(extractHostname("http://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("https://www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("www.youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("ftps://ftp.websitename.com/dir/file.txt"));
console.log(extractHostname("websitename.com:1234/dir/file.txt"));
console.log(extractHostname("ftps://websitename.com:1234/dir/file.txt"));
console.log(extractHostname("example.com?param=value"));
console.log(extractHostname("https://facebook.github.io/jest/"));
console.log(extractHostname("//youtube.com/watch?v=ClkQA2Lb_iE"));
console.log(extractHostname("http://localhost:4200/watch?v=ClkQA2Lb_iE")); */
