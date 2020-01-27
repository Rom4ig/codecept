const Page = require('./page');

class RestorePage extends Page {
    RestoreField = '//input[@id="field-email-login"]';
    CheckButton = '//button[@id="recovery-check"]';
    EmailRecoveryButton = '//button[@id="email_recovery"]';
    ReservEmailField = '//input[@id="field-reservemail"]';
    EmailReservButton = '//button[@id="field-reservemail-button"]';
}

module.exports = new RestorePage();