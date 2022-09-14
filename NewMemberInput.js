import Component from "./Component.js";

export default class NewMemberInput extends Component {
    template() {
        return `
            <form class='new-member-form'>
                <input name='name' placeholder='name' type="text" />
                <input name='age' placeholder='age' type="text" />
                <button type='submit'>추가</button>    
            </form>
        `;
    }

    setEvent() {
        const {addNewMemeber} = this.props;
        this.addEvent("submit", ".new-member-form", (e) => {
            e.preventDefault();
            const { name, age } = e.target;
            const newMember = [{ name: name.value, age: age.value }];
            addNewMemeber(newMember);
        });
    }
}
