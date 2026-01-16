import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState([]);
  const [Hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || review.length < 5) return;

    const newReview = {
      id: Date.now(),
      rating,
      review,
      name: name || "Anonymous",
      email: email || "Anonymous",
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);

    // reset
    setRating(0);
    setReview("");
    setName("");
    setEmail("");
  };

  return (
    <div className="h-[120vh] w-full bg-stone-200/50 pt-12">
      <div className="feedback-container mx-auto flex flex-col items-center justify-center gap-4 lg:max-w-[70%]">

        {/* HEADER */}
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-[17px] text-amber-500 font-lato ">Feedback & Ratings</h1>
          <h1 className="text-6xl font-semibold ">What Our Customer Say</h1>
          <h2 className="font-lato text-lg text-stone-500 pb-8">
            Your feedback helps us grow. Share your experience and help others make informed decisions.
          </h2>
        </div>

        {/* STATS + BARS */}
        <div className="flex pb-10 flex-wrap items-center justify-center gap-4 lg:flex-row">

          <div className="flex h-[120px] w-[400px] flex-col items-center justify-center gap-2 rounded-lg border border-stone-200 bg-orange-100">
            <h1 className="text-4xl font-semibold">
              {(reviews.length > 0
                ? (reviews.reduce((a, b) => a + b.rating, 0) / reviews.length).toFixed(1)
                : 5)}
              <span className="text-2xl">⭐</span>
            </h1>
            <h2 className="font-lato text-stone-700">Average rating</h2>
          </div>

          <div className="flex h-[120px] w-[400px] flex-col items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white/50">
            <h2 className="text-4xl font-semibold">{reviews.length}</h2>
            <span className="font-lato text-stone-700">Total Reviews</span>
        
          </div>
          <div className="flex flex-col h-[120px] w-[400px] p-2 items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white/50">
            <div className="flex  w-full items-center justify-center gap-2">
            <h1>5⭐</h1>
            <div className="w-full rounded-full h-[10px] bg-stone-200">
              <div className="h-full rounded-full bg-yellow-400" style={{width: "75%"}}>
              </div>

            </div>
            <h2>75%</h2>
            </div>
            <div className="flex  w-full items-center justify-center gap-2">
            <h1>4⭐</h1>
            <div className="w-full rounded-full h-[10px] bg-stone-200">
              <div className="h-full rounded-full bg-yellow-400" style={{width: "25%"}}></div>

            </div>
            <h2>25%</h2>
            </div>
            <div className="flex  w-full items-center justify-center gap-2">
            <h1>3⭐</h1>
            <div className="w-full rounded-full h-[10px] bg-stone-200">
              <div className="h-full rounded-full bg-yellow-400" style={{width: "0%"}}></div>

            </div>
            <h2>0%</h2>
            </div>
          </div>
          
        </div>


        {/* FORM */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-20 w-[99%]">

          <form onSubmit={handleSubmit} className="flex flex-col bg-white/50 p-6 border border-stone-200 gap-4 rounded-lg w-full max-w-[500px]">

            <div>
              <h1 className="text-xl font-semibold">Write a Review</h1>
              <span className="text-stone-600 font-lato">Share your thoughts</span>
            </div>

            {/* STAR PICKER */}
            <div>
              <h2 className="text-base font-lato mb-1">Your Rating <b className="text-red-500">*</b></h2>
              <div className="flex gap-1 text-2xl cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
        key={star}
        onClick={() => setRating(star)}
        onMouseEnter={() => setRating(star)}
        onMouseLeave={() => setRating(rating)}
        className={
          star <= (Hover || rating)
            ? "text-yellow-400"
            : "text-gray-300"
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
  viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 .587l3.668 7.568L24 9.748l-6 5.837
  1.417 8.251L12 19.771l-7.417 4.065L6 15.585
  0 9.748l8.332-1.593L12 .587z"/>
</svg>

      </span>
                  
                ))}
              </div>
            </div>

            {/* REVIEW */}
            <div>
              <h3 className="text-base font-lato">Your Review <b className="text-red-500">*</b></h3>
              <textarea
                className="w-full font-lato h-[130px] p-2 border border-stone-200"
                placeholder="Tell us about your experience"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />

            </div>
             <div className=" gap-2">
                <h2>Would you recommend us?</h2>
            <p className="flex gap-4 font-lato text-stone-700">
                <button className="p-2 border cursor-pointer hover:text-yellow-400 font-lato border-stone-200 rounded">Yes</button>
                <button className="p-2 border cursor-pointer hover:text-red-400 font-lato border-stone-200 rounded">No</button></p>
