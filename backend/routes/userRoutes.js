//import express from "express";
const express = require('express');
const authUser = require('../controllers/userControllers')
const userControllers = require('../controllers/userControllers')
const updateUserProfile = require('../controllers/userControllers')
const router = express.Router();
router.route("/").post(userControllers.registerUser);
router.post("/login",userControllers.authUser);
router.route("/profile").post(function(req, res){updateUserProfile});
module.exports = router;