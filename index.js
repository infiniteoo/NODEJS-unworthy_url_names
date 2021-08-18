const isPorn = require("is-porn");
const psl = require("psl");

/* example use for is-porn

isPorn("adult-site.com", function (error, status) {
  console.log("adult-site.com :", status);
}); */

let url = "http://www.youtube.com/watch?v=ClkQA2Lb_iE";
console.log(psl.get(extractHostname(url))); // returns youtube.com

function extractHostname(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }

  //find & remove port number
  hostname = hostname.split(":")[0];
  //find & remove "?"
  hostname = hostname.split("?")[0];

  return hostname;
}

/* test the code
console.log("== Testing extractHostname: ==");
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
