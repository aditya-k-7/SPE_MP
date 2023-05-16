import mongoose from 'mongoose'

const Schema=mongoose.Schema

const projects=new Schema({
	'title':{
		type:String
	},
	'email':{
		type:String
	},
	
	'desc':{
		type:String
	},
	'amount':{
		type:String
	},
	'details':{
		type:String
	},
	// qrimg:
    // {
    //     data: Buffer,
    //     contentType: String
    // }

})

const project=mongoose.model('newprojects',projects)

export default project