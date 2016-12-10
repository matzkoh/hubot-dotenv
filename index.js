#!/usr/bin/env node
'use strict';

const cp = require('child_process');
const dotenv = require('dotenv');

dotenv.config();

cp.spawn(
  process.platform === 'win32' ? 'hubot.cmd' : 'hubot',
  process.argv.slice(2),
  {stdio: 'inherit'}
);
