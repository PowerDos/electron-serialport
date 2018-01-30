#!/usr/bin/env node
// Copyright 2014, David M. Lee, II
'use strict';

var repl = require("repl");
var promirepl = require('../index').promirepl;

promirepl(repl.start({}));
