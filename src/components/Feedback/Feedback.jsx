import { useState } from 'react'
import Mockreview from './Mockreview'
import {Svgrecommend} from './Svg-all'



const Feedback = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reviews, setReviews] = useState([])
  const [Hover, setHover] = useState(0)
  const [ison, setIsOn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!rating || review.length < 5) return

    const newReview = {
      id: Date.now(),
      rating,
      review,
      name: name || 'Anonymous',
      email: email || 'Anonymous',
      date: new Date().toLocaleDateString(),
    }

    setReviews([newReview, ...reviews])

    // reset
    setRating(0)
    setReview('')
    setName('')
    setEmail('')
  }

  return (
    <div className="lg:h-[122vh] h-auto lg:w-full bg-stone-200/50 pb-10 pt-12">
      <div className="mx-auto px-4 lg:px-0 flex flex-col items-center justify-center gap-4 lg:max-w-[70%]">
        {/* HEADER */}
        <div className="flex flex-col items-center lg:justify-center lg:gap-2 gap-4">
          <h1 className="font-lato  lg:text-[17px] text-amber-500">
            Feedback & Ratings
          </h1>
          <h1 className="lg:text-6xl text-center lg:text-start text-2xl font-semibold">What Our Customer Say</h1>
          <h2 className="font-lato lg:text-start text-center pb-8 text-lg text-stone-500">
            Your feedback helps us grow. Share your experience and help others
            make informed decisions.
          </h2>
        </div>

        {/* STATS + BARS */}
        <div className="flex flex-wrap items-center justify-center gap-4 pb-10 lg:flex-row">
          <div className="flex h-[120px] w-[300px] flex-col items-center justify-center gap-2 rounded-lg border border-stone-200 bg-orange-100">
            <h1 className="text-4xl font-semibold">
              {reviews.length > 0
                ? (
                    reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                  ).toFixed(1)
                : 5}
              <span className="text-2xl">⭐</span>
            </h1>
            <h2 className="font-lato text-stone-700">Average rating</h2>
          </div>

          <div className="flex h-[120px] w-[300px] flex-col items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white/50">
            <h2 className="text-4xl font-semibold">{reviews.length}</h2>
            <span className="font-lato text-stone-700">Total Reviews</span>
          </div>
          <div className="flex h-[120px] w-[300px] flex-col items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white/50 p-2">
            <div className="flex w-full items-center justify-center gap-2">
              <h1>5⭐</h1>
              <div className="h-[10px] w-full rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <h2>75%</h2>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <h1>4⭐</h1>
              <div className="h-[10px] w-full rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{ width: '25%' }}
                ></div>
              </div>
              <h2>25%</h2>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <h1>3⭐</h1>
              <div className="h-[10px] w-full rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <h2>0%</h2>
            </div>
          </div>
          {/* recommended */}
          <div className="flex h-[120px] w-[300px] flex-col items-center justify-center rounded-lg border border-green-400 bg-green-100/50 p-2">
          <div className="flex items-center p-2 justify-center gap-2">
            <Svgrecommend/>
  <h1 className="text-3xl text-green-700 pb-3">75%</h1>
  </div>
               <h2 className="font-lato text-[15px] text-stone-500"> Would Recommend</h2>
               <h2 className="font-lato text-[13px] text-stone-500"> 3 of 4 reviews</h2>
          </div>
        </div>

        {/* FORM */}
        <div className="flex lg:w-[99%] flex-col lg:items-start items-center md:items-center justify-center gap-20 lg:flex-row">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-[500px]  flex-col gap-4 rounded-lg border border-stone-200 bg-white/50 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="bg-amber-200/50 p-2 rounded-lg">  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="currentColor"
    className="text-amber-500"
  >
    <path d="M22.05 2.43c-.38-.33-.94-.43-1.45-.24L2.7 9.3c-.6.23-.98.8-.95 1.44.03.64.46 1.17 1.08 1.36l4.73 1.46 1.81 5.73c.2.63.75 1.07 1.41 1.09h.05c.64 0 1.2-.4 1.44-1.01l2.05-5.19 4.93 3.65c.26.19.56.29.87.29.23 0 .46-.05.67-.15.51-.24.85-.73.9-1.29l2.1-18.15c.06-.52-.15-1.03-.54-1.36zM10.94 15.13l-.35 3.41-1.18-3.74 8.63-7.92-7.1 8.25z" />
  </svg> </div>
              <h1 className="flex flex-col text-xl w-full font-semibold">Write a Review
              <b className="font-lato text-[15px] text-stone-600"> 
                Share your thoughts</b>
              </h1>
            </div>

            {/* STAR PICKER */}
            <div>
              <h2 className="font-lato mb-1 text-base">
                Your Rating <b className="text-red-500">*</b>
              </h2>
              <div className="flex cursor-pointer gap-1 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setRating(star)}
                    onMouseLeave={() => setRating(rating)}
                    className={
                      star <= (Hover || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 .587l3.668 7.568L24 9.748l-6 5.837
  1.417 8.251L12 19.771l-7.417 4.065L6 15.585
  0 9.748l8.332-1.593L12 .587z"
                      />
                    </svg>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex lg:w-9/12 items-center justify-between rounded-lg border border-stone-200 bg-stone-200/30 p-4">
           {ison ? ( <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="green"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    
  >
    <path d="M4 10h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
    <path d="M22 11a2.5 2.5 0 0 0-2.5-2.5h-5.2l.8-3.9a1 1 0 0 0-.3-.9L13.7 2 7.6 8.1A2 2 0 0 0 7 9.6V20a2 2 0 0 0 2 2h7a3 3 0 0 0 3-3l1-6.5z" />
  </svg> ):(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="gray"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    
  >
    <path d="M4 10h3a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
    <path d="M22 11a2.5 2.5 0 0 0-2.5-2.5h-5.2l.8-3.9a1 1 0 0 0-.3-.9L13.7 2 7.6 8.1A2 2 0 0 0 7 9.6V20a2 2 0 0 0 2 2h7a3 3 0 0 0 3-3l1-6.5z" />
  </svg>
  )}
              <h2 className="font-lato items-center text-[15px]">
                Would you recommend us?
              </h2>
              <button
                onClick={() => setIsOn(!ison)}
                className=""
              >
                {ison ? (
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="24" rx="12" fill="#22C55E" />
                    <circle cx="36" cy="12" r="9" fill="#FFFFFF" />
                  </svg>
                ) : (
                  <svg width="48" height="24" viewBox="0 0 48 24">
                    <rect width="48" height="24" rx="12" fill="#E5E7EB" />
                    <circle cx="12" cy="12" r="9" fill="#FFFFFF" />
                  </svg>
                )}
              </button>
            </div>

            {/* REVIEW */}
            <div>
              <h3 className="font-lato text-base">
                Your Review <b className="text-red-500">*</b>
              </h3>
              <textarea
                className="font-lato h-[130px] w-full border border-stone-200 bg-stone-200/30 p-2"
                placeholder="Tell us about your experience"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            {/* Name */}
            <div>
              <h4 className="font-lato">Your Name</h4>
              <input
                className="font-lato w-full rounded border border-stone-200 p-2"
                type="text"
                placeholder="priyanshu verma (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <h5 className="font-lato">Your Email</h5>
              <input
                className="font-lato w-full rounded border border-stone-200 p-2"
                type="email"
                placeholder="priyanshu@example.com (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <button className="font-lato rounded bg-amber-500 p-2 text-white hover:bg-amber-600">
                Submit Review
              </button>
              <button className="font-lato rounded border border-stone-400 p-2 text-black">
                Leave a Google Review
              </button>
            </div>
          </form>

          {/* RECENT REVIEWS */}
          <div className="flex w-[52%] flex-col">
            <h1 className="text-xl font-semibold">
              Recent Reviews <span className="text-sm">({reviews.length})</span>
            </h1>

           

            {reviews.map((r) => (
              <div key={r.id} className="my-2 rounded border bg-white p-3">
                <div className="flex justify-between text-sm">
                  <span>{r.name}</span>
                  <span>{r.date}</span>
                </div>
                <div className="text-yellow-400">{'⭐'.repeat(r.rating)}</div>
                <p className="font-lato mt-1">{r.review}</p>
              </div>
            ))}

             <Mockreview/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
