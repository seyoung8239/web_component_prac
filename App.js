import Component from "./Component.js";
import NewMemberInput from "./NewMemberInput.js";

export default class App extends Component {
    setUp() {
        this.state = {
            members: [{ name: "seyoung", age: 27 }],
        };
    }
    mount() {
        const $header = document.querySelector("header");
        new NewMemberInput($header, {
            addNewMemeber: this.addNewMemeber.bind(this),
        });
    }
    template() {
        const $memberList = this.state.members
            .map((el) => `<p>name: ${el.name}</p><p>age: ${el.age}</p>`)
            .join("");
        return `
            <div>
                <header>
                    
                </header>
                <div>
                    ${$memberList}
                </div>
                <button class="prev-btn">prev year</button>
                <button class="next-btn">next year</button>
            </div>
        `;
    }
    setEvent() {
        this.addEvent("click", ".prev-btn", (e) => {
            this.setState({ age: this.state.age - 1 });
        });
        this.addEvent("click", ".next-btn", (e) => {
            this.setState({ age: this.state.age + 1 });
        });
    }

    addNewMemeber(newMember) {
        this.setState({ members: this.state.members.concat(newMember) });
    }
}
