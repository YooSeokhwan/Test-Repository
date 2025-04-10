sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("project1.controller.app", {
        onInit : function() {
            //View에 데이터 모델 생성
            let oData ={
                recipient :{
                    name: "World"
                }
            };
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            //View에 i18n 모델 생성
            let i18nModel = new ResourceModel({
                bundleName: "project1.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },
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