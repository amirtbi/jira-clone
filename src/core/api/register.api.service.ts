export const RegisterApiService = async (values: { name: string; email: string; password: string }) => {

    const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        }
    })

    return res.json()
}