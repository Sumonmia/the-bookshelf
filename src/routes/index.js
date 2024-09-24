export const ROUTES ={
    HOME: "/",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    SINGLE_BOOK: {
        STATIC: "/bookId",
        DYNAMIC: ()=>`/${bookId}`,
    },

}