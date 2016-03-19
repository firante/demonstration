/*
* component for first rendering content
*/

var ReactDOM = require('react-dom');
var React = require('react');
var Table = require('./table_component');
var FluxController = require('../resourse/fluxController');

var ListStore = FluxController.ListStore;

window.onload = function() {
  var fileMenu = document.getElementById('fileMenu');

  fileMenu.addEventListener('change', function(e) {
    var file = fileMenu.files[0];
    var reader = new FileReader();
    try {
      reader.onload = function() {
        var Menu = JSON.parse(reader.result);
        ListStore.setMenu(Menu);
        ReactDOM.render(<Table menu={Menu} />, document.getElementById('table'));
      }
      reader.readAsText(file);
    } catch (e) {
      alert("Неправильний файл");
    }
  });
}
