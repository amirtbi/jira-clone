import { loginApiService } from "@/core/api/login.api.service"
import { RegisterApiService } from "@/core/api/register.api.service";
import { useMutation } from "@tanstack/react-query"


export const useAuthentication = () => {
    const { mutate: loginUser } = useMutation({
        mutationFn: loginApiService,
        onSuccess: (res) => {
            console.log("res", res);
        },
        onError: () => {
            console.warn("error")
        }
    })


    const { mutate: registerUser } = useMutation({
        mutationFn: RegisterApiService,
        onSuccess: (res) => {
            console.log("successfully", res)
        }
    })

    return { loginUser, registerUser }

}