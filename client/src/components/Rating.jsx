function Rating({ rating }) {   
    return (
        <div className="flex space-x-1 text-yellow-500">
            {[1,2,3,4,5].map((star) => (
                <span key={star}>{rating >= star ? "★" : "☆"}</span>
            ))}
        </div>
    );
}

export default Rating;