try {
    let auth = require("./auth/auth.json");
} catch (e) {
    console.log(e.stack);
    console.log("ERROR: No auth file detected.  Please make sure to include the authorization client secret.");
    process.exit();
}
const { google } = require('googleapis');

var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];
const jwt = new google.auth.JWT( auth.email, null, auth.token)

//   console.log(auth.token);
//       // Replace with your client ID from the developer console.
//   var CLIENT_ID = auth.token;

//   // Set authorized scope.
//   

