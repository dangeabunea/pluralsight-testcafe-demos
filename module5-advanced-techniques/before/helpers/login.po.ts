import {Selector} from "testcafe";

export class LoginPageObject{
    public async loginWithRedirect(t: TestController, redirectUrl?: string) {
        const userNameInput = Selector('#username');
        const passwordInput = Selector('#password');
        const loginButton = Selector('button').withAttribute('type', 'submit');
        await t.typeText(userNameInput, 'john.doe');
        await t.typeText(passwordInput, 'password123');
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
