function welcome(name) {
    if (!name)
        return { error: "Name not set" }

    let message = `Hi, ${name}. It's nice to talk to you :)`;
    return { message };
}






function bot() {
    let initFuncs = [
        welcome,

    ];

    return {
        counter: 0,

        next(...args) {
            if (this.counter >= initFuncs.length)
                return { message: "No message" };


            return initFuncs[this.counter++](...args);
        }
    };
}

export { bot };