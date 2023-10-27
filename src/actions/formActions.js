const NEW_ENTRY='NEW_ENTRY'

export const newEntry=(data)=>{
    return{
        type:NEW_ENTRY,
        payload:{
            name:data.name,
            dept:data.dept,
            skype:data.skype,
            email:data.email,
        },
    }
}