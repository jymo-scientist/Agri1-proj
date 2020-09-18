// const express = require('express')
// const router = express.Router()
// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const FarmerSignUp = mongoose.model('FarmerSignUp')

// //create router
// router.get('/',(req,res)=>{
//    res.render('/register',{
//          viewTitle:"Farmer SignUp"
//    })
//   router.post('/register', (req, res) => {
//       const { Name, Email, Password, Password2 } = req.body;
//       let errors = [];
    
//       if (!Name || !Email || !Password || !Password2) {
//         console.log('all  fields are require');
//       }
    
//       if (Password != Password2) {
//         errors.push({ msg: 'Passwords do not match' });
//       }
    
//       if (Password.length < 6) {
//         errors.push({ msg: 'Password must be at least 6 characters' });
//       }
    
//       if (errors.length > 0) {
//         res.render('register', {
//           errors,
//           Name,
//           Email,
//           Password,
//           Password2
//         });
//       } else {
//         User.findOne({ Email: Email }).then(user => {
//           if (user) {
//             errors.push({ msg: 'Email already exists' });
//             res.render('register', {
//               errors,
//               Eame,
//               Email,
//               Password,
//               Password2
//             });
//           } else {
//             const newUser = new User({
//               name,
//               Email,
//               Password
//             });
    
//             bcrypt.genSalt(10, (err, salt) => {
//               bcrypt.hash(newUser.password, salt, (err, hash) => {
//                 if (err) throw err;
//                 newUser.password = hash;
//                 newUser
//                   .save()
//                   .then(user => {
                    
//                     res.redirect('/login');
//                   })
//                   .catch(err => console.log(err));
//               });
//             });
//           }
//         });
//       }
//     });
    
// //     // Login
// //     router.post('/login', (req, res, next) => {
// //       passport.authenticate('local', {
// //         successRedirect: '/dashboard',
// //         failureRedirect: '/users/login',
// //         failureFlash: true
// //       })(req, res, next);
// //     });
    
// //     // // Logout
// //     router.get('/logout', (req, res) => {
// //       req.logout();
// //       req.flash('success_msg', 'You are logged out');
// //       res.redirect('/users/login');
// //     });
          
// })
// module.exports = router;