
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faShoppingCart,
    faStar,
    faStarHalfAlt,
    faUser,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

const Icons = () => {
    return library.add(
        faShoppingCart,
        faStar,
        farStar,
        faStarHalfAlt,
        faUser,
        faTrash
    );
}

export default Icons;