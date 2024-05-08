export default function Profile({ image, name, title, isNew }) {
	return (
		<div className="profile">
			<img className="photo" src={image} alt="프로필 이미지" />
			{/* isNew가 true인 경우만 해당 태그 보이도록 지정 */}
			{isNew && <span className="new">New</span>}
			<h1>{name}</h1>
			<p>{title}</p>
		</div>
	);
}
