import React from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useState } from "react"; 
import { uploadVideoAPI } from "../../services/allAPI"; 

function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);
  const [uploadVideo,setUploadVideo]=useState({id:"",name:"",url:"",link:""})
  console.log(uploadVideo)

  const getYoutubeLink=(e)=>{
     const {value}=e.target;
     
    if(value.includes("v=")){
      let VID=value.split("v=")[1].slice(0,11)
    // console.log(`https://www.youtube.com/embed/${VID}`);
    setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    } 
  }
  const handleAdd=async()=>{
    const {id,name,url,link}= uploadVideo;  
    if(!id||!name||!url||!link){
      alert("Please add the missing fields")
    }else{
      // video upload to server
      const result=await uploadVideoAPI(uploadVideo)
      if(result.status>199&&result.status<301){
        alert("Video Uploaded")
        handleClose();

        setUploadVideo({id:"",name:"",url:"",link:""})
        setUploadVideo({
          id:"",name:"",url:"",link:""
        })
        setUploadVideoResponse(result.data)
      }
      else{
        alert(result.message)
      }
    }

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex mb-5 mt-5 align-items-center">
        <Button onClick={handleShow} className="btn m-1">
          <i className="fa-solid fa-arrow-up-from-bracket fa-beat fa-1x">
            {" "}
            Upload Videos{" "}
          </i>
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingName"
            label="Video Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingImage"
            label="image Url"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingName"
            label="Video Url"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Enter Video Url" onChange={ getYoutubeLink}    />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;