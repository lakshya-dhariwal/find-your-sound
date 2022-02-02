# Spotify Auth Server

Endpoints -

- /login
- /refresh

Made with node & spotify-web-api-node

# /login

- req = {code} `spotify redirects on auth login and gives a code in url params`
- res - { accessToken , refreshToken , expiresIn}

# /refresh

- req = {refreshToken}
- res = {accessToken ,expiresIn}


