import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-lg uppercase font text-designColor tracking-wide text-white">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-white font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title