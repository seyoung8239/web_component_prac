import Component from "./Component.js";

export default class App extends Component {
    setUp() {
        this.state = { name: "seyoung", age: 27 };
    }
    template() {
        const { name, age } = this.state;
        return `<div><p>name:${name}</p><p>${age}</p><button class='prev-btn'>prev year</button><button class='next-btn'>next year</button></div>`;
    }
    setEvent() {
        this.addEvent("click", ".prev-btn", (e) => {
            this.setState({ age: this.state.age - 1 });
        });
        this.addEvent("click", ".next-btn", (e) => {
            this.setState({ age: this.state.age + 1 });
        });
    }
}
