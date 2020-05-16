var app = {
    setToken: function (token) {
        localStorage.setItem("token", token);
    },
    getToken: function () {
        return localStorage.getItem("token");
    },
    removeToken: function () {
        return localStorage.removeItem("token");
    }
}

export default app;