import React from 'react';
import '../styles/ImageTable.css'

function ImageTable(props) {
    return (
        <div className="row">
            {
                props.animals.map(albino =>
                    (
                        <div className="card" key={albino.id} onClick={() => props.handleClick(albino.id)}>
                            <div className="image-container">
                                <img src={albino.image} alt={albino.name} />
                            </div>
                        </div>
                    )
                )
            }
        </div>

    )
}

export default ImageTable;