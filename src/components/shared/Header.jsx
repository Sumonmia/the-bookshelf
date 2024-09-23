

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
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                {/* dropdown end */}

                <div class="navbar-start">
                    <p className="font-bold text-xl">The<span className="italic font-bold text-xl text-red-700">BookShelf</span></p>
                </div>
                
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div class="navbar-end space-x-2">
                    <a class="btn">Buy Book</a>
                    <a class="btn">Sign In</a>
                </div>
            </div>
        </section>
    )
}
