/**
 * Setup our global chai configuration
 */

const
    chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    path = require('path');

    //HubotHelper = require(path.join(process.cwd(), './node_modules/hubot-test-helper/src/index'));

chai.use(sinonChai);
chai.config.includeStack = true;

global.sinon = sinon;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
//global.HubotHelper = HubotHelper;
global.assert = chai.assert;
