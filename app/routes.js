// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line
// Branching example
router.post('/user-type-answer', function (req, res) {
    // Make a variable and give it the value from 'know-nhs-number'
    var userType = req.session.data['user-type']
  
    // Check whether the variable matches a condition
    if (userType == "employee"){
      // Send user to next page
      res.redirect('/form/employee/name')
    }
    else {
      // Send user to ineligible page
      res.redirect('/form/employer/reference')
    }
})

module.exports = router;
