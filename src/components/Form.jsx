import { useForm } from "react-hook-form";  
import "../css/form.css";
import Input from "./Input";


    function Form() {
        const {register, handleSubmit, setError, formState: { errors, isSubmitting },} = useForm({ mode: "onTouched" }); 
    
    async function submitForm(data) {
        try {
            const res = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const body = await res.json();

            if (!res.ok) {
                // show server errors (like "email already registered") on the right field
                Object.entries(body.errors ?? {}).forEach(([field, message]) =>
                    setError(field, { type: "server", message })
                );
                return;
            }
            // success: redirect or show a message
        } catch {
            setError("root", { message: "Could not reach the server. Try again." });
        }
    }

    return (
        <div className="form-cont flex">
            <div className="form-inner flex">
                <h3>Sign in</h3>
                <p className="not-reg">
                    <span className="grey">Not registered?</span> Click here to register
                </p>

                <form onSubmit={handleSubmit(submitForm)} noValidate>
                    <Input type="text" id="username" placeholder="Username" error={errors.username}
                        {...register("username", 
                                    {   required: "Username is required", 
                                        validate: { noSpecialStart: (v) => /^[A-Za-z0-9]/.test(v.trim()) || "Must start with a letter"},
                                        minLength: {value: 3, message: "At Least 3 Characters"},
                                    })
                        }
                        src="/user-solid-full.svg" alt="user-solid-full"
                    />
        Frontend validation added
        icons added
        form submission functionality
                    <Input type="password" id="password" placeholder="Password" error={errors.password}
                        {...register("password", 
                            {   required: "Password is required",
                                minLength: {value: 8, message: "At least 8 characters"},
                                validate: {
                                    hasUpper:   (v) => /[A-Z]/.test(v)        || "Add a capital letter",
                                    hasLower:   (v) => /[a-z]/.test(v)        || "Add a small letter",
                                    hasNumber:  (v) => /[0-9]/.test(v)        || "Add a number",
                                    hasSpecial: (v) => /[^A-Za-z0-9]/.test(v) || "Add a special character",
                                },
                            })
                        }
                        src="/unlock-keyhole-solid-full.svg" alt="unlock-keyhole-solid-full" 
                    />

                    {errors.root && <p style={{ color: "crimson" }}>{errors.root.message}</p>}
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