import {commonAPI} from "./commonAPI";
import { SERVER_URL } from "./server_url";

//upload video
export const uploadVideoAPI = async(video)=>{
    return await commonAPI ("POST",`${SERVER_URL}/allVideos`,video)
}

//get all uploaded videoa
export const getAllUploadedVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

//get a video
export const getVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

//delete video
export const deleteVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

//addvideo history
export const addVideoHistoryAPI = async(video)=>{
    return await commonAPI ("POST",`${SERVER_URL}/history`,video)
}

//get history
export const getVideoHistoryApi = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//delete history
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//add video category
export const addvideoCategoryAPI = async(category)=>{
    return await commonAPI ("POST",`${SERVER_URL}/category`,category)
}

//get category
export const getVideoCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//delete category
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}