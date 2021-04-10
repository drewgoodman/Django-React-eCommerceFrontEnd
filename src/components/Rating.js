import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rating({value, text, color}) {

    return (
        <div className="rating">
            <span>
                <FontAwesomeIcon style={{ color }}
                    icon={ [ value >= 0.5 ? 'fas' : 'far',
                         value >= 1 ? "star" : value >= 0.5 ? "star-half-alt" : "star"
                         ]}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon style={{ color }}
                    icon={ [ value >= 1.5 ? 'fas' : 'far',
                         value >= 2 ? "star" : value >= 1.5 ? "star-half-alt" : "star"
                         ]}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon style={{ color }}
                    icon={ [ value >= 2.5 ? 'fas' : 'far',
                         value >= 3 ? "star" : value >= 2.5 ? "star-half-alt" : "star"
                         ]}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon style={{ color }}
                    icon={ [ value >= 3.5 ? 'fas' : 'far',
                         value >= 4 ? "star" : value >= 3.5 ? "star-half-alt" : "star"
                         ]}></FontAwesomeIcon>
            </span>
            <span>
                <FontAwesomeIcon style={{ color }}
                    icon={ [ value >= 4.5 ? 'fas' : 'far',
                         value >= 5 ? "star" : value >= 4.5 ? "star-half-alt" : "star"
                         ]}></FontAwesomeIcon>
            </span>
            <span>
                {text && text}
            </span>
        </div>
    )
}

export default Rating
