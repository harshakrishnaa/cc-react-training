function Layout({header:Header,navbar:Navbar,main:Main,footer:Footer}) {
    return (
        <div>
            {<Header></Header>}
            {<Navbar></Navbar>}
            {<Main></Main>}
            {<Footer></Footer>}
        </div>
    );
}

export default Layout;