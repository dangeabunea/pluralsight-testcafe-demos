import {Selector} from "testcafe";
import {login, logout} from "../helpers/utils";

fixture('Notes Page').page('http://localhost:4200/notes')
    .beforeEach(async t => await login(t))
    .afterEach(async t => await logout(t));

test('Should filter notes', async t => {
    // arrange
    const searchTextInput = Selector('input').withAttribute('placeholder', 'Search notes...');

    // act
    await t.typeText(searchTextInput, 'Dentist');

    // assert
    const nbNotes = Selector('app-note');
    await t.expect(nbNotes.count).eql(1);
});

test('Should delete note', async t => {
    // arrange
    const thirdNoteDeleteBtn = Selector('.note-delete-btn').nth(2);

    // act
    await t.setNativeDialogHandler(() => true);
    await t.click(thirdNoteDeleteBtn);

    // assert
    const nbNotes = Selector('app-note');
    await t.expect(nbNotes.count).eql(3);
});
