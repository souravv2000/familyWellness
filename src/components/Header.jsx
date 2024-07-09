import './Header.css'

function HeadSection(obj) {
    return (
        <>
            <div className='container'>
                <div className='Head-container'>
                    <div className='title'>
                        <h1>{obj.title}</h1>
                        <p>{obj.subTitle}</p>
                    </div>

                    <nav className='navbar'>
                        <ul>
                            <li id="home">{obj.list1}</li>
                            <li>{obj.list2}</li>
                            <li>{obj.list3}</li>
                            <li>{obj.list4}</li>
                            <li>{obj.list5}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default HeadSection;