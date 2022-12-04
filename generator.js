import { firstNames, lastNames, jobs } from "./data.js";

// Fake Phone Number generator
console.log("-------------Fake Phone Number generator------------------")

const phoneNumberGenerator = () => {
    let result = 0;
    result = Math.floor((Math.random() * 1000000000) + 1);
    return "+" + result;
}
console.log(phoneNumberGenerator())

// Fake Email generator
console.log("--------------Fake Email generator-------------------")

const emailGenerator = (name1, name2) => {
    let result = "";
    result = name1 + "." + name2 + "@gmail.com";
    return result;
}
console.log(emailGenerator("Anna", "Kowalska"));

// Random Last Name
console.log("--------------Random Last Name-------------------")

const randomFromList = (array) => {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
}
console.log(randomFromList(firstNames));

// Fake profile generator
console.log("--------------Fake profile generator-------------------")

const profileGenerator = (firstName, lastNames, jobs, randomFromList, phoneNumberGenerator, emailGenerator) => {
    let obj = {};
    obj.name = { first: firstName, last: randomFromList(lastNames) };
    obj.job = randomFromList(jobs);
    obj.phone = phoneNumberGenerator();
    obj.email = emailGenerator(firstName, obj.name.last);
    return obj;
}
console.log(profileGenerator("Martin", lastNames, jobs, randomFromList, phoneNumberGenerator, emailGenerator));

// Give it a GO
console.log("--------------------------Give it a GO------------------------------")

const profilMaker = (array) => {
    let profiles = [];
    let profile = {};
    array.forEach(name => {
        profile = profileGenerator(name, lastNames, jobs, randomFromList, phoneNumberGenerator, emailGenerator);
        profiles.push(profile);
    });
    return profiles;
};

let fakeProfiles = profilMaker(firstNames);
console.log(fakeProfiles);

// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
    toExport = [
        { name: "phoneNumberGenerator", content: phoneNumberGenerator, type: "function" },
        { name: "emailGenerator", content: emailGenerator, type: "function" },
        { name: "randomFromList", content: randomFromList, type: "function" },
        { name: "profileGenerator", content: profileGenerator, type: "function" },
        { name: "fakeProfiles", content: fakeProfiles, type: "array" },
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport }
