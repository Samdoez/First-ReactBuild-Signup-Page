import { useForm } from "react-hook-form";
import "../css/form.css";
import Input from "./Input";


function Form() {
    function submitted() {

    }

    return (
        <div className="form-cont flex">
            <div className="form-inner flex">
                <h3>Sign in</h3>
                <p className="not-reg"><span className="grey">Not registered?</span> Click here to register</p>

                <form onSubmit={submitted}>
                    <Input type="Text" id="name" placeholder="Username" src="/user-solid-full.svg" alt="user-solid-full" />
                    <Input type="Text" id="name" placeholder="Password" src="/unlock-keyhole-solid-full.svg" alt="unlock-keyhole-solid-full" />
                    <div className="check-forgotpassword flex">
                        <div>
                            <input type="checkbox" id="subscribe" name="newsletter" value="yes" />
                            <label for="subscribe"> Remember me</label>
                        </div>
                        <p className="not-reg">Forgot Password</p>
                    </div>
                    <button className="form-submit-button" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    )
}


export default Form;