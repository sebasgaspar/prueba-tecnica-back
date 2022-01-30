import axios from "axios"

export function getGitHubToken(code) {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }
    return axios.post(`${process.env.GIT_URL}/login/oauth/access_token?client_id=${process.env.GIT_ACCESS_KEY}&client_secret=${process.env.GIT_SECRET_KEY}&code=${code}`, {}, config)
        .then(res => {
            return res.data
        }).catch(err => {
            console.log("error")
            return null
        })
}

export function getGitHubUser(token) {
    const autho = 'Bearer '.concat(token);

    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': autho
        }
    }
    return axios.get(`${process.env.GIT_API_URL}/user`, config)
        .then(res => {
            return res.data
        }).catch(err => {
            console.log("error", err)
            return null
        })
}

export function getGitHubRepos(user) {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }
    return axios.get(`${process.env.GIT_API_URL}/users/${user}/repos`, config)
        .then(res => {
            return res.data
        }).catch(err => {
            console.log("error", err)
            return null
        })

}