import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdOutlineSaveAlt } from "react-icons/md";

const Post = ({ post }) => {
  const { username, image, caption } = post;

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[450px] my-5">
        <div className="py-3 px-2 flex justify-between">
          <div className="flex gap-2 items-center">
            <img
              src=""
              alt=""
              className="rounded-full h-5 w-5 border border-black"
            />
            <p>{username}</p>
          </div>
          <BsThreeDots />
        </div>
        <img
          src={image}
          alt=""
          className="w-full h-[600px] border border-black-1 rounded-sm"
        />
        <div className="flex justify-between p-2">
          <div className="flex gap-2">
            <FaRegHeart className="" />
            <FaRegComment />
            <FiSend />
          </div>
          <MdOutlineSaveAlt />
        </div>
        <div className="">
          <p>
            {username}
            <span className="ml-2">{caption}</span>
          </p>
        </div>
        <input type="text" placeholder="Add a comment..." className="mt-2" />
        <hr className="mt-4" />
      </div>
    </div>
  );
};

export default Post;
