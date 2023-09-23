const express= require('express');
const Router= express.Router();
const authController=require('./../controllers/authController')
const viewsController= require('./../controllers/viewsController');
Router.route('/signUp').get(viewsController.signUp);
Router.route('/login').get(viewsController.login);
Router.route('/me').get(authController.protect,viewsController.aboutMe);
Router.route('/updateMe/:id').get(authController.protect,viewsController.updateUser);
Router.route('/home').get(viewsController.homePage);
Router.route('/home/:role').get(authController.protect,viewsController.base);
Router.route('/createPost/:toId').get(authController.ristrictTo('user'),viewsController.creatPost);
Router.route('/viewAppointment').get(viewsController.viewAppointments);
Router.route('/updateAppointment/:pId').get(viewsController.updateAppointments);
Router.route('/chatbot').get(viewsController.chatbot);
Router.route('/viewBlocked/:toId').get(viewsController.available);
Router.route('/acceptPost/:toId').get(authController.ristrictTo('admin'),viewsController.acceptPost);
Router.route('/sucsAppointment').get(viewsController.sucsAppointment);
Router.route('/reviewAppointment/:pId/:toId/:fromId').get(viewsController.giveReview);
Router.route('/viewReview/:revId/').get(viewsController.viewReview);
Router.route('/viewDash').get(viewsController.viewDashBoard);
Router.route('/payAppointment/:pId').get(viewsController.payAppointment);
module.exports=Router;
