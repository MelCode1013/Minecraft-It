//For Register Page
const registerView = (req, res) => {
    res.render("register", {
        pageTitle: "Sign up"
    } );
}
// For View 
const loginView = (req, res) => {

    res.render('login', {
        pageTitle: "Log in"
    });
}
module.exports =  {
    registerView,
    loginView
};