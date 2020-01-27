const Page = require('./page');
class StartPage extends Page {
    LoginField = 'login';
    PasswordField = 'password';
    ExitButton = 'Выйти';
    EnterButton = '//input[@value="Войти"]';
    // ErrorElem = element(by.css('[class="b-auth__error"]'));
    // ForgotButton = element(by.linkText('не помню'));
}

module.exports = new StartPage();