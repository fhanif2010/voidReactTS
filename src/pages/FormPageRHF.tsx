import { useForm } from "react-hook-form";
import { z } from "zod";

type RegisterFormFormat = {
    username: string;
    password: string;
}

const RegisterFormFormat = z.object({
    username: z.string().min(8).max(12),
    password: z.string(),
})

const FormPageRHF = () => {
    const form = useForm<RegisterFormFormat>()

    const handleLogin = (values: RegisterFormFormat) => {
        alert("Anda Berhasil Login")
        console.log(values)
    }
    return (
        <>
            <form className="formpagerhf" onSubmit={form.handleSubmit(handleLogin)}>
                <label htmlFor="username">
                    Username
                </label>
                <input type="text" id="username" {...form.register("username")} />

                <label>
                    Password
                </label>
                <input type="password" {...form.register("password")} />

                <button>Login</button>
            </form>
        </>
    )
}

export default FormPageRHF;