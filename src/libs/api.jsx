const __request = async (url, method = 'GET', heading) => {
  const __heading = {
    method,
    ...heading
  }
  return await fetch(`${ process.env.REACT_APP_API_ENDPOINT }${ url }`, __heading).then( res => {
    return res.json();
  } )
}

const getPlayList = async () => {
  return await __request('/content/items/playlist');
}

const getViewerMessages = async () => {
  return await __request('/content/items/viewermessage');
}

export { getPlayList, getViewerMessages }