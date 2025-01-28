# Unhandled error in Express.js async function
This repository demonstrates a common error in Express.js applications: unhandled errors in asynchronous functions.  The example shows a route that fetches user data from a database. If an error occurs during the database operation, the server crashes without providing any feedback to the client.  The solution demonstrates proper error handling using async/await and try...catch blocks.

## Bug
The `bug.js` file contains the erroneous code. The database operation is not handled properly. 

## Solution
The `bugSolution.js` file provides a corrected version with comprehensive error handling.