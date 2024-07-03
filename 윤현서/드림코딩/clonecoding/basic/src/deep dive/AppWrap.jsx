import React from "react";

export default function AppWrap() {
	return (
		<div>
			<Navbar>
				<Avatar
					image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					name="Amy"
					size={200}
				/>
				<p>안녕하세요!</p>
			</Navbar>
		</div>
	);
}

function Navbar({ children }) {
	return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
	return (
		<div>
			<img
				src={image}
				alt={`${name}`}
				width={size}
				height={size}
				style={{ borderRadius: "50%" }}
			/>
		</div>
	);
}
