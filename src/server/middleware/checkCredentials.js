import config from '../config'
import { users } from '../db'

const checkCredentials = async (request, response, next) => {
    if (request._parsedUrl.pathname === '/auth') {
        return next()
    }

    const { user_id } = request.body

    const user = await users.getById(user_id)
    const userExists = !!user.length
    if (userExists) {
        request.body.user_exists = userExists
        request.body.user_status = user[0].status
        request.body.user_is_intern = user[0].is_intern
        request.body.user_is_admin = user[0].is_admin
    }

    console.log(request.body)
    return next()
}

export default checkCredentials
