import React from "react";

const Avartar = ({ image, isNew }) => {
	return (
		<div className="avartar">
			<img className="photo" src={image} alt="프로필 이미지" />
			{/* isNew가 true인 경우만 해당 태그 보이도록 지정 */}
			{isNew && <span className="new">New</span>}
		</div>
	);
};

export default Avartar;
