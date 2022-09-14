export default class Component {
    $target;
    state;
    constructor($target) {
        this.$target = $target;
        this.setUp();
        this.render();
        this.setEvent();
    }

    setUp() {}

    render() {
        this.$target.innerHTML = this.template();
        console.log("rendered");
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    setEvent() {}

    template() {
        return;
    }

    addEvent(eventType, selector, callback) {
        const children = [...this.$target.querySelectorAll(selector)];
        const isTarget = (target) =>
            children.includes(target) || target.closest(selector);
        this.$target.addEventListener(eventType, (e) => {
            if (!isTarget(e.target)) return false;
            callback(e);
        });
    }
}
