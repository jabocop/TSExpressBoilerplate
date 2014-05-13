/// <reference path="../typings/express/express.d.ts" />

import express = require('express');

export function index(req: express.Request, res: express.Response) {
    
    res.render('index', { title: 'Express' });
};

export function users(req: express.Request, res: express.Response) {
    res.send("USERS2");
};


export function login(req: express.Request, res: express.Response) {
	// render the page and pass in any flash data if it exists
    res.render('login');
};


export function signup(req: express.Request, res: express.Response) {
	// render the page and pass in any flash data if it exists
    res.render('signup');
};





