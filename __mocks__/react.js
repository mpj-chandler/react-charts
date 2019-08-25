const React = require('react');

global.window = global;
window.requestAnimationFrame = jest.fn();
global.cancelAnimationFrame = jest.fn();

module.exports = React;
