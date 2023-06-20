import React from 'react'

const NewsItem =(props)=> {

    
    

        let {title, description,imageUrl, newsUrl,author, date, source}= props;
        return (
            <div className="my-3">
                <div className="card border-warning " style={{width: "18rem"}}>

                    <img src={imageUrl?imageUrl:"https://bitcoinist.com/wp-content/uploads/2019/06/rocketlaunch-e1571734621414.jpg"} className="card-img-top " alt="..." style={{height: "30vh"}} />
                    
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <span className="position-absolute top-0 translate-middle badge bg-warning" style={{zIndex:1, left:"75%"}}>
                                {source}
                            </span>
                            <p className="card-text">{description?description:title}</p>
                            <p className="card-text"><small className="text-body-secondary">By: {author}  {new Date(date).toGMTString()} </small></p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-warning text-light btn-primary">Read More</a>
                        </div>
                </div>
                
        
            </div>
        )
        

}

export default NewsItem
