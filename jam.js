// const jobs = [
//   { name: "bojo", position: "worker", salary: 2000 },
//   { name: "jam", position: "programmer", salary: 10000 },
//   { name: "eli", position: "boss", salary: 3000 },
//   { name: "mira", position: "seo", salary: 4000 },
// ];

// /** @param {Array<{position: string,salary: number,name: string}>} jobs */
// function firm(jobs) {
//   const interns = [
//     { name: "mojo", position: "worker", salary: 500 },
//     { name: "jojo", position: "worker", salary: 500 },
//     { name: "gojo", position: "worker", salary: 500 },
//   ];

//   interns.forEach(person => jobs.push(person));

//   for (const job of jobs) {
//     console.log("=====================================================");
//     console.log(
//       `[ Our beloved ${job.name} who is ${job.position} this month made $${job.salary} ]`
//     );
//   }

//   const boss = jobs.find((person) => person.position === "boss");
//   const totalSalaries = jobs.reduce((acc, person) => acc + person.salary, 0);

//   console.log(`[ Our boss ${boss.name} payed total of $${totalSalaries} ]`);
// }

// firm(jobs);

[
    'bojo, 1000',
    'bojo, 1000',
    'bojo, 1000',
    'bojo, 1000',
    'bojo, 1000',
    'bojo, 1000',
    'bojo, 1000',
].map((person) => person.split(', '))
.forEach(person => {
    console.log(
        person[0] , 'made total of $' + person[1]
    )
})
