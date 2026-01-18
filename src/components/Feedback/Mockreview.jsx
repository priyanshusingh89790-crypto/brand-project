import {Svgprofile,Svgrecommend,Svgcalender} from './Svg-all'

      
const Mockreview = () => { 
    return(     
      
      <div className="mt-4 flex lg:items-start items-center flex-col gap-6">
              {/* Review 1 */}
              <div className="rounded border w-[360px] md:w-[500px] lg:w-full border-stone-200 bg-white/50 lg:p-3 p-2">
                <div className="flex">
                  <div className="flex items-center">
                 {<Svgprofile />}
                 </div>
                 <div className="flex pl-2 items-center justify-between lg:w-full ">
                  <div className="flex flex-col">
                  <span className="text-xl ">customer 1 </span>
                    <b className="text-sm flex items-center gap-2 text-stone-500 font-lato font-medium">
                      <Svgcalender/>jan 14, 2026</b>
                  
                  </div>
                    <div className=" items-center gap-2 lg:pl-0 pl-10  ">
                    <span className="pl-9">⭐⭐⭐⭐⭐ </span>
                    <div className="flex items-center gap-2">
                      <span className="font-lato bg-stone-200 w-[25px] p-1 text-stone-500 text-[12px] rounded-lg">5/5 </span>
                    <span className="flex items-center bg-green-100 rounded-lg p-1 text-green-700 font-lato text-[12px] gap-1">
                     <div className="flex items-center w-[20px]">
                      <Svgrecommend/>
                      </div>
                      Recommends
                      </span>
                    </div>                    
                </div>
                </div>
                </div>
                
                <p className="font-lato p-2 mt-1 text-stone-600">
                  "Absolutely fantastic service! The team went above and beyond
                  to help me. Highly recommend to anyone looking for quality."
                </p>
              </div>

              {/* Review 2 */}
              <div className="rounded border w-[360px] md:w-[500px] lg:w-full border-stone-200 bg-white/50 p-3">
                <div className="flex">
                  <div className="flex items-center">
                 {<Svgprofile />}
                 </div>
                 <div className="flex pl-2 items-center justify-between w-full">
                  <div className="flex flex-col">
                  <span className="text-xl ">customer 2 </span>
                    <b className="text-sm flex items-center gap-2 text-stone-500 font-lato font-medium">
                      <Svgcalender/>jan 10, 2026</b>
                  
                  </div>
                    <div className=" items-center gap-2 ">
                    <span className="pl-9">⭐⭐⭐⭐☆ </span>
                    <div className="flex items-center gap-2">
                      <span className="font-lato bg-stone-200 w-[25px] p-1 text-stone-500 text-[12px] rounded-lg">5/5 </span>
                    <span className="flex items-center bg-green-100 rounded-lg p-1 text-green-700 font-lato text-[12px] gap-1">
                     <div className="flex items-center w-[20px]">
                      <Svgrecommend/>
                      </div>
                      Recommends
                      </span>
                    </div>                    
                </div>
                </div>
                </div>
                
                <p className="font-lato p-2 mt-1 text-stone-600">
                  “The café has such a calm and cozy atmosphere. Soft music, comfortable seating, and a very relaxing vibe. 
                  Perfect place to sit for hours and unwind. The staff were polite and never rushed us, which made the experience even better.”
                </p>
              </div>

              {/* Review 3 */}
              <div className="rounded border w-[360px] lg:w-full md:w-[500px] border-stone-200 bg-white/50 p-3">
                <div className="flex">
                  <div className="flex items-center">
                 {<Svgprofile />}
                 </div>
                 <div className="flex pl-2 items-center justify-between w-full">
                  <div className="flex flex-col">
                  <span className="text-xl ">customer 3 </span>
                    <b className="text-sm flex items-center gap-2 text-stone-500 font-lato font-medium">
                      <Svgcalender/>jan 8, 2026</b>
                  
                  </div>
                    <div className=" items-center gap-2 ">
                    <span className="pl-9">⭐⭐⭐⭐⭐ </span>
                    <div className="flex items-center gap-2">
                      <span className="font-lato bg-stone-200 w-[25px] p-1 text-stone-500 text-[12px] rounded-lg">5/5 </span>
                    <span className="flex items-center bg-green-100 rounded-lg p-1 text-green-700 font-lato text-[12px] gap-1">
                     <div className="flex items-center w-[20px]">
                      <Svgrecommend/>
                      </div>
                      Recommends
                      </span>
                    </div>                    
                </div>
                </div>
                </div>
                
                <p className="font-lato p-2 mt-1 text-stone-600">
                  “The environment was clean and well maintained. Tables were tidy,
                   lighting was warm, and the overall setup felt premium. Staff members were attentive without being intrusive, which I really appreciated.”
                </p>
              </div>
              
            </div>
    )
}
export default Mockreview;
