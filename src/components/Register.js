import { Form } from "react-bootstrap";

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
    })

    // Could be used to display errors i.e. non-unique email or username, etc.
    const [error, setError] = useState({
        credentialError: ''
    })

    function onSubmitHandler(event) {
        event.preventDefault();
        // Axios call(s) && Form validation
    }

    function onChangeHandler(event) {
        console.log(event.target.name);
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <Form onSubmit={onSubmitHandler}>

            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default Register;