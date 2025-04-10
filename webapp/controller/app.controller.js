sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("project1.controller.app", {
        onShowHello :function () {
            // i18n 모델로부터 메시지 읽기
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMsg", [sRecipient]);

            //메시지 보이기
            MessageToast.show(sMsg);
        }
    });
});