import { useEffect, useState } from "react";
import axios from "axios";

const CommentsSection = ({ boardGameId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/boardgames/${boardGameId}/comments`);
                setComments(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchComments();
    }, [boardGameId]);

    return (
        <div>
          <h3>Comments:</h3>
          {/* <p>Total Comments: {numberOfComments}</p> */}
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.content}</p>
                <p>By: {comment.pseudo}</p> {/* Correctement référencer le nom d'utilisateur */}
              </li>
            ))}
          </ul>
        </div>
      );
};

export default CommentsSection;
