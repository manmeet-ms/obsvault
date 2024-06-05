import React from 'react'

const Card = (props) => {
  return (
    <div>
        <section>
  {/* <div className="container px-5 py-24 mx-auto"> */}
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4">
        <div className="h-full bg-slate-800 rounded-2xl overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center rounded-2xl" src={props.Img} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium  mb-1 uppercase">{props.Subtitle}</h2>
            <h1 className="title-font text-xl text-white mb-3">{props.Title}</h1>
            <p className="leading-relaxed mb-3">{props.Description}</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-green-400 inline-flex items-center md:mb-2 lg:mb-0">{props.Redirect}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Card