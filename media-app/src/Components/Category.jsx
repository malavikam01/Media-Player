import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Modal ,Form } from 'react-bootstrap';
import { addvideoCategoryAPI, getVideoCategoryAPI, deleteCategoryAPI} from '../../services/allAPI';

function Category() {
  const [categoryName, setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])
  const [deleteCategoryAPI]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async()=>{

    if(categoryName){
      const result = await addvideoCategoryAPI({categoryName,allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        

      }else{
        alert(result.message)
      }

    }else{
      alert("please fill missing field")
    }
  }

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async()=>{
   const {data}= await getVideoCategoryAPI()
   setAllCategories(data)
  }

   const removeCategory = async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
   }

  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info'>Add Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel
        controlId="floatingName"
        label="Category"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>

        
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
     
    { 
      allCategories?.length>0?allCategories.map(category=>(
        <div className="border rounded p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{category?.categoryName}</h5>
        <button className='btn' onClick={()=>removeCategory(category?.id)}><i className='fa-solid fa-trash text-danger' ></i></button>

      </div>

     </div>


      )):<p>Nothing To Display</p>
      
    }

    </>
  )
}

export default Category
