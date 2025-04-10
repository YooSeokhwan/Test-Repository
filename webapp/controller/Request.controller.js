sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
], function (Controller, formatter) {
    "use strict";
    return Controller.extend("project1.controller.Request", {
        formatter: formatter
    });
});