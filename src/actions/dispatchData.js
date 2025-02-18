export function dispatchData(params, type) {
    return (disptch, getState) => {
        return new Promise((resolve, reject) => {
            return dispatchData({
                type: type, data: params,
            });
            resolve(true)
        })
    }
}