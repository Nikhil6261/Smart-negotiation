import { HTTP_STATUS } from "../../constant/httptatus"



const CreateProduct = async (req,res) => {

    const res = req.params 
    const { } = req.body  


    try {
        

        if( )

    } catch (error) {
        res.status(HTTP_STATUS.BAD_REQUEST).send({
            success : false, 
            message :error.message
         })
    }


}