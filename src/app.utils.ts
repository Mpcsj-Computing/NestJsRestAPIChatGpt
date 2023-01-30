

export const isProdution = ()=>{
    return process.env.NODE_ENV === "production"?true:false
}