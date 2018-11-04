import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependencies';
window.libs = libs;

$(document).foundation();

libs.AOS.init();

$(document).ready(function() {
  var activeItem = $("#about-item");
  var activeWindow = $("#about-window");

  $('.item--wide').each(function() {
    var self = $(this);

    self.click(function() {
      self.toggleClass('item--active');
      activeItem.toggleClass('item--active');
      activeItem = self;

      var name = "#" + self.attr('id').split('-')[0] + "-window";

      $(name).toggleClass('window--active');
      activeWindow.toggleClass('window--active');
      activeWindow = $(name);


    });
  });

  $('.window').each(function() {
    var self = $(this);

    self.click(function() {
      self.toggleClass('window--active');
      activeWindow.toggleClass('window--active');
      activeWindow = self;

      var name = "#" + self.attr('id').split('-')[0] + "-item";

      $(name).toggleClass('item--active');
      activeItem.toggleClass('item--active');
      activeItem = $(name);
    });
  });
});

