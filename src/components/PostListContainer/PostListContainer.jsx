import React from 'react';
import { parseDate } from "../../utilities/utilities.js";

function PostListContainer({posts}) {
  return (
    <div className="text-stone-300">
      <div className="mb-2 text-xl font-bold">Top posts</div>
      <div className="w-full rounded-lg border border-zinc-500 p-2">
        {posts.slice(0, 5).map((post) => (
          <div
            className="flex w-full flex-wrap text-sm"
            key={post.post_id}>
            <div className="m-1 w-8 rounded-md border border-green-700 p-1 text-center">
              {post.post_type[0].toUpperCase()}
            </div>
            <div className="my-auto ml-2 w-fit">{post.title}</div>
            <div className="float-right mx-1 my-auto grow text-right">
              {post.score} score
            </div>
            <div className="float-right mx-1 my-auto w-40 text-right text-sm">
              {parseDate(post.creation_date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostListContainer;
