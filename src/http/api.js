import axios from "axios";

const api=axios.create({
    baseURL:"http://192.168.255.44/api/v1"
})

export default api