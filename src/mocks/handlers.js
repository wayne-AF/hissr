import { rest } from "msw"

const baseURL = 'https://hissr-drf-api.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 4,
                "username": "Buttercup",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 4,
                "profile_image": 
                    "https://res.cloudinary.com/dnddcsxad/image/upload/v1/media/images/Catnip_214e7545-ae5c-4d8c-866f-15fc2f5ff8f4_749x_wbatsi"
            })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    })
]