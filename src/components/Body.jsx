import './Body.css'

function BodySection(obj) {
    return (
        <>
            <div className='container'>
                <div className='body-container'>
                    <img src={obj.familyImg} />
                    <div className='body-content'>
                        <h2>{obj.message}</h2>
                        <p>{obj.para}</p>
                        <div className='bodyBtn'>
                            <button>{obj.btn1}</button>
                            <button>{obj.btn2}</button>
                        </div>
                    </div>
                    <div className='bodytext'>
                        <p id="p1">{obj.text1}</p>
                        <p>{obj.text2}</p>
                        <p>{obj.text3}</p>

                    </div>
                    <hr />
                    <div className='address'>
                        <h2>{obj.addr_msg}</h2>
                        <div><p>{obj.addr}</p>
                            <p>{obj.Tel}</p>
                            <p>{obj.email}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodySection;