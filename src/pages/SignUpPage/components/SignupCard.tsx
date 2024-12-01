import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { DottedSepartor } from "@/components/DottedSepartor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { SignUpSchema } from "../SignUpSchema";
import { useAuthentication } from "@/hooks/useLogin";

export const SignUpCard = () => {
  const { registerUser } = useAuthentication();
  const form = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const hanldeSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log("values", values);
    registerUser(values);
  };
  return (
    <>
      <Card className="w-full h-full md:w-[487px] shadow-none border-none">
        <CardHeader className="flex items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            By signing up, you agree to our{" "}
            <Link to="/privacy">
              <span className="text-blue-700">Privacy Policy</span>
            </Link>{" "}
            <Link to="/temrs">
              <span className="text-blue-700">Terms of services</span>
            </Link>
          </CardDescription>
        </CardHeader>
        <div className="px-7 mb-2">
          <DottedSepartor className="pt-4" />
        </div>
        <CardContent className="pt-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(hanldeSubmit)}
              className="space-y-5"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Enter your name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter password"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <Button disabled={false} size="lg" className="w-full">
                Sign up
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
      </Card>
    </>
  );
};
