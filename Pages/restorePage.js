const Page = require('./page');

class RestorePage extends Page {
    RestoreField = '#field-email-login';
    CheckButton = '#recovery-check';
    EmailRecoveryButton = '#email_recovery';
    ReservEmailField = '#field-reservemail';
    EmailReservButton = '#field-reservemail-button';
}

module.exports = new RestorePage();