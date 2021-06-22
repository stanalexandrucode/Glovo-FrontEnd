// import React from 'react';
//
// export default function Payment() {
//     return (
//         <div className="logout">
//             <h1>Payment Page</h1>
//             <h2>under construction</h2>
//         </div>
//     );
// }


import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";


const promise = loadStripe("pk_test_51J5BL3CxxDtpRKopAYVgKIP0qfdop9Re7ypEQAiLsfHNxm1p9KmoKr2fcbsJCeukqvg93WtpEOKVyplWGEDirJfn00VkgiiSgC");

export default function Payment() {
    return (
        <div>
            <Elements stripe={promise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
}

