import React, {useEffect} from "react";
import axios from "axios";

const ProfilePosts = () => {
  // const [post, setPost] = React.useState(null);

  // useEffect(() => {
  //   axios.get(/*DatabaseUrl/Posts*/).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;

  return (
    <div className="postContainer">
      <div
        style={{
          border: "1px solid #C4C4C4",
          height: "100%",
          marginBottom: "50px",
          marginTop: "15px"
        }}
      >
        {/* <h1>
        posts.map ( post => {
          return <Post title={post.title} />
        })
        </h1>
        <p>posts.map ( post => {
          return <Post body={post.body} /> */}
      </div>
    </div>
  );
};
export default ProfilePosts;
