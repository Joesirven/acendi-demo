import { authOptions } from "@/auth"
import PricingCards from "@/components/PricingCards";
import { Button } from "@/components/ui/button"
import { getServerSession } from "next-auth"

async function Register() {
    const session = await getServerSession(authOptions)

  return (
        <div className="isolate h-full overflow-hidden bg-gray-900 bp-40">
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <p className="mt-2 text-4xl font-bod tracking-tight sm:text-5xl">
                        Lets handle your Membership {session?.user?.name?.split(" ")?.[0]}!
                    </p>
                <div className="relative">
                    <svg
                        viewBox="0 0 1208 1024"
                        className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2
                        [mask-image:radial-gradient(closest-side,white,transparent)]
                        sm:-top-12 md:-top-20 lg:-top-0"
                    >
                        <ellipse
                            cx={604}
                            cy={512}
                            fill="url(#radial-gradient)"
                            rx={604}
                            ry={512}
                        />
                        <defs>
                            <radialGradient
                                id="radial-gradient" >
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                {/* </div>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <Button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</Button>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div> */}

                {/* <div class="text-grey-dark mt-6">
                    Already have an account?
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div> */}
            </div>
        </div>
        <PricingCards redirect={false} />
    </div>
    </div>



    );
}

export default Register
