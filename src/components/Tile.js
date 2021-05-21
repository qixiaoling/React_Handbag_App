import React from 'react'



function Tile(props){

    return(
        <>
            {props.title ?
                <section>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                </section>:
                <>
                    <section><img src={props.imgUrl} /></section>

                </>}
        </>
    )
}
export default Tile;

