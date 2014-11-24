/* global $:false, window:false, document:false, alert:false, 
SyntaxHighlighter:false */
"use strict";

var extLang = {
  "ext": {
    "xml": { "lang": "xml" },
    "html": { "lang": "xml" },
    "json": { "lang": "jscript" },
    "js": {"lang": "jscript" },
    "ol": { "lang": "jolie" },
    "iol": { "lang": "jolie" },
    "java": { "lang": "java" },
    "txt": { "lang": "plain" }
  }
};

var activeMenuItem = function () {
    var path = window.location.pathname;
    $( "#header a.active" ).attr( "class", "");
    $( "#header a[href=\"" + path + "\"]" ).attr( "class", "active" );
};

// Loaded on start
$( document ).ready( function () {
 activeMenuItem();
});