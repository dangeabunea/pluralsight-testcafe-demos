import {Selector} from "testcafe";

fixture('LoginFixture')
    .page('http://localhost:4200/login')
    .before(async () => {
        console.log('Before fixture hook')
    })
    .after(async () => {
        console.log('After fixture hook')
    })
    .beforeEach(async () => {
        console.log('Before test hook')
    })
    .afterEach(async () => {
        console.log('After test hook')
    });

test('Should display info alert box', async (t: TestController) => {
    // arrange
    const alertVisible = await Selector('div .alert.alert-info').exists;

    // assert
    await t.expect(alertVisible).ok();

    console.log('Test 1 executed');
});

test('Should contain correct texts for login form', async (t: TestController) => {
    // arrange
    const userInputPlaceholder = await Selector('#username').getAttribute('placeholder');
    const passwordInputPlaceholder = await Selector('#password').getAttribute('placeholder');
    const loginButtonText = await Selector('button').withAttribute('type', 'submit').innerText;

    // assert
    await t.expect(userInputPlaceholder).contains('username')
    await t.expect(passwordInputPlaceholder).contains('password')
    await t.expect(loginButtonText).eql(' Log in');

    console.log('Test 2 executed');
});
