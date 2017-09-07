var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

function sortByNameAge(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var ageA = a.age;
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    var ageB = b.age;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    if (nameA == nameB) {
        return 1;
    }
 
}

students.sort(sortByNameAge);

console.log(students);