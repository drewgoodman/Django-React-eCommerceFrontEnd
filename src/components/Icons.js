
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faShoppingCart,
    faUser
} from '@fortawesome/free-solid-svg-icons'

const Icons = () => {
    return library.add(
        faShoppingCart,
        faUser
    );
}

export default Icons;