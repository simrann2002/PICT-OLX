import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SellItem() {
  const [ProName, setProName] = useState("");
  const [LocationAddress, setLocationAddress] = useState("");
  const [CostofItem, setCostofItem] = useState('');
  const [DescriptionofItem, setDescriptionofItem] = useState('');
  const [numberOfImage, setnumberOfImage] = useState(0);
  const [validCostofItem, setValidCostofItem] = useState(0);
  const [checkCategory, setcheckCategory] = useState(0);


  const initialingProductName = () => {
    let newProductName = document.getElementById("ProductNameID").value;
    setProName(newProductName);
  }
  const initialLocationAddress = () => {
    let newLocationAddress = document.getElementById("ProductLocation").value;
    setLocationAddress(newLocationAddress);
  }
  const initialCostofItem = () => {
    let newCostofItem = document.getElementById("ProductCost").value;
    setCostofItem(newCostofItem);
    checkValidCostOfItem();
  }
  const initialDescriptionofItem = () => {
    let newDescriptionofItem = document.getElementById("ProductDescription").value;
    setDescriptionofItem(newDescriptionofItem);
  }


  const checkValidCostOfItem = () => {
    let curCost = document.getElementById("ProductCost").value;


    if (curCost.length === 0) {
      setValidCostofItem(0);
      return;
    }
    for (let i = 0; i < curCost.length; i++) {
      if (curCost[i] < '0' || curCost[i] > '9') {

        setValidCostofItem(0);
        return;
      }
    }
    setValidCostofItem(1);
  }

  const checkNumberOfImage = () => {

    let val = document.getElementById("formFileMultiple").value;
    // console.log("The size is " + val.length);
    // console.log(val);
    if (val.length === 0) {
      setnumberOfImage(0);
    }
    else {
      setnumberOfImage(1);
    }
  }

  const checkForCategory = () => {

    let val = document.getElementById("ProductCategory").value;
    // console.log(val);
    if (val === "0") {
      setcheckCategory(0);
    }
    else {
      setcheckCategory(1);
    }
  }



  return (
    <>
      <form action="">
        <div className='container-xxl ' style={{}}>
          <h1 className='my-3'>Product Information</h1>

          <div className="input-group mb-3 ">
            <span className="input-group-text mx-3 col-md-3" > Name <span style={{ color: "red" }}>*</span></span>
            <input type="text" value={ProName} id="ProductNameID" className="form-control " placeholder="Product Name" aria-label="ProductName" aria-describedby="ProductName" onChange={initialingProductName} />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text mx-3 col-md-3" > Location<span style={{ color: "red" }}>*</span></span>
            <input type="text" value={LocationAddress} className="form-control" placeholder="Location of item" id="ProductLocation" aria-label="ProductLocation" aria-describedby="ProductLocation" onChange={initialLocationAddress} />
          </div>

          <div className="input-group mb-3">
            <label htmlFor="ProductCost" className="form-label input-group-text mx-3 col-md-3" > Cost (Rs)<span style={{ color: "red" }}>*</span></label>
            <input type="text" value={CostofItem} className="form-control" placeholder="Cost of the Product in Rs" id="ProductCost" aria-label="ProductCost" aria-describedby="ProductCost" onChange={initialCostofItem} />
          </div>
          {validCostofItem === 0 && CostofItem !== "" && <p style={{ color: 'red', textAlign: "center" }}>Cost of the Item should contains only integer value</p>}


          <div className="input-group mb-3">
            <label htmlFor="formFileMultiple" className="form-label input-group-text mx-3 col-md-3 ">Images <span style={{ color: "red" }}>*</span></label>
            <input className="form-control " type="file" name="images[]" accept="image/*" id="formFileMultiple" multiple onChange={checkNumberOfImage} />
          </div>
          {numberOfImage === 0 && <p style={{ color: 'red', textAlign: "center" }}>Upload atleast one image</p>}

          <div className="input-group mb-3">
            <label htmlFor="ProductCategory" className="form-label input-group-text mx-3 col-md-3 ">Categaroy<span style={{ color: "red" }}>*</span></label>
            <select className="form-select my-3" id="ProductCategory" aria-label="Default select example" onChange={checkForCategory}>
              {/* {console.log(checkCategory)} */}

              <option value="0">Select the Product Catagery </option>
              <option value="1 ">Mobile</option>
              <option value="2">TV</option>
              <option value="3">Car</option>
              <option value="3">Books</option>
            </select>
          </div>
          {checkCategory === 0 && <p style={{ color: 'red', textAlign: "center" }}>Select one of the given Categaroy</p>}



          <div className="input-group mb-3 ">
            <label htmlFor="ProductDescription" className="form-label input-group-text mx-3 ">Description <span style={{ color: "red" }}>*</span></label>
            <textarea value={DescriptionofItem} className="form-control" id="ProductDescription" rows="3" onChange={initialDescriptionofItem}></textarea>
          </div>


          <Link type="submit" className="btn btn-primary" to="/" disabled={ProName.length === 0 || CostofItem.length === 0 || checkCategory === 0 || DescriptionofItem.length === 0 || LocationAddress === 0 || validCostofItem === 0 || numberOfImage === 0}>Submit</Link>

        </div>
      </form>

    </>
  )
}
