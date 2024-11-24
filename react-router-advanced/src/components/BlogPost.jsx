import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
    const { id } = useParams();
    return <div>Displaying post with ID: {id}</div>;
};

export default BlogPost;