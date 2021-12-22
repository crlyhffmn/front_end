const Register = () => {

    let [newUser, setNewUser] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    })

    function onSubmitHandler(event) {
        event.preventDefault();
        // Axios call(s)
    }

    function onChangeHandler(event) {
        console.log(event.target.name);
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        });
    }

    return(
        <></>
    )
}
export default Register;