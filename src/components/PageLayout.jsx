function PageLayout({header,footer,children}){
    return(
        <div>
            <header>
                {header}
            </header>
            <main>
                {footer}
            </main>
            <footer>
                {children}
            </footer>
        </div>
    )
}
export default PageLayout;