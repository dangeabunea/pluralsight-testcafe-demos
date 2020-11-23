import { Selector } from "testcafe";
import {login, logout} from "../helpers/utils";

fixture('Feedback form')
    .page('http://localhost:4200')
    .beforeEach(async t => {
        await login(t);
        await t.navigateTo('feedback');
    })
    .afterEach(async t => logout);

test('Should submit form', async t=> {
    // arrange
    const emailInput = Selector('#email');
    const appRatingSelect = Selector('#rating');
    const averageRatingOption = Selector('option').withText('Average');
    const feedback = Selector('#feedback');
    const submitBtn = Selector('.e2e-send-feedback-btn');
    const successAlert = Selector('.alert.alert-success').exists;

    // act
    await t.typeText(emailInput, 'john.doe@company.com');
    await t.click(appRatingSelect).click(averageRatingOption);
    await t.typeText(feedback, 'Needs some improvement');
    await t.click(submitBtn);

    // assert
    await t.expect(successAlert).ok();
});

test('Should display error when email not valid', async t => {
    // arrange
    const emailInput = Selector('#email');
    const appRatingSelect = Selector('#rating');
    const averageRatingOption = Selector('option').withText('Average');
    const feedback = Selector('#feedback');
    const submitBtn = Selector('.e2e-send-feedback-btn');
    const successAlert = Selector('.alert.alert-success').exists;
    const emailValidationLabel = Selector('label').withText('Email').exists;

    // act
    await t.typeText(emailInput, 'john.doe');
    await t.click(appRatingSelect).click(averageRatingOption);
    await t.typeText(feedback, 'Needs some improvement');
    await t.click(submitBtn);

    // assert
    await t.expect(successAlert).notOk();
    await t.expect(emailValidationLabel).ok();
});
