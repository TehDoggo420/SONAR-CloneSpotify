"use client";

import Input from "@/components/Input";
import dynamic from 'next/dynamic';
import { useCallback, useState } from "react";
import axios from "axios";

const Auth = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const [variant, setVariant] = useState("login")

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
    }, []);

    const register = useCallback(async () => {
        try{
            await axios.post("/api/register", {
                email,
                name,
                password
            })
        } catch(error) {
            console.log(error);
        }
    }, [email, name, password]);

    return(
        <div className="bg_black w_full h_full">
            <nav className="px-12 py-5">
                <img src="/images/logo_full_white.png" alt="logo" className="h-11" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-slate-900 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-4xl mb-8 font-semibold">
                        {variant === "login" ? "Sign in" : "Register"}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                            <Input
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="name"
                                type=""
                                value={name}
                            />
                        )}
                        <Input
                            label="Email"
                            onChange={(ev: any) => setEmail(ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                        />
                        <Input
                            label="Password"
                            onChange={(ev: any) => setPassword(ev.target.value)}
                            id="password"
                            type="password"
                            value={password}
                        />
                    </div>
                    <button onClick={register} className="bg-white py-3 text-black rounded-md w-full mt-10 hover:bg-slate-300 transition">
                        {variant === "login" ? "Log in" : "Sign up"}
                    </button>
                    <p className="text-neutral-500 mt-12">
                        {variant === "login" ? "First time using Sonar?" : "Already have an account?"}
                        <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                            {variant === "login" ? "Create an account" : "Log in"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Auth;