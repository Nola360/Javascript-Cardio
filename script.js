const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// For Each
companies.forEach(function (companies) {
  console.log(companies);
})


//For Loop
// let canDrink = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

//Filter things out from away -get ages 21 and over
// const canDrink = ages.filter(function (age) {
//   if (ages >= 21) {
//     return true;
//   }
// }

// Filter
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);


// Filter retail compaines 

// let retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {

//     return true;
//   }
// })


const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// 80s companies
const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eightiesCompanies);

// Companies that lasted 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);


// Map

// Create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name
// })

// console.log(companyNames)

// const testMap = companies.map(function (company) {
//   return 1
// })
// console.log(testMap)

// const companyName = companies.map(function (company) {
//   return `${company.name} [${companies.start} - ${companies.end}]`
// })
// console.log(companyName);

// One line Map Code
const companyName = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(companyName);

// Get Square root of ages array 

// const ageSquare = ages.map(age => Math.sqrt(age))
// const ageTimesTwo = ages.map(age => age * 2);

// Another Map version
const ageSquare = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2);
console.log(ageSquare);
// console.log(ageTimesTwo);

// Sort

// const sortCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1;
//   }
// })

// console.log(sortCompanies);

// Sort
const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortCompanies);



// Sort Age
// Pust ages in numerical order
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges)


// Reduce 

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ages += ages[i];
// }

// console.log(ageSum);

// Reduce
const ageSum = ages.reduce((total, age) =>
  total + age + 0);
console.log(ageSum);

// Get total years for all companies

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);

// Reduce
const totalYears = companies.reduce((total, company) => total + (company.end + company.start), 0);
console.log(totalYears);

// Combine All 4 methods
const combine = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combine);