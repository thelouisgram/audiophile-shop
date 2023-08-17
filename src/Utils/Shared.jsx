export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const goBack = () => {
    window.history.back();
}

export const handlePageRender = (pageName) => {
    scrollToTop();
    document.title = `Audiophile Shop ${pageName}`;
}