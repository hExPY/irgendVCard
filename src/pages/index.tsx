import {useRouter} from "next/router";
import React from "react";


const Page = () => {
    const router = useRouter();
    const { theme } = router.query;
    const isTheme = !!theme;

    return (
        <>
            <h1>sad</h1>
        </>
    )
}

export default Page;