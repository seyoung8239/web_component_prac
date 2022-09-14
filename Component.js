export default class Component {
    $target;
    props;
    state;
    constructor($target, props) {
        this.$target = $target;
        this.props = props;
        this.setUp();
        this.render();
        this.setEvent();
    }

    setUp() {}

    mount() {}

    render() {
        this.$target.innerHTML = this.template();
        this.mount();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        console.log(this.state);
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
