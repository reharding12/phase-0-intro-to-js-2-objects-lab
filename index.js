const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    // Create a new object by spreading the original employee object
    const updatedEmployee = { ...employee };
  
    // Add or update the key-value pair in the new object
    updatedEmployee[key] = value;
  
    // Return the updated employee object
    return updatedEmployee;
  };
  
  const employee = {
    name: "Debbie",
    streetAddress: "123 Main St",
  };
  
  console.log(updateEmployeeWithKeyAndValue(employee, "position", "Manager"));
  

  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    // Update the employee object with the given key-value pair
    employee[key] = value;
  
    // Return the updated employee object
    return employee;
  };
  
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Manager"));

  const deleteFromEmployeeByKey = (employee, key) => {
    // Create a new object by spreading the original employee object
    const updatedEmployee = { ...employee };
  
    // Delete the key from the new object
    delete updatedEmployee[key];
  
    // Return the updated employee object
    return updatedEmployee;
  };
  
  console.log(deleteFromEmployeeByKey(employee, "streetAddress"));

  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    // Delete the key from the original employee object
    delete employee[key];
  
    // Return the updated employee object
    return employee;
  };
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));