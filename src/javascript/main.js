"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { rword } = require("rword");
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const { ems } = require("./assets/lib/long_arrays/emails");
const { gen } = require("./gen");
const { names } = require("./assets/lib/long_arrays/names");
const { dogs } = require("./assets/lib/long_arrays/dogs");
function Info(person, jobs, family, wife, pets, objKids) {
    const words = rword.generate(2).join("");
    const nums = array[Math.floor(Math.random() * array.length)];
    const email = `${words}${nums}@${ems[Math.floor(Math.random() * ems.length)]}`;
    const secondEmail = `${words}${nums}@${ems[Math.floor(Math.random() * ems.length)]}`;
    const generated = gen(18);
    const anothergen = gen(18);
    const fam = family === true ? "This person has a family" : "This person does not have a family";
    for (let i = 0; i < objKids.length; i++) {
        const randomAge = Math.floor(Math.random() * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].length);
        objKids[i] = {
            name: names[Math.floor(Math.random() * names.length)],
            surname: person.surname || "Doe",
            age: randomAge === 0 ? 5 : randomAge
        };
    }
    for (let y = 0; y < pets.length; y++) {
        const randomAge = Math.floor(Math.random() * 16);
        pets[y] = {
            name: dogs[Math.floor(Math.random() * dogs.length)],
            age: randomAge === 0 ? 1 : randomAge
        };
    }
    if (family === true) {
        return {
            Person: {
                Name: person.name === "" || person.name === undefined ? person.name = "Jon" : person.name,
                Surname: person.surname === "" || person.surname === undefined ? person.surname = "Doe" : person.surname,
                Age: person.age || 25,
                Email: email,
                ID: generated
            }, Jobs: jobs, Family: fam, About_Family: {
                Wife: {
                    Name: wife !== undefined ? wife : "No Wife",
                    Surname: person.surname,
                    Age: Number(person.age) - 2 || 25 - 2,
                    Email: secondEmail,
                    ID: anothergen
                },
                Kids: {
                    Number_of_kids: objKids.length,
                    About_Kids: objKids
                },
                Pets: {
                    Number_of_pets: pets.length,
                    About_pets: pets
                }
            }
        };
    }
    else {
        return {
            Person: {
                Name: person.name === "" || person.name === undefined ? "Jon" : person.name,
                Surname: person.surname === "" || person.surname === undefined ? "Doe" : person.surname,
                Age: person.age,
                Email: email,
                ID: gen(18)
            }, Jobs: jobs.join(", "), Family: "This person does not have a family"
        };
    }
    ;
}
exports.Info = Info;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3R5cGVzY3JpcHQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDM0QsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDNUQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRTFELFNBQWdCLElBQUksQ0FBQyxNQUF5RCxFQUFFLElBQW9CLEVBQUUsTUFBZ0IsRUFBRSxJQUFhLEVBQUUsSUFBb0IsRUFBRSxPQUF1QjtJQUU5SyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0QsTUFBTSxLQUFLLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENB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