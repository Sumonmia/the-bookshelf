

export default function Banner() {
    return (
        <div className="w-4/5 mx-auto rounded-md gap-4">
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-2xl lg:text-5xl font-bold">Unlock a World of Stories</h1>
                        <p class="py-6 text-sm lg:text-2xl">
                            Find Your Favourite Book at The BookShelf
                        </p>
                        <button type="button" class="btn bg-red-800 text-white hover:text-black">Buy Book</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
