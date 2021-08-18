# NODE.JS - Determining Unworthy Domains

### About

Building upon the technology of the existing npm package 'is-porn' (https://github.com/ishan-marikar/is-porn), which does an nslookup on the OpenDNS 'FamilyShield' resolver, and returns a true or false value if a given website domain is a pornography website, this package returns a similar boolean value of a given website domain if it is a church-worthy (or family friendly) website domain.

First, the given URL is run through the 'is-porn' package, and if it's deemed to not be pornography, the given domain name is then matched against an array of banned keywords, and against known hate-group websites.

This technology is being built for a church-centric URL shortening service (similar to bit.ly), and I want to ensure people can't use this service to post links to websites such as The Church of Satan, or Atheist community websites, for instance.

Unfortunately, I am not aware of a FamilyShield resolver for churches, so for the time being we're doing it the old fashioned way by manually searching for specific keywords, which may cause unforeseen bugs. For instance, i can't put the word "ass" on the banned keywords list, because a website with the name such as "Churchpass" (or whatever), would be banned for inadvertently including the word "ass".

### TO DO LIST

My current banned keyword list is a collection of simple naughty words (caution: don't let your kids look at this list). I plan on scouring websites such as the ADL or the SPLC to add domains for hate groups (such as the Westboro Baptist Church, or The Daily Stormer), and eventually find sites that are anti-church, and add them to the list. Ultimately, I'd like to release this as my very first official npm package for others to use in the future.
