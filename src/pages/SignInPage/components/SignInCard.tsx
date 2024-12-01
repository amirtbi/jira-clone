import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { DottedSepartor } from "@/components/DottedSepartor";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { SignInSchema } from "../SignInSchema";
import { useAuthentication } from "@/hooks/useLogin";

export const SignInCard = () => {
  const { loginUser } = useAuthentication();
  const form = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (value: z.infer<typeof SignInSchema>) => {
    console.log(value);
    loginUser({ data: value, param: { userId: "123" } });
  };
  return (
    <>
      <Card className="w-full h-full md:w-[487px] shadow-none border-none">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
        </CardHeader>
        <div className="px-7 mb-2">
          <DottedSepartor className="pt-4" />
        </div>
        <CardContent className="pt-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-5"
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter email address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter password address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={false} size="lg" className="w-full">
                Login
              </Button>
              <DottedSepartor />

              <CardContent className="flex flex-col gap-2">
                <Button variant="secondary" size="lg" className="w-full">
                  <FcGoogle className="mr-2 size-5" /> Login with Google
                </Button>
                <Button variant="secondary" size="lg" className="w-full">
                  <FaGithub className="mr-2 size-5" /> Login with Github
                </Button>
              </CardContent>
            </form>
          </Form>
        </CardContent>
        <div className="p-7">
          <DottedSepartor />
        </div>
        <CardContent>
          <p className="text-center">
            Don&apos;t have an account?
            <Link to="/sign-up">
              <span className="text-blue-700">&nbsp;Sign up</span>
            </Link>
          </p>
        </CardContent>
      </Card>
    </>
  );
};
