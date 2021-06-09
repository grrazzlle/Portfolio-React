import React from "react";


function Project(props) {

  return (
    <div className="col-md-6 center">
      <a href={props.href} className="d-flex flex-column-reverse" target="_blank" rel="noreferrer noopener">
        <img alt={props.title} src={props.img} width="250" height="200" className="border"/>
        <h4 className=" font-weight-bold py-1 mb-2 center">{props.title}</h4>
      </a>
    </div>
    
  )
}

export default Project;