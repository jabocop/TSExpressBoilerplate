/// <reference path="../typings/express/express.d.ts" />

import express = require('express');

export function index(req: express.Request, res: express.Response) {
    
    res.render('index', { title: 'Express' });
};

export function users(req: express.Request, res: express.Response) {
    res.send("USERS2");
};



