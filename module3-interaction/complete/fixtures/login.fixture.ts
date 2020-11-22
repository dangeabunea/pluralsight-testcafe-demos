import {Selector} from "testcafe";
import {login, logout} from "../helpers/utils";

fixture('LoginFixture')
    .page('http://localhost:4200/login');

test('should log in', async t => {
    await login(t);

    // assert
    const notesPage = Selector('.e2e-notes-page').exists;
    await t.expect(notesPage).ok();
});

test('should log out', async t => {
    await logout(t);

    // assert
    const loginPage = Selector('.e2e-login-page').exists;
    await t.expect(loginPage).ok();
}).before(async t => await login(t));
