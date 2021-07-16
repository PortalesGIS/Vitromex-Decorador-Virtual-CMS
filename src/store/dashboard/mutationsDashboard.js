

export const setDashboardProperti = (state,payload) => {
    state.dashboard = {...state.dashboard, [payload.properti]:payload.value}
}