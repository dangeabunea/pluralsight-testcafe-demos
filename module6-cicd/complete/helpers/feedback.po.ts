import {Selector} from "testcafe";

export class FeedbackPageObject {
    private readonly _emailInput = Selector('#email');
    private readonly _appRatingSelect = Selector('#rating');
    private readonly _feedbackInput = Selector('#feedback');
    private readonly _successAlert = Selector('.alert.alert-success');
    private readonly _emailValidationLabel = Selector('label').withText('Email');
    private readonly _submitBtn = Selector('.e2e-send-feedback-btn');

    public async fillForm(t: TestController, email: string, rating: string, feedback?: string) {
        await t.typeText(this._emailInput, email);
        await t.click(this._appRatingSelect).click(Selector('option').withText(rating));
        if (feedback) {
            await t.typeText(this._feedbackInput, feedback);
        }
    }

    public async clickSendFeedbackBtn(t: TestController) {
        await t.click(this._submitBtn);
    }

    public get success(): Promise<boolean> {
        return this._successAlert.exists;
    }

    public get emailInvalid(): Promise<boolean> {
        return this._emailValidationLabel.exists;
    }
}
