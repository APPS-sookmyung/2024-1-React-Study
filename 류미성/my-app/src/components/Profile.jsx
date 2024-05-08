export default function Profile({ image, name, title }) {
	return (
		<div className="profile">
			<img className="photo" src={image} alt="프로필 이미지" />
			<h1>{name}</h1>
			<p>{title}</p>
		</div>
	);
}
