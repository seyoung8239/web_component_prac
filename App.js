import Component from "./Component.js";

export default class App extends Component {
    setUp() {
        this.state = { name: "seyoung", age: 27 };
    }
    template() {
        const { name, age } = this.state;
        return `<div><p>name:${name}</p><p>${age}</p><button id='prev-btn'>prev year</button><button id='next-btn'>next year</button></div>`;
    }
    setEvent() {
        console.log(this.$target);
        this.$target.addEventListener("click", (e) => {
            if (e.target.id === "prev-btn") {
                this.setState({ age: this.state.age - 1 });
            }
            if (e.target.id === "next-btn") {
                this.setState({ age: this.state.age + 1 });
            }
        });
    }
}
