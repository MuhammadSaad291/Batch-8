import React from "react";
import Man from "../../assets/man.jpg";
import Boy from "../../assets/boy.jpg";

function Post({item}) {
  return (
    <div className="my-10 shadow-md border-gray-400 p-3">
      <div className="flex gap-4 ">
        <div>
          <img src={Man} alt="" className="rounded-full h-10 w-10" />
        </div>
        <div>
          <h2>{item.title}</h2>
        </div>
      </div>
      <div>{item.body}</div>
      <div className="h-[500px] w-full overflow-hidden my-5 ">
        <img src={Boy} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex justify-between px-5">
        <div>likes: {item.reactions.likes}</div>
        <div>Views: {item.views}</div>
        <div>comments: 15</div>

      </div>
    </div>
  );
}

export default Post;
