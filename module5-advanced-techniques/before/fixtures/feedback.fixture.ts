import {LoginPageObject} from "../helpers/login.po";
import {FeedbackPageObject} from "../helpers/feedback.po";

// Define PO
const loginPo = new LoginPageObject();
const feedbackPo = new FeedbackPageObject();

fixture('Feedback form')
    .page('http://localhost:4200')
    .beforeEach(async t => loginPo.loginWithRedirect(t, 'feedback'))
    .afterEach(async t => loginPo.logout(t));

test('Should submit form', async t=> {
    // arrange
    await feedbackPo.fillForm(t, 'john.doe@company.com','Average', 'Needs work');

    // act
    await feedbackPo.clickSendFeedbackBtn(t);

    // assert
    await t.expect(feedbackPo.success).ok();
});

test('Should display error when email not valid', async t => {
    // arrange
    await feedbackPo.fillForm(t, 'john.doe','Average', 'Needs work');

    // act
    await feedbackPo.clickSendFeedbackBtn(t);

    // assert
    await t.expect(feedbackPo.success).notOk();
    await t.expect(feedbackPo.emailInvalid).ok();
});
