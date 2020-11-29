import {LoginPageObject} from "../helpers/login.po";
import {NotesPageObject} from "../helpers/notes.po";
import {getFromArgs} from "../helpers/args.helper";

const loginPo = new LoginPageObject();
const notesPo = new NotesPageObject();
const url = getFromArgs(process.argv.slice(2), 'url');

fixture('Notes Page').page(`${url}/notes`)
    .beforeEach(async t => await loginPo.loginWithRedirect(t, 'notes'))
    .afterEach(async t => await loginPo.logout(t));

test('Should filter notes', async t => {
    await notesPo.search(t, 'Dentist');

    await t.expect(notesPo.nbNotes).eql(1);
});

test('Should delete note', async t => {
    await notesPo.deleteNote(t, 3);

    await t.expect(notesPo.nbNotes).eql(3);
});
