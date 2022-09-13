import Component from "./Component.js";

export default class App extends Component {
    setUp() {
        this.state = { name: "seyoung", age: 27 };
    }
    template() {
        const { name, age } = this.state;
        return `<div><p>name:${name}</p><p>${age}</p><button id='btn'>next year</button></div>`;
    }
    setEvent() {
        const $button = this.$target.querySelector("#btn");
        $button.addEventListener("click", () => {
            this.setState({ age: this.state.age + 1 });
        });
    }
}
