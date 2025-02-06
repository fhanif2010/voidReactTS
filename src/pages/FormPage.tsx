import { useRef, useState } from "react";

const FormPage = () => {
    //cara 1. Input yang tidak dapat di kontrol di awal
    // const inputEmail = useRef<HTMLInputElement>(null);
    // const inputPassword = useRef<HTMLInputElement>(null);

    //cara 2. Input yang dapat dikontrol diawal
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //cara 3. Library yang mempermudah kontrol input


    const [errorEmailMassage, setErrorEmailMassage] = useState("");
    const [errorPasswordMassage, setErrorPasswordMassage] = useState("");



    const handleSubmit = () => {
        //cara 1. Input yang tidak dapat di kontrol di awal
        // const email = inputEmail.current?.value;
        // const password = inputPassword.current?.value;


        //cara 2.Validasi input apa bila kekurangan format
        const emailValidation = email.length < 4;
        const passwordValidation = password.length < 5;

        if (emailValidation) {
            setErrorEmailMassage("Email minimal 4 Karakter")
        }

        if (passwordValidation) {
            setErrorPasswordMassage("Password minimal 8 Karakter")
        }


    };

    return (
        <>
            <h1>Form Page</h1>

            <div className="fp-container">
                <div className="label">
                    <label htmlFor="input-email">Email</label>
                    <span className="msg-error">{errorEmailMassage}</span>
                </div>
                {/* cara 1. */}
                {/* <input id="input-email" type="email" ref={inputEmail}/> */}
                
                {/* cara 2. */}
                <input id="input-email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                {/* cara 3. */}
                <input type="text" />

                <div className="label">
                    <label htmlFor="input-pass">Password</label>
                    <span className="msg-error">{errorPasswordMassage}</span>
                </div>
                {/* <input id="input-pass" type="password" ref={inputPassword}/> */}
                <input id="input-pass" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default FormPage;