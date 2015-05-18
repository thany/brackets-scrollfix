/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Scrollfix Extension 
    Fixes scrolling on Windows once and for all.
*/
define(function (require, exports, module) {
  'use strict';
  
  var AppInit = brackets.getModule("utils/AppInit"),
      PreferencesManager = brackets.getModule("preferences/PreferencesManager");
  
  var cancel = false;
  
  var wheelfix = function(e) {
    if (e.deltaY) {
      e.preventDefault();
      cancel = !cancel;

      if (cancel) {
        e.stopImmediatePropagation();
      }
      else {
        var newevent = new window.WheelEvent("wheel", { deltaY: 100 * (e.deltaY / Math.abs(e.deltaY)) });
        e.target.dispatchEvent(newevent);
      }
    }
  };
  
  PreferencesManager.set("_windowsScrollFix", false);
  AppInit.htmlReady(function() {
    document.body.removeEventListener("wheel");
    document.body.addEventListener("wheel", wheelfix);
  });    
});