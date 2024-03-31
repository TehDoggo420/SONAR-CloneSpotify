"use client";

import qs from "query-string";
import Input from "./Input";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useDebounce from "@/hook/useDebounce";

const SearchInput = () => {
    const router = useRouter();
    const [search, setSearch] = useState<string>('');
    const debouncedSearch = useDebounce<string>(search, 500);

    useEffect(() => {
        const query = {
            title: debouncedSearch,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query,
        });
        router.push(url);
    }, [debouncedSearch, router]);
    return (
        <Input
            placeholder="What do you want to play?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
    );
}

export default SearchInput;