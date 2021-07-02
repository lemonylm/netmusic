import request from '@/utils/request'

console.log(
    "###"
)
export const reqSinger = () => {
    return request({
        url:`/artist/list`,
        method:'get'
    })
}
reqSinger()