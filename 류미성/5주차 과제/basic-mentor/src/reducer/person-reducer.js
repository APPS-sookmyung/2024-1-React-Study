function personReducer(person, action) {
	switch (action.type) {
		case "update": {
			const { prev, current } = action;
			return {
				...person,
				mentors: person.mentors.map((mentor) => {
					if (mentor.name === prev) {
						return { ...mentor, name: current };
					}
					return mentor;
				}),
			};
		}

		case "added": {
			const { name, title } = action;
			return { ...person, mentors: [{ name, title }, ...person.mentors] };
		}

		case "deleted": {
			return { ...person, mentors: person.mentors.filter((m) => m.name !== action.mname) };
		}

		default: {
			throw Error(`알수 없는 액션 타입이다: ${action.type}`);
		}
	}
}
