import {Selector} from "testcafe";

fixture('StackOverflowPage')
    .page('stackoverflow.com');

test('Should display logo and login button', async t => {
    const logoExists = await Selector('.-logo').exists;
    const loginButtonText = await Selector('a.login-link.s-btn.s-btn__filled.py8.js-gps-track').innerText;
    await t.expect(logoExists).ok();
    await t.expect(loginButtonText).eql('Log in');
});
