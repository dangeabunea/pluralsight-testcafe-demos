import {Selector} from "testcafe";

export class LoginHelper {
    public static async login(t: TestController) {
        const userNameInput = Selector('#username');
        const passwordInput = Selector('#password');
        const loginButton = Selector('button').withAttribute('type', 'submit');

        await t.typeText(userNameInput, 'john.doe');
        await t.typeText(passwordInput, 'password123');
        await t.click(loginButton);
    }

    public static async logout(t: TestController) {
        const logOutButton = Selector('button').withText('Log out');
        await t.click(logOutButton);
    }
}
