/// <reference path="../typings/express/express.d.ts" />

import express = require('express');

export function index(req: express.Request, res: express.Response) {
    
    res.render('index', { title: 'Express' });
};

export function profile(req: express.Request, res: express.Response) {
    res.render('profile', {
			user : req.user // get the user out of session and pass to template
	});
};


export function login(req: express.Request, res: express.Response) {
	// render the page and pass in any flash data if it exists
    res.render('login');
};


export function signup(req: express.Request, res: express.Response) {
	// render the page and pass in any flash data if it exists
    res.render('signup');
};

export function logout(req:any, res: express.Response) { 
    req.logout();
    res.redirect('/');
};







