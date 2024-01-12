import React from 'react';
import { constructLabelWithCount, parseDate } from "../../../utilities/utilities.js";

function TagListContainer({tags}) {
  return (
    <div className="text-stone-300">
      <div className="mb-2 text-xl font-bold">Top tags</div>
      <div className="w-full rounded-lg border border-zinc-500 p-2">
        {tags.slice(0, 5).map((tag) => (
          <div
            className="flex w-full flex-wrap"
            key={tag.name}>
            <div className="m-1 w-fit rounded bg-gray-800 p-1 px-2 text-sky-300">
              {tag.name}
            </div>
            <div className="float-right mx-1 my-auto grow w-fit text-right">
              {constructLabelWithCount(tag.count, "post")}
            </div>
            <div className="float-right my-auto w-40 text-right text-sm">
              {parseDate(tag.last_activity_date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagListContainer;
