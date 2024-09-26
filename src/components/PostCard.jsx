import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{parse(content)}</p>
      </div>
    </Link>
  );
}

export default PostCard;

PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
