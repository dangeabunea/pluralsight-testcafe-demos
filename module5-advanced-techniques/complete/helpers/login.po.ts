import {Selector} from "testcafe";
import {getFromArgs} from "./args.helper";

export class LoginPageObject{
    public async loginWithRedirect(t: TestController, redirectUrl?: string) {
        const userNameInput = Selector('#username');
        const passwordInput = Selector('#password');
        const loginButton = Selector('button').withAttribute('type', 'submit');

        let username = 'john.doe';
        let password = 'password123';

        // if started via node, read custom arguments
        if(process.argv[0] === 'node' && process.argv[1] === 'main.ts') {
            username = getFromArgs(process.argv.slice(2), 'u');
            password = getFromArgs(process.argv.slice(2), 'p');
        }

        await t.typeText(userNameInput, username);
        await t.typeText(passwordInput, password);
        await t.click(loginButton);
        if(redirectUrl){
            await t.navigateTo(redirectUrl);
        }
    }

    public async logout(t: TestController) {
        const logOutButton = Selector('button').withText('Log out');
        await t.click(logOutButton);
    }
}
