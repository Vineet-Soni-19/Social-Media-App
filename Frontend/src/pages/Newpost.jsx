import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { useDispatch, useSelector } from "react-redux";

const Newpost = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    image: "",
    caption: "",
  });

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const resData={
      caption: data.caption,
      image: data.image,
      userId: userData._id,
      username: userData.username
    }
    console.log(resData);
    if(resData.caption && resData.image){
      const fetchData=await fetch(`http://localhost:3000/newpost`,{
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body : JSON.stringify(resData)
      })
      const fetchRes=await fetchData.json();
      console.log(fetchRes);
      setData((prev) => ({
        ...prev,
        caption: '',
        image: ''
      }));
    }
  };
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <div className="border border-black w-[400px]">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="image">
              <div className="h-[300px] w-full bg-slate-200 mt-1 mb-3 rounded flex items-center justify-center cursor-pointer">
                {data.image ? (
                  <img src={data.image} className="h-full" />
                ) : (
                  <span className="text-4xl">
                    <IoCloudUploadOutline />
                  </span>
                )}
                {/* <IoCloudUploadOutline className="text-4xl" /> */}
                <input
                  type={"file"}
                  accept="image/*"
                  id="image"
                  name="image"
                  onChange={uploadImage}
                  className="hidden"
                />
              </div>
            </label>
            <input
              type="text"
              placeholder="Write a caption"
              className="h-[50px] pl-5 outline-none"
              name="caption"
              value={data.caption}
              onChange={handleOnChange}
            />
            <hr />
            <button type="submit" className="text-blue-600 py-1">
              Share
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newpost;
