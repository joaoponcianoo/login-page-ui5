sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("loginpage.controller.login", {
            onInit: function () {

            },

            onInputValueHelpRequest: function(oEvent) {
                const oHelp = oEvent.getSource();
                let sType = oHelp.getType();
                
                let nsType = sType === "Password" ? "Text" : "Password";
                let nIcon = sType === "Password" ? "sap-icon://hide" : "sap-icon://show";

                oHelp.setType(nsType);
                oHelp.setValueHelpIconSrc(nIcon);
            },

            onForgotYourPasswordLinkPress: function(oEvent) {
                const oView = this.getView();
                //Create the popup call
                if (!this.oDialog) {
                    this.oDialog = Fragment.load({
                        id: oView.getId(),
                        name: "loginpage.view.fragment.dialog",
                        controller: this
                    }).then((oDialog) => {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }

                this.oDialog.then((oDialog) => {
                    oDialog.open();
                }) 
            },

            onCancelButtonPress: function(oEvent) {
                this.oDialog.then((oDialog) => {
                    oDialog.close();
                }) 
            },

            onNavToCreateUser: function(oEvent) {
                const oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteCreate");
            }
        });
    });
