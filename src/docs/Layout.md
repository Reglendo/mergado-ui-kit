Widget

    <div style={{ width: '279px', height: '73px', border: '1px solid #dbcba3', borderTop: '30px solid #948254',
                    boxSizing: 'content-box',
                    backgroundColor: 'hsla(0, 0%, 100%, .5)',
                    fontFamily: 'Arial, Helvetica, Verdana, Sans-serif'}}>
        <div className="widget">
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="First item" type="success" /></div>
                <div className="widget-cell widget-value">2</div>
            </div>
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="Second item" type="inactive" /></div>
                <div className="widget-cell widget-value">8</div>
            </div>
            <div className="widget-row">
                <div className="widget-cell widget-status"><LittleStatus text="Third item" type="warning" /></div>
                <div className="widget-cell widget-value">0</div>
            </div>
        </div>
    </div>

Application

    <div style={{overflow: 'auto'}}>
    <div className="document-style" style={{ maxWidth: '1146px', minWidth: '500px', height: '350px'}}>
        <section id="container">
            <section className="app-presenter">
                <header>
                    <div className="logo-wrapper" style={{width: '430px'}}>
                        <Placeholder width={430} height={120} style={{border: "1px solid #aaa" }}>APP logo</Placeholder>
                    </div>
                    <div className="info">
                        <h2 className="export-name">Export name</h2>
                    </div>
                </header>
            </section>
            <TopNav addClass="top-nav" links={[<NavLink link={<a href="#">First</a>} key="1" active={true} />, <NavLink link="Second" key="2" />]} />
            <section id="app">
                <header className="main"><h2>Title</h2></header>
                <div className="content">
                ... content ...
                </div>
            </section>
        </section>
    </div>
    </div>

**.muk-grid**

    <div className="muk-grid" style={{fontSize: '11px'}}>

        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-12`}>.muk-1-12</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-6`}>.muk-1-6 (.muk-2-12)</Placeholder>


        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-2-3`}>.muk-2-3 (.muk-8-12)</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-3`}>.muk-1-3 (.muk-4-12)</Placeholder>


        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-2`}>.muk-1-2 (.muk-6-12)</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-4`}>.muk-1-4</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-4`}>.muk-3-12</Placeholder>

        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-1`}>.muk-1-1 (.muk-12-12)</Placeholder>

        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-2`}>.muk-1-2</Placeholder>
        <Placeholder width={100} height={5} style={{border: "1px solid #aaa"}} addClass={`muk-1-4 muk-col-right`}>.muk-1-4.muk-col-right</Placeholder>


    </div>
