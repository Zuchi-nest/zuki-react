import axios from "axios";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch("http://localhost:3001/blogs/" + id);


  const handleClick = () => {
    axios.delete("http://localhost:3001/delete/" + id)
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && (
        <article>
          <h2>{ data.title }</h2>
          <p>Written by { data.author }</p>
          <div>{ data.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
