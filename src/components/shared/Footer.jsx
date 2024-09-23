

export default function Footer() {
    return (
        <div className="bg-gray-200 mt-20">
            <footer class="footer  text-base-content p-10 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <p className="font-bold text-xl">The<span className="italic font-bold text-xl text-red-700">BookShelf</span></p>
                <nav>
                    <h6 class="footer-title">Services</h6>
                    <a class="link hover:text-red-700 no-underline">Buy Online</a>
                    <a class="link hover:text-red-700 no-underline">Meet a Writter</a>
                    <a class="link hover:text-red-700 no-underline">Explore Stories</a>

                </nav>
                <nav>
                    <h6 class="footer-title">Company</h6>
                    <a class="link hover:text-red-700 no-underline">About us</a>
                    <a class="link hover:text-red-700 no-underline">Contact</a>
                    <a class="link hover:text-red-700 no-underline">Jobs</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Legal</h6>
                    <a class="link hover:text-red-700 no-underline">Terms of use</a>
                    <a class="link hover:text-red-700 no-underline">Cookie policy</a>
                    <a class="link hover:text-red-700 no-underline">Privacy policy</a>
                </nav>
            </footer>
        </div>
    )
}
