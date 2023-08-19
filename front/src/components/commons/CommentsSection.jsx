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
    // const numberOfComments = comments.length;

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

//TEST
export const getNumberOfComments = (boardGameId) => {
    // Ici, vous pouvez réutiliser le même code pour récupérer les commentaires
    // et retourner le nombre de commentaires
    return axios.get(`http://localhost:5000/boardgames/${boardGameId}/comments`)
        .then((res) => res.data.length)
        .catch((err) => {
            console.log(err);
            return 0;
        });
};
//FIN TEST

export default CommentsSection;
