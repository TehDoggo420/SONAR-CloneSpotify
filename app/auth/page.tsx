"use client";

import Input from "@/components/Input";
import dynamic from 'next/dynamic';
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="bg_black w_full h_full">
            <nav className="px-12 py-5">
                <img src="/images/logo_full_white.png" alt="logo" className="h-11" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-slate-900 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-4xl mb-8 font-semibold">
                        Sign in
                    </h2>
                    <div className="flex flex-col gap-4">
                        <Input
                            label="Username"
                            onChange={(ev: any) => setName(ev.target.value)}
                            id="name"
                            type=""
                            value={name}
                        />
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
                    <button className="bg-white py-3 text-black rounded-md w-full mt-10 hover:bg-slate-300 transition">
                        Log in
                    </button>
                    <p className="text-neutral-500 mt-12">
                        First time using Sonar?
                        <span className="text-white ml-1 hover:underline cursor-pointer">
                            Create an account
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Auth;