

import {configureStore} from '@reduxjs/toolkit'
import { listUserReducer } from '../Reducer/Reducer'

export default configureStore ({
    reducer: {
        listUsers: listUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

