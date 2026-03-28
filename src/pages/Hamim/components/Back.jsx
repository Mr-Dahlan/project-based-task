import {Link} from "react-router-dom";
import {FaHome} from 'react-icons/fa'; 

export default function Back() {
	return (
		<Link to="/">
			<div className="w-16 h-16 flex justify-center items-center z-100 bg-black/70 rounded-full fixed bottom-0 right-0 m-2">
				<FaHome/>
			</div>
		</Link>
	)
}
