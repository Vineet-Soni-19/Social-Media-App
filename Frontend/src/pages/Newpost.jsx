import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const Newpost = () => {
  const [data, setData] = useState({
    image: "",
    caption: "",
  });

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);
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
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center">
        <div className="border border-black w-[400px]">
          <form action="POST" className="flex flex-col">
            <div className="h-[300px] w-full bg-slate-200 mt-1 mb-3 rounded flex items-center justify-center cursor-pointer">
              {/* {data.image ? (
                <img src={data.image} className="h-full" />
              ) : (
                <span className="text-4xl">
                  <IoCloudUploadOutline />
                </span>
              )} */}
              <IoCloudUploadOutline className="text-4xl" />
              <input
                type={"file"}
                accept="image/*"
                id="image"
                onChange={uploadImage}
                className="hidden"
              />
            </div>
            <input
              type="text"
              placeholder="Write a caption"
              className="h-[50px] pl-5 outline-none"
              name="caption"
              value={data.caption}
              onChange={handleOnChange}
            />
            <hr />
            <button className="text-blue-600 py-1">Share</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newpost;
