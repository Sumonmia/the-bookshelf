import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";


export default function Header() {
    return (
        <section className="w-4/5 mx-auto">
            <div class="navbar bg-base-100">
                {/* dropdown start */}
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <Link to={ROUTES.HOME} className="btn hover:bg-orange-800 hover:text-white">Home</Link>
                    <Link to={ROUTES.ABOUT} className="btn hover:bg-orange-800 hover:text-white">About</Link>
                    <Link to={ROUTES.BLOG} className="btn hover:bg-orange-800 hover:text-white">Blog</Link>
                    <Link to={ROUTES.FAQ} className="btn hover:bg-orange-800 hover:text-white">FAQ</Link>
                    </ul>
                </div>
                {/* dropdown end */}

                <div class="navbar-start">
                    <p className="font-bold text-xl">The<span className="italic font-bold text-xl text-red-700">BookShelf</span></p>
                </div>
                
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 space-x-4">
                    <Link to={ROUTES.HOME} className="btn hover:bg-orange-800 hover:text-white">Home</Link>
                    <Link to={ROUTES.ABOUT} className="btn hover:bg-orange-800 hover:text-white">About</Link>
                    <Link to={ROUTES.BLOG} className="btn hover:bg-orange-800 hover:text-white">Blog</Link>
                    <Link to={ROUTES.FAQ} className="btn hover:bg-orange-800 hover:text-white">FAQ</Link>

                    </ul>
                </div>

                <div class="navbar-end space-x-2">
                    <a class="btn hover:bg-orange-800 hover:text-white">Buy Book</a>
                    <a class="btn hover:bg-orange-800 hover:text-white">Sign In</a>
                </div>
            </div>
        </section>
    )
}
