var roles = {
    type: "Admin", // Default value of properties 
    displayType: function () {
        // Method which will display type of role 
        console.log(this.type);
    }
}
// Create new role type called super_role 
var super_role = Object.create(roles);
super_role.displayType(); // Output:Admin  

// Create new role type called Guest 
var guest_role = Object.create(roles);
guest_role.type = "Guest";
guest_role.displayType(); // Output:Guest
