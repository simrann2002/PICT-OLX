import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import {
    Link        
} from "react-router-dom";
export default function ItemInfo(props) {
    const a = useContext(noteContext)
    const checkForID = () => {
        a.setId(props.id);
        // console.log(props.id);
        // console.log(a.id);
    }

    return (
        <>
            <div className='my-3 '>
                <div className="card border border-5 border-white">
                    <img src={props.Imageurl ? props.Imageurl : "https://images.livemint.com/img/2021/12/28/600x338/ee533a00-38df-11ec-9de8-7f7cc13130d0_1640310465772_1640654102799.jpg"} height={"200px"} width={"100px"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}...</p>
                    </div>
                    {/* <Link className="btn btn-primary"  to="infoofitem" onClick={checkForID}>read more</Link> */}
                    <div className="d-flex justify-content-between my-2">
                        <Link className="btn btn-info mx-3" to="/infoofitem" onClick={checkForID} >read more</Link>
                        <button className="btn btn-info mx-3 "  >Favourite</button>

                    </div>
                    
                </div>
            </div>
        </>
    )
}
