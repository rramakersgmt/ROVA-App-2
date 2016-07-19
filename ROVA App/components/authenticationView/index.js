'use strict';

app.authenticationView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_authenticationView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_authenticationView
(function(parent) {
    var
        authenticationViewModel = kendo.observable({
            fldserver: '',
            fldlogin: '',
            fldpassword: '',
            validateData: function(data) {
                if (!data.fldserver) {
                    alert('Voer een serveradres in');
                    return false;
                }

                if (!data.fldlogin) {
                    alert('Voer een geldige loginnaam in');
                    return false;
                }
                if (!data.fldpassword) {
                    alert('Wachtwoord mag niet leeg zijn');
                    return false;
                }

                return true;
            },
            signin: function() {}
        });

    parent.set('authenticationViewModel', authenticationViewModel);
    parent.set('afterShow', function(e) {
        if (e && e.view && e.view.params && e.view.params.logout) {
            if (localStorage) {
                localStorage.setItem(rememberKey, null);
            } else {
                app[rememberKey] = null;
            }
            authenticationViewModel.set('logout', true);
        }
    });
})(app.authenticationView);

// START_CUSTOM_CODE_authenticationViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_authenticationViewModel