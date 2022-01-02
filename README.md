Login/Register portion of the project MiniMint

This section consists of the pages Login, Register, ChangePassword, and the store.
Some pages contain axios calls to the backend. The backend was built using the java
framwork spring. 

**Technologies used**
This section was built on React and reqiures imports such as:

@reduxjs/toolkit react-redux

axios

bootstrap

**Styling**
This was done with a combination of bootstrap and CSS.

**Login**
This page allows users to login with their username and password

**Register** 
This page allows for new users to sign up and collects a username, email, password for the account.

**ChangePassword** 
Allows users to Change their password after they have logged in

**Navbar** 
For user Navigation from page to page. **add explination upon completetion 

**Footer** 
Additional Notes and messages

**Store**
The store was build using react toolkit and incorperates one Slice for the user. The 
store is used to house the state of the user and allows the whole app to access vital
user information. Certain actions can also be taken using the store including actions
like loggin in and out. Login sets the state with values of that user and logout resets
the state to its default.
