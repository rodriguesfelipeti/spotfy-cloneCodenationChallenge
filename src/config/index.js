export const config = {
  spotify: {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'b2e2ec286f9e4f6e97271fdbb2269e9f',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }
}
