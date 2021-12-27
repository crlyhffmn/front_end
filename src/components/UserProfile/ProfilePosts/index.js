import React, {useEffect} from "react";
import axios from "axios";

const ProfilePosts = () => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(/*AxiosCall*/).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="container">
      <div
        style={{
          border: "1px solid #C4C4C4",
          height: "500px",
          marginBottom: "50px"
        }}
      >
        {/* <h1>{post.title}</h1>
        <p>{post.body}</p> */}
      </div>
    </div>
  );
};
export default ProfilePosts;
