// db.employees.find();
// db.employees.find();
// db.employees.find();

db.employees.find({ department: "HR" }, { _id: 0, name: 1, email: 1 });