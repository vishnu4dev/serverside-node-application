
import UserModel from '../../model/User.model';
import UserProfile from '../../model/Profile.model';
const { check, validationResult } = require('express-validator');


export default class User {
    /**
     * Test route
     * @param None
     */
    async getUser(req,res){
        try {
            res.send("User get successfull")
        } catch (error) {
            console.log("Error in getting users")
        }
    }
    
    /**
     * 
     * @param {Profile details} req 
     * @param {Updated Message} res 
     */
    async setUserProfile(req,res){
        try {
            const {name,status,skills,phoneNumber,location} = req.body;
            const profileDetails = new UserProfile({
                name,status,skills,phoneNumber,location
            })
            const resp = await profileDetails.save()
            if(!resp){res.status(400).send("Failed to set profile")}
            return res.status(200).send(resp)
           } catch (error) {
               console.log("Error in profile setting")
            // return res.status(400).send("Error in setting user profile")
        }
    }


    /**
     * get current Profile
    */
    async getCurrentProfile(req,res){
        try {
            const profile = await UserProfile.findOne({user:req.user.id}).populate('user',['name','avatar'])
            if(!profile){ return res.status(400).send("Profile is missing")}
            else{ return res.status(200).send("Profile found"); }
        } catch (error) {
            return res.status(400).send("Error in getting profile")
        }
    }
}