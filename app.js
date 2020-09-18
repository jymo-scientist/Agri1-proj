require('./models/db');

const express = require('express');
const bodyParser =require('body-parser');
const path =require('path');
var passport = require('passport');
var flash = require('connect-flash');
var nodemailer = require('nodemailer')
var session = require('express-session');
var app = express();
 require('./config/passport')(passport)
const exhbs = require('express-handlebars');
//setting public folder to be  
app.use(express.static('./public'));
app.set('views',path.join(__dirname,'views'));
//setting views engine
app.engine('handlebars',exhbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.set('port',(process.env.PORT||1000));  

//body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
// // Connect flash
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())
//global vars
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
//middlewares
const farmersControllers = require('./controllers/farmersControllers');
const registersControllers = require('./controllers/registersControllers');
const tipsController = require('./controllers/tipsController');
//const FarmerSignUpController = require('./controllers/FarmerSignUpController')
//routers
app.use('/farmers',farmersControllers);
app.use('/Registers',registersControllers);
app.use('/tips',tipsController)
// app.use('/Registers',FarmerSignUpController)
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

 
app.get('/',(req,res)=>{
res.render('t',{title:'Home page'});
});
app.get('/extension',(req,res)=>{
    res.render('extension',{title:'Extesion Officer'});
    });
    app.get('/farmers',(req,res)=>{
        res.render('farmers',{title:'Farmers Compliants'});
        });
        app.get('/registered_farmer',(req,res)=>{
            res.render('registered_farmer',{title:'Farmersregister',user:req.user});
            });
            app.get('/farmersHome',(req,res)=>{
                res.render('farmersHome',{title:'Farmersregister'});
                });
                app.get('/tips',(req,res)=>{
                    res.render('tips',{title:'tips'});
                    });
                app.get('/register',(req,res)=>{
                    res.render('register',{title:"FarmerSignUp"})
                })
                app.get('/login',(req,res)=>{
                    res.render('login',{title:"FarmerLogin"})
                })
                app.get('/tips/list',(req,res)=>{
                    res.render('./tips/list',{title:"tips list"})
                })
                app.get('/mails', (req, res) => {
                    res.render('mails');
                  });
                //nodemails
                // app.post('/send', (req, res) => {
                //     const output = `
                //       <p>You have a new contact request</p>
                //       <h3>Contact Details</h3>
                //       <ul>  
                //         <li>Name: ${req.body.name}</li>
                //         <li>Company: ${req.body.company}</li>
                //         <li>Email: ${req.body.email}</li>
                //         <li>Phone: ${req.body.phone}</li>
                //       </ul>
                //       <h3>Message</h3>
                //       <p>${req.body.message}</p>
                //     `;
                  
                //     // create reusable transporter object using the default SMTP transport
                //     let transporter = nodemailer.createTransport({
                //       host: 'smtp.gmail.com',
                //       port: 465,
                //       secure: true, // true for 465, false for other ports
                //       auth: {
                //           user: 'jameskinyanjui721@gmail.com', // generated ethereal user
                //           pass: 'Lames0709'  // generated ethereal password
                //       },
                //       tls:{
                //         rejectUnauthorized:false
                //       }
                //     });
                  
                //     // setup email data with unicode symbols
                //     let mailOptions = {
                //         from: '"Nodemailer Contact" <jameskinyanjui721@gmail.com>', // sender address
                //         to: 'jameskinyanjui721@gmail.com', // list of receivers
                //         subject: 'Node Contact Request', // Subject line
                //         text: 'we jpst Company', // plain text body
                //         html: output // html body
                //     };
                  
                //     // send mail with defined transport object
                //     transporter.sendMail(mailOptions, (error, info) => {
                //         if (error) {
                //             return console.log(error);
                //         }
                //         console.log('Message sent: %s', info.messageId);   
                //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                  
                //         res.render('mails', {msg:'Email has been sent'});
                //     });
                //     });
              
app.listen(app.get('port'),()=>{
    console.log('app is running on port'+ app.get('port'));

})
  