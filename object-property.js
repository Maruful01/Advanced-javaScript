const students = [{id: 10, name: "Rohim"},
                  {id: 11, name: "Korim"},
                  {id: 12, name: "Kamal"},
                  {id: 14, name: "Sabana"},
                  {id: 15, name: "Deepjol"}
];
const output = [];
for (let i = 0; i < students.length; i++) {
    const result = students [i];
    output.push (result);
}
console.log ("for loop: " + output);
const names = students.map(s => s.name);
const id = students.map(i => i.id);
const biggerId = students.filter(i => i.id > 13);
console.log (biggerId);