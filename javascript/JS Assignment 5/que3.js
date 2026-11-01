const user = {
    name: "Divyanshu",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

console.log("Arrow function does not have its own this, so this.name is undefined.");

const fixedUser = {
    name: "Divyanshu",
    showName: function () {
        console.log(this.name);
    }
};

fixedUser.showName();