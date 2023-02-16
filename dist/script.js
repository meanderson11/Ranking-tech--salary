var companies = [
  {
   rank: 1,
   name: 'Google', 
   salary: '$130K', 
   logo: "https://assets.codepen.io/6060109/salaries-icon-google.png"
  },
  {
    rank: 2,
    name: 'Facebook', 
    salary: '$125K', 
    logo: "https://assets.codepen.io/6060109/salaries-icon-facebook.png"
  },
  {
    rank: 3,
    name: 'LinkedIn', 
    salary: '$110K', 
    logo: "https://assets.codepen.io/6060109/salaries-icon-linkedin.png"
  },
  {
    rank: 4,
    name: 'Uber', 
    salary: '$110K', 
    logo: "https://assets.codepen.io/6060109/salaries-icon-uber.png"
  },
  {
    rank: 5,
    name: 'Amazon', 
    salary: '$105K', 
    logo: "https://assets.codepen.io/6060109/salaries-icon-amazon.png"
  },
];

var companiesElement = document.querySelector('.companies');


for (let company of companies) {
  var newCompanyElement = `
    <li class="company">
      <h3>${company.rank}.</h3>
      <img src=${company.logo}>
      <h3>${company.name}</h3>
      <h3>${company.salary}</h3>
    </li>
    `;
  companiesElement.innerHTML += newCompanyElement;
}