</div>
            {/* Name */}
            <div>
              <h4 className="font-lato">Your Name</h4>
              <input
                className="w-full font-lato p-2 border border-stone-200 rounded"
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
                className="w-full font-lato p-2 border border-stone-200 rounded"
                type="email"
                placeholder="priyanshu@example.com (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 font-lato rounded">Submit Review</button>
              <button className=" text-black border border-stone-400 p-2 font-lato rounded">Leave a Google Review</button>
            </div>
          </form>

          {/* RECENT REVIEWS */}
          <div className="flex flex-col w-[52%]">
            <h1 className="text-xl font-semibold">
              Recent Reviews <span className="text-sm">({reviews.length})</span>
            </h1>

            {reviews.length === 0 && (
              <p className="text-stone-500 font-lato mt-2">No reviews yet</p>
            )}

            {reviews.map((r) => (
              <div key={r.id} className="border p-3 rounded my-2 bg-white">
                <div className="flex justify-between text-sm">
                  <span>{r.name}</span>
                  <span>{r.date}</span>
                </div>
                <div className="text-yellow-400">{"⭐".repeat(r.rating)}</div>
                <p className="font-lato mt-1">{r.review}</p>
              </div>
            ))}
          
          <div className="flex flex-col gap-6 mt-4">

  {/* Review 1 */}
  <div className="border border-stone-200 p-3 rounded bg-white/50">
    <div className="justify-between flex text-sm">
      <span className=" text-lg">customer 1</span>
      <span>⭐⭐⭐⭐⭐</span>
    </div>
    <div className="text-sm font-lato">jan 14, 2026</div>
    <p className="font-lato">
      "Absolutely fantastic service! The team went above and beyond to help me.
      Highly recommend to anyone looking for quality."
    </p>
  </div>

  {/* Review 2 */}
  <div className="border p-3 rounded border-stone-200 bg-white/50">
    <div className="flex justify-between text-sm">
      <span className="text-lg">Michael Chen</span>
      <span>⭐⭐⭐⭐☆</span>
    </div>
    <div className="text-sm font-lato">jan 14, 2026</div>
    <p className="font-lato">
      "Great experience overall. Quick response times and professional staff. Will
      definitely be coming back."
    </p>
  </div>

  {/* Review 3 */}
  <div className="border p-3 rounded border-stone-200 bg-white/50">
    <div className="flex justify-between text-sm">
      <span className="text-lg">Emily Rodriguez</span>
      <span>⭐⭐⭐⭐⭐</span>
    </div>
    <div className="text-sm font-lato">jan 14, 2026</div>
    <p className="font-lato">
      "Exceeded all my expectations! The attention to detail and customer care
      was remarkable. A truly five-star experience."
    </p>
  </div>
  {/* Review 4 */}
<div className="border p-3 rounded border-stone-200 bg-white/50">
  <div className="flex justify-between text-sm">
    <span className="text-lg">David Miller</span>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
  <div className="text-sm font-lato">jan 14, 2026</div>
  <p className="font-lato">
    "Wonderful atmosphere and great service! Had a minor delay, but the staff handled 
    it professionally. Will definitely visit again."
  </p>
</div>


</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
