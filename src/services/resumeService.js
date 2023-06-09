import axios from "./customize_axios";


const getAllDataResume = () => {
    return axios.get('resume')
}
const createResume = (title, percentage) => {
    return axios.post('resume',{title,percentage})
}
const updateDataResume = (id, title, percentage) => {
    return axios.put(`resume/${id}`, { title, percentage })
}
const deleteResume = (id) => {
    return axios.delete(`resume/${id}`)
}  

export { getAllDataResume, updateDataResume, createResume, deleteResume }