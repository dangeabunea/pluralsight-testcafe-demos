import {Selector} from "testcafe";

export class NotesPageObject {
    public async search(t: TestController, text: string) {
        const searchText = Selector('input')
            .withAttribute('placeholder', 'Search notes...');
        await t.typeText(searchText, text);
    }

    public async deleteNote(t:TestController, index: number){
        const noteToDelete = Selector('.note-delete-btn').nth(index);
        await t.setNativeDialogHandler(() => true);
        await t.click(noteToDelete);
    }

    public get nbNotes(): Promise<number> {
        return Selector('app-note').count;
    }
}
