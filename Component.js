export default class Component {
    $target;
    state;
    constructor($target) {
        this.$target = $target;
        this.setUp();
        this.render();
    }

    setUp() {}

    render() {
        this.$target.innerHTML = this.template();
        this.setEvent();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    setEvent() {}

    template() {
        return;
    }
}
