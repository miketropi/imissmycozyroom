const __request = async (url, method = 'GET', heading) => {
  const __heading = {
    method,
    ...heading
  }
  return await fetch(`${ process.env.REACT_APP_API_ENDPOINT }${ url }`, __heading)
}

const getPlayList = async () => {
  return 
}

const getViewerMessages = async () => {

}

export { getPlayList, getViewerMessages }