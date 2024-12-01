import { ILogin } from "./login.model";

export const loginApiService = async (values: { data: ILogin, param: { userId: string } }) => {
    const res = await fetch(`http://localhost:3000/api/auth/login/${values.param.userId}`, {
        method: "POST",
        body: JSON.stringify(values.data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res.json();
}

