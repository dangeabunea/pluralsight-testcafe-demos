import {Selector} from "testcafe";

fixture('StackOverflowPage')
    .page('stackoverflow.com');

test('Should display logo', async t => {
    const logoExists = await Selector('.-logo').exists;
    await t.expect(logoExists).ok();
});
