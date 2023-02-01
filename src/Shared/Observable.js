export default class Observable {
    _value = null;
    observers = [];

    constructior(initialValue) {
        this._value = initialValue
    }

    get value() {
        return this._value;
    };

    set value(newValue){
        this._value = newValue;
    };

    subscribe = func => {
        this.observers.push(func);
    };

    notify = () => {
        this.observers.forEach(observer => {
            observer(this._value);
        });
    };
}