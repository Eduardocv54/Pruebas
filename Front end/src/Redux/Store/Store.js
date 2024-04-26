

import {configureStore} from '@reduxjs/toolkit'
import { getUserReducer } from '../Reducer/Reducer'

export default configureStore ({
    reducer: {
        getUsers: getUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

