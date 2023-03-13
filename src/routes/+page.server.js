import { z } from "zod";

const validSchema = z.object({
	firstName: z.string().min(1, { message: "First Name cannot be empty" }),
	lastName: z.string().min(1, { message: "Last Name cannot be empty" }),
	email: z.string().email({ message: "Looks like this is not an email" }),
	password: z.string().min(1, { message: "Password cannot be empty" }),
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const firstName = form.get("firstName");
		const lastName = form.get("lastName");
		const email = form.get("email");
		const password = form.get("password");

		try {
			validSchema.parse({ firstName, lastName, email, password });
		} catch (error) {
			const { fieldErrors: errors } = error.flatten();
			return { data: { firstName, lastName, email }, errors };
		}
	},
};
