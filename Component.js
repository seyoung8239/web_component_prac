export default class Component {
    $target;
    state;
    constructor($target) {
        this.$target = $target;
        this.setUp();
        this.setEvent();
        this.render();
    }

    setUp() {}

    render() {
        this.$target.innerHTML = this.template();
        
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
