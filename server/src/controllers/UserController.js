class UserController {
    userSignup(user_data){
        let username = user_data.username;
        console.log("Username", username)
        return {
            success: true
        }
    }
}

module.exports = UserController;