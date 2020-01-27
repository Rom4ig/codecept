const Page = require('./page');
class StartPage extends Page {
    LoginField = 'login';
    PasswordField = 'password';
    ExitButton = 'Выйти';
    EnterButton = '//input[@value="Войти"]';
    ForgotButton = `не помню`;
}

module.exports = new StartPage();