import axios from "./customize_axios";


const getAllDataUser = () => {
    return axios.get('user')
}
const updateDataUser = (id, name, address, age, email, phone, first_name, job, last_name) => {
    return axios.put(`user/${id}`, { id, name, address, age, email, phone, first_name, job, last_name })
}
const loginApi = (username, password) => {
    return axios.post("login", { username, password })
}

export { getAllDataUser, updateDataUser, loginApi}