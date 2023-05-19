
function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-dark text-white p-3 border-bottom text-center">
                <p className="text-center">copyright © {currYear}</p>
            </footer>
        </>
    )

}
export default Footer;