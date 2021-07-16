

export const setDashboardProperti = (state,payload) => {
    console.log(payload)
    state.dashboard = {...state.dashboard, [payload.properti]:payload.value}
}