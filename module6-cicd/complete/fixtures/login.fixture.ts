import {Selector} from "testcafe";
import {LoginPageObject} from "../helpers/login.po";
import {getFromArgs} from "../helpers/args.helper";

const loginPo = new LoginPageObject();
const url = getFromArgs(process.argv.slice(2), 'url');

fixture('LoginFixture')
    .page(`${url}/login`);

test('should log in', async t => {
    await loginPo.loginWithRedirect(t, 'notes');

    // assert
    const notesPage = Selector('.e2e-notes-page').exists;
    await t.expect(notesPage).ok();
});

test('should log out', async t => {
    await loginPo.logout(t);

    // assert
    const loginPage = Selector('.e2e-login-page').exists;
    await t.expect(loginPage).ok();
}).before(async t => await loginPo.loginWithRedirect(t, 'notes'));
