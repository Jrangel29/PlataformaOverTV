import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_START,
    NOTIFICATION_GET_SUCCESS,
    NOTIFICATION_GET_START,
    NOTIFICATION_ALL_GET_START,
    NOTIFICATION_ALL_GET_SUCCESS,
    NOTIFICATION_SINGLE_GET_SUCCESS,
    NOTIFICATION_SINGLE_GET_START,
    NOTIFICATION_UPDATE_SUCCESS,
    NOTIFICATION_UPDATE_START,
    NOTIFICATION_STATS_ALL_GET_START,
    NOTIFICATION_STATS_ALL_GET_SUCCESS,
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleNotification: {},
    isLoading: true,
    isLoadingAll: true,
    isLoadingAllStats: true,
    isLoadingSingle: true,
    isLoadingEdit: true
}

export default (state = initialState, { type, payload }) => {
    let data;
    
    switch(type) {
        case NOTIFICATION_CREATE_START:
            return {...state, isLoadingCreate: true};
            break;
        case NOTIFICATION_CREATE_SUCCESS:
            return {...state, isLoadingCreate: false};
            break;
        case NOTIFICATION_GET_START:
            return { ...state, isLoading: true };
        case NOTIFICATION_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        case NOTIFICATION_ALL_GET_START:
            return { ...state, isLoadingAll: true };
        case NOTIFICATION_ALL_GET_SUCCESS:
            return { ...state, data: payload, isLoadingAll: false };
        case NOTIFICATION_STATS_ALL_GET_START:
            return { ...state, isLoadingAllStats: true };
        case NOTIFICATION_STATS_ALL_GET_SUCCESS:
            return { ...state, data: payload, isLoadingAllStats: false };
        case NOTIFICATION_SINGLE_GET_START:
            return { ...state, isLoadingSingle: true };
        case NOTIFICATION_SINGLE_GET_SUCCESS:
            return { ...state, singleNotification: payload, isLoadingSingle: false };
        case NOTIFICATION_UPDATE_START:
            return {...state, isLoadingEdit:true}
        case NOTIFICATION_UPDATE_SUCCESS:
            data = state.data.map((event) => {
                //console.log(event.id)
                if (event.id !== payload.id) {
                    return event;
                }
                    return payload;
            });
            return { ...state, isLoadingEdit: false, data };
        default:
            return state;
    }
}