import {LoginPageObject} from "../helpers/login.po";
import {FeedbackPageObject} from "../helpers/feedback.po";
import {getFromArgs} from "../helpers/args.helper";

const loginPo = new LoginPageObject();
const feedbackPo = new FeedbackPageObject();
const url = getFromArgs(process.argv.slice(2), 'url');

fixture('Feedback form')
    .page(`${url}/feedback`)
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
