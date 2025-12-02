import React, {useState} from "react";

const FeedbackSystem = () => {

 const [feedback, setFeedback] = useState([
    { reviewName: "Readability", upvote: 0, downvote: 0 },
    { reviewName: "Performance", upvote: 0, downvote: 0 },
    { reviewName: "Security", upvote: 0, downvote: 0 },
    { reviewName: "Documentation", upvote: 0, downvote: 0 },
    { reviewName: "Testing", upvote: 0, downvote: 0 }
  ]);

  const handleVote = (index, type) => { 
    const newFeedback = [...feedback]; 
   if (type === "upvote") {
    newFeedback[index].upvote += 1; 
    } else { 
      newFeedback[index].downvote += 1; 
    } 
    setFeedback(newFeedback); 
    };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
         {feedback.map((item, index) => (
        <div className="pa-10 w-300 card">
          <h2>{item.reviewName}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button className="py-10 px-15" data-testid={`upvote-btn-${index}`} onClick={() => handleVote(index, "upvote")}>
              👍 Upvote
            </button>
            <button className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`} onClick={() => handleVote(index, "downvote")}>
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
            Upvotes: <strong>{item.upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
            Downvotes: <strong>{item.downvote}</strong>
          </p>
        </div>
         ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
