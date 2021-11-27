import React from "react";
const NewsCard=(props)=>{
    return(
        <>
        <div className="col-md-6 my-3">
            <div className="card-columns">
                <div className="card shadow-lg" >
                    <img src={props.source} className="card-img-top img-fluid" alt="img" />
                    <div className="card-body bg-success text-light rounded-bottom">
                        <h5 className="card-title ">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-dark fw-bold">{props.subTitle}</h6>
                        <p className="card-text ">{props.description}</p>
                        <div className="text text-end">
                        <a href={props.readMore} target="_blank" className="btn btn-primary  btn-sm">Read More <i className="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}
export default NewsCard;