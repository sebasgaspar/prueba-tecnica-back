import mongoose from 'mongoose';

export const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log('connect to MongoDb');
    }catch(error){
        console.log(error);
        throw new Error('Error en la base de datos');
    }
}
