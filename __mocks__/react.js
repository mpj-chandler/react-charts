const React = require('react');

global.window = global;
window.requestAnimationFrame = jest.fn();

module.exports = React;
