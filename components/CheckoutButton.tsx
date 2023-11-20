
"use client";

import { db } from "@/firebase";
import { set } from "firebase/database";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session) return;

    // push document to firestor bd
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1O9dEiJmtgKlG9tTJaonWogJ",
        success_url: `${window.location.origin}/journies`,
        cancel_url: window.location.origin,
      });

    // .. stripe checout session

    return onSnapshot(docRef, snap => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        // show an error to your customer and
        //inspect your Cloud Function logs in the firebase console
        alert(`An error occured, please try again ${error.message}`);
        setLoading(false);
      }

      if (url) {
        // meaning if there is a url, then lets redrect to it
        window.location.assign(url);
        setLoading(false);
      }

    });
    // redirect user to checout page
  };


  return(
  <div className="flex flex-col space-y-2">
    {/* if subscriobed show me that user is subscribed */}


    <button onClick={() => createCheckoutSession()} className="
      mt-8 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold
      leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
      focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer
      disabled:opacity-80">
        {loading ? 'loading...' : "Sign Up" }
    </button>
  </div>
);
}

export default CheckoutButton
