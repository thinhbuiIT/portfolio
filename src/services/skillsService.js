import axios from "./customize_axios";


const getAllDataSkills = () => {
    return axios.get('skills')
}
const createSkills = (title, percentage) => {
    return axios.post('skills',{title,percentage})
}
const updateDataSkills = (id, title, percentage) => {
    return axios.put(`skills/${id}`, { title, percentage })
}
const deleteSkills = (id) => {
    return axios.delete(`skills/${id}`)
}

export { getAllDataSkills, updateDataSkills, createSkills, deleteSkills }